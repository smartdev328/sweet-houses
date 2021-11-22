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
                <div v-for="(error, index) in this.errors" :key="index">
                  <span
                    v-if="error.param === 'username'"
                    style="color: #fc5353;"
                    >{{ error.msg }}</span
                  >
                </div>
            </div>
            <div class="form-group">
              <input type="email" class="form-control form-control-lg" v-model="input.email" placeholder="Email">
               <span v-if="msg.email && !input.email" style="color: #fc5353;">{{
                  msg.email
                }}</span>
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
              <span v-if="msg.password && !input.password" style="color: #fc5353;">{{
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
        loading:false
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
            this.msg.email = "Email is required"
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
          if(this.input.username && this.input.password.length > 6 && this.input.email){
              return true
          }
      },
      SignUp(){
          this.msg={};
          this.errors={};
          if(this.ckeckform() && Object.keys(this.msg).length == 0){
            this.loading = true
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