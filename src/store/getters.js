const getters = {
    productsFiltered(state) {
        const startIndex = (state.currentPage - 1) * state.pageSize;
        if (state.keySearch !== "") {
            return state.products.filter(product => {
                return product.title.toLowerCase().includes(state.keySearch.toLowerCase());
            })
        }
        return state.products.slice(startIndex, startIndex + state.pageSize);

    },
    // Phương thức tính tổng số lượng trong giỏ hàng
    getTotalQuantity(state) {
        let totalQuantity = 0;
        for (let i = 0; i < state.carts.length; i++) {
            totalQuantity += state.carts[i].quantity;
        }
        return totalQuantity;
    },

    // Phân trang sản phẩm
    // Tính tổng số trang
    pageCount(state) {
        return Math.ceil(state.products.length / state.pageSize);
    },
    // Trả về danh sách được lọc và phân trang
    // paginatedProducts(state) { // Ví dụ có 3 trang
    //     const startIndex = (state.currentPage - 1) * state.perPage; // (1-1)* 4 = 0
    //     const endIndex = startIndex + state.perPage; // 0 + 4 = 4
    //     return state.productsFiltered.slice(startIndex, endIndex);
    // },
}

export default getters