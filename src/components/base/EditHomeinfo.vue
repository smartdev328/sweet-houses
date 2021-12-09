<template>
    <div>
        <div class="container my-5">
            <div class="item1">
                <p class="text-color-1 Roboto-Medium">550 Fir Ct. Milton, ON L9T 7E7</p>
                <div class="item1a d-flex justify-content-between pb-3">
                    <div>
                        <p class="mb-3 mb-md-0 DMSerifRegular text-color-1">Edit Home Info</p>
                    </div>
                    <div>
                        <button class="btn Roboto-Regular">Cancel</button>
                        <button class="btn Roboto-Regular text-white px-3 px-md-5">Save</button>
                    </div>
                </div>
                <div class="item1b my-2 px-4">
                    <img src="../../assets/image/icon/warningcolor.svg" alt="">
                    <span class="ml-2">Changes will not be reflected publicly. Only you will be able to see these changes. </span>
                </div>
            </div>
            <div class="item2 my-3 pb-3">
                <div class="row">
                    <div class="col-12 col-md-4 item2a">
                        <p class="Roboto-Medium">Home type </p>
                    </div>
                    <div class="col-12 col-md-8 item2b">
                        <div>
                            <p class="text-color-2 Roboto-Regular">Which type best describes your home? </p>
                            <div class="types">
                                <a class="btn Roboto-Regular" :class="{hometypeselected:hometype == 'Detached'}" @click="selectHometype('Detached')"> Detached  </a>
                                <a class="btn Roboto-Regular" :class="{hometypeselected:hometype == 'Semi-detachd'}" @click="selectHometype('Semi-detachd')"> Semi-detachd  </a>
                                <a class="btn Roboto-Regular" :class="{hometypeselected:hometype == 'Townhouse'}" @click="selectHometype('Townhouse')">Townhouse  </a>
                                <a class="btn Roboto-Regular" :class="{hometypeselected:hometype == 'Condo or apartment'}" @click="selectHometype('Condo or apartment')" > Condo or apartment  </a>
                                <a class="btn Roboto-Regular" :class="{hometypeselected:hometype == 'Other'}" @click="selectHometype('Other')"> Other </a>
                            </div>
                        </div>
                        <div class="my-3">
                            <p class="Roboto-Regular">Storeys (excluding basement) </p>
                            <div class="col-sm-8  px-0 Roboto-Regular  text-left">
                                  <v-select 
                            class="form-control form-control-lg Roboto-Regular"
                            v-model="storeys"
                            :options="StoreysType" 
                            label="name"
                            placeholder="Choose an option"
                            :searchable=false
                            :clearable=false
                            ></v-select>
                            </div>
                          
                        </div>

                    </div>
                </div>
            </div>
            <div class="item3 my-3 text-right">
                <div>
                   <button class="btn Roboto-Regular">Cancel</button>
                    <button class="btn Roboto-Regular text-white  px-3 px-md-5">Save</button>
                </div>
            </div>
            <div class="item4 text-right">
                <div class="col-sm-8 ml-auto">
                    <div class="item4a d-flex">
                        <div class="element1 text-left">
                              <p class="Roboto-Regular">Full bathrooms</p>
                              <div class="d-flex mb-3">
                                  <button  class="btn plus-btn rounded-circle"
                                   @click="bathrooms_full-- "
                                   :disabled="bathrooms_full < 1"
                                  type="button">
                                      <img src="../../assets/image/icon/minus.svg" alt="">
                                  </button>
                                  <input type="number" v-model.number="bathrooms_full"
                                  class="pl-0 pl-md-2 w-25 mx-2 form-control form-control-lg border bg-white no-arrow Roboto-Regular text-center">
                                   <button  class="btn plus-btn rounded-circle"
                                   @click="bathrooms_full++"
                                  type="button">
                                      <img src="../../assets/image/icon/plus.svg" alt="">
                                  </button>
                              </div>
                              <span class="text-color-2 Roboto-Regular">Includes a shower or tub</span>
                        </div>
                            <div class="element1 text-left">
                              <p class="Roboto-Regular">Partial bathrooms</p>
                              <div class="d-flex mb-3">
                                  <button  class="btn plus-btn rounded-circle"
                                   @click="bathrooms_partial-- "
                                   :disabled="bathrooms_partial < 1"
                                  type="button">
                                      <img src="../../assets/image/icon/minus.svg" alt="">
                                  </button>
                                  <input type="number" v-model.number="bathrooms_partial"
                                  class="pl-0 pl-md-2 w-25 mx-2 form-control form-control-lg border bg-white no-arrow Roboto-Regular text-center">
                                   <button  class="btn plus-btn rounded-circle"
                                   @click="bathrooms_partial++"
                                  type="button">
                                      <img src="../../assets/image/icon/plus.svg" alt="">
                                  </button>
                              </div>
                              <span class="text-color-2 Roboto-Regular">Includes a shower or tub</span>
                        </div>
                    </div>
                    <br>
                    <div class="item4a d-flex">
                        <div class="element1 text-left">
                              <p class="Roboto-Regular">Internal area</p>
                            <div class="form-group">
                                 <input type="number" class="pl-0 pl-md-2 w-75 form-control form-control-lg border bg-white no-arrow Roboto-Regular">
                            </div>
                              <span class="text-color-2 Roboto-Regular">Public records say this home is 1500-2000 sqft</span><br>
                              <span class="text-color-2 Roboto-Regular">Typical 3-bedroom Toronto detached homes are 1,700-2,200 sqft</span>
                        </div>
                    </div>
                    <br>
                    <div class="item4a d-flex">
                        <div class="element1 text-left">
                              <p class="Roboto-Regular">Year built</p>
                            <div class="form-group">
                                 <input type="number" class="pl-0 pl-md-2 w-75 form-control form-control-lg border bg-white no-arrow Roboto-Regular">
                            </div>
                              <span class="text-color-2 Roboto-Regular">It's okay to guess if you're unsure</span>
                        </div>
                    </div>
                    <br>
                     <div class="item4a d-flex">
                        <div class="element1 text-left">
                              <p class="Roboto-Regular">What best describes the finish of your basement ?</p>
                            <div class="form-group">
                                 <input type="number" class="pl-0 pl-md-2 w-75 form-control form-control-lg border bg-white no-arrow Roboto-Regular">
                            </div>
                              <span class="text-color-2 Roboto-Regular">It's okay to guess if you're unsure</span>
                        </div>
                    </div>
                    <br>
                    <div class="item5">
                        <div class="element1 text-left">
                            <p class=" Roboto-Regular">What best describes the finish of your basement ?</p>
                             <div class="types">
                                <a class="btn Roboto-Regular mr-2" :class="{hometypeselected:hometype == 'Detached'}" @click="selectHometype('Detached')"> Detached  </a>
                                <a class="btn Roboto-Regular mr-2" :class="{hometypeselected:hometype == 'Semi-detachd'}" @click="selectHometype('Semi-detachd')"> Semi-detachd  </a>
                                <a class="btn Roboto-Regular mr-2" :class="{hometypeselected:hometype == 'Townhouse'}" @click="selectHometype('Townhouse')">Townhouse  </a>
                                <a class="btn Roboto-Regular mr-2" :class="{hometypeselected:hometype == 'Condo or apartment'}" @click="selectHometype('Condo or apartment')" > Condo or apartment  </a>
                                <a class="btn Roboto-Regular mr-2" :class="{hometypeselected:hometype == 'Other'}" @click="selectHometype('Other')"> Other </a>
                            </div>
                        </div>
                    </div>
                    <br>
                      <div class="item5">
                        <div class="element1 text-left">
                            <p class=" Roboto-Regular">Does your basement have an entrance from the outside, like a walk-out or walk-up?</p>
                             <div class="types">
                                <a class="btn Roboto-Regular mr-2" :class="{hometypeselected:hometype == 'Detached'}" @click="selectHometype('Detached')">Yes </a>
                                <a class="btn Roboto-Regular mr-2" :class="{hometypeselected:hometype == 'Semi-detachd'}" @click="selectHometype('Semi-detachd')"> No</a>
                            </div>
                        </div>
                    </div><br>
                     <div class="item5">
                        <div class="element1 text-left">
                            <p class=" Roboto-Regular">Have you done any major renovations in the last 2 years?</p>
                             <div class="types">
                                <a class="btn Roboto-Regular mr-2" :class="{hometypeselected:hometype == 'Detached'}" @click="selectHometype('Detached')">Yes </a>
                                <a class="btn Roboto-Regular mr-2" :class="{hometypeselected:hometype == 'Semi-detachd'}" @click="selectHometype('Semi-detachd')"> No</a>
                            </div>
                            <span class="text-color-2 Roboto-Regular">E.g. Kitchen remodel or home addition</span>
                        </div>
                    </div><br>
                    <div class="item5">
                    <div class=" text-left element1">
                            <p class="Roboto-Regular">What kind of heating does your home have?</p>
                            <div class="col-sm-6  px-0 Roboto-Regular  text-left">
                            <v-select 
                            class="form-control form-control-lg Roboto-Regular"
                            v-model="storeys"
                            :options="StoreysType" 
                            label="name"
                            placeholder="Choose an option"
                            :searchable=false
                            :clearable=false
                            ></v-select>
                            </div>
                          
                        </div>
                    </div>
                       
                </div>
            </div>
             <div class="item6 my-5 pb-3">
                <div class="row">
                    <div class="col-12 col-md-4 item6a text-left">
                        <p class="Roboto-Medium">Additional exterior details </p>
                    </div>
                    <div class="col-12 col-md-8 item6b">
                        <div>
                            <p class="Roboto-Regular">Type of parking</p>
                           <div class="col-sm-6  px-0 Roboto-Regular  text-left">
                            <v-select 
                            class="form-control form-control-lg Roboto-Regular"
                            v-model="storeys"
                            :options="StoreysType" 
                            label="name"
                            placeholder="Choose an option"
                            :searchable=false
                            :clearable=false
                            ></v-select>
                            </div>
                        </div>
                       
                        <div class="element my-5 d-flex">
                               <div class="element1 text-left">
                              <p class="Roboto-Regular">Covered parking spaces</p>
                              <div class="d-flex mb-3">
                                  <button  class="btn plus-btn rounded-circle"
                                   @click="bathrooms_full-- "
                                   :disabled="bathrooms_full < 1"
                                  type="button">
                                      <img src="../../assets/image/icon/minus.svg" alt="">
                                  </button>
                                  <input type="number" v-model.number="bathrooms_full"
                                  class="pl-0 pl-md-2 w-25 mx-2 form-control form-control-lg border bg-white no-arrow Roboto-Regular text-center">
                                   <button  class="btn plus-btn rounded-circle"
                                   @click="bathrooms_full++"
                                  type="button">
                                      <img src="../../assets/image/icon/plus.svg" alt="">
                                  </button>
                              </div>
                              <span class="text-color-2 Roboto-Regular">E.g. garage, underground, car port</span>
                        </div>
                             <div class="element1 text-left">
                              <p class="Roboto-Regular">Open parking spaces</p>
                              <div class="d-flex mb-3">
                                  <button  class="btn plus-btn rounded-circle"
                                   @click="bathrooms_full-- "
                                   :disabled="bathrooms_full < 1"
                                  type="button">
                                      <img src="../../assets/image/icon/minus.svg" alt="">
                                  </button>
                                  <input type="number" v-model.number="bathrooms_full"
                                  class="pl-0 pl-md-2 w-25 mx-2 form-control form-control-lg border bg-white no-arrow Roboto-Regular text-center">
                                   <button  class="btn plus-btn rounded-circle"
                                   @click="bathrooms_full++"
                                  type="button">
                                      <img src="../../assets/image/icon/plus.svg" alt="">
                                  </button>
                              </div>
                              <span class="text-color-2 Roboto-Regular">E.g. driveway, parking pad</span>
                        </div>
                        </div>
                           <div>
                            <p class="Roboto-Regular">What best describes the exterior material of your house?</p>
                           <div class="col-sm-6  px-0 Roboto-Regular  text-left">
                            <v-select 
                            class="form-control form-control-lg Roboto-Regular"
                            v-model="storeys"
                            :options="StoreysType" 
                            label="name"
                            placeholder="Choose an option"
                            :searchable=false
                            :clearable=false
                            ></v-select>
                            </div>
                        </div>
                           <div class="my-4">
                            <p class="Roboto-Regular">What direction does your front door face?</p>
                           <div class="col-sm-6  px-0 Roboto-Regular  text-left">
                            <v-select 
                            class="form-control form-control-lg Roboto-Regular"
                            v-model="storeys"
                            :options="StoreysType" 
                            label="name"
                            placeholder="Choose an option"
                            :searchable=false
                            :clearable=false
                            ></v-select>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                 <div class="row my-5">
                    <div class="col-12 col-md-4 item6a text-left">
                        <p class="Roboto-Medium">Taxes </p>
                    </div>
                    <div class="col-12 col-md-8 item6b">
                           <div>
                            <p class="Roboto-Regular">Property taxes </p>
                           <div class="col-sm-6  px-0 Roboto-Regular  text-left">
                            <v-select 
                            class="form-control form-control-lg Roboto-Regular"
                            v-model="storeys"
                            :options="StoreysType" 
                            label="name"
                            placeholder="Choose an option"
                            :searchable=false
                            :clearable=false
                            ></v-select>
                            </div>
                            <br>
                            <span class="Roboto-Regular text-color-2">Typical townhomes taxes are $3,500 per year, typical detached homes taxes are $6,800 per year</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            hometype:'Detached',
            storeys:'2-Storey',
             StoreysType: [
        "1 (Bungalow)",
         "2-Storey",
      "1 1/2 Storey",
       "2 1/2 Storey",
      "3-Storey", 
         "3 Storey or more",
      "Multi/Split"
      ],
      bathrooms_full:2,
      bathrooms_partial:2
        }
    },
    methods:{
        selectHometype(item){
            this.hometype = item
        }
    }
}
</script>
<style scoped>
.item1a{
    border-bottom:0.5px solid #70707073;
    flex-direction: row
}
.item2{
      border-bottom:0.5px solid #70707073;
}
.item1 p:first-child{
    font-size: 22px;
}
.item1 .item1a p{
font-size: 30px;
font-weight: 600;
}
.item1 .item1a button{
    font-size: 20px;
}

