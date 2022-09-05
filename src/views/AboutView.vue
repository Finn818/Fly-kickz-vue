<template>
     <div
    class="container">
  <div id="AboutTitle">
    <h1 id="head">ABOUT</h1>
  </div>
  <p id="para" style="color: aqua">
    This is a site for LOVERS of nicforign sneakers, if it is youlove sneakers then let me tell you ththe place you want to be.
  </p>

    <div class="row d-flex" id="products">
      <div class="card"
        style="width: 20rem; margin-bottom: 3rem; border: none" v-for="(product, index) in products"
    :key="index">

      <div v-if="index < 4">
        <router-link
          id="prodLink"
          :to="{ name: 'allproducts'}">

        <div class="card-body">
          <img
            id="Img_URL"
            :src="product.Img_URL"
            class=img-fluid card-img-top
            alt="..."/>
           
            <p id="prodName"><b>{{ product.prodName }}</b></p>
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
      return this.$store.state.allproducts;
    },
  },
  mounted() {
    this.$store.dispatch("AllProducts");
  },
};
</script>