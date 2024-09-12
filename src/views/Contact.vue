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
            Adrress: 
          </div>
          <div class="open-dates-sec">
            <div class="container">  
                <h5>Mon-Fri: 8am - 5pm</h5>
                <h5>Saturday: 8am - 4pm</h5>
                <h5>Sunday: 8am - 4pm</h5>
            </div>
          </div>
        </div>
        <div class="contact-form">
            <div class="card">
              <p class="heading">Form</p>
            <div class="input-div">
                <input type="text" class="input" placeholder="First Name">
                <input type="text" class="input" placeholder="Last Name">
            </div>
            <div class="input-div">
                <input type="text" class="input" placeholder="Email">
                <input class="input" type="text" placeholder="Phone">
            </div>
            <div class="input-div">
              <input class="input" type="text" placeholder="Message">
            </div>
            <div class="button-div">
              <button class="submit">Submit</button>
            </div>
            </div>
        </div>
      </div>
    <div class="socials">
      <h4>Find us on</h4>
      <div class="social-links">
        <div class="image">
          <img :src="twitter" alt="">
          <h5>Twitter link</h5>
        </div>
        <div class="image">
          <img :src="twitter" alt="">
          <h5>Twitter link</h5>
        </div>
        <div class="image">
          <img :src="twitter" alt="">
          <h5>Twitter link</h5>
        </div>
        <div class="image">
          <img :src="twitter" alt="">
          <h5>Twitter link</h5>
        </div>
        <div class="image">
          <img :src="twitter" alt="">
          <h5>Twitter link</h5>
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
      twitter: 'https://github.com/candice-dk3/artisanAura-images/blob/main/twitter.png?raw=true',
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
  height: 100vh;
  padding: 2rem;
  color: black;
}
.detail-Form-sec{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}


/* Form styling */
.card {
  height: auto;
  background: lightgrey;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: 0.5s ease-in-out;
  max-width: 360px;
  width: 24rem; 
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
.button-div {
  text-align: center;
}
.submit {
  margin-top: 3rem;
  text-align: center;
  padding: 8px 3rem;
  border: none;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
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
  width: 10rem; /* adjust the width to fit your needs */
  margin: 0 1rem;
}
/* Socials */
.social-links{
  display: flex;
  padding: 2rem;
  gap: 1rem;
}
</style>