<template>
    <div>
           
        <div class="text-center element1  mt-n3">
          <p class="font-robot text8">Sign up</p>
        </div>
        <div class="w-75 mx-auto element2">
            <a class="btn w-100 mb-1 btn-auth" @click="signupgoogle()">
            <img src="@/assets/image/icons8-google.svg" alt="">
            <span>Sign up with Google</span>
            </a>
            <p class="hnXNtF">
              or
            </p>
            <form @submit.prevent="SignUp">
                 <div class="form-group">
              <input type="text" class="form-control form-control-lg" v-model="input.full_name" placeholder="Full Name">
               <span v-if="msg.full_name && input.full_name.length < 4" style="color: #fc5353;">{{
                  msg.full_name
                }}</span>
                 <div v-for="(error, index) in this.errors" :key="index">
                  <span
                    v-if="error.param === 'full_name'"
                    style="color: #fc5353;"
                    >{{ error.msg }}</span
                  >
                </div> 
            </div>
            <div class="form-group">
              <input type="email" class="form-control form-control-lg" v-model="input.email" placeholder="Email">
                <span v-if="msg.email" style="color: #fc5353;font-size: 16px">{{
                  msg.email
                }}</span>
                <span
              style="color: #dc3545; font-size: 16px"
              v-if="(emailnotmaildmsg && !emailisvalid) "
              >{{ emailnotmaildmsg }}</span
            >
                 <div v-for="(error, index) in this.errors" :key="index">
                  <span
                    v-if="error.param === 'email'"
                    style="color: #fc5353;"
                    >{{ error.msg }}</span
                  >
                </div>
            </div>
            <div class="form-group position-relative">
              <input :type="FieldType" class="form-control form-control-lg" v-model="input.password"  placeholder="Password">
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
              <div class="passinput">
                  <span v-if="FieldType === 'password'"  @click="switchVisibility">Show</span>
              <span v-else  @click="switchVisibility">Hide</span>
              </div>
            </div>
              <button type="submit" class="btn btn-primary w-100 submit-btn">
                <span v-if="loading">Loading ...</span>
                <span v-else>Join Now</span>
               </button>

            </form>
         
              <div class="element3 align-items-baseline">
                <p class="font-robot text-color-2 mr-2">Already have a profile? </p>
                <button @click="XsignupOlogin">log in</button>
              </div>
              <div class="element4 d-flex justify-content-center text-center mb-4">
              <p>
                By creating your account, you agree to our<code><br></code>
              <a href="" class="text-color-2">Terms of Use</a>  and <a href="" class="text-color-2">Privacy Policy</a> </p>
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
        errors: {},
        msg: {},
        loading:false,
        loadvalid: false,
        emailisvalid: false,
       emailnotmaildmsg: "",
        }
    },
    methods:{
        XsignupOlogin(){
            this.$emit('XsignupOlogin')
        },
        switchVisibility(){
        this.FieldType = this.FieldType === 'password' ? 'text':'password'
      },
      ckeckform(){
          this.msg={};
          this.errors =  {};
          this.emailnotmaildmsg =  "";
          if(!this.input.full_name){
              this.msg.full_name = "full name is required"
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
            this.msg.email = "Please enter the email correctly"
      }
          if(this.input.full_name && this.input.full_name.length < 4){
              this.msg.full_name = "full_name must be more 4 character"
          }
          if(!this.input.password){
              this.msg.password = "password is required"
          }
          if(this.input.password && this.input.password.length < 6){
              this.msg.password  = "Password must be at least 6 characters"
          }
          if(this.input.full_name && this.input.password.length >= 6 && this.input.email){
              return true
          }
      },
      SignUp(){
          if(this.ckeckform() && Object.keys(this.msg).length == 0){
            this.loading = true
              this.$http
      .get(
          `https://deva.dillilabs.com/api/59fb17b0-4d6b-11ec-a6a6-a5ece6f0ccc5/email/${this.input.email}`,{headers:{
            'Access-Control-Allow-Origin': '*'
      }}
          
          ).then((res) =>{
             if (res.data) {
              this.emailisvalid = true;
              this.loadvalid = false;
            this.emailnotmaildmsg = "";
              Object.entries(this.input).forEach((entry) =>
                this.formData.append(entry[0], entry[1])
                );
              this.$store
          .dispatch("register", this.formData).then((res)=>{
             Swal.fire({
                  title: 'success!',
                  text: 'Success..! you are login',
                  icon: 'success',
                  confirmButtonText: 'Ok',
                  timer: 1500
                })
                  return res;
              }).then(()=>{
                this.loading = false; 
                this.$emit('hidesignupmodal');
                
              }) .catch((err) => {
                this.loading = false
                this.formData = new FormData(),
              this.errors = err.response.data.errors || {};
                this.loading = false
                console.log(err.response.data)
          });
            } else {
              this.loading = false;
             this.loadvalid = false;
             this.emailisvalid = false;
            this.emailnotmaildmsg = "please enter a real email";
           }
          })  
      }
      },
      registerGauth(id_token){
        this.$store.dispatch('registerGauth',{auth_token:id_token}).then((res) =>{
            Swal.fire({
                  title: 'success!',
                  text: 'Success..! you are login',
                  icon: 'success',
                  confirmButtonText: 'Ok',
                  timer: 1500
                })
                return res;
        }).catch((err) => {
                 Swal.fire({
                  title: 'Failed !',
                  text: err.response.data.msg,
                  icon: 'error',
                  confirmButtonText: 'Ok',
                })
          });
      },
    async signupgoogle() {
      const googleUser = await this.$gAuth.signIn();
      // console.log("googleUser", googleUser);
      // console.log("getId", googleUser.getId());
      // console.log("getBaseProfile", googleUser.getBasicProfile());
     console.log("getAuthResponse", googleUser.getAuthResponse());
      let id_token = googleUser.getAuthResponse().id_token;
      this.registerGauth(id_token)
      
      // console.log(
      //   "getAuthResponse$G",
      //   this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
      // );
     // this.isLogin = this.$gAuth.isAuthorized;
    },
    }
}
</script>
<style scoped>

</style>