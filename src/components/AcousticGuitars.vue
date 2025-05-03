<template>
  <div>
    <Navbar />

    <div class="p-8">
      <h1 class="mb-4 text-3xl font-bold">Acoustic Guitars</h1>

      <div v-if="instrumentsStore.acousticGuitars.length === 0">
        <p>Loading guitars...</p>
      </div>

      <div v-else class="grid grid-cols-3 gap-4">
        <InstrumentCard
          v-for="(acoustic, index) in instrumentsStore.acousticGuitars"
          :key="index"
          :name="acoustic.name"
          :description="acoustic.description"
          :price="acoustic.price"
          :image="acoustic.image"
          @addToCart="instrumentsStore.addToCart(acoustic)"
        />
      </div>
    </div>

    <Cart
      v-if="instrumentsStore.cartVisible"
      :cart="instrumentsStore.cart"
      @removeFromCart="instrumentsStore.removeFromCart"
      @closeCart="instrumentsStore.toggleCart"
    />

    <Footer />
  </div>
</template>

<script>
import { useInstrumentsStore } from "../stores/instruments"
import { onMounted } from "vue"
import Navbar from "../components/Navbar.vue"
import InstrumentCard from "../components/InstrumentCard.vue"
import Footer from "../components/Footer.vue"
import Cart from "../components/Cart.vue"

export default {
  components: {
    Navbar,
    InstrumentCard,
    Footer,
    Cart
  },
  setup() {
    const instrumentsStore = useInstrumentsStore()

    onMounted(() => {
      instrumentsStore.fetchGuitars()
    })

    return { instrumentsStore }
  }
}
</script>

<style scoped></style>
