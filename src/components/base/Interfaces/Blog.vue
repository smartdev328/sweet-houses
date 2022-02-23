<template>
    <div>
        <div class="blog">
            <div class="container">
                <div class="my-5 py-2">
                    <div class="row">
                        <div class="col-12 col-md-8">
                            <div class="item1">
                                <p class="item1a text-color-1 Roboto-Medium">Selling Your Home</p>
                                <div class="image my-4">
                                    <img src="../../../assets/image/blog/hand.png" class="w-100 h-100" alt="image">
                                </div>
                                <p class="item1b text-color-1 Roboto-Medium">How Do I Know My Homes True Market Value Is Correct?</p>
                                <p class="item1c text-color-2 Roboto-Regular">News</p>
                                <p class="item1d text-color-1 Roboto-Regular">In a market flooded with so-called “instant buyer” programs where the buy-low/sell-high model is the norm, it can be hard to trust any service that claims to be beneficial to sellers. It seems like these models are designed to benefit companies’
                                bottom lines while leaving homeowners feeling like they’ve undervalued their home to make a quick sale.</p>
                                <a href="" class="btn Roboto-Regular px-0 mx-0">Read More</a>
                            </div>
                    <div class="item3">
                    <div class="row">
                        <div class="col-12  px-0 py-5" style="border-top: 2px solid #70707063;">
                            <p class="my-4 text-color-1 Roboto-Medium  mx-4 mx-md-0">Latest Articles</p>
                            <div class="element1 mx-4 mx-md-0" @click="opendetails">
                                <div class="d-flex align-items-center">
                                    <div class="col-12 col-md-6 px-0">
                                        <div class="image">
                                            <img src="/../assets/image/blog/blog1.png" class="w-100 h-100" alt="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 content">
                                        <p class="p-1 text-color-2 Roboto-Regular mb-0">Buying A Home</p>
                                        <p class="p-2 text-color-1 Roboto-Medium">Will Increasing Mortgage Rates Impact Home 
Prices?</p>
                                    </div>
                                </div>
                            </div>
                            <div class="element1 mx-4 mx-md-0" @click="opendetails">
                                <div class="d-flex align-items-center">
                                    <div class="col-12 col-md-6 px-0">
                                        <div class="image">
                                            <img src="../../../assets/image/blog/blog1.png" class="w-100 h-100" alt="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 content">
                                        <p class="p-1 text-color-2 Roboto-Regularmb-0">Buying A Home</p>
                                        <p class="p-2 text-color-1 Roboto-Medium">Will Increasing Mortgage Rates Impact Home 
Prices?</p>
                                    </div>
                                </div>
                            </div>
                            <div class="element1 mx-4 mx-md-0" @click="opendetails">
                                <div class="d-flex align-items-center">
                                    <div class="col-12 col-md-6 px-0">
                                        <div class="image">
                                            <img src="../../../assets/image/blog/blog1.png" class="w-100 h-100" alt="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 content">
                                        <p class="p-1 text-color-2 Roboto-Regular mb-0">Buying A Home</p>
                                        <p class="p-2 text-color-1 Roboto-Medium">Will Increasing Mortgage Rates Impact Home 
Prices?</p>
                                    </div>
                                </div>
                            </div>
                            <a href="" class="btn mx-5 mx-md-0 btn-more my-4 px-4 py-2 Roboto-Regular">See More</a>
                        </div>
                    </div>
                </div>
                        </div>
                        <div class="col-12 col-md-4 pt-4">
                            <div class="item6 px-4">
                                <div class="text-center text-color-1 Roboto-Regular item6a">
                                    <p>Popular Articles</p>
                                </div>
                                <div class="item6b">
                                    <div class="single-item Roboto-Regular">
                                        <p>News</p>
                                        <p class="text-color-1">Will Increasing Mortgage Rates Impact Home Prices?</p>
                                    </div>
                                    <div class="single-item Roboto-Regular">
                                        <p>News</p>
                                        <p class="text-color-1">Will Increasing Mortgage Rates Impact Home Prices?</p>
                                    </div>
                                    <div class="single-item Roboto-Regular">
                                        <p>News</p>
                                        <p class="text-color-1">Will Increasing Mortgage Rates Impact Home Prices?</p>
                                    </div>
                                    <div class="single-item Roboto-Regular">
                                        <p>News</p>
                                        <p class="text-color-1">Will Increasing Mortgage Rates Impact Home Prices?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        opendetails(){
            this.$router.push({name:"BlogDetails"})
            document.body.scrollTop = 0;
        }
    }
}
</script>
<style>
    .blog .item1 .item1a{
        font-size: 28px;
    }
    .blog .item1 .image{
        width: 100%;
        height: 300px;
    }
    .blog .item1 .image img{
        border-radius: 12px;
    }
    .blog .item1 .item1b{
        font-size: 24px;
    }
    .blog .item1 .item1c{
        font-size: 14px;
    }
    .blog .item1a .item1d{
        font-size: 18px;
    }
    .blog .item1 a{
        color: #FFB600;
        font-size: 18px;
    }
    .blog .item3 .element1{
        margin-bottom: 2em;
    }
    .blog .item3 .element1 div:first-child{
        flex-direction: row;
    }
    .blog .item3 .element1 image{
        width: 320px;
        height: 180px;
    }
    .blog .item3 .element1 .content .p-1{
        font-size: 16px;
    }
    .blog .item3 .element1 .content .p-2{
        font-size: 16px;
    }
    .blog .item3 .btn-more{
        border: 1px solid #AAAAAA;
        border-radius: 12px;
        color: #707070;
    }
    .blog .item3 .btn-more:hover{
        color: #FFB600;
        border: 1px solid #FFB600;
    }
    .blog .item6 .item6a {
        border-bottom: 2px solid #70707063;
    }
    .blog .item6 .item6b .single-item{
        padding-top: 12px;
        padding-bottom: 12px;
        border-bottom: 2px solid #70707063;
    }
    .blog .item6 .item6b .single-item p:first-child{
        font-size: 16px;
        color:#707070;
    }
    .blog .item6 .item6b .single-item p:last-child{
        font-size: 18px;
    }
    @media only screen and (max-width: 600px){
         .blog .item3 .element1 div:first-child{
        flex-direction: column;
    }
    }
</style>