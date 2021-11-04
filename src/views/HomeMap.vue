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
                  </div>
                  <div>
                    <div class="item1b">
                    </div>
                  </div>
              </div>
            </div>
        </div>
        </div>
       
      </div>

            <div :class="tab_visible('show-map')" class="h-100">
                      <show-map @submit="submitmap"></show-map>
          </div>
          <div :class="tab_visible('show-list')" class="h-100">
                      <show-list @submit="submitlist"></show-list>
            </div>
    </div>
</template>
<script>
import ShowMap from '../components/base/ShowMap.vue';

export default {
  components: { ShowMap },
    
    data: () => ({
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
        bn:null

    }),
    methods:{
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
        this.typesale = 'forsale'
      },
      opensold(){
        this.typesale = 'sold'
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
    position: fixed;
    top: 120px;
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