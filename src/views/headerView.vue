<template >
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="javascript:void(0)">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
            <router-link  class="nav-link" to="/">Home</router-link> 
   
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/product">Sản phẩm</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/shopping-cart">Giỏ hàng({{ cartTotal }})</router-link>
        </li>
      </ul>
      <form class="d-flex">
          <input class="form-control me-2" type="text" placeholder="Search" v-model="searchValue">
          <button class="btn btn-primary" type="button" @click="clickSearch(this.searchValue)">Search</button>
        </form>
    </div>
  </div>
</nav>

</template>
<script>
import { mapMutations, mapGetters, mapState } from 'vuex';
export default {
    data(){
        return{
          searchValue:"",
        };
    },
    computed:{
      ...mapGetters(['productsFiltered']),
      ...mapState(['cartTotal'])
    },
    methods: {
      ...mapMutations(['clickSearch',])
    },
  }

</script>
