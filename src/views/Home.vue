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
                    <div class="paint-category">
                        <img :src="categoryPaint" alt="" class="category-image">
                        <a href="/Items" class="category-text"><h5>Shop Paint</h5></a>
                    </div>
                    <div class="paintbrushes-category">
                        <img :src="categoryPBrushes" alt="" class="category-image">
                        <a href="/Items" class="category-text"><h5>Shop Paint Brushes</h5></a>
                    </div>
                    <div class="stationary-category">
                        <img :src="categoryCanvas" alt="" class="category-Canvas">
                        <a href="/Items" class="category-text"><h5>Shop Canvas</h5></a>
                    </div>
                    <div class="canvas-category">
                        <img :src="categoryStationary" alt="" class="category-image">
                        <a href="/Items" class="category-text"><h5>Shop Stationary</h5></a>
                    </div>
                </div>
            </div>

            <div class="BSI">
            <div class="bText">
                <h4>Browse some of our best selling items</h4>
            </div>
            <div class="bsItems">
                <div v-for="(item, index) in bestSellingItems" :key="index" class="bsItem">
                    <img :src="item.itemURL" alt="" class="bsItemImage">
                    <h5>{{ item.itemName }}</h5>
                    <p>{{ item.itemDesc }}</p>
                </div>
            </div>
        </div>
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
                    itemURL: '',
                    itemName: '',
                    itemDesc: ''
                },
                {
                    itemURL: '',
                    itemName: '',
                    itemDesc: ''
                },
                {
                    itemURL: '',
                    itemName: '',
                    itemDesc: ''
                }
            ]
        }
    }
}
</script>
<style scoped>
    .home-sec{
        background-color: #8D6262;
        height: auto;
        margin-top: 4.9rem;
    }

    /* Welcome Sect */
    .bg-image {
    width: 100%;
    height: 30rem;
    /* object-fit: cover; */
    }
    .welcome {
        background-size: cover;
    }
    .h2-text{
        font-size: 4rem;
        padding: 1rem;
    }
    .h1-text{
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

    /* Category Sect */
    .SBC{
        padding: 2rem;
    }
    .cText{
        font-size: 2rem;
        font-weight: 700;
    }
    .categories{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    .category-image{
        width: 20rem;
        border-radius: 10rem;
        height: auto;
        padding: 2rem;
    }
    .category-Canvas{
        width: 21rem;
        height: 20rem;
        border-radius: 10rem;
        padding: 2rem;
    }
    .category-Paint{
        width: 21rem;
        height: 21rem;
        border-radius: 10rem;
        padding: 2rem;
    }
    .category-text{
        color: white;
        text-decoration: none;
    }

    /* Best Selling items */
    .bsItems {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .bsItemImage {
        width: 10rem;
        height: 10rem;
        border-radius: 10rem;
        padding: 2rem;
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