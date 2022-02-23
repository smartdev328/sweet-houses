<template>
  <div id="app">
    <Navbar id="navbar"></Navbar>
    <router-view  />
    <Footer id="footer" v-if="!$route.meta.hideNavbar"></Footer>
  </div>
</template>
<style>
@import url(assets/css/style.css);
</style>
<script>
export default {
  data(){
    return{
      navbarheight : ''
    }
  },
  methods:{
    matchHeight () {
      this.navbarheight = document.getElementById('navbar').offsetHeight
      this.$store.commit("setfooterh",this.navbarheight)
}
  },
  mounted(){
      this.matchHeight()
  }
}
</script>
<style>
#app{
  height: 100vh;
}
</style>
