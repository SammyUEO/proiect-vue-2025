<template>
  <div>
    
    <Banner />

    
    <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm.vue';
import Banner from '../components/Banner.vue';

export default {
  components: {
    SignUpForm,
    Banner,  
  },
};
</script>

<style scoped>

</style>
