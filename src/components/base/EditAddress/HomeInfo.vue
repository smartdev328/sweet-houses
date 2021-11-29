<template>
    <div class="home-info-form">
        <div class="container w-100 mx-0">
            <p class="text-center text-color-1 DMSerifRegular">Enter your home address</p>
            <div class="row">
                <div class="col-10 col-md-5 mx-auto">
                    <form @submit.prevent="EditAddress()">
                        <div class="form-group"  
                        :class="{ 'input--error': msg.streetaddress && !input.streetaddress}"
                         >
                            <input type="text" class="form-control form-control-lg Roboto-Regular" v-model="input.streetaddress" placeholder="Street address" >
                             <span style="color: #dc3545;font-size: 16px;" v-if="msg.streetaddress && !input.streetaddress">{{
                                msg.streetaddress
                                }}</span>
                        </div>
                        <div class="form-group" 
                        :class="{ 'input--error': msg.Apt && !input.Apt}"
                          >
                            <input type="text" class="form-control form-control-lg Roboto-Regular" v-model="input.Apt" placeholder="Apt, unit, or suite (if applicable)">
                             <span style="color: #dc3545;font-size: 16px;" v-if="msg.Apt && !input.Apt">{{
                                msg.Apt
                                }}</span>
                        </div>
                        <div class="form-group"  
                        :class="{ 'input--error': msg.city && !input.city}"
                         >
                            <input type="text" class="form-control form-control-lg Roboto-Regular" v-model="input.city" placeholder="City" >
                            <span style="color: #dc3545;font-size: 16px;" v-if="msg.city && !input.city">{{
                                msg.city
                                }}</span>
                        </div>
                        <div class="form-group selectspecbg" :class=" {selectspecchanged : changedsubcategory , inputerr:msg.canadianprovince && !input.canadianprovince}" 
                        
                          >  
                            <select name="canadianprovince"   @change="changestylesub()" class="form-control form-control-lg Roboto-Regular" id="" v-model="input.canadianprovince" >
                                <option value="null" disabled hidden selected>
                          Province
                                </option>
                               <option v-for="canadianprovince in canadianprovinces" :key="canadianprovince.id" :value="canadianprovince.short">{{canadianprovince.short}}</option>
                      </select>
                      <span style="color: #dc3545;font-size: 16px;" v-if="msg.canadianprovince && !input.canadianprovince">{{
                                msg.canadianprovince
                                }}</span>
                        </div>
                        <div class="form-group" 
                        :class="{ 'input--error': msg.Postal && !input.Postal}"
                         >
                            <input type="text" class="form-control form-control-lg Roboto-Regular" v-model="input.Postal" placeholder="Postal code" >
                            <span style="color: #dc3545;font-size: 16px;" v-if="msg.Postal && !input.Postal">{{
                                msg.Postal
                                }}</span>
                        </div>
                        <div class="text-center">
                            <button type="submit"  class="btn rounded  Roboto-Regular py-2 px-4">Continue</button>
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
            msg:{},
            input:{
                canadianprovince:null,
                streetaddress:"",
                Apt:"",
                city:"",
                Postal:""
            },
            changedsubcategory:false
            

        }
    },
    computed:{
        canadianprovinces(){
           return this.$store.state.canadianprovinces
        }
    },
    methods:{
        changestylesub(){
      this.changedsubcategory = true
    },
    checkform(){
        this.msg={};
        if(!this.input.streetaddress){
            this.msg.streetaddress = 'streetaddress is required'
        }
        if(!this.input.Apt){
            this.msg.Apt = "Apt is required"
        }
        if(!this.input.city){
            this.msg.city = "City is required"
        }
        if(!this.input.canadianprovince){
            this.msg.canadianprovince = "CanadianProvince is required"
        }
        if(!this.input.Postal){
            this.msg.Postal = "Postal is required"
        }
        if(
            this.input.streetaddress &&
            this.input.Apt &&
            this.input.city &&
            this.input.canadianprovince &&
            this.input.Postal
        ){
            return true
        }

    },
    clearForm(){
        this.input.streetaddress = "",
        this.input.Apt = "",
        this.input.city = "",
        this.input.canadianprovince = null,
        this.input.Postal=""
    },
    propsAsString(obj){
          return Object.keys(obj).map(function(k) { return obj[k] }).join(" ,")

    },
        EditAddress(){
            if(this.checkform() && Object.keys(this.msg).length == 0){
                let editdatainput = this.propsAsString(this.input);
                this.$store.commit('editHomeaddressdata',editdatainput)
                this.clearForm();
                 //this.$router.push({name:'ConfirmAddress'})
            }
           
        }
    }
}
</script>
<style scoped>
    .home-info-form p{
        font-size: 48px;
    }
    .form-group input ,
    .form-group select{
        border: 1px solid #AAAAAA;
        border-radius: 4px;
        color: #000;
    }
    .form-group select option:disabled{
        color: rgb(255, 11, 11);
    }
    input{
        outline: none;
        box-shadow: none;
    }
    input:focus{
        outline: none;
        box-shadow: none;
    }
    .home-info-form  button{
        background: #FFB600;
        color: #fff;
        line-height: 30px;
        font-size: 20px;
    }
    .selectspecbg select {
  font-size: 18px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color:#495057d1;
  background: url(../../../assets/image/icon/IconlyRight2.svg) 96% / 5% no-repeat #fff;
}
.selectspecbg select option:hover{
    background: red  !important;
}
.selectspecchanged select{
    color:#000;
}
.input--error input[type="number"],
.input--error input[type="text"]{
    border: 1px solid #F79483 !important;
    box-shadow:rgb(247 148  131/24%)0px 0px 0px 3px !important;
}
.inputerr select{
     border: 1px solid #F79483 !important;
    box-shadow:rgb(247 148  131/24%)0px 0px 0px 3px !important;
}
</style>