<template>
    <div class="contact-details-form">


        <div v-if="tab_visible == 'menu_one' "> 
               <div class="row">
                
            <div class="col-12 col-md-6 mx-auto d-flex">
                <div class="col-1 col-md-1 mr-sm-auto ml-md-auto">
                      <p class="h1" @click="openhomeinfopage" style="cursor:pointer"><b-icon icon="chevron-left"></b-icon></p>
                </div>
                    <div class="item1z p-1 p-md-4">
                        <div class="item1az text-center">
                            <p class="text-color-1 DMSerifRegular">How did you hear about us?</p>
                        </div>
                        <div class="item1bz row">
                            <div class="col-8 col-md-6 mx-auto" v-for="channel in socialchanels" :key="channel.id">
                                <div class="shadow-sm bg-white px-4 text-center element1z Roboto-Regular" @click="changechannel(channel.name)"><p>{{channel.name}}</p></div>
                            </div>
                        </div>
                        
                    </div>

            </div>

        </div>
        </div>
        <div v-if="tab_visible == 'menu_two' " class="row container w-100 mx-0">
                <div class="col-1 col-md-1 mr-sm-auto ml-md-auto">
                      <p class="h1" @click="tab_visible = 'menu_one' " style="cursor:pointer"><b-icon icon="chevron-left"></b-icon></p>
                </div>
                <div class="col-12 col-md-5 mx-auto item11 text-center px-3 py-4">
                    <div class="item11a text-center">
                        <p class="text-color-1 DMSerifRegular">How can we get in touch?</p>
                        <p class="Roboto-Regular text-color-3 my-2">We need more details about your home's unique
