<template>
  <div class="page1">
    <div class="my-2 my-md-5 item3new">
      <div class="cards">
        <div class="card border-0">
          <img
            src="../../../assets/image/IpadwithForm.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body pl-0">
            <h3 class="card-title DMSerifRegular">Step 1</h3>
            <!--              <h3 class="card-title Roboto-Medium text-color-1">Tell Us About Your Property-->
            <!--              </h3>-->
            <div class="dropdown">
              <div class="d-flex align-items-center">
              <p class="card-text Poppins mb-0">
             Get an <u class="pointer" >appraisal</u> 
             
            </p>
            <img src="../../../assets/image/icon/info.svg" class="ml-3" style="width:20px;heigth:20px">
            </div>
            <div class="dropdown-content">
                <p>Only relocation appraisals provided by a licensed appraiser within 45 days can be considered for our program.</p>
              </div>
            </div>
            
            
            <p class=" Poppins pointer">
            <u @click="routetoappraisl()" class="text-color-7">Need an appraisal?</u>  
            </p>
          </div>
        </div>

        <div class="card border-0">
          <img
            src="../../../assets/image/YellowAppraisal.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body pl-0">
            <h3 class="card-title DMSerifRegular">Step 2</h3>
            <!--              <h3 class="card-title Roboto-Medium text-color-1">Appraisal & Inspection-->

            <!--              </h3>-->
            <p class="card-text Poppins">
              Get 90% and move on the day you choose
            </p>
          </div>
        </div>

        <div class="card border-0">
          <img
            src="../../../assets/image/HappyFamilyMorning.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body pl-0">
            <h3 class="card-title DMSerifRegular">Step 3</h3>
            <!--              <h3 class="card-title Roboto-Medium text-color-1">Close & Move-->
            <!--              </h3>-->
            <p class="card-text DMSerifRegular">
              We’ll re-sell the property
            </p>
          </div>
        </div>
      </div>
      <div class="card-body p-0">
        <p class="DMSerifRegular card-text">PLUS:Get the balance of our re-sale price when you buy with Sweetly!</p>
      </div>
    </div>
    <div class="my-4 text-center w-25 mx-auto">
      <button class="btn btngototop"  @click="gotFocus()"  style="    background-color: #ffb600;
    color: #fff;
    height: 48px;
    border: 2px solid transparent;
    border-radius: 6px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    /* font-weight: bold; */
    padding: 9px 24px;">Start</button>
    </div>
    <div class="bg-color-1 p-3 my-3 item1p DMSerifRegular">

      <div class="item1a text-center">
        <p class="text-color-1 DMSerifRegular">Here's How We Do it:</p>
      </div>

      <div class="row d-flex align-items-center item1b">
        <div class="col-12 col-md-8">
          <p class="text-color-1 DMSerifRegular">Simple. Certain. Easy.</p>
          <p class="Roboto-Medium">
            It starts with an appraisal to determine the current value of your home. Get 90% of current value on the moving day you choose. We'll manage an MLS listing for the property at an asking price that you agree to. We resell the property, keep our fee, then pay you the FULL balance of the actual resale price - even if it's more than the appraisal! Skip all the seller pains - prep, showings, interruptions, home fix-ups. Just choose the day you want to move. Our fee is 7% on $100,000 plus 3% on the balance which is the same as traditional real estate. The difference isn't in our fee, it's in the experience you go through. Skip the showings! Sell Sweetly. This product is available to customers who sell and buy with Sweetly.
          </p>
        </div>
        <div class="col-12 col-md-4">
          <iframe
              width="100%"
              height="380px"
              src="https://www.youtube.com/embed/NtPMe0nhq2w"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style="background: #edf3f2; border-radius: 8px"
              allowfullscreen
          ></iframe>
        </div>

      </div>
    </div>
    <div class="my-4 text-center w-25 mx-auto">
      <button class="btn btngototop"  @click="gotFocus()"  style="    background-color: #ffb600;
    color: #fff;
    height: 48px;
    border: 2px solid transparent;
    border-radius: 6px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    /* font-weight: bold; */
    padding: 9px 24px;">Start</button>
    </div>
    <div class="my-2 my-md-5 item11 mx-3">
      <div class="item11a DMSerifRegular text-center">
        <p>Why a Swift Sale PLUS is For You?</p>
      </div>
      <div class="item11b row p-0">
        <div class="element1 p-0 col-12 col-md-6">
          <!-- <p class="p1 DMSerifRegular">Sweet Sale with Sweetly</p> -->
          <img
              src="../../../assets/image/swplus1.png"
              class="w-100 h-100"
              alt=""
          />
        </div>
        <div class="element2 p-0 col-12 col-md-6">
          <img
              src="../../../assets/image/swplus2.png"
              class="w-100 h-100"
              alt=""
          />
        </div>
      </div>
      <div>
        <p class="Roboto-Regular text-color-2 my-2">
        </p>
      </div>
    </div>
    <div class="my-4 text-center w-25 mx-auto">
      <button class="btn btngototop" @click="gotFocus()"  style="    background-color: #ffb600;
    color: #fff;
    height: 48px;
    border: 2px solid transparent;
    border-radius: 6px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    /* font-weight: bold; */
    padding: 9px 24px;">Start</button>
    </div>
    <div class="my-2 my-md-5 item12 mx-3">
      <div class="item12a DMSerifRegular text-center">
        <p>Benefits of a Swift Sale PLUS</p>
      </div>
      <div
          class="item12b p-4 mb-5"
          v-for="itembenefite in Benefitsdata"
          :key="itembenefite.id"
          style="background-color: #edf3f2"
      >
        <div class="benefits-card bg-white p-3">
          <div class="card my-2">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img :src="itembenefite.image" class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title DMSerifRegular">
                    {{ itembenefite.title }}
                  </h5>
                  <p
                      class="card-text text-color-2 Roboto-Regular"
                      v-html="itembenefite.content"
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-3 text-center w-25 mx-auto">
      <button class="btn btngototop" @click="gotFocus()"  style="    background-color: #ffb600;
    color: #fff;
    height: 48px;
    border: 2px solid transparent;
    border-radius: 6px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    /* font-weight: bold; */
    padding: 9px 24px;">Start</button>
    </div>
    <div class="my-2 my-md-5 item7">
      <div class="text-center text-color-1 mb-5 DMSerifRegular text-capitalize">
        <p>What Sweetly customers are saying!</p>
      </div>
      <div class="row align-items-center">
        <div class="col-12 col-md-6 px-3 px-md-0 pr-md-1">
          <div class="h-300px">
            <iframe
              width="100%"
              class="rounded"
              height="100%"
              src="https://www.youtube.com/embed/ZuG6KMMRu8k"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style="background: #edf3f2; border-radius: 8px"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="col-12 col-md-6 px-3 px-md-0 pl-md-1 mt-4 mt-md-0">
          <div class="h-300px">
            <iframe
              width="100%"
              class="rounded"
              height="100%"
              src="https://www.youtube.com/embed/UoCHcEQTNdY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style="background: #edf3f2; border-radius: 8px"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="my-2 my-md-5 item12">
      <!-- <google-review></google-review> -->
      <div class="elfsight-app-3f411fcb-35bd-44e4-b1ce-551508d164d9"></div>
    </div>
    <!--      Our Story-->
    <div class="bg-color-1 p-3 item1p DMSerifRegular">
      <div class="item1a text-center">
        <p class="text-color-1 DMSerifRegular">Our Story</p>
      </div>
      <div class="row d-flex align-items-center item1b">
        <div class="col-12 col-md-8">
          <p class="Roboto-Medium">
            Sweetly does real estate differently. We blend finance, technology
            and real estate together to make your process of selling, buying or
            both far easier and more fun.
          </p>
          <a  @click="openaboutus()" class="Roboto-Regular pointer"
            >Read More</a
          >
        </div>
        <div class="col-12 col-md-4">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/NtPMe0nhq2w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style="background: #edf3f2; border-radius: 8px"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <div class="my-2 my-md-5 element4">
      <p class="text-center text-color-1 DMSerifRegular">
        Questions and Answers
      </p>
    </div>
    <div class="my-2 my-md-5 element5">
      <sale-question :items="Homefaqs"></sale-question>
    </div>
    <div class="my-2 my-md-5 w-100 text-center element6">
      <a @click="openfaqspage" class="btn py-2 px-5 Roboto-Regula"
        >View All FAQ's</a
      >
    </div>
  </div>
