<template>
    <section class="home-sec">
        <div class="inner-home">

            <div class="welcome">
                <img :src="image" alt="Background-image" class="bg-image">
                <div class="text-overlay">
                    <h2 class="h2-text">Welcome To</h2>
                    <h1 class="h1-text">Artisan Aura</h1>
                </div>
            </div>

            <div class="SBC">
                <h4 class="cText">Shop by category</h4>
                <div class="categories">
                    <div class="category-container">
                        <img :src="categoryPaint" alt="" class="category-image">
                        <a href="/Items" class="category-text"><h5>Shop Paint</h5></a>
                    </div>
                    <div class="category-container">
                        <img :src="categoryPBrushes" alt="" class="category-image">
                        <a href="/Items" class="category-text"><h5>Shop Paint Brushes</h5></a>
                    </div>
                    <div class="category-container">
                        <img :src="categoryCanvas" alt="" class="category-image">
                        <a href="/Items" class="category-text"><h5>Shop Canvas</h5></a>
                    </div>
                    <div class="category-container">
                        <img :src="categoryStationary" alt="" class="category-image">
                        <a href="/Items" class="category-text"><h5>Shop Stationary</h5></a>
                    </div>
                </div>
            </div>
            <div class="spacer"></div>

            <div class="BSI">
            <div class="bText">
                <h4>Browse some of our best selling items</h4>
            </div>
            <div class="bsItems">
                <div v-for="(item, index) in bestSellingItems" :key="index" class="bsItem">
                    <div class="img-div">
                        <img :src="item.itemURL" alt="" class="bsItemImage">
                    </div>
                    <div class="name-div">
                        <h5>{{ item.itemName }}</h5>
                        <div class="price-view">
                            <p>Price: R {{ item.itemPrice }}</p>
                            <button @click="$router.push('/Items')">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="spacer"></div>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            image: 'https://github.com/candice-dk3/artisanAura-images/blob/master/person-painting-1.jpg?raw=true',
            categoryPaint: 'https://github.com/candice-dk3/artisanAura-images/blob/master/paint.jpeg?raw=true',
            categoryPBrushes: 'https://github.com/candice-dk3/artisanAura-images/blob/master/paintbrush-picture-2.png?raw=true',
            categoryCanvas: 'https://raw.githubusercontent.com/candice-dk3/artisanAura-images/master/canvas.webp',
            categoryStationary: 'https://raw.githubusercontent.com/candice-dk3/artisanAura-images/master/stationary.webp',
            bestSellingItems: [
                {
                    itemURL: 'https://raw.githubusercontent.com/candice-dk3/artisanAura-images/master/paintbrush-kit-2.webp',
                    itemName: 'Crockd - Pack of 3',
                    itemPrice: '150'
                },
                {
                    itemURL: 'https://raw.githubusercontent.com/candice-dk3/artisanAura-images/master/pen-pack-1.webp',
                    itemName: '60-Pack of Colored Pens',
                    itemPrice: '100'
                },
                {
                    itemURL: 'https://github.com/candice-dk3/artisanAura-images/blob/master/canvas-pack-2.jpg?raw=true',
                    itemName: 'Canvas - Pack  of 5',
                    itemPrice: '180'
                }
            ]
        }
    }
}
</script>
<style scoped>
    .home-sec{
        height: auto;
        margin-top: 6.9rem;
    }

    /* Welcome Sect */
    .bg-image {
    width: 100%;
    height: 30rem;
    object-fit: cover;
    }
    .welcome {
        background-size: cover;
    }
    .h2-text{
        color: white;
        font-size: 4rem;
        padding: 1rem;
    }
    .h1-text{
        color: white;
        font-size: 6rem;
    }
    .text-overlay {
        position: absolute;
        top: 50%;
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
        background-image: url('https://github.com/candice-dk3/artisanAura-images/blob/master/person-painting-1.jpg?raw=true');
        background-size: cover;
        filter: blur(3px);
        z-index: -1;
    }

    /* Category Sect */
    .SBC{
        padding: 3rem;
    }
    .cText{
        font-size: 2rem;
        font-weight: 700;
    }
    .categories{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    .category-container {
        position: relative;
    }
    .category-image, .category-Canvas, .category-Paint {
        width: 22rem;
        height: 27rem;
        object-fit: cover;
        padding: 2rem;
    }
    .category-text {
        position: absolute;
        top: 87%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 900;
        z-index: 1;
    }
    .category-text:hover {
        animation: pulse 0.5s ease-in-out; /* Add pulse animation on hover */
    }
    .category-text:active {
        animation: bounce 0.5s ease-in-out; /* Add bounce animation on click */
    }
    @keyframes pulse {
        0% {
            transform: translate(-50%, -50%) scale(1);
        }
        50% {
            transform: translate(-50%, -50%) scale(1.1);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
        }
    }
    @keyframes bounce {
        0% {
            transform: translate(-50%, -50%) scale(1);
        }
        50% {
            transform: translate(-50%, -50%) scale(1.2);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
        }
    }

    .spacer {
        height: 5rem;
    }
    /* Best Selling items */
    .bsItems {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}
    .bsItemImage {
        width: 20rem;
        height: 20rem;
        object-fit: cover;
        padding: 2rem;
    }
    .bsItem{
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        background-color: #ED8D8D;
        width: 20rem;
        height:28rem;
    }
    .price-view{
        display: flex;
        gap: 20%;
        justify-content: center;
        padding: 2rem;
        align-items: center;
    }

@media screen and (max-width: 390px){
    .categories{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
    .bsItems {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>