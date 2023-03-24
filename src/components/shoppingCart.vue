<template lang="">
    <div class="table-responsive">
        <table class="table table-striped
        table-hover	
        table-borderless
        table-primary
        align-middle">
            <thead class="table-light">
                <caption>Giỏ hàng</caption>
                <tr>
                    <th>Số thứ tự</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Mô tả</th>
                    <th>Số lượng</th>
                    <th>Tùy biến</th>
                </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr class="table-primary" v-for="item in carts" :key="item.id">
                        <td scope="row">Item</td>
                        <td>{{item.title}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.description}}</td>
                        <td>
                            <button :disabled="item.quantity == 10" @click="incrementQuantityByCartItem(item)">+</button>
                            <span class="quantity">{{ item.quantity }}</span>
                            <button :disabled="item.inventory == 0" @click="decrementQuantityByCartItem(item)">-</button> 
                        </td>
                        <td><button class="btn btn-danger"  @click="removeCartItem(item.id)">Xóa</button></td>  
                        <!-- <td><button class="btn btn-warning"  @click="updateCartItemQuantity(item.id, item.quantity)">Cập nhật</button></td>   -->
                    </tr>
                    <tr>
                        <td><button class="btn btn-danger"  @click="removeAllCart()">Xóa tất cả</button></td>  
                    </tr>
                </tbody>
                <tfoot>
                    
                </tfoot>
        </table>
    </div>
    
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapState(['carts'])
    },
    methods: {
        ...mapMutations([
            'removeCartItem',
            // 'updateCartItemQuantity',
            'removeAllCart',
            'incrementQuantityByCartItem',
            'decrementQuantityByCartItem'
        ])
    }
}
</script>
