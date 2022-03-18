<template>
  <div class="shadow-sm">
    <nav
      class="
        navbar navbar-expand-lg
        px-4
        navbar-light
        bg-transparent
        sticky-top
      "
    >
      <router-link class="navbar-brand" to="/">
        <div class="logo" @click="reloadpage()">
          <img
            src="@/assets/image/logo.svg"
            class="w-100 h-100 normalstate"
            alt="logo"
          />
        </div>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        v-if="isLoggedIn"
        class="collapse navbar-collapse mx-auto DMSerifRegular"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mx-auto px-2 px-md-0">
              <li class="nav-item dropdown">
            <p
              class="nav-link dropdown-toggle DMSerifRegular"
              to="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Buy & Sell
              <a class="h5"> <b-icon-chevron-down></b-icon-chevron-down></a>
            </p>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
<!--              <a class="dropdown-item btn" @click="opensweetsale('Sweet_Sale');hidecollapse()"-->
<!--                >Sweet Sale</a-->
<!--              >-->
<!--              <a class="dropdown-item btn" @click="openswiftsale('Swift_Sale');hidecollapse()"-->
<!--                >Swift Sale</a-->
<!--              >-->
                <a class="dropdown-item btn" @click="openswiftplus('home-swap');hidecollapse()"
                >Swift Sale PLUS</a
              >    
<!--              <a class="dropdown-item btn" @click="openhomeswap('home-swap');hidecollapse()"-->
<!--                >Home Swap</a>                  -->
              <!-- <a
                class="dropdown-item btn"
                @click="openeduityadvanced('Equity_Advance')"
                >Equity Advance</a
              >  -->
              <a
                class="dropdown-item btn"
                @click="opentraditionestate();hidecollapse()"
                >Traditional Real Estate</a
              >
            </div>
          </li>
          <li class="nav-item" >
            <a class="nav-link btn text-left" @click="openBrowsehome();hidecollapse()" exact-path
              >Browse Homes</a
            >
          </li>
          <li class="nav-item" @click="hidecollapse()">
            <router-link to="/Whats-My-Home-Worth" class="nav-link">
              Sweetly Estimates
            </router-link>
          </li>
          <li class="nav-item" @click="hidecollapse()">
            <router-link to="/saved" class="nav-link">
              <div class="d-flex">
                <img
                  src="../../assets/image/icon/Heart.svg"
                  alt="icon"
                  class="heart-icon"
                />
                <p>Saved (0)</p>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="">
          <ul class="navbar-nav">
            <li class="nav-item dropdown b-r-1 px-3">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More
                <a class="h5"> <b-icon-chevron-down></b-icon-chevron-down></a>
              </a>
              <div
                class="dropdown-menu border-0 shadow-sm"
                aria-labelledby="navbarDropdown"
              >
                <a @click="openblog()" class="dropdown-item">Blog</a>
                <router-link to="/about-us" class="dropdown-item"
                >About us</router-link
                >
                <router-link class="dropdown-item" to="/contact-us"
                >Contact</router-link
                >
                <router-link class="dropdown-item" to="/for-realtor"
                >For  REALTORS®</router-link
                >
                <router-link class="dropdown-item" to="/agents"
                >Agents</router-link
                >
              </div>
            </li>
            <li class="nav-item dropdown px-3">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ username }}
                <a class="h5"> <b-icon-chevron-down></b-icon-chevron-down></a>
              </a>
              <div
                class="dropdown-menu border-0 shadow-sm"
                aria-labelledby="navbarDropdown"
              >
                <a class="btn dropdown-item" @click="logout">Log out</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        v-else
        class="collapse navbar-collapse mx-auto DMSerifRegular"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mx-auto">
          <li class="nav-item dropdown">
            <p
              class="nav-link dropdown-toggle DMSerifRegular"
              to="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Buy & Sell
              <a class="h5"> <b-icon-chevron-down></b-icon-chevron-down></a>
            </p>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
<!--              <a class="dropdown-item btn" @click="opensweetsale('Sweet_Sale');hidecollapse()"-->
<!--                >Sweet Sale</a-->
<!--              >-->
<!--              <a class="dropdown-item btn" @click="openswiftsale('Swift_Sale');hidecollapse()"-->
<!--                >Swift Sale</a-->
<!--              >-->
                <a class="dropdown-item btn" @click="openswiftplus('home-swap');hidecollapse()"
                >Swift Sale PLUS</a
              >    
