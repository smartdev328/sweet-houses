<template>
  <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div class="homedetails">
    <div class="container" v-if="!loading">
      <div class="my-2 my-md-5 position-relative">
        <div class="item1">
          <div class="item1a d-flex pointer"  @click="routrMap()">

                    <p class="mb-0 ml-2 Roboto-Medium">Return to map</p>
          </div>
          <div class="item1b text-center">
            <p class="text-color-1 mb-0 Roboto-Medium">
            <span v-if="homedata.address.unitNumber" class="mr-1">{{homedata.address.unitNumber}}</span>
             <span v-if="homedata.address.streetNumber" class="mr-1"> {{ homedata.address.streetNumber  }}</span>
             <span v-if="homedata.address.streetName " class="mr-1">{{ homedata.address.streetName  }}</span>
               <span v-if="homedata.address.streetSuffix  " class="mr-1">{{ homedata.address.streetSuffix   }}</span>
                <span v-if="homedata.address.streetDirection   " class="mr-1">{{ homedata.address.streetDirection    }}</span>
            </p>
            <p class="mb-0">
              <span class="Roboto-Regular" v-if="homedata.address.neighborhood "
                >{{ homedata.address.neighborhood }}.
             
              </span>
              <span class="Roboto-Regular px-1" v-if="homedata.address.city">
               
                {{ homedata.address.city }}
              </span>
              <span class="Roboto-Regular" v-if="homedata.address.state">
               
                {{ homedata.address.state }}
              </span>
              <span class="Roboto-Regular border-left pl-2" v-if="homedata.address.area">{{
                homedata.address.area
              }}</span>
            </p>
          </div>
          <div class="item1c mt-3 mt-md-0">
            <button class="btn text-color-1 Roboto-Regular">
              <img src="../../../assets/image/icon/Heart.svg" alt="icon" />
              Save
            </button>
            <b-button
              v-b-modal="'modal-share'"
              class="btn bg-transparent text-color-1 Roboto-Regular"
            >
              <img src="../../../assets/image/icon/share.svg" alt="icon" />
              Share</b-button
            >
            <b-modal
              id="modal-share"
              size="lg"
              header-bg-variant="white"
              body-bg-variant="white"
              footer-bg-variant="white"
            >
              <template #modal-title>
                <h4 class="text-color-1 Roboto-Medium">Share this Sweetly</h4>
              </template>
              <div class="element1">
                <div class="item1">
                  <div class="item1a">
                    <img
                      @click="copyURL"
                      class="pointer"
                      src="../../../assets/image/icon/noun_linked_4211117.svg"
                      alt=""
                    />
                    <form>
                      <input
                        ref="mylink"
                        :value="fullPath"
                        type="text"
                        name=""
                        id=""
                      />
                    </form>
                  </div>
                  <div class="item1b">
                    <button class="btn" :class="{copied : copied}" @click="copyURL()">
                      <span v-if="!copied">Copy Link</span>
                      <span v-if="copied" >Link Copied</span>
                    </button>
                  </div>
                </div>
                <div class="item2 mb-2">
                  <div class="item2a">
                    <ShareNetwork
                      class="btn Roboto-Medium font-weight-bold"
                      network="facebook"
                      :url="fullPath"
                      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                      @open="open"
                      @change="change"
                      @close="close"
                    >
                      <button class="btn Roboto-Medium">
                        <img
                          src="../../../assets/image/icon/noun_messenger_3202205.svg"
                          alt=""
                        />
                        <span>Messenger</span>
                      </button>
                    </ShareNetwork>
                  </div>
                  <div class="item2b">
                    <button class="btn Roboto-Medium" @click="shareSMS">
                      <img
                        src="../../../assets/image/icon/Group 13353.svg"
                        alt=""
                      />
                      <span>SMS</span>
                    </button>
                  </div>
                  <div class="item2c">
                    <ShareNetwork
                      class="btn Roboto-Medium font-weight-bold"
                      network="email"
                      :url="'Listing Details : '+fullPath"
                      title="Your friend or relative has shared a listing with you"
                      @open="open"
                      @change="change"
                      @close="close"
                    >
                      <button class="btn Roboto-Medium">
                        <img
                          src="../../../assets/image/icon/noun_Email_4292826.svg"
                          alt=""
                        />
                        <span>Email</span>
                      </button>
                    </ShareNetwork>
                  </div>
                </div>
                <div class="text-center my-3" v-if="errsms">
                  <p style="color: #fc5353;font-size:18px" class="Roboto-Regular mb-0">Sorry, this feature isn’t active yet</p>
                </div>
              </div>
            </b-modal>
          </div>
        </div>
        <div class="item2 my-2 my-md-5 position-relative">
          <div>
            <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls

                background="#ababab"
                img-width="800"
                img-height="200"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
              <!-- Text slides with image -->
              <b-carousel-slide
                  v-for="image in homedata.images"
                  :key="image.id"
                  :img-src="image"
              ></b-carousel-slide>


            </b-carousel>

          </div>
