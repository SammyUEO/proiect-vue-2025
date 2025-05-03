<template>
    <div class="bg-white shadow p-4 rounded-md">
      <div class="flex items-center space-x-4">
        <img
          :src="profileImage"
          alt="Profile"
          class="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 class="font-bold text-lg">{{ fullName }}</h2>
          <p class="text-gray-500">{{ email }}</p>
        </div>
      </div>
      <div class="mt-4">
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          @click="editProfile"
        >
            Edit Profile

        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    
    props: {
      profileImage: {
        type: String,
        default: '/images/default-profile.png', 
      },
      fullName: {
        type: String,
        default: 'John Doe',
      },
      email: {
        type: String,
        default: 'john.doe@example.com',
      },
    },
    methods: {
      editProfile() {
        alert('Edit Profile clicked!');
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    transition: background-color 0.3s ease;
  }
  </style>
  