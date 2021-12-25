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
            <div class="form-group item3 text-center">
                <input type="email" class="form-control form-control-lg" v-model="verifycode">
                <!-- <p>Resend code</p> -->
            </div><br>
            <div>
            <button type="submit" class="btn btn-primary w-100 submit-btn" @click="Sendcode()">
                <span v-if="loading">Loading ...</span>
                <span v-else>Send Code</span>
               </button>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            verifycode:null,
            loading:null
        }
    },
    computed:{
        localemail(){
            return this.$store.state.localemail || ""
        }
    },
    methods:{
        Sendcode(){

        },
        closepopup(){
            this.$emit('closepopup');
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