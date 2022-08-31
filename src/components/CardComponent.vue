<template>
      <div class="card"
        style="width: 20rem; margin-bottom: 3rem; border: none">

<div class="card-body">
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

</template>

<script>
export default {
    
}
</script>

<style>

</style>