<!--              <a class="dropdown-item btn" @click="openhomeswap('home-swap');hidecollapse()"-->
<!--                >Home Swap</a-->
<!--              >           -->
              
              <!-- <a
                class="dropdown-item btn"
                @click="openeduityadvanced('Equity_Advance')"
                >Equity Advance</a
              >  -->
              <a
                class="dropdown-item btn"
                @click="opentraditionestate();hidecollapse()"
                >Traditional Real Estate</a
              >
            </div>
          </li>
          <li class="nav-item" >
            <a class="nav-link btn text-left" @click="openBrowsehome();hidecollapse()"
              >Browse Homes</a
            >
          </li>
          <li class="nav-item">
            <router-link to="/Whats-My-Home-Worth" class="nav-link">
              What's My Home Worth?
            </router-link>
          </li>
       
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More
              <a class="h5"> <b-icon-chevron-down></b-icon-chevron-down></a>
            </a>
            <div
              class="dropdown-menu border-0 shadow-sm"
              aria-labelledby="navbarDropdown"
            >
              <a @click="openblog()"  class="dropdown-item">Blog</a>
              <router-link to="/about-us" class="dropdown-item"
                >About us</router-link
              >
               <router-link class="dropdown-item" to="/contact-us"
                >Contact</router-link
              >
               <router-link class="dropdown-item" to="/for-realtor"
                >For  REALTORS®</router-link
              >
               <router-link class="dropdown-item" to="/agents"
                >Agents</router-link
              >
            </div>
          </li>
        </ul>
        <div class="bg-white px-2 px-md-0 pb-3 pb-md-0">
          <span class="border-right px-3 mr-3 text-color-1 DMSerifRegular phonenumer">
            <img class="phoneicon" src="../../assets/image/icon/phoneicon.svg" alt="">
            780-477-9338 </span>
          <!-- <button @click="openresetpassword">verify</button> -->
          <button
              @click="openloginmodal()"
            v-b-modal="'my-modallogin'"
            class="bg-transparent border-0 mr-3 py-1"
          >
            Log In
          </button>
         
          <b-button
              @click="opensignupmodal()"
            v-b-modal="'my-modal'"
            variant="white"
            class="bg-transparent signupbtn px-2 py-1"
          >
            Sign Up
          </b-button>
        
          

          
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      showCollapse:false
    };
  },
  computed: {
    username() {
      return this.$store.state.user.first_name || "";
    },
    user() {
      return this.$store.state.user || "";
    },
    isLoggedIn() {
      if (this.username) {
        return true;
      } else {
        return false;
      }
    },
    fullscreen(){
      return this.$store.state.fullscreen
    }

  },
  methods: {
    reloadpage(){
      console.log(this.$route.name)
      if(this.$route.name == 'MapHome' && this.fullscreen){
         window.location.reload();
      }
    },
    openblog(){
      window.open('https://sweetly.ca/info/blog/', '_blank')
     // this.$router.push('/info/blog/')
    },
    opensignupmodal(){
      this.$root.$emit('bv::show::modal', 'my-modal', '#my-modal')
    },
    openloginmodal(){
      this.$root.$emit('bv::show::modal', 'my-modallogin', '#my-modallogin')
    },
    hidecollapse(){
      document.querySelector(".navbar-collapse").classList.remove('show');
    },
    switchVisibility() {
      this.FieldType = this.FieldType === "password" ? "text" : "password";
    },

  
  
    logout() {
      this.$store.dispatch("logout");
      // this.$notify({
      //   group: 'foo',
      //   type: "success",
      //   text: 'Hello user! This is a notification!',
      // });
      Swal.fire({
        title: "Success!",
        text: "You are Logged Out!",
        icon: "warning",
        confirmButtonText: "Ok",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    opensweetsale() {
       this.$router.push({name:'SweetSale'})
       this.scrolltop()
    },
    openswiftplus(){
       this.$router.push({name:'SwiftsalePlus'})
       this.scrolltop()
    },
    openswiftsale(){
      this.$router.push({name:"SwiftSale"})
      this.scrolltop()
    },
    openBrowsehome(){
      this.$router.push({name:"BrowswHome"})
      this.scrolltop()
    },
    openhomeswap(){
      this.$router.push({name:"HomeSwap"})
      this.scrolltop()
    },
    opentraditionestate(){
      this.$router.push({name:"TraditionalRealestate"})
      this.scrolltop()
    },
    openeduityadvanced(){
      this.$router.push({name:"EquityAdvance"})
      this.scrolltop()
    },
    editselectedmenu(tab){
      this.$store.commit('editSelectedMenu',tab)
      this.scrolltop()
    },
    scrolltop(){
       document.body.scrollTop = 0;
    }
  },
  created(){
 
  }
};
</script>
<style scoped>
.dropdown-toggle::after {
  display: none;
}
input {
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
nav a:focus {
  background: transparent;
}
.nav-item .nav-link {
  cursor: pointer;
}
.nav-item .heart-icon {
  width: 22px;
  height: 22px;
}
.b-r-1 {
  border-right: 2px solid #70707099;
}
.navbar-nav .nav-item a:hover {
  color: #707070 !important;
  text-decoration: underline;
}
.navbar-nav .nav-item p{
  color: #232323 !important;
    font-size: 22px !important;
    font-weight: bold;
}
.navbar-nav .nav-item .router-link-exact-active {
  color: #04847f !important;
}
.phoneicon{
  width: 18px;
  height: 18px;
}
.phonenumer{
  font-weight: bold;
  font-size: 20px;
}
.navbar-collapse{
  /*height: 0;*/
}
.navbar-nav{
  background: #fff;
}
</style>
