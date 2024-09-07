<template>
    <div class="account">
      <h1>View Account</h1>
      <div class="account">
        <div class="pp"></div>
        <div class="accDets"></div>
      </div>
      <div v-if="user()">
            {{ $store.state.user.firstName  }}
        </div>
    </div>
</template>

<script>

 export default {
    methods: {
      getUser() {
        this.$store.dispatch('getUser',this.$route.params.id)
      },
      user() {
        return this.$store.state.user;
      }
    },
    mounted() {
      this.getUser();
    },
  };

</script>

<style scoped>
    .account{
      margin-top: 6.9rem;
        color: black;
    }
</style>