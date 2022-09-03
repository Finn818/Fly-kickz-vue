<template>
  <div v-if="products" id="maindiv">
  <div class="container" style="margin-top: 5rem">
  <div class="row card" >
  
      <div id="card" v-for="product in products"
      :key="product.id">

  <div style="height: 120vh" id="prod">
    
  <img
  id="Img_URL"
  :src="product.Img_URL"
  class="img-fluid"
  card-img-top
  alt="..." style="background-color:black"/>
  
  <p class="card-text" id="prodName">
    {{ product.prodName }}
  </p>
  
  <div id="btn">
  <button class="nav-item">
  <router-link
    :to="{ name: 'singleproduct', params: { id: product.id } }"
    >INFO</router-link>
  </button>
</div>

  </div>
          
  </div>
</div>
  </div>
</div>

<div id="text" v-else>No shoes in stock</div>
</template>

<script>
export default {
  computed: {
    products() {
    return this.$store.state.allproducts;
    },
    },
mounted() {
  this.$store.dispatch("AllProducts");
    }
};
</script>

<style>
  

  .card{
  top: 50px;
  left: 50%;
  }

  #prod{
    padding: 200px;
    display: contents;
  }

  #text{
    font-size: 5rem;
    display: flex;
    justify-content: center;
    padding-top: 13rem;
  }

  #prodName{
    color: black;
  }

  #btn{
    display: flex;
    justify-content: center;
  }
  

  .container {
    padding-left: 25em;
    width: 50em;
    display: flex;
    justify-content: center;
  }
  
  .card-body{
    width: 20em;
  }

  #maindiv{
    width: 30em;
    /* max-width: 10vh; */
    /* display: flex;
    justify-content: center; */
  }

  body{
  background-image: url(https://i.postimg.cc/hjmfm990/9a7019d8d8032261b81dbe1103ddf57c.jpg);
  background-position: center;
    background-repeat: repeat;
    background-size: cover;
  }
</style>
