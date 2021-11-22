<template>
    <div class="home-info-form2">
        <div class="px-2 px-md-5 w-100 mx-0">
            <div v-if="tab_visible == 'menu_one' ">
            <p class="text-center text-color-1 DMSerifRegular font-weight-bold">Is this the right address?</p>
            <p class="text-center Roboto-Regular">{{homeaddres}}</p>
            <div class="row">
                <div class="col-10 col-md-10 mx-auto">
                    <div class="text-center">
                            <button type="button"  @click="ConfirmAddress()" class="btn rounded Roboto-Medium py-2 px-4">Confirm Address</button><br>
                            <a class="btn item5 Roboto-Medium" @click="Editaddress()">Edit address</a>
                    </div>
                </div>
                <div class="col-12 mx-auto">
                    <address-map :lat=latlong.lat
                    :lon=latlong.lng
                    ></address-map>
                </div>
            </div>
            </div>
            <div class="d-flex" v-if="tab_visible == 'menu_two' ">
                <div class="col-1 mr-auto mr-md-0 ml-md-auto">
                      <p @click="tab_visible = 'menu_one' " class="h1" style="cursor:pointer"><b-icon icon="chevron-left"></b-icon></p>
                </div>
                <div class="col-11 col-md-7 mr-auto item11 text-center p-2 px-md-4">
                    <div class="item11a DMSerifRegular">
                        <p>Tell us about your home</p>
                    </div>
                    <form class="container Roboto-Regular">
                        <div class="form-group row col-12 col-md-10 mx-auto px-0" 
                        :class="{ 'input--error': msgone.hometype && !hometype}"
                         >
                            <label for="hometype" class="col-sm-4 col-form-label text-left">Home type </label>
                            <div class="col-sm-8 selectspecbg Roboto-Regular  text-left" :class=" {selectspecchanged : changedsubcategory}">
                            <select name="canadianprovince"   @change="changestylesub()" class="form-control form-control-lg Roboto-Regular" id="" v-model="hometype" required>
                                <option value="null" disabled  hidden selected>
                          Choose an option
                                </option>
                               <option v-for="hometype in hometypes" :key="hometype.id" :value="hometype.value">{{hometype.name}}</option>
                      </select>
                        <span style="color: #dc3545;font-size: 16px;" v-if="msgone.hometype && !hometype">{{
                                msgone.hometype
                            }}</span>
                            </div>
                        </div>
                        <div class="form-group row col-12 col-md-10 mx-auto px-0" 
                        :class="{ 'input--error': msgone.storeys && !storeys}"
                        >
                            <label for="hometype" class="col-sm-4 col-form-label text-left">Storeys</label>
                            <div class="col-sm-8 selectspecbg Roboto-Regular  text-left" :class=" {selectspecchanged : changedStorey}">
                                 <select name="canadianprovince "   @change="changestyleStorey()" class="form-control form-control-lg Roboto-Regular" id="" v-model="storeys" required>
                                <option value="null" disabled  hidden selected>
                          Choose an option
                                </option>
                               <option v-for="StoreyType in StoreysType" :key="StoreyType.id" :value="StoreyType.value">{{StoreyType.name}}</option>
                      </select>
                      <span style="color: #dc3545;font-size: 16px;" v-if="msgone.storeys && !storeys">{{
                                msgone.storeys
                            }}</span>
                            </div>
                        </div>
                        <div class="form-group row col-12 col-md-10 mx-auto px-0" :class="{ 'input--error': msgone.bedboveg && bedboveg < 1}">
                            <label for="bedboveg" class="col-sm-5 col-form-label text-left" 
                            
                            >Bedrooms (above ground)</label>
                            <div class="d-style">
                                <div class="col-sm-2">
                                <button class="btn minus-btn rounded-circle"  :disabled="bedboveg < 2"  type="button" @click="bedboveg--">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>-</span>
                                </button>
                            </div>
                            <div class="col-sm-3">
                            <input type="number" min="0" max="5" id="bedboveg" v-model.number="bedboveg" 
                             
                            class="pl-0 pl-md-2 form-control border bg-white no-arrow Roboto-Regular text-center" required
                            >
                            <span class="reuired-err" v-if="msgone.bedboveg && bedboveg < 1">reuired</span>
                            </div>
                            <div class="col-sm-2">
                            <button class="btn plus-btn rounded-circle" type="button" @click="bedboveg++">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>+</span>
                                </button>
                            </div>
                            </div>
                            
                        </div>
                        <div class="form-group row col-12 col-md-10 mx-auto px-0"
                        :class="{ 'input--error': msgone.bedbelowg && bedbelowg < 1}"
                        >
                            <label for="hometype" class="col-sm-5 col-form-label text-left">Bedrooms (below ground)</label>
                              <div class="d-style">
                                  <div class="col-sm-2">
                                <button class="btn minus-btn rounded-circle"  :disabled="bedbelowg < 2" type="button" @click="bedbelowg--">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>-</span>
                                </button>
                            </div>
                            <div class="col-sm-3">
                            <input type="number" min="0" max="5" id="hometype" v-model.number="bedbelowg"
                             class="pl-2 form-control border bg-white no-arrow Roboto-Regular text-center">
                             <span class="reuired-err" v-if="msgone.bedbelowg && bedbelowg < 1">reuired</span>
                            </div>
                            <div class="col-sm-2">
                            <button class="btn plus-btn rounded-circle" type="button" @click="bedbelowg++">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>+</span>
                                </button>
                            </div>
                            </div>
                        </div>
                        <div class="form-group row col-12 col-md-10 mx-auto px-0"  
                        :class="{ 'input--error': msgone.fullbathroom && fullbathroom < 1}"
                        >
                            <label for="hometype" class="col-sm-5 col-form-label text-left">Full bathrooms</label>
                            <div class="d-style">
                                 <div class="col-sm-2">
                                <button class="btn minus-btn rounded-circle" :disabled="fullbathroom < 2"  type="button" @click="fullbathroom--">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>-</span>
                                </button>
                            </div>
                            <div class="col-sm-3">
                            <input type="number" min="0" max="5" id="hometype" v-model.number="fullbathroom"
                             class="pl-2 form-control border bg-white no-arrow Roboto-Regular text-center">
                               <span class="reuired-err" v-if="msgone.fullbathroom && fullbathroom < 1">reuired</span>
                            </div>
                            <div class="col-sm-2">
                            <button class="btn plus-btn rounded-circle" type="button" @click="fullbathroom++">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>+</span>
                                </button>
                            </div>
                            </div>
                        </div>
                        <div class="form-group row col-12 col-md-10 mx-auto px-0" 
                            :class="{ 'input--error': msgone.parbathroom && parbathroom < 1}"
                       >
                            <label for="Partial" class="col-sm-5 col-form-label text-left">Partial bathrooms</label>
                            <div class="d-style">
                                 <div class="col-sm-2">
                                <button class="btn minus-btn rounded-circle" :disabled="parbathroom < 2"   type="button" @click="parbathroom--">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>-</span>
                                </button>
                            </div>
                            <div class="col-sm-3">
                            <input type="number" min="0" max="5" id="Partial" v-model.number="parbathroom"
                             class="pl-2 form-control border bg-white no-arrow Roboto-Regular text-center">
                              <span class="reuired-err" v-if="msgone.parbathroom && parbathroom < 1">reuired</span>
                            </div>
                            <div class="col-sm-2">
                            <button class="btn plus-btn rounded-circle" type="button" @click="parbathroom++">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>+</span>
                                </button>
                            </div>
                            </div>
                        </div>
                        <div class="form-group row col-12 col-md-10 mx-auto px-0"  
                        :class="{ 'input--error': msgone.squfeet && squfeet < 1}"
                         >  
                            <label for="Square" class="col-sm-5 col-form-label text-left">Square feet (approx.)</label>
                            <div class="d-style">
                                  <div class="col-sm-2">
                              
                            </div>
                            <div class="col-sm-3">
                            <input type="number" min="0" max="5" id="Square" v-model.number="squfeet"
                             class="pl-2 form-control border bg-white no-arrow Roboto-Regular text-center">
                                <span class="reuired-err" v-if="msgone.squfeet && squfeet < 1">reuired</span>
                            </div>
                            <div class="col-sm-2">
                            
                            </div>
                            </div>
                        </div>
                        <div class="form-group row col-12 col-md-10 mx-auto px-0"  
                         :class="{ 'input--error': msgone.parkspaces && parkspaces < 1}"
                         >
                        <label for="Parking" class="col-sm-5 col-form-label text-left">Parking spaces</label>
                        <div class="d-style">
                            <div class="col-sm-2">
                                <button class="btn minus-btn rounded-circle" :disabled="parkspaces < 2"   type="button" @click="parkspaces--">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>-</span>
                                </button>
                            </div>
                            <div class="col-sm-3">
                            <input type="number" min="0" max="5" id="Parking" v-model.number="parkspaces" 
                              class="pl-2 form-control border bg-white no-arrow Roboto-Regular text-center">
                                <span class="reuired-err" v-if="msgone.parkspaces && parkspaces < 1">reuired</span>
                            </div>
                            <div class="col-sm-2">
                            <button class="btn plus-btn rounded-circle" type="button" @click="parkspaces++">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>+</span>
                                </button>
                            </div>
                        </div>
                            
                        </div>
                        <div class="form-group col-12 col-md-10 mx-auto px-0">
                            <button class="btn btn-continue w-100 px-4 d-flex justify-content-between align-items-baseline"
                            type="submit"
                            @click.prevent="oneFunc()"
                            >
                                <p class="mb-0">Continue</p>
                                <p  class="h1 text-white mb-0"><b-icon icon="arrow-right"></b-icon></p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

             <div class="d-flex" v-if="tab_visible == 'menu_three' ">
                <div class="col-1 mr-auto mr-md-0 ml-md-auto">
                      <p @click="tab_visible = 'menu_two' " class="h1" style="cursor:pointer"><b-icon icon="chevron-left"></b-icon></p>
                </div>
                <div class="col-11 col-md-7 mr-auto item11 text-center p-2 p-md-4">
                    <div class="item11a DMSerifRegular">
                        <p>Tell us about your home</p>
                    </div>
                    <form action="" class="container">
                         <div class="form-group row col-12 col-md-10 mx-auto px-0"   
                         :class="{ 'input--error': msgtwo.homecondition && !homecondition}"
                          >  
                            <label for="homecondition" class="col-sm-4 col-form-label text-left Roboto-Regular">Home Condition </label>
                           <div class="col-sm-8 selectspecbg Roboto-Regular text-left" :class=" {selectspecchanged : changedhomecondition}">
                            <select name="canadianprovince" id="homecondition "   @change="changehcond()" class="form-control form-control-lg Roboto-Regular text-left"  v-model="homecondition" required>
                                <option value="null" disabled hidden selected>
                          Choose an option
                                </option>
                               <option v-for="homecondition in homeconditions" :key="homecondition.id" :value="homecondition.value">{{homecondition.name}}</option>
                      </select>
                       <span style="color: #dc3545;font-size: 16px;" v-if="msgtwo.homecondition && !homecondition">{{
                                msgtwo.homecondition
                            }}</span>
                            </div>
                        </div> 
                        <div class="form-group row ol-12 col-md-10 mx-auto px-0"   
                        :class="{ 'input--error': msgtwo.dercrube && !dercrube}"
                         >
                            <label for="dercrubes" class="col-sm-4 col-form-label text-left">Describe Parking</label>
                             <div class="col-sm-8 selectspecbg Roboto-Regular text-left" :class=" {selectspecchanged : changeddercrube}">
                            <select name="canadianprovince" id="dercrubes"   @change="changedescibe()" class="form-control form-control-lg Roboto-Regular"  v-model="dercrube" required>
                                <option value="null" disabled hidden selected>
                          Choose an option
                                </option>
                               <option v-for="dercrube in dercrubes" :key="dercrube.id" :value="dercrube.value">{{dercrube.name}}</option>
                      </select>
                       <span style="color: #dc3545;font-size: 16px;" v-if="msgtwo.dercrube && !dercrube">{{
                                msgtwo.dercrube
                            }}</span>
                            </div>
                        </div>
                        <div class="form-group row ol-12 col-md-10 mx-auto px-0" 
                        :class="{ 'input--error': msgtwo.vehiclesnNo && vehiclesnNo < 1}"
                         >
                            <label for="vehicles" class="col-sm-5 col-form-label text-left">How many vehicles fit
