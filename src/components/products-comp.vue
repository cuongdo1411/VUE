<template >
    <div class="container">
        <div class="row">
            <div class="col-6 text-end my-3">
                <button class="btn btn-info" @click="sapxep(1)">Sắp xếp tăng dần theo giá</button>
            </div>
            <div class="col-6 my-3">
                <button class="btn btn-info" @click="sapxep(-1)">Sắp xếp tăng giảm theo giá</button>
            </div>
            <p>{{ carts }}</p>
            <div class="col-4" v-for="item in productsFiltered" :key="item.id">
                <div class="card text-center">
                    <img class="card-img-top" :src="item.image" alt="Title">
                    <div class="card-body">
                        <h4 class="card-title">{{ item.title }}</h4>
                        <p class="card-text">Đơn giá: {{ item.price }}</p>
                        <p class="card-text">Số lượng tồn: {{ item.inventory }}</p>
                        <p class="card-text">Mô tả: {{ item.description }}</p>
                        <router-link class="btn btn-primary" :to="{ name: 'product', params: { id: item.id } }">Xem chi
                            tiết</router-link>
                        <button class="btn btn-warning" :disabled="item.inventory == 0" @click="addCartItem(item)"
                            type="button">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="my-3 d-flex justify-content-center">

                <button class="btn btn-secondary" @click=" prevPage()">Previous</button>
                <div class="mt-1">{{ currentPage }}/{{ pageCount }}</div>
                <button class="btn btn-secondary" @click="nextPage()">Next</button>
            </div>
            <!-- <div class="pagination">
                <ul>
                    <li v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
                        <a @click="currentPage = page">{{ page }}</a>
                    </li>
                </ul>
            </div> -->
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapState([
            "products", "carts", "currentPage"
        ]),
        ...mapGetters(['productsFiltered', 'pageCount', 'paginatedProducts'])
    },
    methods: {
        ...mapMutations(["sapxep", "addCartItem"]),
        prevPage(){
            console.log(true)
            if(this.$store.state.currentPage > 1){
                this.$store.state.currentPage--;
                
            }
        },
        nextPage(){
            if(this.$store.state.currentPage < this.pageCount){
                this.$store.state.currentPage++;
            }
        }
    }
}
</script>
<style lang="">

</style>