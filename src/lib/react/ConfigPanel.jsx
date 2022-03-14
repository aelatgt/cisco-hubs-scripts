import { render } from "react-dom"
import { proxy, subscribe, useSnapshot } from "valtio"

const initialState = {
  key: "",
  enableLights: false,
  enableWebNotifications: false,
}

// Load existing state from localStorage
try {
  const storedState = JSON.parse(localStorage.getItem("___config"))
  Object.assign(initialState, storedState)
} catch (e) {}

export const state = proxy(initialState)

subscribe(state, () => {
  localStorage.setItem("___config", JSON.stringify(state))
})

export function mount() {
  const root = document.createElement("div")
  root.style.position = "fixed"
  document.body.appendChild(root)
  render(<ConfigPanel />, root)
}

export function ConfigPanel() {
  const snap = useSnapshot(state)
  return (
    <div
      style={{
        display: "grid",
        gap: "5px",
        background: "white",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px",
      }}
    >
      <span style={{ display: "flex", gap: "5px", alignItems: "center" }}>Config</span>
      <label style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        IFTTT key:
        <input type="password" onChange={(e) => (state.key = e.target.value)} value={snap.key} />
      </label>
      <label style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        Enable Lights:
        <input type="checkbox" onChange={(e) => (state.enableLights = e.target.checked)} checked={snap.enableLights} />
      </label>
      <label style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        Web Notifications:
        <input type="checkbox" onChange={(e) => (state.enableWebNotifications = e.target.checked)} checked={snap.enableWebNotifications} />
      </label>
    </div>
  )
}
