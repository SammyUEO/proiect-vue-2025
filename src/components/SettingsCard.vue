<template>
    <div class="bg-white shadow p-4 rounded-md">
      <h2 class="font-bold text-lg mb-4">Settings</h2>
      <div>
        <label class="block mb-2 font-semibold">Enable Notifications</label>
        <input
          v-model="notificationsEnabled"
          type="checkbox"
          class="mr-2"
        />
        {{ notificationsEnabled ? 'Enabled' : 'Disabled' }}
      </div>
      <div class="mt-4">
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          @click="saveSettings"
        >
          Save Settings
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        notificationsEnabled: true,
      };
    },
    methods: {
      saveSettings() {
        alert('Settings saved!');
      },
    },
  };
  </script>
  