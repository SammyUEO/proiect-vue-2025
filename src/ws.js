export const ws = new WebSocket("ws://localhost:3001")

ws.onopen = ws => {
  console.log(`Connected to server: ${ws}`)
}


ws.onmessage = data => {
  console.log(`Message from server: ${data.data}`)
}
