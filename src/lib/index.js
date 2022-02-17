// Import external libs here (not processed by Vite)
import "https://cdn.jsdelivr.net/npm/ethereal@2.1.3/dist/ethereal.umd.js"

// Tailwind stylesheet
import "@/styles/style.css"

// Hubs components
// import "./hubs/presence-notifications"
// import "./hubs/counter"
// import "./hubs/text-input"
// import "./hubs/collision-events"
import "./hubs/presence-zone"
import "./hubs/config-panel"
import "./hubs/hue-lights"
import "./hubs/page-visibility"

const { APP } = window

// APP.scene.setAttribute("presence-notifications", "")

// const el = document.createElement("a-entity");
// el.object3D.position.y = 1.5;
// el.setAttribute("text-input", "");
// APP.scene.appendChild(el);
