<template>
    <div class="container">


<div class="table-responsive">
   <table class="table " style="margin-top: 5rem;">
  <thead id="head">
    <tr id="col">
      <th scope="col">Id</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Size</th>
      <th scope="col">Arrival-Date</th>
      <th scope="col">Stock-Available</th>
      <th scope="col">Description</th>
      
    </tr>
  </thead>
  <tbody v-if="products" id="products" style="color:blue">
    <tr v-for="product in products" :key="product" :product="product">

      <th style="font-family: 'Share Tech Mono', monospace; font-size: 1.7rem;" scope="row">{{product.id}}</th>
      <th style="font-family: 'Share Tech Mono', monospace; font-size: 1.1rem;" scope="row">{{product.Img_URL}}</th>
      <td><img :src="product.prodImg_URL" style="width: 5rem"></td>
      <td style="font-family: 'Montserrat', sans-serif;"><strong>{{product.prodName}}</strong></td>
      <td style="font-family: 'Montserrat', sans-serif;"><strong>{{product.prodSize}}</strong></td>
      <td style="font-family: 'Share Tech Mono', monospace; font-size: 1.1rem;">{{product.prodPrice}}</td>
      <td style="font-family: 'Share Tech Mono', monospace; font-size: 1.1rem;">{{product.prodColor}}</td>
      <td style="font-family: 'Share Tech Mono', monospace; font-size: 1.1rem;">{{product.prodArrival_Date}}</td>
      <td style="font-family: 'Montserrat', sans-serif;"><strong>{{product.Stock_Available}}</strong></td>
        <td class="fw-light"><strong>{{product.prodDesc}}</strong></td>
      <td>
        <button type="submit" style="width: 100%">
            EDIT
          </button>
      </td>
      <td>
          <button type="submit" style="width: 100%">
            DELETE
          </button>
      </td>
    </tr>

  </tbody>
</table>
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
      return this.$store.state.allproducts;
    },
  },
}
</script>

<style scope>
button {
    background: #000;
    width: 40%;
    color: white;
    margin-top: 2rem;
    border: none;
}

#head {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
}

#products{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
}

#col{
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
}
</style>