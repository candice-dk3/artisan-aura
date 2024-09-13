<template>
  <div>
      <div class="row my-2">
        <div class="row center">
          <div class="card mt-5">
            <div class="img">
              <img :src="user.userProfilePicture" class="card-img-top" />
            </div>
            <div class="card-body">
              <div class="Username">
                <h5 class="card-title">{{ user.firstName }}</h5>
                <h5 class="card-title">{{ user.lastName }}</h5>
                <h4>{{ user.emailAdd }}</h4>
              </div>
              <div>
                <p class="card-text">{{ user.userRole }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <router-link to="/logout">
          <button id="log-in-button" class="mt-3" @click="logoutUser">
            Log Out
          </button>
        </router-link>
        <button class="btn btn-primary" @click="showModal = true">
          Update My Information
        </button>
      </div>
    </div>
    <EditUser :user="user" :isVisible="showModal" @update="fetchUserInfoFromCookies" @close="showModal = false"/>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import EditUser from '@/components/EditUser.vue';
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies();

export default {
  components: {
    Spinner,
    EditUser
  },
  data() {
    return {
      loading: true,
      userInfo: null, 
      showModal: false
    };
  },
  computed: {
    user() {
      return this.$store.state.user || this.userInfo;
    }
  },
  methods: {
    fetchUserInfoFromCookies() {
      const storedUserInfo = cookies.get('userInfo');
      if (storedUserInfo && storedUserInfo.user) {
        this.userInfo = storedUserInfo.user;
        this.$store.commit('setUser', storedUserInfo.user);
      } else {
        this.getUser(); 
      }
    },
    getUser() {
      const storedUserInfo = cookies.get('userInfo');
      if (storedUserInfo && storedUserInfo.user.userID) {
        this.$store.dispatch('getUser', storedUserInfo.user.userID)
          .then(() => {
            this.loading = false;
          })
          .catch(e => {
            console.error('Error fetching user:', e);
            this.loading = false;
          });
      } else {
        console.warn('No user found in cookies');
        this.loading = false;
      }
    },
    logoutUser() {
      cookies.remove('userInfo');
      this.$store.dispatch("logout");
      Swal.fire({
        title: "Logged Out!",
        text: "You have been logged out. Please refresh the page.",
        icon: "success",
        showConfirmButton: true,
      });
      this.$router.push('/login');
    }
  },
  mounted() {
    this.fetchUserInfoFromCookies();
  }
};
</script>

<style scoped>
.img {
  width: 300px;
  height: 400px;
}
.img > img {
  object-fit: contain;
}
</style>
