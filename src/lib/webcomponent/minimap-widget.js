const html = String.raw
const css = String.raw

/**
 * HTML
 */
const template = document.createElement("template")
template.innerHTML = html`
  <div class="widget">
    <div class="row">
      <button id="btnCollapse">Minimap</button>
    </div>
    <div id="collapsible">
      <canvas width="256" height="256"></canvas>
      <div class="row" style="margin-bottom: 15px">
        <button class="btnZoom" id="btnZoomOut">-</button>
        <span>Zoom</span>
        <button class="btnZoom" id="btnZoomIn">+</button>
      </div>
    </div>
  </div>
`

/**
 * CSS
 */
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
    align-items: center;
    gap: 6px;
  }

  .spacer {
    height: 15px;
  }

  canvas {
    display: block;
  }

  .btnZoom {
    --outline-color: var(--hubs-blue);
    padding: 4px;
    border-radius: 4px;
    width: 30px;
    background: none;
    border: 2px solid var(--outline-color);
    color: var(--hubs-blue);
  }
  .btnZoom:hover {
    --outline-color: var(--hubs-lightblue);
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

    display: flex;
    flex-direction: column;
    gap: 15px;
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

    shadowRoot.querySelector("#btnZoomOut").addEventListener("click", () => this.onChangeZoom(0.8))
    shadowRoot.querySelector("#btnZoomIn").addEventListener("click", () => this.onChangeZoom(1 / 0.8))

    const canvas = shadowRoot.querySelector("canvas")

    Object.assign(this, { canvas, collapsible, btnCollapse })
    this.collapse()
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "disabled") {
      this.btnCollapse.disabled = newValue !== null
    }
  }
  onChangeZoom(factor) {
    this.dispatchEvent(new CustomEvent("changezoom", { detail: { factor } }))
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
