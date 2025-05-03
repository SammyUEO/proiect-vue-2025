<template>
    <div class="bg-white shadow p-4 rounded-md">
      <h2 class="font-bold text-lg mb-4">Your Orders</h2>
      <ul class="space-y-2">
        <li
          v-for="(order, index) in orders"
          :key="index"
          class="border-b pb-2 mb-2 last:border-none last:pb-0 last:mb-0"
        >
          <p class="font-semibold">{{ order.productName }}</p>
          <p class="text-sm text-gray-500">Price: {{ order.price }} RON</p>
          <p class="text-sm text-gray-500">Status: {{ order.status }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      orders: {
        type: Array,
        default: () => [
          { productName: 'Acoustic Guitar', price: 1200, status: 'Delivered' },
          { productName: 'Bass Guitar', price: 1500, status: 'In Transit' },
        ],
      },
    },
  };
  </script>
  
  <style scoped>
  li {
    transition: background-color 0.3s ease;
  }
  li:hover {
    background-color: #f9fafb;
  }
  </style>
  