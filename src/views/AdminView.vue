<template>
    <div class="container">


<div class="table-responsive">
   <table class="table" style="margin-top: 5rem;">
  <thead id="head">
    <tr id="col" style="width: 20%">
      <th scope="col">Id</th>
      <!-- <th scope="col">Image</th> -->
      <th scope="col" style="width: 25%">Name</th>
      <th scope="col" style="width: 10%">Price</th>
      <!-- <th scope="col" style="width: 10%">Size</th>
      <th scope="col" style="width: 10%">Colour</th> -->
      <th scope="col" style="width: 20%">Arrival-Date</th>
      <th scope="col" style="width: 10%">Stock-Available</th>
      <th scope="col" style="width: 20%">Description</th>
      
    </tr>
  </thead>
  <tbody v-if="products" id="products" style="color:black">
    <tr v-for="product in products" :key="product" :product="product">

      <th style="font-family: 'Share Tech Mono', monospace; font-size: 1.7rem; width: 15%;" scope="row">{{product.id}}</th>
      <!-- <th style="font-family: 'Share Tech Mono', monospace; font-size: 1.1rem;" scope="row">{{product.Img_URL}}</th>
      <td><img :src="product.prodImg_URL" style="width: 5rem"></td> -->
      <td style="font-family: 'Montserrat', sans-serif; width: 35%;"><strong>{{product.prodName}}</strong></td>
      <td style="font-family: 'Share Tech Mono', monospace; font-size: 1.1rem; width: 16%">{{product.prodPrice}}</td>
      <!-- <td style="font-family: 'Montserrat', sans-serif;"><strong>{{product.prodSize}}</strong></td> -->
      <!-- <td style="font-family: 'Share Tech Mono', monospace; font-size: 1.1rem;">{{product.prodColor}}</td> -->
      <td style="font-family: 'Share Tech Mono', monospace; font-size: 1.1rem;  width: 21%">{{product.prodArrival_Date}}</td>
      <td style="font-family: 'Montserrat', sans-serif;  width: 10%"><strong>{{product.Stock_Available}}</strong></td>
        <td class="fw-light" style=" width: 20%"><strong>{{product.prodDesc}}</strong></td>
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
body{
  margin: 0;
}

button {
    background: #000;
    width: 40%;
    color: white;
    margin-top: 2rem;
    border: none;
}

.table-responsive{
  display: table;
  width: 100%;
}

#head {
    display: block;
    justify-content: last baseline;
}

#products{
    display: block;
    justify-content: space-evenly;
    width: 100%;
}

#col{

}
</style>