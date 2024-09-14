import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import axios from 'axios';

const cart = ref([]);
const apiURL = 'https://artisan-aura.onrender.com/';

export function useCart() {
  const addToCart = (item) => {
    const itemInCart = cart.value.find((i) => i.itemID === item.itemID);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      cart.value.push({ ...item, quantity: 1 });
    }
    toast.success('Item added to cart!');
  };

  const removeFromCart = async (itemID) => {
    try {
      await axios.delete(`${apiURL}cart/${itemID}`);
      cart.value = cart.value.filter((item) => item.itemID !== itemID);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const newItemQuantity = async (itemID, newItemQuantity) => {
    try {
      await axios.patch(`${apiURL}cart/${itemID}`, { quantity: newItemQuantity });
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  return { cart, addToCart, removeFromCart, newItemQuantity };
}
