import http from "http"

const hostname = "0.0.0.0"
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ mesaj: "API HTTP funcționează!" }))
})

server.listen(port, () => {
  console.log(`Server HTTP pornit pe http://localhost:${port}/`)
})
