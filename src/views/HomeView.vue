<template>
  <div class="container d-flex justify-content-center pt-5 mt-5">
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
    class="container"
    style="display: flex; justify-content: center; margin-bottom: 3rem"
  >
    <div class="row" id="About" style="width: 60rem">
      <div id="AboutTitle">
        <h1 style="align-items:center">ABOUT</h1>
      </div>
      <p class="fw-dark" id="para" ALIGN="CENTER" style="color: aqua">
        <b
          >This is a site for LOVERS of nice and forign sneakers, if it is you
          love sneakers then let me tell you this is the place you want to
          be.</b
        >
      </p>
    </div>
    <div class="row d-flex">
      <div
        class="card"
        style="width: 20rem; margin-bottom: 3rem; border: none" v-for="(product, index) in products"
    :key="index"
      >
      <div v-if="index < 3">
        <router-link
          id="prodLink"
          :to="{ name: 'singleproduct', params: { id: product.id } }"
        >
        <div class="card-body">
          <img
            id="Img_URL"
            :src="product.Img_URL"
            class=img-fluid card-img-top
            alt="..."
          />
            <!-- <p class="card-text" id="Img_URL">
              {{ product.Img_URL }}
            </p> -->
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
  mounted() {
    this.$store.dispatch("AllProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped>
#para {
  font-size: 1.5rem;
}

#About{
  display: flex;
  justify-content: center;
}

#AboutTitle {
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

#prodLink {
  text-decoration: none;
  color: black;
}

#Img_URL{
  padding: auto;
}

#prodName{
  display: flex;
  justify-content: center;
  padding: bottom;
}
</style>
