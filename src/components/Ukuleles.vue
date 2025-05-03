<template>
  <div>
    <Navbar />

    <div class="p-8">
      <h1 class="text-3xl font-bold mb-4">Ukuleles</h1>

      <!-- Ukulele Products -->
      <div class="grid grid-cols-3 gap-4">
        <InstrumentCard
          v-for="(ukulele, index) in ukuleles"
          :key="index"
          :name="ukulele.name"
          :description="ukulele.description"
          :price="ukulele.price"
          :image="ukulele.image"
          @addToCart="addToCart(ukulele)"
        />
      </div>

      <!-- Cart Component -->
      <Cart v-if="cartVisible" :cart="cart" @removeFromCart="removeFromCart" @closeCart="toggleCart" />
    </div>

    <!-- Footer -->
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
      ukuleles: [
        { name: 'Kala KA-15S', description: 'Great for beginners.', price: 400, image: '/images/ukulele/ukulele1.png' },
        { name: 'Cordoba 15CM', description: 'Rich sound and feel.', price: 600, image: '/images/ukulele/ukulele2.png' },
        { name: 'Fender Grace VanderWaal', description: 'Stylish and fun.', price: 800, image: '/images/ukulele/ukulele3.png' },
        { name: 'Lanikai LU-21C', description: 'Classic soprano ukulele.', price: 250, image: '/images/ukulele/ukulele4.png' },
        { name: 'Oscar Schmidt OU2', description: 'Rich tone and quality construction.', price: 350, image: '/images/ukulele/ukulele5.png' },
        { name: 'Mahalo U-320', description: 'Vibrant colors and great sound.', price: 150, image: '/images/ukulele/ukulele6.png' },
        { name: 'Fender Fullerton', description: 'Great for intermediate players.', price: 500, image: '/images/ukulele/ukulele7.png' },
        { name: 'Ohana CK-35G', description: 'Classic concert ukulele.', price: 450, image: '/images/ukulele/ukulele8.png' },
        { name: 'Kanile’a K-1', description: 'Premium quality with beautiful tone.', price: 1200, image: '/images/ukulele/ukulele9.png' },
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
