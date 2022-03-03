<template>
  <div id="app">
    <Navbar id="navbar"></Navbar>
    <router-view  />
    <Footer id="footer" v-if="!$route.meta.hideNavbar"></Footer>
      <b-modal
            id="my-modal"
            ref="my-modal"
            header-bg-variant="white"
            body-bg-variant="white"
            footer-bg-variant="white"
          >
            <sign-up
              @hidesignupmodal="hidesignupmodal"
              @XsignupOlogin="XsignupOlogin"
              @OpenVerifycode="OpenVerifycode"
            ></sign-up>
          </b-modal>
          <b-modal
            id="verify-modal"
            header-bg-variant="white"
            body-bg-variant="white"
            footer-bg-variant="white"
            
            no-close-on-backdrop
          >
            <verification-code
              @OpenVerifycode="OpenVerifycode"
              @closeVerify="closeVerify"
            ></verification-code>
          </b-modal>
           <b-modal
           red="my-modallogin"
            id="my-modallogin"
            header-bg-variant="white"
            body-bg-variant="white"
            footer-bg-variant="white"
          >
            <log-in
              @hideloginmodal="hideloginmodal"
              @xloginOsignup="xloginOsignup"
              @Openforgetcode="Openforgetcode"
              @Openverifyemailbtcode="Openverifyemailbtcode"
            ></log-in>
          </b-modal>
          
        <b-modal
            id="forget-code"
            header-bg-variant="white"
            body-bg-variant="white"
            footer-bg-variant="white"
            
            no-close-on-backdrop
          >
            <forget-code
              @Xopenresetpasswprd="Xopenresetpasswprd"
            ></forget-code>
          </b-modal>
           <b-modal
            id="reset-password"
            header-bg-variant="white"
            body-bg-variant="white"
            footer-bg-variant="white"
            
            no-close-on-backdrop
          >
            <reset-password
              @Xresetpassword="Xresetpassword"
            ></reset-password>
          </b-modal>
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
},
hidesignupmodal() {
      this.$bvModal.hide("my-modal");
    },
    OpenVerifycode(){
      this.$bvModal.show("verify-modal");
    },
    XsignupOlogin() {
      this.$refs['my-modal'].hide();
      this.$bvModal.show("my-modallogin");
    },
    Openverifyemailbtcode(){
       this.$bvModal.hide("my-modallogin");
      this.$bvModal.show("verify-modal");
    },
     closeVerify(){
      this.$bvModal.hide("verify-modal");
    },
      hideloginmodal() {
      this.$bvModal.hide("my-modallogin");
    },
     
    xloginOsignup() {
      this.$bvModal.hide("my-modallogin");
      this.$bvModal.show("my-modal");
    },
    Openforgetcode(){
      this.$bvModal.hide("my-modallogin");
      this.$bvModal.show("forget-code");
    },
    Xopenresetpasswprd(){
    this.$bvModal.hide("forget-code");
    this.$bvModal.show('reset-password');
  },
    Xresetpassword(){
      this.$bvModal.hide('reset-password');
    },
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
