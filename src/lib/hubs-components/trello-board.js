import { render } from "preact"
import { io } from "socket.io-client"
import { Trello } from "@/lib/react/Trello"
import "./web-layer"
import "./web-layer-events"

const SERVER_URL = import.meta.env.VITE_TRELLO_SERVER
console.log("Using trello server at", SERVER_URL)

AFRAME.registerSystem("trello", {
  init: function () {
    const configPanel = this.el.systems["config-panel"]
    this.token = configPanel.state.trelloTokenValid === true ? configPanel.state.trelloToken : null
    this.boards = []

    this.el.sceneEl.addEventListener("config_state", (state) => {
      this.token = state.trelloTokenValidValid === true ? state.trelloToken : null
      this.boards.forEach((board) => board.update())
    })
  },
  registerBoard: function (trelloBoard) {
    this.boards.push(trelloBoard)
  },
  unregisterBoard: function (trelloBoard) {
    const i = this.boards.indexOf(trelloBoard)
    this.boards.splice(i, 1)
  },
})

AFRAME.registerComponent("trello-board", {
  dependencies: ["web-layer"],
  schema: {
    boardId: { type: "string" },
  },
  init: function () {
    // WebLayer3D setup
    this.webLayerComponent = this.el.components["web-layer"]
    const layer = this.webLayerComponent.layer
    layer.scale.setScalar(2)

    // SocketIO setup
    this.socket = io(SERVER_URL)
    this.board = null // debug
  },
  update: async function () {
    const trelloSystem = this.el.sceneEl.systems["trello"]
    const token = trelloSystem.token

    console.log("component using token", token)

    if (!token) return

    this.socket.emit("register_webhook", { token, idShort: this.data.boardId }, (data) => {
      console.log("listening for changes to board", this.data.boardId, data)
    })
    this.socket.on("board", (board) => {
      console.log("board", this.data.boardId, board)
      this.board = board
      this.renderBoard(board)
    })
    this.socket.emit("get_board", { token, boardId: this.data.boardId })
  },
  renderBoard: function (board) {
    const { cards, lists } = board
    render(Trello({ cards, lists }), this.webLayerComponent.rootEl)
  },
  tick: function () {
    this.webLayerComponent.layer.update()
  },
})

AFRAME.GLTFModelPlus.registerComponent("trello-board", "trello-board")

const pattern = /^https:\/\/trello.com\/b\/(?<shortId>.*)\/(?<name>.*)/

APP.utils.registerContentType(pattern, (el, src) => {
  console.log("Spawning trello board:", src)
  const { shortId, name } = src.match(pattern).groups
  el.setAttribute("geometry", { primitive: "plane" })
  el.setAttribute("material", { visible: false })
  el.setAttribute("trello-board", { boardId: shortId })
})
