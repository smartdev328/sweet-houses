<template>
  <div>
    <div
      class="searchpage"
      :class="{ fixedtop: selected_menu === 'show-list' }"
    >
      <div class="container">
        <div
          class="element1  d-flex align-items-center"
          :class="{ bgwhite: selected_menu === 'show-list' }"
        >
          <div
            class="togglesearch col-12 col-md-3 mxr-2"
            :class="{ bgdark: selected_menu === 'show-list' }"
          >
            <button
              @click="openforsale"
              class="DFJqO"
              :class="{ forsale: this.typesale === 'forsale' }"
            >
              For sale
            </button>
            <button
              @click="opensold"
              class="eGqDDI"
              :class="{ sold: this.typesale == 'sold' }"
            >
              Sold last 90days
            </button>
          </div>
          <div class="searchform col-12 col-md-9 mx-0">
            <div class="item1">
              <div
                class="item1a rounded"
                :class="{ bgdark: selected_menu === 'show-list' }"
              >
                <button>
                  <img
                    src="../assets/image/icon/Iconly-Light-outline-Search.svg"
                    alt=""
                  />
                </button>
                <vue-google-autocomplete
                  id="mapautoinput"
                  ref="addressmap"
                  autocomplete="off"
                  classname="form-control"
                  placeholder="Enter City"
                  country="ca"
                  v-on:placechanged="getAddressData"
                  v-on:keyup="clearcity"
                  types="(cities)"
                  :options="{
                    fields: [
                      'geometry',
                      'formatted_address',
                      'address_components',
                    ],
                  }"
                  :enable-geolocation="true"
                >
                </vue-google-autocomplete>

                <button @click="showfilter = !showfilter" class="px-2">
                  <img src="../assets/image/icon/iconfilter.svg" alt="" />
                  <span class="Roboto-Regular ml-2">Filters</span>
                </button>
              </div>

              <div>
                <div class="item1b"></div>
              </div>
            </div>
          </div>
        </div>
        <transition name="list">
          <div class="modelfilter shadow-sm" v-show="showfilter">
            <div class="px-4 pt-0 pb-4">
              <div class="element1 px-0">
                <div class="w-50">
                  <label for="propertytype" class="text-color-1 Roboto-Medium"
                    >Property Type</label
                  >
                  <div class="element1a">
                    <b-form-checkbox-group
                      style="display:grid"
                      v-model="propertyType"
                      :options="optionsdata"
                      name="flavour-1"
                    ></b-form-checkbox-group>
                  </div>
                </div>
                <div class="w-50">
                  <label for="optionstyle" class="text-white Roboto-Medium"
                    >4</label
                  >
                  <div class="element1a">
                    <b-form-checkbox-group
                      style="display:grid"
                      v-model="style"
                      :options="styleoptions"
                      name="flavour-2"
                    ></b-form-checkbox-group>
                  </div>
                </div>
              </div>

              <div class="element2">
                <label for="" class="text-color-1 Roboto-Medium"
                  >Price Range</label
                >
                <div class="element2a">
                  <div class="w-100 position-relative">
                    <v-select
                      class="form-control form-control-lg Roboto-Regular"
                      v-model="minPrice"
                      :options="itemsnumberlist"
                      label="name"
                      placeholder="No Min"
                      :searchable="false"
                      :clearable="false"
                    ></v-select>
                  </div>
                  <div></div>

                  <div class="w-100 position-relative">
                    <v-select
                      class="form-control form-control-lg Roboto-Regular"
                      v-model="maxPrice"
                      :options="itemsnumberlist"
                      label="name"
                      placeholder="No Max"
                      :searchable="false"
                      :clearable="false"
                    ></v-select>
                  </div>
                </div>
              </div>
              <div class="element3 mt-3">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <p>Bedrooms</p>
                    <div class="types">
                      <a
                        class="btn Roboto-Regular"
                        @click="minBeds = ''"
                        :class="{ active: minBeds == '' }"
                      >
                        Any
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minBeds = 1"
                        :class="{ active: minBeds == 1 }"
                      >
                        1+
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minBeds = 2"
                        :class="{ active: minBeds == 2 }"
                      >
                        2+
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minBeds = 3"
                        :class="{ active: minBeds == 3 }"
                      >
                        3+
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minBeds = 4"
                        :class="{ active: minBeds == 4 }"
                      >
                        4+
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minBeds = 5"
                        :class="{ active: minBeds == 5 }"
                      >
                        5+
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minBeds = 6"
                        :class="{ active: minBeds == 6 }"
                      >
                        6+
                      </a>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <p>Bathrooms</p>
                    <div class="types">
                      <a
                        class="btn Roboto-Regular"
                        @click="minBaths = ''"
                        :class="{ active: minBaths == '' }"
                      >
                        Any
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minBaths = 1"
                        :class="{ active: minBaths == 1 }"
                      >
                        1+
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minBaths = 2"
                        :class="{ active: minBaths == 2 }"
                      >
                        2+
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minBaths = 3"
                        :class="{ active: minBaths == 3 }"
                      >
                        3+
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minBaths = 4"
                        :class="{ active: minBaths == 4 }"
                      >
                        4+
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minBaths = 5"
                        :class="{ active: minBaths == 5 }"
                      >
                        5+
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minBaths = 6"
                        :class="{ active: minBaths == 6 }"
                      >
                        6+
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="element3">
                <div class="row mt-3">
                  <div class="col-12 col-md-6">
                    <p>Parking</p>
                    <div class="types">
                      <a
                        class="btn Roboto-Regular"
                        @click="minParkingSpaces = ''"
                        :class="{ active: minParkingSpaces == '' }"
                      >
                        Any
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minParkingSpaces = 1"
                        :class="{ active: minParkingSpaces == 1 }"
                      >
                        1+
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minParkingSpaces = 2"
                        :class="{ active: minParkingSpaces == 2 }"
                      >
                        2+
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minParkingSpaces = 3"
                        :class="{ active: minParkingSpaces == 3 }"
                      >
                        3+
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minParkingSpaces = 4"
                        :class="{ active: minParkingSpaces == 4 }"
                      >
                        4+
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minParkingSpaces = 5"
                        :class="{ active: minParkingSpaces == 5 }"
                      >
                        5+
                      </a>
                      <a
                        class="btn Roboto-Regular"
                        @click="minParkingSpaces = 6"
                        :class="{ active: minParkingSpaces == 6 }"
                      >
                        6+
                      </a>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div
                      class="d-flex align-items-baseline justify-content-between"
                    >
                      <p style="float:left">Internal Sqft</p>
                      <p
                        style="float:right"
                        class="text-color-1 Roboto-Regular p2"
                      >
                        <span
                          class="text-color-1 Roboto-Regular"
                          v-if="range[0] == 0 && range[1] == 4500"
                          >Any #</span
                        >
                        <span
                          class="text-color-1 Roboto-Regular"
                          v-if="range[0] == 0 && range[1] < 4500"
                          >Up to {{ range[1] }}</span
                        >
                        <span
                          class="text-color-1 Roboto-Regular"
                          v-if="range[0] > 0 && range[1] < 4500"
                          >{{ range[0] }} - {{ range[1] }}</span
                        >
                        <span
                          class="text-color-1 Roboto-Regular"
                          v-if="range[0] > 0 && range[1] == 4500"
                        >
                          {{ range[0] }} - Any</span
                        >
                        Sqft
                      </p>
                    </div>
                    <vue-slider
                      v-model="range"
                      :min="0"
                      :max="4500"
                      :height="8"
                      :dotSize="32"
                    ></vue-slider>
                    <!-- <b-form-input id="range-1" v-model="rangevalue" type="range" min="100" max="4500"></b-form-input> -->
                    <!-- {{rangevalue}} -->
                    <div class="text-color-2 Roboto-Regular">
                      <span c>No Min</span>
                      <span style="float:right">No Max </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="element4 py-3">
                <div>
                  <p class="text-color-1 Roboto-Regular mb-0">
                    Get Alerts When Homes Matching These Filters Come Up For
                    Sale
                  </p>
                  <p class="text-color-2 Roboto-Regular">
                    Stop alerts at any time by unsubscribing from your email
                  </p>
                </div>
              </div>
              <div class="element5 mt-3">
                <button
                  class="btn text-color-1 Roboto-Regular"
                  @click="CancelFilter"
                >
                  X Cancel
                </button>
                <div>
                  <button
                    class="btn text-color-2 Roboto-Regular"
                    @click="clearFilter"
                  >
                    Clear all
                  </button>
                  <button
                    class="btn btn-save px-5 text-white Roboto-Regular"
                    @click="saveFilterdata()"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div :class="tab_visible('show-map')" class="h-50">
      <show-map ref="showmap" :type="typesale" @submit="submitmap"></show-map>
    </div>
    <div :class="tab_visible('show-list')" class="h-100">
      <div class="text-center my-5 container">
        <b-spinner
          v-if="loading"
          style="width: 4rem; height: 4rem;"
          variant="warning"
          label="Large Spinner"
        ></b-spinner>
      </div>
      <show-list
        ref="showlist"
        :type="typesale"
        @submit="submitlist"
      ></show-list>
    </div>
  </div>
