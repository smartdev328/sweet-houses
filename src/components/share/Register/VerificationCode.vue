<template>
    <div class="px-5">
        <div class="py-3">
            <div class="mx-auto text-center">
                <img src="../../../assets/image/icon/msgcode.svg" alt="">
            </div>
            <br>
            <div class="item1 text-center">
                <p class="Roboto-Medium">Enter Verification Code</p>
                <p>We’ve sent a verification code to </p>
                <p>{{localemail}}</p>
                <p class="mb-0">Verification code</p>
            </div>
            <div class="form-group item3 text-center">
                <input type="text" class="form-control form-control-lg" @input="checkerrcode" v-model="verifycode">
                    <p @click="resendCode()">Resend code  <b-spinner v-if="resendloading" style="width:18px;height:18px" variant="warning" label="Spinning"></b-spinner></p>
                 <div v-for="(error, index) in errors" :key="index" class="">
                  <span
                    v-if="error.param === 'verify_code'"
                    style="color: #fc5353;"
                    >{{ error.msg }}</span
                  >
                </div>
            
            </div>
            <div>
            <button type="submit" class="btn btn-primary w-100 submit-btn" :disabled="!verifycode" @click="verify()">
                <span v-if="loading">Loading ...</span>
                <span v-else>Verify</span>
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
            verifycode:null,
            loading:null,
            formData: new FormData(),
            errors: [],
            resendstatus:false,
            status:null,
            resendloading:null
        }
    },
    computed:{
        localemail(){
            return this.$store.state.localemail || ""
        }
    },
    methods:{
        checkerrcode(){
            if(this.errors.length){
                this.errors.map((item) =>{
            if (item.param === 'verify_code'){
              return item.msg = ""
            }
          })
            }
        },
        verify(){
            this.loading = true;
            this.errors = {};
            let input={
                verify_code : this.verifycode,
                email:this.localemail
            }
              Object.entries(input).forEach((entry) =>
                this.formData.append(entry[0], entry[1])
                );
                  this.$store
          .dispatch("verifycodeactive", this.formData).then((res)=>{
                //   this.$notify({
                //   group: 'foo',
                //   type: "Success",
                //   text: 'Success..! You are logged in',
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
                  this.closeVerify();
                  this.formData = new FormData();
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

        },
        resendCode(){
            this.errors = {};
            this.resendloading = true
            let input = {
                email :this.localemail
            }
              Object.entries(input).forEach((entry) =>
                this.formData.append(entry[0], entry[1])
                );
            this.$http.post('auth/resend_code/',this.formData).then((res) =>{
                this.formData = new FormData();
                this.status = res.data.status
                this.resendstatus = true;
                this.resendloading = false;
                console.log(res)
            }) .catch((err) => {
                this.formData =  new FormData(),
                this.resendloading = false;
                // this.$notify({
                //   group: 'foo',
                //   type: "error",
                //   text: err.response.data.msg,
                //   duration:6000,
                //   speed:500
                // });
               this.errors = err.response.data.errors || {};
          });
        },
        closeVerify(){
            this.$emit('closeVerify');
        }
    }
}
</script>
<style scoped>
.item1 p:first-child{
    font-size: 2rem;
    color: #043a30;
}
.item1 p{
    font-size:1.2rem;
}
.item3 p{
    font-weight: 600;
}
.item3 p:hover{
    cursor: pointer;
    text-decoration: underline;

}
</style>
