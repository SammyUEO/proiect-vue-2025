import WebSocket from "ws"

const ws = new WebSocket("ws://localhost:3001")

ws.on("open", () => {
  console.log("Conectat la serverul WebSocket!")
  ws.send("Salut de la client!")
})

ws.on("message", data => {
  console.log("Primit de la server:", data.toString())
})

ws.on("close", () => {
  console.log("Deconectat de la server.")
})
