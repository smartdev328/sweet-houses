<template>
  <div class="showmap">
    <div style="display: block; width:auto;">
      <GmapMap
        ref="map"
        @click="checkClick"
        @zoom_changed="changezoom($event)"
        :center="{
          lat: this.currentLocation.lat,
          lng: this.currentLocation.lng,
        }"
        :zoom="zoom"
        @bounds_changed="changebounds($event)"
        @dragend="dropmap"
        map-type-id="terrain"
        :options="options"
        style="width: 100%; height: 90vh"
        class="mt-n5"
      >
      <gmap-polygon  v-bind:paths.sync="objpaths" v-if="objpaths.length" v-bind:options="{ strokeColor:'#0096FF' , fillColor:'#0096FF'}">
         </gmap-polygon>
        <gmap-info-window
          :options="infoWindowOptions"
          :position="infoWindowPosition"
          :opened="infoWindowOpened"
          @closeclick="handleInfoWindowClose"
        >
          <div class="info-window">
            <div v-if="activehomelad" class="text-center">
              <b-spinner
                variant="success"
                style="width: 3rem; height: 3rem;"
                label="Spinning"
              ></b-spinner>
            </div>
            <div v-if="Object.keys(activehome).length">
              <homemap-sale
                :homedata="activehome"
                :type="type"
                :boardId="boardId"
              ></homemap-sale>
            </div>
          </div>
        </gmap-info-window>
        <GmapCluster :styles="clusterStyles" :zoom-on-click="true">
          <GmapMarker
            v-for="m in listings"
            :key="m.id"
            :position="getpos(m.map)"
            :clickable="true"
            :animation="0"
            @click="handleMarkerClicked(m)"
            :draggable="false"
            :icon="icon"
            :label="{
              text: numFormatter(m.listPrice),
              color: 'white',
              size: '28',
            }"
          >
          </GmapMarker>
        </GmapCluster>
      </GmapMap>
    </div>
    <div class="group">
      <div class="group1">
        <div class="group1a px-1 px-md-4 py-4">
          <p class="DMSerifRegular text-white mb-1">Sell Without Showings</p>
          <div style="height:4px;width:34px;background:#FFB600"></div>
          <p class="Roboto-Regular text-white text-center">
            Get a Sweetly Estimate on the value of your home
          </p>
        </div>
        <div class="px-2 px-md-3">
          <div class="w-100 inputaddress">
            <img
              src="../../assets/image/icon/Iconly-Light-Location.svg"
              alt=""
            />
            <div class="item1b2">
              <span class="space"></span>
              <input
                type="text"
                class="Roboto-Regular"
                placeholder="Enter your home address"
              />
            </div>
            <div class="item1b3">
              <button class="" @click="getresult()">Get Estimate</button>
            </div>
          
          </div>
        </div>

        <div class="row mt-3 ">
          <div class="col-5 mx-auto mb-3">
            <div class="">
              <button class="w-100 Roboto-Regular" @click="aboutusroute">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="togglemap">
      <button class="Roboto-Regular btn bg-white" @click="submit">
        Show List
      </button>
    </div>
  </div>
</template>
<script>
import { gmapApi } from "vue2-google-maps";
import GmapCluster from "vue2-google-maps/dist/components/cluster";
import { mapState } from 'vuex';

