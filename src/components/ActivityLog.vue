<template>
    <div class="bg-white shadow p-4 rounded-md">
      <h2 class="font-bold text-lg mb-4">Recent Activity</h2>
      <ul class="space-y-2">
        <li
          v-for="(activity, index) in activities"
          :key="index"
          class="text-sm text-gray-600"
        >
          {{ activity }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      activities: {
        type: Array,
        default: () => [
          'Logged in at 9:45 AM',
          'Viewed Acoustic Guitars category',
          'Placed an order for Bass Guitar',
          'Updated profile picture',
        ],
      },
    },
  };
  </script>
  