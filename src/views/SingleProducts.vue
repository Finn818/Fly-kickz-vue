<template>
    <div class="container" style="margin-bottom: 5rem" v-if="product" >
       <div class="row">

       <div class="col-sm-6">
           <div class="container" style="margin-top: 5rem">

        <div id="Img_URL" style="">
               <h1>{{products.Img_URL}}</h1>
           </div>

           <div id="prodName" style="">
               <h1>{{products.prodName}}</h1>
           </div>
               
                <div id="prodPrice" style="margin-top: 2rem">
                    <p id='prodPrice'>R {{products.prodPrice}}</p>
                </div>

                <div id="prodSize" style="margin-top: 2rem">
                    <p id='prodize'> {{products.prodSize}}</p>
                </div>

                <div id="prodArrival_date" style="margin-top: 2rem">
                    <p id='prodArrival_date'>{{products.prodArrival_date}}</p>
                </div>

                <div id="Stock_Available" style="margin-top: 2rem">
                    <p id='Stock_Available'>{{products.Stock_Available}}</p>
                </div>

                <div id="prodDesc" style="margin-top: 2rem">
                   <p class="fw-light">{{products.prodDesc}}</p>
               </div>

            <div style="display: flex; justify-content: center">
                <button>
                
            </button>
            </div>
            
           </div>
            
            
            
       </div> 
    </div> 
    </div>
</template>

<script>

</script>

<style>

</style>