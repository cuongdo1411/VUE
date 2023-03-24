<template>
 
 <Header />
  <router-view/>
</template>
<script>
import Header from "./views/headerView.vue"
export default{
  components:{Header}
}
</script>

