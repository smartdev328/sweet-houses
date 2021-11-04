<template>
    <div class="home-info-form2">
        <div class="container w-100 mx-0">
          <!--   <div>
            <p class="text-center text-color-1 DMSerifRegular">Is this the right address?</p>
            <p class="text-center Roboto-Regular">11520 149 St, Winnipeg, MB, Canada</p>
            <div class="row">
                <div class="col-10 col-md-6 mx-auto">
                    <div class="text-center">
                            <button type="button" @click="test()" class="btn rounded Roboto-Medium py-2 px-4">Confirm Address</button><br>
                            <a href="" class="btn item5 Roboto-Medium">Edit address</a>
                    </div>
                </div>
                <div class="col-12 mx-auto">
                    <address-map></address-map>
                </div>
            </div>
            </div> -->
            <div>
                <div class="col-10 col-md-8 mx-auto item11 text-center p-4">
                    <div class="item11a">
                        <p>Tell us about your home</p>
                    </div>
                    <form action="">
                        <div class="form-group row">
                            <label for="hometype" class="col-sm-4 col-form-label">Home type </label>
                            <div class="col-sm-8">
                            <input type="text" id="hometype" class="form-control-plaintext border" >
                            </div>
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
    .home-info-form2 p:first-child{
        font-size: 36px;
    }
    .home-info-form2 p:nth-child(2){
        font-size: 18px;
        color: #434242;
    }
    .home-info-form2  button{
        background: #FFB600;
        color: #fff;
        border-radius: 4px;
        font-size: 1.2em;
    }
    .home-info-form2 .item5{
        text-decoration: none;
        color: #00A19B;
        font-size: 1.2em;
    }
    .home-info-form2 .item11{
        background: #EDF3F2;
        border-radius: 6px;
    }
    .home-info-form2 .item11 .item11a{
        font-size: 20px;
    }
</style>