<template>
    <div class="container" style="margin-bottom: 5rem" v-if="product" >
       <div class="row">

       <div class="col-sm-6" >
           <img id="prodImg" :src="product.prodImg_URL" class="card-img-top" alt="..." />
       </div>
       <div class="col-sm-6">
           <div class="container" style="margin-top: 5rem">
           <div id="prodName" style="">
               <h1>{{product.prodName}}</h1>
           </div>
               

               <div id="prodDesc" style="margin-top: 2rem">
                   <p class="fw-light">{{product.prodDesc}}</p>
               </div>

                <div id="prodPrice" style="margin-top: 2rem">
                    <p id='prodPrice'>R {{product.prodPrice}}</p>
                </div>
            <div style="display: flex; justify-content: center">
                <button>
                
            </button>
            </div>
            
           </div>
            
            <div style=" display: flex; justify-content: center;">
                <img style="width: 15rem; margin-top: 5rem;" :src="product.brandLogoImg_URL" alt="">
            </div>
            
       </div> 
    </div> 
    </div>
</template>

<script>

</script>

<style>

</style>