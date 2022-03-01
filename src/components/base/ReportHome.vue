<template>
  <div class="reporthome">
    <div class="container my-5">
      <div class="item1">
        <div class="item1a d-flex pointer" @click="routrMap()">

          <p class=" ml-2 Roboto-Medium"> <span class="text-dark">For Customer </span> {{ contactinput.fullname }}</p>
        </div>
        <div class="item1d">
          <p class="mb-0 Roboto-Medium text-dark">
            Based only on publicly available data, and without considering recent improvements, maintenance,
            or other factors that will effect the value of any property our PRELIMINARY understanding of value is:
          </p>
        </div>
        <div class="item1b text-right">
          <p class="text-color-1 Roboto-Medium mb-0" v-if="address_format">
           <span v-if="address_format[0]">{{ address_format[0] }}</span>
            <span v-if="address_format[1]">{{ address_format[1] }}</span>
            <span v-if="address_format[2]">{{ address_format[2] }}</span>
            <span v-if="address_format[3]">{{ address_format[3] }}</span>
          </p>

        </div>
        <div class="item1c mt-3 mt-md-0 item1a text-right">
          <p class="Roboto-Medium"> <span class="text-dark">Preliminary Valuation:</span> ${{ prices.offer_price.toLocaleString("ja-JP") }}</p>
        </div>
        <div class="item1d">
          <p class="text-dark Roboto-Medium">
            To establish an accurate and fair value for your home, we use an appraisal as provided by a licensed Appraiser. The eventual asking (listing price) will be set by you.
          </p>
        </div>
      </div>
      <div class="item3">
          <div class="item3a">
            <h1>FOUR WAYS TO<br> SELL YOUR HOME</h1>
          </div>
      </div>
      <div class="boxs">
        <div class="box card pb-5">
          <p class="title DMSerifRegular">Swift Sale</p>
          <p class="content Roboto-Medium mb-5">
            SOLD! The minute you’re ready. We pay 90% of appraised value (1 payment) on whatever day you choose to move (possession day).
            You skip public showings and choose your own moving day. This product is perfect for anyone who doesn’t want to tolerate public showings,
            and is not buying another home in Canada at this time with any Sweetly referred area professional.
          </p>
        <footer class="footerbox DMSerifRegular card-footer">
          <p v-if="prices">Sample Sale Price:<span>${{ prices.offer_price.toLocaleString("ja-JP") }}</span> </p>
          <p v-if="prices">Estimated Net:<span>${{ prices.swift_net.toLocaleString("ja-JP") }}</span> </p>
        </footer>
        </div>
        <div class="box card pb-5">
          <p class="title DMSerifRegular">Swift Sale <span class="text-color-4">PLUS</span> </p>
          <p class="content Roboto-Medium mb-5">
            The smartest, and easiest way to sell. We buy your home in 2 payments. Get 90% of current value on the moving day
            you choose. We'll manage an MLS listing for the property at an asking price that you agree to and resell the property, we keep our fee (7/3*) then pay you the FULL balance of the actual resale price - even if it's more than the appraisal! Skip all the prep, showings, interruptions, home fix-ups (seller pains). Just choose the day you want to move. You net the same money you would if you listed and sold traditionally, except you get to choose your own moving day and
            skip all the showings and seller pains. This product is available to those who sell and buy with Sweetly.
          </p>
          <div class="footerbox DMSerifRegular card-footer">
            <p v-if="prices">Sample Sale Price:<span>${{ prices.trad_price.toLocaleString("ja-JP") }}</span> </p>
            <p v-if="prices">Estimated Net:<span>${{ prices.trad_net.toLocaleString("ja-JP") }}</span> </p>
          </div>
        </div>
        <div class="box card pb-5">
          <p class="title DMSerifRegular">Sweet Sale</p>
          <p class="content Roboto-Medium mb-5">
            If you feel that your home might sell for more with the right improvements,
            then this product is perfect for you. You skip public showings, home prep,
            fix-ups, and choose your own moving day. We’ll recommend and even make the improvements with your permission –designed to
            increase the resale price. We pay 75% of appraisal on the moving day you choose, we’ll invest in the right improvements and
            resell the property for all it’s worth! You get the full balance of the resale price less our fee and the cost of improvements.
            Our fee is 7/3 plus 2% of actual resale price.
            <code><br></code>
            Sample increased Sale Price: <span v-if="prices"> ${{ prices.sweet_price.toLocaleString("ja-JP") }}</span> – based on $10,000 improvements and a sale price increase of $30,000.
          </p>
          <div class="footerbox DMSerifRegular card-footer">
            <p v-if="prices">Estimated Net:<span>${{ prices.sweet_net.toLocaleString("ja-JP") }}</span> </p>
          </div>
        </div>
        <div class="box card pb-5">
          <p class="title DMSerifRegular">Traditional Listing <br> <span class="text-color-4">With Confidence</span> </p>
          <p class="content Roboto-Medium mb-5">
            If you want to test the open market, or have a home in a rural setting (where our Sweet Sale, Swift Sale(s) don’t apply) then this product is right for you. You’ll work directly with a local expert Realtor to guide you through the entire process from prep to Sold. Listing with Sweetly also comes with access to our renovation allowance that you can use to make any last-minute improvements. You’ll also have the flexibility to move to any of our other products
            if you’re not getting the results you hope for.
          </p>
          <div class="footerbox DMSerifRegular card-footer">
            <p v-if="prices">Sample Sale Price:<span>${{ prices.trad_price.toLocaleString("ja-JP") }}</span> </p>
            <p v-if="prices">Estimated Net:<span>${{ prices.trad_net.toLocaleString("ja-JP") }}</span> </p>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <p>*7/3 means 7% of the first $100,000 plus 3% on the balance of the sale price</p>
        <p>Sweetly estimate doesn't factor in renovations, conditions, or unique features. Our algorithm detect the closest house that we have data for, the
          address used for this listing is )Address</p>
      </div>



      <div class="item4 px-2 my-5">
        <p class="text-color-2 Roboto-Regular">
          Sweetly Estimate doesn't factor in renovations, conditions, or unique
          features. Our algorithm detects the closest house that we have data
          for, the address used for this listing is "<span
            v-if="instant_estimate_data"
            >{{ instant_estimate_data.address_found }}</span
          >"
          <code><br /></code>
          Calculated 1 minute ago . Sweetly Estimate doesn't factor in
          renovations, condition, or unique features.
        </p>
        <div class="item4a my-4 d-flex justify-content-between Roboto-Regular">
          <p>
            <span>{{ homedatafirst.bedrooms_ag }}</span>
            <span>bed</span>
          </p>
          <p>
            <span>{{ homedatafirst.bathrooms_full }}</span>
            <span>bath</span>
          </p>
          <p>
            <span>{{ homedatafirst.squfeet }}</span>
            <span>sqft</span>
          </p>
          <p>
            <span>{{ homedatafirst.garage_spaces }}</span>
            <span>parking</span>
          </p>
          <p>
            <span>{{ homedatafirst.hometype }}</span>
          </p>
          <p></p>
        </div>
      </div>

