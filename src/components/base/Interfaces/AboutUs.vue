<template>
  <div class="aboutus">
    <div class="container mt-5 d-flex align-items-center part1">
      <div class="item7">
        <h3 class="Roboto-Medium">Our Story:</h3>
        <p class="Roboto-Regular text-color-1">
          Sweetly does real estate differently. We blend finance, technology and
          real estate together to make your process of selling, buying or both
          far easier and more fun.
        </p>
      </div>
      <div class="item8">
        <div class="text-right">
          <lazy-component >
            <img src="../../../assets/image/homepage/team/Ed.svg" alt="" />
          </lazy-component>
          
        </div>
      </div>
    </div>

    <div class="item7 container">
      <p class="Roboto-Regular text-color-1">
        Selling to Sweetly means choosing to sell stress free, and on your timeline.
        Our Swift Sale pays you 90% of your homes' (professionally) appraised value on
        the day you choose to move; and this let's you sell without living through 
        the seller pains and endless showings, or open houses where strangers tour 
        the home you live in. Once we resell your home, you get the full balance of
        the actual resale price and thus you get the exact same amount of money had
        you listed and sold on the market with any other full service brokerage
        (assuming commission of 7% of $100,000 plus 3% on the balance).
      </p>
      <p class="Roboto-Regular text-color-1">
        The benefits and conveniences of our program are obvious for any home seller.
        But for anyone selling and buying at the same time, our program is even more
        powerful. We encourage our clients to get our appraisal, then delay selling
        to us until you find the perfect home! You get to avoid paying two mortgages
        at once, moving twice, or missing out on the perfect new home waiting to sell
        the one you have.
      </p>
      <p class="Roboto-Regular text-color-1">
        We've spent years watching customers just like you struggle with showing,
        interruptions and the broken product that is 'traditional real estate', but
        until now, nobody has bothered to question the process and the fees. We dare
        to dream of better services for our customers and we look forward to sharing
        our vision with you.
      </p>
      <p class="Roboto-Regular text-color-1">
        I welcome your comments, questions or feedback, always.
      </p>
      <p class="Roboto-Regular text-color-1">
        Ed DePrato Partner, Broker, Dog dad
      </p>
    </div>

    <div class="item6 my-5">
      <div class="container">
        <div>
          <div class="row">
            <div class="col-12 col-md-5">
              <p class="element1 Roboto-Medium">Looking To Connect With Us?</p>
              <div class="element2">
                <div class="d-flex align-items-baseline">
                  <div class="icon">
                    <img
                      src="../../../assets/image/contactus/email.svg"
                      class="w-100 h-100"
                      alt="email"
                    />
                  </div>
                  <p class="ml-3 Roboto-Bold">info@sweetly.ca</p>
                </div>
                <div class="d-flex align-items-baseline">
                  <div class="icon">
                    <img
                      src="../../../assets/image/contactus/phone.svg"
                      class="w-100 h-100"
                      alt="phone"
                    />
                  </div>
                  <p class="ml-3 Roboto-Bold">780-477-9338</p>
                </div>
                <div class="d-flex align-items-baseline">
                  <div class="icon">
                    <img
                      src="../../../assets/image/contactus/address.svg"
                      class="w-100 h-100"
                      alt="address"
                    />
                  </div>
                  <p class="ml-3 Roboto-Bold">
                    <span>#161 6005 Gateway BVLD:</span><br />
                    <span>Edmonton AB T6H 2H3</span><br />
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-7">
              <div class="map-image h-100">
                <img
                  src="../../../assets/image/contactus/map45.jpg"
                  class="w-100 h-100"
                  alt="map"
                />
              </div>
<!--              <img-->
<!--                src="../../../assets/image/contactus/icon-location.svg"-->
<!--                class="icon-location"-->
<!--                alt=""-->
<!--              />-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    slugtitle(content) {
      if (content.length < 150) {
        return content;
      } else {
        return content.substring(0, 150) + "...";
      }
    },
  },
  components: {
  },
};
</script>

<style scoped>
.aboutus .part1 {
  flex-direction: row;
}
.aboutus .item1 .item1a {
  width: 50%;
  margin: auto;
}
.aboutus .item1 .item1a .item1b {
  width: 75%;
  margin: auto;
}
.aboutus .item1 .item1a .p1 {
  font-size: 60px;
  font-weight: 600;
}
.aboutus .item1 .item1a .p2 {
  font-size: 32px;
}
.aboutus .item1 .item1a .inputaddress {
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
    rgb(0 0 0 / 2%) 0px 8.01379px 21.5371px,
    rgb(0 0 0 / 2%) 0px 14.2952px 38.4185px,
    rgb(0 0 0 / 3%) 0px 26.7377px 71.8575px, rgb(0 0 0 / 4%) 0px 64px 172px;
  padding: 10px;
  flex-direction: row;
  border-width: 1px;
  border-style: solid;
  font-size: 18px;
}

