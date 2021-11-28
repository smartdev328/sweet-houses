<template>
    <div>
           
        <div class="text-center element1  mt-n3">
          <p class="font-robot text8">Sign Up</p>
        </div>
        <div class="w-75 mx-auto element2">
            <a class="btn w-100 mb-1 btn-auth" @click="signupgoogle()">
            <img src="@/assets/image/icons8-google.svg" alt="">
            <span>Sign up with Google</span>
            </a>
            <p class="hnXNtF">
              or
            </p>
            <div class="form-group">
              <input type="text" class="form-control form-control-lg" v-model="input.username" placeholder="Full Name">
               <span v-if="msg.username && !input.username" style="color: #fc5353;">{{
                  msg.username
                }}</span>
                <!-- <div v-for="(error, index) in this.errors" :key="index">
                  <span
                    v-if="error.param === 'username'"
                    style="color: #fc5353;"
                    >{{ error.msg }}</span
                  >
                </div> -->
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
                <!-- <div v-for="(error, index) in this.errors" :key="index">
                  <span
                    v-if="error.param === 'email'"
                    style="color: #fc5353;"
                    >{{ error.msg }}</span
                  >
                </div> -->
            </div>
            <div class="form-group position-relative">
              <input :type="FieldType" class="form-control form-control-lg" v-model="input.password"  placeholder="Password">
              <span v-if="msg.password && !input.password" style="color: #fc5353;">{{
                  msg.password
                }}</span>
                <!-- <div v-for="(error, index) in this.errors" :key="index">
                  <span
                    v-if="error.param === 'password'"
                    style="color: #fc5353;"
                    >{{ error.msg }}</span
                  >
                </div> -->
              <div class="passinput">
                  <span v-if="FieldType === 'password'"  @click="switchVisibility">Show</span>
              <span v-else  @click="switchVisibility">Hide</span>
              </div>
            </div>
             <div v-if="errors">
                  <span  style="color: #fc5353;" v-for="err in errors" :key="(err.id)"> 
                  {{err}}
              </span>
              </div>
              <button type="submit" class="btn btn-primary w-100 submit-btn " @click="SignUp()">
                <span v-if="loading">Loading ...</span>
                <span v-else>Join Now</span>
               </button>
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
export default {
    data(){
        return{
        fullname:"",
        FieldType:"password",
        formData: new FormData(),
        input: {},
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
          this.emailnotmaildmsg =  "";
          if(!this.input.username){
              this.msg.username = "username is required"
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
          if(this.input.username && this.input.username.length < 4){
              this.msg.username = "username must be more 4 character"
          }
          if(!this.input.password){
              this.msg.password = "password is required"
          }
          if(this.input.password && this.input.password.length < 7){
              this.msg.password  = "password must be more 6 character"
          }
          if(this.input.username && this.input.password.length >= 6 && this.input.email){
              return true
          }
      },
      SignUp(){
          if(this.ckeckform() && Object.keys(this.msg).length == 0){
            this.loading = true
              this.$http
      .get(
          `https://deva.dillilabs.com/api/59fb17b0-4d6b-11ec-a6a6-a5ece6f0ccc5/email/${this.input.email}`
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
             this.$notify({
                  group: 'foo',
                  type: "success",
                   text: 'Success..! you are login',
                  duration:6000,
                  speed:500
                });
                  return res;
              }).then(()=>{
                this.loading = false; 
                this.$emit('hidesignupmodal');
                
              }) .catch((err) => {
                this.loading = false
                this.formData = new FormData(),
                 this.$notify({
                  group: 'foo',
                  type: "error",
                  text: 'Ooops!,There are some errors',
                  duration:6000,
                  speed:500
                });
              this.errors = err.response.data || {};
                this.loading = false
                console.log(err.response.data)
          });
            } else {
             this.loadvalid = false;
             this.emailisvalid = false;
            this.emailnotmaildmsg = "please enter a real email";
           }
          })

            
            
          
              
      }
      },
    async signupgoogle() {
      const googleUser = await this.$gAuth.signIn();
      console.log("googleUser", googleUser);
      console.log("getId", googleUser.getId());
      console.log("getBaseProfile", googleUser.getBasicProfile());
      console.log("getAuthResponse", googleUser.getAuthResponse());
      console.log(
        "getAuthResponse$G",
        this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
      );
      this.isLogin = this.$gAuth.isAuthorized;
    },
    }
}
</script>
<style scoped>

</style>