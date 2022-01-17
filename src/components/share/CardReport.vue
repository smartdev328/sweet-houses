<template>
    <div>
        <div class="card shadow">
            <!-- <div class="overlay" v-if="sold">
                <div class="text-white Roboto-Medium">
                    <p>See this home's photos and sale price</p>
                    <p>Local laws require you to sign up to see sold details</p>
                    <button class="btn">Sign Up</button>
                </div>
                
            </div> -->
            <!-- <img  v-if="sold" src="../../assets/image/homepage/pic2.png" class="card-img-top" alt="..."> -->
             <img src="../../assets/image/homepage/pic2.png" class="card-img-top" alt="...">

            <div class="card-body">
                <div class="element1a">
                    <p class="Roboto-Medium text-color-1">3109-825 Church St</p>
                </div>
                <div class="element1 d-flex align-items-baseline justify-content-between">
                    <p class="text-color-1 Roboto-Medium" v-if="closest_home_data.soldPrice" :class="{soldclass : sold}">Sold ${{closest_home_data.soldPrice.toLocaleString('ja-JP')}}</p>
                    <p class="Roboto-Regular mb-0">{{gettime(closest_home_data.soldDate)}}</p>
                </div>
                <div class="element3">
                    <span class="text-color-2 Roboto-Regular" v-if="closest_home_data.listPrice">Listed ${{closest_home_data.listPrice.toLocaleString('ja-JP')}}</span>
                </div>
                <br>
                <div class="element5">
                        <table class="table w-100">
                            <thead style="border-bottom: 1px solid #dee2e6;" class="Roboto-Regular">
                                <tr>
                                <th scope="col"></th>
                                <th  scope="col" class="item5a btn Roboto-Regular text-white px-2" >${{numFormatter(closest_home_data.soldPrice)}}</th>
                                <th scope="col" colspan="2" class="item5b pt-0 Roboto-Regular text-center">
                                   <button class="btn px-3">
                                        <!-- <img src="../../assets/image/icon/blackhome.svg" style="width:22px;height:22px" alt="">  -->
                                        <span v-if="prices">${{numFormatter(prices.offer_price)}}</span>        
                                    </button>
                                       
                                        
                                </th>
                               
                                </tr>
                            </thead>
                            <tbody style="border-bottom: 1px solid #dee2e6;" class="Roboto-Regular">
                                <tr>
                                    <td>Beds</td>
                                    <td>{{closest_home_data.details.numBedrooms}}</td>
                                    <td>{{homedatafirst.bedrooms_bg}}</td>
                                    <td>
                                        <img v-if="homedatafirst.bedrooms_bg > closest_home_data.details.numBedrooms" src="../../assets/image/icon/arrowmore.svg" alt="">
                                        <img v-if="homedatafirst.bedrooms_bg < closest_home_data.details.numBedrooms" src="../../assets/image/icon/arrowless.svg" alt="">
                                        
                                    </td>
                                </tr>
                                 <tr>
                                    <td>Baths</td>
                                    <td>{{closest_home_data.details.numBathrooms}}</td>
                                    <td>{{homedatafirst.bathrooms_full}}</td>
                                    <td>
                                        <img v-if="homedatafirst.bathrooms_full > closest_home_data.details.numBathrooms" src="../../assets/image/icon/arrowmore.svg" alt="">
                                        <img v-if="homedatafirst.bathrooms_full < closest_home_data.details.numBathrooms" src="../../assets/image/icon/arrowless.svg" alt="">
                                    </td>
                                </tr>
                                 <tr>
                                    <td>Sqft</td>
                                    <td>~{{closest_home_data.details.sqft}}</td>
                                    <td>~{{homedatafirst.squfeet}}</td>
                                     <td>
                                        <img v-if="homedatafirst.squfeet > closest_home_data.details.sqft" src="../../assets/image/icon/arrowmore.svg" alt="">
                                        <img v-if="homedatafirst.squfeet < closest_home_data.details.sqft" src="../../assets/image/icon/arrowless.svg" alt="">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Parking</td>
                                    <td>{{closest_home_data.details.numParkingSpaces}}</td>
                                    <td>{{homedatafirst.parking_spaces}}</td>
                                     <td>
                                        <img v-if="homedatafirst.parking_spaces > closest_home_data.details.numParkingSpaces" src="../../assets/image/icon/arrowmore.svg" alt="">
                                        <img v-if="homedatafirst.parking_spaces < closest_home_data.details.numParkingSpaces" src="../../assets/image/icon/arrowless.svg" alt="">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Basement</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>
                                        <img v-if="homedatafirst.parking_spaces > closest_home_data.details.numParkingSpaces" src="../../assets/image/icon/arrowmore.svg" alt="">
                                        <img v-if="homedatafirst.parking_spaces < closest_home_data.details.numParkingSpaces" src="../../assets/image/icon/arrowless.svg" alt="">
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                </div>
                <div class="element6">
                    <button class="btn text-center w-100 Roboto-Regular" @click="openhomedetails()">Show more details</button>
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
import moment from 'moment';
export default {
    props:["instant_estimate_data","closest_home_data"],
    data:() =>({
        sold:true
    }),
    computed:{
        prices(){
             return this.instant_estimate_data.prices || {}
      },
      homedatafirst(){
          return this.$store.state.homedatafirst || {}
      },
    },
    methods:{
        gettime(item){
            return moment(item).endOf('day').fromNow();   
        },
        numFormatter(num) {
        if (num > 999 && num < 1000000) {
          return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
        } else if (num > 1000000) {
          return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
        } else if (num < 900) {
          return num; // if value < 1000, nothing to do
        }
    },
    openhomedetails(){
      let mls = this.closest_home_data.mlsNumber;
      let boardId = this.closest_home_data.boardId;
        let routeData = this.$router.resolve({name:'SoldHomeDetails',params:{mls:mls,boardId:boardId}});
        window.open(routeData.href, '_blank');
    }
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
.element1a p{
    font-size: 22px;
    font-weight: 600;
}
.element1 p:first-child{
    font-size: 24px;
    font-weight: 600;
}
.element1 p:nth-child(2){
    color: #707070;
    font-size: 16px;
}
.element3 .color2{
    color: #AAAAAA;
}
.element3 span{
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
.card .table th{
    border: 0;
}
.card .table td{
    border: 0;
}
.card .table tr td:nth-child(1),
.card .table tr td:nth-child(2){
    color: #707070;
}
.card .table tr td:nth-child(3),
.card .table tr td:nth-child(4){
    background: #EDF3F2;
    color: #232323;
}
.card .element5 .item5a{
    background: #C95055;
    font-size: 18px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
}
.card .element5 .item5b button{
    height: 44px;
    border-radius: 8px;
    border: 1px solid #707070;
    font-size: 22px;
}
.card .element6 button{
    border: 1px solid #FFB600;
    border-radius: 8px;
    color: #FFB600;
    font-size: 20px;
    font-weight: 600;
    transition: .2 ease-in-out;
}
.card .element6 button:hover{
    background: #FFB600;;
    color: #fff;
}
.card table tbody tr td img{
    width: 17px !important;
    height: 17px !important;
}
</style>
