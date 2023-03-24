const state = {
    products: [
        { id: 1, title: "Sản phẩm 1", price: 1000, description: "Mô tả sản phẩm 1", inventory: 10, image: require("@/assets/sp1.jpg") },
        { id: 2, title: "Sản phẩm 2", price: 2000, description: "Mô tả sản phẩm 2", inventory: 10, image: require("@/assets/sp2.jpg") },
        { id: 3, title: "Sản phẩm 3", price: 3000, description: "Mô tả sản phẩm 3", inventory: 10, image: require("@/assets/sp3.jpg") },
        { id: 4, title: "Sản phẩm 4", price: 5000, description: "Mô tả sản phẩm 4", inventory: 10, image: require("@/assets/sp4.jpg") },
        { id: 5, title: "Sản phẩm 5", price: 4000, description: "Mô tả sản phẩm 5", inventory: 10, image: require("@/assets/sp5.jpg") },
    ],
    allProducts:[],
    carts: [],
    cartTotal: 0,
    keySearch: "",
    sort:"",

    // Phân trang
    currentPage: 1,
    pageSize: 3,
}

export default state
