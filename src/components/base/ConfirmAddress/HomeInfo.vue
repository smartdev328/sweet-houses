<template>
  <div class="home-info-form2">
    <div class="px-0 px-md-5 w-100 mx-0">
      <div v-if="tab_visible == 'menu_one'">
        <p class="text-center text-color-1 DMSerifRegular font-weight-bold">
          Is this the right address?
        </p>
        <p class="text-center Roboto-Regular">{{ homeaddres }}</p>
        <div class="row">
          <div class="col-10 col-md-10 mx-auto">
            <div class="text-center">
              <button
                type="button"
                @click="ConfirmAddress()"
                class="btn rounded Roboto-Medium py-2 px-4"
              >
                Confirm Address</button
              ><br />
              <a class="btn item5 Roboto-Medium" @click="Editaddress()"
                >Edit address</a
              >
            </div>
          </div>
          <div class="col-12 mx-auto">
            <address-map :lat="latlong.lat" :lon="latlong.lng"></address-map>
          </div>
        </div>
      </div>
      <div class="d-flex row" v-if="tab_visible == 'menu_two'">
        <div class="col-1 mr-auto mr-md-0 ml-md-auto">
          <p
            @click="tab_visible = 'menu_one'"
            class="h1"
            style="cursor:pointer"
          >
            <img src="../../../assets/image/icon/bottomarrow.svg" alt="arrow-icon" class="chevron-left">
          </p>
        </div>
        <div class="col-12 col-md-7 mr-auto item11 text-center p-2 px-md-4">
          <div class="item11a DMSerifRegular">
            <p>Tell us about your home</p>
          </div>
          <form class="container Roboto-Regular">
            <div
              class="form-group row col-12 col-md-10 mx-auto px-0"
              :class="{ 'input--error': msgone.hometype && !hometype }"
            >
              <label for="hometype" class="col-sm-4 col-form-label text-left"
                >Home type
              </label>
              <div
                class="col-sm-8 selectspecbg Roboto-Regular  text-left"
                :class="{ selectspecchanged: changedsubcategory }"
              >
                <!-- <select
                  name="canadianprovince"
                  @change="changestylesub()"
                  class="form-control form-control-lg Roboto-Regular"
                  id=""
                  v-model="hometype"
                  required
                >
                  <option value="null" disabled hidden selected>
                    Choose an option
                  </option>
                  <option
                    v-for="hometype in hometypes"
                    :key="hometype.id"
                    :value="hometype.value"
                    >{{ hometype.name }}</option
                  >
                </select>  -->
                 <v-select 
                 :reduce="hometypes => hometypes.value"
                  class="form-control form-control-lg Roboto-Regular"
                 v-model="hometype"
                    :options="hometypes" 
                    label="name"
                    placeholder="Choose an option"
                    :searchable=false
                    :clearable=false
                  ></v-select>
                <span
                  style="color: #dc3545;font-size: 16px;"
                  v-if="msgone.hometype && !hometype"
                  >{{ msgone.hometype }}</span
                >
              </div>
            </div>
            <div
              class="form-group row col-12 col-md-10 mx-auto px-0"
              :class="{ 'input--error': msgone.storeys && !storeys }"
            >
              <label for="hometype" class="col-sm-4 col-form-label text-left"
                >Storeys</label
              >
              <div
                class="col-sm-8 selectspecbg Roboto-Regular  text-left"
                :class="{ selectspecchanged: changedStorey }"
              >
                <!-- <select
                  name="canadianprovince "
                  @change="changestyleStorey()"
                  class="form-control form-control-lg Roboto-Regular"
                  id=""
                  v-model="storeys"
                  required
                >
                  <option value="null" disabled hidden selected>
                    Choose an option
                  </option>
                  <option
                    v-for="StoreyType in StoreysType"
                    :key="StoreyType.id"
                    :value="StoreyType.value"
                    >
                    <p >{{ StoreyType.name }}</p>
                   </option
                  >
                </select> -->
                  <v-select 
                  :reduce="StoreysType => StoreysType.value"
                  class="form-control form-control-lg Roboto-Regular"
                 v-model="storeys"
                    :options="StoreysType" 
                    label="name"
                    placeholder="Choose an option"
                    :searchable=false
                    :clearable=false
                  ></v-select>
                <span
                  style="color: #dc3545;font-size: 16px;"
                  v-if="msgone.storeys && !storeys"
                  >{{ msgone.storeys }}</span
                >
              </div>
            </div>
                 <div
              class="form-group row col-12 col-md-10 mx-auto px-0"
              :class="{
                'input--error': msgone.home_condition && !home_condition,
              }"
            >
              <label
                for="home_condition"
                class="col-sm-4 col-form-label text-left Roboto-Regular"
                >Home Condition
              </label>
              <div
                class="col-sm-8 selectspecbg Roboto-Regular text-left"
                :class="{ selectspecchanged: changedhome_condition }"
              >
                 <v-select 
                 :reduce="home_conditions => home_conditions.value"
                  class="form-control form-control-lg Roboto-Regular"
                 v-model="home_condition"
                    :options="home_conditions" 
                    label="name"
                    placeholder="Choose an option"
                    :searchable=false
                    :clearable=false
                  ></v-select>
                <span
                  style="color: #dc3545;font-size: 16px;"
                  v-if="msgone.home_condition && !home_condition"
                  >{{ msgone.home_condition }}</span
                >
              </div>
            </div>
                  <div
              class="form-group row col-12 col-md-10 mx-auto px-0"
              :class="{ 'input--error':  (msgone.bedrooms_ag && bedrooms_ag < 0) || (msgone.bedrooms_ag && bedrooms_ag == null) }"
            >
              <label for="hometype" class="col-sm-5 col-form-label text-left"
                >Bedrooms (above ground) </label
              >
              <div class="d-style">
                <div class="col-sm-2">
                  <button
                    class="btn minus-btn rounded-circle"
                    :disabled="bedrooms_ag < 1"
                    type="button"
                    @click="bedrooms_ag--"
                  >
                    <!--  <p class="mb-1 mt-0">-</p> -->
                  <img src="../../../assets/image/icon/minus.svg" alt="">
                  </button>
                </div>
                <div class="col-sm-3">
                  <input
                    type="number"
                    min="0"
                    max="5"
                    id="hometype"
                    v-model.number="bedrooms_ag"
                    class="pl-2 form-control border bg-white no-arrow Roboto-Regular text-center"
                  />
                  <span
                    class="required-err"
                    style="position:absolute;top:38px"
                    v-if="(msgone.bedrooms_ag && bedrooms_ag < 0) || (msgone.bedrooms_ag && bedrooms_ag == null)"
                    >required</span
                  >
                </div>
                <div class="col-sm-2">
                  <button
                    class="btn plus-btn rounded-circle"
                    type="button"
                    @click="bedrooms_ag++"
                  >
                    <!--  <p class="mb-1 mt-0">-</p> -->
                    <img src="../../../assets/image/icon/plus.svg" alt="">
                  </button>
                </div>
              </div>
            </div>
            <div
              class="form-group row col-12 col-md-10 mx-auto px-0"
              :class="{ 'input--error':  (msgone.bedrooms_bg && bedrooms_bg < 0) || (msgone.bedrooms_bg && bedrooms_bg == null) }"
            >
              <label for="bedrooms_bg" class="col-sm-5 col-form-label text-left"
                >Bedrooms (below ground)</label
              >
              <div class="d-style">
                <div class="col-sm-2">
                  <button
                    class="btn minus-btn rounded-circle"
                    :disabled="bedrooms_bg < 1"
                    type="button"
                    @click="bedrooms_bg--"
                  >
                    <img src="../../../assets/image/icon/minus.svg" alt="">
                  </button>
                </div>
                <div class="col-sm-3">
                  <input
                    type="number"
                    min="0"
                    max="5"
                    id="bedrooms_bg"
                    v-model.number="bedrooms_bg"
                    class="pl-0 pl-md-2 form-control border bg-white no-arrow Roboto-Regular text-center"
                    required
                  />
                  <span
                    class="required-err"
                    style="position:absolute;top:38px"
                    v-if="(msgone.bedrooms_bg && bedrooms_bg < 0) || (msgone.bedrooms_bg && bedrooms_bg == null) "
                    >required</span
                  >
                </div>
                <div class="col-sm-2">
                  <button
                    class="btn plus-btn rounded-circle"
                    type="button"
                    @click="bedrooms_bg++"
                  >
                  <img src="../../../assets/image/icon/plus.svg" alt="">
                  </button>
                </div>
              </div>
            </div>
      
            <div
              class="form-group row col-12 col-md-10 mx-auto px-0"
               :class="{ 'input--error':  (msgone.bathrooms_full && bathrooms_full < 0) || (msgone.bathrooms_full && bathrooms_full == null) }"
            >
              <label for="hometype" class="col-sm-5 col-form-label text-left"
                >Full bathrooms</label
              >
              <div class="d-style">
                <div class="col-sm-2">
                  <button
                    class="btn minus-btn rounded-circle"
                    :disabled="bathrooms_full < 1"
                    type="button"
                    @click="bathrooms_full--"
                  >
                    <!--  <p class="mb-1 mt-0">-</p> -->
                   <img src="../../../assets/image/icon/minus.svg" alt="">
                  </button>
                </div>
                <div class="col-sm-3">
                  <input
                    type="number"
                    min="0"
                    max="5"
                    id="hometype"
                    v-model.number="bathrooms_full"
                    class="pl-2 form-control border bg-white no-arrow Roboto-Regular text-center"
                  />
                  <span
                    class="required-err"
                    style="position:absolute;top:38px"
                    v-if="(msgone.bathrooms_full && bathrooms_full < 0) || (msgone.bathrooms_full && bathrooms_full == null)"
                    >required</span
                  >
                </div>
                <div class="col-sm-2">
                  <button
                    class="btn plus-btn rounded-circle"
                    type="button"
                    @click="bathrooms_full++"
                  >
                    <!--  <p class="mb-1 mt-0">-</p> -->
                   <img src="../../../assets/image/icon/plus.svg" alt="">
                  </button>
                </div>
              </div>
            </div>
            <div
              class="form-group row col-12 col-md-10 mx-auto px-0"
              :class="{ 'input--error':  (msgone.bathrooms_partial && bathrooms_partial < 0) || (msgone.bathrooms_partial && bathrooms_partial == null) }"
            >
              <label for="Partial" class="col-sm-5 col-form-label text-left"
                >Partial bathrooms</label
              >
              <div class="d-style">
                <div class="col-sm-2">
                  <button
                    class="btn minus-btn rounded-circle"
                    :disabled="bathrooms_partial < 1"
                    type="button"
                    @click="bathrooms_partial--"
                  >
                    <!--  <p class="mb-1 mt-0">-</p> -->
                  <img src="../../../assets/image/icon/minus.svg" alt="">
                  </button>
                </div>
                <div class="col-sm-3">
                  <input
                    type="number"
                    min="0"
                    max="5"
                    id="Partial"
                    v-model.number="bathrooms_partial"
                    class="pl-2 form-control border bg-white no-arrow Roboto-Regular text-center"
                  />
                  <span
                    class="required-err"
                    style="position:absolute;top:38px"
                    v-if=" (msgone.bathrooms_partial && bathrooms_partial < 0) || (msgone.bathrooms_partial && bathrooms_partial == null) "
                    >required</span
                  >
                </div>
                <div class="col-sm-2">
                  <button
                    class="btn plus-btn rounded-circle"
                    type="button"
                    @click="bathrooms_partial++"
                  >
                    <!--  <p class="mb-1 mt-0">-</p> -->
                   <img src="../../../assets/image/icon/plus.svg" alt="">
                  </button>
                </div>
              </div>
            </div>
            <div
              class="form-group row col-12 col-md-10 mx-auto px-0"
              :class="{ 'input--error':  (msgone.squfeet && squfeet < 0) || (msgone.squfeet && squfeet == null) }"
            >
              <label for="Square" class="col-sm-5 col-form-label text-left"
                >Square feet (approx.)</label
              >
              <div class="d-style">
                <div class="col-sm-2"></div>
                <div class="col-sm-3">
                  <input
                    type="number"
                    min="0"
                    max="5"
                    id="Square"
                    v-model.number="squfeet"
                    class="pl-2 form-control border bg-white no-arrow Roboto-Regular text-center"
                  />
                  <span class="required-err" style="position:absolute;top:38px" v-if=" (msgone.squfeet && squfeet < 0) || (msgone.squfeet && squfeet == null)"
                    >required</span
                  >
                </div>
                <div class="col-sm-2"></div>
              </div>
            </div>
            <div
              class="form-group row col-12 col-md-10 mx-auto px-0"
               :class="{ 'input--error':  (msgone.garage_spaces && garage_spaces < 0) || (msgone.garage_spaces && garage_spaces == null) }"
            >
              <label for="Parking" class="col-sm-5 col-form-label text-left"
                >Garage spaces</label
              >
              <div class="d-style">
                <div class="col-sm-2">
                  <button
                    class="btn minus-btn rounded-circle"
                    :disabled="garage_spaces < 1"
                    type="button"
                    @click="garage_spaces--"
                  >
                    <!--  <p class="mb-1 mt-0">-</p> -->
                 <img src="../../../assets/image/icon/minus.svg" alt="">
                  </button>
                </div>
                <div class="col-sm-3">
                  <input
                    type="number"
                    min="0"
                    max="5"
                    id="Parking"
                    v-model.number="garage_spaces"
                    class="pl-2 form-control border bg-white no-arrow Roboto-Regular text-center"
                  />
                  <span
                    class="required-err"
                    style="position:absolute;top:38px"
                    v-if="(msgone.garage_spaces && garage_spaces < 0) || (msgone.garage_spaces && garage_spaces == null) "
                    >required</span
                  >
                </div>
                <div class="col-sm-2">
                  <button
                    class="btn plus-btn rounded-circle"
                    type="button"
                    @click="garage_spaces++"
                  >
                    <!--  <p class="mb-1 mt-0">-</p> -->
                    <img src="../../../assets/image/icon/plus.svg" alt="">
                  </button>
                </div>
              </div>
            </div>
            <div class="form-group col-12 col-md-10 mx-auto px-0">
              <button
                class="btn btn-continue w-100 px-4 d-flex justify-content-between align-items-baseline"
                type="submit"
                @click.prevent="oneFunc()"
              >
                <p class="mb-0">Continue</p>
                <p class="h1 text-white mb-0">
                  <img src="../../../assets/image/icon/arrow-right.svg" alt="arrow-icon" class="arrow-icon">
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="d-flex row" v-if="tab_visible == 'menu_three'">
        <div class="col-1 mr-auto mr-md-0 ml-md-auto">
          <p
            @click="tab_visible = 'menu_two'"
            class="h1"
            style="cursor:pointer"
          >
            <img src="../../../assets/image/icon/bottomarrow.svg" alt="arrow-icon" class="chevron-left">
          </p>
        </div>
        <div class="col-12 col-md-7 mr-auto item11 text-center p-2 p-md-4">
          <div class="item11a DMSerifRegular">
            <p>Tell us about your home</p>
          </div>
          <form action="" class="container">
       
            <div
              class="form-group row ol-12 col-md-10 mx-auto px-0"
              :class="{ 'input--error': msgtwo.parking_desc && !parking_desc }"
            >
              <label for="parking_descs" class="col-sm-4 col-form-label text-left"
                >Describe Parking</label
              >
              <div
                class="col-sm-8 selectspecbg Roboto-Regular text-left"
                :class="{ selectspecchanged: changedparking_desc }"
              >
                <!-- <select
                  name="canadianprovince"
                  id="parking_descs"
                  @change="changedescibe()"
                  class="form-control form-control-lg Roboto-Regular"
                  v-model="parking_desc"
                  required
                >
                  <option value="null" disabled hidden selected>
                    Choose an option
                  </option>
                  <option
                    v-for="parking_desc in parking_descs"
                    :key="parking_desc.id"
                    :value="parking_desc.value"
                    >{{ parking_desc.name }}</option
                  >
                </select> -->
                 <v-select 
                 :reduce="parking_descs => parking_descs.value"
                    class="form-control form-control-lg Roboto-Regular"
                    v-model="parking_desc"
                    :options="parking_descs" 
                    label="name"
                    placeholder="Choose an option"
                    :searchable=false
                    :clearable=false
                  ></v-select>
                <span
                  style="color: #dc3545;font-size: 16px;"
                  v-if="msgtwo.parking_desc && !parking_desc"
                  >{{ msgtwo.parking_desc }}</span
                >
              </div>
            </div>
            <div
              class="form-group row ol-12 col-md-10 mx-auto px-0"
              :class="{ 'input--error': msgtwo.basement_desc && !basement_desc }"
            >
              <label for="hometype" class="col-sm-4 col-form-label text-left"
                >Please describe your basement</label
              >
              <div
                class="col-sm-8 selectspecbg Roboto-Regular text-left"
                :class="{ selectspecchanged: changedbasement }"
              >
                <!-- <select
                  name="canadianprovince"
                  @change="changebasement()"
                  class="form-control form-control-lg Roboto-Regular"
                  id=""
                  v-model="basement_desc"
                  required
                >
                  <option value="null" disabled hidden selected>
                    Choose an option
                  </option>
                  <option
                    v-for="basement in basements"
                    :key="basement.id"
                    :value="basement.value"
                    >{{ basement.name }}</option
                  >
                </select> -->
                  <v-select 
                  :reduce="basements => basements.value"
                    class="form-control form-control-lg Roboto-Regular"
                    v-model="basement_desc"
                    :options="basements" 
                    label="name"
                    placeholder="Choose an option"
                    :searchable=false
                    :clearable=false
                  ></v-select>
                <span
                  style="color: #dc3545;font-size: 16px;"
                  v-if="msgtwo.basement_desc && !basement_desc"
                  >{{ msgtwo.basement_desc }}</span
                >
              </div>
            </div>
            <div
              class="form-group row ol-12 col-md-10 mx-auto px-0"
              :class="{ 'input--error': msgtwo.prioritysale && !prioritysale }"
            >
              <label for="hometype" class="col-sm-6 col-form-label text-left"
                >Top priority for this sale</label
              >
              <div
                class="col-sm-12 selectspecbg Roboto-Regular text-left"
                :class="{ selectspecchanged: changedprioritysale }"
              >
                <b-form-group>
                  <b-form-checkbox-group
                      id="checkbox-group-2"
                      v-model="prioritysale"
                      name="flavour-2"
                      style="display: grid"
                  >
                    <b-form-checkbox
                        v-for="item in prioritysales" :key="item.id"
                        :value="item.value">{{ item.value }}</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
                 <!-- <v-select
                    :reduce="(option) => option.id"
                    class="form-control form-control-lg Roboto-Regular"
                    v-model="prioritysale"
                    :options="
                    [
                  { value: 'We want the highest price ...', id: 'We want the highest price with the right improvements' },
                  { value: 'Sell by a specific date', id: 'Sell by a specific date' },                
                ]"

                    :get-option-label="({value}) => `${value}`"
                    placeholder="Choose an option"
                    :searchable=false
                    :clearable=false
                  ></v-select> -->
                <span
                  style="color: #dc3545;font-size: 16px;"
                  v-if="msgtwo.prioritysale && !prioritysale"
                  >{{ msgtwo.prioritysale }}</span
                >
              </div>
            </div>
            <div
              class="form-group row ol-12 col-md-10 mx-auto px-0"
              :class="{
                'input--error': msgtwo.CurrentOccupancy && !CurrentOccupancy,
              }"
            >
              <label for="hometype" class="col-sm-4 col-form-label text-left"
                >Current Occupancy</label
              >
              <div
                class="col-sm-8 selectspecbg Roboto-Regular text-left"
                :class="{ selectspecchanged: changedCurrentOccupancy }"
              >
                <!-- <select
                  name="canadianprovince"
                  @change="changeCurrentOccupancy()"
                  class="form-control form-control-lg Roboto-Regular text-left"
                  id=""
                  v-model="CurrentOccupancy"
                  required
                >
                  <option value="null" disabled hidden selected>
                    Choose an option
                  </option>
                  <option
                    v-for="CurrentOccupancy in CurrentOccupancies"
                    :key="CurrentOccupancy.id"
                    :value="CurrentOccupancy.value"
                    >{{ CurrentOccupancy.name }}</option
                  >
                </select> -->
                 <v-select 
                 :reduce="CurrentOccupancies => CurrentOccupancies.value"
                    class="form-control form-control-lg Roboto-Regular"
                    v-model="CurrentOccupancy"
                    :options="CurrentOccupancies" 
                    label="name"
                    placeholder="Choose an option"
                    :searchable=false
                    :clearable=false
                  ></v-select>
                <span
                  style="color: #dc3545;font-size: 16px;"
                  v-if="msgtwo.CurrentOccupancy && !CurrentOccupancy"
                  >{{ msgtwo.CurrentOccupancy }}</span
                >
              </div>
            </div>
            <div class="form-group row ol-12 col-md-10 mx-auto px-0">
              <label for="hometype" class="col-sm-4 col-form-label text-left"
                >Upload Images</label
              >
              <div class="col-sm-8">
                <label
                  for="uploadimage"
                  class="custom-file-upload Roboto-Regular"
                >
                  Browse Images
                </label>
                <input
                  type="file"
                  id="uploadimage"
                  name="imagesArray"
                  multiple
                  @change="onChange"
                  accept=".png, .jpg, .jpeg"
                  class="form-control border bg-white"
                />
              </div>

            </div>
            <div v-if="lengthofimgarray > 0" class="imagesinfo">
              <p style="font-size: 18px" class="mb-0 mr-1" >{{lengthofimgarray}} image</p>
              <img src="../../../assets/image/icon/close.svg" alt=""  @click="clearimgarray()">
            </div>
