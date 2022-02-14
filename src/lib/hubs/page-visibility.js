import { registerNetworkedAvatarComponent } from "./utils"

AFRAME.registerSystem("page-visibility", {
  init: function () {
    const avatarRig = document.querySelector("#avatar-rig")

    // Initial value
    avatarRig.setAttribute("networked-page-visibility", { hidden: document.hidden })

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
})

registerNetworkedAvatarComponent("networked-page-visibility", "")
