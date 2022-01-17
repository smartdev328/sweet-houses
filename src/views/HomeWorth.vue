<template>
    <div class="homeworth">
        <div class="item1">
            <div class="item1a py-5">
                <div class="mt-5 item1b">
                    <p class="text-center p1 text-white DMSerifRegular">What's My Home Worth?</p>
                    <p class="text-center p2 my-4 text-white Roboto-Regular">Start your search for your next home with our comprehensive, personalized home valuation.</p>
                    <div class="w-100 inputaddress">
                      <!-- <img src="../assets/image/icon/Iconly-Light-Location.svg" alt=""> -->
                      <div class="item1b2">
                        <span class="space"></span>
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
                        <button class="Roboto-Regular" type="button" @click="getresult()">Get Started</button>
                      </div>
                      
                  </div>
                   <span class="spanerr" v-if="errmsg">{{ errmsg }}</span>
                  <div >
                    
                </div>
            </div>
            </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            input:{
        homeaddress:null
      },
      errmsg:''
        }
    },
    methods:{
    inputChange(){
      this.errmsg=""
    },
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
    }
}
</script>
<style scoped>
        .homeworth .item1 .item1a{
        width: 50%;
        margin: auto;
    }
    .homeworth .item1 .item1a .item1b{
         width: 100%; 
        margin: auto;
    }
    .homeworth .item1 .item1a .p1{
        font-size: 60px;
        font-weight: 600;
    }
    .homeworth .item1 .item1a .p2{
        font-size: 32px;
        width: 80%;
        margin: auto;
    }
    .homeworth .item1 .item1a .inputaddress{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    border-radius: 6px;
    text-align: left;
    background: #00A19B;
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
    font-size: 18px;
}
.homeworth .item1 .item1a .inputaddress img{
        flex-shrink: 0;
    align-self: center;
    margin-left: 12px;
    width: 30px;
height: 30px;
}
.homeworth .item1 .item1a .inputaddress .item1b2{
    display: inline-flex;
    width: 84%;
    flex-direction: column;
}
.homeworth .item1 .item1a .space{
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
.homeworth .item1 .item1a input{
    flex: 1 1 0%;
    border: none;
    padding-left: 12px;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    min-height: 48px;
    line-height: normal;
    box-shadow: none !important;
    border: 0 !important;
    outline: none;
}
.homeworth .item1 .item1a .item1b3{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-shrink: 0;
}
.homeworth .item1 .item1a button{
    background-color: rgb(255, 192, 67);
    color: #232323;
    height: 54px;
    border: 2px solid transparent;
    border-radius: 6px;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    padding: 9px 16px;
}
input:focus{
     outline: none;
}
  .spanerr{
    font-size: 18px;
    width: 75%;
    color: #fff;
    margin-top: 6px;
    border-radius: 4px;
  }
@media only screen and (max-width: 600px){
    .homeworth .item1 .item1a{
        width: 100%;
        margin: auto;
    }
    .homeworth .item1 .item1a .item1b{
        width: 90%;
        margin: auto;
    }
    .homeworth .item1 .item1a .inputaddress{
        font-size: 12px;
    }
    .homeworth .item1 .item1a .inputaddress img{
        width: 20px;
        height: 20px;
        margin-left: 4px;
    }
    .homeworth .item1 .item1a button{
        padding: 4px 8px;
        border: 0;
        font-size: 12px;
    }
    .homeworth .item1 .item1a input{
        padding-left: 6px;
    }
    .homeworth .item1 .item1a .p1{
        font-size: 30px;
    }
    .homeworth .item1 .item1a .p2{
        font-size: 20px;
    }
     .spanerr{
    font-size: 10px;
    width: 90%;
  }
}
</style>