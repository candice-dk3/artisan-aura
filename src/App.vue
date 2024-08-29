<template>
  <NavBar/>
  <Footer/>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
  
export default{
    components:{
      NavBar,
      Footer,
    },
    watch: {
    $route() {
      window.scrollTo(0, 0);
    }
  }
  }
</script>
<style>
*{
  margin: 0;
}
#app {
  font-family: "Fuzzy Bubbles", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
html{
    scroll-behavior: smooth;
}
body::-webkit-scrollbar{
  display: none;
}
</style>
