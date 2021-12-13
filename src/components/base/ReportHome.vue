<template>
    <div class="reporthome">
        <div class="container my-5">
            <div class="item1">
                <div class="item1a d-flex pointer"  @click="routrMap()">
                   <div class="image">
                              <img src="../../assets/image/icon/searchreport.svg" alt="">
                    </div>
                    <p class="mb-0 ml-2 Roboto-Medium">Find more homes</p>
              
                </div>
                <div class="item1b" >
                        <p class="text-color-1 Roboto-Medium mb-0" v-if="address_format">{{address_format[0]}}</p>
                        <div class="text-color-2 Roboto-Regular d-flex justify-content-around">
                            <span>{{address_format[1]}}</span>
                            <span class="pl-1 br-left" v-if="address_format[2]">{{address_format[2]}}</span>
                             <span class="pl-1 br-left" v-else>Canada</span>
                        </div>
                </div>
                <div class="item1c mt-3 mt-md-0">
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
                    <p class="text-white Roboto-Medium mr-2">Sweetly Estimate</p>
                    <img src="../../assets/image/icon/warning.svg" class="" alt="">
                </div>
                <div class="item3a text-white d-flex align-items-center">
                    <p class="Roboto-Medium mr-5 mb-0" v-if="prices">${{prices.offer_price.toLocaleString('ja-JP')}}</p>
                    <!-- <button class="btn btn-track Roboto-Regular px-2">
                        <img src="../../assets/image/icon/iconhome.svg" alt="">
                            Track
                    </button> -->
                </div>
            </div>
            <div class="item3 my-3  text-center">
                <div class="item3a p-3">
                    <p class="text-color-1 Roboto-Medium mb-0" v-if="prices">${{prices.offer_price.toLocaleString('ja-JP')}}</p>
                    <p class="text-color-1 Roboto-Medium mb-0" v-if="instant_estimate_data">{{instant_estimate_data.address_searched}} </p>
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
                         <p class="text-center Roboto-Medium px-5" v-if="prices">${{prices.sweet_price.toLocaleString('ja-JP')}}</p>
                     </div>
                    <div class="item3c2">
                         <p class="text-center Roboto-Medium">Sale Expected Net</p>
                         <p class="text-center Roboto-Medium px-5" v-if="prices">${{prices.sweet_net.toLocaleString('ja-JP')}}</p>
                     </div>
                </div>
                <div class="item3d text-center px-2 Roboto-Medium">
                    <p><span>Swift Sale:</span> We'll buy it at our discounted fee </p>
                </div>
                  <div class="item3c p-3">
                    <div class="item3c2">
                         <p class="text-center Roboto-Medium">Sale Expected Net</p>
                         <p class="text-center Roboto-Medium px-5" v-if="prices">${{prices.swift_net.toLocaleString('ja-JP')}}</p>
                     </div>
                </div>
                   <div class="item3d text-center  Roboto-Medium">
                    <p class="mb-0"><span>Traditional Sale:</span> We'll list it and represent you as your agent  </p>
                </div>
                   <div class="item3c p-3">
                     <div class="item3c1">
                         <p class="text-center Roboto-Medium">Expected Sale Price</p>
                         <p class="text-center Roboto-Medium px-5" v-if="prices">${{prices.trad_price.toLocaleString('ja-JP')}}</p>
                     </div>
                    <div class="item3c2">
                         <p class="text-center Roboto-Medium">Sale Expected Net</p>
                         <p class="text-center Roboto-Medium px-5" v-if="prices">${{prices.trad_net.toLocaleString('ja-JP')}}</p>
                     </div>
                </div>
            </div>

            <div class="item4 px-2 my-5">
                <p class="text-color-2 Roboto-Regular">
                    Sweetly Estimate doesn't factor in renovations, conditions, or unique features. Our algorithm detects the closest house that we have data for, the address used for this listing is 
                     "<span v-if="instant_estimate_data">{{instant_estimate_data.address_found}}</span>"
                     <code><br></code>
                    Calculated 1 minute ago . Sweetly Estimate doesn't factor in renovations, condition, or unique features.</p>
                <div class="item4a my-4 d-flex justify-content-between Roboto-Regular">
                        <p>
                            <span>{{homedatafirst.bedrooms_bg}}</span>
                            <span>bed</span>
                        </p>
                           <p>
                            <span>{{homedatafirst.bathrooms_full}}</span>
                            <span>bath</span>
                        </p>
                           <p>
                            <span>{{homedatafirst.squfeet}}</span>
                            <span>sqft</span>
                        </p>
                           <p>
                            <span>{{homedatafirst.parking_spaces}}</span>
                            <span>parking</span>
                        </p>
                         <p>
                            <span>{{homedatafirst.hometype}}</span>
                        </p>
                        <div class="element1" @click="editHome()">
                            <img src="../../assets/image/icon/edit.svg" alt="">
                            <span class="mb-0 ml-2">Edit home Info</span>
                        </div>
                </div>
            </div>

            <div class="item5 p-3 my-5">

                <div class="item5a dropdown">
                    <img  src="../../assets/image/icon/progree.svg" class="w-100 h-100 dropbtn" alt="">
                    <div class="dropdown-content">
                        <img  src="../../assets/image/icon/Component 61 – 1.svg" class="w-100 h-100" alt="">
                    </div>

                </div>
                <div class="item5b">
                    <p class="Roboto-Medium text-color-1">Thinking of moving ?</p>
                    <p class="Roboto-Regular text-color-2">Kick off your sale by getting a more detailed appraisal from one of our <br>
