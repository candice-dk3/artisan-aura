<template>
    <section class="about-inner-sec">
        <div class="welcome">
            <img :src="image" alt="Background-image" class="bg-image">
            <div class="text-overlay">
                <h1 class="h1-text">About Us</h1>
            </div>
        </div>
        <div class="our-Story">
            <div class="history">
                <div class="text-box">
                    <p>Artisan Aura is an up-and-coming art supply store, with a mission to provide high-quality art materials tailored to artists of all levels. Established in 2024, Artisan Aura is focused on offering a unique blend of traditional and innovative art supplies, carefully curated to meet the needs of creators across different artistic disciplines.
                        What makes Artisan Aura unique as an art supply store is its dedication to artistry and its commitment to creating a seamless shopping experience for artists. The store prioritizes modern design aesthetics, reflected both in its product selections and in its user-friendly e-commerce platform, designed for an intuitive and immersive shopping experience. They specialize in art supplies ranging from paints, brushes, and canvases to niche tools and materials, ensuring both beginner and professional artists have access to the tools they need for self-expression.
                    </p>
                </div>
                <div class="image-box">
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img :src="carousel1" class="d-block w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img :src="carousel2" class="d-block w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img :src="carousel3" class="d-block w-100" alt="">
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
            </div>
        </div>
        <div class="our-Team">
            <h1>Meet our team</h1>
                <div class="team-mate">
                    <div class="card-team" style="width: 16rem;">
                        <img :src="teamMember1" class="card-img-top" alt="">
                        <div class="card-body">
                            <p class="team-text">Position: Store Manager</p><br>
                            <p class="team-text">Name: Melisa Harris</p>
                        </div>
                    </div>
                    <div class="card" style="width: 16rem;">
                        <img :src="teamMember2" class="card-img-top" alt="">
                        <div class="card-body">
                            <p class="team-text">Position: Sales Associate</p><br>
                            <p class="team-text">Name: Emily Harris</p>
                        </div>
                    </div>
                    <div class="card" style="width: 16rem;">
                        <img :src="teamMember3" class="card-img-top" alt="">
                        <div class="card-body">
                            <p class="team-text">Position: Inventory Specialist</p><br>
                            <p class="team-text">Name: Arjun Colins</p>
                        </div>
                    </div>
                </div>
        </div>
        <div class="customer-feedback">
            <h1>Our customer Feedback</h1>
            <div class="customer-card">
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img :src="customerImage1" class="img-fluid rounded-start" alt="customer-image">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Customer Name</h5>
                                <p class="rating">
                                    <img :src="star1" alt="" class="star">
                                    <img :src="star1" alt="" class="star">
                                    <img :src="star1" alt="" class="star">
                                    <img :src="star1" alt="" class="star">
                                    <img :src="star1" alt="" class="star">
                                </p>
                                <p class="card-text"><small class="text-body-secondary">I recently discovered Artisan Aura,
                                    and I couldn't be happier with my experience! As an artist, finding a shop that offers
                                     high-quality art supplies at reasonable prices is like striking gold, and
                                     Artisan Aura is just that.</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 " style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img :src="customerImage2" class="img-fluid rounded-start" alt="customer-image">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Customer Name</h5>
                                <p class="rating">
                                    <img :src="star1" alt="" class="star">
                                    <img :src="star1" alt="" class="star">
                                    <img :src="star1" alt="" class="star">
                                    <img :src="star1" alt="" class="star">
                                    <img :src="star1" alt="" class="star">
                                </p>
                                <p class="card-text"><small class="text-body-secondary">The customer service is fantastic
                                    too—friendly, responsive, and helpful when I had questions about different mediums.
                                    Whether you're a professional artist or just starting out, Artisan Aura is a
                                    must-visit for all your creative needs. I'll definitely be a returning customer!</small></p>
                            </div>
                        </div>
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
            image: 'https://github.com/candice-dk3/artisanAura-images/blob/main/movingPainting.gif?raw=true',
            carousel1:'https://github.com/candice-dk3/artisanAura-images/blob/main/clouds.gif?raw=true',
            carousel2:'',
            carousel3:'https://github.com/candice-dk3/artisanAura-images/blob/main/womanPainting.gif?raw=true',
            teamMember1:'https://github.com/candice-dk3/artisanAura-images/blob/main/manager1.png?raw=true',
            teamMember2:'https://github.com/candice-dk3/artisanAura-images/blob/main/manager2.png?raw=true',
            teamMember3:'https://github.com/candice-dk3/artisanAura-images/blob/main/manager3.png?raw=true',
            customerImage1: 'https://github.com/candice-dk3/artisanAura-images/blob/main/fb-woman.png?raw=true',
            customerImage2: 'https://github.com/candice-dk3/artisanAura-images/blob/main/fb-man.png?raw=true',
            star1: 'https://github.com/candice-dk3/artisanAura-images/blob/main/star-full.png?raw=true',
            star2: 'https://github.com/candice-dk3/artisanAura-images/blob/main/star-half.png?raw=true'
        }
    }
}
</script>
<style scoped>
.about-inner-sec{
    margin-top: 7.4rem;
    color: black;
}
/* About Us Heading */
.bg-image {
    width: 100%;
    height: 30rem;
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
    background-size: cover;
    filter: blur(3px);
    z-index: -1;
}


/* Our Story */
.our-Story{
    padding: 2rem;
}
.text-box{
    padding: 1rem;
}
.history{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.carousel-inner {
    width: 90%;
    margin: 0 auto;
}
.carousel-item img {
    height: 24rem;
    object-fit: cover;
    padding: 1rem;
}
.text-box p{
    font-size: 1.1rem;
    text-align: left;
    padding: 1rem;
}


/* Our Team */
.our-Team{
    padding: 2rem;
}
.team-mate{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
}
/* Feedback */
.customer-feedback{
    padding: 2rem;
}
.customer-card{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.card {
  margin: 0 auto;
  border-color: transparent;
}
.card-title{
    font-weight: bold;
}


@media screen and (max-width: 300px) {
.about-inner-sec{
    margin-top: 3rem;
    color: black;
}
.our-Story{
    padding: 0rem;
}
.history{
    grid-template-columns: repeat(1, 1fr);
}
.our-Team{
    padding: 2rem;
}
.team-mate{
    grid-template-columns: repeat(1, 1fr);
}
.customer-feedback{
    padding: 0rem;
}
.customer-card{
    grid-template-columns: repeat(1, 1fr);
}
.card {
  margin: 0 auto;
  border-color: transparent;
  width: 15rem;
}
.star{
    width: 2rem;
}
.card-text{
    font-size: 0.8rem;
    max-width: 15rem;
    text-align: left;
}
.bg-image {
    height: 15rem;
}
.h1-text {
    font-size: 3rem;
    width: 18rem;
}
.text-overlay {
    top: 26%;
}
.card-img, .card-img-top {
    width: 14rem;
    padding: 0rem;
    border-radius: 50%;
    align-self: center;
}
.img-fluid {
    max-width: 32%;
    height: auto;
    border-radius: 20%;
}


}
</style>