<!--          <VueSlickCarousel v-bind="settings">-->
<!--            <div-->
<!--              class="slideimg position-relative"-->
<!--              v-for="image in homedata.images"-->
<!--              :key="image.id"-->
<!--            >-->
<!--            &lt;!&ndash; <h1>asdcva </h1> &ndash;&gt;-->
<!--              <img :src="image" class="w-100 h-100" alt="image" />-->
<!--            </div>-->
<!--          </VueSlickCarousel>-->
        </div>
        <div class="row">
          <div class="col-12">
            <div
              class="item3 d-flex align-items-center justify-content-between"
            >
              <p class="text-color-1 Roboto-Medium" v-if="homedata.listPrice">
                ${{ homedata.listPrice.toLocaleString("ja-JP") }}
              </p>
              <p class="Roboto-Regular">
                 {{ gettime(homedata.listDate) }} on Sweetly
              </p>
            </div>
            <div
              class="item4 my-2 my-md-4 d-flex justify-content-between Roboto-Regular"
            >
              <p>
                <span>{{ homedata.details.numBedrooms }}</span>
                <span v-if="homedata.details.numBedroomsPlus > 0">+ </span>
                <span v-if="homedata.details.numBedroomsPlus > 0">{{
                  homedata.details.numBedroomsPlus
                }}</span>
                <span class="ml-1">bed</span>
              </p>
              <p>
                <span>{{ homedata.details.numBathrooms }}</span>
                <span v-if="homedata.details.numBathroomsPlus > 0">+ </span>
                <span v-if="homedata.details.numBathroomsPlus > 0">{{ homedata.details.numBathroomsPlus }} </span>
                <span class="ml-1">bath</span>
              </p>
              <p>
                <span v-if="homedata.details.sqft">{{ homedata.details.sqft.toLocaleString("ja-JP") }}</span>
                <span>sqft</span>
              </p>
              <p>
                <span>{{ homedata.details.numParkingSpaces }}</span>
                <span>parking</span>
              </p>
              <p>
                <span v-if="homedata.lot.acres">{{ homedata.lot.acres }}</span>
                <span v-else>-</span>
                <span>(acres) lot</span>
              </p>
              <p>
                <span>{{ homedata.details.propertyType }}</span>
              </p>
            </div>
            <div
              class="
                item5
                bg-white
                shadow
                px-0 px-md-3
                py-3
                d-flex
                align-items-center
              "
            >
              <div class="col-5 item5a Roboto-Regular" v-if="!estimatevalue.prices || !estimatevalue.prices.offer_price">
                <p class="mb-0">No Sweetly Estimate Yet</p>
              </div>
              <div class="col-8 item5a Roboto-Regular" v-if="estimatevalue.prices && estimatevalue.prices.offer_price">
                <p v-if="estimatevalue.prices.offer_price" class="mb-0">Today's Sweetly Estimate ${{estimatevalue.prices.offer_price.toLocaleString("ja-JP")}}</p>
              </div>
              <div class="col-7 item5b Roboto-Regular" v-if="!estimatevalue.prices || !estimatevalue.prices.offer_price">
                <p class="p1 mb-0" >
                  Sorry, we’re still analyzing the data we need to accurately
                  value this home
                </p>
              </div>
            </div>
            <div class="item6 my-2 py-5">
              <div class="mb-3 Roboto-Regular">
                <span v-if="homedata.address.unitNumber" class="mr-1">{{homedata.address.unitNumber}}</span>
             <span v-if="homedata.address.streetNumber" class="mr-1"> {{ homedata.address.streetNumber  }}</span>
             <span v-if="homedata.address.streetName " class="mr-1">{{ homedata.address.streetName  }}</span>
               <span v-if="homedata.address.streetSuffix  " class="mr-1">{{ homedata.address.streetSuffix   }}</span>
                <span v-if="homedata.address.streetDirection   " class="mr-1">{{ homedata.address.streetDirection    }}</span>
                   <span class="Roboto-Regular" v-if="homedata.address.neighborhood "
                >{{ homedata.address.neighborhood }}.
             
              </span>
              <span class="Roboto-Regular px-1" v-if="homedata.address.city">
               
                {{ homedata.address.city }}
              </span>
              <span class="Roboto-Regular" v-if="homedata.address.state">
               
                {{ homedata.address.state }}
              </span>
              <span class="Roboto-Regular border-left pl-2" v-if="homedata.address.area">{{
                homedata.address.area
              }}</span>
              </div>
              <div>
                <address-map :lat="latitude" :lon="longitude"></address-map>
              </div>
            </div>
            <div class="item7 my-3">
              <p class="DMSerifRegular text-color-1">Property History</p>
              <div class="item7a py-3 text-center mx-auto" v-if="!isLoggedIn">
                <div
                  class="
                    p1
                    d-flex
                    align-items-center
                    px-3
                    justify-content-around
                  "
                  @click="makeAuth"
                >
                  <img src="../../../assets/image/icon/lock.svg" alt="" />
                  <p class="mb-0 text-white Roboto-Regular">
                    See what agents see
                  </p>
                </div>
                <p class="p2 text-color-2 Roboto-Regular my-3">
                  Access sold prices, more photos, and insights about this home
                </p>
              </div>
            </div>
            <div class="item9 my-2 py-3" v-if="homedata.history.length == 0">

              <div
                  class="
                  item9a
                  new
                  my-3
                  d-flex
                  justify-content-between
                  align-items-center
                  py-3
                "
              >
                <div class="ml-3 text-color-2 Roboto-Medium col-4">
                  <p class="mb-0 element2">Current Status</p>
                </div>
                <div class="col-8">
                  <p class="mb-0 Roboto-Medium element3 text-color-5" v-if="homedata.listPrice">
                    Listed for  ${{
                      getnumber(homedata.listPrice).toLocaleString("ja-JP")
                    }}
                  </p>
                  <p class="mb-0 Roboto-Medium text-color-2">{{ gettime(homedata.listDate) }} on Sweetly , Last Status is : {{homedata.lastStatus}}</p>
                </div>
