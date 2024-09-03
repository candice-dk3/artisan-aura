<template>
    <div class="account">
        <div v-if="user()">
            {{ $store.state.user.userName  }}
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
        margin-top:10rem;
    }
</style>