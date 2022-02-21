import * as Excalidraw from "https://www.aelatgt.org/excalidraw/static/js/excalidraw.hubs.min.js"

AFRAME.registerComponent("excalidraw", {
  schema: {
    link: { type: "string" },
  },
  init: function () {
    this.el.setAttribute("geometry", { primitive: "plane", width: 2, height: 1 })
    this.el.setAttribute("material", { color: "white", shader: "flat", side: "double" })
    this.mesh = this.el.getObject3D("mesh")

    this.root = document.createElement("div")
    this.root.style.position = "absolute"
    this.root.style.width = 1024 + "px"
    this.root.style.height = 512 + "px"
    this.root.style.zIndex = -1 // Hide in background
    document.body.appendChild(this.root)

    this.unmount = Excalidraw.mount(this.root, this.data.link)
    this.lastUpdateTime = 0
  },
  _tryInitCanvas: function () {
    const canvas = this.root.querySelector("canvas")
    if (canvas) {
      this.canvas = canvas
      this.texture = new THREE.CanvasTexture(canvas)
      this.texture.encoding = THREE.sRGBEncoding
      this.mesh.material.map = this.texture
      this.mesh.material.needsUpdate = true
    }
  },
  tick: function (time) {
    if (!this.texture) {
      this._tryInitCanvas()
    } else if (time - this.lastUpdateTime > 100) {
      this.texture.needsUpdate = true
      this.lastUpdateTime = time
    }
  },
  remove: function () {
    this.root.remove()
    this.unmount()
  },
})

AFRAME.GLTFModelPlus.registerComponent("excalidraw", "excalidraw")

APP.utils.registerContentType(/^https:\/\/www.aelatgt.org\/excalidraw\//, (el, src) => {
  el.setAttribute("geometry", { primitive: "plane" })
  el.setAttribute("excalidraw", { link: src })
})