</template>
<script>
import $ from "jquery";

export default {
  data() {
    return {
      Benefitsdata: [
        {
          title: "Market Value Sale",
          content: `With a Swift Sale PLUS you net the exact same market value that you would if you had listed and sold on the open market with any full service agent who also charges 7% of $100,000 plus 3% on the balance. The difference is the absence of all the public showings, interruptions,
           home prep and seller pains. You even get to choose your own moving day!`,
          image: require("../../../assets/image/marketv.jpg"),
        },
        {
          title: "Sell Without Showings ",
          content: ` Live in your home and pack at your pace. Keeping your home show-ready and letting strangers into the home you live in while you’re not there can be unsettling.
           Sell your home the new-fashioned way. Sell with Sweetly.`,
          image: require("../../../assets/image/2-SellWithoutListings.png"),
        },
        {
          title: "Pick Your Closing Day",
          content: `The freedom to move at your own pace is far more convenient than having to meet a deadline imposed by a buyer. Further more, price and possession day often conflict where a buyer and seller use possession day as a lever against price. The resulting price concessions
           are completely avoided when Sweetly offers the freedom to choose your own moving day.`,
          image: require("../../../assets/image/4-PickYourClosingDay.jpeg"),
        },
      ],
      selected_part: "Swiftpart",
    };
  },
  computed: {
    Homefaqs() {
      return this.$store.state.Homefaqs;
    },
  },
  methods: {
    routetoappraisl(){
      this.$router.push({ name: "appraisal" });
      document.body.scrollTop = 0;
    },
    
    openaboutus() {
      this.$router.push({ name: "Aboutus" });
      document.body.scrollTop = 0;
    },
    openfaqspage() {
      this.$router.push({ name: "FrequentlyQuestion" });
      document.body.scrollTop = 0;
    },
    gotFocus(){
      setTimeout(() => { this.$emit("gotFocus")}, 1000);
    }
  },
  mounted() {
    $(document).ready(function(){
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      $('.btngototop').click(function () {
        $('body,html').animate({
          scrollTop: 0,
        }, 800);
        return false;
      });
    });
  }
};
</script>

