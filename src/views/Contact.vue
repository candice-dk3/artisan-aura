<template>
  <section class="contact-sec">
    <div class="form-sec">
        <form action="https://formspree.io/f/xgvwdpqe" method="POST">
        <label>Your Name: <input type="name" name="name"></label>
        <label>Your Number: <input type="number" name="number"></label>
        <label>Your email: <input type="email" name="email"></label>
        <label> Your message:<textarea name="message" rows="3"></textarea></label>
        <div class="button-div">
                <button type="submit">Send</button>
                <button type="reset">Clear</button>
        </div>
        </form>
    </div>
  </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.contact-sec{
  margin-top: 6.9rem;
}
.form-sec {
    margin: 0 auto;
    max-width: 40rem;
    padding: 4rem;
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}
.form-sec label {
    display: block;
    margin-bottom: 1rem;
}
.form-sec input, .form-sec textarea {
    display: block;
    width: 30rem;
    margin-bottom: 1rem;
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
</style>