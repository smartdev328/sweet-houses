<template>
    <div class="shadow-sm">
  <nav class="navbar navbar-expand-lg px-4 navbar-light bg-transparent sticky-top">
  <router-link class="navbar-brand" to="/">
      <div class="logo">
            <img src="@/assets/image/logo.svg" class="w-100 h-100 normalstate" alt="logo" />
        </div>
  </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div v-if="isLoggedIn" class="collapse navbar-collapse mx-auto DMSerifRegular" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto">
       <li class="nav-item">
        <router-link class="nav-link" to="/maphome"  exact-path>Browse Homes</router-link>
      </li>
        <li class="nav-item">
        <router-link to="/Whats-My-Home-Worth" class="nav-link">
          Instant Estimates 
        </router-link>
      </li>
       <li class="nav-item">
        <router-link to="/saved" class="nav-link">
          <div class="d-flex">
            <img src="../../assets/image/icon/Heart.svg" alt="icon" class="heart-icon"> 
            <p>Saved (0)</p>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="">
        <ul class="navbar-nav">
          <li class="nav-item dropdown b-r-1 px-3">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More
            <a class="h5">  <b-icon-chevron-down
></b-icon-chevron-down></a>
        </a>
        <div class="dropdown-menu border-0 shadow-sm" aria-labelledby="navbarDropdown">
          <router-link to="/blog" class="dropdown-item">Blog</router-link>
          <router-link to="/about-us" class="dropdown-item">About us</router-link>
        </div>
      </li>
        <li class="nav-item dropdown px-3">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{username}}
            <a class="h5">  <b-icon-chevron-down
></b-icon-chevron-down></a>
        </a>
        <div class="dropdown-menu border-0 shadow-sm" aria-labelledby="navbarDropdown">
          <a  class="btn dropdown-item" @click="logout">Log out</a>
        </div>
      </li>
        </ul>
    </div>
  </div>
  <div v-else class="collapse navbar-collapse mx-auto DMSerifRegular" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto">
       <li class="nav-item dropdown">
        <router-link class="nav-link dropdown-toggle DMSerifRegular" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Buy & Sells
           <a class="h5">  <b-icon-chevron-down
></b-icon-chevron-down></a>
        
        </router-link>
         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item btn" @click="opensweetsale('Sweet_Sale')">Sweet Sale</a>
          <a class="dropdown-item btn" @click="opensweetsale('Swift_Sale')" >Swift Sale</a>
          <a class="dropdown-item btn"  @click="opensweetsale('Equity_Advance')">Equity Advance</a>
          <a class="dropdown-item btn" @click="opensweetsale('Traditional_Real_Estate')">Traditional Real 
Estate</a>
        </div> 
      </li>
       <li class="nav-item">
        <router-link class="nav-link" to="/maphome">Browse Homes</router-link>
      </li>
        <li class="nav-item">
        <router-link to="/Whats-My-Home-Worth" class="nav-link">
          What's My Home Worth?
        </router-link>
      </li>
            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Contact
            <a class="h5">  <b-icon-chevron-down
></b-icon-chevron-down></a>
        </a>
        <div class="dropdown-menu border-0 shadow-sm" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item pl-3" to="/agents">Agents</router-link>
          <router-link class="dropdown-item pl-3" to="/for-realtor">For Realtors</router-link>
          <router-link class="dropdown-item pl-3" to="/contact-us">Contact</router-link>
        </div>
      </li>
          <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More
            <a class="h5">  <b-icon-chevron-down
></b-icon-chevron-down></a>
        </a>
        <div class="dropdown-menu border-0 shadow-sm" aria-labelledby="navbarDropdown">
          <router-link to="/blog" class="dropdown-item">Blog</router-link>
          <router-link to="/about-us" class="dropdown-item">About us</router-link>
        </div>
      </li>
    </ul>
    <div class="">
      <button v-b-modal="'my-modallogin'" class="bg-transparent border-0 mr-3">
        Log In
      </button>
      <b-modal id="my-modallogin" 
        header-bg-variant="white"
        body-bg-variant="white"
        footer-bg-variant="white">
         <log-in @hideloginmodal="hideloginmodal"
         @xloginOsignup="xloginOsignup"
         ></log-in>
        </b-modal>
      <b-button v-b-modal="'my-modal'" variant="white" class="bg-transparent  signupbtn px-2 py-1" >
        Sign Up
      </b-button>
        <b-modal id="my-modal" 
        header-bg-variant="white"
        body-bg-variant="white"
        footer-bg-variant="white">
         <sign-up @hidesignupmodal="hidesignupmodal"
         @XsignupOlogin="XsignupOlogin"
         ></sign-up>
        </b-modal>
    </div>
  </div>
  
</nav>
</div>
</template>
<script>
import { eventBus } from '../../main'
import Swal from 'sweetalert2'
export default {
    data(){
      return{
       
      }
    },
    computed:{
      username(){
        return this.$store.state.user.first_name || "";
      },
      user(){
        return this.$store.state.user || "";
      },
      isLoggedIn() {
      if (this.username) {
        return true;
      } else {
        return false;
      }
    },
    },
    methods:{
      switchVisibility(){
        this.FieldType = this.FieldType === 'password' ? 'text':'password'
      },
      hidesignupmodal(){
        console.log('success')
        this.$bvModal.hide('my-modal')
        
      },
      hideloginmodal(){
        this.$bvModal.hide('my-modallogin')
      },
      xloginOsignup(){
        this.$bvModal.hide('my-modallogin');
        this.$bvModal.show('my-modal')
      },
      XsignupOlogin(){
        this.$bvModal.hide('my-modal');
        this.$bvModal.show('my-modallogin')
      },
      logout(){
        this.$store.dispatch('logout');
        // this.$notify({
        //   group: 'foo',
        //   type: "success",
        //   text: 'Hello user! This is a notification!',
        // });
         Swal.fire({
            title: 'success!',
            text: 'you are logout!',
            icon: 'warning',
            confirmButtonText: 'Ok',
             showConfirmButton:false,
            timer: 1500
          })
      },
      opensweetsale(tab){
       // this.$router.push({name:'Home'})
        eventBus.$emit('fireMethod',tab);

      },
    }
}
</script>
<style scoped>
    .dropdown-toggle::after{
      display: none;
    }
    input{
      outline: none !important;
      box-shadow: none !important;
    }
    nav .modal-body .element1 p {
  font-size: 28px;
}
nav .modal-header .close {
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
  margin: 0.25rem 0.125rem !important;
  border-radius: 50%;
}
nav a:focus{
  background: transparent;
}
.nav-item .nav-link{
  cursor: pointer;
}
.nav-item .heart-icon{
  width: 22px;
  height: 22px;
}
 .b-r-1{
  border-right: 2px solid #70707099;
}
.navbar-nav .nav-item a:hover{
  color: #707070 !important;
  text-decoration: underline;
}
.navbar-nav .nav-item  .router-link-exact-active{
  color: #04847f !important
}
</style>