<style scoped>
.page1 .item1p .item1a p {
  font-size: 36px;
}
.page1 .item1p .item1b p {
  color: #434242;
  font-size: 20px;
}
.page1 .item2 .title p {
  font-size: 36px;
  font-weight: 600;
}
.page1 .item2 .item2a {
  width: 75%;
}
.page1 .item2 .item2a .item2b {
  font-size: 30px;
  cursor: pointer;
  font-weight: bold;
}
.page1 .item2 .item2a .item2b .active {
  background: rgb(255, 182, 0);
  margin-bottom: 0px;
  width: 100%;
  border-radius: 20px;
  height: 5px;
}
ul li {
  list-style-type: none;
  display: flex;
  font-size: 20px;
}
.item2c ul li .icon,
.item2c2 ul li .icon {
  width: 24px;
  height: 24px;
  max-width: 24px;
  min-width: 24px;
}
.item2c .p1,
.item2c2 .p1 {
  position: absolute;
  z-index: 10;
  left: 0;
  top: -2em;
  width: 253px;
  height: 302px;
}
.item2c .p2,
.item2c2 .p2 {
  position: absolute;
  z-index: 20;
  right: 0;
  top: 2em;
  width: 253px;
  height: 302px;
}
.item2c .gridcontainer,
.item2c2 .gridcontainer {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  grid-gap: 10px;
  padding: 10px;
}
.item2c .gridcontainer .gridcol,
.item2c2 .gridcontainer .gridcol {
  border-right: 1px solid #707070;
  position: relative;
  height: 94px;
}
.item2c .gridcontainer .gridcol:last-child,
.item2c2 .gridcontainer .gridcol:last-child {
  border-right: 0;
}
.item2c .gridcontainer .gridcol p:first-child,
.item2c2 .gridcontainer .gridcol p:first-child {
  font-family: "Roboto-Regular", sans-serif !important;
  font-size: 20px;
}
.item2c .gridcontainer .gridcol p,
.item2c2 .gridcontainer .gridcol p {
  font-family: "Roboto-Medium", sans-serif !important;
  color: #232323;
  font-size: 17px;
  /* position: absolute;
    left: 25%;
    right: 25%;
    top: 75%; */
}
.item2c .lastitem,
.item2c2 .lastitem {
  width: 60%;
  margin-top: unset;
}
.item2c .lastitem p,
.item2c2 .lastitem p {
  font-size: 14px;
}
.page1 .item3 p,
.page1 .item5 p {
  font-size: 36px;
  width: 80%;
  font-weight: 600;
}
.page1 .item4 p,
.page1 .item6 p {
  font-size: 36px;
  width: 80%;
  font-weight: 600;
}
.page1 .item3 ul li,
.page1 .item4 ul li,
.page1 .item5 ul li,
.page1 .item6 ul li,
.page1 .item3 ul li {
  margin-bottom: 1em;
  font-family: "Roboto-Regular", sans-serif !important;
}
.page1 .item3 ul li .icon,
.page1 .item5 ul li .icon {
  width: 18px;
  height: 18px;
  max-width: 18px;
  min-width: 18px;
}
.page1 .item4 ul li .icon,
.page1 .item6 ul li .icon {
  width: 18px;
  height: 18px;
  max-width: 18px;
  min-width: 18px;
}
.page1 .item3 .image,
.page1 .item5 .image {
  width: 500px;
  height: 380px;
}
.page1 .item4 .image,
.page1 .item6 .image {
  width: 500px;
  height: 380px;
}
.page1 .item7 .h-300px {
  height: 300px;
}
.page1 .item7 p {
  font-size: 38px;
  font-weight: 600;
}
.page1 .item8 .element1 p:first-child {
  font-size: 38px;
  font-weight: 600;
}
.page1 .item8 .element1 p:last-child {
  font-size: 16px;
}
.page1 .item8 .element2 table {
  padding: 8px 3px;
}
.page1 .item8 .element2 table tbody tr {
  padding: 12px 20px;
  font-size: 18px;
}
.page1 .item8 .element2 table tbody tr td:nth-child(2) {
  background: #edf3f2;
  padding: 5px 30px;
}
.page1 .item8 .element2 table tbody tr td:first-child {
  padding: 5px 20px;
}
.page1 .item8 .element2 table tbody tr:first-child td {
  padding: 24px 20px 8px;
  font-size: 24px;
  color: #232323;
}
.page1 .item8 .element2 table tbody tr:last-child td {
  padding: 24px 20px 8px;
  color: #232323;
}
.page1 .item8 .element2 table tbody tr:first-child td:nth-child(2) {
  color: #ffb600;
  font-size: 26px !important;
}
.page1 .item8 .element2 table tbody tr td:nth-child(2) .h1,
.page1 .item8 .element2 table tbody tr td:nth-child(2) .h1 {
  font-size: 2.8em !important;
}
.page1 .item8 .element2 table tbody tr:nth-child(7) td:nth-child(2),
.page1 .item8 .element2 table tbody tr:nth-child(8) td:nth-child(2) {
  font-size: 16px !important;
}
.page1 .item12 .item12a {
  font-size: 36px;
  font-weight: 600;
}
.page1 .item12 .item12b,
.page1 .item12 .item12b .benefits-card,
.page1 .item12 .item12b .benefits-card .card img {
  border-radius: 8px;
}
.benefits-card .card-body .card-text{
  font-size: 16px;
  font-weight: unset;
}
.benefits-card .card {
  border: 0 !important;
}
.benefits-card .card .card-title {
  font-size: 32px;
}
.element4 {
  font-size: 38px;
  font-weight: 600;
}
.page1 .element6 a {
  border-radius: 8px;
  border: 1px solid #aaaaaa;
  color: #707070;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
}
.page1 .element6 a:hover {
  color: #ffb600;
  border: 1px solid #ffb600;
}
.page1 .item2c2 ul {
  margin-top: unset;
}
.page1 .item2c ul {
  margin-top: unset;
}
.page1 .item11 .item11a {
  font-size: 36px;
  font-weight: 600;
}
.page1 .item11 .item11b {
  border: 2px solid;
  background: rgb(229, 245, 244);
}
.page1 .item11 .item11b .element1 {
  background: rgb(229, 245, 244);
  height: -webkit-fill-available;
}
.page1 .item11 .item11b .element1 .p1,
.page1 .item11 .item11b .element2 .p1 {
  font-size: 38px;
  font-weight: 600;
}
.page1 .flex-revers-sm {
  flex-direction: row !important;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 270px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}
