<template lang="">
    <div>
        
        <div class="container">
            <div class="row">
                <h1 class="text-center">THÔNG TIN SẢN PHẨM</h1>
                <div class="col-4 justify-content-center p-5">
                    <img :src="products[id].image" class="w-100">
                </div>
                <div class="col-8 justify-content-center my-5">
                    
                    <h3>Title: {{ products[id].title}}</h3>
                    <h3>Price: {{ products[id].price}}</h3>
                    <h3>Description: {{ products[id].description}}</h3>
                    <h3>Quantity: {{ products[id].inventory}}</h3>
                </div>
                <button class="btn btn-warning" :disabled="products[id].inventory == 0" @click="addCartItem(products[id])" type="button">Add to cart</button>
            </div>   
        </div>
        {{id}}
        
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    computed:{
        ...mapState(['products','carts'])
    },
    methods:{
        ...mapMutations(['addCartItem'])
    }
}
</script>

<style lang="">
    
</style>