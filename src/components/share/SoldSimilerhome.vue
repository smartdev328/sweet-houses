<template>
    <div class="mb-3">
        <div class="item1 w-100">
            <div class="item1a" @click="openHomePage">
                <img :src="homedata.images.image" alt="">
                <div class="item2">
                    <div class="Roboto-Regular mb-1" v-if="homedata.listPrice">$ {{homedata.listPrice.toLocaleString("ja-JP")}}</div>
                    <div class="Roboto-Regular mb-1" v-if="homedata.soldPrice">$ {{homedata.soldPrice.toLocaleString("ja-JP")}}</div>
                    <div class="item2a d-flex justify-content-between Roboto-Regular mb-1">
                        <p class="mr-1 mb-0"> 
                            <span>{{homedata.details.numBedrooms}}</span>
                            <span v-if="homedata.details.numBedroomsPlus > 0">+ {{homedata.details.numBedroomsPlus}} </span>
                             <span>bed</span>
                        </p>
                        <p class="mr-1 mb-0">
                            <span>{{homedata.details.numBathrooms}} </span>
                            <span v-if="homedata.details.numBathroomsPlus > 0">+ {{homedata.details.numBathroomsPlus}} </span>
                             <span>bath</span>
                        </p>
                        <p class="mb-0">
                            <span>{{homedata.details.style}}</span>
                             
                        </p>
                    </div>
                    <div class="item2b mb-1 ">
                        <span>{{ homedata.address.streetNumber }}
                  {{ homedata.address.streetDirection }}
                  {{ homedata.address.streetSuffix }}</span>
                        <span class="mx-1">|</span>
                        <span>{{homedata.address.area}}</span>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['homedata'],
    methods:{
        openHomePage(){
            
        }
    }
}
</script>
<style scoped>
.item1a{
    display: flex;
    overflow: hidden;
}
.item1a img{
    
    min-width: 128px;
    max-width: 128px;
    border-radius: 8px;
    height: 94px;

}
.item1 .item2{
    display: flex;
    flex-direction: column;
    margin-left: 8px;
}
</style>