ul li a {
  color: #00a19b;
  font-size: 22px;
}
.dropdown-content p {
  font-size: 16px !important;
  width: 100% !important;
  font-weight: normal !important;
}
.dropdown:hover .dropdown-content {
  display: block !important;
}
.page1 .item3new .cards {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
}
.page1 .item3new .cards .card img {
  border-radius: 8px;
}
.page1 .item3new .cards .card .card-body h3:first-child {
  color: #ffb600;
}
.page1 .item3new .cards .card .card-text p {
  font-size: 18px;
}
.card-body .card-text{
  font-size: 24px;
  font-weight: bold;
}
.page1 .dropdown {
  position: relative;
  display: inline-block;
}
.page1 .dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.page1 .dropdown:hover .dropdown-content {
  display: block;
}
@media only screen and (max-width: 600px) {
  .item2c .gridcontainer,
  .item2c2 .gridcontainer {
    display: grid;
    grid-template-columns: auto;
  }
  .item2c .gridcontainer .gridcol,
  .item2c2 .gridcontainer .gridcol {
    border-right: 0;
    border-bottom: 1px solid #707070;
  }
  .page1 .item2 .item2a {
    width: 100%;
  }
  .page1 .item2 .title p {
    font-size: 20px;
  }
  .page1 .item2 .item2a .item2b {
    font-size: 12px;
  }
  .page1 .item2c2 ul {
    margin-top: 16em;
  }
  .page1 .item2c ul {
    margin-top: 16em;
  }
  .page1 ul li {
    font-size: 16px;
  }
  .item2c .lastitem,
  .item2c2 .lastitem {
    width: 90%;
    margin-top: 1.5rem;
  }
  .page1 .item3 p,
  .page1 .item5 p {
    width: 100%;
    font-size: 28px;
    font-weight: 600;
  }
  .page1 .item4 p,
  .page1 .item6 p {
    font-size: 28px;
    width: 100%;
    font-weight: 600;
  }
  .item2c .p1,
  .item2c2 .p1 {
    position: absolute;
    z-index: 10;
    left: 0;
    top: -2em;
    width: 194px;
    height: 194px;
  }
  .item2c .p2,
  .item2c2 .p2 {
    position: absolute;
    z-index: 20;
    right: 0;
    top: 2em;
    width: 194px;
    height: 194px;
  }
  .page1 .item7 p {
    font-size: 26px;
  }
  .page1 .item11 .item11a {
    font-size: 26px;
  }
  .page1 .item8 .element4 {
    font-size: 32px;
  }
  .page1 .flex-revers-sm {
    flex-direction: column-reverse !important;
  }
  .page1 .item3new .cards {
    grid-template-columns: auto;
  }
  .page1 .item1 .item1a p {
    font-size: 26px;
  }
  .page1 .item1 .item1b p {
    font-size: 18px;
  }
  .element4 {
    font-size: 26px;
  }
  .page1 .item12 .item12a{
    font-size: 26px;
  }
  .benefits-card .card .card-title{
    font-size: 22px;
  }
}
</style>
