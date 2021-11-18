<template>
    <div class="homenotfound">
        <div class="container">
            <div class="my-5">
                <div class="item1 text-center">
                    <p class="text-color-2 Roboto-Regular">1001 Place Jean-Paul-Riopelle . Leval</p>
                </div>
                <div class="item2 d-flex justify-content-center my-4">
                    <div class="image">
                        <img src="../../assets/image/icon/adresspin.svg" class="w-100 h-100" alt="icon">
                    </div>
                </div>
                <div class="item3 text-center">
                    <p class="text-color-1 Roboto-Medium">Sorry, we're not available in your area yet</p>
                </div>
                <div class="item4 text-center">
                    <p class="text-color-2 Roboto-Regular" >Get notified when Sweetly is available in Laval.</p>
                </div>
                <div class="item5">
                      <div class="w-100 inputaddress">
                      <div class="item1b2">
                        <span class="space"></span>
                        <input type="text" class="Roboto-Regular" placeholder="Enter your Email address">
                      </div>
                      <div class="item1b3">
                        <button class="Roboto-Regular">Continue </button>
                      </div>
                  </div>
                </div>
                <div class="item6 text-center Roboto-Regular my-3">
                    <p class="text-color-2 ">We currently offer brokerage service throughout Alberta, Saskatchewan, and
Manitoba.  We will entertain offers throughout Canada.</p><br>
                    <p class="text-color-2"> Questions? Email us at <span>info@sweetly.ca </span>  </p>

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
*{
    cursor: context-menu;
}
    .homenotfound .item1{
        font-size: 16px;
    }
    .homenotfound .image{
        width: 40px;
        height: 40px;
    }
    .homenotfound .item3 p{
        font-size: 32px;
    }
    .homenotfound .item5{
        width: 50%;
        margin: auto;
    }
    .homenotfound .item6{
        width: 50%;
        margin: auto;
        font-size: 16px;
    }
    .homenotfound .item6 span{
        color: #00A19B;
    }
    .homenotfound .item5 .inputaddress{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    border-radius: 6px;
    text-align: left;
    background: white;
    min-height: 38px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-color: transparent;
    padding: 6px 10px;
    flex-direction: row;
    border: 1px solid #70707073;
}
.homenotfound .item5 .inputaddress .item1b2{
    display: inline-flex;
    width: 100%;
    flex-direction: column;
}
.homenotfound .item5 .item1a .space{
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
.homenotfound .item5     input{
    flex: 1 1 0%;
    border: none;
    padding-left: 12px;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    min-height: 38px;
    line-height: normal;
    box-shadow: none !important;
    border: 0 !important;
    outline: none;
}
.homenotfound .item5  .item1b3{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-shrink: 0;
}
.homenotfound .item5  button{
    background-color: rgb(255, 192, 67);
    color: #fff;
    height: 38px;
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
</style>