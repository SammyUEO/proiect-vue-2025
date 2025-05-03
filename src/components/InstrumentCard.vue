<template>
  <div
    class="border p-4 rounded shadow hover:shadow-lg cursor-pointer"
    @click="selectInstrument"
  >
    <img :src="image" alt="Instrument" class="w-full h-40 object-cover rounded" />
    <h2 class="font-bold text-lg mt-2">{{ name }}</h2>
    <p class="text-gray-600">{{ description }}</p>
    <p class="text-blue-500 font-bold mt-2">{{ price }} RON</p>
    
    <button 
      class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
      @click.stop="addToCart"
    >
      Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  props: ['name', 'description', 'price', 'image'],
  emits: ['select-instrument', 'add-to-cart'],
  methods: {
    selectInstrument() {
      this.$emit('select-instrument', { name: this.name, price: this.price });
    },
    addToCart(event) {
      this.$emit('add-to-cart', { name: this.name, price: this.price });
    }
  },
};
</script>
