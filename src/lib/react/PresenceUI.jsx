import { Fragment } from "react";
import { render } from "react-dom";
import { proxy, subscribe, useSnapshot } from "valtio";

const { APP, AFRAME } = window;

const events = ["join", "entered", "leave", "display_name_changed", "chat"];

const initialState = {
  key: "",
  browser: false,
  ifttt: false,
};
events.forEach(e => (initialState[e] = false));

// Load existing state from localStorage
try {
  const storedState = JSON.parse(localStorage.getItem("___ifttt"));
  Object.assign(initialState, storedState);
} catch (e) {}

export const state = proxy(initialState);

// AFRAME doesn't like me setting w/ object notation here
// I assume because the automated parser hasn't yet started?
APP.scene.setAttribute(
  "presence-notifications",
  AFRAME.utils.styleParser.stringify(initialState)
);

subscribe(state, () => {
  APP.scene.emit("presenceconfig", state);
  localStorage.setItem("___ifttt", JSON.stringify(state));
});

export function mount() {
  const root = document.createElement("div");
  root.style.position = "fixed";
  document.body.appendChild(root);
  render(<PresenceUI />, root);
}

export function PresenceUI() {
  const snap = useSnapshot(state);
  return (
    <div
      style={{
        display: "grid",
        gap: "5px",
        background: "white",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px"
      }}
    >
      <span style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <Icon /> Notifications
      </span>
      <label style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        IFTTT key:
        <input type="password" onChange={e => (state.key = e.target.value)} value={snap.key} />
      </label>
      <div style={{ display: 'grid', gridAutoColumns: '1fr', gridAutoFlow: 'column' }}>
        <label style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          Browser:
          <input
            type="checkbox"
            onChange={e => (state.browser = e.target.checked)}
            checked={snap.browser}
          />
        </label>
        <label style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          IFTTT:
          <input
            type="checkbox"
            onChange={e => (state.ifttt = e.target.checked)}
            checked={snap.ifttt}
          />
        </label>
      </div>
      {events.map(name => (
        <label style={{ display: "flex", gap: "5px" }} key={name}>
          <input
            type="checkbox"
            onChange={e => (state[name] = e.target.checked)}
            checked={snap[name]}
          />
          {name}
        </label>
      ))}
    </div>
  );
}

function Icon() {
  return (
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  );
}

