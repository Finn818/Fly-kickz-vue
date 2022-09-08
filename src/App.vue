<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="./views/AllProducts.vue">AllProducts</router-link> |
    <router-link to="./views/SingleProducts.vue">SingleProducts</router-link> |
    <router-link to="./views/LoginView.vue">Login</router-link> |
    <router-link to="./views/AdminView.vue">Admin</router-link> 
  </nav>
  <router-view/> -->
  <NavBar/>
  <FooterComponent/>
  <div class="min-vh-100">
    <router-view/>
    <!-- <CardComponent/> -->
  </div>


</template>

<script>
import NavBar from './components/NavBar.vue';
// import CardComponent from './components/CardComponent.vue';
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: { NavBar, FooterComponent}
  
  // CardComponent  
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
