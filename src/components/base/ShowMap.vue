<template>
  <div class="showmap">
    <div style="display: block; width:auto;">
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
        style="width: 100%; height: 90vh"
        class="mt-n5"
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
                style="width: 3rem; height: 3rem;"
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
        <GmapCluster :styles="clusterStyles" :zoom-on-click="true">
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
    <div class="group" v-if="showbox">
      <div class="group1">
        <div class="group1a px-1 px-md-4 py-4">
          <p class="DMSerifRegular text-white mb-1">Sell Without Showings</p>
          <div style="height:4px;width:34px;background:#FFB600"></div>
          <p class="Roboto-Regular text-white text-center">
            Get a Sweetly Estimate on the value of your home
          </p>
        </div>
        <div class="px-2 px-md-3">
          <div class="w-100 inputaddress mb-3">
            <img
              src="../../assets/image/icon/Iconly-Light-Location.svg"
              alt=""
            />
            <div class="item1b2">
              <span class="space"></span>
              <vue-google-autocomplete
              autocomplete="off"
                id="map_page"
                ref="addressmap"
                classname="form-control"
                placeholder="Enter your home address"
                country="ca"
                v-on:keyup="yourFunctinNameToBeCall"
                v-on:inputChange="inputChange"
                v-on:placechanged="getAddressData"
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
              <button class="" @click="getresult()">Get Estimate</button>
            </div>
          </div>
           <div class="spanerr mx-auto" v-if="errmsg">{{ errmsg }}</div>
        </div>

        <div class="row mt-3 ">
          <div class="col-5 mx-auto mb-3">
            <div class="">
              <button class="w-100 Roboto-Regular" @click="aboutusroute">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="togglemap">
      <button class="Roboto-Regular btn bg-white" @click="submit">
        Show List
      </button>
    </div>
  </div>
</template>
<script>
import { gmapApi } from "vue2-google-maps";
import GmapCluster from "vue2-google-maps/dist/components/cluster";
import { mapState } from "vuex";

export default {
  props: ["type"],
  computed: {
    ...mapState(["city"]),
    checkhasstreet(){
    return  Object.prototype.hasOwnProperty.call(this.addressData, 'street_number');
    },
    google: gmapApi,
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
    location(){
      return this.placeResultData.formatted_address
    },
    boundsvalue(){
      return  new window.google.maps.LatLngBounds()
    }
  },
  components: { GmapCluster },
  data: () => ({
    showbox:true,
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
      lat : localStorage.getItem('currentLocationlat') *1 || 0,
      lng :  localStorage.getItem('currentLocationlng')*1 || 0,
    },
    mapCenter:{},
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
    },
    listings: [],
    sw_long: localStorage.getItem('sw_long')*1 || 0,
    sw_lat: localStorage.getItem('sw_lat')*1 || 0,
    ne_long: localStorage.getItem('ne_long')*1 || 0,
    ne_lat: localStorage.getItem('ne_lat')*1 || 0,
    path: [],
    total: 0,
    latlong: { lat: 0, lng: 0 },
    infoWindowOpened: false,
    infoWindowOptions: {
      pixelOffset: {
        width: 0,
        height: -35,
      },
    },

    activehome: {},
    infoWindowPosition: { lat: 0, lng: 0 },
    activehomelad: null,
    errmsg: "",
    placeResultData:{},
  }),
  methods: {
    checkClick() {
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
      if (this.type == "sold") {
        return "Sold";
      }
      if (this.type !== "sold") {
        if (num > 999 && num < 1000000) {
          return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
        } else if (num > 1000000) {
          return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
        } else if (num < 900) {
          return num; // if value < 1000, nothing to do
        }
      }
    },
    hideboxselling(){
      this.showbox = false
    },
    showboxselling(){
      this.showbox = true
    },
    handleInfoWindowClose() {
      this.activehome = {};
      this.infoWindowOpened = false;
    },
    handleMarkerClicked(m) {
      this.activehome = {};
      this.infoWindowPosition.lat = m.map.latitude * 1;
      this.infoWindowPosition.lng = m.map.longitude * 1;
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
    changebounds: function($event) {
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
    this.currentLocation.lat == 0 ? this.getCoords() : ''
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
    bounds: function(newval, oldval) {
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
.showmap .togglemap {
  display: inline-block;
  height: 40px;
  position: fixed;
  left: calc(50% - 43px);
  bottom: 20px;
  top: auto;
  z-index: 1;
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
.group {
  position: absolute;
  left: 50px;
  height: 200px;
  top: 200px;
  z-index: 0;
  width: 30%;
  padding: 12px;
}
.group .group1 {
  background: #00a19b;
  border-radius: 8px;
}
.group .group1 .group1a p:first-child {
  font-size: 26px;
}
.group .group1 .group1a p:last-child {
  font-size: 20px;
}
.group .group1 .inputaddress {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  border-radius: 6px;
  text-align: left;
  background: white;
  min-height: 30px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border-color: transparent;
  box-shadow: rgb(0 0 0 / 1%) 0px 1.77104px 4.75968px,
    rgb(0 0 0 / 2%) 0px 4.25607px 11.4382px,
    rgb(0 0 0 / 2%) 0px 8.01379px 21.5371px,
    rgb(0 0 0 / 2%) 0px 14.2952px 38.4185px,
    rgb(0 0 0 / 3%) 0px 26.7377px 71.8575px, rgb(0 0 0 / 4%) 0px 64px 172px;
  padding: 4px;
  flex-direction: row;
  border-width: 1px;
  border-style: solid;
}
.group .group1 .inputaddress img {
  flex-shrink: 0;
  align-self: center;
  margin-left: 8px;
  width: 18px;
  height: 18px;
}
.group .group1 .inputaddress .item1b2 {
  display: inline-flex;
  width: 100%;
  flex-direction: column;
}
.group .group1 .space {
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
.group .group1 input {
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
.group .group1 .item1b3 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-shrink: 0;
}
.group .group1 button {
  background-color: #ffb600;
  color: #fff;
  height: 38px;
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
  padding: 9px 6px;
}
input:focus {
  outline: none;
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
@media only screen and (max-width: 600px) {
  .group {
    left: 25px;
    top: 250px;
    width: 55%;
    padding: 0px;
  }
  .group .group1 .group1a p:first-child {
    font-size: 18px;
  }
  .group .group1 .group1a p:last-child {
    font-size: 18px;
  }
  .group .group1 .inputaddress img {
    width: 14px;
    height: 14px;
  }
  .group .group1 button {
    padding: 6px 2px;
    font-size: 12px;
    border: 0;
  }
  .group .group1 input {
    padding-left: 4px;
  }
   .spanerr {
    font-size: 10px;
    width: 90%;
  }
}
</style>
