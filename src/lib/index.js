// Tailwind stylesheet
import "@/styles/style.css"

// Hubs components
import "./hubs/presence-notifications"
import "./hubs/counter"
import "./hubs/text-input"

const { APP } = window

APP.scene.setAttribute("presence-notifications", "")

// const el = document.createElement("a-entity");
// el.object3D.position.y = 1.5;
// el.setAttribute("text-input", "");
// APP.scene.appendChild(el);
