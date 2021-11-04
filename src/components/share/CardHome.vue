<template>
    <div>
        <div class="card">
            <img src="../../assets/image/homepage/pic2.png" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="element1 d-flex align-items-baseline justify-content-between">
                    <p class="text-color-1 Roboto-Medium">$2,488,800</p>
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
    
}
</script>
<style scoped>
.card{
    border-radius: 12px;
}
    .element1 p:first-child{
        font-size: 20px;
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
</style>