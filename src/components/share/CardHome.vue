<template>
    <div>
        <div class="card">
            <div class="overlay" v-if="sold">
                <div class="text-white Roboto-Medium">
                    <p>See this home's photos and sale price</p>
                    <p>Local laws require yo to sign up to see sold details</p>
                    <button class="btn">Sign Up</button>
                </div>
                
            </div>
            <img  v-if="sold" src="../../assets/image/homepage/pic2.png" class="card-img-top" alt="...">
             <img v-if="!sold" src="../../assets/image/homepage/pic2.png" class="card-img-top" alt="...">

            <div class="card-body">
                <div class="element1 d-flex align-items-baseline justify-content-between">
                    <p class="text-color-1 Roboto-Medium" :class="{soldclass : sold}">$2,488,800</p>
                    <p class="Roboto-Regular">Listed 13 days ago</p>
                </div>
                <div class="element2 d-flex">
                    <div class="icon mr-2">
                        <img src="../../assets/image/icon/Group 13227.svg" class="w-100 h-100" alt="icon">
                    </div>
                    <p class="Roboto-Regular">Sweetly  Estimate Available</p>
                </div>
                <div class="element3">
                    <span class="text-color-1 Roboto-Regular">4</span>
                    <span class="mr-2 color2 Roboto-Regular">bd</span>
                    <span class="text-color-1 Roboto-Regular">3</span>
                    <span class="mr-2 color2 Roboto-Regular">ba</span>
                    <span class="text-color-1 Roboto-Medium">3,500-5,000</span>
                    <span class="mr-2 color2 Roboto-Medium">sqft</span>
                    <span class="text-color-1 Roboto-Regular">14</span>
                    <span class="color2 Roboto-Regular">prkg</span>
                </div>
                <div class="element5 mt-2">
                    <p class="Roboto-Regular">99 Balmoral Ave (Detached)</p>
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
export default {
    data:() =>({
        sold:false
    })
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
    font-size: 20px;
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
</style>