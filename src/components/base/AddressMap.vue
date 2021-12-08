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
            style="width: 100%; height: 50vh"
            >
            <GmapMarker
                :position="{lat:this.lat, lng:this.lon}"
                :clickable="true"
                :draggable="false"
                :icon="icon"
                @click="center=m.position"
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
        lon: { type: Number,default:-79.383184},
        lat: { type: Number,default:43.653226},
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