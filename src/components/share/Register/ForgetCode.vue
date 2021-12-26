<template>
    <div class="px-5">
        <div class="py-3">
            <br>
            <div class="item1 text-center">
                <p class="Roboto-Medium">Forgot password?</p>
                <p>Enter your email address and we’ll send a code to verify your account in order to change your password. </p>
                <!-- <p>{{localemail}}</p> -->
                <!-- <p class="mb-0">Verification code</p> -->
            </div>
            <form @submit.prevent="Sendcode"
            >
            <div class="form-group item3 text-center">
                <input type="email" class="form-control form-control-lg" required placeholder="email" v-model="email">
                 <div v-for="(error, index) in errors" :key="index" class="">
                  <span
                    v-if="error.param === 'email'"
                    style="color: #fc5353;"
                    >{{ error.msg }}</span
                  >
                </div>
            </div><br>
            <div class="mb-3">
            <button type="submit" class="btn btn-primary w-100 submit-btn" :disabled="!email">
                <span v-if="loading">Loading ...</span>
                <span v-else>Send Code</span>
               </button>
            </div>
            
            </form>
            

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            email:null,
            loading:null,
            formData: new FormData(),
            errors: {},
        }
    },
    computed:{
        localemail(){
            return this.$store.state.localemail || ""
        }
    },
    methods:{
        Sendcode(){
            this.loading = true;
           this.errors = {};
            let input={
                email:this.email
            }
            Object.entries(input).forEach((entry) =>
                this.formData.append(entry[0], entry[1])
        );
        this.$http.post('auth/pass_reset_send_code/',this.formData).then((res) =>{
                this.formData = new FormData();
                this.loading = false;
                this.Xopenresetpasswprd();
                this.$store.commit('setlocalemail',res.data.email)
                console.log(res)
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
        },
        Xopenresetpasswprd(){
            this.$emit('Xopenresetpasswprd');
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