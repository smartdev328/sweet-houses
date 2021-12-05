<template>
    <div class="reporthome">
        <div class="container my-5">
            <div class="item1">
                <div class="item1a d-flex">
                    <div class="image">
                              <img src="../../assets/image/icon/searchreport.svg" alt="">
                    </div>
                    <p class="text-color-3 Roboto-Medium">Find more homes</p>
                </div>
                <div class="item1b">
                        <p class="text-color-1 Roboto-Medium mb-0">18 Merrywood Crescent</p>
                        <div class="text-color-2 Roboto-Regular d-flex justify-content-around">
                            <span>Millshaven</span>
                            <span class="pl-1 br-left">City Name</span>
                        </div>
                </div>
                <div class="item1c">
                        <b-button v-b-modal="'modal-share'" class="btn bg-transparent text-color-1 Roboto-Regular">
                            <img src="../../assets/image/icon/share.svg" alt="icon">
                             Share</b-button>
                             <b-modal
                              id="modal-share" 
                              size="lg"
                            header-bg-variant="white"
                            body-bg-variant="white"
                            footer-bg-variant="white">
                                <template #modal-title>
                                   <h4 class="text-color-1 Roboto-Medium">Share this Sweetly</h4> 
                            </template>
                            <div class="element1">
                                <div class="item1">
                                    <div class="item1a">
                                        <img @click="copyURL" class="pointer" src="../../assets/image/icon/noun_linked_4211117.svg" alt="">
                                        <form>
                                            <input ref="mylink" value="https://www.properly.ca/buy/home/view/RPJwXDrGTB61DB-zR_gwsQ/on/toronto" type="text" name="" id="">
                                        </form>
                                    </div>
                                    <div class="item1b">
                                        <button class="btn" @click="copyURL()">Copy Link</button>
                                    </div>
                                </div>
                                <div class="item2 mb-2">
                                    <div class="item2a">
                                        <button class="btn Roboto-Medium ">
                                            <img src="../../assets/image/icon/noun_messenger_3202205.svg" alt="">
                                            <span>Messenger</span>
                                        </button>
                                    </div>
                                    <div class="item2b">
                                        <button class="btn Roboto-Medium ">
                                            <img src="../../assets/image/icon/Group 13353.svg" alt="">
                                            <span>SMS</span>
                                        </button>
                                    </div>
                                    <div class="item2c">
                                        <button class="btn Roboto-Medium ">
                                            <img src="../../assets/image/icon/noun_Email_4292826.svg" alt="">
                                            <span>Email</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </b-modal>
                </div>
            </div>
            <div class="item2 p-4 mt-4 mb-2 rounded">
                <div class="item2a d-flex align-items-baseline">
                    <p class="text-white Roboto-Medium mr-2">Instant Estimate </p>
                    <img src="../../assets/image/icon/warning.svg" class="" alt="">
                </div>
                <div class="item3a text-white d-flex align-items-center">
                    <p class="Roboto-Medium mr-5 mb-0">$984,150</p>
                    <button class="btn btn-track Roboto-Regular px-2">
                        <img src="../../assets/image/icon/iconhome.svg" alt="">
                            Track
                    </button>
                </div>
            </div>
            <div class="item3 my-3  text-center">
                <div class="item3a p-3">
                    <p class="text-color-1 Roboto-Medium mb-0">$392,500</p>
                    <p class="text-color-1 Roboto-Medium mb-0">18, Merry wood Crescent, Sherwood Park </p>
                </div>
                <div class="item3b p-3 py-4">
                    <p class="text-color-1 Roboto-Medium">Sweet Sale: We buy it, improve it, and sell it, You Get More!</p>
                    <p class="text-color-1 Roboto-Regular">
