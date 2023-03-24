export default {
    // Thêm sản phẩm vào giỏ hàng
    addCartItem({ commit }, product) {
        commit('addCartItem', product);
    },

    // Xóa sản phẩm khỏi giỏ hàng:
    removeCartItem({ commit }, productId) {
        commit('removeCartItem', productId);
    },

    // Thay đổi số lượng sản phẩm trong giỏ hàng
    updateCartItemQuantity({ commit }, { productId, quantity }) {
        commit('updateCartItemQuantity', { productId, quantity });
    }
}