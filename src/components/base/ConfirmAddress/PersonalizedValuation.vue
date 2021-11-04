<template>
    <div class="container my-4 per-validation">
        <div class="text-center item1">
            <p class="text-color-1 DMSerifRegular">User name, one last step to  your home valuation</p>
            <p cRoboto-Regular>Schedule your introduction call</p>
        </div>
        <div class="item2">
            <VueCtkDateTimePicker v-model="yourValue" buttonColor="#FFB600" color="#FFB600" minuteInterval="5" />
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
</style>