<template>
  <div class="fixed-top">
    <nav class="navbar navbar-expand-sm">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" id="offcanvasNavbar">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              <router-link to="/" class="nav-link"><img :src="logo" alt="CK" class="logo"/></router-link>
            </h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div class="navbar-nav">
              <div class="s-nav">
                  <router-link to="/" class="nav-link" @click="closeNavbar"><img :src="logo" alt="CK" class="logo"/></router-link>
              </div>
              <div class="f-nav">
                  <router-link to="/" class="nav-link" @click="closeNavbar">Home</router-link>
                  <router-link to="/Items" class="nav-link" @click="closeNavbar">Shop</router-link>             
                  <router-link to="/Cart" class="nav-link" @click="closeNavbar">Cart</router-link>
                  <router-link to="/SignUp" class="nav-link" @click="closeNavbar">Sign Up</router-link>
                  <router-link to="/LogIn" class="nav-link" @click="closeNavbar">Log In</router-link>
                  <router-link to="/Account" class="nav-link" @click="closeNavbar"><img :src="acclogo" alt="CK" class="acclogo"/></router-link></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBarComp',
  data() {
    return {
      logo:'https://github.com/candice-dk3/artisanAura-images/blob/main/AALogo.png?raw=true',
      acclogo:'https://github.com/candice-dk3/artisanAura-images/blob/main/user.png?raw=true',
    }
  },
  methods: {
    closeNavbar() {
      document.getElementById('offcanvasNavbar').classList.remove('show');
    }
  }
}
</script>

<style>
.offcanvas-body {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 20px;
}

.offcanvas-body a {
  font-weight: bold;
  font-size: 1.3rem;
  color: white;
  text-decoration: none;
  padding: 1rem;
}
.offcanvas-body a:hover {
  color: #ffc400;
}

.offcanvas-body a.router-link-exact-active {
  color: #ffc400;
}
.navbar{
  background-color: #b692c262;
  width: 100%;
  backdrop-filter: blur(5px);
}
.navbar-nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
}
.navbar-expand-sm .navbar-nav .nav-link {
  padding-right: 20px;
  padding-left: 20px;
}
.logo{
  width: 7rem;
  float: left;
  margin-top: -2rem;
}
.acclogo, .cartLogo, .logIn, .signUp{
  width: 2.4rem;
  padding: 0.2rem;
}
.f-nav{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 1rem;
}
.navbar-nav .nav-link {
  padding-right: 1rem;
  padding-left: 1rem;
}
@media screen and (max-width: 300px) {
      .offcanvas-body a {
      font-size: 1.3rem;
      padding: 1rem;
    }
      .navbar-nav {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
      height: auto;
      }
      .s-nav{
        display: none;
      }
      .f-nav{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    nav a {
      font-weight: bold;
      font-size: 20px;
      text-decoration: none;
      padding: 1rem;
    }
    .offcanvas-header{
      background-color: #b692c2;
    }
}
</style>