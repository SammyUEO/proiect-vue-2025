<template>
    <div
      class="relative w-full h-50 bg-cover bg-center"
      :style="{ backgroundImage: `url('/images/1.png')` }"
    >
      <div
        class="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-gray bg-opacity-50 px-4"
      >
       
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Banner",
  };
  </script>
  
  <style scoped>
  .bg-cover {
    background-size: cover;
  }
  </style>
  