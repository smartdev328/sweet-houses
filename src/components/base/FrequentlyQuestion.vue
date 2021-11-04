<template>
    <div class="container">
        <div class="freqquestion my-5">
            <div class="item1 text-center Roboto-Medium">
                <p>Frequently Asked Questions</p>
            </div>
            <div class="my-2 my-md-5">
                <sale-question :items="faqs"></sale-question>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        faqs(){
            return this.$store.state.faqs
        }
    }
}
</script>
<style scoped>
.freqquestion .item1 p{
    font-size: 36px;
    color: #00A19B;
}

@media only screen and (max-width: 600px){

}


</style>
