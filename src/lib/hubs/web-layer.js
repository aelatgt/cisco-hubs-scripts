import { WebLayer3D } from "ethereal"

const { AFRAME, THREE } = window

/**
 * Creates an HTMLElement `layerEl` and renders it with Ethereal as `layer`
 *
 * Usage: append DOM elements to `rootEl`
 */
AFRAME.registerComponent("web-layer", {
  init: function () {
    this.layerEl = document.createElement("div")
    this.layerEl.style.display = "inline-block"

    // Root element to mount components into
    this.rootEl = document.createElement("div")
    this.layerEl.appendChild(this.rootEl)

    // Stylesheet
    const linkEl = document.createElement("link")
    linkEl.rel = "stylesheet"
    linkEl.href = "https://cisco-hubs-scripts.glitch.me/lib/style.css"
    this.layerEl.appendChild(linkEl)
    console.log("adding weblayer stylesheet:", linkEl.href)

    this.layer = new WebLayer3D(this.layerEl, { textureEncoding: THREE.sRGBEncoding, autoRefresh: true })
    this.layer.scale.setScalar(10)
    this.el.setObject3D("webLayer3D", this.layer)
  },
  tick: function () {
    this.layer.update()
  },
})
