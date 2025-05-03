<template>
    <div
      :style="{ backgroundImage: `url(${image})` }"
      class="w-full h-64 bg-cover bg-center"
    ></div>
  </template>
  
  <script>
  export default {
    props: ['image'],
  };
  </script>
  