agents. Learn more about our <span> selling services.</span></p>
                </div>
                <div class="item5c text-center">
                    <button class="btn Roboto-Regular mb-2">Get a personalized home appraisal</button>
                    <p class="text-color-2  Roboto-Regular">It's free when you list with us</p>
                </div>
            </div>
            <div class="item6">
                <p class="Roboto-Medium text-color-1">Comparable recent home sales</p>
                <p class="Roboto-Regular text-color-2">Actual selling prices for homes recently sold nearby are the best indication of market value. The most similar homes sold in the past 3
months are shown below. </p>
            </div>
            <div class="my-5 pb-5">
                <address-map  :lat="latlong.lat" :lon="latlong.lng"></address-map>
            </div>
        <div class="item7 cards my-5">
            <div>
                <card-report></card-report>
            </div>
            <div>
                <card-report></card-report>
            </div>
            <div>
                <card-report></card-report>
            </div>
            
        </div>
        <!-- <div class="item8 my-4">
            <p class="Roboto-Medium text-color-1">Edmonton - Housing market update</p>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="image">
                        <img src="../../assets/image/chartA.svg" class="w-100 h-100" alt="">
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="image">
                        <img src="../../assets/image/chartB.svg" class="w-100 h-100" alt="">
                    </div>
                </div>
            </div>
            <P class="my-3 ml-2 text-color-1 Roboto-Regular">Edmonton, Alberta is the province's second largest municipality & capital.</P>
        </div> -->
        <div class="item9 my-5">
            <p v-if="Object.keys(similar_homes).length" class="mb-4">Similar homes for sale</p>
            <div class="cards" v-if="Object.keys(similar_homes).length">
            <div>
                <h3  class="text-left text-color-1 DMSerifRegular ">Closest Sqft</h3>
                <card-home :homedata="closest_sqft" v-if="Object.keys(closest_sqft).length"></card-home>
                <p v-else>We Can't Find any Closest Sqft</p>
            </div>
            <div>
                <h3 class="text-left text-color-1 DMSerifRegular ">Closest Location</h3>
                <card-home :homedata="closest_location" v-if="Object.keys(closest_location).length"></card-home>
                <p v-else>We Can't Find any Closest Location</p>
            </div>
            <div>
                <h3 class="text-left text-color-1 DMSerifRegular ">Closest Bedrooms</h3>
                <card-home :homedata="closest_bedrooms"  v-if="Object.keys(closest_bedrooms).length"></card-home>
                <p v-else>We Can't Find any Closest Bedroom</p>
            </div>
        </div>
        <p v-if="!Object.keys(similar_homes).length">We Can't Find any Similar homes</p>
        </div>
        <div class="item10">
            <div class="item10a">
                    <img src="../../assets/image/ico-home.svg"  alt="">
                    <span class="text-color-1 Roboto-Medium ml-2">Want to see more comparable listings?</span>
            </div>
            <div class="item10b">
                <button class="btn Roboto-Regular">Browse homes</button>
            </div>
        </div>
        <div class="item11 my-4 p-4 d-flex row">
            <div class="col-12 col-md-7">
                <div class="element11  pr-1 pr-md-5">
                    <div class="item5a dropdown">
                    <img  src="../../assets/image/icon/progree.svg" class="w-100 h-100 dropbtn" alt="">
                    <div class="dropdown-content">
                        <img  src="../../assets/image/icon/Component 61 – 1.svg" class="w-100 h-100" alt="">
                    </div>
                </div>
                <div class="item5b mr-1 mr-md-5"> 
                    <p class="text-color-1 Roboto-Medium">Thinking of moving ?</p>
                    <p class="Roboto-Regular">Sweetly helps you buy, move, then sell.</p>
                </div>
                </div>
                <div class="element1 pl-1 pl-md-5 mt-3">
                    <p class="Roboto-Regular">
                The next step is to get a detailed home estimate prepared by an 
            independent team of expert home evaluators. We'll also start
            crafting your custom moving plan to take advantage of Sweetly's
            unique approaches to buying and selling. Learn more

                    </p>
                    <button class="btn Roboto-Regular text-white">Get personalized home valuation</button>
                </div>

            </div>
            <div class="col-12 col-md-5 mt-4 mt-md-0">
                 <div class="h-75">
                          <iframe width="100%" class="rounded" height="100%" src="https://www.youtube.com/embed/HBITrtY5DaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="background:#EDF3F2;border-radius:8px" allowfullscreen></iframe>
                    </div>
                    <div class="element3 d-flex align-items-center">
                        <span class="DiwaniBentRegular">،،</span>
                        <span class="Roboto-Regular pt-3">" It was a huge relief to not have to live through
