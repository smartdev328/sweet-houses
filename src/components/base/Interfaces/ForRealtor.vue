<template>
  <div class="container">
    <div class="realtor my-5">
      <div class="item1 text-center">
        <p class="Roboto-Medium">
          Sweetly Will Buy Your Active Listing, So That Your Clients Can Move
          Onto Whatever's Next.
        </p>
        <br />
        <p class="text-color-1 Roboto-Regular">
          Never let a listing expire! Never let your client lose the house they
          love because they can't sell the one they own. Sweetly can help, and
          you can even keep your current listing active.
        </p>
      </div>
      <div class="item3">
        <div class="p-2 p-md-5">
          <div class="element1 text-center Roboto-Regular">
            <p>
              Please tell us a bit about your clients' situation.
            </p>
          </div>
          <form @submit.prevent="send">
            <div class="row Roboto-Regular">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="first_name">First Name:*</label>
                  <input
                    type="text"
                    id="first_name"
                    class="form-control border-0 shadow-sm"
                    :class="{ p_invalid: msgs.first_name }"
                    @input="inputfirstname()"
                    v-model="inputdata.first_name"
                  />
                  <span v-if="msgs.first_name" style="color: #fc5353;">{{
                    msgs.first_name
                  }}</span>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="last_name">Last Name:*</label>
                  <input
                    type="text"
                    id="last_name"
                    class="form-control border-0 shadow-sm"
                    v-model="inputdata.last_name"
                    :class="{ p_invalid: msgs.last_name }"
                    @input="inputlastnamea()"
                  />
                  <span v-if="msgs.last_name" style="color: #fc5353;">{{
                    msgs.last_name
                  }}</span>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="email">Email Address:*</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control border-0 shadow-sm"
                    v-model="inputdata.email"
                    :class="{
                      p_invalid: msgs.email,
                      p_invalid: emailnotmaildmsg && !emailisvalid,
                    }"
                    @input="inputemail()"
                  />
                  <span v-if="msgs.email" style="color: #fc5353;">{{
                    msgs.email
                  }}</span>
                  <span
                    style="color: #dc3545; font-size: 16px"
                    v-if="emailnotmaildmsg && !emailisvalid"
                    >{{ emailnotmaildmsg }}</span
                  >
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="phone_number">Phone:*</label>
                  <div class="">
                    <vue-phone-number-input
                      id="phone_number"
                      v-model="phone"
                      @update="resultsExample = $event"
                      color="#ffb600"
                      error-color="orangered"
                      default-country-code="CA"
                    />
                  </div>
                  <!--                  <input type="number" id="phone_number" class="form-control border-0 shadow-sm" v-model="inputdata.phone_number"-->
                  <!--                         :class="{'p_invalid' : msgs.phone_number}"-->
                  <!--                         @input="inputphone_number()"-->
                  <!--                  />-->
                  <span
                    style="color: #dc3545; font-size: 16px"
                    v-if="msgs.phone && !phone"
                    >{{ msgs.phone }}</span
                  >
                  <span
                    style="color: #dc3545; font-size: 16px"
                    v-if="phone && resultsExample && !resultsExample.isValid"
                    >{{ msgs.phone }}</span
                  >
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="comments">Questions / Comments:*</label>
                  <textarea
                    id="comments"
                    class="form-control border-0 shadow-sm"
                    rows="4"
                    :maxlength="maxlength"
                    :class="{ p_invalid: msgs.comments }"
                    @input="
                      calc_char();
                      msgs.comments ? (msgs.comments = '') : '';
                    "
                    v-model="inputdata.comments"
                  ></textarea>
                  <span :class="{ zero: reachzero }"
                    >remaining char is {{ remainingcahr }}</span
                  >
                  <span v-if="msgs.comments" style="color: #fc5353;">{{
                    msgs.comments
                  }}</span>
                </div>
              </div>
            </div>
            <div class="col-10 col-md-3 mx-auto">
              <button type="submit" class="btn btn-submit w-100">
                <span v-if="loading">loading...</span>
                <span v-else>Submit</span>
              </button>
            </div>
          </form>
          <div class="text-center mt-4 text-color-1 Roboto-Regular element4">
            <p>
              By proceeding, you consent to receive calls and texts at the
              number you provided, including marketing by auto-dialer,
              pre-recorded voicemail, and email, from this site's operators
              about real estate related matters, but not as a condition of
              purchase. You also agree to our Terms of Service, and to our
              Privacy Policy regarding the information relating to you. Message
              and data rates may apply. This consent applies even if you are on
              a corporate, state or national Do Not Call list. .
            </p>
            <p>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply
            </p>
          </div>
        </div>
      </div>

      <div class="item4">
        <div class="my-5">
          <div class="element1">
            <p class="text-center text-color-1 Roboto-Medium">
              Advantages For You
            </p>
          </div>
          <div class="element2">
            <div class="partcol">
              <div class="text-color-1 Roboto-Medium">
                <p class="p1">Certainty</p>
              </div>
              <div class="image my-5">
                <img
                  src="../../../assets/image/icon/p-1.svg"
                  class="w-100 h-100"
                  alt=""
                />
              </div>
              <div>
                <p class="p2 Roboto-Regular">
                  We can provide an unconditional commitment to buy your listing
                  within days. Your client can focus on what's next.
                </p>
              </div>
            </div>

            <div class="partcol">
              <div class="text-color-1Roboto-Medium">
                <p class="p1">We Share Commisssion</p>
              </div>
              <div class="image my-5">
                <img
                  src="../../../assets/image/icon/p-2.svg"
                  class="w-100 h-100"
                  alt=""
                />
              </div>
              <div>
                <p class="p2 Roboto-Regular">
                  When we buy your active listing, or a house for your referred
                  customer, we'll resell it and offer YOU the listing.
                </p>
              </div>
            </div>

            <div class="partcol">
              <div class="text-color-1 Roboto-Medium">
                <p class="p1">More Closed Deals</p>
              </div>
              <div class="image my-5">
                <img
                  src="../../../assets/image/icon/p-3.svg"
                  class="w-100 h-100"
                  alt=""
                />
              </div>
              <div>
                <p class="p2 Roboto-Regular">
                  Sweetly offers ‘out of the box’ programs to provide a fair and
                  unconditional sale for your clients’ property which empowers
                  them to make non-contingent winning offers on their next home
                  – with you!
                </p>
              </div>
            </div>
          </div>
          <div class="block-border"></div>
        </div>
      </div>
      <div class="item4">
        <div class="my-5">
          <div class="element1 mb-5">
            <p class="text-center text-color-1 Roboto-Medium">
              Advantages For Your Clients
            </p>
          </div>
          <div class="element2">
            <div class="partcol">
              <div class="text-color-1 Roboto-Medium">
                <p class="p1">Convenience</p>
              </div>
              <div class="image my-5">
                <img
                  src="../../../assets/image/icon/p-4.svg"
                  class="w-100 h-100"
                  alt=""
                />
              </div>
              <div>
                <p class="p2 Roboto-Regular">
                  Sweetly makes it easy for clients sell for Maximum Value
                  without public showings. Customers choose their own possession
                  date, and may even buy their next home before selling their
                  current home – No more condition-to-sale of buyers’ home.
                </p>
              </div>
            </div>

            <div class="partcol">
              <div class="text-color-1 Roboto-Medium">
                <p class="p1">Empowered</p>
              </div>
              <div class="image my-5">
                <img
                  src="../../../assets/image/icon/p-5.svg"
                  class="w-100 h-100"
                  alt=""
                />
              </div>
              <div>
                <p class="p2 Roboto-Regular">
                  Knowing for certain that the house is SOLD! Your client can
                  make a strong, winning offer on their next home - with you!
                </p>
              </div>
            </div>

            <div class="partcol">
              <div class="text-color-1 Roboto-Medium">
                <p class="p1">Save Money</p>
              </div>
              <div class="image my-5">
                <img
                  src="../../../assets/image/icon/p-6.svg"
                  class="w-100 h-100"
                  alt=""
                />
              </div>
              <div>
                <p class="p2 Roboto-Regular">
                  Sweetly provides certainty of a sale, and flexibility for a
                  customer to choose/change the possession date. There’s no need
                  to settle for a home that’s not perfect or moving twice and
                  placing valuables in storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item6">
        <div class="p-4">
          <div class="item6a text-center">
            <div class="element1 Roboto-Medium">
              <p>The Basic Sweetly Advantages</p>
            </div>
            <div class="element2 Roboto-Regular">
              <p>
                Putting Your Client Into Their Perfect Home Before They Sell
                Their Old One Is As Easy As 1, 2, 3!
              </p>
            </div>
          </div>
          <div class="item6b">
            <div class="row align-items-center">
              <div class="col-12 col-md-6">
                <div class="circleone pt-1 pt-md-5 pb-2 px-5 text-center">
                  <div class="icon mx-auto">
                    <img
                      src="../../../assets/image/icon/1.svg"
                      class="w-100 h-100"
                      alt=""
                    />
                  </div>
                  <div>
                    <p class="pa1 text-color-1 Roboto-Medium">
                      Clients Can Choose The Program That Works Best For Them.
                    </p>
                  </div>
                  <div>
                    <p class="pa2 text-color-1 Roboto-Regular">
                      Sweetly actually ‘buys’ the clients’ property on a day
                      they choose. With the owners permission, Sweetly invests
                      up to $25,000 on the right improvements to ensure the home
                      shows its best and sells for Maximum Value. We can also
                      offer an equity advance to help clients buy their next
                      home; we even offer a Swap to help customers move into
                      their new home without paying the bills on two homes at
                      the same time.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 d-flex justify-content-center">
                <div class="n1">
                  <img
                    src="../../../assets/image/icon/na1.svg"
                    class="w-100 h-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <br /><br />
            <div class="row align-items-center flex-dir-col">
              <div class="col-12 col-md-6 d-flex justify-content-center">
                <div class="n2">
                  <img
                    src="../../../assets/image/icon/na2.svg"
                    class="w-100 h-100"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="circleone pt-1 pt-md-5 pb-2 px-5 text-center">
                  <div class="icon mx-auto">
                    <img
                      src="../../../assets/image/icon/2.svg"
                      class="w-100 h-100"
                      alt=""
                    />
                  </div>
                  <div>
                    <p class="pa1 text-color-1  Roboto-Medium">
                      Sweetly Makes All The Monthly Ownership Payments On The
                      Previous Home.
                    </p>
                  </div>
                  <div>
                    <p class="pa2 text-color-1 Roboto-Regular">
                      We take care of the holding costs on the home to be sold.
                      Your client only has to make payments on their new
                      property, offering additional financial flexibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br /><br />
            <div class="row align-items-center">
              <div class="col-12 col-md-6">
                <div class="circleone pt-1 pt-md-5 pb-2 px-5 text-center">
                  <div class="icon mx-auto">
                    <img
                      src="../../../assets/image/icon/3.svg"
                      class="w-100 h-100"
                      alt=""
                    />
                  </div>
                  <div>
                    <p class="pa1 text-color-1 Roboto-Medium">
                      Sweetly Resells The Property We Buy On The Open (MLS®)
                      Market.
                    </p>
                  </div>
                  <div>
                    <p class="pa2 text-color-1 Roboto-Regular">
                      When we purchase a home, we (often) make the improvements
                      that increase the price and appeal. Then we list it on
                      MLS® - with you!
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 d-flex justify-content-center">
                <div class="n1">
                  <img
                    src="../../../assets/image/icon/na3.svg"
                    class="w-100 h-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item7">
        <div class="p-4">
          <div class="element1 text-center text-color-1 Roboto-Medium">
            <p>What Agents Are Saying</p>
          </div>
          <div class="element2 text-color-1 Roboto-Regular">
            <p>
              ...I recently had and experience with a cooperating brokerage that
              I thought was worthy of sharing... it is an option for us to use
              to better serve our clients' best interests... Sweetly provides an
              option for us as agents to cooperate with and allow our clients to
              proceed forward on those occasions when it seems that everything
              else is falling apart.
            </p>
            <br />
            <p>
              ... within a day we had an offer (from Sweetly)... we had a firm
              deal in place so that my clients could proceed with their
              purchase...
            </p>
            <br />
            <p>
              ...[Sweetly] provided an out clause in the contract so that if the
              seller accepted another offer prior to closing, they could cancel
              and sell to another buyer... I was able to secure another buyer
              and... Sweetly never ended up having to purchase the home.
            </p>
            <br />
            <p>...my clients would have lost their dream home.</p>
            <br />
            <p>
              This option can also work for people who have a sale of a home
              condition...
            </p>
            <br />
            <p>Sweetly can come in and purchase the home for sale...</p>
            <br />
            <p>
              I'm grateful (the model) existed to help my clients achieve their
              real estate dream.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      paginationpage: 1,
      inputdata: {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        comments: "",
      },
      loading: false,
      emailisvalid: false,
      emailnotmaildmsg: "",
      reachzero: false,
      maxlength: 400,
      remainingcahr: 400,
      msgs: {},
      errors: [],
      phone: null,
      resultsExample: null,
    };
  },
  computed: {
    le() {
      return Object.keys(this.msgs).length == 0;
    },
    phonenumber() {
      if (this.resultsExample) {
        return this.resultsExample.formatInternational;
      } else {
        return "";
      }
    },
  },
  methods: {
    calc_char: function() {
      this.remainingcahr = this.maxlength - this.inputdata.comments.length;
      this.reachzero = this.remainingcahr === 0;
    },
    inputfirstname() {
      if (this.msgs.first_name) {
        if (!this.inputdata.first_name.length < 3) {
          this.msgs.first_name = "";
        }
      }
    },
    inputemail() {
      if (this.msgs.email) {
        if (!this.inputdata.email.length < 3) {
          this.msgs.email = "";
        }
      }
    },
    inputlastnamea() {
      if (this.msgs.last_name) {
        if (!this.inputdata.last_name.length < 3) {
          this.msgs.last_name = "";
        }
      }
    },
    inputphone_number() {
      if (this.msgs.phone_number) {
        if (!this.inputdata.phone_number.length < 3) {
          this.msgs.phone_number = "";
        }
      }
    },
    checkform() {
      this.msgs = {};
      this.emailnotmaildmsg = "";
      this.errors = [];
      if (!this.inputdata.first_name) {
        this.msgs.first_name = "required";
      }
      if (this.inputdata.first_name && this.inputdata.first_name.length < 3) {
        this.msgs.first_name = "First Name must be at 3 char";
      }
      if (!this.inputdata.last_name) {
        this.msgs.last_name = "required";
      }
      if (this.inputdata.last_name && this.inputdata.last_name.length < 3) {
        this.msgs.last_name = "Last Name must be at 3 char";
      }
      if (!this.inputdata.comments) {
        this.msgs.comments = "comments is required";
      }
      if (!this.inputdata.email) {
        this.msgs.email = "Email is required";
      }
      if (
        this.inputdata.email &&
        !this.inputdata.email.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        this.msgs.email = "please enter emai correctly";
      }

      if (!this.phone) {
        this.msgs.phone = "phone is required";
      }
      if (!this.resultsExample.isValid) {
        this.msgs.phone = "enter a correct phone number";
      }

      if (
        this.inputdata.first_name &&
        this.inputdata.first_name.length > 2 &&
        this.inputdata.last_name &&
        this.inputdata.last_name.length > 2 &&
        this.inputdata.email &&
        this.phone &&
        this.inputdata.comments &&
        this.resultsExample.isValid
      ) {
        return true;
      }
    },
    send() {
      if (this.checkform() && Object.keys(this.msgs).length == 0) {
        this.inputdata.phone_number = this.phonenumber;
        this.loading = true;
        this.$http
          .get(`external/email_verif/?email=${this.inputdata.email}`)
          .then((res) => {
            if (res.data.data) {
              this.$http
                .post("forms/for_realtors/", this.inputdata)
                .then((res) => {
                  Swal.fire({
                    title: "success!",
                    text: "Success..! ",
                    icon: "success",
                    confirmButtonText: "Ok",
                    timer: 1500,
                  });
                  this.loading = false;
                  this.inputdata = {};
                  this.phone = null;
                  this.remainingcahr = 400;
                  this.reachzero = false;
                  return res;
                })
                .catch((err) => {
                  Swal.fire({
                    title: "Failed !",
                    text: err.response.data.msg,
                    icon: "error",
                    confirmButtonText: "Ok",
                  });
                  this.loading = false;
                });
              this.emailisvalid = true;
              this.emailnotmaildmsg = "";
            } else {
              this.loading = false;
              this.emailnotmaildmsg = "please enter a real email";
              this.emailisvalid = false;
            }
          });
      }
    },
  },
};
</script>
<style scoped>
.p_invalid {
  border: 1px solid red !important;
}
.realtor .item1 p:first-child {
  color: #434242;
  font-size: 32px;
  width: 75%;
  margin: auto;
}
.realtor .item1 p:last-child {
  font-size: 18px;
}

