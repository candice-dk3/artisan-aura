import { createStore } from 'vuex';
import axios from 'axios';
import router from './index.js';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const apiURL = 'https://artisan-aura.onrender.com/';

export default createStore({
  state: {
    items: [],
    users: [],
    item: null,
    user: null,
  },
  getters:{
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
        commit('setItem', data);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    },
    async addToCart({ commit }, item) {
      try {
        const { data } = await axios.post(`${apiURL}cart`, item);
        console.log('Added to cart:', data);
        if (data) {
          toast(`${item.itemName} Has Been Added To Cart`, {
            theme: 'dark',
            type: 'default',
            position: 'top-center',
            dangerouslyHTMLString: true,
          });
        }
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
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
        const { data } = await axios.get(`${apiURL}users/${id}`)
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
    loginUser({ commit }, info) {
      axios.post(`${apiURL}users/login`, info)
      .then((response) => {
        const data = response.data;
        console.log(data);
        // Store the token in local storage or cookies
        localStorage.setItem('token', data.token);
        // You can redirect to a different page here
        // router.push('/');
      })
      .catch((error) => {
        console.error(error);
      });
    }  
  },
  modules: {},
});
