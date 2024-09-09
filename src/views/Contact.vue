<template>
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
            emailSec: '',
            instaSec: 'https://github.com/candice-dk3/artisanAura-images/blob/master/icons8-instagram-logo-144.png?raw=true',
            facebookSec: 'https://github.com/candice-dk3/artisanAura-images/blob/master/icons8-facebook-logo-144.png?raw=true',
            twitterSec: 'https://github.com/candice-dk3/artisanAura-images/blob/master/icons8-twitter-144.png?raw=true'
        }
      }
}
</script>

<style scoped>
.inner-contact-sec{
  margin-top: 7.4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.form-sec {
    margin: 0 auto;
    max-width: 40rem;
    padding: 4rem;
    background-color: #ff9f9f;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}
.form-sec label {
    display: block;
    margin-bottom: 1rem;
  
}
.form-sec input, .form-sec textarea {
    display: block;
    width: 32rem;
    height: 2rem;
    margin-bottom: 1rem;
    border: none;
}
.form-sec input:focus, .form-sec textarea:focus {
    outline: none;
    border: none;
    box-shadow: none;
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
</style>