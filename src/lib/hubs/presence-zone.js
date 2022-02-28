import "./hue-lights"
import "./page-visibility"
import { registerDependency } from "./utils"

const zoneColors = {
  social: "orange",
  meeting: "blue",
  self: "green",
}

AFRAME.registerSystem("presence-zone", {
  dependencies: ["hue-lights"],
  init: function () {
    this.entities = new Set()
    this.activeZone = null
    this.activeSize = 0
    this.lightSystem = this.el.systems["hue-lights"]
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

    if (topZoneEl) {
      const topZoneComponent = topZoneEl.components["presence-zone"]
      const zoneType = topZoneComponent.data.type
      const zoneIsActive = topZoneComponent.hasActivePeers()

      brightness = zoneIsActive ? 100 : 50
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
  },
  tick: function () {
    for (let zoneEl of this.zoneSystem.entities) {
      const zone = zoneEl.components["presence-zone"]
      if (zone.box.containsPoint(this.el.object3D.position)) {
        if (!this.isSelf) {
          zone.peers.add(this.el)
        }
      } else {
        if (!this.isSelf) {
          zone.peers.delete(this.el)
        }
      }
    }
  },
})

AFRAME.GLTFModelPlus.registerComponent("presence-zone", "presence-zone")
registerDependency("networked-avatar", "presence-zone-member")

// Create a zone around user's own avatar

const avatarRig = APP.scene.querySelector("#avatar-rig")
const selfZoneEl = document.createElement("a-entity")
selfZoneEl.setAttribute("presence-zone", { type: "self" })
selfZoneEl.setAttribute("scale", "3 3 3")
avatarRig.appendChild(selfZoneEl)
