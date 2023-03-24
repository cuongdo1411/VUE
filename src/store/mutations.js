const mutations = {
    // Phương thức sắp xếp
    sapxep(state, value) {
        if (value == 1) {
            state.products.sort((a, b) => {
                return b.price - a.price;
            })

        }
        else if (value == -1) {
            state.products.sort((a, b) => {
                return a.price - b.price;
            })
        }
    },
    // Phương thức click Tìm kiếm
    clickSearch(state, value) {
        state.keySearch = value;
    },

    //Phương thức tăng, giảm số lượng trong giỏ hàng
    //Tăng số lượng trong giỏ hàng
    incrementQuantityByCartItem(state, product) {
        const cartItem = state.carts.find(item => item.id === product.id);
        const productItem = state.products.find(item => item.id === product.id);
        if (cartItem) {
            cartItem.quantity++;
            state.cartTotal++;
            productItem.inventory--;
        }
    },

    // Giảm số lượng trong giỏ hàng
    decrementQuantityByCartItem(state, product) {
        const cartItem = state.carts.find(item => item.id === product.id);
        const productItem = state.products.find(item => item.id === product.id);
        if (cartItem) {
            cartItem.quantity--;
            state.cartTotal--;
            productItem.inventory++;
            if (cartItem.quantity === 0) {
                state.carts.splice(state.carts.indexOf(cartItem), 1);
            }
        }
    },

    addCartItem(state, product) {
        const cartItem = state.carts.find(item => item.id === product.id);
        const productItem = state.products.find(item => item.id === product.id);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            state.carts.push({ ...product, quantity: 1 });
        }
        if (productItem.inventory > 0) {
            productItem.inventory--;
        }
        state.cartTotal++;
    },

    // Phương thức xóa giỏ hàng
    removeCartItem(state, productId) {
        const cartItem = state.carts.find(item => item.id === productId);
        if (cartItem) {
            const product = state.products.find(item => item.id === cartItem.id);
            product.inventory += cartItem.quantity;
            state.cartTotal -= cartItem.quantity;
            // Xóa
            state.carts = state.carts.filter(item => item.id !== productId);
        }
    },
    removeAllCart(state) {
        state.carts = [];
        state.products.forEach(product => {
            product.inventory = 10;
        });
    },


    // Thay đổi số lượng sản phẩm trong giỏ hàng
    // updateCartItemQuantity(state, { productId, quantity }) {
    //     const cartItem = state.carts.find(item => item.id === productId);
    //     const productItem = state.products.find(item => item.id === productId);

    //     if (cartItem) {
    //         const difference = quantity - cartItem.quantity;
    //         if (productItem.inventory >= difference) {
    //             cartItem.quantity = quantity;
    //             productItem.inventory -= difference;
    //         }
    //     } else {
    //         console.error(`CartItem with id ${productId} not found`);
    //     }
    // }


}

export default mutations