the showings. " -Emily Glynn- James</span>
                    </div>
            </div>
        </div>
        <div class="item12 my-3">
            <p class="text-color-1 DMSerifRegular text-capitalize">
                Help us improve this Sweetly  Estimate
            </p>
            <div class="item12a text-color-2 Roboto-Regular px-3"> 
                <div>
                   <textarea placeholder="What did you think of this estimate for your home?" class="p-3 w-100" name="" id="" rows="3"></textarea>
                </div>
                <button class="btn">Submit</button>
            </div>
        </div>
         <div class="my-5 disclaimer-content">
                <p class="Roboto-Regular">Data is supplied by Pillar 9™ MLS® System. Pillar 9™ is the owner of the copyright in its MLS® System. Data is deemed reliable but is not guaranteed accurate by Pillar 9™. The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by The Canadian Real Estate Association (CREA) and identify the quality of services provided by real estate professionals who are members of CREA. Used under license.</p>
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
  computed:{
      instant_estimate_data(){
          return this.$store.state.instant_estimate_data.prices_offer || {}
      },
      address_format(){
          return this.instant_estimate_data.address_found.split(',');
      },
      prices(){
             return this.instant_estimate_data.prices || {}
      },
      homedatafirst(){
          return this.$store.state.homedatafirst || {}
      },
      latlong(){
          return this.$store.state.latlong || {}
      },
      similar_homes(){
           return this.$store.state.instant_estimate_data.similar_homes
      },
      closest_sqft(){
          return this.$store.state.instant_estimate_data.similar_homes.closest_sqft || {}
      },
      closest_location(){
           return this.$store.state.instant_estimate_data.similar_homes.closest_location || {}
      },
      closest_bedrooms(){
          return this.$store.state.instant_estimate_data.similar_homes.closest_bedrooms || {}
      }
  },
    methods:{
        copyURL(){
            var Url = this.$refs.mylink;
            Url.select();
            document.execCommand("copy");
        },
        editHome(){
            this.$router.push({name:'EditHomeInof'})
        },
        routrMap(){
            this.$router.push({name:'MapHome'})
        }
        
    }
}
</script>
<style lang="css" scoped>
.searchBox {
    /* position: absolute;
    top: 50%;
    left: 50%; */
    /* transform:  translate(-50%,50%); */
    /* background: #2f3640; */
    height: 60px;
    border-radius: 40px;
    padding: 10px;

}

.searchBox:hover > .searchInput {
    width: 240px;
    padding: 0 6px;
}

.searchBox:hover > .searchButton {
  background: white;
  color : #2f3640;
}

.searchButton {
    color: white;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /* background: #2f3640; */
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    border: 0;
    background-color: #fff;
}

.searchInput {
    border:none;
    background: none;
    outline:none;
    float:right;
    padding: 0;
    color: #232323;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;
    background: #fff;
    border-radius: 12px;


}
.reporthome .item1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}
.reporthome .item1 .item1a .image{
    width: 22px;
    height: 22px;
}
.reporthome .item1 .item1a .image:focus .reporthome .item1 .item1a{
     border: 1px solid #70707059 !important;
    background: #f5f5f5;
}

