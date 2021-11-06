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
                    <form action="" class="container">
                        <div class="form-group row col-12 mx-auto">
                            <label for="hometype" class="col-sm-4 col-form-label text-left">Home type </label>
                            <div class="col-sm-8">
                            <input type="text" id="hometype" class="form-control-plaintext border bg-white">
                            </div>
                        </div>
                        <div class="form-group row col-12 mx-auto">
                            <label for="hometype" class="col-sm-4 col-form-label text-left">Storeys</label>
                            <div class="col-sm-8">
                            <input type="text" id="hometype" class="form-control-plaintext border bg-white">
                            </div>
                        </div>
                        <div class="form-group row col-12 mx-auto">
                            <label for="hometype" class="col-sm-5 col-form-label text-left">Bedrooms (above ground)</label>
                            <div class="col-sm-2">
                                <button class="btn minus-btn rounded-circle" type="button" @click="testnum--">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>-</span>
                                </button>
                            </div>
                            <div class="col-sm-3">
                            <input type="number" min="0" max="5" id="hometype" v-model.number="testnum" class="pl-2 form-control-plaintext border bg-white no-arrow">
                            </div>
                            <div class="col-sm-2">
                            <button class="btn plus-btn rounded-circle" type="button" @click="testnum++">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>+</span>
                                </button>
                            </div>
                        </div>
                        <div class="form-group row col-12 mx-auto">
                            <label for="hometype" class="col-sm-5 col-form-label text-left">Bedrooms (below ground)</label>
                            <div class="col-sm-2">
                                <button class="btn minus-btn rounded-circle" type="button" @click="testnum--">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>-</span>
                                </button>
                            </div>
                            <div class="col-sm-3">
                            <input type="number" min="0" max="5" id="hometype" v-model.number="testnum" class="pl-2 form-control-plaintext border bg-white no-arrow">
                            </div>
                            <div class="col-sm-2">
                            <button class="btn plus-btn rounded-circle" type="button" @click="testnum++">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>+</span>
                                </button>
                            </div>
                        </div>
                        <div class="form-group row col-12 mx-auto">
                            <label for="hometype" class="col-sm-5 col-form-label text-left">Full bathrooms</label>
                            <div class="col-sm-2">
                                <button class="btn minus-btn rounded-circle" type="button" @click="testnum--">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>-</span>
                                </button>
                            </div>
                            <div class="col-sm-3">
                            <input type="number" min="0" max="5" id="hometype" v-model.number="testnum" class="pl-2 form-control-plaintext border bg-white no-arrow">
                            </div>
                            <div class="col-sm-2">
                            <button class="btn plus-btn rounded-circle" type="button" @click="testnum++">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>+</span>
                                </button>
                            </div>
                        </div>
                        <div class="form-group row col-12 mx-auto">
                            <label for="hometype" class="col-sm-5 col-form-label text-left">Partial bathrooms</label>
                            <div class="col-sm-2">
                                <button class="btn minus-btn rounded-circle" type="button" @click="testnum--">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>-</span>
                                </button>
                            </div>
                            <div class="col-sm-3">
                            <input type="number" min="0" max="5" id="hometype" v-model.number="testnum" class="pl-2 form-control-plaintext border bg-white no-arrow">
                            </div>
                            <div class="col-sm-2">
                            <button class="btn plus-btn rounded-circle" type="button" @click="testnum++">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>+</span>
                                </button>
                            </div>
                        </div>
                        <div class="form-group row col-12 mx-auto">
                            <label for="hometype" class="col-sm-5 col-form-label text-left">Square feet (approx.)</label>
                            <div class="col-sm-2">
                                <button class="btn minus-btn rounded-circle" type="button" @click="testnum--">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>-</span>
                                </button>
                            </div>
                            <div class="col-sm-3">
                            <input type="number" min="0" max="5" id="hometype" v-model.number="testnum" class="pl-2 form-control-plaintext border bg-white no-arrow">
                            </div>
                            <div class="col-sm-2">
                            <button class="btn plus-btn rounded-circle" type="button" @click="testnum++">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>+</span>
                                </button>
                            </div>
                        </div>
                        <div class="form-group row col-12 mx-auto">
                        <label for="hometype" class="col-sm-5 col-form-label text-left">Parking spaces</label>
                            <div class="col-sm-2">
                                <button class="btn minus-btn rounded-circle" type="button" @click="testnum--">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>-</span>
                                </button>
                            </div>
                            <div class="col-sm-3">
                            <input type="number" min="0" max="5" id="hometype" v-model.number="testnum" class="pl-2 form-control-plaintext border bg-white no-arrow">
                            </div>
                            <div class="col-sm-2">
                            <button class="btn plus-btn rounded-circle" type="button" @click="testnum++">
                                <!--  <p class="mb-1 mt-0">-</p> -->
                                <span>+</span>
                                </button>
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

            },
            testnum:0
            

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
    input:focus{
        outline: none;
        border: 0;
    }
    .minus-btn,.plus-btn{
        width: 40px;
        height: 40px;
        display: flex;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1em;
        background: #fff !important;
        border: 1px solid #7070707b;
        color: #707070 !important;
    }
    .minus-btn span
    {
    font-size: 1.8em;
    margin-bottom: 4px;
    }
    .plus-btn span{
        font-size: 1.4em;
        margin-bottom: 4px;
    }
    input[type="number"]{
        border: 1px solid #7070707b !important;
    }
    .no-arrow {
	-moz-appearance: textfield;
    }
    .no-arrow::-webkit-inner-spin-button {
        display: none;
    }
    .no-arrow::-webkit-outer-spin-button,
    .no-arrow::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>