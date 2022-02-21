import "./hue-lights"
import "./page-visibility"
import { registerDependency } from "./utils"

const zoneColors = {
  social: "orange",
  meeting: "blue",
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
      if (zoneComponent.members.size > 0) {
        if (!topZoneEl) {
          topZoneEl = zoneEl
        } else {
          const topZoneComponent = topZoneEl.components["presence-zone"]
          const hasHigherPriority = zoneComponent.priority > topZoneComponent.priority
          const hasEqualPriority = zoneComponent.priority === topZoneComponent.priority
          const hasHigherActivity = zoneComponent.hasActiveMembers() > topZoneComponent.hasActiveMembers()
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
      const zoneIsActive = topZoneComponent.hasActiveMembers()

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
    case "social":
      return 2
    case "meeting":
      return 1
    default:
      return 0
  }
}

AFRAME.registerComponent("presence-zone", {
  schema: {
    type: { type: "string" },
  },
  init: function () {
    const min = new THREE.Vector3()
    const max = new THREE.Vector3()

    min.copy(this.el.object3D.scale).multiplyScalar(-0.5).add(this.el.object3D.position)
    max.copy(this.el.object3D.scale).multiplyScalar(0.5).add(this.el.object3D.position)
    this.box = new THREE.Box3(min, max)

    this.members = new Set()
    this.priority = getPriority(this.data.type)

    this.el.sceneEl.systems["presence-zone"].register(this.el)
  },
  hasActiveMembers() {
    for (let memberEl of this.members) {
      const { hidden } = memberEl.getAttribute("networked-page-visibility")
      if (!hidden) return true
    }
    return false
  },
})

AFRAME.registerComponent("presence-zone-member", {
  init: function () {
    this.zoneSystem = this.el.sceneEl.systems["presence-zone"]
    this.zones = new Set()
  },
  tick: function () {
    for (let zoneEl of this.zoneSystem.entities) {
      const zone = zoneEl.components["presence-zone"]
      if (zone.box.containsPoint(this.el.object3D.position)) {
        zone.members.add(this.el)
        this.zones.add(zone)
      } else {
        zone.members.delete(this.el)
        this.zones.delete(zone)
      }
    }
  },
})

AFRAME.GLTFModelPlus.registerComponent("presence-zone", "presence-zone")
registerDependency("networked-avatar", "presence-zone-member")
