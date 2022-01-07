<template>
    <div>
        <div class="card position-relative">
            <div class="overlay" v-if="sold">
                <div class="text-white Roboto-Medium">
                    <p>See this home's photos and sale price</p>
                    <p>Local laws require you to sign up to see sold details</p>
                    <button class="btn">Sign Up</button>
                </div>
                
            </div>
               <!-- <img  v-if="sold" :src="homedata.images.image" class="card-img-top" alt="...">
             <img v-if="!sold" :src="homedata.images.image" class="card-img-top" alt="..."> -->
            
            <img  v-if="sold" :src="homedata.images.image" class="card-img-top" alt="...">
             <img v-if="!sold" :src="homedata.images.image" class="card-img-top" alt="...">
            
        
            <div class="arrow-dir" @click="getImage()" v-if="currentcount < homedata.images.count">
                <img src="../../assets/image/icon/Iconarrows.svg" alt="">
            </div>
             <div class="arrow-dir-before" @click="getImagebefor()" v-if="currentcount > 1">
                <img src="../../assets/image/icon/Iconarrows.svg" alt="">
            </div>
             <div class="counter">{{currentcount}}/{{homedata.images.count}}</div>
            <div class="card-body">
                <div class="element1 d-flex align-items-baseline justify-content-between">
                    <p class="text-color-1 Roboto-Medium" :class="{soldclass : sold}">${{homedata.for_sale_price.toLocaleString('ja-JP')}} </p>
                    <p class="Roboto-Regular">{{ gettime(homedata.listDate)}}</p>
                </div>
                <div class="element2 d-flex">
                
                    <p class="Roboto-Regular">${{homedata.sweetly_price.toLocaleString('ja-JP')}}  Sweetly Estimate</p>
                </div>
                <div class="element3">
                    <span class="text-color-1 Roboto-Regular">{{homedata.details.numBedrooms}} <span v-if="homedata.details.numBedroomsPlus > 0">+{{(homedata.details.numBedroomsPlus)}}</span> </span>
                    <span class="mr-3 ml-1  color2 Roboto-Regular">bd</span>
                    <span class="text-color-1 Roboto-Regular">{{homedata.details.numBathrooms}} <span v-if="homedata.details.numBathroomsPlus > 0">+{{homedata.details.numBathroomsPlus}}</span></span>
                    <span class="mr-3 ml-1   color2 Roboto-Regular">ba</span>
                    <span class="text-color-1 Roboto-Medium">{{homedata.details.sqft}}</span>
                    <span class="mr-3 ml-1   color2 Roboto-Medium">sqft</span>
                    <span class="text-color-1 Roboto-Regular">{{homedata.details.numParkingSpaces}}</span>
                    <span class="text-color-1  ml-2  Roboto-Regular">prkg</span>
                </div>
                <div class="element5 mt-2">
                    <p class="Roboto-Regular">{{homedata.address.unitNumber}} {{homedata.address.streetNumber}} {{homedata.address.streetName}}  {{homedata.address.streetSuffix}}  {{homedata.address.streetDirection}} ({{homedata.details.style}}) 
                        <br>
                        {{homedata.address.neighborhood}},{{homedata.address.city}},{{homedata.address.area}}


                    </p>
                </div>
            </div>
                <div class="ellipsesicon">
                    <div class="ellipsis p-2">
                <img src="../../assets/image/icon/Heart.svg" class="w-100 h-100" alt="icon">
            </div>
            </div>

            </div>
    </div>