.reporthome .item1 .item1a input:focus{
    outline: none;
}
/* .reporthome .item1 .item1a input:focus {
    border: 1px solid #70707059 !important;
    background: #f5f5f5;
    border-radius: 12px;
} */
.reporthome .item1 .item1a p{
        font-size: 22px;
        color: #434242;
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
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
  min-width: 340px;
  left: -18px;
}
.dropdown:hover .dropdown-content {display: block;}
.reporthome .cards {
    display: grid;
    grid-template-columns: auto auto auto ;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
}
.reporthome .item8 p:first-child,
.reporthome .item9 p:first-child{
     font-weight: 600;
     font-size: 28px;
}
.reporthome .item10{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
}
.reporthome .item10 .item10a span{
    font-size: 16px;
    font-weight: 600;
}
.reporthome .item10 .item10b button{
    border: 1px solid #FFB600;
    border-radius: 8px;
    color:#434242;
    height: 44px;
}
.reporthome .item10 .item10b button:hover{
    border: 1px solid #707070;
}
.reporthome .item11{
    background: #EDF3F2;
}
.reporthome .item11 .item5a{
    width: 110px;
    height: 110px;
}
.reporthome .item11 .item5b p:first-child{
    font-size: 26px;
    font-weight: 600;
}
.reporthome .item11 .item5b p:nth-child(2){
    color: #434242;
    font-size: 18px;
}
.reporthome .item11 .element1 p{
    color: #434242;
    font-size: 18px;
}
.reporthome .item11 .element1 button{
    background: #FFB600;
    border-radius: 8px;
    font-size: 18px;
    height: 48px;
}
.reporthome .item11 .element3 span:first-child{
    font-size: 60px;
    color: #232323;
}
.reporthome .item11 .element3 span:nth-child(2){
    color: #434242;
}
.reporthome .item12 p:first-child{
    font-weight: 600;
    font-size: 26px;
}
textarea{
    resize: none;
    border: 0;
}
textarea:focus{
    border: 0;
    outline: none;
}
.reporthome .item12 .item12a{
    border: 1px solid #70707059;
    display: flex;
    align-items: center;
    font-size: 18px;
}
.reporthome .item12 .item12a div{
    width: 90%;
}
.reporthome .item12 .item12a button{
    border: 1px solid #FFB600;
    border-radius: 8px;
    height: 44px;
    color: #FFB600;
}
.reporthome .item12 .item12a button:hover{
    border: 1px solid #707070;
    
}
.reporthome .item11 .element11{
    display: flex;
    justify-content: center;
    align-items: center;
}
.card div p{
    font-size: 18px;
}
.cards h3{
    font-weight: 600;
}
.disclaimer-content p{
    color: #434242;
}
@media only screen and (max-width: 600px){
    .reporthome .cards{
        grid-template-columns: auto ;
    }
    .reporthome .item3{
        width: 100%;
    }
    .reporthome .item2 .item3a p{
        font-size: 22px;
    }
    .reporthome .item3 .item3c .item3c1 p:first-child,
    .reporthome .item3 .item3c .item3c1 p:nth-child(2),
    .reporthome .item3 .item3c .item3c2 p:first-child,
    .reporthome .item3 .item3c .item3c2 p:nth-child(2){
        font-size: 14px;
    }
    .reporthome .item3 .item3d p{
        font-size: 18px;
    }
    .reporthome .item3 .item3d p span{
        font-size: 20px;
    }
    .reporthome .item4 p:first-child{
        font-size: 16px;
    }
    .reporthome .item4 .item4a{
        display: block !important;
    }
    .reporthome .item5{
         grid-template-columns: auto ;
    }
    .reporthome .item6 p:first-child {
        font-size: 20px;
    }
    .reporthome .item6 p:nth-child(2){
        font-size: 16px;
    }
    .reporthome .item10 .item10a span{
        font-weight: normal;
        font-size: 14px;
    }
    .reporthome .item10{
    flex-direction: column;
}
.reporthome .item11 .item5b p:first-child {
    font-size: 20px;
}
.reporthome .item12 p:first-child {
    font-size: 20px;
}
.reporthome .item12 .item12a{
    font-size: 14px;
}
.reporthome .item11 .element11{
    display: block;
}
.reporthome .item1 {
    flex-direction: column;
}

}
@media only screen and (min-width: 780){
.reporthome .cards {
    display: grid;
    grid-template-columns: auto auto ;

}
}
</style>
