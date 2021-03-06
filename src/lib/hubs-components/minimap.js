import { registerDependency } from "./utils"
import "./scene-overlay"
import "./page-visibility"
import "../webcomponent/minimap-widget"

const MINIMAP_LAYER = 20
const SIZE = 256
const tmpSize = new THREE.Vector2()

AFRAME.registerSystem("minimap", {
  dependencies: ["scene-overlay"],
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

    const minimapEl = document.createElement("minimap-widget")
    minimapEl.setAttribute("disabled", "")
    minimapEl.style.position = "absolute"
    minimapEl.style.bottom = 0
    minimapEl.style.left = 0
    this.context = minimapEl.canvas.getContext("2d")
    this.collapsed = true
    minimapEl.addEventListener("collapse", (e) => {
      this.collapsed = e.detail.collapsed
    })
    minimapEl.addEventListener("changezoom", (e) => {
      const { factor } = e.detail
      this.camera.zoom *= factor
      this.camera.updateProjectionMatrix()
    })

    const avatarModel = avatarRig.querySelector(".model")
    avatarModel.addEventListener(
      "model-loaded",
      () => {
        console.log("enabling minimap")
        minimapEl.removeAttribute("disabled")
      },
      { once: true }
    )

    const sceneOverlayRoot = this.el.sceneEl.systems["scene-overlay"].root
    sceneOverlayRoot.appendChild(minimapEl)
  },
  tick: function () {
    if (this.collapsed) return
    this.renderToCanvas()
  },
  renderToCanvas() {
    const scene = APP.scene.object3D
    const renderer = APP.scene.renderer
    // MODIFY RENDER SETTINGS
    const tmpOnAfterRender = scene.onAfterRender
    delete scene.onAfterRender

    renderer.getSize(tmpSize)
    renderer.setSize(SIZE, SIZE, false)

    renderer.render(scene, this.camera)
    this.context.drawImage(renderer.domElement, 0, 0, SIZE, SIZE)

    // RESTORE RENDER SETTINGS
    scene.onAfterRender = tmpOnAfterRender
    renderer.setSize(tmpSize.x, tmpSize.y, false)
  },
})

AFRAME.registerComponent("minimap-avatar-indicator", {
  dependencies: ["player-info", "networked-page-visibility"],
  init() {
    // Set up indicator dot
    const indicatorDot = new THREE.Mesh(new THREE.CircleGeometry(1, 16), new THREE.MeshBasicMaterial({ color: "hotpink" }))
    indicatorDot.rotation.x = -Math.PI / 2
    indicatorDot.position.y = 100
    indicatorDot.renderOrder = 1
    indicatorDot.layers.set(MINIMAP_LAYER)
    this.el.setObject3D("indicatorDot", indicatorDot)
    this.indicatorDot = indicatorDot
    this.el.addEventListener("visibilitychange", (e) => {
      this.updateIndicatorColor()
    })
    this.updateIndicatorColor()

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

    this.updateText = this.updateText.bind(this)
    this.el.addEventListener("model-loaded", this.updateText)
    this.el.sceneEl.addEventListener("presence_updated", this.updateText)
    this.el.sceneEl.addEventListener("stateadded", this.updateText)
    this.el.sceneEl.addEventListener("stateremoved", this.updateText)
    this.updateText()
  },
  updateText() {
    const playerInfo = this.el.components["player-info"]
    if (!playerInfo) return
    this.text.setAttribute("text", { value: playerInfo.displayName })
  },
  updateIndicatorColor() {
    const { hidden } = this.el.getAttribute("networked-page-visibility")
    this.indicatorDot.material.color.set(hidden ? "red" : "green")
  },
})

registerDependency("networked-avatar", "minimap-avatar-indicator")
