<template>
    <footer>
        <div class="inner-footer">
            <div class="contact-us">
                <router-link to="/Contact">Contact Us</router-link>
                <router-link to="/About">About Us</router-link>
                <router-link to="/Admin">Admin</router-link>
            </div>
            <div class="payment">
            </div>
        </div>
        <div class="copyright-text">
            <h4 class="h4-footer">Copyright @ Artisan Aura {{ new Date().getFullYear() }} | All Right Reserved</h4>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style scoped>
footer{
    background-color: #052931;
    height: 15rem;
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
        grid-template-rows: repeat(2, 1fr);
}
a{
    color: white;
    text-decoration: none;
}
.contact-us a {
    margin-top: 1rem;
    /* margin-bottom: 1rem; */
}
</style>