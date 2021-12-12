<template>
    <div>
      <div class="searchpage" :class="{fixedtop:selected_menu === 'show-list'}">
        <div class="container">
             <div class="element1 row d-flex align-items-center" :class="{bgwhite:selected_menu === 'show-list'}">
            <div class="togglesearch col-12 col-md-3 mx-2" :class="{bgdark:selected_menu === 'show-list'}">
              <button @click="openforsale" class="DFJqO" :class="{ forsale: this.typesale === 'forsale' }">For sale</button>
              <button @click="opensold" class="eGqDDI" :class="{sold : this.typesale == 'sold'}">Sold last 90days </button>
            </div>
            <div class="searchform col-12 col-md-8 mx-0">
              <div class="item1">
                  <div class="item1a rounded" :class="{bgdark:selected_menu === 'show-list'}">
                      <button>
                            <img src="../assets/image/icon/Iconly-Light-outline-Search.svg" alt="">
                      </button>
                      <input type="text" placeholder="Any area or listing ">
                     
                      <button>
                            <img src="../assets/image/icon/iconfilter.svg" alt="">
                            <span class="Roboto-Regular ml-2">Filters</span>
                      </button>
                    <!-- <multiselect v-model="value" tag-placeholder="Add this as new tag" 
                    placeholder="Search or add a tag" label="name" track-by="code" :options="optionsdata" :multiple="true" 
                    :taggable="true" @tag="addTag"></multiselect> -->
                  </div>
                  <div>
                    <div class="item1b">
                    </div>
                  </div>
              </div>
            </div>

       
           
         
        </div>
          <div class="modelfilter" v-show="showfilter">   
           <div class="px-4 pt-0 pb-4">
              <div class="element1 px-0">
                <label for="propertytype" class="text-color-1 Roboto-Medium">Property Type</label>
                <div class="element1a">
           
                     <b-form-checkbox-group
                  
                      id="checkbox-group-1"
                      v-model="selectedpropertytype"
                      :options="optionsdata"
                      name="flavour-1"
                    ></b-form-checkbox-group>
                  </div>
              </div>
              <div class="element2">
                <label for="" class="text-color-1 Roboto-Medium">Price Range</label>
                <div class="element2a">
                  <div class="w-100 position-relative">
                      <v-select 
                 :reduce="hometypes => hometypes.value"
                  class="form-control form-control-lg Roboto-Regular"
                 v-model="hometype"
                    :options="hometypes" 
                    label="name"
                    placeholder="Choose an option"
                    :searchable=false
                    :clearable=false
                  ></v-select>
                  </div>
                  <div></div>
              
                  <div class="w-100 position-relative">
                      <v-select 
                 :reduce="hometypes => hometypes.value"
                  class="form-control form-control-lg Roboto-Regular"
                 v-model="hometype"
                    :options="hometypes" 
                    label="name"
                    placeholder="Choose an option"
                    :searchable=false
                    :clearable=false
                  ></v-select>
                  </div>
                </div>
             
           </div>
           <div class="element3 mt-3">
             <div class="row">
               <div class="col-12 col-md-6">
                 <p>Bedrooms</p>
                  <div class="types">
                      <a class="btn Roboto-Regular"> Any  </a>
                      <a class="btn Roboto-Regular" > 1+ </a>
                      <a class="btn Roboto-Regular">2+  </a>
                      <a class="btn Roboto-Regular" > 3+ </a>
                      <a class="btn Roboto-Regular"> 4+ </a>
                       <a class="btn Roboto-Regular"> 5+ </a>
                        <a class="btn Roboto-Regular"> 6+ </a>
                  </div>
               </div>
                <div class="col-12 col-md-6">
                 <p>Bathrooms</p>
                  <div class="types">
                      <a class="btn Roboto-Regular"> Any  </a>
                      <a class="btn Roboto-Regular" > 1+ </a>
                      <a class="btn Roboto-Regular">2+  </a>
                      <a class="btn Roboto-Regular" > 3+ </a>
                      <a class="btn Roboto-Regular"> 4+ </a>
                       <a class="btn Roboto-Regular"> 5+ </a>
                        <a class="btn Roboto-Regular"> 6+ </a>
                  </div>
               </div>
             </div>
           </div>
               <div class="element3">
             <div class="row">
               <div class="col-12 col-md-6">
                 <p>Parking</p>
                  <div class="types">
                      <a class="btn Roboto-Regular"> Any  </a>
                      <a class="btn Roboto-Regular" > 1+ </a>
                      <a class="btn Roboto-Regular">2+  </a>
                      <a class="btn Roboto-Regular" > 3+ </a>
                      <a class="btn Roboto-Regular"> 4+ </a>
                       <a class="btn Roboto-Regular"> 5+ </a>
                        <a class="btn Roboto-Regular"> 6+ </a>
                  </div>
               </div>
                <div class="col-12 col-md-6">
                 <p>Internal Sqft</p>
                  <input type="range" class="form-control-range"  min="100" max="4500" v-model="rangevalue" id="formControlRange">
                  <!-- <b-form-input id="range-1" v-model="rangevalue" type="range" min="100" max="4500"></b-form-input> -->
                  <!-- {{rangevalue}} -->
               </div>
             </div>
           </div>
          </div>
        </div>
        </div>
      </div>

            <div :class="tab_visible('show-map')" class="h-100">
                      <show-map  @submit="submitmap"></show-map>
          </div>
          <div :class="tab_visible('show-list')" class="h-100">
                      <show-list ref="showlist" :type="typesale" @submit="submitlist"></show-list>
            </div>
    </div>
