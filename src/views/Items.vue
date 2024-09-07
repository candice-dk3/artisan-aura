<template>
    <section class="items-sec">
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img :src="paint" class="d-block w-100" alt="">
                    </div>
                    <div class="carousel-item">
                    <img :src="brushes" class="d-block w-100" alt="">
                    </div>
                    <div class="carousel-item">
                    <img :src="canvas" class="d-block w-100" alt="">
                    </div>
                    <div class="carousel-item">
                    <img :src="stationary" class="d-block w-100" alt="">
                    </div>
                </div>
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
                            <input type="number" id="quantity" v-model="item.quantity"  min="1" :max="item.itemQuantity" value="1">
                    </div>
                    <div class="button-container">
                        <button @click="addToCart(item)">Purchase</button>
                        <button @click="$router.push(`/items/${item.itemID}`)">View More</button>
                    </div>
                    </template>
                </Card>
            </div>
            <div v-else-if="searchQuery !== ''">
                <p>No items found matching your search query.</p>
            </div>
        </div>
    </section>
</template>
<script>
import Card from '@/components/Card.vue'

export default {
    components:{
        Card
    },
    data(){
        return{
            paint: '',
            brushes: '',
            canvas: '',
            stationary: '',
            searchQuery: '',
            selectedCategory: '',
            selectedPriceOrder: '',
            selectedQuantity: '',
            items: []
        }
    },
    computed: {
    filteredItems() {
        return this.$store.state.items.map(item => {
            return {
                ...item,
                quantity: 0 // add a quantity property to each item
            }
        }).filter(item => {
            return item.itemName.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
                (this.selectedCategory === '' || item.itemCategory === this.selectedCategory)
        }).sort((a, b) => {
            if (this.selectedPriceOrder === 'asc') {
                return a.itemPrice - b.itemPrice
            } else if (this.selectedPriceOrder === 'desc') {
                return b.itemPrice - a.itemPrice
            } else {
                return 0
            }
        })
    }
},
    methods : {
      getItems() {
        this.$store.dispatch('getItems')
    },
    addToCart(item) {
        this.$store.dispatch('addToCart', { item, quantity: item.quantity })
    },
        // purchaseAlert(prodName) {
        //     alert(`You have purchased ${prodName}`);
        // },
    },
    mounted() {
        this.getItems()
    }
}
</script>
<style scoped>
.items-sec{
    margin-top: 6.9rem;
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
padding: 4rem;
justify-content: center;
}

.item-card {
  flex: 1 1 300px;
  max-width: 320px;
  height: 30rem;
  text-align: center;
  padding: 1rem;
  background-color: #fff4a5;
  position: relative;
}

.item-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.button-container {
  position: absolute;
  /* top: 0.4rem; */
  /* bottom: 2rem; */
  left: 0;
  right: 0;
  text-align: center;
}

button {
  border: none;
  padding: 0.5rem 1rem;
  background-color: #1a9471;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-left: 0.2rem;
}

button:hover {
background-color: #f5e883;
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
/* .carousel-control-prev, .carousel-control-next{
  background-color: transparent;
}
button[data-v-5ebb49ea]:hover {
  background-color: transparent;
} */
</style>