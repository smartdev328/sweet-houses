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
      // this.$bvModal.hide("my-modal");
  this.$root.$emit('bv::hide::modal', 'my-modal', '#my-modal')
    },
    OpenVerifycode(){
      // this.$bvModal.show("verify-modal");
      this.$root.$emit('bv::show::modal', 'verify-modal', '#verify-modal')
    },
    XsignupOlogin() {
      this.$root.$emit('bv::hide::modal', 'my-modal', '#my-modal')
    //  this.$refs['my-modal'].hide();
   //   this.$bvModal.show("my-modallogin");
      this.$root.$emit('bv::show::modal', 'my-modallogin', '#my-modallogin')
    },
    Openverifyemailbtcode(){
    //   this.$bvModal.hide("my-modallogin");
      this.$root.$emit('bv::hide::modal', 'my-modallogin', '#my-modallogin')
    //  this.$bvModal.show("verify-modal");
      this.$root.$emit('bv::show::modal', 'verify-modal', '#verify-modal')
    },
     closeVerify(){
      //this.$bvModal.hide("verify-modal");
       this.$root.$emit('bv::hide::modal', 'verify-modal', '#verify-modal')
    },
      hideloginmodal() {
      // this.$bvModal.hide("my-modallogin");
        this.$root.$emit('bv::hide::modal', 'my-modallogin', '#my-modallogin')
    },
     
    xloginOsignup() {
    //  this.$bvModal.hide("my-modallogin");
      this.$root.$emit('bv::hide::modal', 'my-modallogin', '#my-modallogin')
   //   this.$bvModal.show("my-modal");
      this.$root.$emit('bv::show::modal', 'my-modal', '#my-modal')
    },
    Openforgetcode(){
      //this.$bvModal.hide("my-modallogin");
      this.$root.$emit('bv::hide::modal', 'my-modallogin', '#my-modallogin')
      this.$bvModal.show("forget-code");
      this.$root.$emit('bv::show::modal', 'forget-code', '#forget-code')
    },
    Xopenresetpasswprd(){
   // this.$bvModal.hide("forget-code");
      this.$root.$emit('bv::hide::modal', 'forget-code', '#forget-code')
   // this.$bvModal.show('reset-password');
      this.$root.$emit('bv::show::modal', 'reset-password', '#reset-password')
  },
    Xresetpassword(){
     // this.$bvModal.hide('reset-password');
      this.$root.$emit('bv::hide::modal', 'reset-password', '#reset-password')
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
