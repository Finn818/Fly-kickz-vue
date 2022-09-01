<template>
<div  v-if="products"><div class="container" style="margin-bottom: 5rem">
<div class="row d-flex">

<div class="card"
style="width: 20rem; margin-bottom: 3rem; border: none">
<div class="card-body" style="margin-top: 5rem">
<div v-if="index < 1">

<div v-for="products in products"
:key="products">

<img
    id="Img_URL"
    :src="products.Img_URL"
    class=img-fluid card-img-top
    alt="..."/>
</div>

<div id="prodName" style="margin-top: 2rem">
<h1>{{products.prodName}}</h1>
</div>
               
<div id="prodPrice" style="margin-top: 2rem">
<p>R: {{products.prodPrice}}</p>
</div>

<div id="prodSize" style="margin-top: 2rem">
<p> {{products.prodSize}}</p>
</div>

<div id="prodArrival_date" style="margin-top: 2rem">
<p>{{products.prodArrival_date}}</p>
</div>

<div id="Stock_Available" style="margin-top: 2rem">
<p>{{products.Stock_Available}}</p>
</div>

<div id="color" style="margin-top: 2rem">
<p>{{products.prodcolor}}</p>
</div>

<div id="prodDesc" style="margin-top: 2rem">
<p class="fw-light">{{products.prodDesc}}</p>
</div>

<div style="display: flex; justify-content: center">
    <button> <router-link
    to="/allproducts"
    class="nav-link px-2 text-muted">Check-Out
    </router-link></button>
</div>
            
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
computed:{
    products(){
    return this.$store.state.singleproduct
    }
    },
mounted(){
    this.$store.dispatch("SingleProduct", this.$route.params.id)
    }
}
</script>

<style>

/* button {
    background: #000;
    width: 40%;
    color: white;
    margin-top: 2rem;
    border: none;
}

#prodPrice{
    font-family: 'Share Tech Mono', monospace;
    font-size: 1.5rem;
}

#prodName{
     font-family: 'Montserrat', sans-serif;
} */

#text{
    font-size: 5rem;
    display: flex;
    justify-content: center;
    padding-top: 13rem;
  }

</style>