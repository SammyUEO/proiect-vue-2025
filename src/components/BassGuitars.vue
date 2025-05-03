<template>
  <div>
    <Navbar />

    <div class="p-8">
      <h1 class="text-3xl font-bold mb-4">Bass Guitars</h1>

      <div class="grid grid-cols-3 gap-4">
        <InstrumentCard
          v-for="(bass, index) in bassGuitars"
          :key="index"
          :name="bass.name"
          :description="bass.description"
          :price="bass.price"
          :image="bass.image"
          @addToCart="addToCart(bass)"
        />
      </div>

      <Cart v-if="cartVisible" :cart="cart" @removeFromCart="removeFromCart" @closeCart="toggleCart" />
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import InstrumentCard from '../components/InstrumentCard.vue';
import Footer from '../components/Footer.vue';
import Cart from '../components/Cart.vue';

export default {
  components: {
    Navbar,
    InstrumentCard,
    Footer,
    Cart
  },
  data() {
    return {
      bassGuitars: [
        { name: 'Fender Jazz Bass', description: 'Iconic bass for rich tones.', price: 1200, image: '/images/bass/bass1.png' },
        { name: 'Gibson Thunderbird', description: 'Powerful sound and style.', price: 1600, image: '/images/bass/bass2.png' },
        { name: 'Ibanez SR500', description: 'Versatile and smooth bass.', price: 1000, image: '/images/bass/bass3.png' },
        { name: 'Squier by Fender Affinity Jazz Bass', description: 'Affordable and great for beginners.', price: 350, image: '/images/bass/bass4.png' },
        { name: 'Music Man StingRay', description: 'Legendary bass sound with modern features.', price: 2000, image: '/images/bass/bass5.png' },
        { name: 'Rickenbacker 4003', description: 'Distinctive sound for rock and metal.', price: 2500, image: '/images/bass/bass6.png' },
        { name: 'Gretsch G2220 Junior Jet Bass', description: 'Compact yet powerful.', price: 450, image: '/images/bass/bass7.png' },
        { name: 'Epiphone Thunderbird IV', description: 'Deep, powerful tone with a unique look.', price: 700, image: '/images/bass/bass8.png' },
        { name: 'Yamaha TRBX304', description: 'A solid choice for bass players.', price: 600, image: '/images/bass/bass9.png' },
      ],
      cart: [],
      cartVisible: false,
    };
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    toggleCart() {
      this.cartVisible = !this.cartVisible;
    }
  }
};
</script>

<style scoped>
</style>
