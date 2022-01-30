const { AFRAME } = window

// Adapted from https://github.com/mozilla/hubs/blob/57e94966d3f8be345c12196a93d19bd313217b1c/src/components/pinnable.js

AFRAME.registerComponent("blip-animation", {
  trigger: function () {
    const isAnimationRunning =
      this.el.components["animation__blip-start"]?.animationIsPlaying || this.el.components["animation__blip-end"]?.animationIsPlaying

    if (!isAnimationRunning) {
      this.el.removeAttribute("animation__blip-start")
      this.el.removeAttribute("animation__blip-end")
      const currentScale = this.el.object3D.scale

      this.el.setAttribute("animation__blip-start", {
        property: "scale",
        dur: 200,
        from: { x: currentScale.x, y: currentScale.y, z: currentScale.z },
        to: {
          x: currentScale.x * 1.1,
          y: currentScale.y * 1.1,
          z: currentScale.z * 1.1,
        },
        easing: "easeOutElastic",
      })

      this.el.setAttribute("animation__blip-end", {
        property: "scale",
        delay: 200,
        dur: 200,
        from: {
          x: currentScale.x * 1.1,
          y: currentScale.y * 1.1,
          z: currentScale.z * 1.1,
        },
        to: { x: currentScale.x, y: currentScale.y, z: currentScale.z },
        easing: "easeOutElastic",
      })
    }
  },
})
