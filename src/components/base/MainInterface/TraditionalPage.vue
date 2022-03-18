<template>
  <div class="page4">
    <div class="my-2 my-md-5 item12 mx-3">
      <div class="item12a DMSerifRegular text-center" >
        <p>Benefits of a Traditional Listing</p>
      </div>
      <div
        class="item12b p-3 p-md-4 mb-5"
        v-for="itembenefite in Benefitsdata"
        :key="itembenefite.id"
        style="background-color: #edf3f2"
      >
        <div class="benefits-card bg-white p-2 p-md-3">
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
    <div class="my-2 my-md-5 item13">
      <div class="text-center text-color-1 mb-5 DMSerifRegular text-capitalize">
        <p>A Traditional Listing Is Right for You if You</p>
      </div>
      <div>
        <div class="image">
          <img
            class="rounded w-100"
            src="../../../assets/image/ASwiftSaleisRightForYou.png"
            alt=""
          />
        </div>
        <div class="col-12 col-md-8 py-4 pl-4 my-4 mx-auto">
          <ul>
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
      <div class="text-center Roboto-Regular">
        <p>Want a different program?</p>
        <a class="Roboto-Regular pointer" @click="routeswiftsale()">Try our Swift Sale</a>
      </div>
    </div>
    <div class="my-3 text-center w-25 mx-auto">
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
    <div class="my-2 my-md-5 item7">
      <div class="text-center text-color-1 mb-1 DMSerifRegular text-capitalize">
        <p>What Our Customers Say</p>
      </div>

      <!-- <google-review></google-review> -->
      <div class="elfsight-app-3f411fcb-35bd-44e4-b1ce-551508d164d9"></div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data() {
    return {
      Traditionaldata: [
        { content: "Want to test the market with your price." },
        { content: "Want to use our reno budget to improve before selling." },
        {
          content:
            "Have time to allow showings and don’t mind having strangers in your home.",
        },
        { content: "Want to negotiate our commission." },
      ],
      Benefitsdata: [
        {
          title: "Professional Guidance",
          content: ` Our local experts will guide you through the process.`,
          image: require("../../../assets/image/1-ProfessionalGuidance.png"),
        },
        {
          title: "Our Marketing Muscle = Your Advantage ",
          content: `We make buying easy, so your home is more attractive.`,
          image: require("../../../assets/image/2HomeMarketing.png"),
        },
        {
          title: "Improvement Budget",
          content: `We can offer (interest free) funds to make powerful improvements to help you maximize your sale price. You pay us back once you sell.`,
          image: require("../../../assets/image/3-Home mprovement.png"),
        },
        {
          title: "Your Home’s Best First Impressions",
          content: `We’ll stage & photograph your home professionally to attract the most interest possible.
`,
          image: require("../../../assets/image/4HomeStaging.png"),
        },
      ],
      expertagents: [
        {
          name: "Ed Deprato",
          phone: "(780) 499-2851",
          position: "Marketing & Media",
          image: require("../../../assets/image/homepage/team/Ed.svg"),
          details: `
            <p>Ed DePrato is the founder and co-owner of Sweetly, as well as a licensed broker and REALTOR® since 2001. Consistently a top-producing agent in the Edmonton area, Ed has extensive knowledge about real estate, including buying, selling, developing, and investing in commercial and residential properties. His philosophy is to provide top-quality customer service in all aspects of his work as a REALTOR® and offer modern solutions to clients as an industry-leading innovator. Using his expertise as an investor and developer, Ed launched Sweetly, a full service real estate brokerage, in September 2019 and has already led the company to a remarkable 4% market share in Edmonton. He has recently presented seminars on (downsizing, etc) and is always looking for ways to innovate the real estate industry.</p>
            `,
        },
        {
          name: "Kelly Grant",
          phone: "(780) 242-2469",
          position: "REALTOR®",
          image: require("../../../assets/image/homepage/team/Kelly.svg"),
          details: `
            <p>A licensed REALTOR® for over 15 years, Kelly Grant is an award-winning Edmonton real estate agent and co-owner of Sweetly. Kelly brings professional experience in financing, mortgages, and renovations to the Sweetly team, as well as certification as a Seniors Real Estate Specialist. Since helping establish Sweetly in 2019, Kelly has built a robust, successful business with a team of dedicated, well-informed agents. Over her wide-ranging career in the industry, Kelly has provided above-and-beyond service to buyers and sellers in the Edmonton area, as well as expert advice to her devoted clientele.</p>
            `,
        },
        {
          name: "Aidan Woodfine",
          phone: "(780) 264-1234",
          position: "REALTOR®",
          image: require("../../../assets/image/homepage/team/Aidan.svg"),
          details: `
                <p>Since becoming a licensed REALTOR® in 2013, Aidan Woodfine has served the Edmonton area with a systematic approach to real estate. With years of experience in the real estate business along with his marketing diploma from NAIT, he is now a resourceful co-owner of Sweetly and a consistently top-producing agent in Edmonton.</p>
                <p>Aidan offers enthusiastic dedication to his clients, embracing efficiency and modern technology for the best results when selling and buying a home. Aidan provides expert advice and exceptional, innovative service with cutting-edge knowledge of industry trends. Aidan’s specialty is value-driven buyers and sellers, especially newcomers to the city and buyers looking for unique ways to experience unfamiliar neighbourhoods.</p>
            `,
        },
        {
          name: "Maria Garces",
          phone: "(780) 965-2057",
          position: "Listings Coordinator",
          image: require("../../../assets/image/homepage/team/Maria.svg"),
          details: `
            <p>I was born in Edmonton, to parents from rural backgrounds and lived within blocks of the original Fort Edmonton and the Legislature building.</p>
            <p>My father was a building contractor, and I spent my preschool years with my dad at houses he was building. I learned about the housing industry, and as I got older became interested in the operation of the family business and eventually decided to become a Real Estate Professional. My oldest son followed in the same industry direction and is now a Real Estate Appraiser.</p>
            <p>When I had decided to become a Real Estate Professional, I originally started with Metro City Realty in June of 1995. I have enjoyed my work as a  REALTOR® and have acquired considerable amounts of my own real estate during the time. I’m excited for my move to “Sweetly” as I know it will offer myself and my client’s new options and added benefits in the purchase and sale of their homes.</p>
        `,
        },
      ],
    };
  },
  methods: {
    openprofile(agent) {
      this.$store.commit("setagent", agent);
      this.$router.push("/agent-profile/" + agent.name.replace(/\s+/g, "-"));
      document.body.scrollTop = 0;
    },
    routeswiftsale(){
      this.$router.push({ name: "SwiftSale" });
      document.body.scrollTop = 0;
    },
    gotFocus(){
      setTimeout(() => { this.$emit("gotFocustrad")}, 1000);
    }
  },
  mounted(){
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

<style>
ul li {
  list-style-type: none;
  display: flex;
  font-size: 20px;
}
ul li .icon,
ul li .icon {
  width: 22px;
  height: 22px;
  max-width: 24px;
  min-width: 24px;
}
ul li {
  font-size: 22px;
}

.page4 .item5 p:first-child {
  font-size: 38px;
}

.page4 .item7 p:first-child {
  font-size: 38px;
}
.page4 .item12 .item12a {
  font-size: 36px;
  font-weight: 600;
}
.page4 .item12 .item12b,
.page4 .item12 .item12b .benefits-card,
.page4 .item12 .item12b .benefits-card .card img {
  border-radius: 8px;
}
.benefits-card .card {
  border: 0 !important;
}
.benefits-card .card .card-title {
  font-size: 32px;
}
.page4 .item13 p {
  font-size: 38px;
  font-weight: 600;
}
.page4 .item13 .image {
  width: 600px;
  margin: auto;
}
.page4 .item13 div:last-child p:first-child {
  font-size: 36px;
  font-width: 600;
}

@media only screen and (max-width: 600px) {
  .page4 .item12 .item12a {
    font-size: 28px;
  }
  .benefits-card .card .card-title {
    font-size: 24px;
  }
  .page4 .item13 p {
    font-size: 26px;
  }
  .page4 .item13 .image {
    width: 300px;
  }
  .page4 .item13 div:last-child p:first-child {
    font-size: 28px;
  }
  .page4 .item7 p:first-child {
    font-size: 28px;
  }
}
</style>
