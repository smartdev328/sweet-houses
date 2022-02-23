<template>
  <div class="contact-details-form">
    <div class="px-0 px-md-5 w-100 mx-0">


    <div v-if="tab_visible == 'menu_one'">
      <div class="row">
        <div class="col-12 row p-0 col-md-6 mx-auto d-flex">
          <div class="col-1 col-md-1 mr-sm-auto ml-md-auto">
            <p class="h1" @click="openhomeinfopage" style="cursor: pointer">
              <b-icon icon="chevron-left"></b-icon>
            </p>
          </div>
          <div class="item1z p-1 p-md-4 col-12 col-md-11">
            <div class="item1az text-center">
              <p class="text-color-1 DMSerifRegular">
                How did you hear about us?
              </p>
            </div>
            <div class="item1bz row">
              <div
                class="col-8 col-md-6 mx-auto  "
                v-for="channel in socialchanels"
                :key="channel.id"
              >
                <div
                  class="
                    shadow-sm
                    bg-white
                    px-4
                    text-center
                    element1z
                    Roboto-Regular
                  "
                  @click="changechannel(channel.name)"
                >
                  <p>{{ channel.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="tab_visible == 'menu_two'" class="row container px-0 w-100 mx-0">
      <div class="col-1 col-md-1 mr-sm-auto ml-md-auto">
        <p class="h1" @click="tab_visible = 'menu_one'" style="cursor: pointer">
          <b-icon icon="chevron-left"></b-icon>
        </p>
      </div>
      <div class="col-12 col-md-5 mx-auto item11 text-center px-3 py-4">
        <div class="item11a text-center">
          <p class="text-color-1 DMSerifRegular">How can we get in touch?</p>
          <p class="Roboto-Regular text-color-3 my-2">
            We need more details about your home's unique features to prepare
            your personalized valuation.
          </p>
        </div>
        <form action="" class="container">
          <div
            class="form-group mx-auto my-3 text-left"
            :class="{ 'input--error': msg.fullname && !fullname }"
          >
            <div class="">
              <input
                type="text"
                id="hometype"
                placeholder="Full name"
                v-model="fullname"
                class="form-control form-control-lg bg-white"
              />
            </div>
            <span
              style="color: #dc3545; font-size: 16px"
              v-if="msg.fullname && !fullname"
              >{{ msg.fullname }}</span
            >
          </div>
          <div
            class="form-group mx-auto my-3 text-left"
            :class="{ 'input--error': msg.email ,  'input--error': (emailnotmaildmsg && !emailisvalid) }"
          >
            <div class="">
              <input
                type="email"
                id="hometype"
                placeholder="Email"
                v-model="email"
                class="form-control form-control-lg bg-white"
              />
            </div>
            <span
              style="color: #dc3545; font-size: 16px"
              v-if="msg.email "
              >{{ msg.email }}</span
            >
             <span
              style="color: #dc3545; font-size: 16px"
              v-if="emailnotmaildmsg && !emailisvalid"
              >{{ emailnotmaildmsg }}</span
            >
          </div>
          <div class="form-group mx-auto my-3 text-left">
            <div class="">
              <vue-phone-number-input
                v-model="phone"
                @update="resultsExample = $event"
                color="#ffb600"
                error-color="orangered"
                default-country-code="CA"
              />
            </div>
            <span style="color: #dc3545; font-size: 16px" v-if="msg.phone && !phone">{{
              msg.phone
            }}</span>
             <span style="color: #dc3545; font-size: 16px" v-if="phone && resultsExample && !resultsExample.isValid">{{
              msg.phone
            }}</span>
          </div>

          <div class="form-group mx-auto my-3">
            <button
              class="
                btn btn-continue
                w-100
                px-4
                d-flex
                justify-content-between
                align-items-baseline
              "
              type="button"
              @click.prevent="openPersonalized"
            >
              <p v-if="!loadvalid" class="mb-0">Continue</p>
              <p v-if="!loadvalid" class="h4 text-white mb-0">
                <b-icon icon="arrow-right"></b-icon>
              </p>
              <div v-if="loadvalid" class="lds-ring mx-auto">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
          </div>
        </form>
      </div>
      <div class="col-12 col-md-5 partb pt-3">
        <div class="item1">
          <p class="text-color-1 Roboto-Medium">Why choose Sweetly?</p>
        </div>
        <div class="w-100 br-bg shadow my-4" style="height: 2px"></div>
        <div class="item2">
          <p class="text-color-2 Roboto-Regular">Sell without showings.</p>
          <p class="my-4 text-color-2 Roboto-Regular">
            Choose Your Own Moving Date.
          </p>
          <div class="text-color-2 d-flex">
            <p class="Roboto-Medium font-weight-bold mr-2">50+</p>
            <p class="h3 mr-2">
              <b-icon icon="star-fill" variant="warning"></b-icon>
            </p>
            <p class="h3 mr-2">
              <b-icon icon="star-fill" variant="warning"></b-icon>
            </p>
            <p class="h3 mr-2">
              <b-icon icon="star-fill" variant="warning"></b-icon>
            </p>
            <p class="h3 mr-2">
              <b-icon icon="star-fill" variant="warning"></b-icon>
            </p>
            <p class="h3 mr-2">
              <b-icon icon="star-fill" variant="warning"></b-icon>
            </p>
          </div>
          <p class="text-color-2 Roboto-Regular">Five-star reviews on Google</p>
        </div>
      </div>
    </div>
     </div>
           <b-modal id="err-model"
           v-model="errmodel"
           ref="errmodel"
        header-bg-variant="white"
        body-bg-variant="white"
        modal-ok="confirm"
        hide-header-close
        no-close-on-backdrop
        footer-bg-variant="white">
           <err-model></err-model>
        </b-modal>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
export default {
  data: () => ({
    tab_visible: "menu_one",
    socialchanel: null,
    socialchanels: [
      { name: "Facebook" },
      { name: "Instagram" },
      { name: "Google" },
      { name: "Linkedin" },
      { name: "Blog/ Website" },
      { name: "News (TV, web, print)" },
      { name: "Radio" },
      { name: "Letter / Postcard" },
      { name: "Friend" },
      { name: "Sweetly REALTOR®" },
      { name: "Billboard" },
      { name: "YouTube" },
      { name: "Other" },
    ],
    msg: {},
    fullname: null,
    email: null,
    phone: null,
    resultsExample: null,
    loadvalid: false,
    emailisvalid: false,
    emailnotmaildmsg: "",
    errors:{},
    errmodel:false
  }),
  methods: {
    checkform() {
      this.msg = {};
      this.emailnotmaildmsg = "";
      if (!this.fullname) {
        this.msg.fullname = "Fullname is required";
      }
      if (!this.email) {
        this.msg.email = "email is required";
      }
      if (
        this.email &&
        !this.email.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        this.msg.email = "please enter a valid email";
      }

      if (!this.phone) {
        this.msg.phone = "phone is required";
      }
      if (!this.resultsExample.isValid) {
        this.msg.phone = "enter a correct phone number";
      }
      if (
        this.fullname &&
        this.email &&
        this.phone &&
        this.resultsExample.isValid
      //  this.emailisvalid
      ) {
        return true;
      }
    },
    changechannel(value) {
      this.socialchanel = value;
      this.tab_visible = "menu_two";
    },
    openhomeinfopage() {
      this.$emit("openhomeinfopage");
    },
    scheduleEvent() {
      this.$store.dispatch('Post_Instant').then((res) =>{
        if(res.data.prices_offer.status == 200){
           Swal.fire({
                  title: 'Success!',
                  icon: 'success',
                  confirmButtonText: 'Ok',
                  showConfirmButton:false,
                  timer: 1500
                })
                this.$router.push({ name: "RerportHome" })
        }else{
          this.loadvalid = false;
           this.$bvModal.show('err-model')
            // Swal.fire({
            //       title: 'ERROR!',
            //       icon: 'error',
            //       confirmButtonText: 'Ok',
            //       showConfirmButton:'Ok',
            //       confirmButtonColor:'#ffb600',
            //       html: `We were unable to find your address in our database  <br>
            //       Please contact Sweetly directly so we can assist you in getting Maximum Value for your home.<br>
            //       780-477-9338<br>
            //       <b>info@sellsweetly.ca</b>

            //       `,
            //     })
        }



      }).catch((err) =>{
        this.loadvalid = false;
           Swal.fire({
                  title: 'ERROR!',
                  icon: 'error',
                  confirmButtonText: 'Ok',
                  showConfirmButton:false,
                  timer: 1500
                })
                this.errors = err || {};
      })

    },
    openPersonalized() {
      if (this.checkform() && Object.keys(this.msg).length == 0) {
        this.loadvalid = true;
        //  let contactinput = {};
        //  contactinput.socialchanel = this.socialchanel;
        //  contactinput.fullname = this.fullname;
        //  contactinput.email = this.email;
        //  contactinput.phone = this.phone;
        //  this.$store.commit("setContactDetail", contactinput);
        // this.scheduleEvent()
      this.$http
      .get(
          `external/email_verif/?email=${this.email}`
          )
          .then((res) => {
            console.log(res.data)
           if (res.data.data) {
              this.emailisvalid = true;
            this.emailnotmaildmsg = "";
              let contactinput = {};
              contactinput.socialchanel = this.socialchanel;
              contactinput.fullname = this.fullname;
              contactinput.email = this.email;
              contactinput.phone = this.phone;
              this.$store.commit("setContactDetail", contactinput);
              this.scheduleEvent()
              document.body.scrollTop = 0;
            } else {
             this.loadvalid = false;
             this.emailisvalid = false;
            this.emailnotmaildmsg = "please enter a real email";
           }
          });
      }
    },
  },
};
</script>
<style scoped>
.contact-details-form .item11 {
  background: #edf3f2;
  border-radius: 6px;
}
.contact-details-form .item11 .item11a p:first-child {
  font-size: 40px;
  width: 60%;
  margin: auto;
  font-weight: 600;
}
.contact-details-form .item11 .item11a p {
  font-size: 18px;
  color: #434242;
}
.contact-details-form form .btn-continue {
  line-height: 1.7;
  background: #ffb600;
  color: #fff;
  border-radius: 4px;
  font-size: 1.2em;
}
.contact-details-form form .btn-continue:hover {
  background: #ffb700d2;
}
.contact-details-form .btn-continue p:first-child {
  font-size: 24px;
}

input[type="email"]:focus {
  border: 1px solid rgb(255, 182, 0);
  box-shadow: inset 0 1px 1px rgba(255, 182, 0, 0.9), 0 0 4px #ffb600;
}
input[type="text"]:focus {
  border: 1px solid rgb(255, 182, 0);
  box-shadow: inset 0 1px 1px rgba(255, 182, 0, 0.9), 0 0 4px #ffb600;
}
.contact-details-form .partb .item1 p {
  font-size: 32px;
}
.contact-details-form .partb .br-bg {
  height: 1px;
  background: #7070708c;
}
.contact-details-form .partb .item2 p {
  font-size: 20px;
}
.contact-details-form .item1z {
  background: #edf3f2;
  border-radius: 6px;
}
.contact-details-form .item1z .item1az {
  font-size: 30px;
}
.contact-details-form .item1z .item1bz .element1z {
  line-height: 2;
  border-radius: 4px;
  cursor: pointer;
  color: #434242;
}
.contact-details-form .item1z .item1bz .element1z:hover {
  background: #7070701a !important;
}
.input--error input {
  border: 1px solid #f79483 !important;
  box-shadow: rgb(247 148 131/24%) 0px 0px 0px 3px !important;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 40px;
  height: 40px;
  margin: 1px;
  border: 4px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 600px) {
  .contact-details-form .item1z .item1az {
    font-size: 25px;
  }
  .contact-details-form .item11 .item11a p:first-child {
    font-size: 20px;
    width: 90%;
    margin: auto;
    font-weight: 600;
  }
}
</style>
