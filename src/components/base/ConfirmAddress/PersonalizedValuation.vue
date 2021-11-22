<template>
  <div class="container mt-4 mb-1 per-validation">
    <div class="text-center item1">
      <p class="text-color-1 DMSerifRegular">
        User name, one last step to your home valuation
      </p>
      <p cRoboto-Regular>Schedule your introduction call</p>
    </div>
    <div v-if="tab_visible == 'menu_one'">
      <div class="item2 mb-5">
        <VueCtkDateTimePicker
          v-model="yourtime"
          buttonColor="#FFB600"
          color="#FFB600"
          minuteInterval="5"
          input-size="lg"
          :maxDate="maxDate"
          :minDate="minDate"
          no-weekends-days="true"
          firstDayOfWeek="1"

        />
      </div>
      <div class="col-8 col-md-4 mx-auto element4 pl-0">
        <button
          class="btn w-100 Roboto-Medium "
          type="button"
          @click.prevent="openParttwo"
        >
          Continue
        </button>
      </div>
      <div class="item3 mt-5 mb-0">
        <p class="text-center DMSerifRegular text-color-1">
          What to expect on the call
        </p>
        <div class="gridcol">
          <div class="grid">
            <div class="image mx-auto mb-3">
              <img
                src="../../../assets/image/icon/g1.svg"
                class="w-100 h-100"
                alt="icon"
              />
            </div>
            <p class="text-center">
              Provide more details on your moving plans, and your dream home if
              you are also buying.
            </p>
          </div>
          <div class="grid">
            <div class="image mx-auto mb-3">
              <img
                src="../../../assets/image/icon/g2.svg"
                class="w-100 h-100"
                alt="icon"
              />
            </div>
            <p class="text-center">
              We'll share how Sweetly can help you achieve your buying and
              selling goals.
            </p>
          </div>
          <div class="grid">
            <div class="image mx-auto mb-3">
              <img
                src="../../../assets/image/icon/g3.svg"
                class="w-100 h-100"
                alt="icon"
              />
            </div>
            <p class="text-center">
              We'll ask some questions to help us match you with the perfect
              Sweetly Agent.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="tab_visible == 'menu_two'">
      <div class="row shadow item7">
        <div class="col-12 col-md-4 element1 border-right p-3 p-md-5">
          <div
            class="element1a d-flex align-items-center justify-content-center"
            @click="tab_visible = 'menu_one'"
          >
            <img
              src="../../../assets/image/icon/toright.svg"
              alt="icon"
              class="w-75 h-75"
            />
          </div>
          <div class="element1b mt-3">
            <p class="Roboto-Regular text-color-3">Sweetly Operations Team</p>
            <p class="Roboto-Medium text-color-3">Sweetly Introduction Call</p>
          </div>
          <div class="element1c my-1 d-flex align-items-baseline">
            <div class="image">
              <img
                src="../../../assets/image/icon/clock.svg"
                class=""
                alt="icon"
              />
            </div>
            <p class="Roboto-Regular text-color-3 ml-2">15 min</p>
          </div>
          <div class="element2a my-1 d-flex align-items-baseline">
            <div class="image">
              <img
                src="../../../assets/image/icon/calendar.svg"
                class=""
                alt="icon"
              />
            </div>
            <p class="Roboto-Medium  ml-2">
              {{ filtimefrom(yourtime) }} - {{ filtimeto() }},
              {{ fildate(yourtime) }}
            </p>
          </div>
          <div class="element1c my-1 d-flex align-items-baseline">
            <div class="image">
              <img
                src="../../../assets/image/icon/earth.svg"
                class=""
                alt="icon"
              />
            </div>
            <p class="Roboto-Regular text-color-3 ml-2">location</p>
          </div>
        </div>
        <div class="col-12 col-md-8 element2 p-3 p-md-5">
          <p class="Roboto-Regular text-color-3">Enter Details</p>
          <form class="w-100 w-md-75">
            <div class="form-group">
              <label for="name" class="Roboto-Regular text-color-3"
                >Name *</label
              >
              <input
                type="text"
                class="form-control form-control-lg"
                id="name"
                v-model="name"
              />
            </div>
            <div class="form-group">
              <label for="email" class="Roboto-Regular text-color-3"
                >Email *</label
              >
              <input
                type="email"
                class="form-control form-control-lg"
                id="email"
                v-model="email"
              />
            </div>
            <div class="form-group" v-if="showGuestemail">
              <label for="email" class="Roboto-Regular text-color-3"
                >Guest Email(s)</label
              >
              <input
                type="email"
                class="form-control form-control-lg"
                id="email"
                v-model="Guestemail"
              />
            </div>
            <button
              type="button"
              @click="showGuestemail = true"
              class="btn btn-submit Roboto-Regular"
              v-if="!showGuestemail"
            >
              Add Guests
            </button>
          </form>
          <div class="form-group w-100 w-md-75 mt-4">
            <label for="phone" class="Roboto-Regular text-color-3"
              >What's your phone number?*</label
            >
            <vue-phone-number-input
              v-model="phone"
              size="lg"
              @update="resultsExample = $event"
            />
          </div>
          <br />
          <div class="col-8 col-md-4 element4 pl-0">
            <button
              class="btn w-100 Roboto-Medium "
              type="button"
              @click.prevent="scheduleEvent"
            >
              Schedule Event
            </button>
          </div>
          <p class="text-color-3 Roboto-Regular mt-2">
            You will be redirected to an external site.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data: () => ({
    tab_visible: "menu_two",
    minDate: new Date(),
    yourtime: new Date(),
    phone: null,
    email: null,
    name: null,
    resultsExample: null,
    Guestemail: null,
    showGuestemail: false,
  }),
  computed: {
    maxDate() {
      var result = new Date();
      result.setDate(result.getDate() + 4);
      return result;
    },
  },
  methods: {
    fildate(value) {
      return moment(value).format("dddd") + "," + moment(value).format("LL");
    },
    filtimefrom(value) {
      return moment(value).format("LT");
    },
    filtimeto() {
      return moment(new Date(this.yourtime).getTime() + 15 * 60000).format(
        "LT"
      );
    },

    openParttwo() {
      if(!this.yourtime){
        this.errtime = 'Opps,please make sure you  input time'
      }
      this.tab_visible = "menu_two";
    },
    scheduleEvent() {
      this.$router.push({ name: "SuceessMsg" });
    },
    returncontactpage() {
      this.$emit("opencontactpage");
    },
  },
};
</script>
<style scoped>
.per-validation .item1 p:first-child {
  font-size: 30px;
}
.per-validation .item1 p:nth-child(2) {
  font-size: 18px;
  color: #434242;
}
.per-validation .item2 {
  width: 60%;
  margin: auto;
}
.per-validation .item3 p:first-child {
  font-size: 18px;
}
.per-validation .gridcol {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 34px;
  grid-row-gap: 10px;
  padding: 10px;
}
.per-validation .gridcol .grid .image {
  width: 60px;
  height: 60px;
}
.per-validation .gridcol .grid p {
  color: #434242;
}
.per-validation .item7 {
  border-radius: 8px;
}
.per-validation .item7 .element1 .element1a {
  border-radius: 50%;
  border: 1px solid #707070;
  width: 45px;
  height: 45px;
}
.per-validation .item7 .element1 .element1b p:first-child {
  font-size: 20px;
}
.per-validation .item7 .element1 .element1b p:nth-child(2) {
  font-size: 28px;
}
.per-validation .item7 .element1 .element1c .image {
  width: 20px;
  height: 20px;
}
.per-validation .item7 .element1 .element1c {
  font-size: 20px;
}
.per-validation .item7 .element1 .element2a {
  font-size: 20px;
  color: #00a19b;
  font-weight: 600;
}

.per-validation .item7 .element2 p:first-child {
  font-size: 22px;
}
.per-validation .item7 .element2 form button {
  color: #ffb600;
  border: 1px solid #ffb600;
  border-radius: 20px;
  font-size: 1em;
  transition: ease-in 0.3s;
}
.per-validation .item7 .element2 form button:hover {
  background: #ffb600;
  color: #fff;
}
.per-validation .element4 button {
  background: #ffb600;
  border: 1px solid #ffb600;
  color: #fff;
  border-radius: 25px;
  font-size: 1.2em;
  line-height: 2;
  transition: ease-in 0.3s;
}
.per-validation .element4 button:hover {
  color: #ffb600;
  background: #fff;
}
</style>
