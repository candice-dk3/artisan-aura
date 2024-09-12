<template>
  <div>
    <!-- Spinner for loading state -->
    <div v-if="loading">
      <Spinner />
    </div>

    <!-- Display user info when available -->
    <div v-else>
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
  </div>
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
      loading: true,  // Loading state for spinner
      userInfo: null, // Local user data from cookies or API
      showModal: false // Controls the visibility of the EditUser modal
    };
  },
  computed: {
    // Get user data from Vuex store or fallback to local userInfo
    user() {
      return this.$store.state.user || this.userInfo;
    }
  },
  methods: {
    // Fetch user info from cookies
    fetchUserInfoFromCookies() {
      const storedUserInfo = cookies.get('userInfo');
      if (storedUserInfo && storedUserInfo.user) {
        this.userInfo = storedUserInfo.user; // Set local user data
        this.$store.commit('setSingleUser', storedUserInfo.user); // Update Vuex state
      } else {
        this.getUser(); // Fallback to API if no cookie data is available
      }
    },
    // Fetch user data from the server using Vuex action
    getUser() {
      const storedUserInfo = cookies.get('userInfo');
      if (storedUserInfo && storedUserInfo.user.userID) {
        this.$store.dispatch('getUser', storedUserInfo.user.userID)
          .then(() => {
            this.loading = false; // Stop loading once user is fetched
          })
          .catch(e => {
            console.error('Error fetching user:', e);
            this.loading = false; // Handle error and stop loading
          });
      } else {
        console.warn('No user found in cookies');
        this.loading = false;
      }
    },
    // Logout user and clear cookies/Vuex state
    logoutUser() {
      cookies.remove('userInfo'); // Clear cookies
      this.$store.dispatch("logout"); // Dispatch Vuex logout action
      Swal.fire({
        title: "Logged Out!",
        text: "You have been logged out. Please refresh the page.",
        icon: "success",
        showConfirmButton: true,
      });
      this.$router.push('/login'); // Redirect to login page
    }
  },
  mounted() {
    this.fetchUserInfoFromCookies(); // Try fetching user data from cookies on mount
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
