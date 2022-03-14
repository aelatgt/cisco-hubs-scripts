// Log objects as you inspect them
APP.scene.addEventListener("inspect-target-changed", () => {
  const cameraSystem = APP.scene.systems["hubs-systems"].cameraSystem
  const inspectedEl = cameraSystem.inspectable?.el
  inspectedEl && console.log(inspectedEl)
})