.aboutus .item1 .item1a .inputaddress img {
  flex-shrink: 0;
  align-self: center;
  margin-left: 12px;
  width: 30px;
  height: 30px;
}
.aboutus .item1 .item1a .inputaddress .item1b2 {
  display: inline-flex;
  width: 100%;
  flex-direction: column;
}
.aboutus .item1 .item1a .space {
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
.aboutus .item1 .item1a input {
  flex: 1 1 0%;
  border: none;
  padding-left: 12px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  min-height: 48px;
  line-height: normal;
  box-shadow: none !important;
  border: 0 !important;
  outline: none;
}
.aboutus .item1 .item1a .item1b3 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-shrink: 0;
}
.aboutus .item1 .item1a button {
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
input:focus {
  outline: none;
}
.aboutus .item2 .element1 {
  font-size: 34px;
  font-weight: 600;
}
.aboutus .item2 .element2 {
  color: #4a4a4a;
  font-size: 20px;
  line-height: 2;
}
.aboutus .item2 .image {
  width: 380px;
  height: 380px;
}
.aboutus .item2 .image img {
  -webkit-box-shadow: 20px -20px 0px 0px #70707085;
  -moz-box-shadow: 20px -20px 0px 0px #70707085;
  box-shadow: 20px -20px 0px 0px #70707085;
}
.aboutus .item3 {
  background: #edf3f2;
}
.aboutus .item3 .element1 {
  color: #434242;
  font-size: 38px;
  font-weight: 600;
}
.aboutus .item3 .element2 {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 34px;
  grid-row-gap: 10px;
  padding: 10px;
}
.aboutus .item3 .element2 .gridcol .image {
  width: 260px;
  height: 260px;
}
.aboutus .item3 .element2 .gridcol .gridcol1 p {
  color: #434242;
  font-size: 24px;
}
.aboutus .item3 .element2 .gridcol .gridcol2 p {
  color: #707070;
  font-size: 16px;
}
.aboutus .item4 .title {
  font-size: 32px;
  width: 50%;
  margin: auto;
  font-weight: 600;
}
.aboutus .item4 .element2 {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 18px;
  grid-row-gap: 4px;
  padding: 10px;
}
.aboutus .item4 .element2 .partcol .image {
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
}
.aboutus .item4 .element2 .partcol .xphn {
  color: #232323;
  font-size: 34px;
  font-family: "Roboto", sans-serif;
}
.aboutus .item4 .element2 .partcol .xphn span {
  font-size: 12px;
  color: #707070;
}
.aboutus .item4 .element2 .partcol .p1 {
  font-size: 18px;
  text-align: center;
  color: #707070;
  font-family: "Roboto", sans-serif;
  width: 70%;
  margin: auto;
}
.aboutus .item4 .element2 .partcol .p2 {
  font-size: 18px;
  color: #707070;
  text-align: center;
  font-family: "Roboto", sans-serif;
}
.aboutus .item5 {
  background: #f3f4ff;
}
.aboutus .item5 .element1 p {
  color: #434242;
  font-size: 32px;
  font-weight: 600;
}
.aboutus .item5 .element2 .slide-card {
  background: #fff;
  border-radius: 12px;
}
.aboutus .item5 .element2 .slide-card .image {
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -4em;
  z-index: 999;
}
.aboutus .item5 .element2 .slide-card .review {
  display: flex;
  align-items: center;
  justify-content: center;
}
.aboutus .item5 .element2 .slide-card .review p {
  margin-right: 4px;
}
.aboutus .item5 .element2 .slide-card .review span {
  font-size: 12px;
  color: #707070;
  font-family: "Roboto", sans-serif;
}
.aboutus .item5 .element2 .slide-card .description p:first-child {
  color: #707070;
  font-size: 18px;
}
.aboutus .item5 .element2 .slide-card .description a {
  color: #aaaaaa;
  font-size: 18px;
}
.aboutus .item6 .element1 {
  font-size: 28px;
  color: #434242;
}
.aboutus .item6 .element2 .icon {
  width: 38px;
  height: 38px;
}
.aboutus .item6 .element2 {
  background: #edf3f2;
  border-radius: 50%;
  height: 380px;
  width: 380px;
  padding: 5em 4em 1em;
  line-height: 1.8;
  color: #707070;
}
.aboutus .item6 .icon-location {
  position: absolute;
  bottom: 48%;
  left: 50%;
  right: 50%;
  top: 48%;
  width: 46px;
  height: 46px;
}
.aboutus .item6 .element2 p {
  font-size: 20px;
}
.aboutus .item7 h3 {
  font-size: 28px;
  color: #434242;
}
.aboutus .item7 p {
  font-size: 18px;
}
.aboutus .map-image img{
  border-top-right-radius: 24px;
  border-bottom-left-radius: 24px;
}
@media only screen and (max-width: 600px) {
  .aboutus .item4 .element2 {
    grid-template-columns: auto;
  }
  .aboutus .item3 .element2 {
    display: grid;
    grid-template-columns: auto;
    grid-column-gap: 34px;
    grid-row-gap: 10px;
    padding: 10px;
  }
  .aboutus .item1 .item1a {
    width: 100%;
  }
  .aboutus .item1 .item1a .item1b {
    width: 100%;
  }
  .aboutus .item4 .title {
    width: 80%;
    font-size: 20px;
  }
  .aboutus .item6 .element1 {
    font-size: 18px;
  }
  .aboutus .item6 .element2 {
    width: 280px;
    height: 280px;
    padding: 2em 1em 1em 4em;
    line-height: 1.8;
  }
  .aboutus .item6 .element2 .icon {
    width: 30px;
    height: 30px;
  }
  .aboutus .item6 .element2 p {
    font-size: 14px;
  }
  .aboutus .item1 .item1a .p1 {
    font-size: 30px;
  }
  .aboutus .item1 .item1a .p2 {
    font-size: 24px;
  }
  .aboutus .item1 .item1a .inputaddress {
    font-size: 12px;
  }
  .aboutus .item7 h3 {
    font-size: 22px;
    color: #434242;
  }
  .aboutus .item7 p {
    font-size: 16px;
  }
  .aboutus .part1 {
    flex-direction: column-reverse;
  }
}
</style>
