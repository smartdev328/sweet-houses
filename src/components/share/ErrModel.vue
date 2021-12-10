<template>
    <div>
           
        <div class="item1 pt-0 pb-5">
            <img src="../../assets/image/icon/erralert.svg" class="" alt="">
            <p class="my-3 DMSerifRegular p1">ERROR!</p>
            <p class="p2 text-color-2 Roboto-Regular text-center">
                We were unable to find your address in our database<br> {{homeaddress}}<br>
                Please contact Sweetly directly so we can assist you in getting Maximum Value for your home.<br>
                780-477-9338
                <b>info@sellsweetly.ca</b>
            </p>
            <button class="btn Roboto-Regular text-white px-5" @click="routehome()">Ok</button>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        homeaddress(){
            return this.$store.state.homeaddress
        }
    },
    methods:{
        hide(){
            this.$bvModal.hide('successmsg');
        },
        show(){
            this.$bvModal.show('successmsg')
        },
        routehome(){
             this.$bvModal.hide('successmsg');
             this.$router.push({ name: "Home" })
        }
    }
}
</script>
<style scoped>
.item1{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.item1 img{
width: 90px;
height: 90px;
}
.item1 .p1{
    font-size: 28px;
    color: #FFB600;
    font-weight: 600;}
.item1 .p2{
    width: 75%;
    margin: auto;
    font-size: 18px;
}
.item1 button{
    background:  #FFB600;
    font-size: 18px;
    height: 44px;
}
</style>