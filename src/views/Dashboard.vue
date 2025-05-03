<template>
   <Navbar />
  <div class="bg-gray-200 min-h-screen p-6">
   
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <ProfileCard
        profileImage="/images/eu.jpg"
        fullName="Samuel Marian"
        email="samuel.marian@gmail.com"
      />
      <OrderList />
      <ActivityLog />
      <SettingsCard />
    </div>
    
  </div>
  <Footer />
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import ProfileCard from '../components/ProfileCard.vue';
import OrderList from '../components/OrderList.vue';
import ActivityLog from '../components/ActivityLog.vue';
import SettingsCard from '../components/SettingsCard.vue';

export default {
  components: {
    Navbar,
    Footer,
    ProfileCard,
    OrderList,
    ActivityLog,
    SettingsCard,
    
  },
};
</script>

<style scoped>
.grid {
  max-width: 1200px;
  margin: auto;
}
</style>
