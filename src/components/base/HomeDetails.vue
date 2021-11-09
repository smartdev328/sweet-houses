<template>
    <div class="homedetails">
        <div class="container">
            <div class="my-5">
                <div class="item1">
                    <div class="item1a">
                        <p class="Roboto-Medium">Find more homes</p>
                    </div>
                    <div class="item1b text-center">
                        <p class="text-color-1 mb-0 Roboto-Medium">1410 57 St Town </p>
                        <p class="mb-0">
                            <span class="Roboto-Regular">Yonge-St. Clair </span>
                            <span class="Roboto-Regular">City Name</span>
                        </p>
                    </div>
                    <div class="item1c">
                        <button class="btn text-color-1 Roboto-Regular">
                            <img src="../../assets/image/icon/Heart.svg" alt="icon">
                            Save</button>
                        <button class="btn text-color-1 Roboto-Regular">
                            <img src="../../assets/image/icon/share.svg" alt="icon">
                             Share</button>
                    </div>
                </div>
                <div class="item2 my-5">
                    <VueSlickCarousel v-bind="settings">
                        <div class="slideimg px-1">
                            <img src="../../assets/image/blog/hand.png" class="w-100 h-100" alt="image">
                        </div>
                         <div class=" slideimg px-1">
                            <img src="../../assets/image/blog/hand.png" class="w-100 h-100" alt="image">
                        </div>
                         <div class=" slideimg px-1">
                            <img src="../../assets/image/blog/hand.png" class="w-100 h-100" alt="image">
                        </div>
                         <div class="slideimg px-1">
                            <img src="../../assets/image/blog/hand.png" class="w-100 h-100" alt="image">
                        </div>
                    </VueSlickCarousel>
                </div>
                <div class="row">
                    <div class="col-12 col-md-9">
                        <div class="item3 d-flex align-items-center justify-content-between">
                            <p class="text-color-1 Roboto-Medium">$1,488,000</p>
                            <p class="Roboto-Regular">Listed 5 days ago</p>
                        </div>
                        <div class="item4 my-4 d-flex justify-content-between Roboto-Regular">
                            <p>
                                <span>4</span>
                                <span>bed</span>
                            </p>
                            <p>
                                <span>4</span>
                                <span>bath</span>
                            </p>
                             <p>
                                <span>-</span>
                                <span>sqft</span>
                            </p> 
                            <p>
                                <span>2</span>
                                <span>parking</span>
                            </p>   
                            <p>
                                <span>21  101</span>
                                <span>lot</span>
                            </p> 
                            <p>
                                <span>Townhouse</span>
                            </p> 
                        </div>
                        <div class="item5 bg-white shadow px-3 py-3 d-flex">
                            <div class="col-5 item5a Roboto-Regular">
                                <p>Sweetly Estimate</p>
                                <p>$ x,xxx,xxx</p>
                                <button class="btn d-flex align-items-center shadow-sm">
                                    <img src="../../assets/image/icon/report.svg" alt="icon">
                                    <p class="mb-0">See full report</p>
                                </button>
                            </div>
                            <div class="col-7 item5b Roboto-Regular">
                                <p class="p1">Based on market trends including 12 comparable home sales</p>
                                <div class="d-flex justify-content-between p2">
                                    <p class="p2a">41 Spruce St</p>
                                    <p class="p2b">Sold for <span class="Roboto-Medium">$ x,xxx,xxx</span> </p>
                                </div>
                                <div class="d-flex justify-content-between p2">
                                    <p class="p2a">543 C Parliament  St</p>
                                    <p class="p2b">Sold for <span class="Roboto-Medium">$ x,xxx,xxx</span> </p>
                                </div>
                                <div class="d-flex justify-content-between p2">
                                    <p class="p2a">+10 more comparable home sales</p>
                                </div>
                            </div>
                        </div>
                        <div class="item6 my-2 py-5">
                            <div class="mb-3 Roboto-Regular">
                            <span class="p1">19555 Shaws </span>
                            <span class="p2 px-2">Yonge-St. Clair </span>
                            <span class="p3 px-2">City Name</span>
                            </div>
                            <div>
                                <address-map></address-map>
                            </div>
                        </div>
                        <div class="item7 my-3">
                            <p class="DMSerifRegular text-color-1">Sweetly History</p>
                            <div class="item7a py-3 text-center mx-auto">
                                <div class="p1 d-flex align-items-center px-3  justify-content-around">
                                    <img src="../../assets/image/icon/lock.svg" alt="">
                                    <p class="mb-0 text-white Roboto-Regular">See what agents see</p>
                                </div>
                                <p class="p2 text-color-2 Roboto-Regular my-3">Access sold prices, more photos, and insights about this home</p>
                            </div>
                        </div>
                        <div class="item8 my-2 py-5">
                            <div class="d-flex justify-content-between w-50">
                            <div class="item8a">
                                <div class="d-flex align-items-center">
                                    <img src="../../assets/image/icon/arrowup.svg" alt="icon">
                                    <p class="mb-0 Roboto-Medium ml-3">$ x,xxx,xxx</p>
                                </div>
                                <p class="mb-0 Roboto-Regular p2">Compared to last sold</p>    
                            </div>
                            <div class="item8a">
                                <div class="d-flex align-items-center">
                                    <img src="../../assets/image/icon/arrowup.svg" alt="icon">
                                    <p class="mb-0 Roboto-Medium ml-3">x%</p>
                                </div>
                                <p class="mb-0 Roboto-Regular p2">Yearly appreciation </p>    
                            </div>
                            </div>
                        </div>
                        <div class="item9 my-2 py-5">
                            <div class="item9a new my-3 d-flex justify-content-between align-items-center">
                                <div class="ml-3 text-color-2 Roboto-Medium col-4">Now</div>
                                <div class="col-5">
                                    <p class="mb-0 Roboto-Medium">Listed for $649,900</p>
                                    <p class="mb-0 text-color-2 Roboto-Medium">8 days on market</p>
                                </div>
                                <div class="image col-3">
                                    <img src="../../assets/image/blog/hand.png" class="w-100 h-100" alt="image">
                                </div>
                            </div>
                            <div class="item9a sold my-3 d-flex justify-content-between align-items-center">
                                <div class="ml-3 text-color-2 Roboto-Medium col-4">8 month ago</div>
                                <div class="col-5">
                                    <p class="mb-0 Roboto-Medium">Listed for $649,900</p>
                                    <p class="mb-0 text-color-2 Roboto-Medium">8 days on market</p>
                                </div>
                                <div class="image col-3">
                                    <img src="../../assets/image/blog/hand.png" class="w-100 h-100" alt="image">
                                </div>
                            </div>
                            <div class="item9a listed my-3 d-flex justify-content-between align-items-center">
                                <div class="ml-3 text-color-2 Roboto-Medium col-4">2021</div>
                                <div class="col-5">
                                    <p class="mb-0 Roboto-Medium">Listed for $649,900</p>
                                    <p class="mb-0 text-color-2 Roboto-Medium">8 days on market</p>
                                </div>
                                <div class="image col-3">
                                    <img src="../../assets/image/blog/hand.png" class="w-100 h-100" alt="image">
                                </div>
                            </div>
                        </div>
                        <div class="item10 my-2 py-3">
                            <div class="item1">
                                <p class="text-color-1 DMSerifRegular">Commute Time</p>
                            </div>
                            <div class="item2 px-2 d-flex">
                                <div>
                                    <img src="../../assets/image/icon/commute.svg" alt="">
                                </div>
                                <div class="w-100 ml-2">
                                    <p class="mb-0 item2a Roboto-Regular">
                                        <span>19555 Shaws </span>
                                        <span>Yonge-St. Clair </span>
                                        <span class="px-2">City Name</span>
                                    </p>
                                    <div class="d-flex align-items-center justify-content-between w-100 item2b my-2">
                                        <div class="form-group mb-0 w-75">
                                            <input type="text" class="w-100 form-control form-control-lg shadow-sm" placeholder="Enter a location to view travel times">
                                        </div>
                                        <button class="btn">Show Travel Time</button>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input class="custom-control-input" id="package-area-0" type="checkbox" checked="checked" />
                                        <label class="custom-control-label" for="package-area-0">During peak traffic </label>  
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    data(){
        return{
             settings:{
            "dots": false,
            "focusOnSelect": true,
            "infinite": true,
            "speed": 500,
            "edgeFriction": 0.35,
            "slidesToShow": 3,
            "slidesToScroll": 1,
            "arrows":true,
             "responsive": [
            {
            "breakpoint": 1024,
            "settings": {
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "infinite": true,
            }
            },
            {
            "breakpoint": 600,
            "settings": {
                "slidesToShow": 2,
                "slidesToScroll": 1,
                "initialSlide": 1
            }
            },
            {
            "breakpoint": 480,
            "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1
            }
            }
        ]
            },
            checkstatus:null
        }
    },
    components:{
        VueSlickCarousel 
    }
}
</script>
<style scoped>
.homedetails .item1{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.homedetails .item1 .item1a p{
    font-size: 22px;
    color: #434242;
}
.homedetails .item1 .item1b{
    line-height: 1;
}
.homedetails .item1 .item1b p{
    font-size: 22px;
}
.homedetails .item1 .item1b p span{
    font-size: 16px;
    color: #707070;
}
.homedetails .item1 .item1c{
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 16px;
}
.homedetails .item1 .item1c button{
    border: 1px solid #70707080;
    border-radius: 6px;
    transition: ease-in .3s;
}
.homedetails .item1 .item1c button:hover{
    border: 1px solid #3f3e3e;
}
.slideimg{
    width: 420px;
    height: 320px;
}
.homedetails .item3{
    width: 50%;
}
.homedetails .item3 p:first-child{
    font-size: 30px;
}
.homedetails .item3 p:last-child{
    font-size: 18px;
    color: #707070;
}
.homedetails .item4{
    width: 75%;
}
.homedetails .item4 p span:first-child{
    color:#232323;
    font-size: 18px;
    margin-right: 5px;
}
.homedetails .item4 p span:nth-child(2){
    color:#AAAAAA;
    font-size: 18px;
}
.homedetails .item5{
    border-radius: 12px;
}
.homedetails .item5 .item5a p{
    color: #FFB600;
    font-size: 28px;
}
.homedetails .item5 .item5a button{
    border: 1px solid #FFB600;
    border-radius: 8px;
}
.homedetails .item5 .item5a button img{
    width: 22px;
    height: 22px;
    margin-right: 6px;
}
.homedetails .item5 .item5a button p{
    font-size: 1em;
    color: #434242;
}
.homedetails .item5 .item5b .p1{
    color: #434242;
    font-size: 15px;
}
.homedetails .item5 .item5b .p2 .p2a{
    color: #707070;
    font-size: 16px;
}
.homedetails .item5 .item5b .p2 .p2b{
    font-size: 16px;
    color: #434242;
}
.homedetails .item5 .item5b .p2 .p2b span{
    color: #C95055;
    font-size: 20px;
}
.homedetails .item6 .p1{
    font-size: 18px;
    color: #434242;
}
.homedetails .item6 .p2{
    font-size: 16px;
    color: #707070;
    border-right: 1px solid #707070;
}
.homedetails .item6 .p3{
    font-size: 16px;
    color: #707070;
}
.homedetails .item6{
    border-bottom: 2px solid #707070b6;
}
.homedetails .item7 p{
    font-size: 28px;
}
.homedetails .item7 .item7a{
    background: #EDF3F2;
}
.homedetails .item7 .item7a .p1{
    background: #FFB600;
    border-radius: 8px;
    width: 30%;
    margin: auto;
    height: 48px;
    cursor: pointer;
}
.homedetails .item7 .item7a .p1 img{
    width: 24px;
    height: 24px;
}
.homedetails .item7 .item7a .p1 p{
    font-size: 1em;
}
.homedetails .item7 .item7a .p2{
    font-size: 18px;
}
.homedetails .item8 .item8a img{
    width: 22px;
    height: 22px;
}
.homedetails .item8 .item8a p{
    color: #FFB600;
    font-size: 28px;
}
.homedetails .item8 .item8a .p2{
    font-size: 16px;
    color: #707070;
}
.homedetails .item9{
    border-bottom: 1px solid #7070706b;
}
.homedetails .item9 div:first-child{
    font-size: 24px;
}
.homedetails .item9 div:nth-child(2) p:first-child{
    color: #FFB600;
    font-size: 24px;
}
.homedetails .item9 .item9a .image{
    width: 120px;
    height: 90px;
}
.homedetails .item9 .item9a .image img{
    filter: blur(1px);
    border-radius: 12px;
}
.homedetails .item9  .new{
    border-left: 5px solid #FFB600;
    background: #F3F3F3;
}
.homedetails .item9  .sold{
    border-left: 5px solid #C95055;
}
.homedetails .item9  .listed {
    border-left: 5px solid #707070;
}
.homedetails .item10{
    border-bottom: 1px solid #7070706b;
}
.homedetails .item10 .item1{
    font-size: 28px;
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::after{
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
      outline: none;
    box-shadow: 0;
    }
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before{
    background-color: #FFB600;
    border: 0;
    outline: none;
    box-shadow: 0;
}
.custom-control-input:focus~.custom-control-label::before{
    box-shadow: none !important;
}
.custom-control-label::before{
        border: #70707069 solid 1px;
}
.homedetails .item10 .item2a span:first-child{
    color: #434242;
    font-size: 18px;
}
.homedetails .item10 .item2a span:nth-child(2){
    color: #707070;
    font-size: 16px;
}
.homedetails .item10 .item2a span:nth-child(3){
    color: #707070;
    font-size: 16px;
    border-left: 1px solid #707070;
}
.homedetails .item10 .item2b input{
    border: 1px solid #AAAAAA;
    border-radius: 8px;
}
.homedetails .item10 .item2b input::placeholder{
    color: #AAAAAA;
}

</style>