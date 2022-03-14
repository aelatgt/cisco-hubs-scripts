import "./config-panel"
import { HueLights } from "../utils/HueLights"

AFRAME.registerSystem("hue-lights", {
  dependencies: ["config-panel"],
  init: function () {
    const key = this.el.systems["config-panel"].state.key
    this.lights = new HueLights(key)
    this.enabled = this.el.systems["config-panel"].state.enableLights

    this.el.addEventListener("config_state", (e) => {
      this.lights = new HueLights(e.detail.key)
      this.enabled = e.detail.enableLights
    })
  },
})
