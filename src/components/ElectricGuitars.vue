<template>
  <div>
    <Navbar />

    <div class="p-8">
      <h1 class="text-3xl font-bold mb-4">Electric Guitars</h1>

      <div class="grid grid-cols-3 gap-4">
        <InstrumentCard
          v-for="(electric, index) in electricGuitars"
          :key="index"
          :name="electric.name"
          :description="electric.description"
          :price="electric.price"
          :image="electric.image"
          @addToCart="addToCart(electric)"
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
      electricGuitars: [
        { name: 'Gibson Les Paul Standard', description: 'Rich and powerful tones.', price: 2500, image: '/images/electric/electric1.png' },
        { name: 'Fender Stratocaster', description: 'Classic electric guitar for any genre.', price: 2200, image: '/images/electric/electric2.png' },
        { name: 'PRS Custom 24', description: 'Versatile and premium quality.', price: 3500, image: '/images/electric/electric3.png' },
        { name: 'Ibanez RG550', description: 'Fast playing guitar for metal and rock.', price: 900, image: '/images/electric/electric4.png' },
        { name: 'Epiphone Les Paul Standard', description: 'Affordable version of the iconic guitar.', price: 700, image: '/images/electric/electric5.png' },
        { name: 'Fender Telecaster', description: 'Bright, cutting tone for all genres.', price: 1800, image: '/images/electric/electric6.png' },
        { name: 'Gibson SG Standard', description: 'Distinctive, powerful sound.', price: 2200, image: '/images/electric/electric7.png' },
        { name: 'Schecter C-1', description: 'Great for metal players with great versatility.', price: 1200, image: '/images/electric/electric8.png' },
        { name: 'Yamaha Pacifica 112V', description: 'Budget-friendly and great value.', price: 300, image: '/images/electric/electric9.png' },
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
