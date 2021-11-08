<template>
    <div>
           
        <div class="text-center element1  mt-n3">
          <p class="font-robot text8">LogIn</p>
        </div>
        <div class="w-75 mx-auto element2">
            <a class="btn w-100 mb-1 btn-auth" href="">
            <img src="@/assets/image/icons8-google.svg" alt="">
            <span>log In with Google</span>
            </a>
            <p class="hnXNtF">
              or
            </p>
            <div class="form-group">
              <input type="email" class="form-control form-control-lg"  v-model="input.email" placeholder="Email">
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
            </div>
            <div class="form-group position-relative">
              <input :type="FieldType" class="form-control form-control-lg" v-model="input.password"  placeholder="Password">
              <span v-if="msg.password" style="color: #fc5353;" class="position-absolute">{{
                  msg.password
                }}</span>
                <div v-for="(error, index) in this.errors" :key="index" class="position-absolute">
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
              <button type="submit" class="btn btn-primary w-100 submit-btn mt-4" @click="login()">Log In</button>
              <div class="element3 align-items-baseline">
                <p class="font-robot text-color-2 mr-2">Don't have a profile yet? </p>
                <button @click="xloginOsignup">Join now</button>
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
        xloginOsignup(){
            this.$emit('xloginOsignup')
        },
        switchVisibility(){
        this.FieldType = this.FieldType === 'password' ? 'text':'password'
      },
      ckeckform(){
          this.msg={};
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
                this.msg.email = "Email is required"
        }
          if(this.input.password && this.input.password.length < 7){
              this.msg.password  = "password must be more 6 character"
          }
          if(this.input.password.length > 6){
              return true
          }
      },
      login(){
          this.msg={};
          if(this.ckeckform() && Object.keys(this.msg).length == 0){
              Object.entries(this.input).forEach((entry) =>
                this.formData.append(entry[0], entry[1])
                );
              this.loading = true
              this.$store
          .dispatch("login", this.formData).then(()=>{
                  this.loading = false
                  this.$emit('hideloginmodal')
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