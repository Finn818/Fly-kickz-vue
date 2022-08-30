<template>
  <div class="container" style="margin-top: 5rem">


      <div class="row" >
          <div style="height: 100vh" class="col-md-3" v-for="allproduct in products" :key="allproduct">

      <div style="display: flex; justify-content: center" >

        <router-link id="prodLink" :to="{name : 'products' , params:{ id : products.id}}">
          <div class="card" style="width: 20rem; margin-bottom: 3rem; border: none;" >
          <img id="Img_URL" :src="products.Img_URL" class="img-fluid  card-img-top" alt="..." />
          <div class="card-body">
            
            <p class="card-text" id="Img_URL">
                {{products.Img_URL}}
            </p>

            <p class="card-text" id="prodName">
                {{products.prodName}}
            </p>

            <button>INFO</button>
          </div>
        </div>
        </router-link>

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

