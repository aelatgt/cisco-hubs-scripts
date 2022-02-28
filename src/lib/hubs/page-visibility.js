import { registerNetworkedAvatarComponent } from "./utils"

AFRAME.registerSystem("page-visibility", {
  init: function () {
    const avatarRig = document.querySelector("#avatar-rig")

    // Handle value updates
    document.addEventListener("visibilitychange", () => {
      avatarRig.setAttribute("networked-page-visibility", { hidden: document.hidden })
    })
  },
})

AFRAME.registerComponent("networked-page-visibility", {
  schema: {
    hidden: { type: "boolean" },
  },
  update() {
    this.el.emit("visibilitychange", { hidden: this.data.hidden })
  },
})

registerNetworkedAvatarComponent("networked-page-visibility", { hidden: document.hidden })
