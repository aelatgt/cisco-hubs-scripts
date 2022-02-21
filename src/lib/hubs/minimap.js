import { registerDependency } from "./utils"

const MINIMAP_LAYER = 20

AFRAME.registerSystem("minimap", {
  init: function () {
    this.renderTarget = new THREE.WebGLRenderTarget(1024, 1024)
    this.camera = new THREE.OrthographicCamera()
    this.camera.zoom = 0.05
    this.camera.position.y = 200
    this.camera.rotation.x = -Math.PI / 2
    this.camera.updateMatrix()
    this.camera.updateProjectionMatrix()
    this.camera.layers.enable(MINIMAP_LAYER)

    const avatarRig = document.querySelector("#avatar-rig")
    avatarRig.setObject3D("minimapCamera", this.camera)

    const minimapMaterial = new THREE.MeshBasicMaterial({
      map: this.renderTarget.texture,
      depthTest: false,
    })
    const minimap = new THREE.Mesh(new THREE.PlaneGeometry(), minimapMaterial)
    minimap.renderOrder = 1
    minimap.position.z = -2

    const avatarPOV = document.querySelector("#avatar-pov-node")
    avatarPOV.setObject3D("minmap", minimap)
  },
  tick: function () {
    APP.scene.renderer.setRenderTarget(this.renderTarget)
    APP.scene.renderer.render(APP.scene.object3D, this.camera)
    APP.scene.renderer.setRenderTarget(null)
  },
})

AFRAME.registerComponent("minimap-avatar-indicator", {
  dependencies: ["player-info"],
  init: function () {
    // Set up indicator dot
    const indicatorDot = new THREE.Mesh(new THREE.CircleGeometry(1, 16), new THREE.MeshBasicMaterial({ color: "blue" }))
    indicatorDot.rotation.x = -Math.PI / 2
    indicatorDot.position.y = 100
    indicatorDot.renderOrder = 1
    indicatorDot.layers.set(MINIMAP_LAYER)
    this.el.setObject3D("indicatorDot", indicatorDot)

    // Set up displayName text
    this.text = document.createElement("a-entity")
    this.text.setAttribute("geometry", { primitive: "plane" })
    this.text.setAttribute("material", { transparent: true, opacity: 0 })
    this.text.setAttribute("text", { color: "black", value: "", align: "center", width: 8 })
    this.text.object3D.scale.setScalar(10)
    this.text.object3D.position.y = 100
    this.text.object3D.position.z = -5
    this.text.object3D.rotation.x = -Math.PI / 2
    this.el.appendChild(this.text)

    this.el.addEventListener("model-loaded", this.updateText.bind(this))
    this.el.sceneEl.addEventListener("presence_updated", this.updateText.bind(this))
    this.el.sceneEl.addEventListener("stateadded", this.updateText.bind(this))
    this.el.sceneEl.addEventListener("stateremoved", this.updateText.bind(this))
    this.updateText()
  },
  updateText: function () {
    const playerInfo = this.el.components["player-info"]
    if (!playerInfo) return
    this.text.setAttribute("text", { value: playerInfo.displayName })
  },
})

registerDependency("networked-avatar", "minimap-avatar-indicator")
