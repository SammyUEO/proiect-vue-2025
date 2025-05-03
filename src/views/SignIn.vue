<template>
  <div>
    <Navbar />
    <div
class="relative w-full h-screen bg-cover bg-center"
    :style="{ backgroundImage: `url('/images/Sign In pic.jpg')` }">
      <div class="flex items-center justify-center h-screen">
      <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-center mb-6">Sign In</h2>
        <form @submit.prevent="handleSubmit">
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

          <div v-if="errorMessage" class="text-red-500 text-sm mb-4">
            {{ errorMessage }}
          </div>

          <div class="text-center">
            <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Sign In
            </button>
          </div>

          <div class="mt-4 text-center">
            <p class="text-sm">
              Forgot your password? 
              <router-link to="/reset-password" class="text-blue-500">Reset it</router-link>
            </p>
            <p class="text-sm">
              Don't have an account? 
              <router-link to="/sign-up" class="text-blue-500">Sign up</router-link>
            </p>
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
      errorMessage: '',
    };
  },
  methods: {
    handleSubmit() {
    
      if (this.email === 'user@example.com' && this.password === 'password') {
        alert('Successfully signed in!');
      } else {
        this.errorMessage = 'Invalid email or password.';
      }
    },
  },
};
</script>

<style scoped>
</style>