</template>
<script>
import ShowMap from '../components/base/ShowMap.vue';
// import Multiselect from 'vue-multiselect'
export default {
  components: { ShowMap  },
    
    data: () => ({
      showfilter:null,
      rangevalue:0,
      selected_menu:"show-list",
        centerLatitude: 0,
        centerLongitude: 0,
        latitude:0,
        longitude:0,
        marker: {},
        map: {},
        coordinates: null,
        currentLocation : { lat : 0, lng : 0},
        zoom:12,
        Pa:null,
        yb:null,
        bounds:{
          Pa:{
          },
          yb:{
          }
        },
        options:{
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: true,
          rotateControl: true,
          fullscreenControl: true,
        disableDefaultUi: false
        },
        typesale:"forsale",
        bn:null,
        value:null,
        optionsdata:  [
          { text: 'Detached Homes (no shared wells)', value: 'Detached' },
          { text: 'Semi-Detached Homes (1 shared well)', value: 'Semi-Detached' },
          { text: 'Townhouses (multi-level & shared wells)', value: 'Townhouses' },
          { text: 'Low Rise Condos (4 or fewer levels)', value: 'LowRise' },
           { text: 'High Rise Condos (5 or more levels)', value: 'HighRise' }
        ],
        selectedpropertytype:[],
        hometypes: [
        { value: "Detached", name: "Detached" },
        { value: "Semi-Detached", name: "Semi-Detached" },
        { value: "Townhouse", name: "Townhouse" },
        { value: "Condo or apartment", name: "Condo or apartment" },
        { value: "Other", name: "Other" },
      ],
      hometype:null

    }),
    computed:{
       range() {
      return Array(1000000 - 30000 ).fill().map((_, idx) => 30000 + idx + 5000)
}
    },
    methods:{
          addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    },
      submitmap(){
        this.selected_menu = "show-list"
      },
      submitlist(){
        this.selected_menu = "show-map"

      },
      tab_visible(tab) {
      if (tab == this.selected_menu) {
          return "d-block";
      } else {
          return "d-none";
      }
  },
      
    showLocation(evt){
        this.latitude = parseFloat(evt.latLng.lat());
        this.longitude = parseFloat(evt.latLng.lat());
        console.log(evt.latLng.lat())
      },
      openforsale(){
        if(this.selected_menu == "show-list"){
          this.typesale = 'forsale';
          this.$refs.showlist.find_listings_forSale();
        }
        
      },
      opensold(){
         if(this.selected_menu == "show-list"){
          this.typesale = 'sold';
           this.$refs.showlist.find_listings_Sold();
        }
      }
    },
  
    created(){
        /* this.getCoords(); */
       /*  this.changebounds();  */ 
    },
    watch: {
      latitude() {
        this.lat=this.latitude;
        this.lng = this.longitude;
        
      },
      centerLongitude(){
        this.lat=this.centerLatitude;
        this.lng = this.longitude;
      },
      bounds :function(newval,oldval){
        console.log(oldval)
        this.Pa = newval.Pa
        this.yb = newval.yb

      }
    },
    mounted () {
    /* console.log(new window.google.maps.LatLngBounds());  */
   /*  this.getbounds();  */
   /* this.changezoom() */
  /*   this.changebounds(); */
}

}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>

