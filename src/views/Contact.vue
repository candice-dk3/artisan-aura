<template>
  <section class="inner-contact-sec">
    <div class="container">
      <h2 class="h2">Let's get in touch</h2>
      <div class="detail-Form-sec">
        <div class="details">
          <div class="address-sec">
            <a href="https://www.google.com/maps/@-33.9204474,18.4237693,3a,75y,266.95h,120.42t/data=!3m7!1e1!3m5!1s4h1wxINMjKYuhD6gztV-FQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D4h1wxINMjKYuhD6gztV-FQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D304.9881%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
            <h5 class="address">
              3 St Georges Mall
              <br> Cape Town, Western Cape
            </h5>
          </a>
          </div>
          <div class="spacer"></div>
          <div class="open-dates-sec">
            <div class="container">  
                <h5 class="opening-date">Mon-Fri: 8am - 5pm</h5>
                <h5 class="opening-date">Saturday: 8am - 4pm</h5>
                <h5 class="opening-date">Sunday: 9am - 3pm</h5>
            </div>
          </div>
        </div>
        <div class="contact-form">
          <form action="https://formspree.io/f/xgvwdpqe" method="POST" target="_blank">
            <div class="card">
            <div class="input-div">
                <input name="name" type="name" class="input" placeholder="First Name">
                <input name="name" type="name" class="input" placeholder="Last Name">
            </div>
            <div class="input-div">
                <input name="email" type="email" class="input" placeholder="Email">
                <input name="number" type="number" class="input" placeholder="Phone">
            </div>
            <div class="input-div">
              <input name="message" rows="3" class="input" type="text" placeholder="Message"/>
            </div>
            <div class="button-div">
              <button class="submit" type="reset">Clear</button>
              <button class="submit" type="submit">Submit</button>
            </div>
            </div>
          </form>
        </div>
      </div>
      <div class="spacer"></div>
    <div class="socials">
        <div class="social-links">
          <div class="image">
            <a href="https://x.com/home?lang=en" target="_blank">
              <img :src="twitter" alt=""><h5 class="social-text">artisan_AuraSA</h5>
            </a>
          </div>
          <a href="https://x.com/home?lang=en" target="_blank">
            <div class="image">
              <img :src="instagram" alt=""><h5 class="social-text">Artisan_Aura</h5>
            </div>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <div class="image">
              <img :src="facebook" alt=""><h5 class="social-text">Artisan Aura Offical</h5>
            </div>
          </a>
            <div class="image">
              <img :src="phone" alt=""><h5 class="social-text">081 314 0839</h5>
            </div>
          <a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new" target="_blank">
            <div class="image">
              <img :src="email" alt=""><h5 class="social-text">artisanAura@gmail.com</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return{
      twitter: 'https://github.com/candice-dk3/artisanAura-images/blob/main/twitter.png?raw=true',
      instagram: 'https://github.com/candice-dk3/artisanAura-images/blob/main/instagram.png?raw=true',
      facebook: 'https://github.com/candice-dk3/artisanAura-images/blob/main/facebook.png?raw=true',
      phone: 'https://github.com/candice-dk3/artisanAura-images/blob/main/phone.png?raw=true',
      email:'https://github.com/candice-dk3/artisanAura-images/blob/main/email.png?raw=true'
    }
  }
}
</script>
<style scoped>
.inner-contact-sec {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background-image: url('https://github.com/candice-dk3/artisanAura-images/blob/main/clouds.gif?raw=true');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: auto;
  padding: 2rem;
  color: black;
}
.container{
  margin-top: 7rem;
}
.spacer{
  margin-top: 5rem;
}
.h2{
  text-align: start;
  padding: 2rem;
}
.detail-Form-sec{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.socials {
  position: relative;
  backdrop-filter: blur(5px);
  padding: 1rem;
  gap: 1rem;
}

.socials::before {
  content: "";
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 60%;
  filter: blur(5px);
  z-index: -1;
}
.social-links {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0.1rem;
  width: auto;
  padding: 0rem;
}
.image {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
}
.image img {
  width: 3rem;
}
.image h5 {
  font-weight: 700;
  padding: 0.56rem;
  margin-right: 0rem;
}
.card {
  height: 24rem;
  background: lightgrey;
  background-color: transparent;
  padding: 1rem;
  box-shadow: rgba(60, 60, 60, 0.3) 0px 19px 38px, rgba(26, 26, 26, 0.22) 0px 15px 12px;
  transition: 0.5s ease-in-out;
  max-width: 50rem;
}
.heading {
  text-align: center;
  font-weight: 600;
  padding-top: 1rem;
  font-size: large;
}
.input-div {
  display: flex;
  margin-top: 1rem;
  transition: 0.5s ease-in-out;
}
.card input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  width: 12rem;
  padding: 8px;
  outline: none;
}
a {
  text-decoration: none;
  color: black;
}
.button-div {
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
}
.submit {
  margin-top: 8rem;
  text-align: center;
  padding: 8px 3rem;
  border: none;
  background-color: black;
  color: white;
  transition: 0.5s ease-in-out;
  cursor: pointer
}
.submit:hover {
  box-shadow: rgba(44, 43, 43, 0.664) 5px 5px, rgba(45, 45, 45, 0.3) 10px 10px, rgba(60, 59, 59, 0.2) 15px 15px, rgba(54, 53, 53, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
}
.card input::placeholder {
  color: black;
}
.input:focus {
  transition: 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.input:hover {
  transition: 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.input-div {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  transition: 0.5s ease-in-out;
}
.input-div input {
  width: 20rem;
  margin: 0 1rem;
}
/* Socials */
.social-links{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 88rem;
}
.address, .opening-date{
  text-align: left;
}
.social-text{
  text-align: center;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
}
</style>