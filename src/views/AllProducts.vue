<template>
  <div class="container" id="input">
      <input type="text" v-model="search" id="searchbar" placeholder="Search.." name="search">
    <button type="submit" onclick="myfunction()"><i class="bi bi-search"></i></button>
    </div>

    <div class="row d-flex justify-content-evenly gap-5" v-if="products">
      <div class="card" style="width: 16rem;" id="card" v-for="product in products"
        :key="product.id" >
      
        <div style="height: 120vh" id="prod">
          
        <img
        id="Img_URL"
        :src="product.Img_URL"
        class="img-fluid"
        card-img-top
        alt="..."/>
        
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
    <div id="text" v-else>No shoes in stock</div>
  
</template>

<script>
export default {
  data() {
        return {
            search: ""
        }
    },

  computed: {
    products() {
      return this.$store.state.allproducts?.filter((products) => {
        let isMatch = true;
        if (
          !products.prodName.toLowerCase().includes(this.search.toLowerCase())
        ) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
mounted() {
  this.$store.dispatch("AllProducts");
    }
};

</script>

<style>
#prod{
  padding: 200px;
  display: contents;
}

  #prodName{
    color: black;
    display: flex;
    justify-content: center;
  }

  #btn{
    display: flex;
    justify-content: center;
  }

  #input{
    display: flex;
    justify-content: center;
  }
  
</style>
