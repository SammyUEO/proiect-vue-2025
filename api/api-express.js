import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { Instrument, Category } from "./db.js"

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

// all
app.get("/api/instruments", async (req, res) => {
  const instruments = await Instrument.findAll()
  res.json(instruments)
})

// id
app.get("/api/instruments/:id", async (req, res) => {
  const instrument = await Instrument.findByPk(req.params.id)
  if (instrument) res.json(instrument)
  else res.status(404).json({ error: "Instrument not found" })
})

// nou intrument
app.post("/api/instruments", async (req, res) => {
  try {
    const instrument = await Instrument.create(req.body)
    res.status(201).json(instrument)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// PUT
app.put("/api/instruments/:id", async (req, res) => {
  const instrument = await Instrument.findByPk(req.params.id)
  if (!instrument) return res.status(404).json({ error: "Instrument not found" })
  await instrument.update(req.body)
  res.json(instrument)
})

// DELETE 
app.delete("/api/instruments/:id", async (req, res) => {
  const instrument = await Instrument.findByPk(req.params.id)
  if (!instrument) return res.status(404).json({ error: "Instrument not found" })
  await instrument.destroy()
  res.json({ message: "Instrument deleted" })
})

// all categories
app.get("/api/categories", async (req, res) => {
  const categories = await Category.findAll()
  res.json(categories)
})

// nou categorie
app.post("/api/categories", async (req, res) => {
  try {
    const category = await Category.create(req.body)
    res.status(201).json(category)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

app.get("/", (req, res) => {
  res.send("Bine ai venit la API-ul pentru instrumente!")
})

app.listen(port, () => {
  console.log(`Serverul Express rulează la http://localhost:${port}`)
})
