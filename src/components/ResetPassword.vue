<template>
  <div>
    <Navbar />
    <div
class="relative w-full h-screen bg-cover bg-center"
    :style="{ backgroundImage: `url('/images/Sign In pic.jpg')` }">
      <div class="flex items-center justify-center h-screen">
      <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-center mb-6">Reset Password</h2>
        <form @submit.prevent="handleReset">
          <div class="mb-4">
            <label for="email" class="block text-sm font-semibold text-gray-700">Enter your email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              class="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
  
          <div v-if="message" class="text-green-500 text-sm mb-4">
            {{ message }}
          </div>
  
          <div v-if="errorMessage" class="text-red-500 text-sm mb-4">
            {{ errorMessage }}
          </div>
  
          <div class="text-center">
            <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Send Reset Link
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
      message: '',
      errorMessage: '',
    };
  },
  methods: {
    handleReset() {
      if (this.email === 'user@example.com') {
        this.message = 'Password reset link has been sent to your email.';
      } else {
        this.errorMessage = 'No account found with this email.';
      }
    },
  },
};
</script>

<style scoped>
</style>
