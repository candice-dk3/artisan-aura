<template>
  <section class="item">
    <div class="container-fluid">
      <div v-if="item && item.itemName">
        <h2>{{ item.itemName }}</h2>
        <div class="item-card">
          <div class="item-image">
            <img :src="item.itemURL" :alt="item.itemName" class="item-img">
          </div>
          <div class="item-detail">
            <h1 class="item-name">{{ item.itemName }}</h1>
            <h5 class="item-desc">{{ item.itemDesc }}</h5>
            <h4 class="item-cate">Category: {{ item.itemCategory }}</h4>
            <br><br>
            <div class="pp">
              <div class="price">
                <p class="card-text">Price: R{{ item.itemPrice }}</p>
              </div>
              <div class="purchase">
                <button @click="purchaseItem(item)" class="btn">Purchase</button>
              </div>
            </div>
          </div>
        </div>
        <button @click="$router.push(`/items`)">Continue Shopping</button>
      </div>
      <div v-else-if="error">
        <p>Error loading item details: {{ error }}</p>
      </div>
      <div v-else>
        <p>Loading item details...</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      error: null
    }
  },
  computed: {
    item() {
      console.log('Item data:', this.$store.state.item);
      return this.$store.state.item;
    }
  },
  methods: {
    async getItem() {
      try {
        await this.$store.dispatch('getItem', this.$route.params.id);
        console.log('Item data fetched successfully!');
        this.$forceUpdate(); // Force the component to re-render
      } catch (error) {
        this.error = error.message;
        console.error('Error fetching item data:', error);
      }
    },
    purchaseItem(item) {
      // Add logic to update cart or send request to server
      alert(`You have purchased ${item.itemName}`);
    }
  },
  mounted() {
    this.getItem();
  }
};
</script>

<style scoped>
.item {
  margin-top: 7.4rem;
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