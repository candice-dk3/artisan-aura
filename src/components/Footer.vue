<template>
    <footer>
        <div class="inner-footer">
            <div class="logo-sec">
                <img :src="footerlogo" alt="" class="fl">
            </div>
            <div class="contact-us">
                <router-link to="/About">About Us <img :src="arrowRight" alt="" class="arRight"></router-link>
                <router-link to="/Admin">Admin <img :src="arrowRight" alt="" class="arRight"></router-link>
                <router-link to="/Contact">Contact Us <img :src="arrowRight" alt="" class="arRight"></router-link>
            </div>
            <div class="payment">
                <div class="social-links">
                    <a href="/"><img :src="twitterlogo" alt="" class="social-logo"></a>
                    <a href="/"><img :src="instagramlogo" alt="" class="social-logo"></a>
                    <a href="/"><img :src="facebooklogo" alt="" class="social-logo"></a>
                </div>
                <div class="payment-link">
                    <h4 class="ap-h4">Accepted Payments</h4>
                    <img :src="mastercard" alt="" class="payment-logo">
                    <img :src="visa" alt="" class="payment-logo">
                    <img :src="paypal" alt="" class="payment-logo">
                </div>
            </div>
        </div>
        <div class="copyright-text">
            <h4 class="h4-footer">@ Artisan Aura {{ new Date().getFullYear() }} | All Rights Reserved</h4>
        </div>
    </footer>
</template>


<script>
export default {
    name: 'Footer',
    data(){
        return{
            footerlogo: 'https://github.com/candice-dk3/artisanAura-images/blob/main/AALogo.png?raw=true',
            twitterlogo: 'https://github.com/candice-dk3/artisanAura-images/blob/main/twitter.png?raw=true',
            instagramlogo: 'https://github.com/candice-dk3/artisanAura-images/blob/main/instagram.png?raw=true',
            facebooklogo: 'https://github.com/candice-dk3/artisanAura-images/blob/main/facebook.png?raw=true',
            mastercard: 'https://github.com/candice-dk3/artisanAura-images/blob/main/mastercard.png?raw=true',
            visa: 'https://github.com/candice-dk3/artisanAura-images/blob/main/visa.png?raw=true',
            paypal: 'https://github.com/candice-dk3/artisanAura-images/blob/main/paypal.png?raw=true',
            arrowRight: 'https://github.com/candice-dk3/artisanAura-images/blob/main/arrow-right.png?raw=true'
        }
    }
}
</script>


<style scoped>
footer{
    background-color: #B692C2;
    height: auto;
}
.h4-footer{
    color: white;
    padding: 2rem;
    font-size: 0.9rem;
}
.inner-footer{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
.contact-us {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    padding: 6rem;
}
.payment{
    display: grid;
    grid-template-rows: repeat(2, 1fr);
}
a{
    color: white;
    text-decoration: none;
}
.contact-us a {
    margin-top: 1rem;
}
.fl{
    /* float:right ; */
    width: 17rem;
    margin-top: 3rem;
}


.social-logo, .payment-logo{
    width: 3.8rem;
    padding: 0.6rem;
    margin-top: 4rem;
}
.payment-logo{
    width: 4.8rem;
    padding: 0.6rem;
}
.ap-h4{
    font-size: 1rem;
    padding: 0;
}


@media screen and (max-width: 390px) {
.h4-footer{
    color: white;
    padding: 2rem;
    font-size: 0.78rem;
}
.inner-footer{
    grid-template-columns: repeat(1, 1fr);
}
.contact-us {
    grid-template-rows: repeat(1, 1fr);
    padding: 2rem;
    justify-content: center;
}
.payment{
    grid-template-rows: repeat(1, 1fr);
}
.contact-us a {
    margin-top: 1rem;
    width: 8rem;
}
.fl{
    width: 10rem;
    margin-top: 0rem;
}
.social-logo{
    width: 3.6rem;
    padding: 0.6rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.payment-logo{
    width: 4.2rem;
    padding: 0.6rem;
    margin-top: 5rem;
}
.ap-h4{
    font-size: 0.9rem;
    margin-bottom: -4rem;
}
.arRight{
    width: 1rem;
}
 
}
</style>
