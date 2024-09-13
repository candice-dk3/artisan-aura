<!-- <template>
  <section class="inner-contact-sec">
    <div class="scocial-sec">
      <h3 class="find-h3">Find us on</h3>
        <div class="contact-us-inner-sec">
                <div class="social-links">
                  <div class="social-images">
                    <a href="/"><div class="email-image"><img :src="emailSec" alt="CK" class="email-sec"/></div></a>
                      <div class="insta-image"><img :src="instaSec" alt="CK" class="insta-sec"/></div>
                      <div class="facebook-image"> <img :src="facebookSec" alt="CK" class="facebook-sec"/></div>
                      <div class="twitter-image"><img :src="twitterSec" alt="CK" class="twitter-sec"/></div>
                  </div>
              <div class="social-text">
                  <div class="email-text">artisanAura@gmail.com</div>
                  <div class="insta-text">Artisan_Aura</div>
                  <div class="facebook-text">Artisan Aura Offical</div>
                  <div class="twitter-text">artisan_AuraSA</div>
              </div>
          </div>
        </div>
    </div>
    <div class="contact-sec">
    <h1>contact us</h1>
    <div class="form-sec">
        <form action="https://formspree.io/f/xgvwdpqe" method="POST">
        <label>Your Name: <input type="name" name="name"></label>
        <label>Your Number: <input type="number" name="number"></label>
        <label>Your email: <input type="email" name="email"></label>
        <label> Your message:<textarea name="message" rows="3"></textarea></label>
        <div class="button-div">
            <button type="submit" class="btn">Send</button>
            <button type="reset" class="btn">Clear</button>
        </div>
        </form>
    </div>
    </div>
  </section>
</template>


<script>
export default {
  data(){
        return{
            emailSec: 'https://github.com/candice-dk3/artisanAura-images/blob/master/email.png?raw=true',
            instaSec: 'https://github.com/candice-dk3/artisanAura-images/blob/master/instagram.png?raw=true',
            facebookSec: 'https://github.com/candice-dk3/artisanAura-images/blob/master/facebook.png?raw=true',
            twitterSec: 'https://github.com/candice-dk3/artisanAura-images/blob/master/twitter.png?raw=true'
        }
      }
}
</script>


<style scoped>
.inner-contact-sec {
  margin-top: 7.4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-image: url('https://github.com/candice-dk3/artisanAura-images/blob/master/clouds.gif?raw=true');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  padding: 2rem;
}
.form-sec {
    margin: 0 auto;
    max-width: 40rem;
    padding: 4rem;
    background-color: transparent;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    border-radius: 2rem;
}
.form-sec label {
    display: block;
    margin-bottom: 1rem;
    border-radius: 2rem;
 
}
.form-sec input, .form-sec textarea {
    display: block;
    width: 32rem;
    height: 2rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 2rem;
}
.form-sec input:focus, .form-sec textarea:focus {
    outline: none;
    border: none;
    box-shadow: none;
    border-radius: 2rem;
  }
.button-div {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 15rem;
  gap: 20%;
  justify-content: center;
  margin: 0 auto;
}
.form-sec textarea {
    height: 10rem;
    resize: vertical;
    border-radius: 2rem;
}
.btn{
  background-color: #b19595;
  color: #fff;
 
}
.social-links{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
}
.social-images{
    text-align: end;
    margin-right: 2rem;
}
.social-text{
    text-align: start;
}
.email-text, .insta-text, .facebook-text, .twitter-text{
    color: black;
    font-weight: 700;
    padding: 1.6rem;
    margin-right: 1rem;
}
.email-image, .insta-image, .facebook-image, .twitter-image{
    padding: 1rem;
    margin-left: 2rem;
}
.insta-sec, .twitter-sec, .facebook-sec, .email-sec{
  width: 3rem;
}
form{
    padding: 0rem;
}
.find-h3{
    color: black;
    font-weight: 700;
}
@media screen and (max-width: 300px) {
  .inner-contact-sec {
  margin-top: 3.5rem;
  grid-template-columns: repeat(1, 1fr);
  padding: 2rem;
  height: auto;
}
.form-sec {
    margin: 0 auto;
    max-width: 40rem;
    padding: 0rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    border-radius: 2rem;
}
.form-sec label {
    display: block;
    margin-bottom: 1rem;
    border-radius: 2rem;
}
.form-sec input, .form-sec textarea {
    display: block;
    width: 13rem;
    height: 2rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 2rem;
    padding: 1rem;
}
.button-div {
  width: 10rem;
}
.form-sec textarea {
    height: 10rem;
    resize: vertical;
    border-radius: 2rem;
}
.social-links{
  padding: 0rem;
}
.social-images{
    text-align: end;
    margin-right: 0rem;
}
.social-text{
    text-align: start;
}
.email-text, .insta-text, .facebook-text, .twitter-text{
    font-weight: 700;
    padding: 0.56rem;
    margin-right: 0rem;
}
.email-image, .insta-image, .facebook-image, .twitter-image{
    padding: 0.26rem;
    margin-left: 0rem;
}
.insta-sec, .twitter-sec, .facebook-sec, .email-sec{
  width: 2rem;
}
form{
    padding: 0rem;
}
.find-h3{
    color: black;
    font-weight: 700;
}
 
}
</style> -->
<template>
  <section class="inner-contact-sec">
    <div class="container">
      <h2>Let's get in touch</h2>
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
    <div class="socials">
      <h4>Find us on</h4>
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
  margin-top: 7.4rem;
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
.spacer{
  margin-top: 5rem;
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