footer{
  z-index: -1;
  display: none;
}
.togglemap{
  display: inline-block;
    height: 40px;
    position: fixed;
    left: calc(50% - 43px);
    bottom: 20px;
    top: auto;
    z-index: 1;
}
.togglemap button{
  box-shadow: rgb(0 0 0 / 1%) 0px 1.77104px 4.75968px, rgb(0 0 0 / 2%) 0px 4.25607px 11.4382px, rgb(0 0 0 / 2%) 0px 8.01379px 21.5371px, rgb(0 0 0 / 2%) 0px 14.2952px 38.4185px, rgb(0 0 0 / 3%) 0px 26.7377px 71.8575px, rgb(0 0 0 / 4%) 0px 64px 172px;
    border: 2px solid transparent;
    background: #232323;
    color: inherit;
    white-space: nowrap;
    padding: 4px 16px;
    border-radius: 50px;
    font-size: 1rem;
}

.searchpage{
  display: inline-block;
    height: 40px;
    width: 100%;
    position: sticky;
    top: 140px;
    z-index: 1;
    padding-left: 50px;
    margin: auto;
 /*    padding-right: 74px; */
}
.fixedtop{
  position: static;
  margin-top: 2em;
}
.searchpage .element1{
  max-width: 100%;
  padding: 20px;
  display: block;
}
.searchpage .element1 .togglesearch{
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
    border-radius:6px;
    padding: 6px;
    transition: opacity 0.25s ease 0s;
}
.searchpage .element1 .searchform{
      height: 42px;
      background: #fff;
      margin-right: 8px;
      margin-bottom: 8px;
      border-radius: 6px;
} 
.searchpage .element1 .togglesearch .DFJqO{
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
.searchpage .element1 .togglesearch  .eGqDDI{
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
.searchpage .element1 .togglesearch .forsale{
      background: rgb(10, 133, 110);
      color: #fff;
}
.searchpage .element1 .togglesearch .sold{
  background: rgb(201, 80, 85);
  color: #fff;
}
.searchpage .element1 .searchform .item1{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    border-radius: 6px;
    z-index: 10;
    background: white;
    border: 1px solid transparent;
    transition: background 0.25s ease 0s, border-color 0.25s ease 0s, box-shadow 0.25s ease 0s;
    }
.searchpage .element1 .searchform .item1 .item1a{
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    min-height: 40px;
}
.searchpage .element1 .searchform .item1 .item1a button{
    padding-right: 12px;
    padding-left: 0px;
        margin: 4px 0px 0px 4px;
    height: 32px;
    border-radius: 6px;
    background: none;
    border: none;
    color: #707070;
}
.searchpage .element1 .searchform .item1 .item1a button img{
  width: 24px;
  height: 24px;
}
.searchpage .element1 .searchform .item1 .item1a input{
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
.searchpage .element1 .searchform .item1 .item1a button span{
  color: #232323;
  font-size: 18px;
  font-weight: 600;
}
.searchpage .element1 .searchform .item1 .item1a button:last-child img{
  width: 22px;
  height: 22px;
}
input:focus{
  outline: none;
  border: none;
}
.searchpage .element1 .searchform .item1 .item1b{
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
.bgwhite{
  background: white !important;
}
.bgdark{
  background-color: #F3F3F3 !important;
}
  .multiselect__tag{
  position: relative !important;
}

.modelfilter{
background: #fff;
}
.modelfilter .element1 label{
    font-weight: 600;
    margin-bottom: 12px;
    display: block;
    font-size: 18px;
}
.modelfilter .element1 .element1a{
  width: 70%;
}
.modelfilter .element2 label{
      font-weight: 600;
    margin-bottom: 12px;
    display: block;
    font-size: 18px;
}
.modelfilter .element2{
  width: 50%;
}
.modelfilter .element2 .element2a{
      display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.modelfilter .element2 .element2a div:nth-child(2){
      width: 12px;
    height: 2px;
    margin: 0px 8px;
    background-color: black;
}
.modelfilter .element3 .types a{
    font-size: 20px;
    color: #434242;
    display: inline-block;
    border: 1px solid currentColor;
    margin: 0 4px 5px 0;
    padding: 8px 20px;
    border-radius: 8px;
    text-decoration: none;
    border: 1px solid #707070;
}
@media only screen and (max-width:600px) {
  .searchpage{
    padding-left: 5px;
    padding-right: 5px;
  }
  .searchpage .element1 .searchform .item1 .item1a button img{
  width: 20px;
  height: 20px;
}
  
}
</style>