This  Example Contemplates $10,000 Of Improvements and An Increase To The Sale Price Of
$30,000. You net The Full Resale Price Less Our Fee And The Cost Of Improvements.</p>
                </div>
                 <div class="item3c p-3 py-4">
                     <div class="item3c1">
                         <p class="text-center Roboto-Medium">Expected Sale Price</p>
                         <p class="text-center Roboto-Medium px-5">$422,500</p>
                     </div>
                    <div class="item3c2">
                         <p class="text-center Roboto-Medium">Sale Expected Net</p>
                         <p class="text-center Roboto-Medium px-5">$387,375</p>
                     </div>
                </div>
                <div class="item3d text-center  Roboto-Medium">
                    <p><span>Swift Sale:</span> We'll buy it at our discounted fee </p>
                </div>
                  <div class="item3c p-3">
                    <div class="item3c2">
                         <p class="text-center Roboto-Medium">Sale Expected Net</p>
                         <p class="text-center Roboto-Medium px-5">$353,500</p>
                     </div>
                </div>
                   <div class="item3d text-center  Roboto-Medium">
                    <p class="mb-0"><span>Traditional Sale:</span> We'll list it and represent you as your agent  </p>
                </div>
                   <div class="item3c p-3">
                     <div class="item3c1">
                         <p class="text-center Roboto-Medium">Expected Sale Price</p>
                         <p class="text-center Roboto-Medium px-5">$422,500</p>
                     </div>
                    <div class="item3c2">
                         <p class="text-center Roboto-Medium">Sale Expected Net</p>
                         <p class="text-center Roboto-Medium px-5">$387,375</p>
                     </div>
                </div>
            </div>

            <div class="item4 px-2 my-5">
                <p class="text-color-2 Roboto-Regular">Calculated 1 minute ago . Instant estimate doesn't factor in renovations, condition, or unique features.</p>
                <div class="item4a my-4 d-flex justify-content-between Roboto-Regular">
                        <p>
                            <span>4</span>
                            <span>bed</span>
                        </p>
                           <p>
                            <span>4</span>
                            <span>bath</span>
                        </p>
                           <p>
                            <span>900</span>
                            <span>sqft</span>
                        </p>
                           <p>
                            <span>3</span>
                            <span>parking</span>
                        </p>
                         <p>
                            <span>Townhouse</span>
                        </p>
                        <div class="element1">
                            <img src="../../assets/image/icon/edit.svg" alt="">
                            <span class="mb-0 ml-2">Edit home Info</span>
                        </div>
                </div>
            </div>

            <div class="item5 p-3 my-5">

                <div class="item5a">
                    <img src="../../assets/image/icon/progree.svg" class="w-100 h-100" alt="">
                </div>
                <div class="item5b">
                    <p class="Roboto-Medium text-color-1">Thinking of moving ?</p>
                    <p class="Roboto-Regular text-color-2">Kick off your sale by getting a more detailed estimate from one of our <br>
agents. Learn more about our <span> selling services.</span></p>
                </div>
                <div class="item5c text-center">
                    <button class="btn Roboto-Regular mb-2">Get personalized home caluation</button>
                    <p class="text-color-2  Roboto-Regular">It's free. There's no commitment.</p>
                </div>
            </div>
            <div class="item6">
                <p class="Roboto-Medium text-color-1">Comparable recent home sales</p>
                <p class="Roboto-Regular text-color-2">Actual selling prices for homes recently sod nearby are the best indication of market value. The most similar homes sold in the past 3
months are shown below. </p>
            </div>
            <div>
                <address-map></address-map>
            </div>
        </div>
    </div>
