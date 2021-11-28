<template ref="home">
  <div class="home">
    <header>
        <div class="p-5">
                <div class="itemnew11 d-flex justify-content-center DMSerifRegular">
                    <textra :data='words' :timer="4" :infinite='true' filter="top-bottom" /> <span class="ml-2">Your Home</span> 
              </div>
          <div class="item1 mt-4 mb-3">
              <div class="item1a">
                <button @click="selected_menu = 'Sweet_Sale'" 
                :style="getclass('Sweet_Sale')">Sweet Sale 
                  <div :style="getline('Sweet_Sale')"></div>
                </button>
                <button @click="selected_menu = 'Swift_Sale'" 
                :style="getclass('Swift_Sale')">Swift Sale 
                <div :style="getline('Swift_Sale')"></div></button>
                <button @click="selected_menu = 'Equity_Advance'" 
                :style="getclass('Equity_Advance')">Equity Advance
                <div :style="getline('Equity_Advance')"></div></button>
                <button @click="selected_menu = 'Traditional_Real_Estate'"  
                :style="getclass('Traditional_Real_Estate')">Traditional Real Estate
                <div :style="getline('Traditional_Real_Estate')"></div></button>
              </div>
              <div class="item1b px-3 py-5 p-md-5">
                  <div class="text-center  text-white DMSerifRegular" :class="tab_visible('Sweet_Sale')">
                    <p class="DMSerifRegular">Get Maximum Value! Skip
                    Public Showings And Choose 
                    Your Moving Day</p>
                    <p class="Roboto-Regular">The Sweet Sale is the smartest way to sell.</p>
                  </div> 
                  <div class="text-center  text-white DMSerifRegular" :class="tab_visible('Swift_Sale')">
                    <p class="DMSerifRegular">Your offer in minutes, SOLD in days</p>
                    <p class="Roboto-Regular">Market Value less Our Fee = SOLD! Hassle-free.</p>
                  </div>
                    <div class="text-center  text-white DMSerifRegular" :class="tab_visible('Equity_Advance')">
                    <p class="DMSerifRegular">Your Home Equity, Before Your First Showing! </p>
                    <p>Access $25,000, $50,000, $150,000, or more!</p>
                  </div>
                  <div class="text-center  text-white DMSerifRegular" :class="tab_visible('Traditional_Real_Estate')">
                    <p class="DMSerifRegular">Sweetened Listing, With Muscle!</p>
                    <p class="Roboto-Regular">Compare our services.</p>
                  </div>

                  <div class="w-100 inputaddress">
                      <img src="../assets/image/icon/Iconly-Light-Location.svg" alt="">
                      <div class="item1b2">
                        <span class="space"></span>
                        <input type="text" class="Poppins" v-model="location"
                         placeholder="Enter your home address">
                       
                         
                      </div>
                        
                    
                      <div class="item1b3">
                        <button class="Poppins" type="button" @click="getresult()">Get started</button>
                      </div>
                  </div>
                    <div class="item1b3-sm">
                        <button class="Poppins" type="button" @click="getresult()">Get started</button>
                      </div>
                  <ul class="listcity"  v-if="searchResults.length > 0 && location">
                        <li v-for="(result, i) in searchResults" :key="i" @click="chooseaddress(result)" class="Roboto-Regular">
                         <img src="../assets/image/icon/pinaddress.svg" class=""> {{ result.description }}
                        </li>
                      </ul>
                  <span class="spanerr" v-if="errmsg">{{errmsg}}</span>
              </div>
          </div>
        </div>
    </header>
    <div class="my-5">
        <div class="container" :class="tab_visible('Sweet_Sale')">
          <sweet-sale></sweet-sale>
        </div>
         <div class="container" :class="tab_visible('Swift_Sale')">
          <swift-sale></swift-sale>
        </div>
         <div class="container" :class="tab_visible('Equity_Advance')">
          <equity-advance></equity-advance>
        </div>
         <div :class="tab_visible('Traditional_Real_Estate')">
          <traditional-realestate></traditional-realestate>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { eventBus } from '../main'


