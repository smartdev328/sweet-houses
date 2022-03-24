<template>
    <div class="editaddress">
        <div class="row mx-0 w-100">
            <div class="col-12 col-md-2 navigation">
                <div class="py-5">
                    <div class="">
                        <div class="logo-img mx-auto my-3">
                
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
                                <li class="my-3" 
                                :style="getclass('personalized-valuation')"
                                >
                                    <div class="icon">
                                        <img src="../../assets/image/icon/Group 13467.svg" class="w-100 h-100" alt="icon">
                                    </div>
                                    <p class="ml-3">Personalized Valuation</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-9">
                <div class="container my-5">
                    <div :class="tab_visible('home-info')" class="h-100">
                        <home-info @submitparent="submitparent"></home-info>
                    </div>
                    <div :class="tab_visible('contact-details')" class="h-100">
                        <contact-details @submitparent2="submitparent2"></contact-details>
                    </div>
                    <div :class="tab_visible('personalized-valuation')" class="h-100">
                        <personalized-valuation></personalized-valuation>
                    </div>
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
        channelitem:null
    }),
    methods:{
        getclass(tab) {
        if (tab == this.selected_menu) {
            return "color:#00A19B;font-weight:bold";
        }
    },
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
    submitparent2(item){
        this.selected_menu = "personalized-valuation"
        this.channelitem = item
    }
    }
}
</script>
<style scoped>
    .editaddress .navigation{
        background-color: #F8F5E4;
        height: 90vh;
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
    font-family: 'Roboto-Medium' , sans-serif !important;
    font-size: 20px;
    cursor: pointer;
    }
    .editaddress .navigation ul li .icon{
        width: 44px;
        height: 44px;
    }
</style>