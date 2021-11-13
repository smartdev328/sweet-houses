<template>
  <div id="app">
        <Navbar/>
    <router-view  />
    <Footer></Footer>
    <notifications group="foo" />
  </div>
</template>

<style>
@import url(assets/css/style.css);
</style>
<script>
export default {
  methods:{
  },
  mounted(){

  }
}
</script>
