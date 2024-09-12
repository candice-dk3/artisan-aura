<template>
  <section class="items-sec">
    <div class="spacer"></div>
    <div class="BSI-carousel">
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="paint" class="d-block w-100" alt="carousel-image">
            <div class="carousel-caption">
              <p>Need paint? We've got it!! <br><span>Shop Now at <strong>Artisan Aura</strong></span></p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="brushes" class="d-block w-100" alt="carousel-image">
            <div class="carousel-caption">
              <p>Shop Now!!</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div>
      <div class="search-sort">
        <div class="sort-by-bar">
          <label for="Sort-by" class="sort">Sort By:</label>
          <select id="categoryFilter" v-model="selectedCategory">
            <option value="">All Categories</option>
            <option value="Paint">Paint</option>
            <option value="Paint Brush">Paint Brush</option>
            <option value="Canvas">Canvas</option>
            <option value="Stationary">Stationary</option>
          </select>
          <select id="priceFilter" v-model="selectedPriceOrder">
            <option value="">Price:</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
        <div class="search-bar">
          <div id="search-div">
            <input type="text" id="searchInput" v-model="searchQuery" placeholder="Search...">
          </div>
        </div>
      </div>
      <div class="items" v-if="filteredItems.length > 0">
        <Card v-for="item in filteredItems" :key="item.itemID" class="item-card">
          <template #cardHeader>
            <img :src="item.itemURL" :alt="item.itemName" width="180rem" height="auto">
          </template>
          <template #cardBody>
            <h4 class="item-name">{{ item.itemName }}</h4>
            <p>Price: R{{ item.itemPrice }}</p>
            <div class="quantity-container">
              <label for="quantity">Quantity:</label>
              <input type="number" id="quantity" v-model="item.itemQuantity" min="1" :max="item.itemQuantity" value="1">
            </div>
            <div class="button-container">
              <button @click="addToCart(item)">Purchase</button>
              <router-link :to="{name:'Item',params:{id:item.itemID}}" class="view-more-button">View More</router-link>
            </div>
          </template>
        </Card>
      </div>
      <div v-else-if="searchQuery !== ''">
        <p>No items found matching your search query.</p>
      </div>
      <div v-else>
        <p v-if="loading">Loading...</p>
        <p v-if="error">{{ error }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/Card.vue';
import axios from 'axios';
import { useCart } from '../composables/cart';

export default {
  components: {
    Card
  },
  data() {
    return {
      paint: 'https://github.com/candice-dk3/artisanAura-images/blob/main/art-1.jpg?raw=true',
      brushes: 'https://github.com/candice-dk3/artisanAura-images/blob/main/art-2.jpg?raw=true',
      searchQuery: '',
      selectedCategory: '',
      selectedPriceOrder: '',
      items: [],
      loading: false,
      error: '',
    };
  },
  computed: {
    filteredItems() {
      return this.items.map(item => ({
        ...item,
        quantity: 0
      }))
      .filter(item => item.itemName.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
        (this.selectedCategory === '' || item.itemCategory === this.selectedCategory))
      .sort((a, b) => {
        if (this.selectedPriceOrder === 'asc') {
          return a.itemPrice - b.itemPrice;
        } else if (this.selectedPriceOrder === 'desc') {
          return b.itemPrice - a.itemPrice;
        } else {
          return 0;
        }
      });
    }
  },
  setup() {
    const { addToCart } = useCart();
    return { addToCart };
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await axios.get('https://artisan-aura.onrender.com/items');
        this.items = response.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    }
  },
  created() {
    this.fetchProducts();
  }
}
</script>

<style scoped>
.items-sec {
  margin-top: 7.4rem;
}

.BSI-carousel {
  max-width: 80%;
  margin: 0 auto;
}

.carousel-inner {
  height: 20rem;
}

.carousel-item img {
  height: 20rem;
  object-fit: cover;
  width: 100%;
}

.spacer {
  height: 3rem;
}

.carousel-caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000000;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-weight: bold;
}

.search-sort {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
}

#searchInput {
  border: none;
  background-color: #f7f6f5;
  padding: 0.5rem;
}

#categoryFilter, #priceFilter {
  background-color: transparent;
  border: none;
  padding: 0.5rem;
}

#categoryFilter:focus, #priceFilter:focus {
  border: none;
  box-shadow: none;
  outline: none;
}

#categoryFilter option, #priceFilter option {
  background-color: #ffffff;
  border: none;
  box-shadow: none;
}

.sort {
  color: black;
  font-weight: 800;
  font-size: 1.3rem;
  margin-right: 1rem;
}

.items {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 1rem;
  justify-content: center;
}

.item-card {
  flex: 1 1 300px;
  max-width: 320px;
  height: 30rem;
  text-align: center;
  padding: 1rem;
  background-color: #9288C2;
  position: relative;
}

.item-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.button-container {
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
}

button, .view-more-button {
  border: none;
  padding: 0.5rem 1rem;
  background-color: #1a9471;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-left: 0.2rem;
  text-decoration: none;
}

button:hover, .view-more-button:hover {
  background-color: #f5e883;
}

.view-more-button {
  display: inline-block;
  width: 8rem;
  text-align: center;
}

.quantity-container {
  margin-bottom: 1rem;
}

.quantity-container label {
  margin-right: 0.5rem;
}

.quantity-container input[type="number"] {
  width: 3rem;
  height: 2rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #f7f6f5;
}

.available-quantity {
  margin-right: 1rem;
  font-size: 0.9rem;
  color: black;
}

.carousel-control-prev, .carousel-control-next {
  background-color: transparent;
  border: none;
  box-shadow: none;
}

.carousel-control-prev:hover, .carousel-control-next:hover {
  background-color: transparent;
  border: none;
  box-shadow: none;
}

.carousel-control-prev-icon, .carousel-control-next-icon {
  background-color: transparent;
  border: none;
  box-shadow: none;
}

.carousel-control-prev-icon {
  filter: invert(100%);
}

.carousel-control-next-icon {
  filter: invert(100%);
}
</style>
