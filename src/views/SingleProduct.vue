<template>
    <div  v-if="products">
    <div class="container" style="padding: 5em">
    <div class="row d-flex" style=" justify-content: center;" id="box">
    
        
        <div class="card" id="card"
        style="width: 38em; height: 33em; border: none; opacity: 0.9; margin-right: 580px;">
        
        
        <img
            id="Img_URL"
            :src="products.Img_URL"
            class=img-fluid card-img-top
            alt="..."/>
       
    
    <div id="details" class="col-12">
    <div id="prodName">
    <h1><b>{{products.prodName}}</b></h1>
    </div>
                   
    <div id="prodPrice" style="margin-top: 2rem">
    <p><b>R: {{products.prodPrice}}</b></p>
    </div>
    
    <div id="prodSize" style="margin-top: 2rem">
    <p><b> {{products.prodSize}}</b></p>
    </div>
    
    <div id="color" style="margin-top: 2rem">
    <p><b>{{products.prodColor}}</b></p>
    </div>
    
    <div id="prodArrival_date" style="margin-top: 2rem">
    <p><b>{{products.prodArrival_date}}</b></p>
    </div>
    
    <div id="Stock_Available" style="margin-top: 2rem">
    <p><b>Stock Available: {{products.Stock_Available}}</b></p>
    </div>
    
    <div id="prodDesc" style="margin-top: 2rem">
    <p class="fw-light"><b>{{products.prodDesc}}</b></p>
    </div>
    </div>
    
    <div style="display: flex; justify-content: center">
        <button> <router-link
        to="/allproducts"
        class="nav-link px-2 text-muted">Check-Out
        </router-link></button>
    </div>
    </div>         
    </div>
          
    </div>  
    </div> 
    
        
    <div id="text" v-else>No shoes in stock</div>
    </template>
    
    <script>
    export default {
    computed:{
        products(){
        return this.$store.state.singleproduct
        },
        // productDetails() {
        //     return this.$store.state.productDetail
        // }
        },
    mounted(){
        this.$store.dispatch("SingleProduct", this.$route.params.id)
        }
    }
    </script>
    
    <style>
    #card{
        align-content: space-between;
        display: flex;
        flex-direction: row;
    }
    
    /* #Img_URL{
        width: auto;
        height: auto;
    } */
    
    #details{
        margin-left: 20px;
        background-color: white;
        
    
    }
    #prodDesc{
        position: relative;
        color: black;
    }
    
    </style>