</template>
<script>
import AddressMap from './AddressMap.vue';
export default {
  components: { AddressMap },
  data(){
      return{
         
      }
  },
    methods:{
        copyURL(){
            var Url = this.$refs.mylink;
            Url.select();
            document.execCommand("copy");
        }
        
    }
}
</script>
<style lang="css" scoped>
.reporthome .item1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.reporthome .item1 .item1a .image{
    width: 22px;
    height: 22px;
}
.reporthome .item1 .item1a p{
        font-size: 22px;
}
.reporthome .item1 .item1b p{
    font-size: 24px;
}
.reporthome .item1 .item1b .br-left{
        border-left: 1px solid #70707085;
}
.reporthome .item1 .item1c button{
    border: 1px solid #70707080;
    border-radius: 6px;
    transition: ease-in .3s
}
.reporthome .item2{
    background: #00A19B;
}
.reporthome .item2 .item2a p{
    font-size: 28px;
}
.reporthome .item2 .item2a img{
    width: 22px;
    height: 22px;
}
.reporthome .item2 .item3a p{
    font-size: 58px;
    font-weight: 600;
}
.reporthome .item2 .item3a .btn-track{
    background: #FFB600;
    height: 45px;
    color: #fff;
    font-size: 22px;
}
.reporthome .item3{
    background: #EDF3F2;
    border: 3px solid #FFB600;
    border-radius: 6px;
    width: 60%;
    margin: auto;
}
.reporthome .item3 .item3a p:first-child{
    font-size: 28px;
    font-weight: 600;
}
.reporthome .item3 .item3a p:nth-child(2){
    font-size: 22px;
}
.reporthome .item3 .item3b{
    background: #B3C7C4;
}
.reporthome .item3 .item3b p:first-child{
    font-size: 20px;
    font-weight: 600;
}
.reporthome .item3 .item3b p:nth-child(2){
    font-size: 16px;
    color: #232323;
}
.reporthome .item3 .item3c .item3c1,
.reporthome .item3 .item3c .item3c2{
    display: grid;
    grid-template-columns: auto auto;
}
.reporthome .item3 .item3c .item3c1 p:first-child{
    background: #00A19B;
    font-size: 24px;
    color: #fff;
    border-radius: 8px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 2.4;
}
.reporthome .item3 .item3c .item3c1 p:nth-child(2){
    background: #FFFFFF;
     font-size: 27px;
     color: #232323;
     font-weight: 600;
     display: flex;
    justify-content: center;
    align-items: center;
    line-height: 2.4;
}
.reporthome .item3 .item3c .item3c2 p:first-child{
    background: #FFB600;
    font-size: 24px;
    color: #fff;
    border-radius: 8px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 2.4;
}
.reporthome .item3 .item3c .item3c2 p:nth-child(2){
    background: #FFFFFF;
     font-size: 27px;
     color: #232323;
     font-weight: 600;
     display: flex;
    justify-content: center;
    align-items: center;
    line-height: 2.4;
}
.reporthome .item3 .item3d{
    background: #B3C7C4;
    color: #232323;
    line-height: 2.5;
}
.reporthome .item3 .item3d p{
    font-size: 20px;
}
.reporthome .item3 .item3d p span{
    font-size: 26px;
}
.reporthome .item4 p:first-child{
    font-size: 20px;
}
.reporthome .item4 .item4a{
    width: 75%;
}
.reporthome .item4 .item4a p span:first-child{
    color: #232323;
    font-size: 18px;
    margin-right: 5px;
    font-weight: 600;
}
.reporthome .item4 .item4a p span:nth-child(2){
    color: #AAAAAA;
    font-size: 18px;
}
.reporthome .item4 .item4a .element1{
    color: #FFB600;
    font-size: 18px;
    margin-right: 5px;
    font-weight: 600;
    cursor: pointer;
}
.reporthome .item5{
    background: #EDF3F2;
    border-radius: 8px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 30px;
}
.reporthome .item5 .item5a{
    width: 110px;
    height: 110px;
}
.reporthome .item5 .item5b p:first-child{
    font-weight: 600;
     font-size: 26px;
}
.reporthome .item5 .item5b p span{
    color: #FFB600;
}
.reporthome .item5 .item5b p:nth-child(2){
    font-size: 18px;
}
.reporthome .item5 .item5c{
    align-self: center;
}
.reporthome .item5 .item5c button{
    background: #FFB600;
    color: #fff;
}
.reporthome .item6 p:first-child{
      font-weight: 600;
     font-size: 26px;
}
.reporthome .item6 p:nth-child(2){
     font-size: 18px;
}
</style>