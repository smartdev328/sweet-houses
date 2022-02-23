<template>
    <div class="page12">
        <div class="container">
            <div class="my-5">
                    <div class="item1 text-center">
                        <p class="DMSerifRegular text-color-1">We'll be in touch!</p>
                    </div>
                    <div class="item2 text-center ">
                            <div class="d-flex align-items-baseline">
                                <div class="image mr-3">
                                    <img src="../../../assets/image/icon/ico20.svg" class="w-100 h-100" alt="icon">
                                </div>
                                <div>
                                    <p class="Roboto-Medium">Your call is scheduled </p>
                                </div>
                            </div>
                    </div>
                    <div class="item3 text-center Roboto-Medium">
                        <p>
                            We've sent a confirmation email to 
                        useremail@gmail.com. We'll give you a call at 
                        000-000-0000.
                        </p>
                    </div>
                    <div class="item4 bg-white shadow-lg">
                        <div class="p-3 p-md-5 d-flex justify-content-between">
                            <div class="image">
                                <img src="../../../assets/image/icon/ico81.svg" class="w-100 h-100" alt="icon">
                            </div>
                            <div class="item4b ml-2">
                                <p class="Roboto-Regular mb-0">Thinking about moving soon?</p>
                                <p class="Roboto-Regular">Find your next home and schedule on-demand tours.</p>
                                <button class="btn browse-btn Roboto-Regular" @click="routetohome"> Browse in City Name</button>
                            </div>
                        </div>
                    </div>
                    <div class="my-5 item5 text-center" @click="routetohome()">
                        <p class="Roboto-Regular">Back to homepage</p>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        routetohome(){
            this.$router.push({name:"Home"});
            document.body.scrollTop = 0;
        }
    }
}
</script>
<style scoped>
*{
    cursor: context-menu;
}
    .item1 p{
        font-size: 38px;
    }
    .item2 {
        margin: auto;
        width: 25%;
    }
    .item2 .image{
        width: 22px;
        height: 22px;
    }
    .item2 p{
        color: #434242;
        font-size: 24px;
    }
    .item3{
        width: 30%;
        color: #434242;
        margin: auto;
        font-size: 18px;
    }
    .item4{
        width: 52%;
        margin: auto;
    }
    .item4 .image{
        width: 70px;
        height: 70px;
    }
    .item4b p:first-child{
        color: #434242;
        font-size: 16px;
    }
    .item4b p:nth-child(2){
        color: #707070;
        font-size: 16px;
    }
    .item4b .browse-btn{
        background-color: #FFB600;
        color: #fff;
        border-radius: 4px;
        width: 100%;
    }
    .item5 p{
        color: #434242;
        font-size: 14px;
    }

    @media only screen and (max-width: 600px){
    .item1 p{
        font-size: 28px;
    }
    .item2{
        width: 90%;
    }
    .item2 .image{
        width: 18px;
        height: 18px;
    }
    .item3{
        width: 80%;
    }
    .item4{
    width: 90%;
    }
    .item4 .image{
        width: 60px;
        height: 60px;
    }

    }

</style>