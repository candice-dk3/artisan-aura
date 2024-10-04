<template>
  <section class="cart-sec">
    <div class="welcome">
      <img :src="image" alt="Background-image" class="bg-image" />
      <div class="text-overlay">
        <h1 class="h1-text">Your Cart</h1>
      </div>
    </div>
    <div class="spacer"></div>
    <div class="items-card" v-for="item in cart" :key="item.id">
      <div class="item-picture">
        <img :src="item.itemURL" alt="Item Image" class="itemImage" />
      </div>
      <div class="item-details">
        <div class="top-details">
          <h4 class="IN-text">{{ item.itemName }}</h4>
          <div class="quantity-buttons">
            <button @click="decreaseQuantity(item)" class="btn">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)" class="btn">+</button>
          </div>
          <h5>R{{ item.itemPrice }}</h5>
        </div>
        <div class="bottom-details">
          <h5 class="BD-text">Total: R{{ item.itemPrice * item.quantity }}</h5>
          <button @click="removeFromCart(item)" class="btn1">Remove</button>
        </div>
      </div>
    </div>
    <div class="clear-cart">
      <button class="btn" @click="clearCart">Clear Cart</button>
    </div>
    <div class="spacer"></div>
    <div class="total-sec">
      <h4>Your Total: R{{ totalCartPrice }}</h4>
      <button class="btn">Proceed to Checkout</button>
    </div>
    <div class="spacer"></div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useCart } from '@/composables/cart.js';

export default {
  data() {
    return {
      image: 'https://github.com/candice-dk3/artisanAura-images/blob/main/clouds.gif?raw=true',
    };
  },
  setup() {
    const { cart} = useCart();
    const totalCartPrice = computed(() => {
      return cart.value.reduce((acc, item) => acc + item.itemPrice * item.quantity, 0);
    });
    const increaseQuantity = (item) => {
    item.quantity++;
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      item.quantity--;
    }
  };
  const removeFromCart = (item) => {
    const index = cart.value.indexOf(item);
    if (index !== -1) {
      cart.value.splice(index, 1);
    }
  };
  const clearCart = () => {
  if (confirm("Are you sure you want to clear the cart?")) {
    cart.value.splice(0, cart.value.length);
    alert("Cart has been cleared!");
    }
  };
  return { cart, removeFromCart, totalCartPrice, increaseQuantity, decreaseQuantity, clearCart };
  },
};
</script>

<style scoped>
.cart-sec{
  color: black;
}

.bg-image {
  width: 100%;
  height: 38rem;
  object-fit: cover;
}
.welcome {
    background-size: cover;
}
.h1-text {
    color: white;
    font-size: 6rem;
}
.text-overlay {
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: black;
}
.text-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  filter: blur(3px);
  z-index: -1;
}

.items-card{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 70rem;
  margin: 0 auto;
  margin-bottom: 2rem;
}
.top-details{
  text-align: left;
}
.bottom-details{
  text-align: left;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  width: 20rem;
}
.item-picture, .item-details{
  width: 18rem;
}
.itemImage{
  /* width: 14rem; */
  height: 12rem;
  object-fit: cover;
  /* display: flex;
  justify-content: flex-start; */
  /* margin-left: 4rem; */
}
.IN-text{
  font-size: 1.7rem;
  margin-right: 10rem;
  /* width: 35rem; */
}
.total-sec{
  text-align: left;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 20rem;
  max-width: 30rem;
  margin: 0 auto;
}
.btn{
  border: none;
}
.btn1{
  border: none;
  text-align: start;
  background-color: transparent;
  width: 1rem;
}
.spacer{
  margin-top: 5rem;
}
@media screen and (max-width: 390px) {
  .items-card{
  grid-template-columns: repeat(1, 1fr);
  width: 20rem;
  max-width: 30rem;
}
.bg-image {
  height: 20rem;
}
.h1-text {
  font-size: 4rem;
}
.text-overlay {
  top: 22%;
}
.total-sec{
  grid-template-columns: repeat(1, 1fr);
}
/* .itemImage{
  margin-left: 1.7rem;
} */
.IN-text{
  font-size: 1.2rem;
  margin-right: 0rem;
  margin-top: 1rem;
}
}
</style>