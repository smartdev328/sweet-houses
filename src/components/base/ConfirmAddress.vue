<template>
    <div class="editaddress mb-0 h-100">
        <div class="row mx-0 w-100 h-100">
            <div class="col-12 col-md-2  navigation">
                <div class="py-5">
                    <div class="">
                        <div class="logo-img mx-auto my-3" @click="routeHomepage()">
                            <img src="../../assets/image/logo.svg" class="w-100 h-100" alt="logo" />
                        </div>
                        <div>
                            <ul class="my-3">
                                <li class="my-3"
                                :style="getclass('home-info')">
                                    <div class="icon">
                                        <img src="../../assets/image/icon/Group 13465.svg" class="w-100 h-100" alt="icon">
                                    </div>
                                    <p class="ml-3">Home Info</p>
                                    
                                </li>
                                <li class="my-3" 
                                :style="getclass('contact-details')"
                                >
                                    <div class="icon">
                                        <img src="../../assets/image/icon/Group 13466.svg" class="w-100 h-100" alt="icon">
                                    </div>
                                    <p class="ml-3">Contact Details</p>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
              <div class="d-sm-only text-center Roboto-Regular pt-3">
                <p>{{selected_menu}}</p>
            </div>
            <div class="col-12 p-0 pl-md-1 col-md-10">
                <div class="my-5">
                    <div :class="tab_visible('home-info')" class="h-100">
                        <home-infoedit @submitparent="submitparent"
                        @gotoContactPage="gotoContactPage"
                        ></home-infoedit>
                    </div>
                    <div :class="tab_visible('contact-details')" class="h-100">
                        <contact-detailsedit
                        
                         
                        @openhomeinfopage="openhomeinfopage"
                        ></contact-detailsedit>
                    </div>
                    <!-- <div :class="tab_visible('personalized-valuation')" class="h-100">
                        <personalized-valuationedit
                         ></personalized-valuationedit>
                    </div> -->
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data :() =>({
        selected_menu:"home-info",
        obj1:{},
        channelitem:null,
      //  contactinput:{}
    }),
    methods:{
        getclass(tab) {
        if (tab == this.selected_menu) {
            return "color:#00A19B;font-weight:bold";
        }
    },
    openhomeinfopage(){
        this.selected_menu = "home-info"
    },
    // opencontactpage(){
    //     this.selected_menu = "contact-details"
    // },
    tab_visible(tab) {
        if (tab == this.selected_menu) {
            return "d-block";
        } else {
            return "d-none";
        }
    },
    submitparent(obj1){
        this.selected_menu = "contact-details"
        this.obj1 = obj1
    },
    // submitparent2(item){
    //     this.selected_menu = "personalized-valuation"
    //     this.contactinput = item
    // },
    gotoContactPage(){
        this.selected_menu = "contact-details"
    },
    routeHomepage(){
        this.$router.push({name:"Home"})
    }
    }
}
</script>
<style scoped>
    .editaddress .navigation{
        background-color: #F8F5E4;
        height: unset
    }
    .editaddress .navigation .logo-img{
        width: 140px;
        height: 50px;
    }
    ul li{
        list-style-type: none;
    }
    .editaddress .navigation ul li{
    display: flex;
    align-items: baseline;
    font-family: 'Roboto-Medium' , sans-serif  !important;
    font-size: 20px;
    cursor: pointer;
    }
    .editaddress .navigation ul li .icon{
        width: 44px;
        height: 44px;
    }
    .d-sm-only{
    display: none;
}
    @media only screen and (max-width: 600px){
        .editaddress .navigation{
            display: none;
        }
    .d-sm-only{
        display: block;
        border-bottom:1px solid #70707054 ;
        width: 100%;
        
    }
    .d-sm-only p{
        font-size: 18px !important;
        color: #FFB600;;
    }
    }
</style>