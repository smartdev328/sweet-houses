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
                <input type="text" class="form-control form-control-lg" v-model="verifycode">
                <p>Resend code</p>
            </div><br>
            <div>
            <button type="submit" class="btn btn-primary w-100 submit-btn" @click="verify()">
                <span v-if="loading">Loading ...</span>
                <span v-else>Verify</span>
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
        verify(){

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