import { defineStore } from "pinia"
import apiClient from "../services/api"
import "../ws"

export const useInstrumentsStore = defineStore("instruments", {
  state: () => ({
    acousticGuitars: [], 
    defaultGuitars: [
      
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
    ],
    cart: [],
    cartVisible: false
  }),
  actions: {
    async fetchGuitars() {
      try {
        const response = await apiClient.get("/guitars")
        this.acousticGuitars = response.data.length > 0 ? response.data : this.defaultGuitars
      } catch (error) {
        console.error("Eroare la preluarea chitarelor:", error)
        this.acousticGuitars = this.defaultGuitars 
      }
    },
    addToCart(item) {
      this.cart.push(item)
    },
    removeFromCart(index) {
      this.cart.splice(index, 1)
    },
    toggleCart() {
      this.cartVisible = !this.cartVisible
    }
  }
})
