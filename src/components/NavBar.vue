<template>
  <div>
    <div id="navfilter" class="container-fluid sticky-top" style="width: 100%">
      <nav class="navbar bg-transparent container">
        <div id="right-navbar" style="display: flex; justify-content: start">
          <div>
            <router-link to="/allproducts" id="prodlink">Products</router-link>
          </div>
        </div>

        <div id="center-navbar">
          <router-link to="/" id="Logo">Fly-KickZ</router-link>
        </div>

        <div id="left-navbar" style="display: flex; justify-content: end">
          <div style="display: flex; justify-content: space-evenly">
            <!-- <input type="text" v-model="search" id="search"
            placeholder="Search.." name="search"/>
            <button type="submit"><i class="bi bi-search"></i></button> -->

            <!-- <div>
        <router-link to='/cart' id="cartlink">Cart</router-link>
      </div> -->
            <div>
              <router-link to="/Login" id="loginlink">Login</router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#cartlink {
  padding: 2rem;
}

#Logo {
  text-decoration: none;
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
}

@keyframes textclip {
  to {
    background-position: 100% center;
  }
}

#searchbar {
  width: 100px;
  outline: 0;
  border-width: 0 0 1px;
  border-color: black;
  margin-right: 15px;
  background: transparent;
}

#loginlink,
#cartlink,
#prodlink {
  color: black;
  text-decoration: none;
}

#right-navbar {
  vertical-align: middle;
}

#Chart,
#loginlink,
#cartlink,
#prodlink {
  font-family: "Oswald", sans-serif;
}

#navfilter {
  background: rgba(255, 255, 255, 0);
  border-radius: 16px;
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
}
</style>
