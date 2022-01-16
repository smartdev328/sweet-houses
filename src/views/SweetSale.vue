<template ref="home">
  <div class="home">
    <header>
      <div class="p-5">
        <div class="itemnew11 d-flex justify-content-center DMSerifRegular">
          <textra
            :data="words"
            :timer="2"
            :infinite="true"
            filter="top-bottom"
          />
          <span class="ml-2">
            <span>Your Home</span>
            <img class="mt-n5 mb-0" src="../assets/image/Underline_Dash.svg" alt="">
          </span>
        </div>
        <div class="item1  mb-3">
          <div class="item1a">
            <button
              :style="getclass('Sweet_Sale')"
            >
              Sweet Sale
              <div :style="getline('Sweet_Sale')"></div>
            </button>
            <button
              @click="openswiftsale('Swift_Sale')"
            >
              Swift Sale
              <div :style="getline('Swift_Sale')"></div>
            </button>
            <button
              @click="opentraditionalpage('Traditional_Real_Estate')"
              :style="getclass('Traditional_Real_Estate')"
            >
              Traditional Real Estate
              <div :style="getline('Traditional_Real_Estate')"></div>
            </button>
          </div>
          <div class="item1b px-3 py-5 p-md-5">
            <div
              class="text-center text-white DMSerifRegular h-75"
              :class="tab_visible('Sweet_Sale')"
            >
              <p class="DMSerifRegular">
                Get Maximum Value! Skip Public Showings And Choose Your Moving
                Day
              </p>
              <p class="Roboto-Regular ">
                The Sweet Sale is the smartest way to sell.
              </p>
            </div>
            <div
              class="text-center text-white DMSerifRegular  h-75"
              :class="tab_visible('Swift_Sale')"
            >
              <p class="DMSerifRegular">Your offer in minutes, SOLD in days</p>
              <p class="Roboto-Regular">
                Market Value less Our Fee = SOLD! Hassle-free.
              </p>
            </div>
            <div
              class="text-center text-white DMSerifRegular   h-75"
              :class="tab_visible('Equity_Advance')"
            >
              <p class="DMSerifRegular">
                Your Home Equity, Before Your First Showing!
              </p>
              <p class="Roboto-Regular ">Access $25,000, $50,000, $150,000, or more!</p>
            </div>
            <div
              class="text-center text-white DMSerifRegular  h-75"
              :class="tab_visible('Traditional_Real_Estate')"
            >
              <p class="DMSerifRegular">Sweetened Listing, With Muscle!</p>
              <p class="Roboto-Regular">Compare our services.</p>
            </div>
          
            <div class="w-100 inputaddress">
              <img
                src="../assets/image/icon/Iconly-Light-Location.svg"
                alt=""
              />
              <div class="item1b2">
                <span class="space"></span>
                <!-- <input type="text" class="Poppins" v-model="location"
                         placeholder="Enter your home address"> -->
                <vue-google-autocomplete
                  id="map"
                    ref="addressmap"
                  classname="form-control"
                 placeholder="Enter an address"
                  country="ca"
                  v-on:keyup="yourFunctinNameToBeCall"
                  v-on:placechanged="getAddressData"
                   v-on:inputChange="inputChange"
                  :options="{fields: ['geometry', 'formatted_address', 'address_components']}"
                >
                </vue-google-autocomplete>
              </div>

              <div class="item1b3">
                <button class="Poppins" type="button" @click="getresult()">
                  Get value
                </button>
              </div>
            </div>
            <div class="item1b3-sm">
              <button class="Poppins" type="button" @click="getresult()">
               Get value
              </button>
            </div>
        <span class="spanalgorithm mt-2 text-white Poppins">
              Algorithm values are provided as examples. Purchase price is set by independent appraiser & home inspection
            </span>
            <span class="spanerr" v-if="errmsg">{{ errmsg }}</span>
          </div>
        </div>
      </div>
    </header>
    <div class="my-5">
      <div class="container" > 
        <sweetsale-page></sweetsale-page>
      </div>
      <!-- <div class="container" :class="tab_visible('Swift_Sale')" v-if="readyStateComplete">
        <swift-sale></swift-sale>
      </div> -->
      <!-- <div class="container" :class="tab_visible('Equity_Advance')" v-if="readyStateComplete">
        <equity-advance></equity-advance>
      </div> -->
      <!-- <div :class="tab_visible('Traditional_Real_Estate')" v-if="readyStateComplete">
        <traditional-realestate></traditional-realestate>
      </div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      errmsg: "",
      latlong: { lat: 0, lng: 0 },
      userlocation: {},
       words: ["Buy", "Trade","List","Finance"],
      place_choosed:null,
      resultsExample:{},
      addressData:{},
      placeResultData:{},
      readyStateComplete:null,
      selected_menu:"Sweet_Sale"
    };
  },

  computed: {
     checkhasstreet(){
    return  Object.prototype.hasOwnProperty.call(this.addressData, 'street_number');
    },
    location(){
      return this.placeResultData.formatted_address
    },
    pathes(){
      let swlat =  this.placeResultData.geometry.viewport.zb.g;
      let swlng =  this.placeResultData.geometry.viewport.Qa.g;
       let nelat =  this.placeResultData.geometry.viewport.zb.h;
       let nelng =  this.placeResultData.geometry.viewport.Qa.h;
      return ({swlat,swlng, nelat , nelng});
    }
    // selected_menu(){
    //   return this.selected_menu;
    // },
  },
  components: {
    
  },
  watch: {},
  methods: {
    yourFunctinNameToBeCall(){
      this.place_choosed = false;
    },
    getAddressData(addressData, placeResultData) {
      this.addressData= addressData
      this.placeResultData = placeResultData
      this.latlong.lat = addressData.latitude
      this.latlong.lng = addressData.longitude
      this.place_choosed = true;
      console.log(placeResultData)
    },
    getclass(tab) {
      if (tab == this.selected_menu) {
        return "background:#00A19B;";
      }
    },
    getline(tab) {
      if (tab == this.selected_menu) {
        return " background: rgb(255, 182, 0);margin-bottom: 0px;  position: absolute; bottom: 0px;    width: 50%;   height: 5px;";
      }
    },
    tab_visible(tab) {
      if (tab == this.selected_menu) {
        return "d-block";
      } else {
        return "d-none";
      }
    },
    editselectedmenu(tab){
      this.$store.commit('editSelectedMenu',tab)
    },
    openswiftsale(){
      this.$router.push({name:"SwiftSale"})
    },
    checkform() {
      this.errmsg = "";
      if (!this.location) {
        this.errmsg = `Oops! Please enter your home address (including street number), then select from the dropdown.
       If you're having trouble, just contact us.`;
      }
      if (!this.place_choosed) {
        this.errmsg = `Oops! Please select from the dropdown.
       If you're having trouble, just contact us.`;
      }
      if (!this.checkhasstreet) {
          this.errmsg = `Oops! Please enter your home address (including street number), then select from the dropdown.
       If you're having trouble, just contact us.`;
      }
      if (
        this.location &&
        this.place_choosed &&
        this.checkhasstreet
      ) {
        return true;
      }
    },
    getresult() {
      if (this.checkform()) {
        this.$store.commit("sethomeaddress", this.location);
        this.$store.commit("setlatlong", this.latlong);
        this.$router.push({ name: "ConfirmAddress" });
        this.$store.dispatch("ScrollTop");
      }
    },
    inputChange(){
      this.errmsg=""
    },
    opensweetsale(){
      this.$router.push({name:"SweetSale"})
    },
    opentraditionalpage(){
       this.$router.push({name:"TraditionalRealestate"})
    },
  },
  mounted(){
     document.onreadystatechange = () => {
    if (document.readyState == "complete") {
      console.log('Page completed with image and files!')

      // HOW LOAD COMPONENTS HERE?
      this.readyStateComplete = true

    }
  }
  },
  created() {

  },
};
</script>
<style scoped>
.home .item1 {
  margin: 0 auto;
  width: 50%;
}
.home .item1a {
  /*   width: 100vw;
    max-width: 311px; */
  margin: 0px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
.home .item1a button {
  background: #04847f;
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
font-family: 'DM Serif Display', "Playfair Display",serif;
  font-size: 24px;
}
.item1 .item1b {
  background: #00a19b;
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
  height: 420px;
}
.home .item1 .item1b p:first-child {
  font-size: 38px;
}
.home .item1 .item1b p:nth-child(2) {
  font-size: 22px;
}
.item1 .item1b .inputaddress {
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
    rgb(0 0 0 / 2%) 0px 8.01379px 21.5371px,
    rgb(0 0 0 / 2%) 0px 14.2952px 38.4185px,
    rgb(0 0 0 / 3%) 0px 26.7377px 71.8575px, rgb(0 0 0 / 4%) 0px 64px 172px;
  padding: 10px;
  flex-direction: row;
  border-width: 1px;
  border-style: solid;
}
.item1 .item1b .inputaddress img {
  flex-shrink: 0;
  align-self: center;
  margin-left: 12px;
  width: 30px;
  height: 30px;
}
.item1 .item1b .inputaddress .item1b2 {
  /* display: inline-flex; */
  width: 100%;
  flex-direction: column;
}
.item1b .space {
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
.item1b input {
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
.item1b .item1b3-sm {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-shrink: 0;
}
.item1b .item1b3 button,
.item1b .item1b3-sm button {
  background-color: #ffb600;
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
.spanerr {
  font-size: 16px;
  width: 75%;
  background-color: rgb(255, 219, 220);
  padding: 8px;
  color: #043a30;
  margin-top: 6px;
  border-radius: 4px;
}
.listcity {
  list-style-type: none;
  background: #fff;
  border-radius: 6px;
  padding: 6px 16px;
  margin-top: 8px;
  width: 100%;
  max-height: 200px;
  overflow: auto;
}
.listcity li:hover {
  background: #a19f9f12;
}
.listcity li {
  padding: 2px 4px;
  cursor: pointer;
}
.listcity li img {
  width: 20px;
  height: 20px;
}
.item1b .item1b3-sm {
  display: none;
}
.itemnew11 {
  font-size: 48px;
  color: aliceblue;
}
.itemnew11 span {
  text-decoration: underline;
}
.textra {
  width: 160px !important;
  text-align: end;
}
@media only screen and (max-width: 770px){
  .item1b .item1b3 {
    display: none;
  }
    .item1b .item1b3-sm {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-shrink: 0;
    width: 100%;
    margin-top: 8px;
  }
}
@media only screen and (max-width: 600px) {
  .home .item1 {
    width: 100%;
  }
  .home .item1 .item1b p {
    font-size: 20px;
  }
  .home .item1 .item1b p:first-child {
    font-size: 20px;
  }
  .item1 .item1b .inputaddress {
    padding: 0px 10px;
  }
  .item1 .item1b .inputaddress img {
    margin-left: 4px;
    width: 20px;
    height: 20px;
  }

  .item1b .item1b3 button,
  .item1b .item1b3-sm button {
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
  .home .item1a button {
    font-size: 14px;
  }
  .item1b input {
    font-size: 12px;
  }
  .spanerr {
    font-size: 10px;
    width: 90%;
  }
  .item1b .item1b3 {
    display: none;
  }
  .item1b .item1b3-sm {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-shrink: 0;
    width: 100%;
    margin-top: 8px;
  }
  .itemnew11 {
    font-size: 20px;
  }
  .textra {
    width: 60px !important;
  }
}
</style>
