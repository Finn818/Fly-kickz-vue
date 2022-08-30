<template>
  <div class="container d-flex justify-content-center pt-5 mt-5">
          <div><img src="https://i.postimg.cc/h4rtDTqx/images.png" class="rounded-circle img-fluid" alt="Profile" width="304" height="236">
        </div>
        </div>

<div class="container" style="display: flex; justify-content: center; margin-bottom: 3rem">
    <div id="About" style="width: 60rem; ">
        <div id="AboutTitle" >
            <h1>ABOUT</h1>
        </div>
        <p class="fw-light" id="para" ALIGN=CENTER >hello</p>
    </div>
        
    </div>
    <div class="container" style="margin-top: 9rem">
 <div class="container" >
      <div class="row" >

          <div class="col-sm-3" v-for="(product, index) in products" :key="product">

      <div style="display: flex; justify-content: center" v-if="index < 5">

        <div class="card" style="width: 20rem; margin-bottom: 3rem; border: none;" >
        <router-link id="prodLink" :to="{name : 'product' , params:{ id : product.id}}">
          <img id="Img_URL" :src="product.Img_URL" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text" id="Img_URL">
                {{product.Img_URL}}
            </p>
            <p id="prodName">
              R {{product.prodName}}
            </p>
          </div>
          </router-link>
        </div>

      </div>
    </div>
      </div>
    
  </div>
    </div>

   
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("allproducts");
  },
  computed: {
    products() {
      return this.$store.state.allproducts;
    },
  },
};
</script>

<style scoped>

#para{
    font-size: 1.5rem;
}

#AboutTitle{
    font-family: 'Montserrat', sans-serif;
   display: flex;
   justify-content: center; 
   margin-bottom: 3rem;
}

#prodName{
    font-family: 'Share Tech Mono', monospace;
    font-size: 1.1rem;
    margin-bottom: 0;
}

#Img_URL{
  transition: scale 1s;
}

#Img_URL:hover {
  scale: 1.05;
}

#prodLink{
  text-decoration: none;
  color: black;
}
</style>