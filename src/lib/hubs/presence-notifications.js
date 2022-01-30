import { mount } from '@/lib/react/PresenceUI'

const { APP, AFRAME, THREE } = window;

AFRAME.registerComponent("presence-notifications", {
  schema: {
    key: { default: '' },
    browser: { default: false },
    ifttt: { default: false },
    join: { default: false },
    entered: { default: false },
    leave: { default: false },
    display_name_changed: { default: false },
    chat: { default: false }
  },
  init: function() {
    // Mount UI for IFTTT config
    mount()

    // debug
    window.notify = this.notify.bind(this)
    
    this.el.addEventListener('presenceconfig', e => {
      this.el.setAttribute('presence-notifications', e.detail)
    })
    
    // Set up notification permissions
    Notification.requestPermission().catch(() =>
      console.warn("Notification permissions denied")
    );

    // Monitor presence activity
    APP.messageDispatch.addEventListener("message", e => {
      // Check that notifications are enabled for this event type
      if (this.data[e.detail.type]) {
        switch (e.detail.type) {
          case "join":
            this.notify(`${e.detail.name} joined the lobby`);
            break;
          case "entered":
            this.notify(`${e.detail.name} entered the room`);
            break;
          case "leave":
            this.notify(`${e.detail.name} left the room`);
            break;
          case "display_name_changed":
            this.notify(
              `${e.detail.oldName} is now known as ${e.detail.newName}`
            );
            break;
          case "chat":
            if (!e.detail.sent) {
              this.notify(`${e.detail.name}: ${e.detail.body}`);
            }
            break;
        }
      }
    });
  },
  notify: function(body) {
    console.log(`[Notification] ${body}`);
    // Web Notifications API
    if (Notification.permission === "granted" && this.data.browser) {
      new Notification("Hubs Room", {
        icon: "https://hubs.aelatgt.net/favicon.ico",
        body
      });
    }
    
    // IFTTT webhook
    if (this.data.key.length > 0 && this.data.ifttt) {
      fetch(`https://maker.ifttt.com/trigger/ael_log/with/key/${this.data.key}`, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({
          value1: body
        })
      }).then(res => res.text()).then(t => console.log(t))
    }
  }
});