<!--            <button @click="onUpload()" type="button">test</button>-->
            <div class="form-group ol-12 col-md-10 mx-auto px-0">
              <button
                class="btn btn-continue w-100 px-4 d-flex justify-content-between align-items-baseline"
                type="button"
                @click="twoFunc()"
              >
                <p class="mb-0">Continue</p>
                <p class="h1 text-white mb-0">
                  <img src="../../../assets/image/icon/arrow-right.svg" alt="arrow-icon">
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2"
export default {
  data() {
    return {
      imagesArray: [],
      obj1: {},
      hometypes: [
        { value: "Detached", name: "Detached" },
        { value: "Semi-Detached", name: "Semi-Detached" },
        { value: "Townhouse", name: "Townhouse" },
        { value: "Condo or apartment", name: "Condo or apartment" },
        { value: "Other", name: "Other" },
      ],
      StoreysType: [
        { value: "1 (Bungalow)", name: "1 (Bungalow)" },
        { value: "2-Storey", name: "2-Storey" },
       { value: "1 1/2 Storey", name: "1 1/2 Storey" },
        { value: "2 1/2 Storey", name: "2 1/2 Storey" },
        { value: "3-Storey", name: "3-Storey" },
        { value: "3 Storey or more", name: "3 Storey or more" },
        { value: "Multi/Split", name: "Multi/Split" },
      ],
      home_conditions: [
        { value: "Look's New", name: "Look's New" },
        { value: "About Average", name: "About Average" },
        { value: "Mostly Original", name: "Mostly Original" },
        { value: "Needs Work", name: "Needs Work" },
      ],
      parking_descs: [
        { value: "Attached Garage", name: "Attached Garage" },
        { value: "Detached Garage", name: "Detached Garage" },
        { value: "1 of each", name: "1 of each" },
        { value: "No Garage", name: "No Garage" },
        { value: "Other", name: "Other" },
      ],
      basements: [
        { value: "Fully Finished", name: "Fully Finished" },
        { value: "Partially Finished", name: "Partially Finished" },
        { value: "Unfinished", name: "Unfinished" },
        { value: "Separate Suite", name: "Separate Suite" },
        { value: "No Basement", name: "No Basement" },
      ],
      prioritysales: [ 
        {
          value: "We want the highest price with the right improvements",
          name: "We want the highest price ...",
        },
        { value: "Sell by a specific date", name: "Sell by a specific date" },
        {
          value: "Secure a sale to purchase another home",
          name: "Secure a sale to purchase...",
        },
        {
          value: `Been for sale before and we don't want that again`,
          name: `Been for sale before and....`,
        },
      ],
      CurrentOccupancies: [
        { value: "Vacant", name: "Vacant" },
        { value: "We Live There", name: "We Live There" },
        { value: "Rented", name: "Rented" },
      ],
      testnum: 0,
      tab_visible: "menu_one",
      checkstatus: true,
      changedsubcategory: false,
      changedStorey: false,
      hometype: null,
      parking_desc: null,
      storeys: null,
      bedrooms_bg: null, //Bedrooms (above ground)
      bedrooms_ag: null, //Bedrooms (below ground)
      bathrooms_full: null, //Full bathrooms
      bathrooms_partial: null, //Partial bathrooms
      squfeet: null, //Square feet (approx.)
      garage_spaces: null, //Parking spaces
      changedhome_condition: false,
      changedparking_desc: false,
      changedbasement: false,
      changedprioritysale: false,
      changedCurrentOccupancy: false,
      basement_desc: null,
      prioritysale: null,
      CurrentOccupancy: null,
      home_condition: null,
      msgone: {},
      msgtwo: {},
    };
  },
  computed: {
    homeaddres() {
      return this.$store.state.homeaddress || "";
    },
    latlong() {
      return this.$store.state.latlong || {};
    },
    val(){
      return document.getElementsByClassName('vs__selected')[3].innerText;  
    },
    lengthofimgarray(){
      return this.imagesArray.length
    },
 
  },

  methods: {
    onChange (event) {
      if(event.target.files.length > 20){
         Swal.fire({
            title: 'Failed !',
            text: 'you can upload only 20 picture',
            icon: 'error',
            confirmButtonText: 'Ok',
          })
      }else{
        for(var item in event.target.files){
          let pic = event.target.files[item]
         if( (pic.name.split(".").pop() == 'png' || pic.name.split(".").pop() == 'jpg' || pic.name.split(".").pop() == 'jpeg')
         ){
            if(pic.size/1024/1024 > 10){
            Swal.fire({
             title: 'Failed !',
             text: 'The file size can not exceed 10MB',
             icon: 'error',
             confirmButtonText: 'Ok',
           })
         }else{
            this.imagesArray.push(pic)
         }
          // this.imagesArray.push(pic)
               // = event.target.files
         }
         else{
           Swal.fire({
             title: 'Failed !',
             text: 'you can upload only png,jpg or jpeg',
             icon: 'error',
             confirmButtonText: 'Ok',
           })
         }
        

        }

      }
      
    },
    onUpload() {
      const formData = new FormData();
      for (const i of Object.keys(this.imagesArray)) {
        formData.append('image', this.imagesArray[i])
      }
      formData.append('form_id', 2)
      this.$http.post('forms/sweetly_estimate_images/', formData, {
      // this.$http.post('listings/form_images/', formData, {
      }).then((res) => {
        console.log(res)
      })
    },
    clearimgarray(){
      this.imagesArray = []
    },
    changestylesub() {
      this.changedsubcategory = true;
    },
    changeoption(tab) {
      console.log(tab);
      return (tab = true);
    },
    changehcond() {
      this.changedhome_condition = true;
    },
    changedescibe() {
      this.changedparking_desc = true;
    },
    changebasement() {
      this.changedbasement = true;
    },
    changesale() {
      this.changedprioritysale = true;
    },
    changeCurrentOccupancy() {
      this.changedCurrentOccupancy = true;
    },
    changestyleStorey() {
      this.changedStorey = true;
    },
    onecheckform() {
      this.msgone = {};
      if (!this.hometype) {
        this.msgone.hometype = "Home type is required";
      }
      if (!this.storeys) {
        this.msgone.storeys = "Storeys is required";
      }
         if (!this.home_condition) {
        this.msgone.home_condition = "Home Condition is required";
      }
      if (this.bedrooms_bg==null || this.bedrooms_bg < 0) {
        this.msgone.bedrooms_bg = "required";
      }
      if (this.bedrooms_ag == null || this.bedrooms_ag < 0) {
        this.msgone.bedrooms_ag = "required";
      }
      if (this.bathrooms_full ==null || this.bathrooms_full < 0) {
        this.msgone.bathrooms_full = "required";
      }
      if (this.bathrooms_partial   ==null || this.bathrooms_partial < 0) {
        this.msgone.bathrooms_partial = "required";
      }
      if (this.garage_spaces  ==null || this.garage_spaces < 0) {
        this.msgone.garage_spaces = "require";
      }
      if (this.squfeet ==null || this.squfeet < 0) {
        this.msgone.squfeet = "required";
      }
      if (
        this.hometype &&
        this.storeys && 
        this.home_condition &&
        this.bedrooms_bg >= 0 &&
        this.bedrooms_ag >= 0 &&
        this.bathrooms_partial >= 0 &&
        this.bathrooms_full >= 0 &&
        this.squfeet >= 0
      ) {
        return true;
      }
    },
    oneFunc() {
      if (this.onecheckform() && Object.keys(this.msgone).length == 0) {
        let inputdata = {};
        (inputdata.hometype = this.hometype),
          (inputdata.storeys = this.storeys),
          (inputdata.bedrooms_bg = this.bedrooms_bg),
          (inputdata.bedrooms_ag = this.bedrooms_ag),
          (inputdata.bathrooms_partial = this.bathrooms_partial),
          (inputdata.garage_spaces = this.garage_spaces),
          (inputdata.bathrooms_full = this.bathrooms_full),
          (inputdata.squfeet = this.squfeet);
        this.$store.commit("sethomedata", inputdata);
        this.tab_visible = "menu_three";
        document.body.scrollTop = 0;
      }
    },
    twocheckform() {
      this.msgtwo = {};
   
      if (!this.parking_desc) {
        this.msgtwo.parking_desc = "parking_desc is required";
      }
      if (!this.basement_desc) {
        this.msgtwo.basement_desc = "basement_desc is required";
      }
      if (!this.prioritysale) {
        this.msgtwo.prioritysale = "prioritysale is required";
      }
      if (!this.CurrentOccupancy) {
        this.msgtwo.CurrentOccupancy = "CurrentOccupancy is required";
      }
      if (
        this.parking_desc &&
        this.basement_desc &&
        this.prioritysale &&
        this.CurrentOccupancy 
      ) {
        return true;
      }
    },
    Editaddress() {
      this.$router.push({ name: "EditAddress" });
    },
    ConfirmAddress() {
      if (!this.checkstatus) {
        this.$router.push({ name: "NotAvailable" });
      }
      if (this.checkstatus) {
        this.tab_visible = "menu_two";
      }
    },
    twoFunc() {
      if (this.twocheckform() && Object.keys(this.msgtwo).length == 0) {
        let secondinputdata = {};
        secondinputdata.home_condition = this.home_condition;
        secondinputdata.parking_desc = this.parking_desc;
        secondinputdata.basement_desc = this.basement_desc;
        secondinputdata.prioritysale = this.prioritysale;
        secondinputdata.CurrentOccupancy = this.CurrentOccupancy;
        this.$store.commit("sethomedatasecond", secondinputdata);
        this.$store.commit("Setuploadfile",this.imagesArray)
        this.$emit("gotoContactPage");
        document.body.scrollTop = 0;
      }
    },
  },
};
</script>