.realtor .item3 {
  background-color: #edf3f2;
  margin-bottom: 6em;
  border-radius: 12px;
}

.realtor .item3 .element1 p {
  font-size: 24px;
  color: #232323;
}
.realtor .item3 .btn-submit {
  background-color: #ffb600;
  color: #fff;
  line-height: 1.8;
  transition: 0.3s ease-in-out;
}
.realtor .item3 .btn-submit:hover {
  background-color: #fff;
  color: #ffb600;
  border: 1px solid #ffb600;
  line-height: 1.8;
}
.realtor .item3 .element4 p {
  font-size: 16px;
}
.realtor .item4 .element1 p {
  font-size: 30px;
}
.realtor .item4 .element2 {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 18px;
  grid-row-gap: 4px;
  padding: 10px;
}
.realtor .item4 .element2 .partcol .image {
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
}
.realtor .item4 .element2 .partcol .p1 {
  font-size: 22px;
  text-align: center;
}
.realtor .item4 .element2 .partcol .p2 {
  font-size: 16px;
  color: #232323;
  text-align: center;
  font-family: "Roboto", sans-serif;
}
.block-border {
  background-image: linear-gradient(
    to right,
    #707070 80%,
    rgba(255, 255, 255, 0) 7%
  );
  background-position: bottom;
  background-size: 20px 1px;
  background-repeat: repeat-x;
  height: 4px;
}
.realtor .item6 .item6a .element1 {
  font-size: 28px;
}
.realtor .item6 .item6a .element2 {
  font-size: 18px;
  color: #707070;
}
.realtor .item6 .item6b .circleone {
  background: #f8f5e4;
  border-radius: 50%;
  width: 550px;
  height: 550px;
}
.realtor .item6 .item6b .circleone .icon {
  width: 112px;
  height: 112px;
}
.realtor .item6 .item6b .circleone .pa1 {
  font-size: 24px;
}
.realtor .item6 .item6b .circleone .pa2 {
  font-size: 18px;
}
.realtor .item6 .item6b .n1,
.realtor .item6 .item6b .n2 {
  width: 280px;
  height: 280px;
}
.realtor .item6 .item6b .n2 img {
  transform: rotate(13deg);
}
.realtor .item6 .item6b .flex-dir-col {
  flex-direction: row;
}
.realtor .item7 {
  background: #edf3f2;
  border-radius: 8px;
}
.realtor .item7 .element1 p {
  font-size: 28px;
}
.realtor .item7 .element2 p {
  font-size: 16px;
}
textarea {
  resize: none;
}