<!--      <div class="item5 p-3 my-5">-->
<!--        <div class="item5a dropdown">-->
<!--          <img-->
<!--            src="../../assets/image/icon/progree.svg"-->
<!--            class="w-100 h-100 dropbtn"-->
<!--            alt=""-->
<!--          />-->
<!--          <div class="dropdown-content">-->
<!--            <img-->
<!--              src="../../assets/image/icon/Component 61 – 1.svg"-->
<!--              class="w-100 h-100"-->
<!--              alt=""-->
<!--            />-->
<!--          </div>-->
<!--        </div>-->
<!--        &lt;!&ndash; <div class="item5b">-->
<!--          <p class="Roboto-Medium text-color-1">Thinking of moving ?</p>-->
<!--          <p class="Roboto-Regular text-color-2">-->
<!--            Kick off your sale by getting a more detailed appraisal from one of-->
<!--            our <br />-->
<!--            agents. Learn more about our <span> selling services.</span>-->
<!--          </p>-->
<!--        </div> &ndash;&gt;-->
<!--        <div class="item5c text-center">-->
<!--          <button class="btn Roboto-Regular mb-2">-->
<!--            Get a personalized home appraisal-->
<!--          </button>-->
<!--          <p class="text-color-2  Roboto-Regular">-->
<!--            It's free when you list with us-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->
      <div class="item6">
        <p class="Roboto-Medium text-color-1">Comparable recent home sales</p>
        <p class="Roboto-Regular text-color-2">
          Actual selling prices for homes recently sold nearby are the best
          indication of market value. The most similar homes sold in the past 3
          months are shown below.
        </p>
      </div>
      <div class="my-5 pb-5">
        <div style="display: block; width:auto;height:400px">
          <GmapMap
              :center="{lat:latlong.lat, lng:latlong.lng}"
              :zoom="zoom"
              ref="map"
              map-type-id="terrain"
              draggable=false
              :options="options"
              style="width: 100%; height: 360px"
          >
            <GmapMarker
                v-for="m in similar_homes"
                :key="m.id"
                :position="getpos(m.map)"
                :clickable="true"
                :draggable="false"
                :icon="icon"
                @click="center=m.position"
            />
          </GmapMap>
        </div>
      </div>
      <div class="item7 cards my-5">
        <div>
          <card-report
              @SignUp="SignUp"
            :instant_estimate_data="instant_estimate_data"
            :closest_home_data="closest_sqftcom"
            v-if="Object.keys(closest_sqftcom).length"
          ></card-report>
          <h4 v-else class="text-color-1 DMSerifRegular">We Can't Find any Closest Sqft</h4>
        </div>
        <div>
          <card-report
            :instant_estimate_data="instant_estimate_data"
            :closest_home_data="closest_locationcom"
            v-if="Object.keys(closest_locationcom).length"
          ></card-report>
          <h4 v-else  class="text-color-1 DMSerifRegular">We Can't Find any Closest Location</h4>
        </div>
        <div>
          <card-report
            :instant_estimate_data="instant_estimate_data"
            :closest_home_data="closest_bedroomscom"
            v-if="Object.keys(closest_bedroomscom).length"
          ></card-report>
          <h4 v-else class="text-color-1 DMSerifRegular">We Can't Find any Closest Bedrooms</h4>
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
        <p v-if="Object.keys(similar_homes).length" class="mb-4">
          Similar homes for sale
        </p>
        <div class="cards" v-if="Object.keys(similar_homes).length">
          <div>
            <h3 class="text-left text-color-1 DMSerifRegular ">Closest Sqft</h3>
            <card-list
              :homedata="closest_sqft"
              v-if="Object.keys(closest_sqft).length"
            ></card-list>
            <p v-else>We Can't Find any Closest Sqft</p>
          </div>
          <div>
            <h3 class="text-left text-color-1 DMSerifRegular ">
              Closest Location
            </h3>
            <card-list
              :homedata="closest_location"
              v-if="Object.keys(closest_location).length"
            ></card-list>
            <p v-else>We Can't Find any Closest Location</p>
          </div>
          <div>
            <h3 class="text-left text-color-1 DMSerifRegular ">
              Closest Bedrooms
            </h3>
            <card-list
              :homedata="closest_bedrooms"
              v-if="Object.keys(closest_bedrooms).length"
            ></card-list>
            <p v-else>We Can't Find any Closest Bedroom's</p>
          </div>
        </div>
        <p v-if="!Object.keys(similar_homes).length">
          We Can't Find any Similar homes
        </p>
      </div>
      <div class="item10">
        <div class="item10a">
          <img src="../../assets/image/ico-home.svg" alt="" />
          <span class="text-color-1 Roboto-Medium ml-2"
            >Want to see more comparable listings?</span
          >
        </div>
        <div class="item10b">
          <button class="btn Roboto-Regular">Browse homes</button>
        </div>
      </div>
      <div class="item11 my-4 p-4 d-flex row">
        <div class="col-12 col-md-7">
          <div class="element11  pr-1 pr-md-5">
            <div class="item5a dropdown">
              <img
                src="../../assets/image/icon/progree.svg"
                class="w-100 h-100 dropbtn"
                alt=""
              />
              <div class="dropdown-content">
                <img
                  src="../../assets/image/icon/Component 61 – 1.svg"
                  class="w-100 h-100"
                  alt=""
                />
              </div>
            </div>
            <div class="item5b mr-1 mr-md-5">
              <p class="text-color-1 Roboto-Medium">Next Steps?</p>
              <!-- <p class="Roboto-Regular">
                Sweetly helps you buy, move, then sell.
              </p> -->
            </div>
          </div>
          <div class="element1 pl-1 pl-md-5 mt-3">
            <p class="Roboto-Regular">
              The next step is to get a licenced appraiser to view your home and
              set the final price. Once the price has been set we can move forward
              with the Sweetly product of your choice.
            </p>
            <button class="btn Roboto-Regular text-white" @click="routeToAppraisal()">
              Book an Appraisal
            </button>
          </div>
        </div>
        <div class="col-12 col-md-5 mt-4 mt-md-0">
          <div class="h-75">
            <iframe
              width="100%"
              class="rounded"
              height="100%"
              src="https://www.youtube.com/embed/NtPMe0nhq2w"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style="background:#EDF3F2;border-radius:8px"
              allowfullscreen
            ></iframe>
          </div>
          <div class="element3 d-flex align-items-center">
            <span class="DiwaniBentRegular">،،</span>
            <span class="Roboto-Regular pt-3"
              >" We got the price we needed for our house and moved into our dream home.
              " -Laura CS</span
            > 
          </div>
        </div>
      </div>
      <div class="item12 my-3">
        <p class="text-color-1 DMSerifRegular text-capitalize">
          Help us improve this Sweetly Estimate
        </p>
        <div class="item12a text-color-2 Roboto-Regular px-3">
          <div>
            <textarea
              placeholder="Think something was missed in the preliminary evaluation? Please let us know here"
              class="p-3 w-100"
              name=""
              id=""
              rows="3"
            ></textarea>
          </div>
          <button class="btn">Submit</button>
        </div>
      </div>
      <div class="my-5 disclaimer-content">
        <p class="Roboto-Regular">
         <!-- disclimer -->
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { gmapApi } from 'vue2-google-maps';
export default {
  components: {   },
  data() {
    return {
           copied:false,
      errsms:false,
      zoom:14,
      options:{
        zoomControl: false,
        mapTypeControl: false,
        scrollwheel:false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: false,
        disableDefaultUi: false,
        draggable:false
      },
      icon:require('../../assets/image/icon/markerhome.svg')
    };
  },
  computed: {
    google: gmapApi,
      fullPath() {
      return window.location.href;
    },
    contactinput(){
      return this.$store.state.contactinput || {}
    },
    instant_estimate_data() {
      return this.$store.state.instant_estimate_data.prices_offer || {};
    },
    address_format() {
      return this.instant_estimate_data.address_searched.split(",");
    },
    prices() {
      return this.instant_estimate_data.prices || {};
    },
    homedatafirst() {
      return this.$store.state.homedatafirst || {};
    },
    latlong() {
      return this.$store.state.latlong || {};
    },
    similar_homes() {
      return this.$store.state.instant_estimate_data.similar_homes;
    },
    closest_sqft() {
      return (
        this.$store.state.instant_estimate_data.similar_homes.closest_sqft || {}
      );
    },
    closest_location() {
      return (
        this.$store.state.instant_estimate_data.similar_homes
          .closest_location || {}
      );
    },
    closest_bedrooms() {
      return (
        this.$store.state.instant_estimate_data.similar_homes
          .closest_bedrooms || {}
      );
    },
    comp_homes() {
      return this.$store.state.instant_estimate_data.comp_homes;
    },
    closest_sqftcom() {
      return (
        this.$store.state.instant_estimate_data.comp_homes.closest_sqft || {}
      );
    },
    closest_locationcom() {
      return (
        this.$store.state.instant_estimate_data.comp_homes.closest_location ||
        {}
      );
    },
    closest_bedroomscom() {
      return (
        this.$store.state.instant_estimate_data.comp_homes.closest_bedroom ||
        {}
      );
    },
    latlng() {
        return [
          this.closest_sqftcom.map,
          this.closest_locationcom.map,
          this.closest_bedroomscom.map
        ]
    }
  },
  methods: {
    routeToAppraisal(){
      let routeData = this.$router.resolve({name:'appraisal'});
        window.open(routeData.href, '_blank');
    },
    getpos(item) {
      if(item){
        return {
          lat: item.latitude * 1,
          lng: item.longitude * 1,
        };
      }

    },
    open(e) {
      console.log(e);
    },
    change(e) {
      console.log(e);
    },
    close(e) {
      console.log(e);
    },
    copyURL() {
      var Url = this.$refs.mylink;
      Url.select();
      document.execCommand("copy");
    },
    routrMap() {
      this.$router.push({ name: "MapHome" });
    },
  },
};
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
  color: #2f3640;
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
  border: none;
  background: none;
  outline: none;
  float: right;
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
  /*display: flex;*/
  /*justify-content: space-between;*/
  /*align-items: center;*/
  /*flex-direction: row;*/
}
.reporthome .item1 .item1a .image {
  width: 22px;
  height: 22px;
} 
.reporthome .item1 .item1a .image:focus .reporthome .item1 .item1a {
  border: 1px solid #70707059 !important;
  background: #f5f5f5;
}

