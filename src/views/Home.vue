<template>
  <div class="home">
    <header>
        <div class="py-5">
          <div class="item1 mt-4">
              <div class="item1a">
                <button @click="selected_menu = 'Sweet_Sale'" 
                :style="getclass('Sweet_Sale')">Sweet Sale 
                  <div :style="getline('Sweet_Sale')"></div>
                </button>
                <button @click="selected_menu = 'Swift_Sale'" 
                :style="getclass('Swift_Sale')">Swift Sale 
                <div :style="getline('Swift_Sale')"></div></button>
                <button @click="selected_menu = 'Equity_Advance'" 
                :style="getclass('Equity_Advance')">Equity Advance
                <div :style="getline('Equity_Advance')"></div></button>
                <button @click="selected_menu = 'Traditional_Real_Estate'"  
                :style="getclass('Traditional_Real_Estate')">Traditional Real Estate
                <div :style="getline('Traditional_Real_Estate')"></div></button>
              </div>
              <div class="item1b px-3 py-5 p-md-5">
                  <div class="text-center  text-white DMSerifRegular" :class="tab_visible('Sweet_Sale')">
                    <p>Get Maximum Value! Skip
                    Public Showings And Choose 
                    Your Moving Day</p>
                    <p>The SMARTEST way to Sold!</p>
                  </div> 
                  <div class="text-center  text-white DMSerifRegular" :class="tab_visible('Swift_Sale')">
                    <p>Your offer in minutes, SOLD in days</p>
                    <p>Market Value less Our Fee = SOLD! Hassle-free.</p>
                  </div>
                    <div class="text-center  text-white DMSerifRegular" :class="tab_visible('Equity_Advance')">
                    <p>Your Home Equity, Before Your First Showing! </p>
                  </div>
                  <div class="text-center  text-white DMSerifRegular" :class="tab_visible('Traditional_Real_Estate')">
                    <p>Sweetened Listing, With Muscle!</p>
                    <p>Compare our services.</p>
                  </div>

                  <div class="w-100 inputaddress">
                      <img src="../assets/image/icon/Iconly-Light-Location.svg" alt="">
                      <div class="item1b2">
                        <span class="space"></span>
                        <input type="text" placeholder="Enter your home address  ">
                      </div>
                      <div class="item1b3">
                        <button>Get started</button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </header>
    <div class="my-5">
        <div class="container" :class="tab_visible('Sweet_Sale')">
          <sweet-sale></sweet-sale>
        </div>
         <div class="container" :class="tab_visible('Swift_Sale')">
          <swift-sale></swift-sale>
        </div>
         <div class="container" :class="tab_visible('Equity_Advance')">
          <equity-advance></equity-advance>
        </div>
         <div :class="tab_visible('Traditional_Real_Estate')">
          <traditional-realestate></traditional-realestate>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src



export default {
  name: 'Home',
  data(){
    return{
      selected_menu:"Sweet_Sale"
    }
  },
  components: {
    
  },
  methods:{
    getclass(tab) {
      if (tab == this.selected_menu) {
        return "background:#00A19B;";
      }
    },
     getline(tab){
        if (tab == this.selected_menu) {
      return " background: rgb(255, 182, 0);margin-bottom: 0px;  position: absolute; bottom: 0px;    width: 50%;   height: 5px;"
}
    },
      tab_visible(tab) {
      if (tab == this.selected_menu) {
        return "d-block";
      } else {
        return "d-none";
      }
    },
      }
  
}
</script>
<style scoped>
.home .item1{
    margin: 0 auto;
    width: 50%;
  }
 .home .item1a{
  /*   width: 100vw;
    max-width: 311px; */
    margin: 0px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }
 .home .item1a button{
        background: #04847F;
    color: white;
        border: none;
    border-radius: 12px 12px 0px 0px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 10px;
    position: relative;
    font-family: 'DMSerifRegular' !important;
  }
  .item1 .item1b{
    background: #00A19B;
        border-radius: 0px 0px 12px 12px;
    height: auto;
 /*    max-width: 678px; */
    margin: 0px;
        display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
        display: flex;
    flex-direction: column;
  }
 .home .item1 .item1b p:first-child{
    font-size: 36px;
  }
  .home .item1 .item1b p:nth-child(2){
    font-size: 20px;
  }
  .item1 .item1b .inputaddress{
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
  .item1 .item1b .inputaddress img{
        flex-shrink: 0;
    align-self: center;
    margin-left: 12px;
    width: 30px;
  height: 30px;
  }
  .item1 .item1b .inputaddress .item1b2{
    display: inline-flex;
    width: 100%;
    flex-direction: column;
  }
  .item1b .space{
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
  .item1b input{
    flex: 1 1 0%;
    border: none;
    padding-left: 12px;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    min-height: 48px;
    line-height: normal;
    box-shadow: none !important;
    outline: none;
  }
  .item1b .item1b3{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-shrink: 0;
  }
  .item1b .item1b3 button{
    background-color: rgb(255, 192, 67);
    color: #fff;
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
 @media only screen and (max-width: 600px){
  .home .item1{
    width: 100%;
  }
  .home .item1 .item1b p{
    font-size: 20px;
  }
  .item1 .item1b .inputaddress img{
    margin-left: 4px;
    width: 20px;
    height: 20px;
  }
  .item1b .item1b3 button{
    border: 1px solid transparent;
    border-radius: 6px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    padding: 9px 10px;
  } 
} 
</style>
