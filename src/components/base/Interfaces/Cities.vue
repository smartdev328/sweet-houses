<template>
<div class="container">
      <div class="cities py-5">
            <div class="item1 text-center ">
                <p class="text-color-1 Roboto-Medium">Cities</p>
                <p class="Roboto-Regular">Community Guide</p>
                <p class="px-4 Roboto-Regular">Use the guide below to search homes for sale in Edmonton and surrounding communities. Each of these pages contains the active real estate listings for that area, updated every day. If you already know which communities you like, be sure to sign up for
                email alerts of new listings as soon as they hit the market -- it's fast, easy, automatic and FREE!</p>
            </div>
            <div class="item2 my-5">
                <div><p class="text-color-1 element1 Roboto-Regular">Featured Communities</p></div>
                <div class="element2 p-3">
                    <div class="pr-4" v-for="community in FeaturedCommunities" :key="community.id"><p class="pb-3 Roboto-Regular">{{community.name}}</p></div>
                </div>
            </div>

    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            FeaturedCommunities:[
        {name:'Beaumont'},
        {name:'Calgary'},
        {name:'Calmar'},
        {name:'Edmonton'},
        {name:'Camrose'},
        {name:'Devon'},

        {name:'Fort Saskatchewan'},
        {name:'Leduc'},
        {name:'Morinville'},
        {name:'Red Deer'},

        {name:'Spruce Grove'},
        {name:'Stony Plain'},
        {name:'Ponoka'},
        {name:'Sherwood Park'},

        {name:'St. Albert'},
        {name:'Wetaskiwin'},
            ]
        }
    }
}
</script>
<style scoped>
    .cities .item1 p:first-child{
        font-size: 32px;
    }
    .cities .item1 p{
        color: #707070;
        font-size: 18px;
    }
    .cities .item2 .element1{
        font-size: 24px;
    }
    .cities .item2 .element2{
    background: #F8F5E4;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 18px;
    grid-row-gap:4px;
    padding: 10px;
    }
    .cities .item2 .element2 p{
        color: #434242;
        border-bottom: 2px solid #C2C8C8;
    }
    .cities .item2 .element2 div:nth-of-type(13) p,
    .cities .item2 .element2 div:nth-of-type(14) p,
    .cities .item2 .element2 div:nth-of-type(15) p,
    .cities .item2 .element2 div:nth-of-type(16) p{
        border-bottom:0px
    }
    @media only screen and (max-width: 600px){
        .cities .item2 .element2{

    grid-template-columns: auto;
    grid-column-gap: 10px;
    grid-row-gap:4px;
    padding: 10px;
    }
    .cities .item2 .element2 div:nth-of-type(13) p,
    .cities .item2 .element2 div:nth-of-type(14) p,
    .cities .item2 .element2 div:nth-of-type(15) p,
    .cities .item2 .element2 div:nth-of-type(16) p{
        border-bottom: 2px solid #C2C8C8;
    }
    }
</style>