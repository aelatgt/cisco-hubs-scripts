AFRAME.registerSystem("web-notifications", {
  init: function () {
    const checkIfEnabled = () => {
      this.enabled = this.el.systems["config-panel"].state.enableWebNotifications
      if (this.enabled) this.requestPermission()
    }

    checkIfEnabled()

    this.el.addEventListener("config_state", checkIfEnabled)
  },
  requestPermission: function () {
    Notification.requestPermission().catch(() => console.warn("Notification permissions denied"))
  },
  notify: function (body) {
    if (this.enabled) {
      console.log(`Notification: ${body}`)
      if (Notification.permission === "granted") {
        new Notification("Hubs Room", { icon: "https://hubs.aelatgt.net/favicon.ico", body })
      }
    }
  },
})