export default {
  name: 'Home',
  data(){
    return{
      selected_menu:"Sweet_Sale",
      input:{
        homeaddress:null
      },
      location:'',
      searchResults: [],
       service: null ,
      errmsg:'',
      latlong:{ lat:0,lng:0},
      userlocation:{},
       words: ["Buy", "Sell", "List","Trade","Finance","Unlock"]
    }
  },
   metaInfo () {
      return {
        script: [{
         src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyBcU3Q8AzxVuwdri3eEWOlVdVqFSeLtT60&libraries=places`,
          async: true,
          defer: true,
          callback: () => this.MapsInit() ,// will declare it in methods
        }]
      }
   },
  computed:{

  },
  components: {
    
  },
   watch: {
      location : function(newValue){
        if(newValue){
          this.service.getPlacePredictions({
          input:this.location,
          ttypes: ['(address)'],  
          fields: ["address_components", "geometry", "name"],
          componentRestrictions: {country: "ca"},
          
        },
          this.displaySuggestions,
          
        )
        }
        
      }
    },
  methods:{
    MapsInit(){
       this.service = new window.google.maps.places.AutocompleteService();

    },
     displaySuggestions (predictions, status) {
        if (status !== window.google.maps.places.PlacesServiceStatus.OK) {

          this.searchResults = []
          return
        }
        this.searchResults = predictions.map(prediction => prediction) 
      },
      getCoordinates(address){
  fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+address+'&key=AIzaSyBcU3Q8AzxVuwdri3eEWOlVdVqFSeLtT60')
    .then(response => response.json())
    .then(data => {
      const latitude = data.results[0].geometry;
     this.latlong.lat = latitude.location.lat;
     this.latlong.lng = latitude.location.lng
    })
},
    getclass(tab) {
      if (tab == this.selected_menu) {
        return "background:#00A19B;";
      }
    },
     getline(tab){
        if (tab == this.selected_menu) {
      return " background: rgb(255, 182, 0);margin-bottom: 0px;  position: absolute; bottom: 0px;    width: 50%;   height: 5px;"
}
    },
      tab_visible(tab) {
      if (tab == this.selected_menu) {
        return "d-block";
      } else {
        return "d-none";
      }
    },
    opensweetsale(tab){
      this.tab_visible(tab);
      this.getline(tab);
      this.getclass(tab);
      console.log(tab)
      this.selected_menu = tab
     // console.log(tab)
     // this.selected_menu = tab;
    },
  checkform(){
    this.errmsg = ""
    this.searchResults =[];
    if(!this.location){
      this.errmsg = `Oops! Please enter your home address (including street number), then select from the dropdown.
       If you're having trouble, just contact us.`
    }
    if(!Object.keys(this.userlocation).length > 0){
       this.errmsg = `Oops! Please select from the dropdown.
       If you're having trouble, just contact us.`
    }
    if(Object.keys(this.userlocation).length > 0){
      if(!this.userlocation.types.includes('street_address')){
        this.errmsg = `Oops! Please enter your home address (including street number), then select from the dropdown.
       If you're having trouble, just contact us.`
      }

    }
    if(this.location && Object.keys(this.userlocation).length > 0 && this.userlocation.types.includes('street_address')){
      return true
    }

  },
  chooseaddress(value){
    this.userlocation = value;
    this.location = value.description;
    this.searchResults = [];
  },
    getresult(){
      if(this.checkform()){
        this.getCoordinates(this.location);
        this.$store.commit('sethomeaddress',this.location)
        this.$store.commit('setlatlong',this.latlong)
        this.$router.push({name:'ConfirmAddress'})
        this.$store.dispatch('ScrollTop')
      }
    }
      },
      created() {
    eventBus.$on('fireMethod', (tab) => {
        window.setInterval(this.opensweetsale(tab),1000)
        //  this.opensweetsale(tab);
    })
}
  
}
</script>
<style scoped>
.home .item1{
    margin: 0 auto;
    width: 50%;
  }
 .home .item1a{
  /*   width: 100vw;
    max-width: 311px; */
    margin: 0px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }
 .home .item1a button{
    background: #04847F;
    color: white;
    border: none;
    border-radius: 12px 12px 0px 0px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 10px;
    position: relative;
    font-family: "DMSerifRegular","Playfair Display",serif;
    font-size: 24px;
  }
  .item1 .item1b{
    background: #00A19B;
        border-radius: 0px 0px 12px 12px;
    height: auto;
 /*    max-width: 678px; */
    margin: 0px;
        display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
        display: flex;
    flex-direction: column;
  }
 .home .item1 .item1b p:first-child{
    font-size: 38px;
  }
  .home .item1 .item1b p:nth-child(2){
    font-size: 22px;
  }
  .item1 .item1b .inputaddress{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    border-radius: 6px;
    text-align: left;
    background: white;
    min-height: 48px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-color: transparent;
    box-shadow: rgb(0 0 0 / 1%) 0px 1.77104px 4.75968px,
    rgb(0 0 0 / 2%) 0px 4.25607px 11.4382px, 
    rgb(0 0 0 / 2%) 0px 8.01379px 21.5371px, rgb(0 0 0 / 2%) 0px 14.2952px 38.4185px, 
    rgb(0 0 0 / 3%) 0px 26.7377px 71.8575px, rgb(0 0 0 / 4%) 0px 64px 172px;
    padding: 10px;
    flex-direction: row;
    border-width: 1px;
    border-style: solid;
  }
  .item1 .item1b .inputaddress img{
        flex-shrink: 0;
    align-self: center;
    margin-left: 12px;
    width: 30px;
  height: 30px;
  }
  .item1 .item1b .inputaddress .item1b2{
    /* display: inline-flex; */
    width: 100%;
    flex-direction: column;
  }
  .item1b .space{
        border: 0px;
    clip: rect(0px, 0px, 0px, 0px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0px;
    position: absolute;
    width: 1px;
    white-space: nowrap;
    overflow-wrap: normal;
  }
  .item1b input{
    flex: 1 1 0%;
    border: none;
    padding-left: 12px;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    min-height: 48px;
    line-height: normal;
    box-shadow: none !important;
    outline: none;
    font-size: 18px;
  }
  .item1b .item1b3,
   .item1b .item1b3-sm{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-shrink: 0;
  }
  .item1b .item1b3 button,
  .item1b .item1b3-sm button{
    background-color: #FFB600;
    color: #fff;
    height: 48px;
    border: 2px solid transparent;
    border-radius: 6px;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 16px;
    /* font-weight: bold; */
    padding: 9px 16px;
  }
  .spanerr{
    font-size: 16px;
    width: 75%;
    background-color: rgb(255, 219, 220);
    padding: 8px;
    color: #043a30;
    margin-top: 6px;
    border-radius: 4px;
  }
  .listcity{
    list-style-type: none;
    background: #fff;
    border-radius: 6px;
    padding: 6px 16px;
    margin-top: 8px;
    width: 100%;
    max-height: 200px;
    overflow: auto;
  }
  .listcity li:hover{
    background: #a19f9f12;
  }
   .listcity li{
     padding: 2px 4px;
     cursor: pointer;
   }
  .listcity li img{
    width: 20px;
    height: 20px;
  }
  .item1b .item1b3-sm{
    display: none;
  }
  .itemnew11{
    font-size: 48px;
    color: aliceblue;
  }
  .itemnew11 span{
    text-decoration: underline;
  }
  .textra{
    width: 160px !important;
    text-align: end;
  }
 @media only screen and (max-width: 600px){
  .home .item1{
    width: 100%;
  }
  .home .item1 .item1b p{
    font-size: 20px;
  }
  .home .item1 .item1b p:first-child{
    font-size: 20px;
  }
   .item1 .item1b .inputaddress{
    padding: 0px 10px;
  }
  .item1 .item1b .inputaddress img{
    margin-left: 4px;
    width: 20px;
    height: 20px;
  }
 
  .item1b .item1b3 button ,
    .item1b .item1b3-sm button
  {
    border: 1px solid transparent;
    border-radius: 6px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    padding: 9px 10px;
  } 
  .home .item1a button{
    font-size:14px;
  }
  .item1b input{
    font-size: 12px;
  }
    .spanerr{
    font-size: 10px;
    width: 90%;
  }
  .item1b .item1b3{
    display: none;
  }
  .item1b .item1b3-sm{
        display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-shrink: 0;
        width: 100%;
    margin-top: 8px 
  }
   .itemnew11{
    font-size: 20px;

  }
} 
</style>
