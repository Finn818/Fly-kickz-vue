<template>

<footer class="py-3 footer" style="background-color: black; color: white; margin-top: 5rem;">
    <ul class="nav justify-content-center border-bottom pb-2 mb-3" id="footer">
      
      <li class="nav-item"><router-link to="/contact" class="nav-link px-2 text-muted">Contact</router-link></li>

      <li class="nav-item"><router-link to="/admin" class="nav-link px-2 text-muted">Admin</router-link></li>

    </ul>
    <p class="text-center text-muted">© 2022 Fly-KickZ, Inc</p>
  </footer>

</template>

<style scoped>
 footer {
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
 }

 #name{
  display: flex;
  justify-content: center;
 }

 .py-3.footer{
  position:fixed;
  left:0px;
  bottom:0px;
  height:130px;
  width:100%;
 }
</style>