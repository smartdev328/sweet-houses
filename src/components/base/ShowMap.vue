<template>
    <div class="showmap">
            <div style="display: block; width:auto;">
                

  <GmapMap
  ref="map"
  @click="checkClick"
  @zoom_changed="changezoom($event)"
  :center="{lat:this.currentLocation.lat, lng:this.currentLocation.lng}"
  :zoom=zoom
  @bounds_changed="changebounds($event)"
  @drag="dragmap"
  map-type-id="terrain"
  :options="options"
  style="width: 100%; height: 90vh"
  class="mt-n5"
>
  <gmap-info-window
                            :options="infoWindowOptions"
                            :position="infoWindowPosition"
                            :opened="infoWindowOpened"
                            @closeclick="handleInfoWindowClose"
                        >
                            <div class="info-window">
                               
                                  <div v-if="activehomelad" class="text-center">
                                    <b-spinner variant="success" style="width: 3rem; height: 3rem;" label="Spinning"></b-spinner>
                                  </div>
                                 <div v-if="Object.keys(activehome).length">
                                    <homemap-sale :homedata="activehome" :boardId="boardId"></homemap-sale>
                                 </div>
                                    
                                   
                            </div>
                        </gmap-info-window> 
<GmapCluster  :styles="clusterStyles" :zoom-on-click="true">
  <GmapMarker
    v-for="m in listings" :key="m.id" :position="getpos(m.map)" :clickable="true"  @click="handleMarkerClicked(m)"
      :draggable="false"  :icon="icon"  :label="{'text':numFormatter(m.listPrice) , 'color': 'white' , 'size':'28' }"
  > 
  </GmapMarker>
    </GmapCluster>
</GmapMap>
    </div>
     <div class="group">
        <div class="group1">
          <div class="group1a px-1 px-md-4 py-4">
            <p class="DMSerifRegular text-white mb-1">Sell Without Showings </p>
            <div style="height:4px;width:34px;background:#FFB600"></div>
            <p class="Roboto-Regular text-white text-center">Get an Sweetly Estimate on the value of your home</p>
          </div>
          <div class="px-2 px-md-3">
            <div class="w-100 inputaddress">
              <img src="../../assets/image/icon/Iconly-Light-Location.svg" alt="">
              <div class="item1b2">
                <span class="space"></span>
                <input type="text" class="Roboto-Regular" placeholder="Enter your home address">
              </div>
              <div class="item1b3">
                <button class="">Get Estimate</button>
              </div>
          </div>

          </div>
          
          <div class="row mt-3 ">
            <div class="col-5 mx-auto mb-3">
              <div class="">
                <button class="w-100 Roboto-Regular" @click="aboutusroute">About Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class="togglemap">
      <button class="Roboto-Regular btn bg-white" @click="submit">Show List</button>
    </div>
    </div>
</template>
<script>
import { gmapApi } from 'vue2-google-maps';
import GmapCluster from "vue2-google-maps/dist/components/cluster";

