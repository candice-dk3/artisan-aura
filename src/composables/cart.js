import { ref } from 'vue';
import { toast } from 'vue3-toastify';

const cart = ref([]);
const apiURL = 'https://artisan-aura.onrender.com/';

export function useCart() {
  const addToCart = (item) => {
    const itemInCart = cart.value.find((item) => item.itemID === item.itemID);
    if (itemInCart) {
      itemInCart.itemQuantity += 1;
    } else {
      cart.value.push({ ...item, itemQuantity: 1 });
    }
    toast.success('Item added to cart!');
  };

  const removeFromCart = (item) => {
    cart.value = cart.value.filter((item) => item.itemID !== item.itemID);
  };
  const newItemQuantity = async (itemID, newItemQuantity) => {
    try {
      await axios.patch(`${apiURL}cart/${itemID}`, { itemQuantity: newItemQuantity });
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };
  return {
    cart, addToCart, removeFromCart, newItemQuantity};
  }
