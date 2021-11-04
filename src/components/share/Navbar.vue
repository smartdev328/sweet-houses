<template>
    <div class="shadow-sm">
  <nav class="navbar navbar-expand-lg container navbar-light bg-transparent sticky-top">
  <router-link class="navbar-brand" to="/">
      <div class="logo">
            <img src="@/assets/image/logo.svg" class="w-100 h-100 normalstate" alt="logo" />
        </div>
  </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse mx-auto DMSerifRegular" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto">
       <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle DMSerifRegular" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Buy & Sell
          <a class="h5">  <b-icon-chevron-down
></b-icon-chevron-down></a>
        
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Sweet Sale</a>
          <a class="dropdown-item" href="#">Swift Sale</a>
          <a class="dropdown-item" href="#">Equity Advance</a>
          <a class="dropdown-item" href="#">Traditional Real 
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
          <router-link class="dropdown-item pl-3" to="/contact-us">contact</router-link>
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
      <button class="bg-transparent border-0 mr-3">
        Log In
      </button>
      <b-button v-b-modal="'my-modal'" variant="white" class="bg-transparent  signupbtn px-2 py-1">
        Sign Up
      </b-button>
      <b-modal id="my-modal" 
        header-bg-variant="white"
        body-bg-variant="white"
        footer-bg-variant="white">
        <div class="text-center element1  mt-n3">
          <p class="font-robot text8">Sign Up</p>
        </div>
        <div class="w-75 mx-auto element2">
            <a class="btn w-100 mb-1 btn-auth" href="">
            <img src="@/assets/image/icons8-google.svg" alt="">
            <span>Sign up with Google</span>
            </a>
            <p class="hnXNtF">
              or
            </p>
            <div class="form-group">
              <input type="text" class="form-control form-control-lg"  placeholder="Full Name">
            </div>
            <div class="form-group">
              <input type="email" class="form-control form-control-lg"  placeholder="Email">
            </div>
            <div class="form-group position-relative">
              <input :type="FieldType" class="form-control form-control-lg"  placeholder="Password">
              <div class="passinput">
                  <span v-if="FieldType === 'password'"  @click="switchVisibility">Show</span>
              <span v-else  @click="switchVisibility">Hide</span>
              </div>
            </div>
              <button type="submit" class="btn btn-primary w-100 submit-btn ">Join Now</button>
              <div class="element3 align-items-baseline">
                <p class="font-robot text-color-2 mr-2">Already have a profile? </p>
                <button>log in</button>
              </div>
              <div class="element4 d-flex justify-content-center text-center mb-4">
              <p>
                By creating your account, you agree to our<code><br></code>
              <a href="" class="text-color-2">Terms of Use</a>  and <a href="" class="text-color-2">Privacy Policy</a> </p>
              </div>
             
        </div>
      </b-modal>
    </div>
  </div>
</nav>
</div>
</template>
<script>
export default {
    data(){
      return{
        fullname:"",
        FieldType:"password"
      }
    },
    methods:{
      switchVisibility(){
        this.FieldType = this.FieldType === 'password' ? 'text':'password'
      }
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
</style>