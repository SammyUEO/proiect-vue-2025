<template>
  <div>
   <Navbar />

    <div
      class="relative w-full h-screen bg-cover bg-center"
      :style="{ backgroundImage: `url('/images/home.jpeg')` }"
    >
      <div
        class="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-gray bg-opacity-50 px-4"
      >
        <h1 class="text-5xl font-bold mb-4">Welcome to Heaven Rift</h1>
        <p class="text-lg max-w-2xl">
          Discover the best collection of guitars and musical instruments for your passion!
        </p>
        <!-- Scroll Indicator -->
        <div class="mt-10 animate-bounce">
          <i class="bi bi-arrow-down-circle text-4xl"></i>
        </div>
      </div>
    </div>

    <!-- Categories Section -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 my-20">
      <InstrumentCard
        name="Acoustic Guitars"
        description="Warm tones for all genres."
        price="From 800"
        image="/images/acoustic/acoustic2.png"
        @selectInstrument="navigateToCategory('acoustic-guitars')"
      />
      <InstrumentCard
        name="Bass Guitars"
        description="Deep and powerful bass sounds."
        price="From 1200"
        image="/images/bass home.png"
        @selectInstrument="navigateToCategory('bass-guitars')"
      />
      <InstrumentCard
        name="Ukuleles"
        description="Compact and fun to play."
        price="From 400"
        image="/images/ukulele home.png"
        @selectInstrument="navigateToCategory('ukuleles')"
      />
      <InstrumentCard
        name="Electric Guitars"
        description="Deep and powerful bass sounds."
        price="From 1200"
        image="/images/electric home.png"
        @selectInstrument="navigateToCategory('electric-guitars')"
      />
    </section>

    <!-- About Section -->
    <section class="bg-white py-20 px-6 text-center">
      <h2 class="text-3xl font-bold mb-4">About Heaven Rift</h2>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
        Heaven Rift is your one-stop destination for premium musical instruments. 
        We aim to inspire your creativity by providing the best tools for your musical journey.
      </p>
      <div class="flex justify-center space-x-4 text-xl">
        <a href="https://www.facebook.com" target="_blank" class="text-blue-600">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" class="text-pink-500">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" class="text-blue-400">
          <i class="bi bi-twitter"></i>
        </a>
        <a href="https://www.whatsapp.com" target="_blank" class="text-green-500">
          <i class="bi bi-whatsapp"></i>
        </a>
        <a href="https://maps.google.com" target="_blank" class="text-red-500">
          <i class="bi bi-geo-alt"></i>
        </a>
      </div>
    </section>
    

=    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import InstrumentCard from '../components/InstrumentCard.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    InstrumentCard,
    Footer,
  },
  methods: {
    navigateToCategory(category) {
      this.$router.push(`/${category}`);
    },
  },
};
</script>

<style scoped>
.bg-cover {
  background-size: cover;
}

.bi-arrow-down-circle {
  transition: transform 0.3s ease;
}

.bi-arrow-down-circle:hover {
  transform: scale(1.2);
}

section {
  max-width: 1200px;
  margin: auto;
}
</style>