</template>
<script>
import ShowMap from "../components/base/ShowMap.vue";
import itemsnumber from "../itemsnumber.json";
export default {
  components: {
    ShowMap,
  },
  data() {
    return {
      loading: false,
      posY: null,
      showfilter: false,
      rangevalue: 0,
      range: [1, 4500],
      selected_menu: "show-map",
      centerLatitude: 0,
      centerLongitude: 0,
      latitude: 0,
      longitude: 0,
      marker: {},
      map: {},
      coordinates: null,
      currentLocation: { lat: 0, lng: 0 },
      zoom: 12,
      Pa: null,
      yb: null,
      bounds: {
        Pa: {},
        yb: {},
      },
      options: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true,
        disableDefaultUi: false,
      },
      value2: [],
      options3: [],
      typesale: "forsale",
      bn: null,
      value: null,
      optionsdata: [
        { text: "Detached Homes (no shared walls)", value: "Detached" },
        { text: "Semi-Detached Homes (1 shared wall)", value: "Semi Detached" },
        {
          text: "Townhouses (multi-level & shared walls)",
          value: "Row/Townhouse",
        },
      ],
      styleoptions: [
        { text: "Low Rise Condos (4 or fewer levels)", value: "l_rise" },
        { text: "High Rise Condos (5 or more levels)", value: "h_rise" },
      ],
      minPrice: this.$store.state.filteroptdata.minPrice,
      maxPrice: this.$store.state.filteroptdata.maxPrice,
      minParkingSpaces: this.$store.state.filteroptdata.minParkingSpaces,
      minBaths: this.$store.state.filteroptdata.minBaths,
      minBeds: this.$store.state.filteroptdata.minBeds,
      propertyType: this.$store.state.filteroptdata.propertyType,
      style: this.$store.state.filteroptdata.style,
    };
  },

  computed: {
    itemsnumberlist() {
      const result = itemsnumber.items;
      return Array.from(result, (x) => x.toLocaleString("ja-JP"));
    },
  },
  methods: {
    CancelFilter() {
      this.showfilter = false;
    },
    getAddressData(addressData) {
      this.$refs.showmap.openfullscreenh();
      let city = addressData.locality;
      this.$store.commit("setCity", city);
      this.$refs.showmap.updateaddressdata(addressData);
      this.$refs.showmap.getpath(city);
    },
    clearcity() {
      if (this.$refs.addressmap.$el._value == "") {
        this.$refs.showmap.showboxselling();
        let city = "";
        this.$store.commit("setCity", city);
        this.$refs.showmap.updateaddressdata();
      } else {
        this.$refs.showmap.hideboxselling();
      }
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options3.push(tag);
      this.value2.push(tag);
      this.saveFilterdata();
    },
    remove(OldTage) {
      this.value2 = this.value2.filter((item) => item.code !== OldTage.code);
      this.saveFilterdata();
    },
    clearFilter() {
      this.minPrice = "";
      this.maxPrice = "";
      this.minParkingSpaces = "";
      this.minBaths = "";
      this.minBeds = "";
      this.propertyType = [];
      this.style = [];
    },
    saveFilterdata() {
      this.showfilter = false;
      let input = {};
      (input.minBeds = this.minBeds),
        (input.minBaths = this.minBaths),
        (input.minParkingSpaces = this.minParkingSpaces),
        (input.minSqft = this.range[0]),
        (input.maxSqft = this.range[1]),
        (input.maxPrice = this.maxPrice),
        (input.minPrice = this.minPrice),
        (input.propertyType = this.propertyType),
        (input.style = this.style);
      this.$store.commit("SAVE_FILTER_OPT", input);
      if (this.selected_menu == "show-list" && this.typesale == "forsale") {
        this.loading = true;
        this.$refs.showlist.find_listings_forSaleMain();
      }
      if (this.selected_menu == "show-list" && this.typesale == "sold") {
        this.loading = true;
        this.$refs.showlist.find_listings_SoldMain();
      }
      if (this.selected_menu == "show-map" && this.typesale == "forsale") {
        this.$refs.showmap.find_listings_forSaleMain();
      }
      if (this.selected_menu == "show-map" && this.typesale == "sold") {
        this.$refs.showmap.find_listings_SoldMain();
      }
    },
    submitmap() {
      this.selected_menu = "show-list";
      if (this.typesale == "forsale") {
        this.loading = true;
        this.$refs.showlist.find_listings_forSaleMain();
      }
      if (this.typesale == "sold") {
        this.loading = true;
        this.$refs.showlist.find_listings_SoldMain();
      }
    },
    submitlist() {
      this.selected_menu = "show-map";
      if (this.typesale == "forsale") {
        this.$refs.showmap.find_listings_forSaleMain();
      }
      if (this.typesale == "sold") {
        this.$refs.showmap.find_listings_SoldMain();
      }
    },
    tab_visible(tab) {
      if (tab == this.selected_menu) {
        return "d-block";
      } else {
        return "d-none";
      }
    },
    openforsale() {
      if (this.selected_menu == "show-list") {
        this.typesale = "forsale";
        this.loading = true;
        this.$refs.showlist.find_listings_forSaleMain();
      }
      if (this.selected_menu == "show-map") {
        this.typesale = "forsale";
        this.$refs.showmap.find_listings_forSaleMain();
      }
    },
    opensold() {
      if (this.selected_menu == "show-list") {
        this.typesale = "sold";
        this.loading = true;
        this.$refs.showlist.find_listings_SoldMain();
      }
      if (this.selected_menu == "show-map") {
        this.typesale = "sold";
        this.$refs.showmap.find_listings_SoldMain();
      }
    },
    openfullscreen() {
      this.$refs.showmap.openfullscreenh();
    },
    // getpositiontop() {
    //   this.posY =
    //     document.getElementById("searchpage").getBoundingClientRect().y +
    //     document.getElementById("searchpage").offsetHeight;
    //   this.$refs.showmap.setposYsearchbar(this.posY);
    // },
    stoploading() {
      this.loading = false;
    },
    runloading() {
      this.loading = true;
    },
    getpositiontop(){
      this.posY = document.getElementById('searchpage').getBoundingClientRect().y + document.getElementById('searchpage').offsetHeight;
      this.$store.commit('setposY',this.posY)
      console.log("255555555555555555")
    },
  },
  mounted() {
    this.$refs.showmap.ckself();
    this.getpositiontop();
    this.openfullscreen();

  },
  created() {
    /* this.getCoords(); */
    /*  this.changebounds();  */
    //  this.openfullscreen()
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
      console.log(oldval);
      this.Pa = newval.Pa;
      this.yb = newval.yb;
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
footer {
  z-index: -1;
  display: none;
}
.togglemap {
  display: inline-block;
  height: 40px;
  position: fixed;
  left: calc(50% - 43px);
  bottom: 20px;
  top: auto;
  z-index: 1;
}
.togglemap button {
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

.searchpage {
  display: inline-block;
  height: 40px;
  width: 100%;
  position: sticky;
  /* top: 140px; */
  z-index: 1;
  /* padding-left: 50px; */
  margin: auto;
  /*    padding-right: 74px; */
}
.fixedtop {
  position: static;
  margin-top: 2em;
}
.searchpage .element1 {
  max-width: 100%;
  padding: 20px;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
}
.searchpage .element1 .togglesearch {
  /* max-width: 260px; */
  width: 100%;
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
.searchpage .element1 .searchform {
  height: 42px;
  background: #fff;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 6px;
}
.searchpage .element1 .togglesearch .DFJqO {
  display: block;
  height: 32px;
  border: none;
  width: 50%;
  text-align: center;
  padding: 0px;
  margin: 4px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  background: transparent;
  transition: background-color 0.3s ease 0s;
  color: rgb(4, 58, 48);
}
.searchpage .element1 .togglesearch .eGqDDI {
  display: block;
  height: 32px;
  border: none;
  width: 50%;
  text-align: center;
  padding: 0px;
  margin: 4px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  background: transparent;
  transition: background-color 0.3s ease 0s;
  color: rgb(4, 58, 48);
}
.searchpage .element1 .togglesearch .forsale {
  background: rgb(10, 133, 110);
  color: #fff;
}
.searchpage .element1 .togglesearch .sold {
  background: rgb(201, 80, 85);
  color: #fff;
}
.searchpage .element1 .searchform .item1 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  border-radius: 6px;
  z-index: 10;
  /* background: white; */
  /* border: 1px solid transparent; */
  transition: background 0.25s ease 0s, border-color 0.25s ease 0s,
    box-shadow 0.25s ease 0s;
}
.fixedtop .element1 .searchform .item1 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  border-radius: 6px;
  z-index: 10;
  background: white;
  border: 1px solid transparent;
  transition: background 0.25s ease 0s, border-color 0.25s ease 0s,
    box-shadow 0.25s ease 0s;
}
.searchpage .element1 .searchform .item1 .item1a {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  min-height: 40px;
}
.searchpage .element1 .searchform .item1 .item1a button {
  padding-right: 12px;
  padding-left: 0px;
  margin: 4px 0px 0px 4px;
  height: 32px;
  border-radius: 6px;
  background: none;
  border: none;
  color: #707070;
}
.searchpage .element1 .searchform .item1 .item1a button:hover {
  background: #fff;
}
.searchpage .element1 .searchform .item1 .item1a button img {
  width: 24px;
  height: 24px;
}
.searchpage .element1 .searchform .item1 .item1a input {
  border: 0px;
  font-size: 16px;
  background: none;
  flex: 1 1 auto;
  width: 1%;
  height: 32px;
  line-height: 30px;
  margin: 4px 5px 4px 0px;
  padding-left: 0px;
  padding-right: 0px;
}
.searchpage .element1 .searchform .item1 .item1a button span {
  color: #232323;
  font-size: 18px;
  font-weight: 600;
}
.searchpage .element1 .searchform .item1 .item1a button:last-child img {
  width: 22px;
  height: 22px;
}
input:focus {
  outline: none;
  border: none;
}
.searchpage .element1 .searchform .item1 .item1b {
  width: calc(100% + 2px);
  position: absolute;
  right: 0px;
  width: calc(100vw- 32px);
  top: 110%;
  left: -1px;
  border-radius: 6px;
  box-shadow: rgb(10 19 18 / 12%) 0px 4px 6px;
  transition: opacity 0.25s ease 0s, visibility 0.25s ease 0s;
  z-index: 1000;
  padding: 8px 0px;
  margin: 2px 0px 0px;
  background-color: rgb(255, 255, 255);
  visibility: hidden;
  opacity: 0;
}
.bgwhite {
  background: white !important;
}
.bgdark {
  background-color: #f3f3f3 !important;
}
.multiselect__tag {
  position: relative !important;
}

.modelfilter {
  background: #fff;
  z-index: 1000;
  position: absolute;
  left: 15%;
  right: 15%;
  /* border: 1px solid #707070; */
  z-index: 99;
}
.modelfilter .element1 {
  max-width: 100%;
  padding: 20px;
  display: flex;
  width: 100%;
  align-items: center;
}
.modelfilter .element1 label {
  font-weight: 600;
  margin-bottom: 12px;
  display: block;
  font-size: 18px;
}
.modelfilter .element1 .element1a {
  width: 70%;
}
.modelfilter .element2 label {
  font-weight: 600;
  margin-bottom: 12px;
  display: block;
  font-size: 18px;
}
.modelfilter .element2 {
  width: 50%;
}
.modelfilter .element2 .element2a {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.modelfilter .element2 .element2a div:nth-child(2) {
  width: 12px;
  height: 2px;
  margin: 0px 8px;
  background-color: black;
}
.modelfilter .element3 p {
  font-weight: 600;
  margin-bottom: 12px;
  display: block;
  font-size: 20px;
}
.modelfilter .element3 .p2 {
  font-weight: normal;
  margin-bottom: 12px;
  display: block;
  font-size: 14px;
}
.modelfilter .element3 .p2 span {
  font-size: 14px;
}
.modelfilter .element3 .types a {
  font-size: 20px;
  color: #434242;
  display: inline-block;
  border: 1px solid currentColor;
  margin: 0 4px 5px 0;
  padding: 8px 20px;
  border-radius: 8px;
  text-decoration: none;
  border: 1px solid #707070;
  transition: all 0.3 ease-in-out;
}
.modelfilter .element3 .types a:hover {
  border: 1px solid #00a19b;
  background: #edf3f2;
}
.modelfilter .element3 .types .active {
  border: 1px solid #00a19b;
  background: #edf3f2;
}
.modelfilter .element3 span {
  font-size: 12px;
}
.modelfilter .element4 {
  border-top: 1px solid #707070;
  border-bottom: 1px solid #a7a2a2;
}
.modelfilter .element4 div:first-child p:first-child {
  font-size: 18px;
}
.modelfilter .element4 div:first-child p:nth-child(2) {
  font-size: 16px;
}
.modelfilter .element5 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modelfilter .element5 button:first-child {
  background: transparent;
  font-size: 18px;
}
.modelfilter .element5 .btn-save {
  background: #ffb600;
  border-radius: 8px;
  font-size: 18px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
input:focus {
  outline: none;
  box-shadow: none;
  border: 0;
}
@media only screen and (max-width: 600px) {
  .searchpage {
    padding-left: 5px;
    padding-right: 5px;
  }
  .searchpage .element1 .searchform .item1 .item1a button img {
    width: 20px;
    height: 20px;
  }
  .searchpage .element1 {
    flex-direction: column;
  }
  .searchpage .element1 .searchform .item1 .item1a {
    flex-wrap: nowrap;
  }
  .searchpage .element1 .searchform .item1 .item1a button span {
    font-size: 14px;
  }
  .searchpage .element1 .searchform .item1 .item1a button:last-child img {
    width: 16px;
    height: 16px;
  }
  .searchpage .element1 .searchform .item1 .item1a button {
    display: flex;
    align-items: center;
  }
}
</style>
