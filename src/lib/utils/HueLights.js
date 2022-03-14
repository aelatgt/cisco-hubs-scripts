export class HueLights {
  constructor(key) {
    this.key = key
  }

  webhook(event, body) {
    /**
     * Have to use mode: "no-cors" for hubs which means can't set
     * Content-Type header, therefore sending body as URL encoded form-data.
     */
    return fetch(`https://maker.ifttt.com/trigger/${event}/with/key/${this.key}`, {
      method: "POST",
      mode: "no-cors",
      body: new URLSearchParams(body),
    })
  }

  setColor(value) {
    this.webhook("hue_color", { value1: value })
  }

  setBrightness(value) {
    this.webhook("hue_brightness", { value1: value })
  }

  set({ color, brightness }) {
    this.setColor(color)
    this.setBrightness(brightness)
  }
}
