import { render } from "react-dom"
import { createElement } from "react"
import { RSSFeed } from "@/lib/react/RSSFeed"
import "./web-layer"
import "./web-layer-events"

AFRAME.registerComponent("rss-feed", {
  dependencies: ["web-layer", "web-layer-events"],
  schema: {
    href: { default: "" },
    count: { default: 0 },
  },
  init: function () {
    this.webLayerComponent = this.el.components["web-layer"]
  },
  update: function () {
    render(createElement(RSSFeed, { href: this.data.href, count: this.data.count }, null), this.webLayerComponent.rootEl)
  },
})

AFRAME.GLTFModelPlus.registerComponent("rss-feed", "rss-feed")
