<template>
    <div>
      <h2>Cart</h2>
      <ul>
        <li v-for="item in cart" :key="item.itemID">
          {{ item.item.name }} (x{{ item.quantity }})
        </li>
      </ul>
    </div>
  </template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            random: 'https://raw.githubusercontent.com/candice-dk3/artisanAura-images/master/paint-kit-1.webp',
        }
    },
    computed: {
        cart() {
            return this.$store.state.cart
        },
        ...mapGetters(['cart'])
    },
    watch: {
  cart: {
    handler: function(newCart) {
      // Update the component with the new cart data
    },
    deep: true
  }
}
}
</script>
<style scoped>
    .inner-cart-sec{
         margin-top: 7.4rem;
    }
    /* h1{
        color: black;
    } */
    .checkout{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 2rem;
    }
    .inner-checkout{
        background-color: rgb(201, 143, 255);
        width: 30rem;
        float: right;
        margin-right: 4rem;
    }
    .container {
        display: flex;
        justify-content: center;
    }
    .item-IC{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        background-color: rgb(227, 179, 100);
        padding: 1rem;
        width: 24rem;
    }
    .random{
        width: 6rem;
    }
    .itemDetails{
        margin-right: 20rem;
        width: 10rem;
        padding: 1rem;

    }
</style>