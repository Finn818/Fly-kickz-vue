<template>
    <div>
        <h1 id="head">Successfully Registered</h1>
    </div>

    <div id="btn">
        <button class="nav-item">
        <router-link
          :to="{ name: 'about' }"
          >INFO</router-link>
        </button>
      </div>

    
</template>

<style>
#head{
    display: flex;
    justify-content: center;
    padding: 230px;
    font-size: 5em;
}

#btn{
    display: flex;
    justify-content: center;
    padding-bottom: 2em;
}
</style>