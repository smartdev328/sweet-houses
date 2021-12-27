<template>
    <div class="px-5">
        <div class="py-3">
            <br>
            <div class="item1 text-center">
                <p class="Roboto-Medium">Create new password</p>
                <p>We sent your code to {{localemail}}. </p>
                <!-- <p>{{localemail}}</p> -->
                <!-- <p class="mb-0">Verification code</p> -->
            </div>
            <form @submit.prevent="Confirm"
            >
            <div class="form-group item3 text-center">
                <input type="text" class="form-control form-control-lg" @input="checkcode" placeholder="Verification code" v-model="verifycode">
                  
                 <div v-for="(error, index) in errors" :key="index" class="">
                  <span
                    v-if="error.param === 'pass_reset_code'"
                    style="color: #fc5353;"
                    >{{ error.msg }}</span
                  >
                </div>
                  <p @click="resendCode()">Resend code  <b-spinner v-if="resendloading" style="width:18px;height:18px" variant="warning" label="Spinning"></b-spinner></p>
                     <div v-for="(error, index) in errors" :key="index" class="">
                  <span
                    v-if="error.param === 'email'"
                    style="color: #fc5353;"
                    >{{ error.msg }}</span
                  >
                </div>
            </div>
            <div class="form-group item3 text-center">
                <input type="password" class="form-control form-control-lg" required placeholder="Create new password" @input="checkpass" v-model="password">
            </div>
              <div class="form-group item3 text-center">
                <input type="password" class="form-control form-control-lg" required placeholder="Confirm password" @input="checkpass" v-model="confirmpassword">
            </div>
            <p v-if="msgconfirm" style="color: #fc5353;">{{msgconfirm}}</p>
            <div class="mb-3">
            <button type="submit" class="btn btn-primary w-100 submit-btn" :disabled="!verifycode">
                <span v-if="loading">Loading ...</span>
                <span v-else>Confirm</span>
               </button>
            </div>
            
            </form>
            

        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2'
export default {
    data(){
        return{
            email:null,
            loading:null,
            formData: new FormData(),
            errors: {},
            password:null,
            confirmpassword:null,
            verifycode:null,
            resendloading:null,
            msgconfirm:""
        }
    },
    computed:{
        localemail(){
            return this.$store.state.localemail || ""
        }
    },
    methods:{
        checkpass(){
            if(this.msgconfirm){
                this.msgconfirm = ""
            }
        },
        checkcode(){
            if(this.errors){
          this.errors.map((item) =>{
            if (item.param === 'pass_reset_code'){
              return item.msg = ""
            }
             if (item.param === 'email'){
              return item.msg = ""
            }
          })
        }
        },
        checkpassword(){
            this.msgconfirm = ""
            if(this.password && this.confirmpassword){
                if(this.password === this.confirmpassword){
                    return true
                }else{
                    this.msgconfirm =" password must be equal"
                }
            }else{
                this.msgconfirm =" password must be equal"
            }
        },
        Confirm(){
            if(this.checkpassword()){
                 this.loading = true;
           this.errors = {};
            let input={
                email:this.localemail,
                pass_reset_code:this.verifycode,
                new_password:this.password
            }
              Object.entries(input).forEach((entry) =>
                this.formData.append(entry[0], entry[1])
        );
        this.$http.post('auth/pass_reset_by_code/',this.formData).then((res) =>{
             this.formData = new FormData();
                this.loading = false;
                this.Xresetpassword();
                  Swal.fire({
                  title: 'success!',
                  text: 'Success, you are logged in!',
                  icon: 'success',
                  confirmButtonText: 'Ok',
                  showConfirmButton:false,
                  timer: 1500
                })
                return res
        }) .catch((err) => {
                this.formData =  new FormData(),
                this.loading = false;
                // this.$notify({
                //   group: 'foo',
                //   type: "error",
                //   text: err.response.data.msg,
                //   duration:6000,
                //   speed:500
                // });
               this.errors = err.response.data.errors || {};
          });
            }
           
        },
        resendCode(){
            this.resendloading = true;
           this.errors = {};
            let input={
                email:this.localemail
            }
            Object.entries(input).forEach((entry) =>
                this.formData.append(entry[0], entry[1])
        );
        this.$http.post('auth/pass_reset_send_code/',this.formData).then((res) =>{
                this.formData = new FormData();
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
        Xresetpassword(){
            this.$emit('Xresetpassword')
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