in your garage?</label>
                            <div class="d-style">
                                <div class="col-sm-2">
                                <button class="btn minus-btn rounded-circle"  :disabled="vehiclesnNo < 2" type="button" @click="vehiclesnNo--">
                                <span>-</span>
                                </button>
                            </div>
                            <div class="col-sm-3">
                            <input type="number" min="0" max="5" id="vehicles" v-model.number="vehiclesnNo" class="pl-2 form-control border bg-white no-arrow">
                            <span style="color: #dc3545;font-size: 16px;" v-if="msgtwo.vehiclesnNo && !vehiclesnNo">
                                required
                            </span>
                            </div>
                            <div class="col-sm-2">
                            <button class="btn plus-btn rounded-circle" type="button" @click="vehiclesnNo++">
                                <span>+</span>
                                </button>
                            </div>
                            </div>
                            
                        </div>
                       <div class="form-group row ol-12 col-md-10 mx-auto px-0"  
                       :class="{ 'input--error': msgtwo.yourbasement && !yourbasement}"
                        >
                            <label for="hometype" class="col-sm-4 col-form-label text-left">Please describe your basement</label>
                             <div class="col-sm-8 selectspecbg Roboto-Regular text-left" :class=" {selectspecchanged : changedbasement}">
                            <select name="canadianprovince"   @change="changebasement()" class="form-control form-control-lg Roboto-Regular" id="" v-model="yourbasement" required>
                                <option value="null" disabled hidden selected>
                          Choose an option
                                </option>
                               <option v-for="basement in basements" :key="basement.id" :value="basement.value">{{basement.name}}</option>
                      </select>
                         <span style="color: #dc3545;font-size: 16px;" v-if="msgtwo.yourbasement && !yourbasement">{{
                                msgtwo.yourbasement
                            }}</span>
                            </div>
                        </div>
                       <div class="form-group row ol-12 col-md-10 mx-auto px-0" 
                        :class="{ 'input--error': msgtwo.prioritysale && !prioritysale}"
                         >
                            <label for="hometype" class="col-sm-4 col-form-label text-left">Top priority for this sale</label>
                             <div class="col-sm-8 selectspecbg Roboto-Regular text-left" :class=" {selectspecchanged : changedprioritysale}">
                            <select name="canadianprovince"   @change="changesale()" class="form-control form-control-lg Roboto-Regular" id="" v-model="prioritysale" required>
                                <option value="null" disabled hidden selected>
                          Choose an option
                                </option>
                               <option v-for="prioritysale in prioritysales" :key="prioritysale.id" :value="prioritysale.value">{{prioritysale.name}}</option>
                      </select>
                       <span style="color: #dc3545;font-size: 16px;" v-if="msgtwo.prioritysale && !prioritysale">{{
                                msgtwo.prioritysale
                            }}</span>
                            </div>
                        </div>
                       <div class="form-group row ol-12 col-md-10 mx-auto px-0" 
                        :class="{ 'input--error': msgtwo.CurrentOccupancy && !CurrentOccupancy}"
                         >
                            <label for="hometype" class="col-sm-4 col-form-label text-left">Current Occupancy</label>
                             <div class="col-sm-8 selectspecbg Roboto-Regular text-left" :class=" {selectspecchanged : changedCurrentOccupancy}">
                            <select name="canadianprovince"   @change="changeCurrentOccupancy()" class="form-control form-control-lg Roboto-Regular text-left" id="" v-model="CurrentOccupancy" required>
                                <option value="null" disabled hidden selected>
                          Choose an option
                                </option>
                               <option v-for="CurrentOccupancy in CurrentOccupancies " :key="CurrentOccupancy.id" :value="CurrentOccupancy.value">{{CurrentOccupancy.name}}</option>
                      </select>
                         <span style="color: #dc3545;font-size: 16px;" v-if="msgtwo.CurrentOccupancy && !CurrentOccupancy">{{
                                msgtwo.CurrentOccupancy
                            }}</span>
                            </div>
                        </div>
                       <div class="form-group row ol-12 col-md-10 mx-auto px-0">
                            <label for="hometype" class="col-sm-4 col-form-label text-left">Upload Images</label>
                            <div class="col-sm-8">
                                <label for="uploadimage" class="custom-file-upload Roboto-Regular"> 
                                    Browse Images
                                     
                                </label>
                                 <input type="file" id="uploadimage"  accept="image/*" class="form-control border bg-white">
                          
                            </div>
                        </div>
                         <div class="form-group ol-12 col-md-10 mx-auto px-0">
                            <button class="btn btn-continue w-100 px-4 d-flex justify-content-between align-items-baseline"
                            type="button" @click="twoFunc()"
                            >
                                <p class="mb-0">Continue</p>
                                <p  class="h1 text-white mb-0"><b-icon icon="arrow-right"></b-icon></p>
                            </button>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            obj1:{

            },
            hometypes:[
                {value:'Detached',name:'Detached'},
                {value:'Semi-Detached',name:'Semi-Detached'},
                {value:'Townhouse',name:'Townhouse'},
                {value:'Condo or apartment',name:'Condo or apartment'},
                {value:'Other',name:'Other'},
            ],
            StoreysType:[
                {value:'1 (Bungalow)',name:'1 (Bungalow)'},
                {value:'2-Storey',name:'2-Storey'},
                {value:'2 1/2 Storey',name:'2 1/2 Storey'},
                {value:'3-Storey',name:'3-Storey'},
                {value:'3 Storey or more',name:'3 Storey or more'},
                {value:'Multi/Split',name:'Multi/Split'}
            ],
            homeconditions:[
                {value:'Look s New',name:'Look s New'},
                {value:'About Average',name:'About Average'},
                {value:'Mostly Original',name:'Mostly Original'},
                {value:'Needs Work',name:'Needs Work'},
            ],
            dercrubes:[
                {value:'Attached Garage',name:'Attached Garage'},
                {value:'Detached Garage',name:'Detached Garage'},
                {value:'1 of each',name:'1 of each'},
                {value:'No Garage',name:'No Garage'},
                {value:'Other',name:'Other'},
            ],
            basements:[
                {value:'Fully Finished',name:'Fully Finished'},
                {value:'Partially Finished',name:'Partially Finished'},
                {value:'Unfinished',name:'Unfinished'},
                {value:'Separate Suite',name:'Separate Suite'},
                {value:'No Basement',name:'No Basement'}
            ],
            prioritysales:[
                {value:'We want the highest price with the right improvements',name:'We want the highest price with the right improvements'},
                {value:'Sell by a specific date',name:'Sell by a specific date'},
                {value:'Secure a sale to purchase another home',name:'Secure a sale to purchase another home'},
                {value:`Been for sale before and we don't want that again`,name:`Been for sale before and we don't want that again`}
            ],
            CurrentOccupancies:[
                {value:'Vacant',name:'Vacant'},
                {value:'We Live There',name:'We Live There'},
                {value:'Rented',name:'Rented'}
            ],
            testnum:0,
            tab_visible :'menu_one',
            checkstatus:true,
            changedsubcategory:false,
            changedStorey:false,
            hometype:null,
            dercrube:null,
            storeys:null,
            vehiclesnNo:null,
            bedboveg:null, //Bedrooms (above ground)
            bedbelowg:null ,//Bedrooms (below ground)
            fullbathroom:null, //Full bathrooms
            parbathroom:null, //Partial bathrooms
            squfeet:null,//Square feet (approx.)
            parkspaces:null,//Parking spaces
            changedhomecondition:false,
            changeddercrube:false,
            changedbasement:false,
            changedprioritysale:false,
            changedCurrentOccupancy:false,
            yourbasement:null,
            prioritysale:null,
            CurrentOccupancy:null,
            homecondition:null,
            msgone:{},
            msgtwo:{}


            

        }
    },
    computed:{
        homeaddres(){
            return this.$store.state.homeaddress || ''
        },
        latlong(){
            return this.$store.state.latlong || {}
        }
    },
    
    methods:{
         changestylesub(){
            this.changedsubcategory = true
        },
        changeoption(tab){
            console.log(tab)
           return tab = true
        },
        changehcond(){
            this.changedhomecondition = true
        },
        changedescibe(){
            this.changeddercrube = true
        },
        changebasement(){
            this.changedbasement =true
        },
        changesale(){
            this.changedprioritysale = true
        },
        changeCurrentOccupancy(){
            this.changedCurrentOccupancy = true
        },
        changestyleStorey(){
            this.changedStorey = true
        },
        test(){
            this.$emit('submitparent',this.obj1)
        },
        onecheckform(){
            this.msgone = {}
            if(!this.hometype){
                this.msgone.hometype = 'Home type is required'
            }
            if(!this.storeys){
                this.msgone.storeys = 'Storeys is required'
            }
            if(!this.bedboveg || this.bedboveg < 1){
                this.msgone.bedboveg = 'required'
            }
            if(!this.bedbelowg || this.bedbelowg < 1){
                this.msgone.bedbelowg = 'required'
            }
            if(!this.fullbathroom || this.fullbathroom < 1){
                this.msgone.fullbathroom = 'required'
            }
            if(!this.parbathroom || this.parbathroom < 1){
                this.msgone.parbathroom = 'required'
            }
            if(!this.fullbathroom || this.parkspaces < 1){
                this.msgone.parkspaces = 'require'
            }
            if(!this.squfeet || this.squfeet < 1){
                this.msgone.squfeet = 'required'
            }
            if(this.hometype && this.storeys && 
            this.bedboveg > 0 &&
            this.bedbelowg > 0 &&
            this.parbathroom > 0 &&
               this.fullbathroom > 0 &&
               this.squfeet > 0
            ){
                return true
            }
        },
        oneFunc(){
            if(this.onecheckform() &&  Object.keys(this.msgone).length == 0){
                let inputdata ={};
                inputdata.hometype = this.hometype,
                inputdata.storeys = this.storeys,
                inputdata.bedboveg = this.bedboveg,
                inputdata.bedbelowg = this.bedbelowg, 
                inputdata.parbathroom = this.parbathroom,
                inputdata.fullbathroom = this.fullbathroom,
                inputdata.squfeet = this.squfeet
                this.$store.commit('sethomedata',inputdata)
                this.tab_visible  = 'menu_three'
            }
            
        },
        twocheckform(){
            this.msgtwo = {}
            if(!this.homecondition){
                this.msgtwo.homecondition  = 'Home Condition is required'
            }
            if(!this.dercrube){
                this.msgtwo.dercrube = 'dercrube is required'
            }
            if(!this.yourbasement){
                this.msgtwo.yourbasement = 'yourbasement is required'
            }
            if(!this.prioritysale){
                this.msgtwo.prioritysale = 'prioritysale is required'
            }
            if(!this.CurrentOccupancy){
                this.msgtwo.CurrentOccupancy = 'CurrentOccupancy is required'
            }
            if(!this.vehiclesnNo || this.vehiclesnNo < 1){
                this.msgtwo.vehiclesnNo = 'required'
            }
            if(
                this.homecondition &&
                this.dercrube &&
                this.yourbasement && 
                this.prioritysale &&
                this.CurrentOccupancy &&
                this.vehiclesnNo > 0
            ){
                return true
            }
        },
        Editaddress(){
            this.$router.push({name:'EditAddress'})
        },
        ConfirmAddress(){
            if(!this.checkstatus){
                this.$router.push({name:'NotAvailable'})
            }
            if(this.checkstatus){
                this.tab_visible  = 'menu_two'
            }
        },
        twoFunc(){
            if(this.twocheckform() && Object.keys(this.msgtwo).length == 0){
                let secondinputdata = {}
                secondinputdata.homecondition = this.homecondition
                secondinputdata.dercrube = this.dercrube
                secondinputdata.yourbasement = this.yourbasement
                secondinputdata.prioritysale = this.prioritysale
                secondinputdata.CurrentOccupancy = this.CurrentOccupancy
                secondinputdata.vehiclesnNo = this.vehiclesnNo
                this.$store.commit('sethomedatasecond',secondinputdata)
                this.$emit('gotoContactPage')
            }
            
        }
    }
}
</script>
<style scoped>
    .home-info-form2 p:first-child{
        font-size: 46px;
    }
    .home-info-form2 p:nth-child(2){
        font-size: 18px;
        color: #434242;
    }
    .home-info-form2  button{
        background: #FFB600;
        color: #fff;
        border-radius: 4px;
        font-size: 1.2em;
    }
    .home-info-form2 .item5{
        text-decoration: none;
        color: #00A19B;
        font-size: 1.2em;
    }
    .home-info-form2 .item11{
        background: #EDF3F2;
        border-radius: 6px;
    }
    .home-info-form2 .item11 .item11a{
        font-size: 20px;
    }
    input:focus{
        outline: none;
        border: 0;
    }
    .minus-btn,.plus-btn{
        width: 40px;
        height: 40px;
        display: flex;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1em;
        background: #fff !important;
        border: 1px solid #7070707b;
        color: #707070 !important;
    }
    .minus-btn span
    {
    font-size: 1.8em;
    margin-bottom: 4px;
    }
    .plus-btn span{
        font-size: 1.4em;
        margin-bottom: 4px;
    }
    input[type="number"]{
        border: 1px solid #7070707b !important;
        text-align: center;
    }
     input[type="number"]:focus{
         border: 1px solid rgb(255, 182, 0);
        box-shadow: inset 0 1px 1px rgba(255, 182, 0, 0.9), 0 0 4px #FFB600;;
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
    .home-info-form2 form .btn-continue{
        line-height: 1.7;
    }
    .home-info-form2 form .btn-continue p:first-child{
        font-size: 24px
    }
    .home-info-form2 form{
        font-size: 18px;   
    }
    .selectspecbg select {
  font-size: 18px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color:#495057d1;
  background: url(../../../assets/image/icon/Arrowtop.svg) 96% / 10% no-repeat #fff;
      border: 0;
      outline: 1px solid #ccc;
      outline-offset: -1px;

}
.selectspecchanged select{
    color:#000;
}
input[type="file"] {
    display: none;
}
.custom-file-upload{
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
.d-sm-only{
    display: none;
}
.d-style{
    display: contents;
}
.input--error input[type="number"]{
    border: 1px solid #F79483 !important;
    box-shadow:rgb(247 148  131/24%)0px 0px 0px 3px !important;
}
.reuired-err{
        color: rgb(220, 53, 69);
    font-size: 16px;
}
.input--error select{
     border: 1px solid #F79483 !important;
    box-shadow:rgb(247 148  131/24%)0px 0px 0px 3px !important;
}
@media only screen and (max-width: 600px){
    .home-info-form2 p:first-child{
        font-size: 26px;
    }
    .d-sm-only{
        display: block;
        border-bottom:1px solid #707070 ;
        
    }
    .d-sm-only p{
        font-size: 18px !important;
        color: #FFB600;;
    }
    .d-style{
    display: flex !important;
}
}


</style>