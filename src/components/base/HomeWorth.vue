<template>
    <div class="homeworth">
        <div class="item1">
            <div class="item1a py-5">
                <div class="mt-5 item1b">
                    <p class="text-center p1 text-white DMSerifRegular">What’s My Home Worth?</p>
                    <p class="text-center p2 my-4 text-white Roboto-Regular">Start your search for your next home with our comprehensive, personalized home valuation.</p>
                    <div class="w-100 inputaddress">
                      <img src="../../assets/image/icon/Iconly-Light-Location.svg" alt="">
                      <div class="item1b2">
                        <span class="space"></span>
                        <input type="text" class="Roboto-Regular" placeholder="Enter your home address  ">
                      </div>
                      <div class="item1b3">
                        <button class="Roboto-Regular">Get An Estimate</button>
                      </div>
                  </div>
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
        .homeworth .item1 .item1a{
        width: 50%;
        margin: auto;
    }
    .homeworth .item1 .item1a .item1b{
        width: 75%;
        margin: auto;
    }
    .homeworth .item1 .item1a .p1{
        font-size: 40px;
    }
    .homeworth .item1 .item1a .p2{
        font-size: 22px;
    }
    .homeworth .item1 .item1a .inputaddress{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    border-radius: 6px;
    text-align: left;
    background: white;
    min-height: 48px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-color: transparent;
    box-shadow: rgb(0 0 0 / 1%) 0px 1.77104px 4.75968px,
    rgb(0 0 0 / 2%) 0px 4.25607px 11.4382px, 
    rgb(0 0 0 / 2%) 0px 8.01379px 21.5371px, rgb(0 0 0 / 2%) 0px 14.2952px 38.4185px, 
    rgb(0 0 0 / 3%) 0px 26.7377px 71.8575px, rgb(0 0 0 / 4%) 0px 64px 172px;
    padding: 10px;
    flex-direction: row;
    border-width: 1px;
    border-style: solid;
}
.homeworth .item1 .item1a .inputaddress img{
        flex-shrink: 0;
    align-self: center;
    margin-left: 12px;
    width: 30px;
height: 30px;
}
.homeworth .item1 .item1a .inputaddress .item1b2{
    display: inline-flex;
    width: 100%;
    flex-direction: column;
}
.homeworth .item1 .item1a .space{
        border: 0px;
    clip: rect(0px, 0px, 0px, 0px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0px;
    position: absolute;
    width: 1px;
    white-space: nowrap;
    overflow-wrap: normal;
}
.homeworth .item1 .item1a input{
    flex: 1 1 0%;
    border: none;
    padding-left: 12px;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    min-height: 48px;
    line-height: normal;
    box-shadow: none !important;
    border: 0 !important;
    outline: none;
}
.homeworth .item1 .item1a .item1b3{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-shrink: 0;
}
.homeworth .item1 .item1a button{
    background-color: rgb(255, 192, 67);
    color: #232323;
    height: 48px;
    border: 2px solid transparent;
    border-radius: 6px;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    padding: 9px 16px;
}
input:focus{
     outline: none;
}
@media only screen and (max-width: 600px){
    .homeworth .item1 .item1a{
        width: 100%;
        margin: auto;
    }
    .homeworth .item1 .item1a .item1b{
        width: 90%;
        margin: auto;
    }
    .homeworth .item1 .item1a .inputaddress img{
        width: 20px;
        height: 20px;
        margin-left: 4px;
    }
    .homeworth .item1 .item1a button{
        padding: 4px 8px;
        border: 0;
        font-size: 12px;
    }
    .homeworth .item1 .item1a input{
        padding-left: 6px;
    }
}
</style>