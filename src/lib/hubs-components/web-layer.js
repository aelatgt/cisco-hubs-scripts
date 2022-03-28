const { AFRAME, THREE, Ethereal } = window

/**
 * Creates an HTMLElement `layerEl` and renders it with Ethereal as `layer`
 *
 * Usage: append DOM elements to `rootEl`
 */
AFRAME.registerComponent("web-layer", {
  init: function () {
    this.layerEl = document.createElement("div")
    this.layerEl.style.display = "inline-block"
    this.layerEl.style.width = "max-content"

    // Root element to mount components into
    this.rootEl = document.createElement("div")
    this.layerEl.appendChild(this.rootEl)

    // Stylesheet
    const linkEl = document.createElement("link")
    linkEl.rel = "stylesheet"
    linkEl.href = import.meta.env.DEV
      ? "https://mattrossman.ngrok.io/lib/style.css"
      : "https://www.aelatgt.org/cisco-hubs-scripts/lib/style.css"
    this.layerEl.appendChild(linkEl)
    console.log("adding weblayer stylesheet:", linkEl.href)

    this.layer = new Ethereal.WebLayer3D(this.layerEl, { textureEncoding: THREE.sRGBEncoding, autoRefresh: true })
    this.layer.scale.setScalar(10)
    this.el.setObject3D("webLayer3D", this.layer)
  },
  tick: function () {
    this.layer.update()
  },
})
