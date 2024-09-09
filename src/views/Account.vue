<template>
  <div class="account">
    <div v-if="user">
      <h1>Welcome, {{ user.userName }}!</h1>
      <p>Email: {{ user.emailAdd }}</p>
      <p>Account Created: {{ formatDate(user.createdAt) }}</p>
      <img :src="user.profilePicture" alt="Profile Picture">
    </div>
    <div v-else>
      <p>Please log in to see your account details.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      apiURL: 'https://artisan-aura.onrender.com/', // define apiURL
      id: 1 // define id
    }
  },
  async mounted() {
    try {
      const response = await this.$axios.get(`${this.apiURL}users/${userID}`);
      this.user = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    }
  }
};
</script>

<style scoped>
  .account{
    margin-top: 7.4rem;
    color: black;
  }
</style>