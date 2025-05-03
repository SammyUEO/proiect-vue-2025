<template>
    <div v-if="cart.length > 0" class="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 z-10">
      <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 p-6 bg-white rounded-lg shadow-lg w-96">
        <h3 class="font-bold text-lg mb-4">Shopping Cart</h3>
        <ul>
          <li v-for="(item, index) in cart" :key="index" class="flex items-center mb-4">
            <img :src="item.image" alt="Product" class="w-16 h-16 object-cover mr-4 rounded" />
            <div>
              <p>{{ item.name }} - {{ item.price }} RON</p>
              <p class="text-sm text-gray-600">{{ item.description }}</p>
            </div>
            <!-- Buton de eliminare din coș -->
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
  </template>
  
  <script>
  export default {
    props: ['cart'],
    computed: {
      totalPrice() {
        return this.cart.reduce((total, item) => total + item.price, 0);
      }
    },
    methods: {
      removeFromCart(index) {
        this.$emit('remove-from-cart', index);
      },
      checkout() {
        this.$emit('checkout');  // Afișează formularul de checkout
      },
      closeCart() {
        this.$emit('close-cart'); // Închide coșul de cumpărături
      }
    }
  };
  </script>
  
  <style scoped>
  .bi-trash {
    font-size: 16px;
  }
  </style>
  