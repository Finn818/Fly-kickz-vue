<template>
    <div class="container" style="margin-bottom: 5rem" v-if="product" >
       <div class="row">

       <div class="col-sm-6">
           <div class="container" style="margin-top: 5rem">
            <div v-if="index < 1">

            <div>
        <img id="Img_URL" :src="product.Img_URL" style="margin-top: 2rem" class="img-fluid"/>

        </div>

           <div id="prodName" style="margin-top: 2rem">
               <h1>{{products.prodName}}</h1>
           </div>
               
                <div id="prodPrice" style="margin-top: 2rem">
                    <p id='prodPrice'>R: {{products.prodPrice}}</p>
                </div>

                <div id="prodSize" style="margin-top: 2rem">
                    <p id='prodize'> {{productDetails.prodSize}}</p>
                </div>

                <div id="prodArrival_date" style="margin-top: 2rem">
                    <p id='prodArrival_date'>{{products.prodArrival_date}}</p>
                </div>

                <div id="Stock_Available" style="margin-top: 2rem">
                    <p id='Stock_Available'>{{products.Stock_Available}}</p>
                </div>

                <div id="color" style="margin-top: 2rem">
                    <p id='color'>{{productDetails.prodcolor}}</p>
                </div>

                <div id="prodDesc" style="margin-top: 2rem">
                   <p class="fw-light">{{products.prodDesc}}</p>
               </div>

            <div style="display: flex; justify-content: center">
                <button>check-out</button>
            </div>
            
           </div>
      
        </div>  
       </div> 
    </div> 
    </div>
</template>

<script>
export default {
 
    mounted(){
        this.$store.dispatch('singleproduct', this.$route.params.id)
    },
    computed:{
        product(){
            return this.$store.state.product
        }
    }
}
</script>

<style>

button {
    background: #000;
    width: 40%;
    color: white;
    margin-top: 2rem;
    border: none;
}

#prodPrice{
    font-family: 'Share Tech Mono', monospace;
    font-size: 1.5rem;
}

#prodName{
     font-family: 'Montserrat', sans-serif;
}

</style>