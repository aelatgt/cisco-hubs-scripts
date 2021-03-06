import "./hue-lights"
import "./page-visibility"
import "./web-notifications"
import { registerDependency } from "./utils"

const zoneColors = {
  social: "orange",
  meeting: "blue",
  self: "green",
}

AFRAME.registerSystem("presence-zone", {
  dependencies: ["hue-lights", "web-notifications"],
  init: function () {
    this.entities = new Set()
    this.activeZone = null
    this.activeSize = 0
    this.lightSystem = this.el.systems["hue-lights"]
    this.webNotificationsSystem = this.el.systems["web-notifications"]
    console.log("intitializing presence-zone system")

    this.brightness = null
    this.color = null
  },
  register: function (el) {
    this.entities.add(el)
  },
  unregister: function (el) {
    this.entities.delete(el)
  },
  tick: function () {
    // Solve for color and brightness based on activity in each zone
    let topZoneEl
    for (let zoneEl of this.entities) {
      const zoneComponent = zoneEl.components["presence-zone"]
      if (zoneComponent.peers.size > 0) {
        if (!topZoneEl) {
          topZoneEl = zoneEl
        } else {
          const topZoneComponent = topZoneEl.components["presence-zone"]
          const hasHigherPriority = zoneComponent.priority > topZoneComponent.priority
          const hasEqualPriority = zoneComponent.priority === topZoneComponent.priority
          const hasHigherActivity = zoneComponent.hasActivePeers() > topZoneComponent.hasActivePeers()
          if (hasHigherPriority || (hasEqualPriority && hasHigherActivity)) {
            topZoneEl = zoneEl
          }
        }
      }
    }

    let brightness
    let color
    let zoneType
    let zoneIsActive

    if (topZoneEl) {
      const topZoneComponent = topZoneEl.components["presence-zone"]
      zoneType = topZoneComponent.data.type
      zoneIsActive = topZoneComponent.hasActivePeers()

      brightness = zoneIsActive ? 100 : 30
      color = zoneColors[zoneType]
    } else {
      color = "black"
      brightness = 0
    }

    if (brightness !== this.brightness || color !== this.color) {
      this.color = color
      this.brightness = brightness
      if (this.lightSystem.enabled) {
        console.log("setting", color, brightness)
        this.lightSystem.lights.set({ brightness, color })
      }
      if (topZoneEl) {
        const activeStr = zoneIsActive ? "active" : "inactive"
        let message
        if (zoneType === "self") message = `An ${activeStr} user is nearby`
        else message = `An ${activeStr} user is in the ${zoneType} area`
        if (!document.hasFocus()) {
          this.webNotificationsSystem.notify(message)
        }
      }
    }
  },
})

function getPriority(type) {
  switch (type) {
    case "self":
      return 3
    case "social":
      return 2
    case "meeting":
      return 1
    default:
      return 0
  }
}

const vA = new THREE.Vector3()
const vB = new THREE.Vector3()

AFRAME.registerComponent("presence-zone", {
  schema: {
    type: { type: "string" },
  },
  init: function () {
    this.box = new THREE.Box3()

    this.peers = new Set()
    this.priority = getPriority(this.data.type)

    this.el.sceneEl.systems["presence-zone"].register(this.el)
  },
  tick() {
    this.el.object3D.getWorldScale(vA)
    this.el.object3D.getWorldPosition(vB)
    this.box.min.copy(vA).multiplyScalar(-0.5).add(vB)
    this.box.max.copy(vA).multiplyScalar(0.5).add(vB)
  },
  hasActivePeers() {
    for (let memberEl of this.peers) {
      const { hidden } = memberEl.getAttribute("networked-page-visibility")
      if (!hidden) return true
    }
    return false
  },
})

AFRAME.registerComponent("presence-zone-member", {
  init: function () {
    this.zoneSystem = this.el.sceneEl.systems["presence-zone"]
    this.isSelf = this.el === APP.scene.querySelector("#avatar-rig")
    this.zones = new Set()
  },
  tick: function () {
    for (let zoneEl of this.zoneSystem.entities) {
      const zone = zoneEl.components["presence-zone"]
      if (zone.box.containsPoint(this.el.object3D.position)) {
        if (!this.isSelf) {
          zone.peers.add(this.el)
          this.zones.add(zone)
        }
      } else {
        if (!this.isSelf) {
          zone.peers.delete(this.el)
          this.zones.delete(zone)
        }
      }
    }
  },
  remove: function () {
    for (let zone of this.zones) {
      zone.peers.delete(this.el)
    }
  },
})

AFRAME.GLTFModelPlus.registerComponent("presence-zone", "presence-zone")
registerDependency("networked-avatar", "presence-zone-member")

// Create a zone around user's own avatar

const avatarRig = APP.scene.querySelector("#avatar-rig")
const selfZoneEl = document.createElement("a-entity")
selfZoneEl.setAttribute("presence-zone", { type: "self" })
selfZoneEl.setAttribute("scale", "5 5 5")
avatarRig.appendChild(selfZoneEl)