</template>
<script>
// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// // optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import moment from 'moment';
export default {
     props:{
         homedata:{
             // type:Object,
    //         default:` {
    //         "details": {
    //             "numBedrooms": "2",
    //             "numBedroomsPlus": "1",
    //             "numBathrooms": "2",
    //             "numBathroomsPlus": "0",
    //             "sqft": "934.00",
    //             "numParkingSpaces": "4",
    //             "style": "Bungalow"
    //         },
    //         "address": {
    //             "unitNumber": "",
    //             "streetNumber": "47",
    //             "streetName": "Falworth",
    //             "streetSuffix": "Place",
    //             "streetDirection": "E",
    //             "neighborhood": "Falconridge",
    //             "city": "Calgary",
    //             "area": "Alberta"
    //         },
    //         "images": [
    //             "https://cdn.repliers.io/area/IMG-A1139441_1.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_2.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_3.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_4.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_5.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_6.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_7.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_8.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_9.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_10.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_11.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_12.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_13.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_14.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_15.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_16.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_17.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_18.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_19.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_20.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_21.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_22.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_23.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_24.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_25.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_26.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_27.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_28.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_29.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_30.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_31.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_32.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_33.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_34.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_35.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_36.jpg",
    //             "https://cdn.repliers.io/area/IMG-A1139441_37.jpg"
    //         ]
    //     }`
         }
     },
    data:() =>({
        sold:false,
        currentcount:1,
            settings:{
            "dots": false,
            "focusOnSelect": true,
            "infinite": true,
            "speed": 500,
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "touchThreshold": 1,
            "arrows":false,
            "lazyLoad": "ondemand",
             "responsive": [
            {
            "breakpoint": 1024,
            "settings": {
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "infinite": false,
            }
            },
            {
            "breakpoint": 600,
            "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "initialSlide": 1,
                "arrows":false,
            }
            },
            {
            "breakpoint": 480,
            "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "arrows":false,
            }
            }
        ]
            },
            formData: new FormData(),
    }),
    methods:{
        gettime(item){
            return moment(item).endOf('day').fromNow();   
        },
        getImage(){
            //  this.currentcount +=1
            let input = {
                mls:  this.homedata.mlsNumber,
                image_num : this.currentcount+1
            }

            this.$http.post('listings/image_bymls/',input).then((res)=>{
                this.homedata.images.image = res.data.image;
                console.log(res.data.image)
                 this.currentcount +=1
                return res
            })
        },
        getImagebefor(){
            //  this.currentcount -=1
               let input = {
                mls:  this.homedata.mlsNumber,
                image_num : this.currentcount - 1
            }

            this.$http.post('listings/image_bymls/',input).then((res)=>{
                this.homedata.images.image = res.data.image;
                console.log(res.data.image)
               this.currentcount -=1
                return res
            })
        },
        customizeNum(num){
            if(num > 0){
                return num
            }else{
                return ''
            }
        }
    },
    components:{
        // VueSlickCarousel
    }
}
</script>
<style scoped>
.card{
    border-radius: 12px;
    border: 0;
}
.card .card-body{
    background: #fff;
    z-index: 1000;
}
.card img{
    border-radius: 12px;
    height: 240px;
}
.card .overlay{
    background: rgb(0 0 0 / 48%);
    width: 100%;
    height: 100%;
    z-index: 999;
    position: absolute;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    padding: 20% 1%;
    text-align: center;
}
.card .overlay p:first-child{
    font-size: 18px;
}
.card .overlay p:nth-child(2){
    font-size: 16px;
}
.card .overlay + img{
    filter: blur(10px);
}
.card .overlay button{
    border: 2px solid #FFFFFF;
    background: transparent;
    color: #fff;
}
.element1 p:first-child{
    font-size: 26px;
}
.element1 p:nth-child(2){
    color: #707070;
    font-size: 14px;
}
.element2 .icon{
    width: 20px;
    height: 20px;
}
.element2 p{
    color: #FFB600;
    font-size: 22px;
    font-weight: 600;
}
.element3 .color2{
    color: #AAAAAA;
}
.element3 span{
    font-size: 18px;
}
.element5 p{
    color: #707070;
    font-size: 18px;
}
.card .ellipsesicon{
    right: 0px;
    top: 0px;
    padding: 10px;
    position: absolute;
    z-index: 999;
}
.card .ellipsis{
    background-color: #fff;
    border: 1px solid #FFF;
    border-radius: 50%;
    cursor: pointer;
}
.card .ellipsis:hover{
    border: 1px solid #A7A7A7;
}
.card .soldclass{
    color: #C95055 !important;
}
.counter{
    position: absolute;
    top: 40%;
    right: 10px;
    color: #fff;
    background: #434242a3;
    padding: 4px 16px;
    border-radius: 16px;
    font-size: 18px;
}
.arrow-dir{
     position: absolute;
     cursor: pointer;
    top: 20%;
    right: 10px;
    background: #fff;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.arrow-dir-before{
       position: absolute;
     cursor: pointer;
    top: 20%;
    left: 10px;
    background: #fff;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.arrow-dir-before img{
    width: 16px;
    height: 16px;
    transform: rotate(180deg);
}
.arrow-dir img{
    width: 16px;
    height: 16px;

}

</style>
