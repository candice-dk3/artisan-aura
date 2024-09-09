<template>
  <div class="account">
    <div v-if="user">
      <h1>Welcome, {{ user.userName }}!</h1>
      <p>Email: {{ user.emailAdd }}</p>
      <!-- <p>Account Created: {{ formatDate(user.createdAt) }}</p> -->
      <img :src="user.Profile" alt="Profile Picture">
    </div>
    <div v-else>
      <p>Please log in to see your account details.</p>
    </div>
  </div>
</template>

<script>
export default {
  async getUser({ $axios }) {
    const response = await $axios.get(`${apiURL}users/${id}`);
    return { user: response.data };
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