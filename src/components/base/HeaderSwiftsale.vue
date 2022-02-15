<template>
  <div class="home">
    <header
    :class="{fullsize : hideMap}">
      <div class="p-4 p-md-5 container">
        <div class="item1 mb-3 my-2 my-md-5" :class="{'my-5':hideMap , 'py-5':hideMap}">
          <div class="item1a">
            <p class="DMSerifRegular">Market Value, Hassle Free</p>
          </div>
          <div class="item1b py-2 py-md-5">
            <p class="spanalgorithm mt-2 text-white Poppins mr-auto">
              Get an estimate value of any home
            </p>
            <div class="w-100 inputaddress">
              <img
                  src="../../assets/image/icon/Iconly-Light-Location.svg"
                  alt=""
              />
              <div class="item1b2">
                <span class="space"></span>
                <vue-google-autocomplete
                    autocomplete="off"
                    id="map"
                    ref="addressmap"
                    classname="form-control"
                    placeholder="Enter a home location"
                    country="ca"
                    v-on:keyup="yourFunctinNameToBeCall"
                    v-on:placechanged="getAddressData"
                    v-on:inputChange="inputChange"
                    :options="{
                    fields: [
                      'geometry',
                      'formatted_address',
                      'address_components',
                    ],
                  }"
                >
                </vue-google-autocomplete>
              </div>

              <div class="item1b3">
                <button class="Poppins" type="button" @click="getresult()">
                  Start
                </button>
              </div>
            </div>
            <div class="item1b3-sm">
              <button class="Poppins" type="button" @click="getresult()">
                Start
              </button>
            </div>
            <span class="spanerr" v-if="errmsg">{{ errmsg }}</span>
          </div>
          <div class="mt-5">
            <div
                v-if="showonly"
                class="togglesearch"
            >
              <button
                  @click="openforsale"
                  class="DFJqO"
              >
                For sale
              </button>
              <button
                  @click="opensold"
                  class="eGqDDI"
              >
                Sold last 90days
              </button>
            </div>
          </div>
        </div>

      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderSwiftsale",
  data(){
    return{
      errmsg: "",
      latlong: { lat: 0, lng: 0 },
      userlocation: {},
      words: ["Buy", "Trade", "List", "Finance"],
      place_choosed: null,
      resultsExample: {},
      addressData: {},
      placeResultData: {},

    }
  },
  computed:{
    showonly(){
      return  this.$route.name == "MapHome" && this.smscreen
    },
    hideMap(){
      return  this.urlPath && this.smscreen
    },
    urlPath(){
      return  this.$route.name !== "BrowswHome"
    },
    smscreen(){
      return window.innerWidth < 620
    },
    checkhasstreet() {
      return Object.prototype.hasOwnProperty.call(
          this.addressData,
          "street_number"
      );
    },
    location() {
      return this.placeResultData.formatted_address;
    },
    pathes() {
      let swlat = this.placeResultData.geometry.viewport.zb.g;
      let swlng = this.placeResultData.geometry.viewport.Qa.g;
      let nelat = this.placeResultData.geometry.viewport.zb.h;
      let nelng = this.placeResultData.geometry.viewport.Qa.h;
      return { swlat, swlng, nelat, nelng };
    },
  },
  methods:{
    openforsale(){
      this.$emit("openforsalemap")
    },
    opensold(){
      this.$emit("opensoldmap")
    },
    yourFunctinNameToBeCall() {
      this.place_choosed = false;
    },
    getAddressData(addressData, placeResultData) {
      this.addressData = addressData;
      this.placeResultData = placeResultData;
      this.latlong.lat = addressData.latitude;
      this.latlong.lng = addressData.longitude;
      this.place_choosed = true;
      console.log(placeResultData);
    },
    getresult() {
      if (this.checkform()) {
        this.$store.commit("sethomeaddress", this.location);
        this.$store.commit("setlatlong", this.latlong);
        this.$router.push({ name: "ConfirmAddress" });
        this.$store.dispatch("ScrollTop");
      }
    },
    inputChange() {
      this.errmsg = "";
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
      if (this.location && this.place_choosed && this.checkhasstreet) {
        return true;
      }
    },
  }
}
</script>

<style scoped>
.fullsize{
  height: 90vh;
}
.togglesearch {
  /* max-width: 260px; */
  width: 95%;
  border-radius: 6px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  height: 42px;
  margin-right: 8px;
  margin-bottom: 8px;
  background: #fff;
  opacity: 1;
  border-radius: 6px;
  padding: 6px;
  transition: opacity 0.25s ease 0s;
}
.togglesearch .eGqDDI {
  display: block;
  height: 32px;
  border: none;
  width: 50%;
  text-align: center;
  padding: 0px;
  margin: 4px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease 0s;
  color: #efc9cb;
  background: rgb(201, 80, 85);
}
.togglesearch .DFJqO {
  display: block;
  height: 32px;
  border: none;
  width: 50%;
  text-align: center;
  padding: 0px;
  margin: 4px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  background: transparent;
  transition: background-color 0.3s ease 0s;
  color: rgb(4, 58, 48);
}
.home .item1 {
  margin: 0 auto;
}
.home .item1a p {
  font-size: 5.2em;
  color: #fff;
}

.item1 .item1b {
  width: 50%;
  height: auto;
  margin: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  /*height: 420px;*/
}
.home .item1 .item1b p:first-child {
  font-size: 24px;
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
  padding: 3px 10px;
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
  padding: 9px 24px;
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

.mt-n-4 {
  margin-top: -3.5rem;
}
@media only screen and (max-width: 770px) {
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
  .home .item1a p {
    font-size: 36px;
  }
  .item1 .item1b {
    width: 95%;
  }
}
</style>
