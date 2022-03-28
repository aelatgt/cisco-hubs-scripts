import { render } from "preact"
import { io } from "socket.io-client"
import { Trello } from "@/lib/react/Trello"
import "./web-layer"
import "./web-layer-events"

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

    // Socket.io setup
    this.board = null
    this.socket = io(`https://cisco-trello-server.herokuapp.com/${this.data.boardId}`)
    this.socket.on("message", (board) => {
      console.log(board)
      this.board = board
      this.renderBoard(board)
    })
  },
  renderBoard: function (board) {
    render(Trello({ board }), this.webLayerComponent.rootEl)
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
