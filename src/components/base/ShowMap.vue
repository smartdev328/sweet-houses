<template>
  <div class="showmap" @click.self="ckself">
    <div style="display: block; width: auto">
      <GmapMap
        ref="map"
        @click="checkClick"
        @zoom_changed="changezoom($event)"
        :center="mapCenter"
        :zoom="zoom"
        @center_changed="updateCenter"
        @idle="sync"
        @bounds_changed="changebounds($event)"
        @dragend="dropmap()"
        map-type-id="terrain"
        :options="options"
        class="mt-n5"
        :class="[fullscreenh ? 'full-map' : 'h-map']"
      >
        <gmap-polygon
          v-bind:paths.sync="objpaths"
          v-if="objpaths.length"
          v-bind:options="{ strokeColor: '#0096FF', fillColor: '#0096FF' }"
        >
        </gmap-polygon>
        <gmap-info-window
          :options="infoWindowOptions"
          :position="infoWindowPosition"
          :opened="infoWindowOpened"
          @closeclick="handleInfoWindowClose"
        >
          <div class="info-window">
            <div v-if="activehomelad" class="text-center">
              <b-spinner
                variant="success"
                style="width: 3rem; height: 3rem"
                label="Spinning"
              ></b-spinner>
            </div>
            <div v-if="Object.keys(activehome).length">
              <homemap-sale
                :homedata="activehome"
                :type="type"
                :boardId="boardId"
              ></homemap-sale>
            </div>
          </div>
        </gmap-info-window>
        <GmapCluster
          :styles="clusterStyles"
          :zoom-on-click="true"
          @click="openfullscreenh()"
        >
          <GmapMarker
            v-for="m in listings"
            :key="m.id"
            :position="getpos(m.map)"
            :clickable="true"
            :animation="0"
            @click="handleMarkerClicked(m)"
            :draggable="false"
            :icon="icon"
            :label="{
              text: numFormatter(m.listPrice),
              color: 'white',
              size: '28',
            }"
          >
          </GmapMarker>
        </GmapCluster>
      </GmapMap>
    </div>
    <div
      class="groupbtn"
      :style="{ top: posY + 30 + 'px' }"
      v-if="!showcontent && !smscreen">
      <div class="container">
        <div class="mx-1 col-12">
          <button class="Roboto-Regular col-11 col-md-3 " :class="{'mx-auto' :smscreen}" @click="showcontent = true">
            Get an Estimate
          </button>
        </div>
      </div>
    </div>
    <div
        class="groupbtn"
        :style="{ top: posY + 90 + 'px' }"
        v-if="!showcontent && smscreen">
      <div class="container">
        <div class="mx-1 col-12">
          <button class="Roboto-Regular col-11 col-md-3 " :class="{'mx-auto' :smscreen}" @click="showcontent = true">
            Get an Estimate
          </button>
        </div>
      </div>
    </div>
    <div
      class="groupcontent pt-5"
      :style="{ top: footerh + 'px' }"
      v-if="showcontent"
      @click.self="hidecontent()"
      :class="{ groupcontentfull: fullscreenh }"
    >
      <div class="container">
        <div class="mx-4 item1text mt-5 w-100 w-md-75">
          <p class="DMSerifRegular pt-5 pt-md-1">
            Market Value, Hassle Free
          </p>
          <div class="item1b py-1">
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
                <!-- <input type="text" class="Poppins" v-model="location"
                         placeholder="Enter your home address"> -->
                <vue-google-autocomplete
                  autocomplete="off"
                  id="map"
                  ref="addressmapcontent"
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
            <!--        <span class="spanalgorithm mt-2 text-white Poppins">-->
            <!--              Algorithm values are not intended to replace a professional opinion. Our purchase price is set by certified Appraisers and Home Inspectors.-->
            <!--            </span>-->
            <span class="spanerr" v-if="errmsg">{{ errmsg }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="itemnew11 d-flex justify-content-center DMSerifRegular" v-if="!fullscreenh">
          <textra
            :data="words"
            :timer="2"
            :infinite="true"
            filter="top-bottom"
          />
          <span class="ml-2">
            <span>Your Home</span>
            
          </span>
        </div> -->
    <div class="togglemap" v-if="fullscreenh">
      <button class="Roboto-Regular btn bg-white" @click="submit">
        Show List
      </button>
    </div>
    <div class="my-5">
      <div class="container">
        <SweetSale></SweetSale>
      </div>
    </div>
  </div>
</template>
<script>
import { gmapApi } from "vue2-google-maps";
import GmapCluster from "vue2-google-maps/dist/components/cluster";
import { mapState } from "vuex";
import SweetSale from "./MainInterface/SweetSale.vue";
export default {
  props: ["type"],
  computed: {
    ...mapState(["city"]),
    smscreen(){
      return window.innerWidth < 620
    },
    checkhasstreet() {
      return Object.prototype.hasOwnProperty.call(
        this.addressData,
        "street_number"
      );
    },
    google: gmapApi,
     username() {
      return this.$store.state.user.first_name || "";
    },
    isLoggedIn() {
      if (this.username) {
        return true;
      } else {
        return false;
      }
    },
    icon() {
      if (this.type == "sold") {
        return require("../../assets/image/icon/Recsold.svg");
      } else {
        return require("../../assets/image/icon/Recsale.svg");
      }
    },
    clusterStyles() {
      if (this.type == "sold") {
        return [
          {
            url: require("../../assets/image/icon/circlustersold.svg"),
            textColor: "#fff",
            height: 50,
            width: 50,
            textSize: 20,
          },
        ];
      } else {
        return [
          {
            url: require("../../assets/image/icon/circluster.svg"),
            textColor: "#fff",
            height: 50,
            width: 50,
            textSize: 20,
          },
        ];
      }
    },
    filteropt() {
      return this.$store.state.filteroptdata || {};
    },
    minBeds() {
      return this.filteropt.minBeds;
    },
    minBaths() {
      return this.filteropt.minBaths;
    },
    minParkingSpaces() {
      return this.filteropt.minParkingSpaces;
    },
    minSqft() {
      if (this.filteropt.minSqft == null || this.filteropt.minSqft == 1) {
        return "";
      } else {
        return this.filteropt.minSqft;
      }
    },
    maxSqft() {
      if (this.filteropt.maxSqft == null || this.filteropt.maxSqft == 4500) {
        return "";
      } else {
        return this.filteropt.maxSqft;
      }
    },
    minPrice() {
      if (this.filteropt.minPrice) {
        return this.filteropt.minPrice.replace(/,/g, "");
      } else {
        return "";
      }
    },
    maxPrice() {
      if (this.filteropt.maxPrice) {
        return this.filteropt.maxPrice.replace(/,/g, "");
      } else {
        return "";
      }
    },
    propertyType() {
      return this.filteropt.propertyType;
    },
    style() {
      return this.filteropt.style;
    },
    objpaths() {
      return this.path.map(this.getFullPath);
    },
    location() {
      return this.placeResultData.formatted_address;
    },
    boundsvalue() {
      return new window.google.maps.LatLngBounds();
    },

    footerh() {
      return this.$store.state.footerh;
    },
    posY() {
      return this.$store.state.posY;
    },
    gmaph() {
      return this.$refs.map.offsetHeight;
    },
  },
  components: { GmapCluster, SweetSale },
  data: () => ({
    showcontent: true,
    words: ["Buy", "Trade", "List", "Finance"],
    fullscreenh: false,
    showbox: true,
    visInfoWindow: false,
    centerLatitude: 0,
    centerLongitude: 0,
    latitude: 0,
    longitude: 0,
    marker: {},
    map: {},
    coordinates: null,
    //   currentLocation : { lat : 53.177338695404515, lng : -114.0218292213596},
    currentLocation: {
      lat: localStorage.getItem("currentLocationlat") * 1 || 0,
      lng: localStorage.getItem("currentLocationlng") * 1 || 0,
    },
    mapCenter: {},
    zoom: 10,
    bounds: {},
    options: {
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: true,
      rotateControl: true,
      fullscreenControl: true,
      disableDefaultUi: false,
      scrollwheel: true,
      minZoom: 8,
      maxZoom: 23,
    },
    listings: [],
    sw_long: localStorage.getItem("sw_long") * 1 || 0,
    sw_lat: localStorage.getItem("sw_lat") * 1 || 0,
    ne_long: localStorage.getItem("ne_long") * 1 || 0,
    ne_lat: localStorage.getItem("ne_lat") * 1 || 0,
    path: [],
    total: 0,
    latlong: { lat: 0, lng: 0 },
    infoWindowOpened: false,
    infoWindowOptions: {
      pixelOffset: {
        width: 0,
        he9ight: -35,
      },
    },

    activehome: {},
    infoWindowPosition: { lat: 0, lng: 0 },
    activehomelad: null,
    errmsg: "",
    placeResultData: {},
  }),
  methods: {
    ckself(){
      this.showcontent = false;
      this.fullscreenh = false;
    },
    hidecontent() {
      this.showcontent = false;
    },
    openfullscreenh() {
      this.fullscreenh = true;
      this.showbox = false;
    },
    checkClick() {
      this.showcontent = false;
      if (this.infoWindowOpened) {
        (this.infoWindowOpened = false), (this.activehome = {});
      }
    },
    getpos(item) {
      return {
        lat: item.latitude * 1,
        lng: item.longitude * 1,
      };
    },
    numFormatter(num) {
      if (this.type == "sold" && !this.isLoggedIn) {
        return "Sold";
      }
      if(this.type == "sold" && this.isLoggedIn){
         if (Math.abs(num) > 999 && Math.abs(num) < 1000000) {
          return Math.sign(num) * (Math.abs(num) / 1000).toFixed(2) + "k";
        }
        if (Math.abs(num) > 1000000) {
          return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(2) + "M";
        }
        else if (num < 900) {
        return num; // if value < 1000, nothing to do
      }
      }
      if (this.type !== "sold") {
        if (Math.abs(num) > 999 && Math.abs(num) < 1000000) {
          return Math.sign(num) * (Math.abs(num) / 1000).toFixed(2) + "k";
        }
        if (Math.abs(num) > 1000000) {
          return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(2) + "M";
        }
        else if (num < 900) {
        return num; // if value < 1000, nothing to do
      }
      } 
    },
    hideboxselling() {
      this.showbox = false;
    },
    showboxselling() {
      this.showbox = true;
    },
    hideContent() {
      this.showcontent = false;
    },
    handleInfoWindowClose() {
      this.activehome = {};
      this.infoWindowOpened = false;
    },
    handleMarkerClicked(m) {
      this.openfullscreenh();
      this.activehome = {};
      this.infoWindowPosition.lat = m.map.latitude * 1;
      this.infoWindowPosition.lng = m.map.longitude * 1;
      this.mapCenter.lat = m.map.latitude * 1;
      this.mapCenter.lng = m.map.longitude * 1;
      this.infoWindowOpened = true;
      this.activehomelad = true;
      this.boardId = m.boardId;
      let mlsNumber = m.mlsNumber;
      this.$http
        .get(
          `listings/alldetails_bymls/?mlsNumber=${mlsNumber}&boardId=${this.boardId}`
        )
        .then((res) => {
          this.activehome = res.data;
          this.activehomelad = false;
        })
        .catch(() => {
          this.activehomelad = false;
        });
    },
    submit() {
      this.$emit("submit");
    },
    aboutusroute() {
      this.$router.push({ name: "Aboutus" });
    },
    changezoom($event) {
      this.zoom = $event;
      this.$store.commit("CITYEMPLTY");
      this.findlistingsevent();
    },
    find_listings_forSaleMain() {
      this.paginationpage = 1;
      this.filerdata = {
        name: "Date listed (new to old)",
        value: "createdOnDesc",
      };
      this.find_listings_forSale();
    },
    find_listings_SoldMain() {
      this.paginationpage = 1;
      this.filerdata = {
        name: "Date Sold (new to old)",
        value: "soldDateDesc",
      };
      this.find_listings_Sold();
    },
    find_listings_forSale() {
      let city = this.city;
      let sw_long = this.sw_long;
      let sw_lat = this.sw_lat;
      let ne_long = this.ne_long;
      let ne_lat = this.ne_lat;
      // let sortBy = this.filerdata.value;
      // let pageNum = this.paginationpage;
      // this.loading = true ;
      let minBeds = this.minBeds;
      let minParkingSpaces = this.minParkingSpaces;
      let minSqft = this.minSqft;
      let maxSqft = this.maxSqft;
      let minPrice = this.minPrice;
      let maxPrice = this.maxPrice;
      let propertyType = this.propertyType;
      let style = this.style;
      let minBaths = this.minBaths;

      // this.loadedlistingsold = false
      this.$http
        .get(
          `map/get_homes/?type=forsale&sw_long=${sw_long}&sw_lat=${sw_lat}&ne_long=${ne_long}&ne_lat=${ne_lat}&minBeds=${minBeds}&minBaths=${minBaths}&minParkingSpaces=${minParkingSpaces}&minSqft=${minSqft}&maxSqft=${maxSqft}&minPrice=${minPrice}&maxPrice=${maxPrice}&propertyType=${propertyType}&style=${style}&city=${city}`
        )
        .then((res) => {
          this.loading = false;
          // this.listingsold = res.data
          this.listings = res.data.listings;
          this.tatal = res.data.count;
          this.loading = false;
          this.loadedlistingsold = true;
        });
    },
    find_listings_Sold() {
      let city = this.city;
      let sw_long = this.sw_long;
      let sw_lat = this.sw_lat;
      let ne_long = this.ne_long;
      let ne_lat = this.ne_lat;
      let minBeds = this.minBeds;
      let minParkingSpaces = this.minParkingSpaces;
      let minSqft = this.minSqft;
      let maxSqft = this.maxSqft;
      let minPrice = this.minPrice;
      let maxPrice = this.maxPrice;
      let propertyType = this.propertyType;
      let style = this.style;
      let minBaths = this.minBaths;
      // this.loadedlistingsold = false
      this.$http
        .get(
          `map/get_homes/?type=sold&sw_long=${sw_long}&sw_lat=${sw_lat}&ne_long=${ne_long}&ne_lat=${ne_lat}&minBeds=${minBeds}&minBaths=${minBaths}&minParkingSpaces=${minParkingSpaces}&minSqft=${minSqft}&maxSqft=${maxSqft}&minPrice=${minPrice}&maxPrice=${maxPrice}&propertyType=${propertyType}&style=${style}&city=${city}`
        )
        .then((res) => {
          this.loading = false;
          // this.listingsold = res.data
          this.listings = res.data.listings;
          this.tatal = res.data.count;
          this.loading = false;
          this.loadedlistingsold = true;
        });
    },
    changebounds: function ($event) {
      this.bounds = $event;
    },
    dropmap() {
      this.$store.commit("CITYEMPLTY");
      this.findlistingsevent();
    },
    findlistingsevent() {
      if (this.type == "forsale") {
        this.find_listings_forSale();
      } else {
        this.find_listings_Sold();
      }
    },
    getCoords() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          (this.longitude = position.coords.longitude),
            (this.latitude = position.coords.latitude),
            (this.currentLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          localStorage.setItem("currentLocationlat", this.currentLocation.lat);
          localStorage.setItem("currentLocationlng", this.currentLocation.lng);
          this.sync();
        },
        () => {
          // this.zoom=8;
          // this.currentLocation = {
          //               lat: 53.702018651928924,
          //               lng: -113.09359784375
          //       };
          //this.notify('error', 'قم بتفعيل تحديد موقعك لتتمكن من الطلب', 'error');
        }
      );
    },
    updateaddressdata(data) {
      if (data) {
        this.currentLocation = {
          lat: data.latitude,
          lng: data.longitude,
        };
        localStorage.setItem("currentLocationlat", this.currentLocation.lat);
        localStorage.setItem("currentLocationlng", this.currentLocation.lng);
        this.sync();
      }
      this.findlistingsevent();
    },
    getpath(city) {
      this.$http
        .get(
          `https://nominatim.openstreetmap.org/search.php?q=${city}&polygon_geojson=1&format=json`
        )
        .then((res) => {
          this.path = res.data[0].geojson.coordinates[0];
          //  console.log(res.data[0].geojson.coordinates)
        });
    },
    getFullPath(item) {
      let res = { lat: 0, lng: 0 };
      res.lat = item[1];
      res.lng = item[0];
      return res;
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
    updateCenter(latLng) {
      this.currentLocation = {
        lat: latLng.lat(),
        lng: latLng.lng(),
      };
      localStorage.setItem("currentLocationlat", this.currentLocation.lat);
      localStorage.setItem("currentLocationlng", this.currentLocation.lng);
    },
    sync() {
      this.mapCenter = this.currentLocation;
    },
  },
  created() {
    this.currentLocation.lat == 0 ? this.getCoords() : "";
    // this.getCoords();
    this.changebounds();
    this.find_listings_forSale();
  },
  watch: {
    latitude() {
      this.lat = this.latitude;
      this.lng = this.longitude;
    },
    centerLongitude() {
      this.lat = this.centerLatitude;
      this.lng = this.longitude;
    },
    bounds: function (newval, oldval) {
      if (oldval) {
        (this.sw_long = oldval.getSouthWest().lng()),
          (this.sw_lat = oldval.getSouthWest().lat()),
          (this.ne_long = oldval.getNorthEast().lng()),
          (this.ne_lat = oldval.getNorthEast().lat());
        localStorage.setItem("sw_long", this.sw_long);
        localStorage.setItem("sw_lat", this.sw_lat);
        localStorage.setItem("ne_long", this.ne_long);
        localStorage.setItem("ne_lat", this.ne_lat);
      }
      //  console.log(newval, oldval)
    },
  },
};
</script>
<style scoped>
.groupcontent .item1text p:first-child {
  color: #fff;
  font-size: 60px;
  margin-bottom: 0;
}
.groupcontent .item1text p:nth-child(2) {
  color: #fff;
  font-size: 28px;
}
.item1b {
  width: 75%;
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
.item1b p:first-child {
  font-size: 22px !important;
}
.item1b .inputaddress {
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
  z-index: 0;
}
.item1b .inputaddress img {
  flex-shrink: 0;
  align-self: center;
  margin-left: 12px;
  width: 30px;
  height: 30px;
}
.item1b .inputaddress .item1b2 {
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
.showmap .togglemap {
  display: inline-block;
  height: 40px;
  position: fixed;
  left: calc(50% - 43px);
  bottom: 20px;
  top: auto;
  z-index: 1;
}
.item1b .item1b3-sm {
  display: none;
}
.showmap .togglemap button {
  box-shadow: rgb(0 0 0 / 1%) 0px 1.77104px 4.75968px,
    rgb(0 0 0 / 2%) 0px 4.25607px 11.4382px,
    rgb(0 0 0 / 2%) 0px 8.01379px 21.5371px,
    rgb(0 0 0 / 2%) 0px 14.2952px 38.4185px,
    rgb(0 0 0 / 3%) 0px 26.7377px 71.8575px, rgb(0 0 0 / 4%) 0px 64px 172px;
  border: 2px solid transparent;
  background: #232323;
  color: inherit;
  white-space: nowrap;
  padding: 4px 16px;
  border-radius: 50px;
  font-size: 1rem;
}
.itemnew11 {
  position: absolute;
  right: 170px;
  height: 200px;
  top: 280px;
  z-index: 0;
  /* width: 30%; */
}
.itemnew11 .textra,
.itemnew11 span {
  font-size: 90px;
  color: #ffb600;
}
.textra {
  /* width: 160px !important;
  text-align: end; */
}
.groupcontent {
  position: absolute;
  width: 100%;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  bottom: 0;
  height: calc(68vh + 6px);
}
.groupcontentfull {
  height: 90vh;
}
.group {
  position: absolute;
  left: 50px;
  height: 200px;
  z-index: 0;
  width: 30%;
  padding: 12px;
}
.groupbtn {
  position: absolute;
  width: 100%;
  left: 0;
}
.groupbtn button {
  background-color: rgb(10, 133, 110);
  color: #fff;
  border: 2px solid transparent;
  border-radius: 6px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  padding: 9px 24px;
}
.info-window {
  width: 27em;
  /* max-height: 360px;
  overflow-y: auto; */
}
.spanerr {
  font-size: 16px;
  width: 94%;
  background-color: rgb(255, 219, 220);
  padding: 8px;
  color: #043a30;
  margin-top: 6px;
  border-radius: 4px;
}
.h-map {
  width: 100%;
  height: 68vh;
}
.full-map {
  width: 100%;
  height: 90vh;
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
  .group {
    left: 25px;
    top: 250px;
    width: 55%;
    padding: 0px;
  }

  .spanerr {
    font-size: 10px;
    width: 90%;
  }
  .item1b p {
    font-size: 20px;
  }
  .item1b p:first-child {
    font-size: 20px;
  }
  .item1b .inputaddress {
    padding: 0px 10px;
  }
  .item1b .inputaddress img {
    margin-left: 4px;
    width: 20px;
    height: 20px;
  }
  .groupcontent .item1text p:first-child {
    font-size: 34px;
  }
  .groupcontent .item1text p:nth-child(2) {
    font-size: 18px;
  }
  .item1b {
    width: 85%;
  }
}
</style>
