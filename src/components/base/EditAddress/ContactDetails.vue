<template>
    <div class="contact-details-form">
        <div class="row">
            <div class="col-8 mx-auto">
                    <div class="item1z p-4">
                        <div class="item1az text-center">
                            <p class="text-color-1 DMSerifRegular">How did you hear about us?</p>
                        </div>
                        <div class="item1bz row">
                            <div class="col-6 mx-auto" v-for="channel in socialchanels" :key="channel.id">
                                <div class="shadow-sm bg-white px-4 text-center element1z Roboto-Regular" @click="changechannel(channel.name)"><p>{{channel.name}}</p></div>
                            </div>
                        </div>
                        
                    </div>

            </div>

        </div>
    </div>
</template>
<script>
export default {
    data:() => ({
        socialchanels:[
            {name:'Facebook'},
            {name:'Instagram'},
            {name:'Google'},
            {name:'Linkedin'},
            {name:'Blog/ Website'},
            {name:'News (TV, web, print)'},
            {name:'Radio'},
            {name:'Letter / Postcard'},
            {name:'Friend'},
            {name:'Sweetly REALTOR®'},
            {name:'Billboard'},
            {name:'YouTube'},
            {name:'Other'}
        ]
    }),
    methods:{
        changechannel(item){
            this.$emit('submitparent2',item)
        }
    }
}
</script>
<style scoped>
    .contact-details-form .item1z{
        background: #EDF3F2;
    }
    .contact-details-form .item1z .item1az{
        font-size: 30px;
    }
    .contact-details-form .item1z .item1bz .element1z{
        line-height: 2;
        border-radius: 4px;
        cursor: pointer;
        color:#434242;
    }
    .contact-details-form .item1z .item1bz .element1z:focus{
        border: 1px solid #FFB600;
    }
</style>