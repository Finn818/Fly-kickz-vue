<template>
  <div class="container" id="input">
      <label for="" style="color: black;">Looking for:</label>
      <select id="shoes" name="make">
        <option disabled selected value>Make..</option>
        <option value="Airmax_90">Airmax 90</option>
        <option value="Airmax_1">Airmax 1</option>
        <option value="Airmax_95">Airmax 95</option>
        <option value="Airmax_97">Airmax 97</option>
        <option value="Jordan_1">Retro 1</option>
        <option value="Dunk">Dunk</option>
        <option value="Runner">Runners</option>
        <option value="Air_Force">Air-Force</option>
      </select>
      <label for="" style="color: black;" id="Stock">Stock</label>
      <select id="feet" name="Stock">
        <option disabled selected value>...</option>
        <option value="All">All</option>
        <option value="Available">Available</option>
        <option value="Out-of-stock">Out-of-stock</option>
      </select>

    <div class="row d-flex justify-content-evenly gap-5" v-if="products">
      <div class="card" style="width: 16rem;" id="card" v-for="product in products"
        :key="product.id" >
      
        <div style="height: 120vh" id="prod">
          
        <img
        id="Img_URL"
        :src="product.Img_URL"
        class="img-fluid"
        card-img-top
        alt="..." style="background-color:black"/>
        
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
    }
};

// readData(products);

// function airmax(event){
//     console.log(event);
//     let newairmax = products.filter(a => {
//         return a.name == event.target.value
//     })
//     readData(newairmax);
// }


// document.getElementById('shoes').addEventListener('change', airmax);

//     localStorage.setItem("property", JSON.stringify(products));
//     loadData(products);
</script>

<style>
#prod{
  padding: 200px;
  display: contents;
}

  #prodName{
    color: black;
  }

  #btn{
    display: flex;
    justify-content: center;
  }
  
</style>
