import { createStore } from 'vuex';
import axios from 'axios';
import router from '../router/index.js';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import {useCookies} from 'vue-cookies'

const apiURL = 'https://artisan-aura.onrender.com/';
axios.defaults.withCredentials= true
axios.defaults.headers =$cookies.get('token')

export default createStore({
  state: {
    items: [],
    users: [],
    cart: [],
    item: null,
    user: null,
  },
  getters:{
    user: (state) => state.user,
    loggedInUser: state => state.user,
    cart: state => state.cart
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
    setItem(state, payload) {
      state.item = payload;
    },
    setUsers(state, payload) {
      state.users = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    clearUser(state) {
      state.user = null;
    },
    addToCart(state, { item, itemQuantity }) {
      const cartItem = state.cart.find(cartItem => cartItem.itemID === item.itemID)
      if (cartItem) {
          cartItem.itemQuantity += itemQuantity
      } else {
          state.cart.push({ item, itemQuantity })
      }
    }
  },
  actions: {
    async getItems({ commit }) {
      try {
        const { data } = await axios.get(`${apiURL}items`);
        commit('setItems', data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
    async getItem({ commit }, id) {
      try {
        const { data } = await axios.get(`${apiURL}items/${id}`);
        console.log(data);
        commit('setItem', data[0]);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    },
    addToCart({ commit }, { item, quantity }) {
      console.log('Item Added to cart');
      commit('addToCart', { item, quantity })
  },
    async addItem({ commit }, item) {
      try {
        const response = await axios.post(`${apiURL}items/add`, item);
        const data = response.data;
        console.log('Item added:', data.message);

        if (data.message) {
          toast('Item Added Successfully', {
            theme: 'dark',
            type: 'default',
            position: 'top-center',
            dangerouslyHTMLString: true,
          });
        }
      } catch (error) {
        console.error('Error adding item:', error);
      }
    },
    async updateItem({ commit }, item) {
      try {
        const { data } = await axios.patch(`${apiURL}items/update/${item.itemID}`, item);
        console.log('Item updated:', data);
        if (data.message) {
          toast('Item Updated Successfully', {
            theme: 'dark',
            type: 'default',
            position: 'top-center',
            dangerouslyHTMLString: true,
          });
        }
      } catch (error) {
        console.error('Error updating item:', error);
      }
    },
    async deleteItem({ commit }, id) {
      try {
        const { data } = await axios.delete(`${apiURL}items/delete/${id}`);
        console.log('Item deleted:', data);
        if (data.message) {
          toast('Item Deleted Successfully', {
            theme: 'dark',
            type: 'default',
            position: 'top-center',
            dangerouslyHTMLString: true,
          });
        }
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    },
    async getUsers({ commit }) {
      try {
        const { data } = await axios.get(`${apiURL}users`)
        console.log(data);
        commit('setUsers', data)
      } catch (error) {
        console.log(error)
      }
    },
    async getUser({ commit },id) {
      try {
        const { data } = await axios.get(`${apiURL}users/singleuser/${id}`)
        console.log(data);
        commit('setUser', data)
      } catch (error) {
        console.log(error)
      }
    },
    async insertUser({ commit }, user) {
      try {
        const { data } = await (await axios.post(`${apiURL}users/register`, user)).data
        console.log('newdata'+data.message)
        if (data.message){
          toast("User Added Successfully", {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    async deleteUser({ commit }, id) {
      try {
        await axios.delete(`${apiURL}users/delete/${id}`)
        // commit('setUsers', state.users.filter(user => user.userID !== id));
        toast("User Deleted Successfully", {
          theme: "dark",
          type: "default",
          position: "top-center",
          dangerouslyHTMLString: true
        })
      } catch (error) {
        console.log(error)
      }
    },
    async updateUser({ commit }, user) {
      try {
        const { data } = await axios.patch(`${apiURL}users/update/${user.userID}`, user)
        $cookies.set('token', data.token);
        if (data.message) {
          toast("User Updated Successfully", {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    async loginUser({ commit }, info) {
      console.log(info);
      let { data } = await axios.post(`${apiURL}users/login`, info);
      commit('clearUser'); 
      console.log(data);
      $cookies.set('token', data.token);
      if (data.message) {
        toast("Logged In Successfully", {
          "theme": "dark",
          "type": "default",
          "position": "top-center",
          "dangerouslyHTMLString": true
        });
      }
    },
    async logoutUser({ commit }) {
      try {
        await axios.post(`${apiURL}users/logout`);
        $cookies.remove('token');
        commit('setUser', null);
        toast("Logged Out Successfully", {
          theme: "dark",
          type: "default",
          position: "top-center",
          dangerouslyHTMLString: true
        });
        router.push('/');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    }
  },
  modules: {},
});
