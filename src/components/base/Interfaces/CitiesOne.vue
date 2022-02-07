<template>
    <div class="cities–1">
        <div class="container">
            <div class="my-5">
                <div class="item1 text-center text-color-1 Roboto-Medium">
                    <p>Edmonton Neighborhoods List</p>
                </div>
                <div class="item2 my-5 Roboto-Regular">
                <div><p class="text-color-1 element1">Central Edmonton</p></div>
                <div class="element2 p-3">
                    <div class="pr-4"><p class="pb-3">Boyle Street</p></div>
                    <div class="pr-4"><p class="pb-3">Central Edmonton</p></div>
                    <div class="pr-4"><p class="pb-3">Central McDougall</p></div>
                    <div class="pr-4"><p class="pb-3">Downtown Edmonton</p></div>
                    <div class="pr-4"><p class="pb-3 border-bottom-0">McCauley Oliver</p></div>
                    <div class="pr-4"><p class="pb-3 border-bottom-0">Riverdale Rossdale</p></div>
                </div>
            </div>
            <div class="item2 my-5" v-for="item in items" :key="item.id">
                <div><p class="text-color-1 element1 Roboto-Regular">{{item.title}}</p></div>
                <div class="element2 p-3">
                    <div class="pr-4" v-for="community in  item.communities" :key="community.id"><p class="pb-3 Roboto-Regular">{{community.name}}</p></div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            items:[
                {title:'Clareview Campus & Area',
                communities:[
                    {name:'Abbottsfield'},{name:'Bannerman'},{name:'Beacon Heights'},{name:'Bellevue'},
                    {name:'Belmont'},{name:'Belvedere'},{name:'Bergman'},{name:'Beverly Heights'},
                    {name:'Canon Ridge'},{name:'Clareview'},{name:'Clareview Town Centre'},{name:'Cromdale'},
                    {name:'Fraser'},{name:'Hairsine'},{name:'Highlands'},{name:'Homesteader'},
                ]
                },
                {title:'Clareview Campus & Area',
                communities:[
                    {name:'Abbottsfield'},{name:'Bannerman'},{name:'Beacon Heights'},{name:'Bellevue'},
                    {name:'Belmont'},{name:'Belvedere'},{name:'Bergman'},{name:'Beverly Heights'},
                    {name:'Canon Ridge'},{name:'Clareview'},{name:'Clareview Town Centre'},{name:'Cromdale'},
                    {name:'Fraser'},{name:'Hairsine'},{name:'Highlands'},{name:'Homesteader'},
                ]
                },
                {title:'Clareview Campus & Area',
                communities:[
                    {name:'Abbottsfield'},{name:'Bannerman'},{name:'Beacon Heights'},{name:'Bellevue'},
                    {name:'Belmont'},{name:'Belvedere'},{name:'Bergman'},{name:'Beverly Heights'},
                    {name:'Canon Ridge'},{name:'Clareview'},{name:'Clareview Town Centre'},{name:'Cromdale'},
                    {name:'Fraser'},{name:'Hairsine'},{name:'Highlands'},{name:'Homesteader'},
                ]
                },
                
            ]
        }
    }
}
</script>
<style scoped>
    .cities–1 .item1 p{
        font-size: 28px;
    }
    .cities–1 .item2 .element1{
        font-size: 24px;
    }
    .cities–1 .item2 .element2{
    background: #F8F5E4;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 18px;
    grid-row-gap:4px;
    padding: 10px;
    }
    .cities–1 .item2 .element2 p{
        color: #434242;
        border-bottom: 2px solid #C2C8C8;
    }
    .cities–1 .item2 .element2 div:nth-of-type(13) p,
    .cities–1 .item2 .element2 div:nth-of-type(14) p,
    .cities–1 .item2 .element2 div:nth-of-type(15) p,
    .cities–1 .item2 .element2 div:nth-of-type(16) p{
        border-bottom:0px
    }

    @media only screen and (max-width:600px) {
        .cities–1 .item1 p{
            font-size: 20px;
        }
    .cities–1 .item2 .element2{
    display: grid;
    grid-template-columns: auto;
    grid-column-gap: 10px;
    }
    .cities–1 .item2 .element2 div:nth-of-type(13) p,
    .cities–1 .item2 .element2 div:nth-of-type(14) p,
    .cities–1 .item2 .element2 div:nth-of-type(15) p,
    .cities–1 .item2 .element2 div:nth-of-type(16) p{
      border-bottom: 2px solid #C2C8C8;
    }

    }
</style>