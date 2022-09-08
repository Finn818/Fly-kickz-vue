<template>
     <div
    class="container">
  <div id="AboutTitle">
    <h1 id="head">ABOUT</h1>
  </div>
  <p id="para" style="color: aqua">
    This is a site for LOVERS of niceforign sneakers, if it is you love sneakers then let me tell you this is the place you been looking for all your life and the place you want to be!.
  </p>

  <p id="text" style="color: aqua">These are only some of thee amzing shoes in our inventory. Please feel free to look around and if it is you happen to find something you like plz dont feel shy to message us.</p>

    <!-- <div class="row d-flex gap-2" id="products">
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
     </div> -->
  </div>

  <div class="container" id="contanier">
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner ">
    <router-link
          id="prodLink"
          :to="{ name: 'allproducts'}">
          
    <div class="carousel-item active">
      <img src="../assets/shoes/53618540-9cc1-412f-a511-2bf312ba2303.webp" alt="..." style="width: 33em; height: 30em">
    </div>
    <!-- <div class="carousel-item">
      <img src="../assets/shoes/air-max-270-shoes-zTPvbr.jfif" class="d-flex" alt="..." style="width: 35em; height: 30em">
    </div> -->
    <div class="carousel-item">
      <img src="../assets/shoes/Colorful-Sole-Nike-Air-Force-1-Low-White-Rainbow-Swoosh-For-Sale.jpeg" alt="..." style="width: 33em; height: 30em">
      </div>
      <div class="carousel-item">
      <img src="../assets/shoes/Nike-Air-Max-95-Fall-Winter-2016.jpg" alt="..." style="width: 33em; height: 30em">
    </div>
    <div class="carousel-item">
      <img src="../assets/shoes/nike-air-max-97-white-black-blue-orange-fuchsia-cw6992-100-release-date-info-1200x750.webp" alt="..." style="width: 33em; height: 30em">
    </div>
    <div class="carousel-item">
      <img src="../assets/shoes/nike-dunk-high-retro-knicks-dd1399-800-8.webp" alt="..." style="width: 33em; height: 30em">
    </div>
    <div class="carousel-item">
      <img src="../assets/shoes/men-nike-air-jordan-1-mid-light-smoke-grey.jpg" alt="..." style="width: 33em; height: 30em">
    </div>
    </router-link>
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

<style>
  .carousel-item.active{
   display: flex;
   justify-content: center; 
  }

#head{
  display: flex;
  justify-content: center;
  padding: 1.5em;
  font-size: 6em;

   /* text-transform: uppercase; */
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  /* background-size: auto auto; */
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  /* display: inline-block; */
      /* font-size: 190px; */
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

#text{
  font-size: 2em;
  display: flex;
  justify-content: center;
}

#para{
  font-size: 2em;
  display: flex;
  justify-content: center;
}
</style>