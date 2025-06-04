import { WebSocketServer } from "ws"

const wss = new WebSocketServer({ port: 3001 })

wss.on("connection", ws => {
  console.log("Client conectat!")

  ws.send("Salut de la serverul WebSocket!")

  ws.on("message", message => {
    console.log("Primit de la client:", message.toString())
    // Trimite mesajul la toți clienții conectați
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === ws.OPEN) {
        client.send(`Broadcast: ${message}`)
      }
    })
  })

  ws.on("close", () => {
    console.log("Client deconectat.")
  })
})

console.log("WebSocket server pornit pe ws://localhost:3001")