features to prepare your personalized valuation.</p>
                    </div>
                    <form action="" class="container">
                        <div class="form-group mx-auto my-3 text-left" 
                        :class="{ 'input--error': msg.fullname && !fullname}"
                         >
                            <div class="">
                            <input type="text" id="hometype" placeholder="Full name" 
                            v-model="fullname"
                             class="form-control form-control-lg border bg-white shadow-sm">
                            </div>
                            <span style="color: #dc3545;font-size: 16px;" v-if="msg.fullname && !fullname">{{
                                msg.fullname
                            }}</span>
                        </div>
                         <div class="form-group mx-auto my-3 text-left" 
                         :class="{ 'input--error': msg.email && !email}"
                          >
                            <div class="">
                            <input type="text" id="hometype" placeholder="Email" 
                            v-model="email"
                             class="form-control form-control-lg border bg-white shadow-sm">
    
                            </div>
                            <span style="color: #dc3545;font-size: 16px;" v-if="msg.email && !email">{{
                                msg.email
                            }}</span>
                        </div>
                            <div class="form-group mx-auto my-3 text-left">
                            <div class="">
                            <vue-phone-number-input v-model="phone"
                             @update="resultsExample = $event"
                             />
                            </div>
                            <span style="color: #dc3545;font-size: 16px;" v-if="msg.phone && !phone">{{
                                msg.phone
                            }}</span>
                        </div>
                        
                        <div class="form-group  mx-auto my-3">
                            <button class="btn btn-continue w-100 px-4 d-flex justify-content-between align-items-baseline"
                            type="button"
                             @click.prevent="openPersonalized">
                                <p class="mb-0">Continue</p>
                                <p  class="h4 text-white mb-0"><b-icon icon="arrow-right"></b-icon></p>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="col-12 col-md-5 partb pt-3">
                    <div class="item1">
                        <p class="text-color-1 Roboto-Medium">Why choose Sweetly?</p>
                    </div>
                    <div class="w-100 br-bg shadow my-4" style="height:2px;"></div>
                    <div class="item2">
                        <p class="text-color-2 Roboto-Regular">Sell without showings.</p>
                        <p class="my-4 text-color-2 Roboto-Regular">Choose Your Own Moving Date.</p>
                        <div class="text-color-2  d-flex">
                             <p class="Roboto-Medium font-weight-bold mr-2">50+ </p> 
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
</template>
<script>
export default {
    data:() => ({
        tab_visible :'menu_one',
        socialchanel:null,
        socialchanels:[
            {name:'Facebook'},
            {name:'Instagram'},
            {name:'Google'},
            {name:'Linkedin'},
            {name:'Blog/ Website'},
            {name:'News (TV, web, print)'},
            {name:'Radio'},
            {name:'Letter / Postcard'},
            {name:'Friend'},
            {name:'Sweetly Realtor'},
            {name:'Billboard'},
            {name:'YouTube'},
            {name:'Other'}
        ],
        msg:{},
        fullname:null,
        email:null,
        phone:null,
        resultsExample: null
    }),
    methods:{
     checkform(){
         this.msg = {}
         if(!this.fullname){
             this.msg.fullname = 'Fullname is required'
         }
         if(!this.email){
             this.msg.email = 'email is required'
         }
         if (
        this.email &&
        !this.email.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        this.msg.email = "please enter a valid email";
      }
      if(!this.phone){
          this.msg.phone = 'phone is required'
      }
      if(!this.resultsExample.isValid){
          this.msg.phone = 'phone is required'

      }
      if(this.fullname &&
      this.email &&
      this.phone &&
      this.resultsExample.isValid
      ){
          return true
      }

     },
      changechannel(value){
          this.socialchanel = value;
        this.tab_visible = 'menu_two'
     },
     openhomeinfopage(){
         this.$emit('openhomeinfopage')
     },
     openPersonalized(){
         if(this.checkform() &&  Object.keys(this.msg).length == 0){
             let contactinput = {}
             contactinput.socialchanel =  this.socialchanel 
             contactinput.fullname =  this.socialchanel
             contactinput.email =  this.email
             contactinput.phone =  this.phone
             this.$store.commit('setContactDetail',contactinput)
             this.$emit('submitparent2')
          }
     } 
    }
}
</script>
<style scoped>
    .contact-details-form .item11{
        background: #EDF3F2;
        border-radius: 6px;
    }
    .contact-details-form .item11 .item11a p:first-child{
        font-size: 40px;
        width: 60%;
        margin: auto;
        font-weight: 600;
    }
     .contact-details-form .item11 .item11a p{
         font-size: 18px;
         color: #434242;

     }
    .contact-details-form form .btn-continue{
        line-height: 1.7;
        background: #FFB600;
        color: #fff;
        border-radius: 4px;
        font-size: 1.2em;
    }
    .contact-details-form .btn-continue p:first-child{
        font-size: 24px
    }
     input:focus{
         outline: none;
         border: 0;
     }
     .contact-details-form .partb .item1 p{
         font-size: 32px;
     }
     .contact-details-form .partb .br-bg{
         height: 1px;
         background: #7070708c;;
     }
     .contact-details-form .partb .item2 p{
         font-size: 20px;
     }
        .contact-details-form .item1z{
        background: #EDF3F2;
        border-radius: 6px;
    }
    .contact-details-form .item1z .item1az{
        font-size: 30px;
    }
    .contact-details-form .item1z .item1bz .element1z{
        line-height: 2;
        border-radius: 4px;
        cursor: pointer;
        color:#434242;
    }
    .contact-details-form .item1z .item1bz .element1z:hover{
        background: #7070701a !important;
    }
    .input--error input{
    border: 1px solid #F79483 !important;
    box-shadow:rgb(247 148  131/24%)0px 0px 0px 3px !important;
}
    @media only screen and (max-width: 600px){
          .contact-details-form .item1z .item1az{
        font-size: 25px;
    }
    .contact-details-form .item11 .item11a p:first-child{
        font-size: 20px;
        width: 90%;
        margin: auto;
        font-weight: 600;
    }
    }
</style>