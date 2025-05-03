<template>
  <Navbar />
  <div class="p-8">
    <!-- Filtre -->
    <div class="mb-6">
      <label for="category" class="mr-2">Category:</label>
      <select v-model="selectedCategory" class="border p-2 rounded">
        <option value="">All</option>
        <option value="Guitar">Guitar</option>
        <option value="Ukulele">Ukulele</option>
        <option value="Bass">Bass</option>
        <option value="Electric Guitar">Electric Guitar</option>
      </select>
      
      <label for="price" class="ml-4 mr-2">Max Price (RON):</label>
      <input v-model="maxPrice" type="number" class="border p-2 rounded" placeholder="Enter price" />
      
      <button 
        class="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        @click="applyFilters"
      >
        Apply Filters
      </button>
    </div> 

    <!-- Search Bar -->
    <div class="mb-6">
      <input
        v-model="searchQuery"
        type="text"
        class="border p-2 rounded"
        placeholder="Search for an instrument..."
        @keyup.enter="applySearch"
      />
      <button 
        class="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        @click="applySearch"
      >
        Search
      </button>
    </div>

    <!-- Listă produse -->
    <div class="grid grid-cols-3 gap-4 bg-blue-100">
      <InstrumentCard
        v-for="(instrument, index) in filteredInstruments"
        :key="index"
        :name="instrument.name"
        :description="instrument.description"
        :price="instrument.price"
        :image="instrument.image"
        @selectInstrument="handleInstrumentSelect"
        @addToCart="handleAddToCart"
      />
    </div>

    <!-- Buton Coș de cumpărături -->
    <button 
      class="fixed bottom-10 right-2 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
      @click="toggleCart"
    >
      <i class="bi bi-cart"></i>
      <!-- Indicator pentru numărul de produse din coș -->
      <span v-if="cart.length > 0" class="absolute top-0 right-8 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
        {{ cart.length }}
      </span>
    </button>

    <div v-if="showCart" class="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 z-10">
      <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 p-6 bg-white rounded-lg shadow-lg w-96">
        <h3 class="font-bold text-lg mb-4">Shopping Cart</h3>
        <ul>
          <li v-for="(item, index) in cart" :key="index" class="flex items-center mb-4">
            <img :src="item.image" alt="Product" class="w-16 h-16 object-cover mr-4 rounded" />
            <div>
              <p>{{ item.name }} - {{ item.price }} RON</p>
              <p class="text-sm text-gray-600">{{ item.description }}</p>
            </div>
            <button 
              class="ml-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
              @click="removeFromCart(index)"
            >
              <i class="bi bi-trash"></i>
            </button>
          </li>
        </ul>
        <p v-if="cart.length > 0" class="mt-4 font-semibold">
          Total: {{ totalPrice }} RON
        </p>
        <button 
          class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          @click="checkout"
        >
          Checkout
        </button>
        <button 
          class="mt-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          @click="closeCart"
        >
          Close
        </button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import InstrumentCard from '../components/InstrumentCard.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: { InstrumentCard, Navbar, Footer },
  data() {
    return {
      instruments: [
        { name: 'Bass Guitar', description: 'A great bass guitar.', price: 1500, category: 'Bass', image: 'images/bass/bass1.png' },
        { name: 'Acoustic Guitar', description: 'A beautiful acoustic guitar.', price: 1200, category: 'Guitar', image: 'images/acoustic/acoustic1.png' },
        { name: 'Ukulele', description: 'A fun ukulele.', price: 500, category: 'Ukulele', image: 'images/ukulele/ukulele1.png' },
        { name: 'Electric Guitar', description: 'An electrifying guitar.', price: 2500, category: 'Electric Guitar', image: 'images/electric/electric1.png' },
        { name: 'Jazz Bass', description: 'Perfect for jazz music.', price: 2000, category: 'Bass', image: 'images/bass/bass2.png' },
        { name: 'Classical Guitar', description: 'Ideal for classical music.', price: 900, category: 'Guitar', image: 'images/acoustic/acoustic2.png' },
        { name: 'Concert Ukulele', description: 'Small and sweet ukulele.', price: 650, category: 'Ukulele', image: 'images/ukulele/ukulele2.png' },
        { name: 'Stratocaster Electric', description: 'Classic electric guitar sound.', price: 3000, category: 'Electric Guitar', image: 'images/electric/electric2.png' },
        { name: 'Fender Jazz Bass', description: 'A smooth, versatile bass.', price: 1800, category: 'Bass', image: 'images/bass/bass3.png' },
        { name: 'Dreadnought Acoustic', description: 'A large acoustic guitar.', price: 1400, category: 'Guitar', image: 'images/acoustic/acoustic3.png' },
        { name: 'Tenor Ukulele', description: 'A larger ukulele with a deeper tone.', price: 700, category: 'Ukulele', image: 'images/ukulele/ukulele3.png' },
        { name: 'PRS SE Custom', description: 'A premium electric guitar.', price: 2500, category: 'Electric Guitar', image: 'images/electric/electric3.png' },
        { name: 'Vintage Bass', description: 'A classic bass guitar.', price: 2200, category: 'Bass', image: 'images/bass/bass4.png' },
      ],
      selectedCategory: '',
      maxPrice: '',
      searchQuery: '',
      cart: [],
      showCart: false, 
    };
  },
  computed: {
    filteredInstruments() {
      return this.instruments.filter(instrument => {
        const matchesCategory = this.selectedCategory ? instrument.category === this.selectedCategory : true;
        const matchesPrice = this.maxPrice ? instrument.price <= this.maxPrice : true;
        const matchesSearch = instrument.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        
        return matchesCategory && matchesPrice && matchesSearch;
      });
    },
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    }
  },
  methods: {
    applySearch() {
    },
    applyFilters() {
    },
    handleInstrumentSelect(instrument) {
      alert(`You selected: ${instrument.name}`);
    },
    handleAddToCart(instrument) {
      this.cart.push(instrument);
      alert(`${instrument.name} added to cart`);
    },
    toggleCart() {
      this.showCart = !this.showCart; 
    },
    closeCart() {
      this.showCart = false; 
    },
    removeFromCart(index) {
      this.cart.splice(index, 1); 
    },
    checkout() {
      alert('Proceeding to checkout...');
      this.cart = []; 
      this.showCart = false;
    }
  }
};
</script>

<style scoped>
.bi-cart {
  font-size: 24px;
}

.bi-trash {
  font-size: 16px;
}

button span {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: red;
  color: white;
  font-size: 12px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