<!--                <div class="image col-3">-->
<!--                </div>-->
              </div>




            </div>
            <div v-if="homedata.history.length > 0" class="item9">
              <div
                  class="
                  item9a
                  new
                  my-3
                  d-flex
                  justify-content-between
                  align-items-center
                  py-3
                "
              >
                <div class="ml-3 text-color-2 Roboto-Medium col-4">
                  <p class="mb-0 element2" >Current Status</p>
                </div>
                <div class="col-8">
                  <p class="mb-0 Roboto-Medium element3 text-color-5" v-if="homedata.listPrice">
                    Listed for ${{
                      getnumber(homedata.listPrice).toLocaleString("ja-JP")
                    }}
                  </p>
                   <p class="mb-0 Roboto-Medium text-color-5">{{ gettime(homedata.listDate) }} on Sweetly , Last Status is : {{homedata.lastStatus}}</p>
                </div>
                <!-- <div class="image col-3">
                </div> -->
              </div>
              <div
                  class="
                  item9a
                  new
                  my-3
                  d-flex
                  justify-content-between
                  align-items-center
                  py-1
                "
                  v-for="history in homedata.history" :key="history.id"
              >
                <div class="ml-3 text-color-2 Roboto-Medium col-6 col-md-4">
                  <p class="mb-0 element1">{{formatdatehistory(history.listDate)}}</p>
                  <p class="mb-0 element2">{{gettime(history.listDate)}}</p>
                </div>
                <div class="col-6 col-md-5" v-if="!history.soldDate">
                  <p class="mb-0 Roboto-Medium text-color-5 element3" >
                    <u> Listed without selling </u>
                  </p>
                  <p class="mb-0 text-color-2 Roboto-Medium ">Listed for $ {{getnumber(history.listPrice)}} at {{formatdate(history.listDate)}}</p>
                </div>
                <div class="col-6 col-md-5" v-if="history.soldDate">
                  <p class="mb-0 Roboto-Medium text-color-6 element3" >
                    <u>
                      
                      Sold for
                         <span v-if="isLoggedIn">${{
                      getnumber(homedata.soldPrice).toLocaleString("ja-JP")
                    }}</span>
                    <span v-if="!isLoggedIn">
                      $XXX,XXX
                    </span>
                     </u>
                  </p>
                  <p class="mb-0 text-color-2 Roboto-Medium " >Listed for $ {{getnumber(history.listPrice)}} at {{formatdate(history.listDate)}}</p>
                </div>
                <div class="image col-3">

                </div>
              </div>
            </div>
            <div class="item11 my-2 py-3">
              <div class="item1">
                <p class="text-color-1 DMSerifRegular">Home Details</p>
                <p class="Roboto-Medium">Description</p>
                <p class="Roboto-Regular">
                  {{ homedata.details.description }}
                </p>
              </div>
              <div class="item2 my-4">
                <div class="row">
                  <div class="col-4">
                    <p>Type</p>
                  </div>
                  <div class="col-8">
                    <p>{{ homedata.details.propertyType }}</p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-4">
                    <p>Basement</p>
                  </div>
                  <div class="col-8">
                    <p>{{ homedata.details.basement1 }}</p>
                    <p
                      class="border-left pl-3"
                      v-if="homedata.details.basement2"
                    >
                      {{ homedata.details.basement2 }}
                    </p>
                  </div>
                </div>
                <!-- <div class="row" v-if="homedata.details.basement2">
                                        <div class="col-3">
                                            <p>Basement</p>
                                        </div>
                                        <div class="col-8">
                                            <p>{{homedata.details.basement2}} </p>
                                        </div>
                                    </div> -->

                <div class="row">
                  <div class="col-4">
                    <p>Property Taxes</p>
                  </div>
                  <div class="col-8">
                    <p v-if="homedata.taxes.annualAmount">
                      {{ homedata.taxes.annualAmount.toLocaleString("ja-JP") }}
                      per year /
                      {{ getpermonth(homedata.taxes.annualAmount) }} per month
                    </p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-4">
                    <p>Maintenance Fees</p>
                  </div>
                  <div class="col-8">
                    <p>{{ homedata.condominium.fees.maintenance }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <p>Bedrooms</p>
                  </div>
                  <div class="col-8">
                    <p>
                      <span> {{ homedata.details.numBedrooms }} Full</span>
                      <span v-if="homedata.details.numBedroomsPlus > 0">
                        | {{ homedata.details.numBedroomsPlus }} Partial</span
                      >
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <p>Bathrooms</p>
                  </div>
                  <div class="col-8">
                    <p>
                      <span> {{ homedata.details.numBathrooms }} Full</span>
                      <span v-if="homedata.details.numBathroomsPlus > 0">
                        | {{ homedata.details.numBathroomsPlus }} Partial</span
                      >
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <p>Parking</p>
                  </div>
                  <div class="col-8">
                    <p>{{ homedata.details.numParkingSpaces }}</p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-4">
                    <p>Lot Acres</p>
                  </div>
                  <div class="col-8">
                    <p v-if="homedata.lot.acres">{{ homedata.lot.acres }}</p>
                    <p v-else>-</p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-4">
                    <p>Lot Width</p>
                  </div>
                  <div class="col-8">
                    <p v-if="homedata.lot.width">{{ homedata.lot.width }}</p>
                    <p v-else>-</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <p>Lot Depth</p>
                  </div>
                  <div class="col-8">
                    <p v-if="homedata.lot.depth">{{ homedata.lot.depth }}</p>
                    <p v-else>-</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <p>Internal Area (Above Ground)</p>
                  </div>
                  <div class="col-8">
                    <p>{{ homedata.details.sqft }}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="item13 my-2 py-3"> 
                            <div class="item1">
                                <p class="title Roboto-Medium">Main Level</p>

                                <div class="row">
                                    <div class="col-3">
                                        <p>Kitchen</p>
                                    </div>
                                    <div class="col-8">
                                        <p>19'8' ' x 26'2' '</p>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-3">
                                        <p>Living</p>
                                    </div>
                                    <div class="col-8">
                                        <p>26'2' ' x 13'1' '</p>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-3">
                                        <p>Dining </p>
                                    </div>
                                    <div class="col-8">
                                        <p>26'2' ' x 13'1' '</p>
                                    </div>
                                </div>


                                 <div class="row">
                                    <div class="col-3">
                                        <p>Master </p>
                                    </div>
                                    <div class="col-8">
                                        <p>13'1' ' x 13'1' '</p>
                                    </div>
                                </div>

                                 <div class="row">
                                    <div class="col-3">
                                        <p>2nd Br </p>
                                    </div>
                                    <div class="col-8">
                                        <p>13'1' ' x 9'10' '</p>
                                    </div>
                                </div>

                                 <div class="row">
                                    <div class="col-3">
                                        <p>3rd Br</p>
                                    </div>
                                    <div class="col-8">
                                        <p>13'1' ' x 9'10' '</p>
                                    </div>
                                </div>
                            <p class="title mt-3 Roboto-Medium">Lower</p>
                                <div class="row">
                                    <div class="col-3">
                                        <p>Kitchen</p>
                                    </div>
                                    <div class="col-8">
                                        <p>9'10' ' x 16'4' '</p>
                                    </div>
                                </div>

                                    <div class="row">
                                    <div class="col-3">
                                        <p>Rec</p>
                                    </div>
                                    <div class="col-8">
                                        <p>926'2' ' x 26'2' '</p>
                                    </div>
                                </div>

                                 <div class="row">
                                    <div class="col-3">
                                        <p>Br</p>
                                    </div>
                                    <div class="col-8">
                                        <p>13'1' ' x 9'10' '</p>
                                    </div>
                                </div>

                                 


                            </div>
                        </div> -->
            <div class="item13 my-2 py-5">
              <div class="item1">
                <p class="title Roboto-Medium">Rooms</p>

                <div
                  class="row"
                  v-for="room in homedata.rooms"
                  :key="room.id"
                  v-if="room.level"
                >
                  <div class="col-3">
                    <p>{{ room.level }}</p>
                  </div>
                  <div class="col-4">
                    <p>{{ room.description }}</p>
                  </div>
                  <div class="col-5">
                    <p>{{ room.length }} x {{ room.width }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="item14 py-4 my-3">
              <p class="DMSerifRegular text-color-1">Similar homes for sale</p>
              <div class="cards my-2 my-md-5" v-if="similar.length">
<!--                <card-homereport-->
<!--                    v-for="listing in similar"-->
<!--                    :key="listing.id"-->
<!--                    :homedata="listing">-->

<!--                </card-homereport>-->
                <card-list
                  v-for="listing in similar"
                  :key="listing.id"
                  :homedata="listing"
                ></card-list>
              </div>
            </div>

            <div class="item12 my-1 py-1">
                            <div class="item1">
                                <p class="text-color-1  Roboto-Medium">Listing Brokerage</p>
                            </div>
                            <div class="item2 Roboto-Regular">
                                <div class="row">
                                    <div class="col-12" v-for="agent in homedata.agents" :key="agent.id">
                                      <p v-if="agent.brokerage.name">Listing Provided by {{agent.name}} OF {{agent.brokerage.name}} , {{mlsnum}}</p>
                                      
                                       </div>
                                    <!-- <div class="col-9">{{mlsnum}}</div> -->
                                </div>
                                 <!-- <div class="row">
                                    <div class="col-3">Brokerage</div>
                                    <div class="col-9">{{homedata.agents[0].name}},{{homedata.agents[0].brokerage.name}}</div>
                                </div> -->
                            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto text-center" v-if="loading">
      <b-spinner
        v-if="loading"
        style="width: 4rem; height: 4rem"
        variant="warning"
        label="Large Spinner"
      ></b-spinner>
    </div>
    <div class="my-2 my-md-5 disclaimer-content container">
      <p class="Roboto-Regular" v-if="MainboardId == 18">
        Data is supplied by Pillar 9™ MLS® System. Pillar 9™ is the owner of the
        copyright in its MLS® System. Data is deemed reliable but is not
        guaranteed accurate by Pillar 9™. The trademarks MLS®, Multiple Listing
        Service® and the associated logos are owned by The Canadian Real Estate
        Association (CREA) and identify the quality of services provided by real
        estate professionals who are members of CREA. Used under license.
      </p>
       <p class="Roboto-Regular" v-if="MainboardId == 21">
                    Copyright {{yearnow}}  by the REALTORS® Association of Edmonton. All Rights Reserved. <code><br></code>
The MLS® System Data is made available from the REALTORS® Association of Edmonton. Data is deemed reliable but is not guaranteed accurate by the REALTORS® Association of Edmonton.<code><br></code>
Days on Site and market statistics values are calculated by Sweetly Real Estate Inc based on values provided in the REALTORS® Association of Edmonton listing data feed.<code><br></code>
Mortgage values are calculated by Sweetly Real Estate Inc and are provided for estimate purposes only.<code><br></code>
The Sweetly Estimate is calculated by Sweetly Real Estate Inc and is provided as a general estimate only.<code><br></code>
Trademarks are owned or controlled by the Canadian Real Estate Association (CREA) and identify real estate professionals who are members of CREA (REALTOR®, REALTORS®) and/or the quality of services they provide (MLS®, Multiple Listing Service®)

                 </p><br>
                 <p  class="Roboto-Regular text-color-1">
                    Listing information last updated on {{lastupdatemonth}} at {{lastupdatehour}}  ({{timezone}})
                 </p> 

    </div>

  </div>
</template>
<script>
// import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import moment from "moment";
import { mapState } from "vuex";

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      settings: {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        edgeFriction: 0.35,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: true,
        centerMode: true,
        centerPadding: "20px",
        "responsive": [
            {
            "breakpoint": 1024,
            "settings": {
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "infinite": true,
            }
            },
            {
            "breakpoint": 600,
            "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "initialSlide": 1,
                "arrows":true,
            }
            },
            {
            "breakpoint": 480,
            "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "arrows":true,
            }
            }
        ]
      },
      checkstatus: null,
      loading: null,
      windowFeatures: {},
      copied:false,
      errsms:false
    };
  },
  computed: {
    ...mapState(["similerbymsl","estimatevalue"]),
    homedata() {
      return this.$store.state.currentHome;
    },
    yearnow(){
        return new Date().getFullYear();
    },
    latitude() {
      return this.homedata.map.latitude * 1;
    },
    longitude() {
      return this.homedata.map.longitude * 1;
    },
    MainboardId() {
      return this.$route.params.boardId;
    },
    fullPath() {
      return window.location.href;
    },
     mlsnum(){
        return this.$route.params.mls;
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
    similar() {
      if (this.similerbymsl) {
        return this.similerbymsl.similar;
      }
      return [];
    },
    timezone(){
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    },
    lastupdate(){
      var d = new Date(); /* midnight in China on April 13th */
     return   d.toLocaleString('en-US', { timeZone: this.timezone });
    },
    lastupdatemonth(){
      return moment(this.lastupdate).format("MMM Do YYYY");
    },
    lastupdatehour(){
      const d = new Date();
     let res =  d.toLocaleString('en-US',  {
        timeZone: this.timezone,
    hour: '2-digit',
    hour12: true
})
    return  res.replace(/[ ,]+/g, ":00 ")
    },
 
    
  },
  components: {
  //  VueSlickCarousel,
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
    formatdate(date){
      return moment(date).format("MMM Do YYYY");
    },
    Openverifyemailbtcode(){
      this.$bvModal.show("verify-modal");
      this.$bvModal.hide("my-modallogin");
    },
     OpenVerifycode(){
      this.$bvModal.show("verify-modal");
    },
     Openforgetcode(){
      this.$bvModal.hide("my-modallogin");
      this.$bvModal.show("forget-code");

    },

    closeVerify(){
      this.$bvModal.hide("verify-modal");
    },
    shareSMS(){
      this.errsms = true
      setTimeout(() =>{
        this.errsms = false
      },5000)
    },
    copyURL() {
      var Url = this.$refs.mylink;
      Url.select();
      document.execCommand("copy");
      this.copied=true
    },
    gethomedetails() {
      let mls = this.$route.params.mls;
      let boardId = this.$route.params.boardId;
      this.loading = true;
      this.$http
        .get(`listings/alldetails_bymls/?mlsNumber=${mls}&boardId=${boardId}`)
        .then((res) => {
          this.loading = false;
          this.$store.commit("SET_CURRENT_HOME", res.data);
        });
    },
    gettime(item) {
      return moment(item).endOf("day").fromNow(true);
    },
    getpermonth(item) {
      return (item / 12).toFixed(2).toLocaleString("ja-JP");
    },
    formatdatehistory(item) {
      return moment(item).format("MMM Do YY");
    },
    getnumber(item) {
      return item * 1;
    },
    makeAuth() {
      this.$root.$emit('bv::show::modal', 'my-modal', '#my-modal')
    },

    getsimiler() {
      let input = {
        mlsNumber: this.$route.params.mls,
        boardId: this.$route.params.boardId,
      };
      this.$http
        .get(
          `listings/similar_forsale_bymls/?mlsNumber=${input.mlsNumber}&boardId=${input.boardId}`
        )
        .then((res) => {
          this.loading = false;
          this.$store.commit("SETSimilarBymls", res.data);
        });
    },
 
    open(e) {
      console.log(e);
    },
    change(e) {
      console.log(e);
    },
    close(e) {
      console.log(e);
    },
    routrMap(){
            this.$router.push({name:'BrowswHome'})
        },
             find_estimate(){
      let input = {
        mlsNumber: this.$route.params.mls,
        boardId: this.$route.params.boardId,
      };
        this.$http
        .get(
          `listings/estimates_bymls/?mlsNumber=${input.mlsNumber}&boardId=${input.boardId}`
        )
        .then((res) => {
          this.loading = false;
          this.$store.commit("SETestimatevalue", res.data);
        });
    },
  },
  created() {
    this.gethomedetails();
    this.getsimiler();
     this.find_estimate();
  },
};
</script>
<style scoped>
.homedetails .item1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.homedetails .item1 .item1a p {
  font-size: 22px;
  color: #00a19b;
}
.homedetails .item1 .item1b {
  line-height: 1;
}
.homedetails .item1 .item1b p {
  font-size: 22px;
}
.homedetails .item1 .item1b p span {
  font-size: 16px;
  color: #707070;
}
.homedetails .item1 .item1c {
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 16px;
}
.homedetails .item1 .item1c button {
  border: 1px solid #70707080;
  border-radius: 6px;
  transition: ease-in 0.3s;
}
.homedetails .item1 .item1c button:hover {
  border: 1px solid #3f3e3e;
}
.slideimg {
  /* width: 420px; */
  height: 320px !important;
}
.homedetails .item3 {
  width: 50%;
}
.homedetails .item14 p {
  font-size: 28px;
}
.homedetails .item3 p:first-child {
  font-size: 30px;
}
.homedetails .item3 p:last-child {
  font-size: 22px;
  color: #707070;
}
.homedetails .item4 {
  width: 80%;
  flex-direction: row;
}
.homedetails .item4 p span:first-child {
  color: #232323;
  font-size: 18px;
  margin-right: 5px;
}
.homedetails .item4 p span:nth-child(2) {
  color: #aaaaaa;
  font-size: 18px;
}
.homedetails .item5 {
  border-radius: 12px;
}
.homedetails .item5 .item5a p {
  color: #ffb600;
  font-size: 28px;
}
.homedetails .item5 .item5a button {
  border: 1px solid #ffb600;
  border-radius: 8px;
}
.homedetails .item5 .item5a button img {
  width: 22px;
  height: 22px;
  margin-right: 6px;
}
.homedetails .item5 .item5a button p {
  font-size: 1em;
  color: #434242;
}
.homedetails .item5 .item5b .p1 {
  color: #434242;
  font-size: 18px;
}
.homedetails .item5 .item5b .p2 .p2a {
  color: #707070;
  font-size: 16px;
}
.homedetails .item5 .item5b .p2 .p2b {
  font-size: 16px;
  color: #434242;
}
.homedetails .item5 .item5b .p2 .p2b span {
  color: #c95055;
  font-size: 20px;
}
.homedetails .item6 .p1 {
  font-size: 18px;
  color: #434242;
}
.homedetails .item6 .p2 {
  font-size: 16px;
  color: #707070;
  border-right: 1px solid #707070;
}
.homedetails .item6 .p3 {
  font-size: 16px;
  color: #707070;
}
.homedetails .item6 {
  border-bottom: 2px solid #707070b6;
}
.homedetails .item7 p {
  font-size: 28px;
  font-weight: 600;
}
.disclaimer-content p {
  color: #434242;
  font-size: 18px;
}
.homedetails .item7 .item7a {
  background: #edf3f2;
}
.homedetails .item7 .item7a .p1 {
  background: #ffb600;
  border-radius: 8px;
  width: 30%;
  margin: auto;
  height: 48px;
  cursor: pointer;
}
.homedetails .item7 .item7a .p1 img {
  width: 24px;
  height: 24px;
}
.homedetails .item7 .item7a .p1 p {
  font-size: 1em;
}
.homedetails .item7 .item7a .p2 {
  font-size: 18px;
}
.homedetails .item8 .item8a img {
  width: 22px;
  height: 22px;
}
.homedetails .item8 .item8a p {
  color: #ffb600;
  font-size: 28px;
}
.homedetails .item8 .item8a .p2 {
  font-size: 16px;
  color: #707070;
}
.homedetails .item9 .item9a .element1{
  font-size: 20px;
  color: #ffb600;
}
.homedetails .item9 .item9a .element2{
  font-size: 20px;
}
.homedetails .item9 .item9a .element3{
  font-size: 20px;
  font-weight: bold;
}
.homedetails .item9 {
  border-bottom: 1px solid #7070706b;
}
/*.homedetails .item9 div:first-child {*/
/*  font-size: 24px;*/
/*}*/
/*.homedetails .item9 div:nth-child(2) p:first-child {*/
/*  color: #ffb600;*/
/*  font-size: 24px;*/
/*}*/
.homedetails .item9 .item9a .image {
  width: 120px;
  height: 90px;
}
.homedetails .item9 .item9a .image img {
  filter: blur(1px);
  border-radius: 12px;
}
.homedetails .item9 .new {
  border-left: 5px solid #ffb600;
  background: #f3f3f3;
}
.homedetails .item9 .sold {
  border-left: 5px solid #c95055;
}
.homedetails .item9 .listed {
  border-left: 5px solid #707070;
}
.homedetails .item10,
.homedetails .item11 {
  border-bottom: 1px solid #7070706b;
}
.homedetails .item10 .item1 {
  font-size: 34px;
  font-weight: 600;
}
.homedetails .item11 .item1 {
  display: block;
}
.homedetails .item11 .item1 p:first-child {
  font-size: 34px;
  font-weight: 600;
  color: #232323;
}
.homedetails .item11 .item1 p:nth-child(2) {
  font-size: 24px;
  font-weight: 600;
  color: #232323;
}
.homedetails .item11 .item1 p:nth-child(3) {
  font-size: 20px;
  color: #707070;
}
.homedetails .item11 .item2 p {
  font-size: 20px;
  color: #707070;
  font-family: "Roboto-Regular", sans-serif !important;
}
.homedetails .item12 .item1 p {
  font-size: 34px;
  font-weight: 600;
  color: #232323;
}
.homedetails .item12 .item2 {
  font-size: 20px;
  color: #707070;
}
.homedetails .item13 {
  border-bottom: 1px solid #7070706b;
}
.homedetails .item13 .item1 .title {
  font-size: 24;
  font-weight: 600;
  color: #232323;
}
.homedetails .item13 .item1 {
  display: block;
  font-size: 20px;
  color: #707070;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
  outline: none;
  box-shadow: 0;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #ffb600;
  border: 0;
  outline: none;
  box-shadow: 0;
}
.custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: none !important;
}
.custom-control-label::before {
  border: #70707069 solid 1px;
}
.homedetails .item10 .item2a span:first-child {
  color: #434242;
  font-size: 18px;
}
.homedetails .item10 .item2a span:nth-child(2) {
  color: #707070;
  font-size: 16px;
}
.homedetails .item10 .item2a span:nth-child(3) {
  color: #707070;
  font-size: 16px;
  border-left: 1px solid #707070;
}
.homedetails .item10 .item2b input {
  border: 1px solid #aaaaaa;
  border-radius: 8px;
}
.homedetails .item10 .item2b input::placeholder {
  color: #aaaaaa;
}
.homedetails .part2 {
  border-radius: 8px;
}
.homedetails .part2 .item1 {
  color: #ffb600;
  font-size: 26px;
  font-weight: 600;
}
.homedetails .part2 .item2 {
  display: flex;
  font-size: 18px;
}
.homedetails .part2 .item2 .item2a {
  display: flex;
  background: #f8f5e4;
  border-radius: 20px;
}
.homedetails .part2 .item2 .item2a img {
  width: 22px;
  height: 22px;
}
.homedetails .part2 .item3 {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
}
.homedetails .part2 .item3 p {
  font-size: 22px !important;
}
.homedetails .part2 .item4 button {
  border: 1px solid #ffb600;
  height: 46px;
  font-size: 22px;
  border-radius: 6x;
  color: #ffb600;
}
.homedetails .part2 .item4 button:hover {
  background: #f0e9d4fc;
}
.homedetails .part2 .item4 p {
  color: #434242;
  font-size: 18px;
}
.homedetails .withoutlogin {
  filter: blur(5px) !important;
}
.homedetails .lockimg {
  filter: none;
  position: absolute;
  top: 20px;
  left: 99px;
  width: 44px !important;
  height: 44px !important;
}
.cards {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
}
/* @media (min-width: 760px) {
  .modal-dialog {
    max-width: 780px;
    margin: 1.75rem auto;
  }

} */
@media only screen and (max-width: 600px) {
  .cards {
    grid-template-columns: auto;
  }
  .homedetails .item1 {
    flex-direction: column;
  }
  .homedetails .item3 {
    width: 90%;
  }
  .homedetails .item3 p:first-child {
    font-size: 22px;
  }
  .homedetails .item3 p:last-child {
    font-size: 18px;
  }
  .homedetails .item4 {
    flex-direction: column;
  }
  .homedetails .item5 .item5a p {
    font-size: 12px;
  }
  .homedetails .item5 .item5b .p1 {
    font-size: 12px;
  }
  .homedetails .item6 .p1 {
    font-size: 16px;
  }
  .homedetails .item6 .p3 {
    font-size: 14px;
  }
  .homedetails .item7 p {
    font-size: 22px;
  }
  .homedetails .item7 .item7a .p1{
    width: 60%;
  }
  .homedetails .item7 .item7a .p1 p{
    font-size: .8em;
  }
  .homedetails .item7 .item7a .p2{
    font-size: 16px;
  }
  .homedetails .item11 .item1 p:first-child {
    font-size: 24px;
  }
  .homedetails .item11 .item1 p:nth-child(2) {
    font-size: 20px;
  }
  .homedetails .item11 .item1 p:nth-child(3) {
    font-size: 16px;
  }
  .homedetails .item11 .item2 p{
    font-size: 14px;
  }
  .homedetails .item13 .item1 {
    font-size: 14px;
  }
  .homedetails .item14 p {
    font-size: 24px;
  }
  .disclaimer-content p{
    font-size: 14px;
  }
  .slideimg {
  /* width: 420px; */
  height: 200px !important;
}

}
@media only screen and (min-width: 900px) {
  .cards {
    display: grid;
    grid-template-columns: auto auto;
  }
}
@media only screen and (min-width: 1200px) {
  .cards {
    display: grid;
    grid-template-columns: auto auto auto;
  }
}
</style>
