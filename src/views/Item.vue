<template>
    <section class="item">
      <div class="container-fluid">
        <div v-if="item()">
          <h2>{{ $store.state.item.itemName }}</h2>
          <div class="item-card">
            <div class="item-image">
              <img :src="$store.state.item.itemURL" :alt="$store.state.item.itemName" class="item-img">
            </div>
            <div class="item-detail">
              <h1 class="item-name">{{ $store.state.item.itemName }}</h1>
              <h5 class="item-desc">{{ $store.state.item.itemDesc }}</h5>
              <h4 class="item-cate">Category: {{ $store.state.item.itemCategory }}</h4>
              <br>
              <br>
              <div class="pp">
                <div class="price">
                  <p class="card-text">Price: R{{ $store.state.item.itemPrice }}</p>
                </div>
                <div class="purchase">
                  <button @click="purchaseAlert(item.itemName)" class="btn">Purchase</button>
                </div>
              </div>
            </div>
          </div>
          <button @click="$router.push('/items/')">Continue Shopping</button>
        </div>
        <div v-else>
          <p>Loading item details...</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    methods: {
        getItem() {
          this.$store.dispatch('getItem',this.$route.params.id)
          // console.log(this.$store.item.itemName);
        },
        item() {
          return this.$store.state.item;
        },
        purchaseAlert(itemName) {
          alert(`You have purchased ${itemName}`);
        },
    },
    mounted() {
      this.getItem();
    },
  };
  </script>
  
  <style scoped>
  .item {
    margin-top: 3.9rem;
  }
  
  .item-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 6rem;
  }
  
  .item-detail {
    width: 50rem;
    padding: 1rem;
    height: auto;
  }
  
  .item-name {
    text-align: left;
  }
  
  .item-desc {
    text-align: left;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  
  .item-cate {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  
  .pp {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  
  .price {
    text-align: end;
  }
  
  .item-img {
    width: 30rem;
    height: auto;
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
  
    .pp {
      grid-template-columns: repeat(1, 1fr);
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
  }
  </style>
  