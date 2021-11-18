<template>
    <div class="home-info-form">
        <div class="container w-100 mx-0">
            <p class="text-center text-color-1 DMSerifRegular">Enter your home address</p>
            <div class="row">
                <div class="col-10 col-md-5 mx-auto">
                    <form @submit.prevent="EditAddress()">
                        <div class="form-group">
                            <input type="text" class="form-control form-control-lg Roboto-Regular" v-model="input.streetaddress" placeholder="Street address" >
                             <span style="color: #dc3545;font-size: 16px;" v-if="msg.streetaddress">{{
                                msg.streetaddress
                                }}</span>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control form-control-lg Roboto-Regular" v-model="input.Apt" placeholder="Apt, unit, or suite (if applicable)">
                             <span style="color: #dc3545;font-size: 16px;" v-if="msg.Apt">{{
                                msg.Apt
                                }}</span>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control form-control-lg Roboto-Regular" v-model="input.city" placeholder="City" >
                            <span style="color: #dc3545;font-size: 16px;" v-if="msg.city">{{
                                msg.city
                                }}</span>
                        </div>
                        <div class="form-group selectspecbg" :class=" {selectspecchanged : changedsubcategory}">
                            <select name="canadianprovince"   @change="changestylesub()" class="form-control form-control-lg Roboto-Regular" id="" v-model="input.canadianprovince" >
                                <option value="null" disabled hidden selected>
                          Province
                                </option>
                               <option v-for="canadianprovince in canadianprovinces" :key="canadianprovince.id" :value="canadianprovince.short">{{canadianprovince.short}}</option>
                      </select>
                      <span style="color: #dc3545;font-size: 16px;" v-if="msg.canadianprovince">{{
                                msg.canadianprovince
                                }}</span>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control form-control-lg Roboto-Regular" v-model="input.Postal" placeholder="Postal code" >
                            <span style="color: #dc3545;font-size: 16px;" v-if="msg.Postal">{{
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
            obj1:{
            },
            input:{
                canadianprovince:null
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
        EditAddress(){
            if(this.checkform() && Object.keys(this.msg).length == 0){
                 this.$router.push({name:'ConfirmAddress'})
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
.selectspecchanged select{
    color:#000;
}
</style>