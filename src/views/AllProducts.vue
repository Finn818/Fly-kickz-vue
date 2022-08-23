<template>
    <div class="products-container">
        <div v-if="products" class="row" id="productsrow">
            <div v-for="product of products" :key="product.id" class="card">
                <router-link :to="{ name: 'singleproduct', params: { id: product.product_Id } }">
                    <img id="productsimg" :src="product.imgURL" alt="">
                    <div class="card-body">
                        <h2 id="price">R{{ product.price }}</h2>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch("getProducts")
    },
}
</script>


<style>

</style>