export default {
  props: ["type"],
  computed: {
    ...mapState(["city"]),
    google: gmapApi,
    icon() {
      if (this.type == "sold") {
        return require("../../assets/image/icon/Recsold.svg");
      } else {
        return require("../../assets/image/icon/Recsale.svg");
      }
    },
    clusterStyles() {
      if (this.type == "sold") {
        return [
          {
            url: require("../../assets/image/icon/circlustersold.svg"),
            textColor: "#fff",
            height: 50,
            width: 50,
            textSize: 20,
          },
        ];
      } else {
        return [
          {
            url: require("../../assets/image/icon/circluster.svg"),
            textColor: "#fff",
            height: 50,
            width: 50,
            textSize: 20,
          },
        ];
      }
    },
    filteropt() {
      return this.$store.state.filteroptdata || {};
    },
    minBeds() {
      return this.filteropt.minBeds;
    },
    minBaths() {
      return this.filteropt.minBaths;
    },
    minParkingSpaces() {
      return this.filteropt.minParkingSpaces;
    },
    minSqft() {
      if (this.filteropt.minSqft == null || this.filteropt.minSqft == 1) {
        return "";
      } else {
        return this.filteropt.minSqft;
      }
    },
    maxSqft() {
      if (this.filteropt.maxSqft == null || this.filteropt.maxSqft == 4500) {
        return "";
      } else {
        return this.filteropt.maxSqft;
      }
    },
    minPrice() {
      if (this.filteropt.minPrice) {
        return this.filteropt.minPrice.replace(/,/g, "");
      } else {
        return "";
      }
    },
    maxPrice() {
      if (this.filteropt.maxPrice) {
        return this.filteropt.maxPrice.replace(/,/g, "");
      } else {
        return "";
      }
    },
    propertyType() {
      return this.filteropt.propertyType;
    },
    style() {
      return this.filteropt.style;
    },
    objpaths(){
      return this.path.map(this.getFullName)
    }
  },
  components: { GmapCluster ,  },
  data: () => ({
    visInfoWindow: false,
    centerLatitude: 0,
    centerLongitude: 0,
    latitude: 0,
    longitude: 0,
    marker: {},
    map: {},
    coordinates: null,
    //   currentLocation : { lat : 53.177338695404515, lng : -114.0218292213596},
    currentLocation: { lat: 0, lng: 0 },
    zoom: 10,
    bounds: {},
    options: {
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: true,
      rotateControl: true,
      fullscreenControl: true,
      disableDefaultUi: false,
      scrollwheel: true,
      minZoom: 8,
      maxZoom: 23,
    },
    listings: [],
    sw_long: -116.49237975846899,
    sw_lat: 52.90900663926977,
    ne_long: -111.55127868425024,
    ne_lat: 53.44400274231901,
    paths:[{lat:53.5698121,lng:-113.7138411},{lat:53.5693218,lng:-113.7138363},{lat:53.5556046,lng:-113.7137014},{lat:53.5544092,lng:-113.713704},{lat:53.5413429,lng:-113.7136116},{lat:53.5266951,lng:-113.713602},{lat:53.5121262,lng:-113.7135925},{lat:53.5122291,lng:-113.6927891},{lat:53.5122122,lng:-113.6888625},{lat:53.5106099,lng:-113.689132},{lat:53.5087048,lng:-113.6891482},{lat:53.5080947,lng:-113.6890757},{lat:53.5048749,lng:-113.6889555},{lat:53.4999871,lng:-113.6890843},{lat:53.4977479,lng:-113.6890661},{lat:53.4910453,lng:-113.6890763},{lat:53.4885728,lng:-113.6890577},{lat:53.4869158,lng:-113.6890453},{lat:53.4831343,lng:-113.6890514},{lat:53.4828383,lng:-113.6890512},{lat:53.4818717,lng:-113.6890719},{lat:53.4812491,lng:-113.6890997},{lat:53.4806669,lng:-113.6891258},{lat:53.4797678,lng:-113.6891483},{lat:53.4749584,lng:-113.6890914},{lat:53.474264,lng:-113.6890887},{lat:53.4739015,lng:-113.6890873},{lat:53.4680911,lng:-113.6890646},{lat:53.4654219,lng:-113.6890767},{lat:53.4649171,lng:-113.6890793},{lat:53.4617488,lng:-113.6890399},{lat:53.4568902,lng:-113.6890547},{lat:53.4541875,lng:-113.6890684},{lat:53.4526336,lng:-113.6891},{lat:53.4513777,lng:-113.6890669},{lat:53.4322761,lng:-113.6891646},{lat:53.4249719,lng:-113.6892156},{lat:53.4031081,lng:-113.6893129},{lat:53.4031439,lng:-113.6814914},{lat:53.4031474,lng:-113.6807293},{lat:53.4032229,lng:-113.6638585},{lat:53.40323,lng:-113.6622767},{lat:53.4031887,lng:-113.6496106},{lat:53.4031923,lng:-113.6472638},{lat:53.4026047,lng:-113.6469816},{lat:53.400673,lng:-113.6464666},{lat:53.3995734,lng:-113.6461978},{lat:53.3976363,lng:-113.6456458},{lat:53.3960779,lng:-113.6453927},{lat:53.3956445,lng:-113.64532},{lat:53.3944145,lng:-113.6451137},{lat:53.3934804,lng:-113.6448991},{lat:53.392203,lng:-113.645007},{lat:53.3894671,lng:-113.6466072},{lat:53.3855089,lng:-113.6495711},{lat:53.383858,lng:-113.6517254},{lat:53.3825013,lng:-113.6546115},{lat:53.3812854,lng:-113.6593386},{lat:53.3811702,lng:-113.6640872},{lat:53.3821301,lng:-113.669531},{lat:53.3840707,lng:-113.6782399},{lat:53.3843149,lng:-113.6827575},{lat:53.3833541,lng:-113.6870364},{lat:53.3813238,lng:-113.6900853},{lat:53.3788752,lng:-113.6916236},{lat:53.3759913,lng:-113.6927418},{lat:53.3726131,lng:-113.6921281},{lat:53.3711562,lng:-113.6911604},{lat:53.3690297,lng:-113.6887185},{lat:53.3663956,lng:-113.6861957},{lat:53.3637815,lng:-113.6854394},{lat:53.361976,lng:-113.6853196},{lat:53.3584929,lng:-113.687122},{lat:53.3556754,lng:-113.6903836},{lat:53.3547833,lng:-113.6942383},{lat:53.3547021,lng:-113.6945893},{lat:53.3547284,lng:-113.6960028},{lat:53.3523036,lng:-113.6960098},{lat:53.3522401,lng:-113.6931442},{lat:53.3518854,lng:-113.6931559},{lat:53.3512815,lng:-113.6934395},{lat:53.3499723,lng:-113.6934619},{lat:53.3484735,lng:-113.6923217},{lat:53.3471722,lng:-113.6910905},{lat:53.3470738,lng:-113.6908974},{lat:53.3468314,lng:-113.6900266},{lat:53.3464395,lng:-113.6891917},{lat:53.3463395,lng:-113.6889023},{lat:53.3457607,lng:-113.6881002},{lat:53.3452842,lng:-113.6872066},{lat:53.3449838,lng:-113.6867079},{lat:53.3450414,lng:-113.6838114},{lat:53.3387284,lng:-113.6837366},{lat:53.3382041,lng:-113.6837353},{lat:53.3381998,lng:-113.6835039},{lat:53.3381147,lng:-113.678909},{lat:53.337809,lng:-113.6748098},{lat:53.337569,lng:-113.6693727},{lat:53.3375666,lng:-113.6640078},{lat:53.3375914,lng:-113.6580056},{lat:53.3376591,lng:-113.6467295},{lat:53.3377888,lng:-113.6428231},{lat:53.3378255,lng:-113.6410721},{lat:53.3376567,lng:-113.6348103},{lat:53.3376248,lng:-113.6336283},{lat:53.3379015,lng:-113.6240036},{lat:53.3379773,lng:-113.6219538},{lat:53.3379807,lng:-113.6213714},{lat:53.3379566,lng:-113.6208381},{lat:53.3376134,lng:-113.6104005},{lat:53.3376096,lng:-113.610316},{lat:53.3376308,lng:-113.5863403},{lat:53.3376282,lng:-113.586168},{lat:53.3376255,lng:-113.5859967},{lat:53.3376183,lng:-113.5855261},{lat:53.3375872,lng:-113.5835052},{lat:53.3373455,lng:-113.5790216},{lat:53.3372558,lng:-113.5673765},{lat:53.3376401,lng:-113.5543538},{lat:53.3375965,lng:-113.5538412},{lat:53.3375559,lng:-113.5535985},{lat:53.3382899,lng:-113.5535719},{lat:53.3401329,lng:-113.551351},{lat:53.3443389,lng:-113.5477662},{lat:53.3497022,lng:-113.5436573},{lat:53.3532099,lng:-113.5412818},{lat:53.3600505,lng:-113.5362291},{lat:53.3644008,lng:-113.5331561},{lat:53.3746195,lng:-113.5256275},{lat:53.3805857,lng:-113.5212785},{lat:53.3857406,lng:-113.5176274},{lat:53.3875605,lng:-113.5162392},{lat:53.388778,lng:-113.5154481},{lat:53.393636,lng:-113.5139174},{lat:53.3960962,lng:-113.5130042},{lat:53.3960813,lng:-113.5117743},{lat:53.396069,lng:-113.507571},{lat:53.3958382,lng:-113.5023139},{lat:53.395685,lng:-113.4994844},{lat:53.3955959,lng:-113.4903273},{lat:53.3957903,lng:-113.487672},{lat:53.3957805,lng:-113.4735199},{lat:53.3957763,lng:-113.4674536},{lat:53.3741612,lng:-113.4675057},{lat:53.3668141,lng:-113.4674691},{lat:53.3667997,lng:-113.4643308},{lat:53.3668191,lng:-113.4551947},{lat:53.366895,lng:-113.4551948},{lat:53.3740401,lng:-113.4550496},{lat:53.373977,lng:-113.4426824},{lat:53.3812607,lng:-113.44255},{lat:53.3812673,lng:-113.4184098},{lat:53.3812674,lng:-113.418217},{lat:53.3812674,lng:-113.4180251},{lat:53.3812741,lng:-113.3936039},{lat:53.3667581,lng:-113.3935325},{lat:53.366709,lng:-113.39093},{lat:53.3667835,lng:-113.3443698},{lat:53.3957907,lng:-113.3446315},{lat:53.4160327,lng:-113.3445888},{lat:53.4188545,lng:-113.344614},{lat:53.4251311,lng:-113.3445664},{lat:53.4321342,lng:-113.3445619},{lat:53.4397359,lng:-113.3445664},{lat:53.4439806,lng:-113.3445492},{lat:53.448871,lng:-113.3445294},{lat:53.4539732,lng:-113.3445561},{lat:53.4539771,lng:-113.3442895},{lat:53.4582077,lng:-113.3445982},{lat:53.461223,lng:-113.3445982},{lat:53.4614857,lng:-113.3445982},{lat:53.4620659,lng:-113.3445982},{lat:53.4701133,lng:-113.3445982},{lat:53.4749155,lng:-113.3441262},{lat:53.4793341,lng:-113.3439974},{lat:53.479764,lng:-113.344113},{lat:53.4800827,lng:-113.3442847},{lat:53.4805089,lng:-113.3446841},{lat:53.4808729,lng:-113.3450352},{lat:53.4812035,lng:-113.3455545},{lat:53.4815119,lng:-113.3461018},{lat:53.4818704,lng:-113.3468265},{lat:53.4820972,lng:-113.347554},{lat:53.4822629,lng:-113.3484028},{lat:53.4823856,lng:-113.3492786},{lat:53.4824342,lng:-113.3496253},{lat:53.4824864,lng:-113.3503065},{lat:53.4825165,lng:-113.3509691},{lat:53.4826265,lng:-113.3565443},{lat:53.4826277,lng:-113.3566044},{lat:53.4827341,lng:-113.35664},{lat:53.4829219,lng:-113.3566455},{lat:53.4831391,lng:-113.3566518},{lat:53.4832476,lng:-113.3566553},{lat:53.4832431,lng:-113.3502934},{lat:53.48338,lng:-113.3493555},{lat:53.4835799,lng:-113.3484501},{lat:53.4837766,lng:-113.347767},{lat:53.4840428,lng:-113.347175},{lat:53.4845252,lng:-113.3463487},{lat:53.4847912,lng:-113.3459496},{lat:53.4851982,lng:-113.3453931},{lat:53.4856434,lng:-113.344858},{lat:53.4860557,lng:-113.3444015},{lat:53.4866147,lng:-113.3439987},{lat:53.4869318,lng:-113.3435217},{lat:53.4894676,lng:-113.3436965},{lat:53.4912668,lng:-113.3439705},{lat:53.4984063,lng:-113.345061},{lat:53.4994254,lng:-113.3450756},{lat:53.4999452,lng:-113.3450965},{lat:53.5000258,lng:-113.3450842},{lat:53.5005142,lng:-113.3450744},{lat:53.501075,lng:-113.3450384},{lat:53.5046854,lng:-113.3450735},{lat:53.5073353,lng:-113.3450673},{lat:53.5081025,lng:-113.3450667},{lat:53.5081062,lng:-113.3451225},{lat:53.5087413,lng:-113.345199},{lat:53.5089249,lng:-113.345233},{lat:53.5091017,lng:-113.3452955},{lat:53.5093193,lng:-113.3453979},{lat:53.5095305,lng:-113.3455433},{lat:53.5098868,lng:-113.3457803},{lat:53.5102159,lng:-113.3460712},{lat:53.5104817,lng:-113.3462946},{lat:53.5106801,lng:-113.3464759},{lat:53.5108865,lng:-113.3467052},{lat:53.5111293,lng:-113.3470006},{lat:53.5114183,lng:-113.3474404},{lat:53.5116444,lng:-113.3478396},{lat:53.5116524,lng:-113.3482421},{lat:53.5118923,lng:-113.3490112},{lat:53.5120018,lng:-113.3495067},{lat:53.5120523,lng:-113.3497686},{lat:53.5120918,lng:-113.3502132},{lat:53.5121036,lng:-113.350741},{lat:53.5122324,lng:-113.3507431},{lat:53.5124801,lng:-113.3507472},{lat:53.5133928,lng:-113.3507622},{lat:53.5139867,lng:-113.3535093},{lat:53.5139962,lng:-113.353825},{lat:53.5139859,lng:-113.3540583},{lat:53.5139629,lng:-113.3542917},{lat:53.513904,lng:-113.3545652},{lat:53.5138447,lng:-113.3548164},{lat:53.5137415,lng:-113.3550391},{lat:53.5126939,lng:-113.3562176},{lat:53.5125517,lng:-113.3564233},{lat:53.5121542,lng:-113.3569984},{lat:53.5121668,lng:-113.3600511},{lat:53.5124888,lng:-113.3600793},{lat:53.5124994,lng:-113.3581792},{lat:53.5126243,lng:-113.3575414},{lat:53.5128596,lng:-113.3570566},{lat:53.514339,lng:-113.3552347},{lat:53.5147095,lng:-113.3573888},{lat:53.5147498,lng:-113.357368},{lat:53.5154779,lng:-113.3618243},{lat:53.5158398,lng:-113.3640389},{lat:53.5158188,lng:-113.3680697},{lat:53.5158143,lng:-113.3689312},{lat:53.5151862,lng:-113.3690407},{lat:53.5151809,lng:-113.3695014},
    {lat:53.51558,lng:-113.3695368},{lat:53.5157209,lng:-113.3696501},{lat:53.5157959,lng:-113.3697879},{lat:53.5161402,lng:-113.3710172},{lat:53.5168921,lng:-113.3732784},{lat:53.5171667,lng:-113.3746819},{lat:53.5169877,lng:-113.3811188},{lat:53.5169586,lng:-113.3821641},{lat:53.5169343,lng:-113.3830376},{lat:53.5168446,lng:-113.3861275},{lat:53.5168344,lng:-113.3864784},{lat:53.5167276,lng:-113.3901585},{lat:53.5165388,lng:-113.3915031},{lat:53.5162563,lng:-113.393121},{lat:53.5162246,lng:-113.3932659},{lat:53.5161856,lng:-113.3933985},{lat:53.5161093,lng:-113.3935311},{lat:53.5160769,lng:-113.3935439},{lat:53.5160715,lng:-113.393682},{lat:53.5160661,lng:-113.39382},{lat:53.5160695,lng:-113.3939509},{lat:53.5169431,lng:-113.3939855},{lat:53.5185595,lng:-113.3939552},{lat:53.5266524,lng:-113.3940659},{lat:53.5268963,lng:-113.3940651},{lat:53.5377473,lng:-113.3940289},{lat:53.5407968,lng:-113.3940406},{lat:53.5413265,lng:-113.3940426},{lat:53.5413272,lng:-113.4016099},{lat:53.5524821,lng:-113.4013463},{lat:53.552487,lng:-113.4013462},{lat:53.5530927,lng:-113.401333},{lat:53.5558403,lng:-113.4012742},{lat:53.555609,lng:-113.4009683},{lat:53.5553405,lng:-113.400679},{lat:53.5550009,lng:-113.400318},{lat:53.5548467,lng:-113.4002417},{lat:53.5545791,lng:-113.3999756},{lat:53.5542227,lng:-113.399491},{lat:53.5538948,lng:-113.3984141},{lat:53.5538035,lng:-113.398084},{lat:53.5536788,lng:-113.3979562},{lat:53.5535444,lng:-113.3977799},{lat:53.5533339,lng:-113.3975987},{lat:53.5515835,lng:-113.3949352},{lat:53.5511177,lng:-113.3933382},{lat:53.5507944,lng:-113.3923545},{lat:53.5505167,lng:-113.3913575},{lat:53.5504896,lng:-113.3910169},{lat:53.5505673,lng:-113.3906677},{lat:53.5506924,lng:-113.3896308},{lat:53.5506564,lng:-113.3885328},{lat:53.5506728,lng:-113.3870724},{lat:53.5513603,lng:-113.384453},{lat:53.5519709,lng:-113.382914},{lat:53.5522399,lng:-113.3827026},{lat:53.5522603,lng:-113.3823507},{lat:53.5524114,lng:-113.382197},{lat:53.5525057,lng:-113.3820413},{lat:53.5525684,lng:-113.3818309},{lat:53.5526172,lng:-113.3817229},{lat:53.5526993,lng:-113.3815601},{lat:53.5527405,lng:-113.3814938},{lat:53.5527781,lng:-113.3814332},{lat:53.5528328,lng:-113.3812993},{lat:53.5528726,lng:-113.3812016},{lat:53.5530264,lng:-113.3810259},{lat:53.5531451,lng:-113.3808679},{lat:53.553324,lng:-113.3806854},{lat:53.5534767,lng:-113.3805631},{lat:53.5536144,lng:-113.3803662},{lat:53.5537034,lng:-113.3802261},{lat:53.5538425,lng:-113.3800712},{lat:53.5540086,lng:-113.3799519},{lat:53.5541645,lng:-113.3798578},{lat:53.5543443,lng:-113.3797632},{lat:53.55458,lng:-113.3796123},{lat:53.5546358,lng:-113.3796183},{lat:53.5547092,lng:-113.379565},{lat:53.5549517,lng:-113.3794952},{lat:53.5550942,lng:-113.3794775},{lat:53.5552503,lng:-113.3794388},{lat:53.5555082,lng:-113.3793963},{lat:53.5555793,lng:-113.3793545},{lat:53.5556451,lng:-113.3793071},{lat:53.5558146,lng:-113.3792872},{lat:53.5559654,lng:-113.3792763},{lat:53.5561445,lng:-113.3792306},{lat:53.5562028,lng:-113.3792373},{lat:53.556343,lng:-113.3791897},{lat:53.5564307,lng:-113.3791629},{lat:53.5565041,lng:-113.3791355},{lat:53.556583,lng:-113.3790988},{lat:53.5566745,lng:-113.3790694},{lat:53.556928,lng:-113.3789585},{lat:53.5570753,lng:-113.378908},{lat:53.5572694,lng:-113.3788254},{lat:53.5574606,lng:-113.3787354},{lat:53.5576609,lng:-113.3786405},{lat:53.5577595,lng:-113.3785594},{lat:53.5578838,lng:-113.3784662},{lat:53.5580079,lng:-113.3783802},{lat:53.5582072,lng:-113.3782605},{lat:53.5584206,lng:-113.3782139},{lat:53.5586938,lng:-113.3782247},{lat:53.5587982,lng:-113.37823},{lat:53.5588827,lng:-113.3782103},{lat:53.5590873,lng:-113.3782273},{lat:53.5592712,lng:-113.3782178},{lat:53.5594944,lng:-113.3782033},{lat:53.5595629,lng:-113.3781944},{lat:53.5596011,lng:-113.3781728},{lat:53.5597478,lng:-113.3781447},{lat:53.5598911,lng:-113.3781307},{lat:53.5600305,lng:-113.3781481},{lat:53.5601254,lng:-113.3781311},{lat:53.5602878,lng:-113.3781133},{lat:53.5604662,lng:-113.3780989},{lat:53.5606958,lng:-113.3781036},{lat:53.5608008,lng:-113.3780677},{lat:53.5609115,lng:-113.378057},{lat:53.5610746,lng:-113.3780088},{lat:53.5611666,lng:-113.3779428},{lat:53.5613489,lng:-113.3778583},{lat:53.5615129,lng:-113.3777763},{lat:53.5617583,lng:-113.3776895},{lat:53.5620274,lng:-113.3776615},{lat:53.5621192,lng:-113.377637},{lat:53.5621629,lng:-113.3776497},{lat:53.5623008,lng:-113.3776587},{lat:53.5624718,lng:-113.3776707},{lat:53.5625162,lng:-113.3776498},{lat:53.5626327,lng:-113.377648},{lat:53.5628089,lng:-113.3776231},{lat:53.562945,lng:-113.3776018},{lat:53.5631327,lng:-113.3775416},{lat:53.5632238,lng:-113.3774411},{lat:53.5633224,lng:-113.3774006},{lat:53.5634522,lng:-113.3773446},{lat:53.5636552,lng:-113.3773056},{lat:53.5638009,lng:-113.3772941},{lat:53.5639964,lng:-113.3772321},{lat:53.5640625,lng:-113.3772511},{lat:53.5641323,lng:-113.3772148},{lat:53.5642631,lng:-113.3771879},{lat:53.5643715,lng:-113.3771691},{lat:53.5644607,lng:-113.3771744},{lat:53.5646288,lng:-113.3771181},{lat:53.5647721,lng:-113.3770993},{lat:53.5649466,lng:-113.377011},{lat:53.5651028,lng:-113.3769036},{lat:53.5653206,lng:-113.3767158},{lat:53.5654951,lng:-113.3765622},{lat:53.5656402,lng:-113.3764836},{lat:53.5657579,lng:-113.3764295},{lat:53.5659489,lng:-113.3762534},{lat:53.5661308,lng:-113.3760851},{lat:53.5663448,lng:-113.3758871},{lat:53.566591,lng:-113.3756499},{lat:53.5682948,lng:-113.3742093},{lat:53.5688205,lng:-113.3736455},{lat:53.5694906,lng:-113.3729019},{lat:53.5697553,lng:-113.3726826},{lat:53.569837,lng:-113.3725978},{lat:53.5692416,lng:-113.3706328},{lat:53.5688334,lng:-113.3689706},{lat:53.56873,lng:-113.3685536},{lat:53.5686954,lng:-113.368307},{lat:53.5684548,lng:-113.3664895},{lat:53.5684566,lng:-113.3648649},{lat:53.5684686,lng:-113.3542448},{lat:53.5686422,lng:-113.3542626},{lat:53.5704375,lng:-113.3543829},{lat:53.570463,lng:-113.3321957},{lat:53.5711511,lng:-113.3305649},{lat:53.5713805,lng:-113.3291916},{lat:53.5714314,lng:-113.3228831},{lat:53.5718392,lng:-113.320866},{lat:53.5720992,lng:-113.3202599},{lat:53.5721045,lng:-113.3199104},{lat:53.5721093,lng:-113.3195982},{lat:53.5719156,lng:-113.3189002},{lat:53.5711579,lng:-113.3188971},{lat:53.5707466,lng:-113.3184104},{lat:53.5706391,lng:-113.3175114},{lat:53.5706358,lng:-113.2954886},{lat:53.5706336,lng:-113.2952505},{lat:53.5706327,lng:-113.2951569},{lat:53.5751778,lng:-113.2951683},{lat:53.5752539,lng:-113.2951685},{lat:53.5776752,lng:-113.2951756},{lat:53.5806704,lng:-113.295183},{lat:53.599496,lng:-113.2952336},{lat:53.6008409,lng:-113.2951946},{lat:53.6111999,lng:-113.2950092},{lat:53.6113014,lng:-113.2952114},{lat:53.6117828,lng:-113.2962173},{lat:53.6135472,lng:-113.2956311},{lat:53.6142625,lng:-113.2955907},{lat:53.6145934,lng:-113.2957452},{lat:53.6147207,lng:-113.2957624},{lat:53.6151942,lng:-113.2955736},{lat:53.6157506,lng:-113.2956864},{lat:53.6161972,lng:-113.2955306},{lat:53.6163122,lng:-113.2956341},{lat:53.6166467,lng:-113.2957357},{lat:53.6167481,lng:-113.2955667},{lat:53.6184757,lng:-113.2964036},{lat:53.6196874,lng:-113.297116},{lat:53.6210212,lng:-113.2989184},{lat:53.6220676,lng:-113.3009767},{lat:53.6229964,lng:-113.3035103},{lat:53.6236582,lng:-113.3060166},{lat:53.6252362,lng:-113.3138529},{lat:53.62586,lng:-113.3167095},{lat:53.6258979,lng:-113.3167626},{lat:53.6264674,lng:-113.3180816},{lat:53.6271959,lng:-113.3192002},{lat:53.6281223,lng:-113.3206336},{lat:53.6285225,lng:-113.3212553},{lat:53.6290996,lng:-113.3213828},{lat:53.629468,lng:-113.3216145},{lat:53.6298936,lng:-113.3220498},{lat:53.6300364,lng:-113.32217},{lat:53.6303987,lng:-113.3223826},{lat:53.6309072,lng:-113.3225642},{lat:53.6321699,lng:-113.322484},{lat:53.633004,lng:-113.3223474},{lat:53.6332527,lng:-113.3223416},{lat:53.6343571,lng:-113.3216378},{lat:53.6351968,lng:-113.3206936},{lat:53.6367094,lng:-113.3181143},{lat:53.6374866,lng:-113.3155192},{lat:53.6374506,lng:-113.315019},{lat:53.6380275,lng:-113.3118443},{lat:53.638356,lng:-113.310733},{lat:53.6382494,lng:-113.3085475},{lat:53.6383276,lng:-113.3076019},{lat:53.6385941,lng:-113.3069592},{lat:53.638734,lng:-113.3054204},{lat:53.6387433,lng:-113.3042525},{lat:53.6384955,lng:-113.3025889},{lat:53.6385629,lng:-113.3009888},{lat:53.6388807,lng:-113.2997336},{lat:53.6392645,lng:-113.296773},{lat:53.6398683,lng:-113.2931592},{lat:53.6409725,lng:-113.2901122},{lat:53.6426669,lng:-113.287563},{lat:53.6448904,lng:-113.2857949},{lat:53.6471138,lng:-113.2847649},{lat:53.6476225,lng:-113.2850052},{lat:53.6487723,lng:-113.2850224},{lat:53.6525216,lng:-113.2843358},{lat:53.6535899,lng:-113.2839581},{lat:53.6542868,lng:-113.2842156},{lat:53.6548769,lng:-113.2836148},{lat:53.6556246,lng:-113.2838208},{lat:53.6559807,lng:-113.2835032},{lat:53.6576982,lng:-113.2830392},{lat:53.6600752,lng:-113.2815034},{lat:53.6628623,lng:-113.2790658},{lat:53.6638489,lng:-113.2774092},{lat:53.6647135,lng:-113.2764393},{lat:53.6657814,lng:-113.2747227},
    {lat:53.6668798,lng:-113.2730061},{lat:53.6670527,lng:-113.272474},{lat:53.6682274,lng:-113.2714869},{lat:53.6690054,lng:-113.2714783},{lat:53.6690439,lng:-113.271511},{lat:53.6696207,lng:-113.2717941},{lat:53.6699665,lng:-113.2720019},{lat:53.6705767,lng:-113.2723109},{lat:53.6713743,lng:-113.272957},{lat:53.6718897,lng:-113.2736126},{lat:53.6721755,lng:-113.2739763},{lat:53.6722292,lng:-113.2740447},{lat:53.6724479,lng:-113.2744154},{lat:53.672575,lng:-113.2747914},{lat:53.6727948,lng:-113.2756394},{lat:53.673058,lng:-113.2760789},{lat:53.6731343,lng:-113.2765938},{lat:53.6732258,lng:-113.2771947},{lat:53.6732258,lng:-113.2774865},{lat:53.6734394,lng:-113.2785422},{lat:53.6736021,lng:-113.2796322},{lat:53.6735817,lng:-113.2799756},{lat:53.6736529,lng:-113.2809712},{lat:53.6735817,lng:-113.2823788},{lat:53.67348,lng:-113.2835204},{lat:53.6732868,lng:-113.2848508},{lat:53.6731241,lng:-113.2858121},{lat:53.6729309,lng:-113.2865674},{lat:53.6727529,lng:-113.2876145},{lat:53.6724987,lng:-113.2886273},{lat:53.6722801,lng:-113.289786},{lat:53.6721582,lng:-113.2908424},{lat:53.6721418,lng:-113.291755},{lat:53.6721006,lng:-113.2940547},{lat:53.6720985,lng:-113.2953753},{lat:53.6749979,lng:-113.2953466},{lat:53.676241,lng:-113.2953343},{lat:53.6865789,lng:-113.2951867},{lat:53.698039,lng:-113.2951804},{lat:53.6992504,lng:-113.295006},{lat:53.702603,lng:-113.2950731},{lat:53.7057783,lng:-113.2950416},{lat:53.715747,lng:-113.2949713},{lat:53.7158617,lng:-113.2949693},{lat:53.7158616,lng:-113.2954835},{lat:53.7159501,lng:-113.3170846},{lat:53.716059,lng:-113.320774},{lat:53.7160389,lng:-113.3213915},{lat:53.7160551,lng:-113.3357677},{lat:53.7160622,lng:-113.343864},{lat:53.7161053,lng:-113.3461791},{lat:53.7161065,lng:-113.3484369},{lat:53.7161434,lng:-113.3745938},{lat:53.7161289,lng:-113.3802851},{lat:53.7161376,lng:-113.3822031},{lat:53.716159,lng:-113.3907675},{lat:53.7161718,lng:-113.3982551},{lat:53.7161869,lng:-113.4023859},{lat:53.7161977,lng:-113.4087801},{lat:53.7162078,lng:-113.4175156},{lat:53.7162158,lng:-113.4234076},{lat:53.7162646,lng:-113.4301223},{lat:53.7160605,lng:-113.4301664},{lat:53.7151706,lng:-113.4301487},{lat:53.7121051,lng:-113.4300879},{lat:53.7084147,lng:-113.4300146},{lat:53.7015491,lng:-113.4298784},{lat:53.7012469,lng:-113.4298724},{lat:53.6870789,lng:-113.430341},{lat:53.6868778,lng:-113.4303375},{lat:53.6866788,lng:-113.4303345},{lat:53.6796314,lng:-113.4304063},{lat:53.6724943,lng:-113.4304894},{lat:53.6714932,lng:-113.4304575},{lat:53.6660054,lng:-113.4304698},{lat:53.6626548,lng:-113.4305039},{lat:53.6621069,lng:-113.4304717},{lat:53.6581926,lng:-113.4302604},{lat:53.6580702,lng:-113.4302573},{lat:53.6576843,lng:-113.4302455},{lat:53.6576942,lng:-113.4318844},{lat:53.6576232,lng:-113.4315129},{lat:53.6575702,lng:-113.4312807},{lat:53.657511,lng:-113.4311996},{lat:53.6567904,lng:-113.4312328},{lat:53.6564333,lng:-113.4313566},{lat:53.6561397,lng:-113.4315341},{lat:53.6558071,lng:-113.4317975},{lat:53.6512783,lng:-113.436204},{lat:53.6507833,lng:-113.4368057},{lat:53.6506249,lng:-113.437108},{lat:53.6505428,lng:-113.4375819},{lat:53.6505161,lng:-113.4428115},{lat:53.6504627,lng:-113.4913077},{lat:53.6504484,lng:-113.5043307},{lat:53.6504472,lng:-113.516469},{lat:53.6504466,lng:-113.5226871},{lat:53.6504691,lng:-113.5656642},{lat:53.6337737,lng:-113.5656265},{lat:53.6337333,lng:-113.5657361},{lat:53.6336474,lng:-113.5659689},{lat:53.6318046,lng:-113.5716782},{lat:53.6315782,lng:-113.5727056},{lat:53.6314856,lng:-113.5734549},{lat:53.6314604,lng:-113.5741486},{lat:53.6314908,lng:-113.5748803},{lat:53.6320774,lng:-113.5767888},{lat:53.6321835,lng:-113.5768894},{lat:53.6321615,lng:-113.5790708},{lat:53.631452,lng:-113.5791743},{lat:53.630793,lng:-113.579599},{lat:53.6300627,lng:-113.5804413},{lat:53.6297101,lng:-113.5810076},{lat:53.6293785,lng:-113.5817366},{lat:53.6288286,lng:-113.5831594},{lat:53.6288286,lng:-113.5835345},{lat:53.6272041,lng:-113.5876683},{lat:53.625504,lng:-113.5913066},{lat:53.6234637,lng:-113.5948812},{lat:53.621331,lng:-113.5982718},{lat:53.620483,lng:-113.6020304},{lat:53.6194502,lng:-113.6027028},{lat:53.6186836,lng:-113.6026556},{lat:53.6192432,lng:-113.6038885},{lat:53.6189915,lng:-113.6042591},{lat:53.6189024,lng:-113.6043904},{lat:53.6186255,lng:-113.6047991},{lat:53.6181352,lng:-113.6043181},{lat:53.6175756,lng:-113.6041407},{lat:53.617005,lng:-113.6043228},{lat:53.616498,lng:-113.6046964},{lat:53.6160963,lng:-113.6052054},{lat:53.6138546,lng:-113.6087004},{lat:53.6139148,lng:-113.6150704},{lat:53.6128252,lng:-113.6152421},{lat:53.6114105,lng:-113.6163393},{lat:53.6093737,lng:-113.6188284},{lat:53.6067095,lng:-113.6236106},{lat:53.6051307,lng:-113.6273614},{lat:53.6046673,lng:-113.6293784},{lat:53.6050997,lng:-113.6312246},{lat:53.6066169,lng:-113.6348349},{lat:53.606916,lng:-113.6355341},{lat:53.6069378,lng:-113.6386361},{lat:53.6069356,lng:-113.6389432},{lat:53.6067673,lng:-113.6389516},{lat:53.5996638,lng:-113.6393257},{lat:53.5996724,lng:-113.650683},{lat:53.5996726,lng:-113.6509552},{lat:53.599673,lng:-113.651527},{lat:53.5996488,lng:-113.663841},{lat:53.5996476,lng:-113.6639921},{lat:53.59965,lng:-113.6641492},{lat:53.5995738,lng:-113.6711498},{lat:53.5995676,lng:-113.6717212},{lat:53.5994206,lng:-113.6719574},{lat:53.5985123,lng:-113.673417},{lat:53.5976973,lng:-113.6747701},{lat:53.5973735,lng:-113.6753129},{lat:53.5967592,lng:-113.6768618},{lat:53.5965406,lng:-113.6779697},{lat:53.5961376,lng:-113.6787497},{lat:53.5960021,lng:-113.67945},{lat:53.595895,lng:-113.6804692},{lat:53.5957058,lng:-113.6814145},{lat:53.5954819,lng:-113.682182},{lat:53.5944757,lng:-113.6850194},{lat:53.5933998,lng:-113.6881897},{lat:53.5931491,lng:-113.6887352},{lat:53.5930079,lng:-113.6891383},{lat:53.5930247,lng:-113.6895853},{lat:53.592943,lng:-113.6898802},{lat:53.5926957,lng:-113.6904595},{lat:53.5924328,lng:-113.6909667},{lat:53.5921899,lng:-113.692157},{lat:53.5921368,lng:-113.6926107},{lat:53.5921197,lng:-113.6944345},{lat:53.59213,lng:-113.6955075},{lat:53.5922522,lng:-113.6967875},{lat:53.592437,lng:-113.6976667},{lat:53.5925244,lng:-113.69824},{lat:53.592547,lng:-113.6989085},{lat:53.5924291,lng:-113.6994573},{lat:53.5924196,lng:-113.6999333},{lat:53.5923564,lng:-113.7001254},{lat:53.5923592,lng:-113.7005033},{lat:53.5924354,lng:-113.701063},{lat:53.592585,lng:-113.7015557},{lat:53.5926236,lng:-113.701976},{lat:53.5925747,lng:-113.7021968},{lat:53.5923985,lng:-113.7023261},{lat:53.5922268,lng:-113.7025913},{lat:53.5921565,lng:-113.7028759},{lat:53.5921756,lng:-113.7035106},{lat:53.5922992,lng:-113.7043588},{lat:53.5923273,lng:-113.705266},{lat:53.5922322,lng:-113.7064238},{lat:53.5926136,lng:-113.7078519},{lat:53.5926975,lng:-113.7108641},{lat:53.592408,lng:-113.7129072},{lat:53.5923707,lng:-113.7137416},{lat:53.5841046,lng:-113.7137066},{lat:53.5698121,lng:-113.7138411}]
    ,
      path: [
           
],
    total: 0,

    infoWindowOpened: false,
    infoWindowOptions: {
      pixelOffset: {
        width: 0,
        height: -35,
      },
    },

    activehome: {},
    infoWindowPosition: { lat: 0, lng: 0 },
    activehomelad: null,
  }),
  methods: {
    checkClick() {
      if (this.infoWindowOpened) {
        (this.infoWindowOpened = false), (this.activehome = {});
      }
    },
    getpos(item) {
      return {
        lat: item.latitude * 1,
        lng: item.longitude * 1,
      };
    },
    numFormatter(num) {
      if(this.type == 'sold'){
        return 'Sold'
      }
      if(this.type !== 'sold'){
        if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
      } else if (num > 1000000) {
        return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
      } else if (num < 900) {
        return num; // if value < 1000, nothing to do
      }
      }
      
    },
    handleInfoWindowClose() {
      this.activehome = {};
      this.infoWindowOpened = false;
    },
    handleMarkerClicked(m) {
      this.activehome={}
      this.infoWindowPosition.lat = m.map.latitude * 1;
      this.infoWindowPosition.lng = m.map.longitude * 1;
      this.infoWindowOpened = true;
      this.activehomelad = true;
      this.boardId = m.boardId;
      let mlsNumber = m.mlsNumber;
      this.$http
        .get(
          `listings/find_home/?mlsNumber=${mlsNumber}&boardId=${this.boardId}`
        )
        .then((res) => {
          this.activehome = res.data;
          this.activehomelad = false;
        })
        .catch(() => {
          this.activehomelad = false;
        });
    },
    submit() {
      this.$emit("submit");
    },
    aboutusroute() {
      this.$router.push({ name: "Aboutus" });
    },
    changezoom($event) {
      this.zoom = $event;
      this.$store.commit('CITYEMPLTY')
      this. findlistingsevent();
    },
    find_listings_forSaleMain() {
      this.paginationpage = 1;
      this.filerdata = {
        name: "Date listed (new to old)",
        value: "createdOnDesc",
      };
      this.find_listings_forSale();
    },
    find_listings_SoldMain() {
      this.paginationpage = 1;
      this.filerdata = {
        name: "Date Sold (new to old)",
        value: "soldDateDesc",
      };
      this.find_listings_Sold();
    },
    find_listings_forSale() {
      let city = this.city;
      let sw_long = this.sw_long;
      let sw_lat = this.sw_lat;
      let ne_long = this.ne_long;
      let ne_lat = this.ne_lat;
      // let sortBy = this.filerdata.value;
      // let pageNum = this.paginationpage;
      // this.loading = true ;
      let minBeds = this.minBeds;
      let minParkingSpaces = this.minParkingSpaces;
      let minSqft = this.minSqft;
      let maxSqft = this.maxSqft;
      let minPrice = this.minPrice;
      let maxPrice = this.maxPrice;
      let propertyType = this.propertyType;
      let style = this.style;
      let minBaths = this.minBaths;
      
      // this.loadedlistingsold = false
      this.$http
        .get(
          `map/get_homes/?type=forsale&sw_long=${sw_long}&sw_lat=${sw_lat}&ne_long=${ne_long}&ne_lat=${ne_lat}&minBeds=${minBeds}&minBaths=${minBaths}&minParkingSpaces=${minParkingSpaces}&minSqft=${minSqft}&maxSqft=${maxSqft}&minPrice=${minPrice}&maxPrice=${maxPrice}&propertyType=${propertyType}&style=${style}&city=${city}`
        )
        .then((res) => {
          this.loading = false;
          // this.listingsold = res.data
          this.listings = res.data.listings;
          this.tatal = res.data.count;
          this.loading = false;
          this.loadedlistingsold = true;
        });
    },
    find_listings_Sold() {
       let city = this.city;
      let sw_long = this.sw_long;
      let sw_lat = this.sw_lat;
      let ne_long = this.ne_long;
      let ne_lat = this.ne_lat;
    let minBeds = this.minBeds;
      let minParkingSpaces = this.minParkingSpaces;
      let minSqft = this.minSqft;
      let maxSqft = this.maxSqft;
      let minPrice = this.minPrice;
      let maxPrice = this.maxPrice;
      let propertyType = this.propertyType;
      let style = this.style;
      let minBaths = this.minBaths;
      // this.loadedlistingsold = false
      this.$http
        .get(
          `map/get_homes/?type=sold&sw_long=${sw_long}&sw_lat=${sw_lat}&ne_long=${ne_long}&ne_lat=${ne_lat}&minBeds=${minBeds}&minBaths=${minBaths}&minParkingSpaces=${minParkingSpaces}&minSqft=${minSqft}&maxSqft=${maxSqft}&minPrice=${minPrice}&maxPrice=${maxPrice}&propertyType=${propertyType}&style=${style}&city=${city}`
        )
        .then((res) => {
          this.loading = false;
          // this.listingsold = res.data
          this.listings = res.data.listings;
          this.tatal = res.data.count;
          this.loading = false;
          this.loadedlistingsold = true;
        });
    },
    changebounds: function($event) {
      this.bounds = $event;
    },
    dropmap() {
      this.$store.commit('CITYEMPLTY')
     this.findlistingsevent()
      
    },
    findlistingsevent(){
 if(this.type == "forsale"){
        this.find_listings_forSale();
      }
      else{
        this.find_listings_Sold();
      }
    },
    getCoords() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          (this.longitude = position.coords.longitude),
            (this.latitude = position.coords.latitude),
            (this.currentLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
        },
        () => {
          // this.zoom=8;
          // this.currentLocation = {
          //               lat: 53.702018651928924,
          //               lng: -113.09359784375
          //       };
          //this.notify('error', 'قم بتفعيل تحديد موقعك لتتمكن من الطلب', 'error');
        }
      );
    },
    updateaddressdata(data){
      if(data){
        this.currentLocation = {
        lat:data.latitude,
        lng:data.longitude
      }
      }
       this.findlistingsevent()

      
      console.log(data)
    },
    getpath(city){
      this.$http.get(`https://nominatim.openstreetmap.org/search.php?q=${city}&polygon_geojson=1&format=json`).then((res) =>{
        this.path = res.data[0].geojson.coordinates[0]
        console.log(res.data[0].geojson.coordinates)
      })
    },
    getFullName(item) {
      let res = {lat:0,lng:0}
      res.lat = item[1];
      res.lng = item[0];
      return res
      
}
  },
  created() {
    this.getCoords();
    this.changebounds();
    this.find_listings_forSale();
  },
  watch: {
    latitude() {
      this.lat = this.latitude;
      this.lng = this.longitude;
    },
    centerLongitude() {
      this.lat = this.centerLatitude;
      this.lng = this.longitude;
    },
    bounds: function(newval, oldval) {
      if(oldval){
         (this.sw_long = oldval.getSouthWest().lng()),
        (this.sw_lat = oldval.getSouthWest().lat()),
        (this.ne_long = oldval.getNorthEast().lng()),
        (this.ne_lat = oldval.getNorthEast().lat());
      }
    //  console.log(newval, oldval)
     
    },
  },
};
</script>
<style scoped>
.showmap .togglemap {
  display: inline-block;
  height: 40px;
  position: fixed;
  left: calc(50% - 43px);
  bottom: 20px;
  top: auto;
  z-index: 1;
}
.showmap .togglemap button {
  box-shadow: rgb(0 0 0 / 1%) 0px 1.77104px 4.75968px,
    rgb(0 0 0 / 2%) 0px 4.25607px 11.4382px,
    rgb(0 0 0 / 2%) 0px 8.01379px 21.5371px,
    rgb(0 0 0 / 2%) 0px 14.2952px 38.4185px,
    rgb(0 0 0 / 3%) 0px 26.7377px 71.8575px, rgb(0 0 0 / 4%) 0px 64px 172px;
  border: 2px solid transparent;
  background: #232323;
  color: inherit;
  white-space: nowrap;
  padding: 4px 16px;
  border-radius: 50px;
  font-size: 1rem;
}
.group {
  position: fixed;
  left: 50px;
  height: 200px;
  top: 200px;
  z-index: 0;
  width: 30%;
  padding: 12px;
}
.group .group1 {
  background: #00a19b;
  border-radius: 8px;
}
.group .group1 .group1a p:first-child {
  font-size: 26px;
}
.group .group1 .group1a p:last-child {
  font-size: 20px;
}
.group .group1 .inputaddress {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  border-radius: 6px;
  text-align: left;
  background: white;
  min-height: 30px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border-color: transparent;
  box-shadow: rgb(0 0 0 / 1%) 0px 1.77104px 4.75968px,
    rgb(0 0 0 / 2%) 0px 4.25607px 11.4382px,
    rgb(0 0 0 / 2%) 0px 8.01379px 21.5371px,
    rgb(0 0 0 / 2%) 0px 14.2952px 38.4185px,
    rgb(0 0 0 / 3%) 0px 26.7377px 71.8575px, rgb(0 0 0 / 4%) 0px 64px 172px;
  padding: 4px;
  flex-direction: row;
  border-width: 1px;
  border-style: solid;
}
.group .group1 .inputaddress img {
  flex-shrink: 0;
  align-self: center;
  margin-left: 8px;
  width: 18px;
  height: 18px;
}
.group .group1 .inputaddress .item1b2 {
  display: inline-flex;
  width: 100%;
  flex-direction: column;
}
.group .group1 .space {
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
.group .group1 input {
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
.group .group1 .item1b3 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-shrink: 0;
}
.group .group1 button {
  background-color: #ffb600;
  color: #fff;
  height: 38px;
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
  padding: 9px 6px;
}
input:focus {
  outline: none;
}
.info-window {
  width: 27em;
  /* max-height: 360px;
  overflow-y: auto; */
}
@media only screen and (max-width: 600px) {
  .group {
    left: 25px;
    top: 250px;
    width: 55%;
    padding: 0px;
  }
  .group .group1 .group1a p:first-child {
    font-size: 18px;
  }
  .group .group1 .group1a p:last-child {
    font-size: 18px;
  }
  .group .group1 .inputaddress img {
    width: 14px;
    height: 14px;
  }
  .group .group1 button {
    padding: 6px 2px;
    font-size: 12px;
    border: 0;
  }
  .group .group1 input {
    padding-left: 4px;
  }
}
</style>
