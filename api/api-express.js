import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
const port = 3000

app.use(cors());
app.use(bodyParser.json())


let acousticGuitars = [
  {
    id: 1,
    name: "Martin D-28",
    description: "Classic acoustic with rich sound.",
    price: 1800,
    image: "/images/acoustic/acoustic1.png"
  },
  {
    id: 2,
    name: "Taylor 314ce",
    description: "Smooth sound and modern style.",
    price: 1500,
    image: "/images/acoustic/acoustic2.png"
  },
  {
    id: 3,
    name: "Gibson J-45",
    description: "Legendary guitar with amazing tone.",
    price: 2200,
    image: "/images/acoustic/acoustic3.png"
  },
  {
    id: 4,
    name: "Yamaha FG800",
    description: "Affordable, reliable, and rich sound.",
    price: 300,
    image: "/images/acoustic/acoustic4.png"
  },
  {
    id: 5,
    name: "Fender CD-60S",
    description: "Excellent choice for beginners.",
    price: 250,
    image: "/images/acoustic/acoustic5.png"
  }
]
let cart = []

// GET endpoints
app.get("/", (req, res) => {
  res.send("Bine ai venit la API-ul pentru chitare acustice!")
})

app.get("/api/guitars", (req, res) => {
  res.json(acousticGuitars)
})

app.get("/api/guitars/:id", (req, res) => {
  const guitar = acousticGuitars.find(g => g.id === parseInt(req.params.id))
  if (guitar) {
    res.json(guitar)
  } else {
    res.status(404).json({ error: "Guitar not found" })
  }
})

app.get("/api/cart", (req, res) => {
  res.json(cart)
})

// POST endpoints
app.post("/api/guitars", (req, res) => {
  const { name, description, price, image } = req.body
  const newGuitar = {
    id: acousticGuitars.length + 1,
    name,
    description,
    price,
    image
  }
  acousticGuitars.push(newGuitar)
  res.status(201).json(newGuitar)
})

app.post("/api/cart", (req, res) => {
  const { id } = req.body
  const guitar = acousticGuitars.find(g => g.id === id)
  if (guitar) {
    cart.push(guitar)
    res.status(201).json({ message: "Guitar added to cart", cart })
  } else {
    res.status(404).json({ error: "Guitar not found" })
  }
})

// PUT endpoints
app.put("/api/guitars/:id", (req, res) => {
  const { id } = req.params
  const { name, description, price, image } = req.body
  const guitar = acousticGuitars.find(g => g.id === parseInt(id))
  if (guitar) {
    guitar.name = name || guitar.name
    guitar.description = description || guitar.description
    guitar.price = price || guitar.price
    guitar.image = image || guitar.image
    res.json(guitar)
  } else {
    res.status(404).json({ error: "Guitar not found" })
  }
})

app.put("/api/cart/:id", (req, res) => {
  const { id } = req.params
  const { quantity } = req.body
  const cartItem = cart.find(item => item.id === parseInt(id))
  if (cartItem) {
    cartItem.quantity = quantity || cartItem.quantity
    res.json(cartItem)
  } else {
    res.status(404).json({ error: "Item not found in cart" })
  }
})

// DELETE endpoints
app.delete("/api/guitars/:id", (req, res) => {
  const { id } = req.params
  const index = acousticGuitars.findIndex(g => g.id === parseInt(id))
  if (index !== -1) {
    const deletedGuitar = acousticGuitars.splice(index, 1)
    res.json(deletedGuitar)
  } else {
    res.status(404).json({ error: "Guitar not found" })
  }
})

app.delete("/api/cart/:id", (req, res) => {
  const { id } = req.params
  const index = cart.findIndex(item => item.id === parseInt(id))
  if (index !== -1) {
    const removedItem = cart.splice(index, 1)
    res.json({ message: "Item removed from cart", removedItem })
  } else {
    res.status(404).json({ error: "Item not found in cart" })
  }
})


app.listen(port, () => {
  console.log(`Serverul Express rulează la http://localhost:${port}`)
})
