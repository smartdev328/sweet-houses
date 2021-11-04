<template>
    <div>
        <footer>
            <div class="container py-4">
                <div class="row d-flex align-items-baseline">
                    <div class="col-12 col-md-3 col-lg-3 elementa">
                        <div class="logo-img">
                            <img src="@/assets/image/logo.svg" class="w-100 h-100" alt="logo" />
                        </div>
                        <div>
                            <p class="text-color-1 Roboto-Regular">Sell Without Showings</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 col-lg-3 elementb">
                        <p class="DMSerifRegular">NAVIGATION</p>
                         <div>
                        <ul class="Roboto-Regular">
                            <li><a href="">Sweet Sale</a></li>
                            <li><a href="">Swift Sale</a></li>
                            <li><a href="">Traditional Real Estate</a></li>
                            <li><a href="">Buyers</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    </div>
                     <div class="col-12 col-md-3 col-lg-3 elementb">
                        <p class="DMSerifRegular">Contact us</p>
                         <div>
                        <ul class="Roboto-Regular">
                            <li><a href="">
                                <div class="d-flex align-items-baseline">
                                 
                                    <div class="socialicon mr-2">
                                        <img src="@/assets/image/footer/facebook.svg" class="w-100 h-100 mr-2" alt="">
                                    </div>
                                    <p>Facebook</p>
                                </div>
                            </a></li>
                            <li><a href="">
                                <div class="d-flex align-items-baseline">
                                 
                                    <div class="socialicon mr-2">
                                        <img src="@/assets/image/footer/Instagram.svg" class="w-100 h-100 mr-2" alt="">
                                    </div>
                                    <p>Instagram</p>
                                </div>
                            </a></li>
                             <li><a href="">
                                <div class="d-flex align-items-baseline">
                                 
                                    <div class="socialicon mr-2">
                                        <img src="@/assets/image/footer/linkedin.svg" class="w-100 h-100 mr-2" alt="">
                                    </div>
                                    <p>Linkedin</p>
                                </div>
                            </a></li>
                             <li><a href="">
                                <div class="d-flex align-items-baseline">
                                 
                                    <div class="socialicon mr-2">
                                        <img src="@/assets/image/footer/youtube.svg" class="w-100 h-100 mr-2" alt="">
                                    </div>
                                    <p>Youtube</p>
                                </div>
                            </a></li>
                        </ul>
                    </div>
                    </div>
                     <div class="col-12 col-md-3 col-lg-3 elementb">
                        <p class="DMSerifRegular">POPULAR SEARCHES</p>
                         <div>
                        <ul class="Roboto-Regular">
                            <li><a href="">Featured Listings</a></li>
                            <li><a href="">Homes For Sale</a></li>
                            <li><a href="">Sold Data</a></li>
                        </ul>
                    </div>
                    </div>
                   
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    footer{
        background: #F3F3F3;
            
      /*   position: fixed;
        bottom: 0;
        left: 0;
        right: 0; */
    }
    footer .logo-img{
        width: 200px;
        height: 70px;
    }
    footer .elementa p{
        font-size: 18px;
    }
    footer .elementb p{
        color: #434242;
        font-size: 20px;
        text-transform: uppercase;
    }
    footer .elementb ul{
        line-height: 2;
    }
    footer .elementb ul li{
        list-style: none;
    }
    footer .elementb ul li a{
        color:#FFB600;
        text-decoration: none;
        cursor: pointer;
        font-family: 'Roboto-Regular' !important;
        font-size: 16px;
    }
    footer .elementb ul li .socialicon{
        width: 18px;
        height: 18px;
    }
     footer .elementb ul li a p{
         color:#FFB600;
        text-decoration: none;
        cursor: pointer;
        font-family: 'Roboto-Regular' !important;
        font-size: 16px;
        margin: 0;
     }
</style>