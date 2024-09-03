<template>
    <section class="items-sec">
        <!-- <div>
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
        </div> -->
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
                </div>
                <div class="search-bar">
                    <div id="search-div">
                        <input type="text" id="searchInput" v-model="searchQuery" placeholder="Search...">
                    </div>
                </div>
            </div>
            <div class="items" v-if="filteredItems">
                <Card v-for="item in filteredItems" :key="item.itemID" class="item-card">
                  <template #cardHeader>
                      <img :src="item.itemURL" :alt="item.itemName" width="180rem" height="auto">
                  </template>
                  <template #cardBody>
                      <h4 class="item-name">{{ item.itemName }}</h4>
                      <p>Amount: {{ item.itemPrice }}</p>
                      <button @click="addToCart()" >Purchase</button>
                      <button @click="$router.push(`/items/${item.itemID}`)">View More</button>
                  </template>
              </Card>
            </div>
            <div v-else>
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
            // paint: '',
            // brushes: '',
            // canvas: '',
            // stationary: '',
            searchQuery: '',
            selectedCategory: ''
        }
    },
    computed: {
      filteredItems() {
          return this.$store.state.items.filter(item => {
          return item.itemName.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
              (this.selectedCategory === '' || item.itemCategory === this.selectedCategory)
          })
      }
    },
    methods : {
      getItems() {
        this.$store.dispatch('getItems')
    },
    addToCart(){
        this.$store.dispatch('addToCart')
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
  margin-top: 4.9rem;
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

#categoryFilter {
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
max-width: 300px;
height: auto;
text-align: center;
padding: 1rem;
background-color: #fff4a5;
}

.item-image {
max-width: 100%;
height: auto;
}

button {
border: none;
padding: 0.5rem 1rem;
margin-top: 0.5rem;
background-color: #1a9471;
color: white;
font-weight: bold;
cursor: pointer;
margin-left: 0.2rem;
}

button:hover {
background-color: #f5e883;
}
/* .carousel-control-prev, .carousel-control-next{
  background-color: transparent;
}
button[data-v-5ebb49ea]:hover {
  background-color: transparent;
} */
</style>