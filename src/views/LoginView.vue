<template>


   <div class="container" style="margin-top: 5rem; ">

<div id="box" style="display: inline-flex;
  flex-wrap: wrap;width: 100% ">

    <div id="Login" >
       <form id="LoginForm" @submit.prevent="login">
          <div id="LoginFormTitle">
              <h3>LOGIN</h3>
          </div>
          <div>
              <label for="" class="fw-light">USER-NAME</label>
              <br>
              <input v-model="userName" type="text" required>
          </div>
            <!-- <br> -->

            <div>
              <label for="" class="fw-light">User-EMAIL</label>
              <br>
              <input v-model="userEmail" type="text" required>
          </div>

          <div>
              <label for="" class="fw-light">PASSWORD</label>
              <br>
              <input v-model="userPassword" type="password" required>
          </div>

          <div>
              <button onclick="myFunction(submit)" style="width: 100%">LOGIN</button>
          </div>
       </form>
    </div>
   

      <div id="Register">
        <form id="RegisterForm">
            <div id="RegisterFormTitle">
                <h3>REGISTER</h3>
            </div>

            <div>
              <label for="" class="fw-light">NAME</label>
              <br>
              <input type="text" required>
          </div>

          <br>

          <div>
              <label for="" class="fw-light">Surname</label>
              <br>
              <input type="text" required>
          </div>

          <br>

          
          <div>
              <label for="" class="fw-light">Username</label>
              <br>
              <input type="text" required>
            </div>
            
            <br>
            
            <div>
                <label for="" class="fw-light">EMAIL</label>
                <br>
                <input type="text" required>
            </div>
  

          <br>

          <div>
              <label for="" class="fw-light">PASSWORD</label>
              <br>
              <input type="text" required>
          </div>
          <div>
              <button type="submit" style="width: 100%">CREATE</button>
          </div>
        </form>
    </div>

</div>

 
</div>

    
</template>
<script>
export default{
    data(){
        return{
            userName: null,
            userEmail: null,
            userPassword: null,
        }
    },
    methods:{
        login(){
            return this.$store.dispatch('login',
            {
              userName: this.userName,
              userEmail: this.userEmail,
              userPassword: this.userPassword
            })
        }
    }
}
</script>
<style scoped>
#Login{
   width: 30%;
}

#Register{
    width: 30%;
}

#LoginFormTitle, #RegisterFormTitle{
    margin-bottom: 3rem;
    font-family: 'Montserrat', sans-serif;
}

input{
    border: solid 1px #000;
    width: 100%;
}

button {
    background: #000;
    width: 40%;
    color: white;
    margin-top: 2rem;
    border: none;
}

input:focus {
  outline: none;
  box-shadow: none;
}

label{
    margin-bottom: 5px;
}

#box>* {
        flex: 1 1 180px;
        margin: 40px;
    }
</style>