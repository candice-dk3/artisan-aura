<template>
  <section class="cart-sec">
    <div v-if="loading">Loading...</div>
    <div v-if="!loading && cart.length > 0">
      <div v-for="item in cart" :key="item.itemID" class="cart-item">
        <img :src="item.itemURL" :alt="item.itemName" width="100" height="auto">
        <div>
          <h4>{{ item.itemName }}</h4>
          <p>Price: R{{ item.itemPrice }}</p>
          <div class="quantity-container">
            <button @click="decreaseQuantity(item)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)">+</button>
          </div>
          <button @click="removeFromCart(item.itemID)">Remove</button>
        </div>
        <!-- Total Price for each item -->
        <p>Total Price: R{{ item.itemPrice * item.quantity }}</p>
      </div>
      <!-- Total Price of the entire cart -->
      <p>Total Cart Price: R{{ totalPrice }}</p>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { computed, ref, onMounted } from 'vue';
import { useCart } from '../composables/cart';

export default {
  setup() {
    const { cart, newItemQuantity, removeFromCart: removeItem } = useCart();
    const loading = ref(false);
    const error = ref('');

    // Increase item quantity
    const increaseQuantity = (item) => {
      if (typeof newItemQuantity === 'function') {
        newItemQuantity(item.itemID, item.quantity + 1); // Update API and cart
        item.quantity += 1; // Update locally after API
      } else {
        console.error('newItemQuantity is not a function');
      }
    };

    // Decrease item quantity
    const decreaseQuantity = (item) => {
      if (item.quantity > 1 && typeof newItemQuantity === 'function') {
        newItemQuantity(item.itemID, item.quantity - 1); // Update API and cart
        item.quantity -= 1; // Update locally after API
      } else {
        console.error('newItemQuantity is not a function or invalid quantity');
      }
    };

    // Remove item from cart
    const removeFromCart = async (itemID) => {
      try {
        await removeItem(itemID); // Send delete request to API
        cart.value = cart.value.filter(item => item.itemID !== itemID); // Update locally
      } catch (error) {
        console.error('Error removing item from cart:', error);
      }
    };

    // Fetch cart items on mount
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

    // Total price of the entire cart
    const totalPrice = computed(() => {
      return cart.value.reduce((acc, item) => acc + item.itemPrice * item.quantity, 0);
    });

    return { cart, increaseQuantity, decreaseQuantity, removeFromCart, loading, error, totalPrice };
  },
};
</script>

<style scoped>
  .quantity-container {
    display: flex;
    align-items: center;
  }
  .quantity-container button {
    margin: 0 5px;
  }
</style>

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
