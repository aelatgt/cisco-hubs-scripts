const html = String.raw
const css = String.raw

const template = document.createElement("template")
template.innerHTML = html`
  <div class="widget">
    <div class="row">
      <button id="btnCollapse">Minimap</button>
    </div>
    <div id="collapsible">
      <canvas width="256" height="256"></canvas>
    </div>
  </div>
`

const style = css`
  :host {
    --hubs-blue: #007ab8;
    --hubs-lightblue: #008bd1;
    --hubs-gray: #868686;
  }

  .widget {
    --border-radius: 20px;
    pointer-events: initial;
    padding: 0 15px;
    background-color: white;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    box-shadow: 0 0 5px rgb(0, 0, 0, 10%);
  }

  .row {
    display: flex;
    justify-content: center;
    gap: 6px;
  }

  canvas {
    display: block;
    margin-bottom: 15px;
  }

  button:enabled {
    cursor: pointer;
  }

  #btnCollapse {
    background: none;
    border: none;
    flex-grow: 1;
  }
  #btnCollapse:disabled {
    color: gray;
  }

  #collapsible {
    overflow: hidden;
    transition: height 200ms ease-in-out;
    height: 0;
  }
`

class MinimapWidget extends HTMLElement {
  static get observedAttributes() {
    return ["disabled"]
  }

  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: "open" })

    const styleEl = document.createElement("style")
    styleEl.textContent = style
    shadowRoot.appendChild(styleEl)
    shadowRoot.appendChild(template.content.cloneNode(true))

    const collapsible = shadowRoot.querySelector("#collapsible")
    const btnCollapse = shadowRoot.querySelector("#btnCollapse")
    btnCollapse.addEventListener("click", () => this.toggleCollapse())
    btnCollapse.disabled = Boolean(this.hasAttribute("disabled"))

    const canvas = shadowRoot.querySelector("canvas")

    Object.assign(this, { canvas, collapsible, btnCollapse })
    this.collapse()
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "disabled") {
      this.btnCollapse.disabled = newValue !== null
    }
  }

  uncollapse() {
    this.collapsible.style.height = this.collapsible.scrollHeight + "px"
    this.dispatchEvent(new CustomEvent("collapse", { detail: { collapsed: false } }))
  }
  collapse() {
    this.collapsible.style.height = "0px"
    this.dispatchEvent(new CustomEvent("collapse", { detail: { collapsed: true } }))
  }
  toggleCollapse() {
    if (this.collapsible.style.height === "0px") {
      this.uncollapse()
    } else {
      this.collapse()
    }
  }
}

customElements.define("minimap-widget", MinimapWidget)
