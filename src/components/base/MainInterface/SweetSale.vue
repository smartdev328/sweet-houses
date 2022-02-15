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
            <p class="card-text text-color-2">
              Tell us about your home. You'll get a computer-generated
              evaluation and comparable sales in your area. We'll arrange
              for a licensed Appraiser to view your home and set the final
              price.
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
            <p class="card-text text-color-2">
              Subject to a reasonable home inspection, you receive 90% of
              appraised value on the moving day you choose.
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
            <p class="card-text text-color-2">
              We'll resell your home, retain our fee (7% of $100,000 plus
              3% of the balance), then return to you the full balance of
              the actual sale price - even if it sells over appraised value.
            </p>
          </div>
        </div>
      </div>
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
    <div class="bg-color-1 p-3 item1 DMSerifRegular">
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
          <router-link to="about-us" class="Roboto-Regular"
            >Read More</router-link
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
export default {
  data() {
    return {
      selected_part: "Swiftpart",
    };
  },
  computed: {
    Homefaqs() {
      return this.$store.state.Homefaqs;
    },
  },
  methods: {
    openfaqspage() {
      this.$router.push({ name: "FrequentlyQuestion" });
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.page1 .item1 .item1a p {
  font-size: 36px;
}
.page1 .item1 .item1b p {
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
    font-size: 32px;
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
}
</style>
