const ONCE_TRUE = { once: true }
const TYPE_IMG_PNG = { type: "image/png" }

/**
 * Creates image from a canvas and uploads it to the room.
 * Logic pulled from Hubs `media-video` component
 */
AFRAME.registerComponent("snapshot", {
  init: function () {
    this.localSnapCount = 0
  },

  /**
   * @param {HTMLCanvasElement} canvas
   */
  spawnSnapshot: async function (canvas) {
    const blob = await new Promise((resolve) => canvas.toBlob(resolve))
    const file = new File([blob], "snap.png", TYPE_IMG_PNG)
    // const { entity } = APP.utils.addAndArrangeMedia(this.el, file, "photo-snapshot", this.localSnapCount, false, 1)
    const { entity } = APP.utils.addMedia(file, "#interactable-media", undefined, "photo-snapshot", false)
    entity.addEventListener(
      "media_resolved",
      () => {
        this.el.emit(`photo_taken`, entity.components["media-loader"].data.src)
      },
      { once: true }
    )
    return new Promise((resolve) => {
      entity.addEventListener("image-loaded", resolve({ entity }), ONCE_TRUE)
    })
  },
})
