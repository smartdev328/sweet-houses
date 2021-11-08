<template>
    <div class="contact-details-form">
        <div class="row container w-100 mx-0">
                <div class="col-1 col-md-1 ml-auto">
                      <p class="h1" style="cursor:pointer"><b-icon icon="chevron-left"></b-icon></p>
                </div>
                <div class="col-10 col-md-5 mx-auto item11 text-center px-3 py-4">
                    <div class="item11a text-center">
                        <p class="text-color-1">How can we get in touch?</p>
                        <p>We need more details about your home's unique
features to prepare your personalized valuation.</p>
                    </div>
                    <form action="" class="container">
                        <div class="form-group mx-auto">
                            <div class="">
                            <input type="text" id="hometype" placeholder="Full name" class="form-control form-control-lg border bg-white shadow-sm">
                            </div>
                        </div>
                         <div class="form-group mx-auto">
                            <div class="">
                            <input type="text" id="hometype" placeholder="Email" class="form-control form-control-lg border bg-white shadow-sm">
                            </div>
                        </div>
                         <div class="form-group mx-auto">
                            <div class="">
                            <input type="text" id="hometype" placeholder="phone" class="form-control form-control-lg border bg-white shadow-sm">
                            </div>
                        </div>
                        <div class="form-group  mx-auto">
                            <button class="btn btn-continue w-100 px-4 d-flex justify-content-between align-items-baseline">
                                <p class="mb-0">Continue</p>
                                <p  class="h4 text-white mb-0"><b-icon icon="arrow-right"></b-icon></p>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="col-12 col-md-5 partb">
                    <div class="item1">
                        <p class="text-color-1">Why choose Sweetly?</p>
                    </div>
                    <div class="w-100 br-bg shadow my-4" style="height:2px;"></div>
                    <div class="item2">
                        <p class="text-color-2 Roboto-Regular">Sell without showings.</p>
                        <p class="my-4 text-color-2 Roboto-Regular">Choose Your Own Moving Date.</p>
                        <p class="text-color-2 Roboto-Regular">Five-star reviews on Google</p>
                    </div>
                </div>
            </div>

    </div>
</template>
<script>
export default {
    data:() => ({

    }),
    methods:{
     
    }
}
</script>
<style scoped>
    .contact-details-form .item11{
        background: #EDF3F2;
        border-radius: 6px;
    }
    .contact-details-form .item11 .item11a p:first-child{
        font-size: 26px;
        width: 50%;
        margin: auto;
    }
     .contact-details-form .item11 .item11a p{
         font-size: 16px;
         color: #434242;

     }
    .contact-details-form form .btn-continue{
        line-height: 1.7;
        background: #FFB600;
        color: #fff;
        border-radius: 4px;
        font-size: 1.2em;
    }
    .contact-details-form .btn-continue p:first-child{
        font-size: 24px
    }
     input:focus{
         outline: none;
         border: 0;
     }
     .contact-details-form .partb .item1 p{
         font-size: 26px;
     }
     .contact-details-form .partb .br-bg{
         height: 1px;
         background: #7070708c;;
     }
     .contact-details-form .partb .item2 p{
         font-size: 18px;
     }
</style>