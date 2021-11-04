<template>
    <div class="container mt-4 mb-1 per-validation">
        <div class="text-center item1">
            <p class="text-color-1 DMSerifRegular">User name, one last step to  your home valuation</p>
            <p cRoboto-Regular>Schedule your introduction call</p>
        </div>
        <div class="item2 mb-5">
            <VueCtkDateTimePicker v-model="yourValue" buttonColor="#FFB600" color="#FFB600" minuteInterval="5" />
        </div>
        <div class="item3 mt-5 mb-0">
            <p class="text-center DMSerifRegular text-color-1">What to expect on the call</p>
            <div class="gridcol">
                <div class="grid">
                    <div class="image mx-auto mb-3">
                        <img src="../../../assets/image/icon/g1.svg" class="w-100 h-100" alt="icon">
                    </div>
                    <p class="text-center">
                        Provide more details on your 
moving plans, and your dream
home if you are also buying.
                    </p>
                </div>
                <div class="grid">
                    <div class="image mx-auto mb-3">
                        <img src="../../../assets/image/icon/g2.svg" class="w-100 h-100" alt="icon">
                    </div>
                    <p class="text-center">
                    We'll share how Sweetly can
help you achieve your buying 
and selling goals.
                    </p>
                </div>
                <div class="grid">
                    <div class="image mx-auto mb-3">
                        <img src="../../../assets/image/icon/g3.svg" class="w-100 h-100" alt="icon">
                    </div>
                    <p class="text-center">
                        We'll ask some questions to 
help us match you with the
perfect Sweetly Agent.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:() =>({
        yourValue:null
    })
}
</script>
<style scoped>
    .per-validation .item1 p:first-child{
        font-size: 30px;
    }
    .per-validation .item1 p:nth-child(2){
        font-size: 14px;
        color: #434242;
    }
    .per-validation .item2{
        width: 60%;
        margin: auto;
    }
    .per-validation .item3 p:first-child{
        font-size: 18px;
    }
    .per-validation .gridcol{
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 34px;
    grid-row-gap: 10px;
    padding: 10px;
    }
    .per-validation .gridcol .grid .image{
        width: 60px;
        height: 60px;
    }
    .per-validation .gridcol .grid p{
        color: #434242;
    }
</style>