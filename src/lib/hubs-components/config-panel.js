import { mount, state } from "@/lib/react/ConfigPanel"
import { snapshot, subscribe } from "valtio"

AFRAME.registerSystem("config-panel", {
  init: function () {
    mount()
    this.state = state
    subscribe(state, () => {
      this.el.emit("config_state", snapshot(state))
    })
  },
})
