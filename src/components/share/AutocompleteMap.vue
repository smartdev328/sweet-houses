<template>
    
    <div>
           <vue-google-autocomplete
                  id="map"
                  autocomplete="off"
                    ref="addressmap"
                  classname="form-control"
                  placeholder="Enter your home address"
                  country="ca"
                  v-on:keyup="yourFunctinNameToBeCall"
                  v-on:placechanged="getAddressData"
                  :options="{fields: ['geometry', 'formatted_address', 'address_components']}"
                >
                </vue-google-autocomplete>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        yourFunctinNameToBeCall(){
      this.place_choosed = false;
    },
    getAddressData(addressData, placeResultData) {
      this.addressData= addressData
      this.placeResultData = placeResultData
      this.latlong.lat = addressData.latitude
      this.latlong.lng = addressData.longitude
      this.place_choosed = true;
      console.log(placeResultData)
    },
    }
}
</script>