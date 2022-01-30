import { render } from "react-dom"
import { Counter } from "@/lib/react/Counter"

import "./web-layer"
import "./web-layer-events"

const { AFRAME, NAF } = window

// Offline counter component
AFRAME.registerComponent("counter-view", {
  dependencies: ["web-layer", "web-layer-events"],
  schema: {
    count: { default: 0 },
  },
  init: function () {
    this.webLayerComponent = this.el.components["web-layer"]
  },
  update: function () {
    const setState = (state) => {
      NAF.utils.takeOwnership(this.el)
      this.el.setAttribute("counter-view", state)
    }
    render(<Counter state={this.data} setState={setState} />, this.webLayerComponent.rootEl)
  },
})

// Configure NAF for the counter
const assets = document.querySelector("a-assets")
assets.insertAdjacentHTML(
  "beforeend",
  `
  <template id="counter-media">
    <a-entity counter-view></a-entity>
  </template>
`
)

NAF.schemas.add({
  template: "#counter-media",
  components: [
    {
      component: "counter-view",
      property: "count",
    },
  ],
})

// Convenience networked wrapper
AFRAME.registerComponent("counter", {
  init: function () {
    this.el.setAttribute("networked", {
      template: "#counter-media",
      networkId: "counter",
      owner: "scene",
    })
  },
})

AFRAME.GLTFModelPlus.registerComponent("counter", "counter")