@media only screen and (max-width: 600px) {
  .realtor .item1 p:first-child {
    font-size: 18px;
  }
  .realtor .item1 p:last-child {
    font-size: 14px;
  }
  .realtor .item3 .element1 p:first-child {
    font-size: 18px;
  }
  .realtor .item3 .element1 p:nth-child(2) {
    font-size: 14px;
  }
  .realtor .item3 .element4 p {
    font-size: 12px;
  }
  .realtor .item4 .element2 {
    grid-template-columns: auto;
  }
  .realtor .item6 .item6b .circleone {
    width: 320px;
    height: 320px;
  }
  .realtor .item6 .item6b .circleone .icon {
    width: 82px;
    height: 82px;
  }
  .realtor .item6 .item6b .circleone .pa1 {
    font-size: 14px;
  }
  .realtor .item6 .item6b .circleone .pa2 {
    font-size: 10px;
  }
  .realtor .item6 .item6b .n1,
  .realtor .item6 .item6b .n2 {
    width: 180px;
    height: 180px;
  }
  .realtor .item6 .item6b .flex-dir-col {
    flex-direction: column-reverse;
  }
  .realtor .item7 .element1 p {
    font-size: 20px;
  }
  .realtor .item7 .element2 p {
    font-size: 14px;
  }
  .realtor .item4 .element1 p {
    font-size: 20px;
  }
  .realtor .item6 .item6a .element1 {
    font-size: 20px;
  }
}
.zero {
  color: red;
  font-weight: bold;
}
</style>
