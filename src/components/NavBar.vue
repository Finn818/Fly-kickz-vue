<template>
    <div>
  <div id="navfilter" class="container-fluid sticky-top" style="width: 100%">
    <nav class="navbar bg-transparent  container" >

    <div id="right-navbar" style="display: flex; justify-content: start">

    <div >
       <router-link to='/products' id="prodlink">Product</router-link>
    </div>
     
    </div>

    <div id="center-navbar" style="" >
      <router-link to="/" id="Logo">Fly-KickZ</router-link>
    </div>

    
    <div id="left-navbar" style="display: flex; justify-content: end">
    <div style="display: flex; justify-content: space-evenly">
      <!-- <div>
        <router-link to='/cart' id="cartlink">Cart</router-link>
      </div> -->
      <div >
        <router-link to='/Login' id="loginlink">Login</router-link>
      </div>

    </div>
      
    </div>
  </nav>
  </div>
    </div>
</template>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap'); */
#cartlink{
  padding: 2rem;
}

#Logo {
  text-decoration: none;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
}

#searchbar{
  width: 100px;
  outline: 0;
  border-width: 0 0 1px;
  border-color: black;
  margin-right: 20px;
  background: transparent;
}

#loginlink, #cartlink, #prodlink{
    color: black;
    text-decoration: none;
}

#center-navbar{
    
}
#right-navbar{
    vertical-align: middle;
}

#Chart , #loginlink, #cartlink, #prodlink{
    font-family: 'Oswald', sans-serif;
}

#navfilter{
/* From https://css.glass */
background: rgba(255, 255, 255, 0);
border-radius: 16px;
/* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
backdrop-filter: blur(9.5px);
-webkit-backdrop-filter: blur(9.5px);

}
</style>