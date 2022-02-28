<template>
    <div>
        <div class="card shadow">
          <div class="position-relative" style="overflow: hidden">
            <div class="overlay" v-if="!isLoggedIn">
              <div class="text-white Roboto-Medium">
                <p>See this home's photos and sale price</p>
                <p>Local laws require you to sign up to see sold details</p>
                <b-button v-b-modal="'my-modal'" @click="SignUp()" class="btn"
                >Sign up</b-button
                >
              </div>
            </div>
            <div
                class="overlay d-flex align-items-center justify-content-center"
                v-if="currentcount > 6 && closest_home_data.images.count > 6"
            >
              <div class="text-white Roboto-Medium pointer">
                <img src="../../assets/image/download.svg" alt="" />
                <p>View all {{ closest_home_data.images.count }} images</p>
              </div>
            </div>
            <img
                v-if="!closest_home_data.images.image"
                src="../../assets/image/notimg.jpeg"
                class="card-img-top"
                alt=""
                @click="openhomedetails"
            />
            <img
                v-if="sold && closest_home_data.images.image"
                :src="closest_home_data.images.image"
                class="card-img-top"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                alt="..."
                @click="openhomedetails"
            />

            <img
                v-if="!sold && closest_home_data.images.image"
                :src="closest_home_data.images.image"
                class="card-img-top"
                ref="slidepic"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                alt="..."
                @click="openhomedetails"
            />
            <div
                class="arrow-dir"
                @click="getImage()"
                v-if="currentcount < closest_home_data.images.count"
            >
              <img src="../../assets/image/icon/Iconarrows.svg" alt="" />
            </div>
            <div
                class="arrow-dir-before"
                @click="getImagebefor()"
                v-if="currentcount > 1"
            >
              <img src="../../assets/image/icon/iconbefore.svg" alt="" />
            </div>
            <div class="counter" v-if="closest_home_data.images.count">
              {{ currentcount }}/{{ closest_home_data.images.count }}
            </div>
          </div>


            <div class="card-body">
                <div class="element1a">
                             <div class=" mt-2">
          <p class="Roboto-Regular">
            {{ closest_home_data.address.unitNumber }}
            {{ closest_home_data.address.streetNumber }}
            {{ closest_home_data.address.streetName }}
            {{ closest_home_data.address.streetSuffix }}
            {{ closest_home_data.address.streetDirection }} 
            <br />
            {{ closest_home_data.address.neighborhood }},{{ closest_home_data.address.city }},{{
              closest_home_data.address.area
            }}
          </p>
        </div>
                </div>
                <div class="element1 d-flex align-items-baseline justify-content-between">
                    <p class="text-color-1 Roboto-Medium" v-if="closest_home_data.soldPrice" :class="{soldclass : sold}">Sold ${{closest_home_data.soldPrice.toLocaleString('ja-JP')}}</p>
                    <p class="Roboto-Regular mb-0">{{gettime(closest_home_data.soldDate)}}</p>
                </div>
                <div class="element3">
                    <span class="text-color-2 Roboto-Regular" v-if="closest_home_data.listPrice">Listed ${{closest_home_data.listPrice.toLocaleString('ja-JP')}}</span>
                </div>
                <br>
                <div class="element5">
                        <table class="table w-100">
                            <thead style="border-bottom: 1px solid #dee2e6;" class="Roboto-Regular">
                                <tr>
                                <th scope="col"></th>
                                 <th scope="col" colspan="2" class="item5b pt-0 Roboto-Regular text-center">
                                   <button class="btn px-3">
                                        <!-- <img src="../../assets/image/icon/blackhome.svg" style="width:22px;height:22px" alt="">  -->
                                        <span v-if="prices">${{numFormatter(prices.offer_price)}}</span>        
                                    </button>
                                       
                                        
                                </th>
                                <th  scope="col" class="item5a btn Roboto-Regular text-white px-2" >${{numFormatter(closest_home_data.soldPrice)}}</th>
                               
                               
                                </tr>
                            </thead>
                            <tbody style="border-bottom: 1px solid #dee2e6;" class="Roboto-Regular">
                                <tr>
                                    <td>Beds</td>
                                    <td>
                                        <img v-if="homedatafirst.bedrooms_ag > closest_home_data.details.numBedrooms" src="../../assets/image/icon/arrowmore.svg" alt="">
                                        <img v-if="homedatafirst.bedrooms_ag < closest_home_data.details.numBedrooms" src="../../assets/image/icon/arrowless.svg" alt="">
                                        
                                    </td>
                                     <td>{{homedatafirst.bedrooms_bg}}</td>
                                    <td>{{closest_home_data.details.numBedrooms}}</td>
                                   
                                    
                                </tr>
                                 <tr>
                                    <td>Baths</td>
                                     <td>
                                        <img v-if="homedatafirst.bathrooms_full > closest_home_data.details.numBathrooms" src="../../assets/image/icon/arrowmore.svg" alt="">
                                        <img v-if="homedatafirst.bathrooms_full < closest_home_data.details.numBathrooms" src="../../assets/image/icon/arrowless.svg" alt="">
                                    </td>
                                     <td>{{homedatafirst.bathrooms_full}}</td>
                                    <td>{{closest_home_data.details.numBathrooms}}</td>
                                   
                                   
                                </tr>
                                 <tr>
                                    <td>Sqft</td>
                                     <td>
                                        <img v-if="homedatafirst.squfeet > closest_home_data.details.sqft" src="../../assets/image/icon/arrowmore.svg" alt="">
                                        <img v-if="homedatafirst.squfeet < closest_home_data.details.sqft" src="../../assets/image/icon/arrowless.svg" alt="">
                                    </td>
                                     <td>~{{homedatafirst.squfeet}}</td>
                                    <td>~{{closest_home_data.details.sqft}}</td>
                                   
                                    
                                </tr>
                                <tr>
                                    <td>Garage</td>
                                     <td>
                                        <img v-if="homedatafirst.garage_spaces > closest_home_data.details.numParkingSpaces" src="../../assets/image/icon/arrowmore.svg" alt="">
                                        <img v-if="homedatafirst.garage_spaces < closest_home_data.details.numParkingSpaces" src="../../assets/image/icon/arrowless.svg" alt="">
                                    </td>
                                      <td>{{homedatafirst.garage_spaces}}</td>
                                    <td>{{closest_home_data.details.numParkingSpaces}}</td>
                                  
                                    
                                </tr>
                                <tr>
                                    <td>Basement</td>
                                     <td>
                                       
                                    </td>
                                    <td>{{homedatasecond.basement_desc}}</td>
                                    <td>{{closest_home_data.details.basement1}}</td>
                                   
                                </tr>
                            </tbody>
                            </table>
                </div>
        
                <div class="element6">
                    <button class="btn text-center w-100 Roboto-Regular" @click="openhomedetails()">Show more details</button>
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
import moment from 'moment';
export default {
    props:["instant_estimate_data","closest_home_data"],
    data:() =>({
      currentcount: 1,
    }),
    computed:{
      sold(){
        return this.closest_home_data.lastStatus == "Sld"
      },
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
        prices(){
             return this.instant_estimate_data.prices || {}
      },
      homedatafirst(){
          return this.$store.state.homedatafirst || {}
      },
      homedatasecond(){
          return this.$store.state.homedatasecond || {}
      },
    },
    methods:{
      getImage() {
        //  this.currentcount +=1
        let input = {
          mls: this.closest_home_data.mlsNumber,
          image_num: this.currentcount + 1,
          boardId:this.closest_home_data.boardId
        };
        const element = this.$refs.slidepic;
        element.classList.add("ac1");

        this.$http.post("listings/image_bymls/", input).then((res) => {
          const element = this.$refs.slidepic;
          element.classList.remove("ac1");
          this.slideimgs.push({
            imageurl:res.data.image,
            c_count:this.currentcount += 1
          })
          this.closest_home_data.images.image = res.data.image;
          console.log(res.data.image);
          this.currentcount += 1;
          return res;
        });
      },
      getImagebefor() {
        //  this.currentcount -=1
        let input = {
          mls: this.closest_home_data.mlsNumber,
          image_num: this.currentcount - 1,
          boardId:this.closest_home_data.boardId
        };
        const element = this.$refs.slidepic;
        element.classList.add("ac2");
        this.$http.post("listings/image_bymls/", input).then((res) => {
          const element = this.$refs.slidepic;
          element.classList.remove("ac2");
          // const element = this.$refs.slidepic;
          // element.classList.add('fadeOut');
          //     element.classList.remove('fadeIn');
          // setTimeout(() => {
          //         element.classList.remove('fadeOut');
          //         element.classList.add('fadeIn');
          //     }, 300);
          this.closest_home_data.images.image = res.data.image;

          console.log(res.data.image);
          this.currentcount -= 1;
          return res;
        });
      },
      SignUp() {
        this.$emit("SignUp");
      },
        gettime(item){
            return moment(item).endOf('day').fromNow();   
        },
        numFormatter(num) {
        if (num > 999 && num < 1000000) {
          return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
        } else if (num > 1000000) {
          return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
        } else if (num < 900) {
          return num; // if value < 1000, nothing to do
        }
    },
    openhomedetails(){
      let mls = this.closest_home_data.mlsNumber;
      let boardId = this.closest_home_data.boardId;
      if(this.closest_home_data.lastStatus !== "Sld"){
        let routeData = this.$router.resolve({name:'HomeDetails',params:{mls:mls,boardId:boardId}});
        window.open(routeData.href, '_blank');
      }
      if(this.closest_home_data.lastStatus == "Sld"){
          let routeData = this.$router.resolve({name:'SoldHomeDetails',params:{mls:mls,boardId:boardId}});
          window.open(routeData.href, '_blank');
      }
    }
    }
}
</script>
<style scoped>
.element6b{
    color: #707070;
  font-size: 16px;
}
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
.card img {
  overflow: hidden;
  transform-origin: 50% 65%;
  transition: transform 2s, filter 3s ease-in-out;

}
.counter {
  position: absolute;
  top:10.5em;
  right: 10px;
  color: #fff;
  background: #434242a3;
  padding: 4px 16px;
  border-radius: 16px;
  font-size: 18px;
}
.arrow-dir {
  position: absolute;
  cursor: pointer;
  top: 40%;
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
.card img:hover {
  transform: scale(1.2);
}
.card .overlay img {
  width: 34px;
  height: 34px;
}
.element1a p{
    font-size: 22px;
    font-weight: 600;
}
.element1 p:first-child{
    font-size: 24px;
    font-weight: 600;
}
.element1 p:nth-child(2){
    color: #707070;
    font-size: 16px;
}
.element3 .color2{
    color: #AAAAAA;
}
.element3 span{
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
.card .table th{
    border: 0;
}
.card .table td{
    border: 0;
}
.card .table tr td:nth-child(1),
.card .table tr td:nth-child(2){
    color: #707070;
}
.card .table tr td:nth-child(3),
.card .table tr td:nth-child(4){
    background: #EDF3F2;
    color: #232323;
}
.card .element5 .item5a{
    background: #C95055;
    font-size: 18px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
}
.card .element5 .item5b button{
    height: 44px;
    border-radius: 8px;
    border: 1px solid #707070;
    font-size: 22px;
}
.card .element6 button{
    border: 1px solid #FFB600;
    border-radius: 8px;
    color: #FFB600;
    font-size: 20px;
    font-weight: 600;
    transition: .2 ease-in-out;
}
.card .element6 button:hover{
    background: #FFB600;;
    color: #fff;
}
.card table tbody tr td img{
    width: 17px !important;
    height: 17px !important;
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
