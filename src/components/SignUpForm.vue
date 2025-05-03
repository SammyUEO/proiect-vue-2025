<template>
    <div>
      <Navbar />
      
      <div
class="relative w-full h-screen bg-cover bg-center"
      :style="{ backgroundImage: `url('/images/SignUp.jpg')` }">
        <div class="flex items-center justify-center h-screen">
        <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 class="text-2xl font-semibold text-center mb-6">Sign Up</h2>
          <form @submit.prevent="handleSignUp">
            <div class="mb-4">
              <label for="email" class="block text-sm font-semibold text-gray-700">Email</label>
              <input
                id="email"
                v-model="email"
                type="email"
                class="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>
  
            <div class="mb-4">
              <label for="password" class="block text-sm font-semibold text-gray-700">Password</label>
              <input
                id="password"
                v-model="password"
                type="password"
                class="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your password"
                required
              />
            </div>
  
            <div class="mb-4">
              <label for="confirmPassword" class="block text-sm font-semibold text-gray-700">Confirm Password</label>
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                type="password"
                class="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Confirm your password"
                required
              />
            </div>
  
            <div v-if="errorMessage" class="text-red-500 text-sm mb-4">
              {{ errorMessage }}
            </div>
  
            <div v-if="successMessage" class="text-green-500 text-sm mb-4">
              {{ successMessage }}
            </div>
  
            <div class="text-center">
              <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
     
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    components: {
      Navbar,
      Footer,
    },
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        errorMessage: '',
        successMessage: '',
      };
    },
    methods: {
      handleSignUp() {
        if (this.password !== this.confirmPassword) {
          this.errorMessage = 'Passwords do not match.';
          this.successMessage = '';
          return;
        }
  
        if (this.email && this.password) {
          this.successMessage = 'Account created successfully! Please sign in.';
          this.errorMessage = '';
        } else {
          this.errorMessage = 'Please fill in all fields.';
          this.successMessage = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  