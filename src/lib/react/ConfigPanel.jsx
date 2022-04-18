import { render } from "preact"
import { useEffect } from "preact/hooks"
import { proxy, subscribe, useSnapshot } from "valtio"
import io from "socket.io-client"

const initialState = {
  key: "",
  enableLights: false,
  enableWebNotifications: false,
  trelloToken: null,
  trelloTokenValid: null,
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
  useEffect(() => {
    // Validate token
    const validateURL = new URL("/validate", SERVER_URL)
    validateURL.searchParams.set("token", snap.trelloToken)
    fetch(validateURL).then((res) => {
      if (res.status !== 200) {
        console.warn("invalid trello token")
        state.trelloTokenValid = false
      } else {
        state.trelloTokenValid = true
      }
    })
  }, [snap.trelloToken])
  let trelloValidationText
  switch (snap.trelloTokenValid) {
    case null:
      trelloValidationText = "Loading..."
      break
    case false:
      trelloValidationText = "Log in to Trello"
      break
    case true:
      trelloValidationText = "Log out of Trello"
      break
  }
  const onClickValidate = () => {
    switch (snap.trelloTokenValid) {
      case false:
        requestToken().then((token) => {
          state.trelloToken = token
          state.trelloTokenValid = null
        })
        break
      case true:
        state.trelloToken = null
        state.trelloTokenValid = null
    }
  }
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
      <button disabled={snap.trelloTokenValid !== false} onClick={onClickValidate}>
        {trelloValidationText}
      </button>
    </div>
  )
}

const SERVER_URL = import.meta.env.VITE_TRELLO_SERVER

async function requestToken() {
  return new Promise((resolve) => {
    const socket = io(SERVER_URL)
    socket.once("token", (token) => {
      console.log("generated token", token)
      socket.close()
      resolve(token)
    })
    socket.emit("get_auth_url", (authUrl) => {
      window.open(authUrl, "_blank")
    })
  })
}
