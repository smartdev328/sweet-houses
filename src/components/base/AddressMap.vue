<template>
    <div>
        <div>
            <div style="display: block; width:auto;height:400px">
                
            <GmapMap
            :center="{lat:this.lat, lng:this.lon}"
            :zoom="8"
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
        lon: { type: Number,default:46.68844583469802},
        lat: { type: Number,default:24.697922601007832},
    },
    data:() =>({
        options:{
        zoomControl: true,
        mapTypeControl: false,
        scrollwheel:false,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true,
        disableDefaultUi: false
        },
    }),
    computed: {
    google: gmapApi,
  },
}
</script>
<style>
    
</style>