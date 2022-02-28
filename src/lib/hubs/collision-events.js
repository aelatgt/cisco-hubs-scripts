AFRAME.registerComponent("collision-events", {
  schema: {
    enter: { type: "string" },
    leave: { type: "string" },
  },
  init: function () {
    const min = new THREE.Vector3()
    const max = new THREE.Vector3()

    min.copy(this.el.object3D.scale).multiplyScalar(-0.5).add(this.el.object3D.position)
    max.copy(this.el.object3D.scale).multiplyScalar(0.5).add(this.el.object3D.position)
    this.box = new THREE.Box3(min, max)

    this.avatarRig = document.querySelector("#avatar-rig")
    this.prevContainsPlayer = this.getContainsPlayer()
  },
  getContainsPlayer: function () {
    return this.box.containsPoint(this.avatarRig.object3D.position)
  },
  tick: function () {
    const containsPlayer = this.getContainsPlayer()

    if (!this.prevContainsPlayer && containsPlayer) {
      this.el.sceneEl.emit(this.data.enter)
    }

    if (this.prevContainsPlayer && !containsPlayer) {
      this.el.sceneEl.emit(this.data.leave)
    }

    this.prevContainsPlayer = containsPlayer
  },
})

AFRAME.GLTFModelPlus.registerComponent("collision-events", "collision-events")
