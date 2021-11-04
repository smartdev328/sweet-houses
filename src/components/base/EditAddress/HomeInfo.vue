<template>
    <div class="home-info-form">
        <div class="container w-100 mx-0">
            <p class="text-center text-color-1 DMSerifRegular">Enter your home address</p>
            <div class="row">
                <div class="col-10 col-md-6 mx-auto">
                    <form @submit="test()">
                        <div class="form-group">
                            <input type="text" class="form-control Roboto-Regular" v-model="obj1.streetaddress" placeholder="Street address">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control Roboto-Regular" v-model="obj1.Apt" placeholder="Apt, unit, or suite (if applicable)">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control Roboto-Regular" v-model="obj1.City" placeholder="City">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control Roboto-Regular" v-model="obj1.Prpvince" placeholder="Prpvince">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control Roboto-Regular" v-model="obj1.Postal" placeholder="Postal code">
                        </div>
                        <div class="text-center">
                            <button type="button" @click="test()" class="btn rounded Roboto-Regular py-2 px-3">Continue</button>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            obj1:{

            }
            

        }
    },
    methods:{
        test(){
            this.$emit('submitparent',this.obj1)
        }
    }
}
</script>
<style scoped>
    .home-info-form p{
        font-size: 32px;
    }
    .form-group input{
        border: 1px solid #AAAAAA;
        border-radius: 4px;
    }
    input{
        outline: none;
        box-shadow: none;
    }
    input:focus{
        outline: none;
        box-shadow: none;
    }
    .home-info-form  button{
        background: #FFB600;
        color: #fff;
    }
</style>