<template>


   <div class="container" style="margin-top: 5rem; ">

<div id="box" style="display: inline-flex;
  flex-wrap: wrap; width: 100% ">

    <div id="Login" >
       <form id="LoginForm" @submit.prevent="login">
          <div id="LoginFormTitle">
              <h3>LOGIN</h3>
          </div>

        <form action="/" method="POST">  
        User-Name:<input type="text" name="name">  
        User-Email: <input type="text" name="email">
        PASSWORD: <input type="password" name="password">
        </form>

          <div>
              <button onclick="myFunction(submit)" style="width: 30%">Forgot Password</button>
          </div>

          <div>
              <button onclick="myFunction(submit)" style="width: 100%">LOGIN</button>
          </div>
       </form>
    </div>
   

      <div id="Register">
        <form id="RegisterForm" action="/register" method="User-Name: ">
            <div id="RegisterFormTitle">
                <h3>REGISTER</h3>
            </div>

    <form action="/register" method="POST">  
        User-Name:<input type="text" name="name">  
        User-Email: <input type="text" name="email">
        PASSWORD: <input type="password" name="password">
    </form>
          <div>
              <button onclick="myFunction(submit)" style="width: 100%">CREATE</button>
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
   width: 50%;
}

#Register{
    width: 50%;
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
        margin: 55px;
    }
</style>