.reporthome .item1 .item1a input:focus {
  outline: none;
}
.reporthome .item3 .item3a h1 {
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#00a19b !important;
  font-family: 'DM Serif Display', "Playfair Display",serif;
}
.reporthome .item3 .item3a h1:before,
h1:after {
  background-color:  #FFB600;;
  content: "";
  display: inline-block;
  height: 6px;
  position: relative;
  vertical-align: middle;
  width: 50%;
  border-radius: 8px;
}
.reporthome .item3 .item3a h1:before {
  right: 0.5em;
  margin-left: -50%;
}
.reporthome .item3 .item3a h1:after {
  left: 0.5em;
  margin-right: -50%;
}
/* .reporthome .item1 .item1a input:focus {
    border: 1px solid #70707059 !important;
    background: #f5f5f5;
    border-radius: 12px;
} */
.reporthome .item1 .item1b p{
  font-size: 24px;
  color: #00a19b;
}
.reporthome .item1 .item1a p ,
.reporthome .item1 .item1d p{
  font-size: 24px;
  color: #00a19b;
}
.reporthome .item1 .item1d p{
  font-size: 24px;
}
.reporthome .item1 .item1b p {
  font-size: 24px;
}
.reporthome .item1 .item1b .br-left {
  border-left: 1px solid #70707085;
}
.reporthome .item1 .item1c button {
  border: 1px solid #70707080;
  border-radius: 6px;
  transition: ease-in 0.3s;
}
.reporthome .item2 {
  background: #00a19b;
}
.reporthome .item2 .item2a p {
  font-size: 28px;
}
.reporthome .item2 .item2a img {
  width: 22px;
  height: 22px;
}
.reporthome .item2 .item3a p {
  font-size: 58px;
  font-weight: 600;
}
.reporthome .item2 .item3a .btn-track {
  background: #ffb600;
  height: 45px;
  color: #fff;
  font-size: 22px;
}
.reporthome .boxs {
  display: grid;
  grid-template-columns: auto auto ;
  gap: 40px;
}
.reporthome .boxs .box{
  padding: 20px;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
  border-radius: 6px;
  padding: 20px;
}
.reporthome .boxs .box .title{
  font-size: 36px;
}
.reporthome .boxs .box .content{
  font-size: 20px;
}
.reporthome .boxs .box .footerbox{
  /*position: absolute;*/
  /*bottom: 16px;*/
  /*left: 50%;*/
  /*right: 50%;*/
}
.reporthome .boxs .box .footerbox p{
  font-size: 20px;
}
.reporthome .boxs .box .footerbox span{
  font-size: 20px;
  color: #00a19b;
}
.card-footer {
  background: transparent !important;
  border-top: unset !important;
  height: 100px;
  width:100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
.reporthome .item4 p:first-child {
  font-size: 20px;
}
.reporthome .item4 .item4a {
  width: 75%;
}
.reporthome .item4 .item4a p span:first-child {
  color: #232323;
  font-size: 18px;
  margin-right: 5px;
  font-weight: 600;
}
.reporthome .item4 .item4a p span:nth-child(2) {
  color: #aaaaaa;
  font-size: 18px;
}
.reporthome .item4 .item4a .element1 {
  color: #ffb600;
  font-size: 18px;
  margin-right: 5px;
  font-weight: 600;
  cursor: pointer;
}
.reporthome .item5 {
  background: #edf3f2;
  border-radius: 8px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 30px;
}
.reporthome .item5 .item5a {
  width: 110px;
  height: 110px;
}
.reporthome .item5 .item5b p:first-child {
  font-weight: 600;
  font-size: 26px;
}
.reporthome .item5 .item5b p span {
  color: #ffb600;
}
.reporthome .item5 .item5b p:nth-child(2) {
  font-size: 18px;
}
.reporthome .item5 .item5c {
  align-self: center;
}
.reporthome .item5 .item5c button {
  background: #ffb600;
  color: #fff;
}
.reporthome .item6 p:first-child {
  font-weight: 600;
  font-size: 26px;
}
.reporthome .item6 p:nth-child(2) {
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
.dropdown:hover .dropdown-content {
  display: block;
}
.reporthome .cards {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
}
.reporthome .item8 p:first-child,
.reporthome .item9 p:first-child {
  font-weight: 600;
  font-size: 28px;
}
.reporthome .item10 {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
}
.reporthome .item10 .item10a span {
  font-size: 16px;
  font-weight: 600;
}
.reporthome .item10 .item10b button {
  border: 1px solid #ffb600;
  border-radius: 8px;
  color: #434242;
  height: 44px;
}
.reporthome .item10 .item10b button:hover {
  border: 1px solid #707070;
}
.reporthome .item11 {
  background: #edf3f2;
}
.reporthome .item11 .item5a {
  width: 110px;
  height: 110px;
}
.reporthome .item11 .item5b p:first-child {
  font-size: 26px;
  font-weight: 600;
}
.reporthome .item11 .item5b p:nth-child(2) {
  color: #434242;
  font-size: 18px;
}
.reporthome .item11 .element1 p {
  color: #434242;
  font-size: 18px;
}
.reporthome .item11 .element1 button {
  background: #ffb600;
  border-radius: 8px;
  font-size: 18px;
  height: 48px;
}
.reporthome .item11 .element3 span:first-child {
  font-size: 60px;
  color: #232323;
}
.reporthome .item11 .element3 span:nth-child(2) {
  color: #434242;
}
.reporthome .item12 p:first-child {
  font-weight: 600;
  font-size: 26px;
}
textarea {
  resize: none;
  border: 0;
}
textarea:focus {
  border: 0;
  outline: none;
}
.reporthome .item12 .item12a {
  border: 1px solid #70707059;
  display: flex;
  align-items: center;
  font-size: 18px;
}
.reporthome .item12 .item12a div {
  width: 90%;
}
.reporthome .item12 .item12a button {
  border: 1px solid #ffb600;
  border-radius: 8px;
  height: 44px;
  color: #ffb600;
}
.reporthome .item12 .item12a button:hover {
  border: 1px solid #707070;
}
.reporthome .item11 .element11 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card div p {
  font-size: 18px;
}
.cards h3 {
  font-weight: 600;
}
.disclaimer-content p {
  color: #434242;
}
@media only screen and (max-width: 600px) {
  .reporthome .cards {
    grid-template-columns: auto;
  }

  .reporthome .item2 .item3a p {
    font-size: 22px;
  }

  .reporthome .boxs{
    grid-template-columns: auto;
  }
  .reporthome .item4 p:first-child {
    font-size: 16px;
  }
  .reporthome .item4 .item4a {
    display: block !important;
  }
  .reporthome .item5 {
    grid-template-columns: auto;
  }
  .reporthome .item6 p:first-child {
    font-size: 20px;
  }
  .reporthome .item6 p:nth-child(2) {
    font-size: 16px;
  }
  .reporthome .item10 .item10a span {
    font-weight: normal;
    font-size: 14px;
  }
  .reporthome .item10 {
    flex-direction: column;
  }
  .reporthome .item11 .item5b p:first-child {
    font-size: 20px;
  }
  .reporthome .item12 p:first-child {
    font-size: 20px;
  }
  .reporthome .item12 .item12a {
    font-size: 14px;
  }
  .reporthome .item11 .element11 {
    display: block;
  }
  .reporthome .item1 {
    flex-direction: column;
  }
}
@media only screen and (min-width: 780) {
  .reporthome .cards {
    display: grid;
    grid-template-columns: auto auto;
  }
}
</style>
