<template>
 <div class="container d-flex justify-content-center pt-3 mt-5" id="pic">
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

  

  <br>

  <div id="btn">
    <router-link :to="{ name: 'about'}">
    <button style="color: black">Broswer
      </button>

    </router-link>
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

#btn{
  display: flex;
  justify-content: center;
  
}

</style>
