<template>
  <div class="container" style="margin-top: 5rem">


    <div class="row d-flex" >
        <div class="card-body">
          <div style="height: 100vh" class="col-md-3" v-for="product in products" :key="product.id">

        <div id="prodLink" :to="{name : 'allproducts' , params:{ id : product.id}}">
          <div class="card" style="width: 20rem; margin-bottom: 3rem; border: none;" >
      
            
            <img
            id="Img_URL"
            :src="product.Img_URL"
            class="img-fluid" card-img-top
            alt="...">

            <p class="card-text" id="prodName">
                {{products.prodName}}
            </p>

            <button class="nav-item"><router-link to="/SingleProduct" class="nav-link px-2 text-muted">INFO
            </router-link></button>
        </div>
      </div>
      </div>
    </div>
    </div>
    
  </div>
</template>


<script>
export default {
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('products')
    },
}
</script>

<style>

</style>

