<template>
  <div class="page2">
    <div class="my-2 my-md-5 item12 mx-3">
      <div class="item12a DMSerifRegular text-center">
        <p>Swift Sale Benefits</p>
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
    <div class="my-2 my-md-5 item7">
      <div class="text-center text-color-1 mb-5 DMSerifRegular text-capitalize">
        <p>What Our Customers Say</p>
      </div>

      <!-- <google-review></google-review> -->
      <div class="elfsight-app-3f411fcb-35bd-44e4-b1ce-551508d164d9"></div>
    </div>
    <div class="my-2 my-md-5 item13">
      <div class="text-center text-color-1 mb-5 DMSerifRegular text-capitalize">
        <p>A Swift Sale is Right For You, If You:</p>
      </div>
      <div class="item13a p-4 shadow-sm">
        <div class="image">
          <img
            class="rounded w-100"
            src="../../../assets/image/ASwiftSaleisRightForYou.png"
            alt=""
          />
        </div>
        <div class="col-12 col-md-8 py-4 pl-4 my-4 mx-auto">
          <ul class="row">
            <li
              v-for="item in Traditionaldata"
              :key="item.id"
              class="text-color-1 Roboto-Regular"
            >
              <div class="icon mr-3">
                <img
                  src="../../../assets/image/icon/checkicon.svg"
                  class="w-100 h-100"
                  alt=""
                />
              </div>
              {{ item.content }}
            </li>
          </ul>
        </div>
      </div>
    </div>

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
            <h3 class="card-title Roboto-Medium text-color-1">
              Tell Us About Your Property
            </h3>
            <p class="card-text text-color-2">
              Tell us about your home. You'll get a
              computer-generated evaluation and
              comparable sales in your area. We'll arrange
              for a licensed Appraiser to view your home
              and set the final price.
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
            <h3 class="card-title Roboto-Medium text-color-1">
              Appraisal & Inspection
            </h3>
            <p class="card-text text-color-2">
              Subject to a reasonable home inspection, you
              receive 90% of appraised value on the 
              moving day you choose.
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
            <h3 class="card-title Roboto-Medium text-color-1">Close & Move</h3>
            <p class="card-text text-color-2">
              We'll resell your home, retain our fee (7% of
              $100,000 plus 3% of the balance), then return
              to you the full balance of the actual sale price 
              - even if it sells over appraised value.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="my-2 my-md-5 item11 mx-3">
      <div class="item11a DMSerifRegular text-center">
        <p>Why Choose a Swift Sale?</p>
      </div>
      <div class="item11b row p-0">
        <div class="element1 p-0 col-12 col-md-6">
          <!-- <p class="p1 DMSerifRegular">Sweet Sale with Sweetly</p> -->
          <img
            src="../../../assets/image/wswift1.png"
            class="w-100 h-100"
            alt=""
          />
        </div>
        <div class="element2 p-0 col-12 col-md-6">
          <img
            src="../../../assets/image/wswift2.png"
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected_part: "Swiftpart",
      Traditionaldata: [
        { content: " Value your time and convenience." },
        { content: "Have pets who don’t like strangers." },
        { content: "Have children and a busy lifestyle." },
        { content: " Like to be in control and hate surprises." },
        { content: "Already have a new home waiting." },
        {
          content:
            "Plan to buy your next home using the money from the one you have.",
        },
      ],
      Benefitsdata: [
        {
          title: "Market Value Sale",
          content: `You get full market value for your home.`,
          image: require("../../../assets/image/1-MarketValueSale.png"),
        },
        {
          title: "Sell Without Showings ",
          content: ` Accepting our offer means that your home isn’t listed for sale until after you move out.`,
          image: require("../../../assets/image/2-SellWithoutListings.png"),
        },
        {
          title: "Skip Showings",
          content: `Avoid the disruption of strangers touring your home and inconvenient open house weekends.`,
          image: require("../../../assets/image/HappyFamilyMorning.jpg"),
        },
        {
          title: "Pick Your Closing Day",
          content: `Pick the moving day that works best for you (within 45 days). You may also change the day with notice at no cost.`,
          image: require("../../../assets/image/4-PickYourClosingDay.jpeg"),
        },
      ],
    };
  },
  computed: {
    swiftsalefaqs() {
      return this.$store.state.swiftsalefaqs;
    },
  },
  methods: {
    openfaqspage() {
      this.$router.push({ name: "FrequentlyQuestion" });
      document.body.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
.page2 .item1 .item1a p {
  font-size: 36px;
}
.page2 .item1 .item1b p:first-child {
  color: #232323;
  font-size: 18px;
}
.page2 .item1 .item1b p:last-child {
  color: #434242;
  font-size: 18px;
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
  font-family: "Roboto", sans-serif;
  position: relative;
  height: 94px;
}

.page2 .item7 .h-300px {
  height: 300px;
}
.page2 .item7 p {
  font-size: 38px;
  font-weight: 600;
}

.page2 .item11 .item11a {
  font-size: 36px;
  font-weight: 600;
}
.page2 .item11 .item11b {
  border: 2px solid;
  background: rgb(229, 245, 244);
}
.page2 .item11 .item11b .element1 {
  background: rgb(229, 245, 244);
  height: -webkit-fill-available;
}
.page2 .flex-row-reverse {
  flex-direction: row !important;
}
.page2 .item3new .cards {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
}
.page2 .item3new .cards .card img {
  border-radius: 8px;
}
.page2 .item3new .cards .card .card-body h3:first-child {
  color: #ffb600;
}
.page2 .btn-route {
  background: #ffb600;
  color: #fff;
  border-radius: 4px;
  font-size: 1.2em;
  translate: 0.3s ease-in-out;
}
.page2 .btn-route:hover {
  background: #ffb700d2;
}
.page2 .item12 .item12a {
  font-size: 36px;
  font-weight: 600;
}
.page2 .item12 .item12b,
.page2 .item12 .item12b .benefits-card,
.page2 .item12 .item12b .benefits-card .card img {
  border-radius: 8px;
}
.benefits-card .card {
  border: 0 !important;
}
.benefits-card .card .card-title {
  font-size: 32px;
}
.page2 .item13 p {
  font-size: 38px;
  font-weight: 600;
}
.page2 .item13 .item13a {
  background: #edf3f2;
  border-radius: 6px;
}
.page2 .item13 .image {
  width: 600px;
  margin: auto;
}
.item13 ul li {
  list-style-type: none;
  display: flex;
  font-size: 20px;
}
.item13 ul li .icon,
.item13 ul li .icon {
  width: 22px;
  height: 22px;
  max-width: 24px;
  min-width: 24px;
}
.item13 ul li {
  font-size: 22px;
}
@media only screen and (max-width: 600px) {
  .page2 ul li {
    font-size: 16px;
  }
  .page2 .flex-row-reverse {
    flex-direction: column-reverse !important;
  }
  .page2 .item3new .cards {
    grid-template-columns: auto;
  }
  .page2 .item7 p {
    font-size: 26px;
  }
  .page2 .item12 .item12a {
    font-size: 28px;
  }
  .benefits-card .card .card-title {
    font-size: 24px;
  }
  .page2 .item13 p {
    font-size: 28px;
  }
  .page2 .item13 .image {
    width: 300px;
  }
  .page2 .item11 .item11a {
    font-size: 28px;
  }
}
</style>
