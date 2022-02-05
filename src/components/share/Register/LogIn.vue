<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->

    <div>
           
        <div class="text-center element1  mt-n3">
          <p class="font-robot text8">Log in</p>
        </div>
        <div class="w-75 mx-auto element2">
            <a class="btn w-100 mb-1 btn-auth" @click="logingoogle()" >
            <img src="@/assets/image/icons8-google.svg" alt="">
            <span>Log in with Google</span>
            </a>
            <p class="hnXNtF">
              or
            </p>
            <form @submit.prevent="login">
                <div class="form-group">
              <input type="email" class="form-control form-control-lg" @input="cheackmail" v-model="input.email" placeholder="Email">
              <span v-if="msg.email" style="color: #fc5353;">{{
                  msg.email
                }}</span>
                <div v-for="(error, index) in this.errors" :key="index">
                  <span
                    v-if="error.param === 'email'"
                    style="color: #fc5353;"
                    >{{ error.msg }}</span
                  >
                </div>
<!--                 <div v-for="(error, index) in this.errors" :key="index">-->
<!--                  <span-->
<!--                    v-if="error.param === 'details'"-->
<!--                    style="color: #fc5353;"-->
<!--                    >{{ error.msg }}</span-->
<!--                  >-->
<!--                </div>-->
            </div>
            <div class="form-group position-relative">
              <input :type="FieldType" class="form-control form-control-lg" @input="checkPass" v-model="input.password"  placeholder="Password">
              
              <span v-if="msg.password && input.password.length < 6" style="color: #fc5353;">{{
                  msg.password
                }}</span>
                <div v-for="(error, index) in this.errors" :key="index">
                  <span
                    v-if="error.param === 'password'"
                    style="color: #fc5353;"
                    >{{ error.msg }}</span
                  >
                </div>
                <p class="fpass pt-2 Roboto-Medium" @click="Openforgetcode()">Forgot your password?</p>
              <div class="passinput">
                  <span v-if="FieldType === 'password'"  @click="switchVisibility">Show</span>
              <span v-else  @click="switchVisibility">Hide</span>
              </div>
            </div>

             <button type="submit" class="btn btn-primary w-100 submit-btn mt-4" @click="verifycode()" v-if="verifyrequire">
                <span>Verify your email</span>
              </button>
              <button type="submit" class="btn btn-primary w-100 submit-btn mt-4" v-if="!verifyrequire" > 
                <span v-if="loading">Loading ...</span>
                <span v-else>Log in</span>
              </button>
              
            </form>
          
              <!-- <div v-if="errors">
                  <span  style="color: #fc5353;" v-for="err in errors" :key="(err.id)"> 
                  {{err}}
              </span>
              </div> -->
            
              <div class="element3 align-items-baseline mb-3">
                <p class="font-robot text-color-2 mr-2">Don't have a profile yet? </p>
                <button @click="xloginOsignup">
                Join now
                </button>
              </div>
             
        </div>

    </div>
</template>
<script>
import Swal from 'sweetalert2'
export default {
    data(){
        return{
        fullname:"",
        FieldType:"password",
        formData: new FormData(),
         input: {
          full_name:"",
          email:"",
          password:""
        },
        errors: [],
        msg: {},
        loading:false,
        isLogin:false,
        }
    },
    computed:{
      verifyrequire(){
        let val = null
           for(var i = 0; i<this.errors.length ; i++ ){
          if (this.errors[i].msg == 'You Have to verify Your Email First!') {
            val =  true;
        }
        
       
      }
      return val;
      }
    },
    methods:{
      verifycode(){
        console.log("0000")
        this.$emit('Openverifyemailbtcode')
      },
      Openforgetcode(){
        this.$emit("Openverifyemail")
      },
        xloginOsignup(){
            this.$emit('xloginOsignup')
        },
        switchVisibility(){
        this.FieldType = this.FieldType === 'password' ? 'text':'password'
      },
      checkPass(){
        if(this.msg.password){
          this.msg.password = ""
        }
        if(this.errors.length){
          this.errors.map((item) =>{
            if (item.param === 'password'){
              return item.msg = ""
            }
          })
        }
      },
      cheackmail(){
         if(this.msg.email){
           this.msg.email = ""
            
         }
        if(this.errors.length){
          this.errors.map((item) =>{
            if (item.param === 'email'){
              return item.msg = ""
            }
          })
        }

      },

      ckeckform(){
          this.msg={};
          this.errors=[]
          if(!this.input.password){
              this.msg.password = "password is required"
          }
            if(!this.input.email){
              this.msg.email = "Email is required"
          }
          if (
            this.input.email &&
            !this.input.email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ) {
                this.msg.email = "please enter emai correctly"
        }
          if(this.input.password && this.input.password.length < 6){
              this.msg.password  = "Password must be at least 6 characters"
          }
          if(this.input.password.length > 6){
              return true
          }
      },
      login(){
        if(!this.verifyrequire){
             if(this.ckeckform() && Object.keys(this.msg).length == 0){

            this.loading = true
         


              Object.entries(this.input).forEach((entry) =>
                this.formData.append(entry[0], entry[1])
                );
                  this.$store
          .dispatch("login", this.formData).then((res)=>{
                //   this.$notify({
                //   group: 'foo',
                //   type: "Success",
                //   text: 'Success..! you are login',
                //   duration:6000,
                //   speed:500
                // });
                  Swal.fire({
                  title: 'Success!',
                  text: 'Success, you are logged in!',
                  icon: 'success',
                  confirmButtonText: 'Ok',
                  showConfirmButton:false,
                  timer: 1500
                })
                  this.loading = false
                  this.$emit('hideloginmodal')
                  
                  return res;
              }) .catch((err) => {
                this.formData =  new FormData(),
                // this.$notify({
                //   group: 'foo',
                //   type: "error",
                //   text: err.response.data.msg,
                //   duration:6000,
                //   speed:500
                // });
               this.errors = err.response.data.errors || {};
                this.loading = false
          });

      }
        }else{
          this.$store.commit("setlocalemail",this.input.email)
            this.verifycode()
        }
       
          
      },
        registerGauth(id_token,access_token){
        this.$store.dispatch('registerGauth',{id_token:id_token,access_token:access_token}).then((res) =>{
            Swal.fire({
                  title: 'success!',
                  text: 'Success..! You are logged in',
                  icon: 'success',
                  confirmButtonText: 'Ok',
                  timer: 1500
                })
                return res;
        }).catch((err) => {
           this.errors = err.response.data.errors || {};
                 Swal.fire({
                  title: 'Failed !',
                  text: err.response.data.msg,
                  icon: 'error',
                  confirmButtonText: 'Ok',
                })
          });
      },
      async logingoogle() {
      const googleUser = await this.$gAuth.signIn();
        let id_token = googleUser.getAuthResponse().id_token;
        let access_token = googleUser.getAuthResponse().access_token;
      this.registerGauth(id_token,access_token)
      // console.log("googleUser", googleUser);
      // console.log("getId", googleUser.getId());
      // console.log("getBaseProfile", googleUser.getBasicProfile());
      // console.log("getAuthResponse", googleUser.getAuthResponse());
      // console.log(
      //   "getAuthResponse$G",
      //   this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
      // );
      this.isLogin = this.$gAuth.isAuthorized;
    },
    }
}
</script>
<style scoped>
.fpass{
  color: #FFB600;
  font-size: 18px;
  cursor: pointer;
}
.fpass:hover{
  text-decoration: underline;
}
</style>
