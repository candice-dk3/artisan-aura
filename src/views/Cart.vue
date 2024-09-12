<template>
  <section class="cart-sec">
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="!loading && cart.length > 0">
      <div v-for="item in cart" :key="item.itemID" class="cart-item">
        <img :src="item.itemURL" :alt="item.itemName" width="100" height="auto">
        <div>
          <h4>{{ item.itemName }}</h4>
          <p>Price: R{{ item.itemPrice }}</p>
          <p>Quantity: {{ item.itemQuantity }}</p>
          <div class="quantity-container">
            <button @click="decreaseQuantity(item.itemQuantity )">-</button>
            <span>{{ item.itemQuantity }}</span>
            <button @click="increaseQuantity(item.itemQuantity )">+</button>
          </div>
          <button @click="removeFromCart(item.itemID)">Remove</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useCart } from '../composables/cart';

export default {
  setup() {
    const { cart, newItemQuantity } = useCart();
    const loading = ref(false);
    const error = ref('');

    const increaseQuantity = (item) => {
      if (typeof newItemQuantity === 'function') {
        newItemQuantity(item.itemID, item.itemQuantity  + 1);
      } else {
        console.error('newItemQuantity is not a function');
      }
    };

    const decreaseQuantity = (item) => {
      if (typeof newItemQuantity === 'function') {
        newItemQuantity(item.itemID, item.itemQuantity  - 1);
      } else {
        console.error('newItemQuantity is not a function');
      }
    };

    const removeFromCart = async (itemID) => {
      try {
        await axios.delete(`https://artisan-aura.onrender.com/users/carts/${itemID}`);
        // Refresh cart or remove item locally
      } catch (error) {
        console.error('Error removing item from cart:', error);
      }
    };

    onMounted(async () => {
      loading.value = true;
      try {
        const response = await axios.get('https://artisan-aura.onrender.com/users/carts');
        cart.value = response.data;
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    });

    return { cart, increaseQuantity, decreaseQuantity, removeFromCart, loading, error };
  }
}
</script>

<style scoped>
.cart-sec {
  margin-top: 7.4rem;
  padding: 1rem;
  color: black;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
}

.cart-item img {
  margin-right: 1rem;
}

.quantity-container {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.quantity-container button {
  background-color: #1a9471;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
}

.quantity-container button:hover {
  background-color: #f5e883;
}

button {
  border: none;
  padding: 0.5rem 1rem;
  background-color: #1a9471;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #f5e883;
}
</style>
