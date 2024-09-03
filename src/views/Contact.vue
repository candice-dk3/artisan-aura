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
        margin-top: 5rem;
    }
    .form-sec {
    margin: 0 auto;
    max-width: 40rem; /* adjust the max-width to your liking */
    padding: 4rem;
    background-color: #fff; /* optional, adds a white background */
    border: 1px solid #ddd; /* optional, adds a light gray border */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* optional, adds a subtle shadow */
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
    width: 10rem;
    gap: 6%;
    margin-bottom: 1rem;
    }
    .form-sec textarea {
    height: 10rem; 
    resize: vertical;
}
</style>