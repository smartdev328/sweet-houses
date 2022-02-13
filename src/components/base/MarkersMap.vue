<template>
  <div>
    <div>
      <div style="display: block; width:auto;height:400px">

        <GmapMap
            :center="{lat:this.lat, lng:this.lon}"
            :zoom="zoom"
            ref="map"
            map-type-id="terrain"
            draggable=false
            :options="options"
            style="width: 100%; height: 360px"
        >
          <GmapMarker
              v-for="m in latlng"
              :key="m.id"
              :position="{lat:m.latitude, lng:m.longitude}"
              :clickable="false"
              :draggable="false"
              :icon="icon"
          />
        </GmapMap>
      </div>
    </div>

  </div>
</template>
<script>
import { gmapApi } from 'vue2-google-maps';
export default {
  props: {
    latlng:{
      type:Array},
    zoom:{type:Number , default:15}
  },
  data:() =>({
    options:{
      zoomControl: false,
      mapTypeControl: false,
      scrollwheel:false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: true,
      fullscreenControl: false,
      disableDefaultUi: false,
      draggable:false
    },
    icon:require('../../assets/image/icon/markerhome.svg')
  }),
  computed: {
    google: gmapApi,
  },
}
</script>
<style>

</style>