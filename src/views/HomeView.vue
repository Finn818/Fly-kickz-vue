<template>
 <div class="container d-flex justify-content-center pt-3 mt-5">
    <div>
      <img
        src="https://i.postimg.cc/h4rtDTqx/images.png"
        class="rounded-circle img-fluid"
        alt="Profile"
        width="304"
        height="236"
      />
    </div>
  </div>

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
          :to="{ name: 'singleproduct', params: { id: product.id } }">

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

<style scoped>
#para {
  display: flex;
  font-size: 1.8rem;
  position:absolute;
  margin-right: 30px;
}

#head{
  display: flex;
  justify-content: center;
}

#AboutTitle {
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

#prodLink {
  text-decoration: none;
  color: black;
}

#prodName{
  display: flex;
  justify-content: center;
  padding-top: bottom;
}

#products{
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
}
</style>
