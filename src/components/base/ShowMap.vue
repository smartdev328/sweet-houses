<template>
    <div class="showmap">
            <div style="display: block; width:auto;">
                

  <GmapMap
  ref="map"
  @zoom_changed="changezoom($event)"
  :center="{lat:this.currentLocation.lat, lng:this.currentLocation.lng}"
  :zoom=zoom
  @bounds_changed="changebounds($event)"
  map-type-id="terrain"
  :options="options"
  style="width: 100%; height: 90vh"
>
  <GmapMarker
    :position="{lat:this.latitude, lng:this.longitude}"
    :clickable="true"
    :draggable="false"
    @drag="showLocation"
    @click="center=m.position"
  />
</GmapMap>
    </div>
     <div class="group">
        <div class="group1">
          <div class="group1a px-1 px-md-4 py-4">
            <p class="DMSerifRegular text-white">Sell Without Showings </p>
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
                <button class="">Get Started </button>
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
export default {
    computed:{
        google: gmapApi,
    },
    data:() => ({
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
    }),
    methods:{
        submit(){
            this.$emit('submit')
        },
        aboutusroute(){
        this.$router.push({name:'Aboutus'})
      },
         changezoom($event){
        this.zoom = $event;
      },
showLocation(evt){
        this.latitude = parseFloat(evt.latLng.lat());
        this.longitude = parseFloat(evt.latLng.lat());
        console.log(evt.latLng.lat())
      },
    changebounds:function($event){
      this.bounds = $event
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
        this.notify('error', 'قم بتفعيل تحديد موقعك لتتمكن من الطلب', 'error');
    });
    },
    },
    created(){
        this.getCoords();
        this.changebounds();  
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
  z-index: 1;
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