export default {
    computed:{
        google: gmapApi,
    //   infoWindowPosition() {
    //     return {
    //         lat: 0,
    //         lng: 0
    //     };
    // },
    },
    components:{GmapCluster},
    data:() => ({
      visInfoWindow:false,
      markers: [
        {
        
            position: {
              lat: 32.246744456213257,
              lng: 35.36345035612393,
              
            },
            label:'2M'
          },
        {
        
            position: {
              lat: 31.246744456213257,
              lng: 36.36345035612393,
              
            },
            label:'sold'
          },
           {
            position: {
              lat: 31.000000, 
              lng: 36.000035612393,
              
            },
            label:"2000"
          }],
          shape: {
            coords: [10, 10, 10, 15, 15, 15, 15, 10],
            type: 'poly'
          },
        centerLatitude: 0,
        centerLongitude: 0,
        latitude:0,
        longitude:0,
        marker: {},
        map: {},
        coordinates: null,
        currentLocation : { lat : 0, lng : 0},
        zoom:15,
        bounds:{
    
        },
        options:{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true,
        disableDefaultUi: false,
        minzoom:8
        },
        listings:[],
        sw_long:null,
        sw_lat:null,
        ne_long:null,
        ne_lat:null,
        total:0,
        icon:require('../../assets/image/icon/Recsale.svg'),
         clusterStyles: [
        {
          url: require('../../assets/image/icon/circluster.svg'),
           textColor: "#fff",
          height: 50,
          width: 50,
          textSize: 20
  
        }
      ],
      infoWindowOpened:false,
       infoWindowOptions: { 
        pixelOffset: {
            width: 0,
            height: -35
        }
    },
  
    activehome:{},
    infoWindowPosition:{lat:0,lng:0},
    activehomelad:null
    }),
    methods:{
      checkClick(){
        if(this.infoWindowOpened){
          console.log("00000")
          this.infoWindowOpened = false,
          this.activehome = {}
        }
        
      },
      getpos(item){
        return {
          lat:item.latitude * 1,
          lng: item.longitude * 1
        }
      },
      numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(0) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(0) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
},
      handleInfoWindowClose(){
        this.activehome = {}
        this.infoWindowOpened=false
      },
       handleMarkerClicked(m) {
         this.infoWindowPosition.lat = m.map.latitude * 1;
        this.infoWindowPosition.lng = m.map.longitude * 1
        this.infoWindowOpened = true;
         this.activehomelad = true;
         this.boardId =m.boardId; 
        let mlsNumber = m.mlsNumber;
        this.$http.get(`listings/find_home/?mlsNumber=${mlsNumber}&boardId=${this.boardId}`).then((res) =>{
          this.activehome = res.data
          this.activehomelad = false;
        }).catch(()=>{
          this.activehomelad = false;
        })
           
            
        },
        submit(){
            this.$emit('submit')
        },
        aboutusroute(){
        this.$router.push({name:'Aboutus'})
      },
         changezoom($event){
        this.zoom = $event;
        this.find_listings_forSale();
      },
      find_listings_forSaleMain(){
        this.paginationpage = 1;
        this.filerdata =  {name:'Date listed (new to old)',value:'createdOnDesc'};
        this.find_listings_forSale();
    },
    find_listings_forSale(){
      let sw_long = this.sw_long;
      let sw_lat = this.sw_lat;
      let ne_long = this.ne_long;
      let ne_lat = this.ne_lat;
        // let sortBy = this.filerdata.value;
        // let pageNum = this.paginationpage;
        // this.loading = true ;
        // let minBeds = this.minBeds;
        // let minParkingSpaces = this.minParkingSpaces;
        // let minSqft= this.minSqft;
        // let maxSqft = this.maxSqft;
        // let minPrice = this.minPrice;
        // let maxPrice =this.maxPrice;
        // let propertyType = this.propertyType;
        // let style = this.style;
        // let minBaths = this.minBaths;
        // let keywords = this.keywords.toString().replace(',',' ');
        // this.loadedlistingsold = false
        this.$http.get(`map/get_homes/?type=forsale&sw_long=${sw_long}&sw_lat=${sw_lat}&ne_long=${ne_long}&ne_lat=${ne_lat}`).then((res) =>{
            this.loading = false 
            // this.listingsold = res.data
            this.listings = res.data.listings
            this.tatal = res.data.count
             this.loading = false
             this.loadedlistingsold=true
        })
    },
    changebounds:function($event){
      this.bounds = $event
      // this.find_listings_forSale();
    },
    dragmap(){
      console.log("draged")
      this.find_listings_forSale();
    },
      getCoords() {
        navigator.geolocation.getCurrentPosition((position) => {
          this.longitude = position.coords.longitude,
          this.latitude = position.coords.latitude,
                this.currentLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
            };
        
    }, () => {
      // this.zoom=8;
      // this.currentLocation = {
      //               lat: 53.702018651928924,
      //               lng: -113.09359784375
      //       };
        //this.notify('error', 'قم بتفعيل تحديد موقعك لتتمكن من الطلب', 'error');
    });
    },
    },
    created(){
        this.getCoords();
        this.changebounds();  
        this.find_listings_forSale();
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
        
        console.log( "SW =>" + oldval.getSouthWest().lat() + "...." + oldval.getSouthWest().lng())
        console.log( "NE =>" + oldval.getNorthEast().lat() + "...." + oldval.getNorthEast().lng())
        this.sw_long = oldval.getSouthWest().lng(),
        this.sw_lat = oldval.getSouthWest().lat(),
        this.ne_long = oldval.getNorthEast().lng(),
        this.ne_lat = oldval.getNorthEast().lat()
        

      }
    },
}
</script>
<style scoped>
        .showmap .togglemap{
    display: inline-block;
    height: 40px;
    position: fixed;
    left: calc(50% - 43px);
    bottom: 20px;
    top: auto;
    z-index: 1;
}
.showmap .togglemap button{
    box-shadow: rgb(0 0 0 / 1%) 0px 1.77104px 4.75968px, rgb(0 0 0 / 2%) 0px 4.25607px 11.4382px, rgb(0 0 0 / 2%) 0px 8.01379px 21.5371px, rgb(0 0 0 / 2%) 0px 14.2952px 38.4185px, rgb(0 0 0 / 3%) 0px 26.7377px 71.8575px, rgb(0 0 0 / 4%) 0px 64px 172px;
    border: 2px solid transparent;
    background: #232323;
    color: inherit;
    white-space: nowrap;
    padding: 4px 16px;
    border-radius: 50px;
    font-size: 1rem;
}
.group{
  position: fixed;
  left: 50px;
  height: 200px;
  top: 200px;
  z-index: 0;
  width: 30%;
  padding: 12px;
}
.group .group1{
background: #00A19B;
border-radius: 8px;
}
.group .group1 .group1a p:first-child{
  font-size: 26px;
}
.group .group1 .group1a p:last-child{
  font-size: 20px;
}
.group .group1 .inputaddress{
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
    rgb(0 0 0 / 2%) 0px 8.01379px 21.5371px, rgb(0 0 0 / 2%) 0px 14.2952px 38.4185px, 
    rgb(0 0 0 / 3%) 0px 26.7377px 71.8575px, rgb(0 0 0 / 4%) 0px 64px 172px;
    padding: 4px;
    flex-direction: row;
    border-width: 1px;
    border-style: solid;
}
.group .group1 .inputaddress img{
        flex-shrink: 0;
    align-self: center;
    margin-left: 8px;
    width: 18px;
    height: 18px;
}
.group .group1 .inputaddress .item1b2{
    display: inline-flex;
    width: 100%;
    flex-direction: column;
} 
.group .group1 .space{
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
.group .group1  input{
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
.group .group1  .item1b3{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-shrink: 0;
}
.group .group1   button{
    background-color: #FFB600;
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
input:focus{
     outline: none;
}
.info-window{
  width: 27em;
  max-height: 360px;
  overflow-y: auto;
}
@media only screen and (max-width: 600px){
  .group{
    left: 25px;
    top: 250px;
    width: 55%;
    padding: 0px;
  }
  .group .group1 .group1a p:first-child{
    font-size: 18px;
  }
  .group .group1 .group1a p:last-child{
    font-size: 18px;
  }
  .group .group1 .inputaddress img{
    width: 14px;
    height: 14px;
  }
  .group .group1 button{
    padding: 6px 2px;
    font-size: 12px;
    border:0
  }
  .group .group1 input{
    padding-left: 4px;
  }

}
</style>