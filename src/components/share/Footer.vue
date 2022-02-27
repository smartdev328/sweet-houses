<template>
    <div>
        <footer>
            <div class="container py-4 ">
                <div class="row br-bottom d-flex align-items-baseline">
                    <div class="col-12 col-md-3 col-lg-3 elementa">
                        <div class="logo-img">
                            <img src="@/assets/image/logo.svg" class="w-100 h-100" alt="logo" />
                        </div>
                        <div>
                            <p class="text-color-1 Roboto-Regular">Sell Without Showings</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 col-lg-3 elementb">
                        <p class="DMSerifRegular">NAVIGATION</p>
                         <div>
                        <ul class="Roboto-Regular">
                            <li>
                                <a class="" @click="openswiftplus('home-swap')"
                >Swift Sale PLUS</a
              >   
                            </li>
                            <li>
                                <a class="" @click="openswiftsale()"
                >Swift Sale</a
              >
                            </li>
                            <li>
                                <a class="" @click="opensweetsale()"
                >Sweet Sale</a
              >
                            </li>
                            <li>
                                <a class="" @click="openhomeswap()"
                >Home Swap</a>  
                            </li>
                            <li>
                                 <a
                class=""
                @click="opentraditionestate()"
                >Traditional Real Estate</a
              >
                            </li>
                            <li><a href="" @click="openfaqspage()">Q & A</a></li>
                        </ul>
                    </div>
                    </div>
                     <div class="col-12 col-md-3 col-lg-3 elementb">
                        <p class="DMSerifRegular">Contact us</p>
                         <div>
                        <ul class="Roboto-Regular">
                            <li><a href="https://www.facebook.com/sweetlyrealestatecanada/" target="_blank">
                                <div class="d-flex align-items-baseline">
                                 
                                    <div class="socialicon mr-2">
                                        <img src="@/assets/image/footer/facebook.svg" class="w-100 h-100 mr-2" alt="">
                                    </div>
                                    <p>Facebook</p>
                                </div>
                            </a></li>
                            <li><a href="https://www.instagram.com/sweetlyrealestatecanada/" target="_blank">
                                <div class="d-flex align-items-baseline">
                                 
                                    <div class="socialicon mr-2">
                                        <img src="@/assets/image/footer/Instagram.svg" class="w-100 h-100 mr-2" alt="">
                                    </div>
                                    <p>Instagram</p>
                                </div>
                            </a></li>
                             <li><a href="https://www.linkedin.com/company/sellsweetlyrealestate/about/" target="_blank">
                                <div class="d-flex align-items-baseline">
                                 
                                    <div class="socialicon mr-2">
                                        <img src="@/assets/image/footer/linkedin.svg" class="w-100 h-100 mr-2" alt="">
                                    </div>
                                    <p>Linkedin</p>
                                </div>
                            </a></li>
                             <li><a href="https://www.youtube.com/channel/UC6JD4zvXw9aUiuisxPitqdw" target="_blank">
                                <div class="d-flex align-items-baseline">
                                 
                                    <div class="socialicon mr-2">
                                        <img src="@/assets/image/footer/youtube.svg" class="w-100 h-100 mr-2" alt="">
                                    </div>
                                    <p>Youtube</p>
                                </div>
                            </a></li>
                        </ul>
                    </div>
                    </div>
                     <div class="col-12 col-md-3 col-lg-3 elementb">
                        <p class="DMSerifRegular">POPULAR SEARCHES</p>
                         <div>
                        <ul class="Roboto-Regular">
                            <li><a @click="openforsalemap">Homes For Sale</a></li>
                            <li><a @click="opensoldmap()">Sold Data</a></li>
                        </ul>
                    </div>
                    </div>
                   
                </div>
                <div class="row py-2">
                    <a href="/privacy-policy"  class="Roboto-Medium">Privacy Policy</a>
                   <a  href="/terms-of-service" class="ml-3 Roboto-Medium">Terms of Service</a>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    methods:{
        openswiftsale(){
      this.$router.push({name:"SwiftSale"});
      document.body.scrollTop = 0;
    },
    openfaqspage(){
        this.$router.push({ name: "FrequentlyQuestion" });
        this.scrolltop()
    },
    openhomeswap(){
        this.$router.push({name:"HomeSwap"})
      this.scrolltop()
    },
    opensweetsale(){
        this.$router.push({name:'SweetSale'})
       this.scrolltop()
    },
    openswiftplus(){
        this.$router.push({name:'SwiftsalePlus'})
       this.scrolltop()
    },
    hidecollapse(){
      document.querySelector(".navbar-collapse").classList.remove('show');
    },
    opentraditionestate(){
      this.$router.push({name:"TraditionalRealestate"});
      this.scrolltop()
    },
    opencontactpage(){
        this.$router.push({name:"ContactUs"});
        
      this.scrolltop()
    },
    openforsalemap(){
        this.$store.commit('setType','forsale')
        this.$router.push({name:"BrowswHome"})
        this.scrolltop()
    },
    opensoldmap(){
        this.$store.commit('setType','sold')
        this.$router.push({name:"BrowswHome"})
        this.scrolltop()
    },
    scrolltop(){
        document.body.scrollTop = 0;
    }
    }
}
</script>
<style>
    footer{
        background:  #EDF3F2;
            
      /*   position: fixed;
        bottom: 0;
        left: 0;
        right: 0; */
    }
    footer .logo-img{
        width: 200px;
        height: 70px;
    }
    footer .elementa p{
        font-size: 18px;
    }
    footer .elementb p{
        color: #434242;
        font-size: 20px;
        text-transform: uppercase;
    }
    footer .elementb ul{
        line-height: 2;
    }
    footer .elementb ul li{
        list-style: none;
    }
    footer .elementb ul li a{
        color:#FFB600 !important;
        text-decoration: none !important;
        cursor: pointer;
        font-family: 'Roboto-Regular' , sans-serif  !important;
        font-size: 16px;
    }
    footer .elementb ul li .socialicon{
        width: 18px;
        height: 18px;
    }
     footer .elementb ul li a p{
         color:#FFB600;
        text-decoration: none;
        cursor: pointer;
        font-family: 'Roboto-Regular' , sans-serif  !important;
        font-size: 16px;
        margin: 0;
     }
     footer .br-bottom{
         border-bottom: 1px solid #434242;
     }
    footer a{
       color: #3333339e;
    }
    footer a:hover{
        color:#FFB600;
    }
</style>