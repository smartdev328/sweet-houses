<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div class="card homemapsale" >
    <div class="position-relative" style="overflow: hidden">
      <div class="overlay" v-if="type == 'sold' && !isLoggedIn">
        <div class="text-white Roboto-Medium">
          <p>See this home's photos and sale price</p>
          <p>Local laws require you to sign up to see sold details</p>
          <b-button v-b-modal="'my-modal'" @click="SignUp()" class="btn"
            >Sign up</b-button
          >
        </div>
      </div>
        <div v-if="homedata.images &&homedata.images.length > 0" :class="{hover:type == 'sold' && !isLoggedIn}">
             <VueSlickCarousel v-bind="settings">
            <div
              class="slideimg px-1 position-relative"
              v-for="(image,index) in homedata.images.slice(0, 8)"
              :key="image.id"
            >
            <!-- <h1>asdcva </h1> -->
              <img :src="image" v-if="index < 7" class="w-100 h-100" alt="image"  @click="openhomedetails"/>
                 <div
             class="overlay d-flex align-items-center justify-content-center"
              v-if="index > 6 && homedata.images.length > 6"
            >
              <div class="text-white Roboto-Medium pointer" @click="openhomedetails">
                <img src="../../assets/image/download.svg" alt="" />
                <p>View all {{ homedata.images.length }} images</p>
              </div>
            </div>


    <div class="counter"   v-if="homedata.images.length > 1" >
        {{ index  + 1}}/{{ homedata.images.length }}
      </div>
            </div>
          </VueSlickCarousel>
        </div>
         <img
        v-else
        src="../../assets/image/notimg.jpeg"
        class="card-img-top"
        alt=""
        @click="openhomedetails"
      />
    
        
      <div class="card-body" @click="openhomedetails">
        <div
          class="element1 d-flex align-items-baseline justify-content-between"
        >
          <p
            class="text-color-1 Roboto-Medium font-weight-bold"
            v-if="type == 'forsale'"
          >
            ${{ homedata.listPrice.toLocaleString("ja-JP") }}
          </p>
          <p
            class="Roboto-Regular font-weight-bold"
            v-if="isLoggedIn && type == 'sold'"
            style="color: #c95055"
          >
            Sold for ${{ homedata.soldPrice.toLocaleString("ja-JP") }}
          </p>
          <p
            class="Roboto-Regular font-weight-bold"
            v-if="!isLoggedIn && type == 'sold'"
            style="color: #c95055"
          >
            Sold for $xxx,xxx
          </p>
          <p v-if="createdToday">
            Listed today
            <img
              style="    width: 20px;
    height: 20px;
}"
              src="../../assets/image/icon/elesign.svg"
              alt=""
            />
          </p>
          <p class="Roboto-Regular" v-if="type == 'forsale' && !createdToday">
            {{ gettime(homedata.listDate) }}
          </p>
          <p class="Roboto-Regular" v-if="type == 'sold' && !createdToday && homedata.soldDate">
            {{ gettime(homedata.soldDate) }}
          </p>
        </div>
        <div class="element3">
          <span class="text-color-1 Roboto-Regular"
            >{{ homedata.details.numBedrooms }}
            <span v-if="homedata.details.numBedroomsPlus > 0"
              >+{{ homedata.details.numBedroomsPlus }}</span
            >
          </span>
          <span class="mr-2 ml-1 color2 Roboto-Regular">bd</span>
          <span class="text-color-1 Roboto-Regular"
            >{{ homedata.details.numBathrooms }}
            <span v-if="homedata.details.numBathroomsPlus > 0"
              >+{{ homedata.details.numBathroomsPlus }}</span
            ></span
          >
          <span class="mr-2 ml-1 color2 Roboto-Regular">ba</span>
          <span class="text-color-1 Roboto-Medium">{{
            homedata.details.sqft
          }}</span>
          <span class="mr-2 ml-1 color2 Roboto-Medium">sqft</span>
        </div>
        <div class="element5 mt-2">
          <p class="Roboto-Regular">
            {{ homedata.address.unitNumber }}
            {{ homedata.address.streetNumber }}
            {{ homedata.address.streetName }}
            {{ homedata.address.streetSuffix }}
            {{ homedata.address.streetDirection }} ({{
              homedata.details.style
            }})
            <br />
            {{ homedata.address.neighborhood }},{{ homedata.address.city }},{{
              homedata.address.area
            }}
          </p>
        </div>
      </div>
      <div class="ellipsesicon" @click="saved = !saved">
        <div class="ellipsis p-2">
          <img
            src="../../assets/image/icon/Heart.svg"
            class="w-100 h-100"
            alt="icon"
            v-if="!saved"
          />
          <img
            src="../../assets/image/icon/savedheart.svg"
            class="w-100 h-100"
            alt="icon"
            v-if="saved"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  props: {
    homedata: {},
    type: {
      default: "forsale",
    },
    boardId:{type:Number}
  },
  data: () => ({
    currentcount: 1,
    sold: false,
    saved: null,
    slideimgs:[],
     settings:{
            "dots": false,
            "focusOnSelect": true,
            "infinite": false,
            "speed": 500,
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "touchThreshold": 1,
            "arrows":true,
             "responsive": [
            {
            "breakpoint": 1024,
            "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "infinite": true,
            }
            },
            {
            "breakpoint": 600,
            "settings": {
                "slidesToShow":1,
                "slidesToScroll": 1,
                "initialSlide": 1,
                "arrows":true,
            }
            },
            {
            "breakpoint": 480,
            "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "arrows":true,
            }
            }
        ]
            }
  }),
  components:{
    VueSlickCarousel
  },
  computed: {
    username() {
      return this.$store.state.user.first_name || "";
    },
    isLoggedIn() {
      if (this.username) {
        return true;
      } else {
        return false;
      }
    },
    taday() {
      return new Date().getTime();
    },
    homestartdate() {
      if (this.type == "forsale") {
        return new Date(this.homedata.listDate).getTime();
      } else {
        return new Date(this.homedata.soldDate).getTime();
      }
    },
    createdToday() {
      let timestamp = this.taday - this.homestartdate;
      let numhr = Math.floor(timestamp / 1000 / 60 / 60 / 24);
      if (numhr < 2) {
        return true;
      } else {
        return false;
      }
    },
    
  },
  methods: {
    gettime(item) {
      return moment(item).endOf("day").fromNow(true);
    },

    SignUp() {
      this.$emit("SignUp");
    },
    openhomedetails(){
      let mls = this.homedata.mlsNumber;
      let boardId = this.boardId;
      if(this.type == "forsale"){
        let routeData = this.$router.resolve({name:'HomeDetails',params:{mls:mls,boardId:boardId}});
        window.open(routeData.href, '_blank');
      }
      else{
          if(this.isLoggedIn){
            let routeData = this.$router.resolve({name:'SoldHomeDetails',params:{mls:mls,boardId:boardId}});
          window.open(routeData.href, '_blank');
          }else{
            this.SignUp();
          }
          
        
      }
    }
  },
  created(){
    
  }
};
</script>
<style scoped>
.card {
  border-radius: 12px;
  border: 0;
  z-index: 50;
  cursor: pointer;
}
.card .card-body {
  background: #fff;
  /* z-index: 1000; */
}
.card img {
  border-radius: 12px;
  height: 240px;
}
.card .overlay {
  background: rgb(0 0 0 / 72%);
  width: 100%;
  height: 220px;
  z-index: 999;
  position: absolute;
  border-radius: 12px;
  padding: 20% 1%;
  text-align: center;
}
.card .overlay p:first-child {
  font-size: 18px;
}
.card .overlay p:nth-child(2) {
  font-size: 16px;
}
.card .overlay  img {
  filter: blur(10px);
}
.card .overlay button {
  border: 2px solid #ffffff;
  background: transparent;
  color: #fff;
}
.element1 p:first-child {
  font-size: 22px;
}
.element1 p:nth-child(2) {
  color: #707070;
  font-size: 14px;
}
.element2 .icon {
  width: 20px;
  height: 20px;
}
.element2 p {
  color: #ffb600;
  font-size: 20px;
  font-weight: 600;
}
.element3 .color2 {
  color: #aaaaaa;
}
.element3 span {
  font-size: 18px;
}
.element5 p {
  color: #707070;
  font-size: 16px;
}
.card .ellipsesicon {
  right: 0px;
  top: 0px;
  padding: 10px;
  position: absolute;
  z-index: 900;
}
.card .ellipsis {
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
}
.card .ellipsis:hover {
  border: 1px solid #a7a7a7;
}
.card .soldclass {
  color: #c95055 !important;
}
.counter {
  position: absolute;
  top: 80%;
  right: 10px;
  color: #fff;
  background: #434242a3;
  padding: 4px 16px;
  border-radius: 16px;
  font-size: 18px;
}
.slideimg {
  /* width: 420px; */
  height: 220px !important;
}
.arrow-dir {
  position: absolute;
  cursor: pointer;
  top: 20%;
  right: 10px;
  background: #fff;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrow-dir-before {
  position: absolute;
  cursor: pointer;
  top: 20%;
  left: 10px;
  background: #fff;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.arrow-dir-before img {
  width: 16px;
  height: 16px;
 /* transform: rotate(180deg); */
 transform-origin: unset !important;
}
.arrow-dir img {
  width: 16px;
  height: 16px;
}
.element2sold p {
  font-size: 24px;
}
.card-body .element5 {
  height: 84px;
}
.card img {
  overflow: hidden;
  transform-origin: 50% 65%;
  transition: transform 2s, filter 3s ease-in-out;

}
.card img:hover {
  transform: scale(1.2);
}
.card .overlay img {
  width: 34px;
  height: 34px;
}
.ac1{
  transform: translateX(300%) !important;
   transition : transform 0s !important;
 /* transition-delay: 0.1s !important; */
}
.ac2{
  transform: translateX(-300%) !important;
   transition : transform 0s !important;
 /* transition-delay: 0.1s !important; */
}
</style>
