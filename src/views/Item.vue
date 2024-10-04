<template>
  <section class="item">
    <div class="container-fluid ">
      <button @click="$router.push(`/items`)" class="continue-shopping">
        <img :src="continueS" alt="" class="shopping" >
      </button>
      <div v-if="item()">
        <div class="item-card">
          <div class="item-image">
            <img :src="$store.state.item.itemURL" :alt="$store.state.item.itemName" class="item-img">
            <img :src="addToCart" alt="" class="icon" @click="addToCart(item)">
          </div>
          <div class="item-detail">
            <h1 class="item-name">{{$store.state.item.itemName}}</h1>
            <br>
            <br>
            <div class="pp">
              <div class="price">
                <p class="card-text">Price: R{{$store.state.item.itemPrice}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="desc-sec">
          <h3>Description</h3>
          <p class="item-cate">Category: {{$store.state.item.itemCategory}}</p>
          <p class="item-desc">{{$store.state.item.itemDesc}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { useCart } from '../composables/cart.js';
export default {
  data() {
    return {
      continueS: 'https://github.com/candice-dk3/artisanAura-images/blob/main/go-back.png?raw=true',
      addToCart: 'https://github.com/candice-dk3/artisanAura-images/blob/main/purchase.png?raw=true',
    };
  },
  setup() {
    const { addToCart } = useCart();
    return { addToCart };
  },
  methods: {
    getItem() {
      this.$store.dispatch('getItem', this.$route.params.id);
    },
    item() {
      return this.$store.state.item;
    },
    addToCart(item) {
      if (item.quantity > item.itemQuantity) {
        alert(`Only ${item.itemQuantity} items available in stock.`);
      } else {
        this.addToCart({ ...item, quantity: item.quantity });
      }
    },
  },
  mounted() {
    this.getItem();
  },
};
</script>

<style scoped>
.item {
  color: black;
  padding: 1rem;
  margin-top: 7.5rem;
}

.item-card {
  position: relative;
}

.item-image {
  position: relative;
}

.item-detail {
  width: auto;
  padding: 1rem;
  height: auto;
}

.item-name {
  display: flex;
  justify-content: center;
}

.price {
  display: flex;
  justify-content: center;
}

.card-text {
  text-align: center;
}

.item-desc {
  text-align: left;
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.item-cate {
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: left;
}

.item-img {
  width: 30rem;
  height: auto;
  padding-right: 20px;
}

.icon {
  position: absolute;
  top: 30px;
  left: 1080px;
  width: 2rem;
  height: auto;
  z-index: 10;
  cursor: pointer;
}
.shopping{
  width: 2rem;
}
.desc-sec {
  width: 80rem;
  margin: 0 auto;
  justify-content: center;
}

.desc-sec h3, .desc-sec .item-desc {
  text-align: left;
  margin-left: 0;
}

.continue-shopping {
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  margin-left: 100rem;
}

@media screen and (max-width: 300px) {
  .item {
    margin-top: 3.5rem;
  }

  .item-card {
    grid-template-columns: repeat(1, 1fr);
    padding: 1rem;
  }

  .item-detail {
    width: 100%;
    padding: 0.5rem;
  }

  .item-name {
    font-size: 1.2rem;
  }

  .item-desc {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .item-cate {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .price {
    text-align: left;
  }

  .item-img {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }

  .btn {
    width: 100%;
    margin-top: 1rem;
  }
  .continue-shopping {
  font-size: 2rem;
  margin-left: 10rem;
  }
  .icon {
  left: 140px;
  width: 1rem;
  }
  .desc-sec {
  width:15rem;
  margin: 0 auto;
  justify-content: center;
}
}
</style>
