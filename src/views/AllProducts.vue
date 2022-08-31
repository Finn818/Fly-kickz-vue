<template>
  <div v-if="products">
    <div class="container" style="margin-top: 5rem">
    <div class="row d-flex">
      <div class="card" style="width: 20rem; margin-bottom: 3rem; border: none">
        <div
          id="prodLink"
        >
          <div class="card-body">
            <div
              style="height: 55vh"
              
              v-for="product in products"
              :key="product.id"
            >
              <img
                id="Img_URL"
                :src="product.Img_URL"
                class="img-fluid"
                card-img-top
                alt="..."
              />

              <p class="card-text" id="prodName">
                {{ product.prodName }}
              </p>


              <button class="nav-item" id="btn">
                <router-link
                :to="{ name: 'singleproduct', params: { id: product.id } }"
                  >INFO
                </router-link>
              </button>
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
// import CardComponent from '@/components/CardComponent.vue';
export default {
    computed: {
        products() {
            return this.$store.state.allproducts;
        },
    },
    mounted() {
        this.$store.dispatch("AllProducts");
    }
    // components: { CardComponent }
};
</script>

<style>

  #text{
    font-size: 5rem;
    display: flex;
    justify-content: center;
    padding-top: 13rem;
  }

  #prodName{
    color: black;
  }

  /* body{
    background-image: url(https://i.postimg.cc/hjmfm990/9a7019d8d8032261b81dbe1103ddf57c.jpg);
  } */
</style>
