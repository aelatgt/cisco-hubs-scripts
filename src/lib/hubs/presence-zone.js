import "./hue-lights"
import { registerDependency } from "./utils"

AFRAME.registerSystem("presence-zone", {
  dependencies: ["hue-lights"],
  init: function () {
    this.entities = new Set()
    this.activeZone = null
    this.activeSize = 0
    this.lightSystem = this.el.systems["hue-lights"]
    console.log("intitializing presence-zone system")
  },
  register: function (el) {
    this.entities.add(el)
  },
  unregister: function (el) {
    this.entities.delete(el)
  },
  tick: function () {
    let maxSize = 0
    let maxActiveZone = null
    for (let zoneEl of this.entities) {
      const zoneSize = zoneEl.components["presence-zone"].members.size
      if (zoneSize > maxSize) {
        maxSize = zoneSize
        maxActiveZone = zoneEl
      }
    }
    if (maxActiveZone !== this.activeZone || maxSize !== this.activeSize) {
      this.activeZone = maxActiveZone
      this.activeSize = maxSize
      if (maxActiveZone) {
        if (this.lightSystem.enabled) {
          this.lightSystem.lights.set({ brightness: 100, color: maxActiveZone.getAttribute("presence-zone").color })
        }
        console.log(`${maxActiveZone.className} is most active with ${maxSize} members`)
      } else {
        console.log("No active zones")
      }
    }
  },
})

AFRAME.registerComponent("presence-zone", {
  schema: {
    color: { type: "color" },
  },
  init: function () {
    const min = new THREE.Vector3()
    const max = new THREE.Vector3()

    min.copy(this.el.object3D.scale).multiplyScalar(-0.5).add(this.el.object3D.position)
    max.copy(this.el.object3D.scale).multiplyScalar(0.5).add(this.el.object3D.position)
    this.box = new THREE.Box3(min, max)

    this.members = new Set()

    this.el.sceneEl.systems["presence-zone"].register(this.el)
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