<style scoped>
.chevron-left{
  width: 45px;
  height: 45px;
  transform: rotate(180deg);
}
.arrow-icon{
  width: 24px;
  height: 24px;
}
.imagesinfo {
  display: flex;
  justify-content: center;
}
.imagesinfo img{
  width: 18px;
  height: 18px;
}
.home-info-form2 p:first-child {
  font-size: 46px;
}
.home-info-form2 p:nth-child(2) {
  font-size: 18px;
  color: #434242;
}
.home-info-form2 button {
  background: #ffb600;
  color: #fff;
  border-radius: 4px;
  font-size: 1.2em;
  translate: 0.3s ease-in-out;
}
.home-info-form2 button:hover {
  background: #ffb700d2;
}
.home-info-form2 .item5 {
  text-decoration: none;
  color: #00a19b;
  font-size: 1.2em;
  font-weight: 600;
}
.home-info-form2 .item5:hover {
  text-decoration: underline;
}
.home-info-form2 .item11 {
  background: #edf3f2;
  border-radius: 6px;
}
.home-info-form2 .item11 .item11a {
  font-size: 20px;
}
input:focus {
  outline: none;
  border: 0;
}
.minus-btn,
.plus-btn,
.minus-btn:disabled,
.plus-btn:disabled
 {
  width: 40px;
  height: 40px;
  /* font-size: 1em; */
  background: #fff !important;
  /* border: 1px solid #7070707b; */
  color: #707070 !important;
  border: 1px solid rgb(194, 200, 200);
  border-radius: 50%;
  margin-bottom: 4px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: .3s ease-in-out;
}
.btn.disabled, .btn:disabled{
  opacity: 1;
}
/* .minus-btn {
  padding-bottom: 8px;
} */
.minus-btn:hover,
.plus-btn:hover {
    border: 1px solid rgb(255, 182, 0);
    color: rgb(255, 182, 0) !important;

}
.minus-btn span {
  font-size: 1.8em;
  /* margin-bottom: 4px; */
}
.plus-btn span {
  font-size: 1.4em;
  /* margin-bottom: 4px; */
}
input[type="number"] {
  border: 1px solid #7070707b !important;
  text-align: center;
}
input[type="number"]:focus {
  border: 1px solid rgb(255, 182, 0);
  box-shadow: inset 0 1px 1px rgba(255, 182, 0, 0.9), 0 0 4px #ffb600;
}
.no-arrow {
  -moz-appearance: textfield;
}
.no-arrow::-webkit-inner-spin-button {
  display: none;
}
.no-arrow::-webkit-outer-spin-button,
.no-arrow::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.home-info-form2 form .btn-continue {
  line-height: 1.7;
  transition:.3s ease-in-out;
}
.home-info-form2 form .btn-continue:hover{
   background:  #ffb700d2;
}
.home-info-form2 form .btn-continue p:first-child {
  font-size: 24px;
}
.home-info-form2 form {
  font-size: 18px;
}
.selectspecbg select {
  font-size: 18px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #495057d1;
  background: url(../../../assets/image/icon/Arrowtop.svg) 96% / 5% no-repeat
    #fff;
  border: 0;
  outline: 1px solid #ccc;
  outline-offset: -1px;
}
.selectspecbg .form-control-lg{
      padding: 0.5rem 0rem;
}
.selectspecbg .v-select{
   color: #495057d1;
}

