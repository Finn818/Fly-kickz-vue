<template>


   <div class="container" style="margin-top: 5rem; ">

<div id="box" style="display: inline-flex;
  flex-wrap: wrap; width: 100% ">

    <div id="Login" >
       <div id="LoginForm">
          <div id="LoginFormTitle">
              <h3>LOGIN</h3>
          </div>

        <form @submit.prevent="login">  
        User-Name:<input type="text" name="name" v-model="userName">  
        User-Email: <input type="text" name="email" v-model="userEmail">
        PASSWORD: <input type="password" name="password" v-model="userPassword">
        
        <div>
            <button style="width: 30%">Forgot Password</button>
        </div>
        
        <div>
        <button type="submit" style="width:100%">
        <router-link
        :to="{ name: 'about' }"
        >Login</router-link>
        </button>
        </div>
    </form>
     </div>
    </div>
   

      <div id="Register">
        <div id="RegisterForm">
            <div id="RegisterFormTitle">
                <h3>REGISTER</h3>
            </div>

    <form @submit.prevent="register">  
        User-Name:<input type="text" name="Rname" v-model="RuserName">  
        User-Email: <input type="text" name="Remail" v-model="RuserEmail">
        PASSWORD: <input type="password" name="Rpassword" v-model="RuserPassword">
        <div>
            <button type="submit" style="width: 100%"><router-link
        :to="{ name: 'register' }"
        >Register</router-link></button>
        </div>
    </form>
        </div>
    </div>

</div>

 
</div>

    
</template>
<script>
export default{
    data(){
        return{
            userName: '',
            userEmail: '',
            userPassword: '',
            RuserName: '',
            RuserEmail: '',
            RuserPassword: '',
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
        },
        register(){
            return this.$store.dispatch('register',
            {
              userName: this.RuserName,
              userEmail: this.RuserEmail,
              userPassword: this.RuserPassword
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