<template>
    <div>
           
        <div class="text-center element1  mt-n3">
          <p class="font-robot text8">Sign Up</p>
        </div>
        <div class="w-75 mx-auto element2">
            <a class="btn w-100 mb-1 btn-auth" href="">
            <img src="@/assets/image/icons8-google.svg" alt="">
            <span>Sign up with Google</span>
            </a>
            <p class="hnXNtF">
              or
            </p>
            <div class="form-group">
              <input type="text" class="form-control form-control-lg" v-model="input.username" placeholder="Full Name">
               <span v-if="msg.username" style="color: #fc5353;">{{
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
              <input type="email" class="form-control form-control-lg"  placeholder="Email">
            </div>
            <div class="form-group position-relative">
              <input :type="FieldType" class="form-control form-control-lg" v-model="input.password"  placeholder="Password">
              <span v-if="msg.password" style="color: #fc5353;">{{
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
              <button type="submit" class="btn btn-primary w-100 submit-btn " @click="Login()">Join Now</button>
              <div class="element3 align-items-baseline">
                <p class="font-robot text-color-2 mr-2">Already have a profile? </p>
                <button>log in</button>
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
        switchVisibility(){
        this.FieldType = this.FieldType === 'password' ? 'text':'password'
      },
      ckeckform(){
          this.msg={};
          if(!this.input.username){
              this.msg.username = "username is required"
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
          if(this.input.username && this.input.password.length > 6){
              return true
          }
      },
      Login(){
          this.msg={};
          if(this.ckeckform() && Object.keys(this.msg).length == 0){
              Object.entries(this.input).forEach((entry) =>
                this.formData.append(entry[0], entry[1])
                );
              this.loading = true
              this.$store
          .dispatch("register", this.formData).then(()=>{
                  this.loading = false
                  this.$emit('hidesignupmodal')
              }) .catch((err) => {
                this.errors = err.response.data.errors || {};
                this.loading = false
          });
      }
          
      },
    }
}
</script>
<style scoped>

</style>