.selectspecchanged select {
  color: #000;
}
input[type="file"] {
  display: none;
}
.custom-file-upload {
  cursor: pointer;
  text-align: left;
  padding: 6px 16px;
  color: #7d7d7d;
  border-radius: 5px;
  width: 100%;
  background: #fff;
  font-size: 16px;
  line-height: 2;
  border: 1px solid #7070707b !important;
}
.d-sm-only {
  display: none;
}
.d-style {
  display: contents;
}
.input--error input[type="number"] ,
.input--error .v-select
{
  border: 1px solid #f79483 !important;
  box-shadow: rgb(247 148 131/24%) 0px 0px 0px 3px !important;
}
.required-err {
  color: rgb(220, 53, 69);
  font-size: 16px;
}
.input--error select {
  border: 1px solid #f79483 !important;
  box-shadow: rgb(247 148 131/24%) 0px 0px 0px 3px !important;
}
@media only screen and (max-width: 600px) {
  .home-info-form2 p:first-child {
    font-size: 26px;
  }
  .d-sm-only {
    display: block;
    border-bottom: 1px solid #707070;
  }
  .d-sm-only p {
    font-size: 18px !important;
    color: #ffb600;
  }
  .d-style {
    display: flex !important;
    width: 100%;
  }
  .d-style  div{
    display: flex;
    justify-content: center;
  }
}
</style>