.item1 .item1a button:first-child{
    color: #434242;
}
.item1 .item1a button:nth-child(2){
    background: #FFB600;
}
.item1 .item1b {
    background: #FFF9EE;
    color: #434242;
    font-size: 20px;
    line-height: 3.8;
}
.item1 .item1b img{
    width: 22px;
    height: 22px;
}
.item2 .item2a p{
    color: #434242;
    font-size: 24px;
}
.item6 .item6a p{
    color: #434242;
    font-size: 24px;
}
.item2 .types a{
    font-size: 20px;
    color: #434242;
    display: inline-block;
    border: 1px solid currentColor;
    margin: 0 3px 5px 0;
    padding: 8px 20px;
    border-radius: 8px;
    text-decoration: none;
    border: 1px solid #707070;
}
.itme6 .types a{
     font-size: 20px;
    color: #434242;
    display: inline-block;
    border: 1px solid currentColor;
    margin: 0 3px 5px 0;
    padding: 8px 20px;
    border-radius: 8px;
    text-decoration: none;
    border: 1px solid #707070;
}
.item5 .element1  .types a{
    font-size: 20px;
    color: #434242;
    display: inline-block;
    border: 1px solid currentColor;
    margin: 0 3px 5px 0;
    padding: 8px 20px;
    border-radius: 8px;
    text-decoration: none;
    border: 1px solid #707070;
}
.item2 .item2b p{
    font-size: 18px;
}
.item6 .item6b p{
    font-size: 18px;
    color: #434242;
}
.item2 .item2b p:nth-child(2){
    color: #434242;
}
.item2 .types .hometypeselected{
    color: #FFB600;
    border: 1px solid #FFB600;
}
.item5 .element1 .types a:hover{
    background: #FFB600;
    color: #fff;
}
.item2 .types a:hover{
    background: #FFB600;
    color: #fff;
}
.item5 .element1 .types a:hover{
    background: #FFB600;
    color: #fff;
}
.item3 button{
    font-size: 20px;
}
.item3 button:first-child{
    color: #434242;
}
.item3 button:nth-child(2){
    background: #FFB600;
}
.minus-btn,
.plus-btn
 {
display: flex;
align-items: center;
justify-content: center;
width: 44px;
height: 44px;
border: 1px solid rgb(194, 200, 200);
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
.item4 .item4a .element1 p:first-child{
    font-size: 18px;
    color: #434242;
}
.item4 .item4a .element1 span{
    font-size: 14px;
}
 input:focus, textarea:focus, select:focus{
        outline: none;
      
         -webkit-box-shadow: none;
        box-shadow: none;
        border: 1px solid #FFB600 !important;
}
.item5 .element1 p:first-child{
    font-size: 18px;
    color: #434242;
}
.item6 .item6b .element .element1 p{
    font-size: 18px;
    color: #434242;
}
.item6 .item6b .element {
    flex-direction: row;
}
@media only screen and (max-width: 600px){
    .item1 p:first-child{
        font-size: 18px;
    }
    .item1a{
        flex-direction: column;
    }
    .item1 .item1b{
        font-size: 14px;
        line-height: 1.8;
    }
    .item2 .types a,
    .item5 .element1 .types a,
    .item5 .element1 .types a{
        font-size: 14px;
        padding: 5px 12px;
    }
    .item1 .item1a button{
        font-size: 16px;
    }
    .item3 button{
         font-size: 16px;
    }
    .item6 .item6b .element {
    flex-direction: column;
}
    
}
</style>