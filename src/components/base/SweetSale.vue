<template>
    <div class="page1">
        <div class="bg-color-1 p-3 item1 DMSerifRegular">
                <div class="item1a text-center"><p class="text-color-1 DMSerifRegular">How It Works</p></div>
                <div class="row d-flex align-items-center item1b">
                    <div class="col-12 col-md-8"><p>We establish value by recent appraisal or comparison to other sales in your area.

You get two payments. Sweetly pays 75% of value on the moving day yo choose. 
Then (if needed) Sweetly invests up to $25,000 in upgrades that you approve- 
designed to increase the resale price. Well manage a professional MLS listing, and 
once re-sold you get the FULL balance of the highest sale price, less our fee Choose 
your moving day. Skip public showings and net the After Renovation Value from the 
comfort of your couch! </p></div>
                    <div class="col-12 col-md-4">
                        <iframe width="100%" height="100%" src="https://youtu.be/F8suslt7b6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="background:#EDF3F2;border-radius:8px" allowfullscreen></iframe>
                    </div>
                </div>
        </div>
        <div class="my-5 item2">
            <div class="text-center title text-color-1 DMSerifRegular"><p>Why Choose a Sweet Sale?</p></div>
            <div class="item2a d-flex justify-content-around  mx-auto">
                <div class="text-color-1 item2b DMSerifRegular">
                    <p @click="selected_part = 'traditionalpart'" class="mb-0">Traditional Listing With Sweetly</p>
                       <div :class="{ active:  selected_part == 'traditionalpart' }"></div>
                </div>
                  <div class="text-color-1 item2b DMSerifRegular">
                    <p @click="selected_part = 'Swiftpart'" class="mb-0">Sweet Sale With Sweetly</p>
                        <div :class="{ active:  selected_part == 'Swiftpart' }"></div>
                </div>
            </div>
            <div class="bg-color-1 px-4 py-5 item2c my-5" v-if="selected_part == 'Swiftpart'">
                    <div class="row mx-0">
                        <div class="col-12 col-md-5 position-relative">
                        <div class="p1">
                                <img src="../../assets/image/homepage/pic1.svg" class="w-100 h-100" alt="image">
                            </div>
                            <div class="p2">
                                <img src="../../assets/image/homepage/pic2.png"  class="w-100 h-100" alt="image">
                            </div> 
                        </div>
                        <div class="col-12 col-md-7">
                            <ul>
                                <li class="mb-2 Roboto-Regular">  <div class="icon mr-3">
                                        <img src="../../assets/image/homepage/iconli.svg"  class="w-100 h-100" alt="">
                                    </div> We'll make repairs after you move out to increase the sale price</li>
                                <li class="mb-2  Roboto-Regular"> <div class="icon mr-3">
                                        <img src="../../assets/image/homepage/iconli.svg"  class="w-100 h-100" alt="">
                                    </div> Get 75% of market value on the moveout day you choose
                                along with the full resale balance once we have resold 
                                you home</li>   
                                <li class="mb-2  Roboto-Regular"> <div class="icon mr-3">
                                        <img src="../../assets/image/homepage/iconli.svg"  class="w-100 h-100" alt="">
                                    </div>Skip all public showings</li>
                                <li class="mb-2  Roboto-Regular"> <div class="icon mr-3">
                                        <img src="../../assets/image/homepage/iconli.svg"  class="w-100 h-100" alt="">
                                    </div>Choose your own moving day</li>
                            </ul>
                        </div>
                    </div>
                    <div class="space-50"></div>
                    <div class="space-30"></div>
                    <div class="space-50"></div>
                    <div class="my-4 bg-white py-3 px-1 gridcontainer rounded">
                        <div class="gridcol px-3 text-center">
                            <p class="mx-1">Example Current Value</p>
                            <p>$400,000</p>
                        </div>
                        <div class="gridcol px-3 text-center">
                            <p class="mx-1">Example Improvement
Cost</p>
                            <p>$10,000</p>
                        </div>
                        <div class="gridcol px-3 text-center">
                            <p class="mx-1">Commission</p>
                            <span class="Roboto-Regular">(7%/3%)</span>
                            <p>$16,900</p>
                        </div>
                         <div class="gridcol px-3 text-center">
                            <p class="mx-1">Service Fee</p>
                            <span class="Roboto-Regular">(2%)</span>
                            <p>$8,600</p>
                        </div>
                        <div class="gridcol px-2 text-center">
                            <p class="mx-1">Likely Resale Price</p>
                            <p>$430,000</p>
                        </div>
                         <div class="gridcol px-3 text-center">
                            <p class="mx-1 mb-1 mb-md-3">Estimated NET</p>
                            <p>$394,500</p>
                        </div>
                    </div>
                    <div class="text-center  mx-auto lastitem">
                        <p class="text-color-1 font-robot">*These numbers are examples provided for educational purposes. Offer eligibility and price will vary.
When listing traditionally, market conditions and results will vary</p>
                    </div>
            </div>

               <div class="bg-color-1 px-4 py-5 item2c2 my-5" v-if="selected_part == 'traditionalpart'">
                    <div class="row mx-0">
                        <div class="col-12 col-md-5 position-relative">
                         <div class="p1">
                                <img src="../../assets/image/homepage/pic1.svg" class="w-100 h-100" alt="image">
                            </div>
                            <div class="p2">
                                <img src="../../assets/image/homepage/pic2.png" class="w-100 h-100" alt="image">
                            </div> 
                        </div>
                        <div class="col-12 col-md-7">
                            <ul>
                                <li class="mb-3 Roboto-Regular">  <div class="icon mr-3">
                                        <img src="../../assets/image/homepage/iconli.svg"  class="w-100 h-100" alt="">
                                    </div> List with Sweetly and get professional advice and options
to make good real estate decisions. </li>
                                <li class="mb-3  Roboto-Regular"> <div class="icon mr-3">
                                        <img src="../../assets/image/homepage/iconli.svg"  class="w-100 h-100" alt="">
                                    </div> Be professionally guided through a sale.</li>   
                                <li class="mb-3  Roboto-Regular"> <div class="icon mr-3">
                                        <img src="../../assets/image/homepage/iconli.svg"  class="w-100 h-100" alt="">
                                    </div>All showing booked with your approval.</li>
                                <li class="mb-3  Roboto-Regular"> <div class="icon mr-3">
                                        <img src="../../assets/image/homepage/iconli.svg"  class="w-100 h-100" alt="">
                                    </div>Professional help in negotiating with buyers.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="space-50"></div>
                    <div class="space-30"></div>
                    <div class="space-50"></div>
                    <div class="my-2 bg-white py-3 px-1 gridcontainer rounded">
                        <div class="gridcol px-3 text-center">
                            <p class="mx-1">Example Current Value</p>
                            <p>$390,000 to $410,000</p>
                        </div>
                        <div class="gridcol px-3 text-center">
                            <p class="mx-1">Estimated Seller 
Concession</p>
                            <p>1 - 3%</p>
                        </div>
                        <div class="gridcol px-3 text-center">
                            <p class="mx-1">Repairs</p>
                            <p>Based on buyers'
inspection</p>
                        </div>
                         <div class="gridcol px-3 text-center">
                            <p class="mx-1">Commission</p>
                            <span class="Roboto-Regular">(7%/3%)</span>
                            <p>$15,700-$16,300</p>
                        </div>
                        <div class="gridcol px-3 text-center">
                            <p class="mx-1">Estimated NET</p><br>
                            <p>$363,000 to $389,000</p>
                        </div>
                        
                    </div>
                    <div class="text-center  mx-auto lastitem">
                        <p class="text-color-1 Roboto-Regular">*These numbers are examples provided for educational purposes. Offer eligibility and price will vary.
When listing traditionally, market conditions and results will vary</p>
                    </div>
            </div>
        </div>

        <div class="mmy-2 my-md-5 item3">
            <div class="row align-items-center">
                <div class="col-12 col-md-6">
                    <p class="DMSerifRegular">You get MORE money from a sweet sale</p>
                    <ul>
                        <li>
                            <div class="icon mr-3">
                                <img src="../../assets/image/homepage/icon2.svg"  class="w-100 h-100" alt="">
                            </div> 
                        Sweetly makes the right improvements to  increase the re-sale price</li>
                        <li>  <div class="icon mr-3">
                                <img src="../../assets/image/homepage/icon2.svg"  class="w-100 h-100" alt="">
                            </div> We invest our money (up to $25,000) to improve 
the property - with your permission.</li>
                       <li>  <div class="icon mr-3">
                                <img src="../../assets/image/homepage/icon2.svg"  class="w-100 h-100" alt="">
                            </div> You get the full value of the re-sale price (even if 
over asking) less our hard costs for improvements 
and our fee.</li>
                    </ul>
                </div>
                <!-- <div class="col-12 col-md-1"></div> -->
                <div class="col-12 col-md-6 d-flex flex-row-reverse">
                     <div class="image">
                        <img src="../../assets/image/homepage/Component 80 – 1.svg" class="w-100 h-100" alt="">
                    </div> 
                </div>
            </div>
        </div>
          <div class="my-2 my-md-5 item4">
            <div class="row align-items-center">
                <div class="col-12 col-md-6 d-flex">
                    <div class="image">
                        <img src="../../assets/image/homepage/Component 81 – 1.svg" class="w-100 h-100" alt="">
                    </div>
                </div>
                <!-- <div class="col-12 col-md-1"></div> -->
                 <div class="col-12 col-md-6">
                    <p class="DMSerifRegular">Skip Public Showings</p>
                    <ul>
                        <li>
                            <div class="icon mr-3">
                                <img src="../../assets/image/homepage/icon2.svg"  class="w-100 h-100" alt="">
                            </div> 
                            With a Sweet Sale, the showing start after you've
moved out.</li>
                        <li>  <div class="icon mr-3">
                                <img src="../../assets/image/homepage/icon2.svg"  class="w-100 h-100" alt="">
                            </div>You choose the day. Sweetly buys your home on
your schedule.</li>
                       <li>  <div class="icon mr-3">
                                <img src="../../assets/image/homepage/icon2.svg"  class="w-100 h-100" alt="">
                            </div>Unlike a permanent buyer, we don't live there so
Sweetly takes the home whenever it works for you.</li>
                    </ul>
                </div>
            </div>
        </div>
         <div class="mmy-2 my-md-5 item5">
            <div class="row align-items-center">
                <div class="col-12 col-md-6">
                    <p class="DMSerifRegular">Choose your own moving day</p>
                    <ul>
                        <li>
                            <div class="icon mr-3">
                                <img src="../../assets/image/homepage/icon2.svg"  class="w-100 h-100" alt="">
                            </div> 
                        Select the moving day that work best for you,
aligned with whatever is next</li>
                        <li>  <div class="icon mr-3">
                                <img src="../../assets/image/homepage/icon2.svg"  class="w-100 h-100" alt="">
                            </div>changes to your moving day are no charge and 
hassle-free.</li>
                       <li>  <div class="icon mr-3">
                                <img src="../../assets/image/homepage/icon2.svg"  class="w-100 h-100" alt="">
                            </div>We sell your home vacant and the next owner can
conflicts with price.</li>
                    </ul>
                </div>
                <!-- <div class="col-12 col-md-1"></div> -->
                <div class="col-12 col-md-6 d-flex flex-row-reverse">
                    <div class="image">
                        <img src="../../assets/image/homepage/Component 82 – 1.svg" class="w-100 h-100" alt="">
                    </div> 
                </div>
            </div>
        </div>
        <div class="my-2 my-md-5 item6">
            <div class="row align-items-center">
                <div class="col-12 col-md-6 d-flex">
                    <div class="image">
                        <img  src="../../assets/image/homepage/Component 83 – 1.svg" class="w-100 h-100" alt="">
                    </div> 
                </div>
                <!-- <div class="col-12 col-md-1"></div> -->
                <div class="col-12 col-md-6">
                    <p class="DMSerifRegular">Certainty</p>
                    <ul>
                        <li>
                            <div class="icon mr-3">
                                <img src="../../assets/image/homepage/icon2.svg"  class="w-100 h-100" alt="">
                            </div> 
                            Sweetly offers are unconditional within days.</li>
                        <li>  <div class="icon mr-3">
                                <img src="../../assets/image/homepage/icon2.svg"  class="w-100 h-100" alt="">
                            </div>Buy your next home in confidence and avoid paying
more with cluttered 'subject-to-sale' contracts.</li>
                       <li>  <div class="icon mr-3">
                                <img src="../../assets/image/homepage/icon2.svg"  class="w-100 h-100" alt="">
                            </div>We buy single family homes valued at $200,000 to
$2,000,000 in any major Alberta market.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="my-2 my-md-5 item7">
            <div class="text-center text-color-1 mb-5 DMSerifRegular">
                <p>What Sweetly customers are saying!</p>
            </div>
            <div class="row align-items-center">
                <div class="col-12 col-md-6 px-3 px-md-0 pr-md-1">
                    <div class="h-300px">
                          <iframe width="100%" class="rounded" height="100%" src="https://www.youtube.com/embed/HBITrtY5DaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="background:#EDF3F2;border-radius:8px" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-12 col-md-6 px-3 px-md-0  pl-md-1 mt-4 mt-md-0">
                    <div class="h-300px">  <iframe width="100%" class="rounded" height="100%" src="https://www.youtube.com/embed/HBITrtY5DaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="background:#EDF3F2;border-radius:8px" allowfullscreen></iframe></div>
                </div>
            </div>
        </div>
        <div class="my-2 my-md-5 item11">
            <div class="item11a DMSerifRegular text-center">
                <p>Why Choose a Sweet Sale?</p>
            </div>
            <div class="item11b row p-0 mx-2">
                <div class="element1 p-0 col-12 col-md-6">
                    <!-- <p class="p1 DMSerifRegular">Sweet Sale with Sweetly</p> -->
                    <img src="../../assets/image/pica1.svg" class="w-100 h-100" alt="">
                </div>
                <div class="element2 p-0 col-12 col-md-6">
                     <img src="../../assets/image/picb1.svg" class="w-100 h-100" alt="">
                </div>
            </div>
        </div>
        <div class="my-2 my-md-5 item8">
            <div class="text-color-1 element1 mx-0 mx-md-5 text-center DMSerifRegular"><p class="">Compare Sweetly</p>
                <p class="Roboto-Regular">Only Sweetly assists with the entire selling and buying process by actually buying your current home on your schedule. The certainty of a sale for your
current home lets you make a more compelling offer on your next home without a condition-of- sale.</p>
            </div>
            <div class="element2 shadow px-4 table-responsive">
                <table class="w-100">
                    <tbody>
                        <tr>
                            <td class="DMSerifRegular">Benefit </td>
                            <td class="text-center DMSerifRegular">Sweetly</td>
                            <td class="text-center DMSerifRegular">Hot Air Balloon Brand</td>
                        </tr>
                        <tr>
                            <td class="Roboto-Regular">Skip public showings </td>
                            <td class="text-center">
                                <p class="h1"> <b-icon icon="check"  class="text-info"></b-icon></p>
                            </td>
                            <td class="text-center">
                                <p class="h1"> <b-icon icon="x"  class="text-danger"></b-icon></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="Roboto-Regular">Choose your own moving day</td>
                            <td class="text-center">
                                <p class="h1"> <b-icon icon="check"  class="text-info"></b-icon></p>
                            </td>
                            <td class="text-center">
                                <p class="Roboto-Regular">Not likely</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="Roboto-Regular">Up to $25,000 in improvements</td>
                            <td class="text-center">
                                <p class="h1"> <b-icon icon="check"  class="text-info"></b-icon></p>
                            </td>
                            <td class="text-center">
                                <p class="h1"> <b-icon icon="x"  class="text-danger"></b-icon></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="Roboto-Regular">Get 75% of market value on moveout day, balance on resale</td>
                            <td class="text-center">
                                <p class="h1"> <b-icon icon="check"  class="text-info"></b-icon></p>
                            </td>
                            <td class="text-center">
                                <p class="h1"> <b-icon icon="x"  class="text-danger"></b-icon></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="Roboto-Regular">Firm sale commitment within days</td>
                            <td class="text-center">
                                <p class="h1"> <b-icon icon="check"  class="text-info"></b-icon></p>
                            </td>
                            <td class="text-center">
                                <p class="Roboto-Regular">Hardly ever</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="Roboto-Regular">Commission**</td>
                            <td class="text-center">
                                <p class="Roboto-Regular"> 7/3</p>
                            </td>
                            <td class="text-center">
                                <p class="Roboto-Regular">$$$$</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="Roboto-Regular">Service Fee</td>
                            <td class="text-center">
                                <p class="Roboto-Regular">2%</p>
                            </td>
                            <td class="text-center">
                                <p class="Roboto-Regular">?</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="my-2 my-md-5 item12">
            <google-review></google-review>
        </div>
            <div class="my-2 my-md-5 element4">
                <p class="text-center text-color-1 DMSerifRegular">Sweet Sale Questions and Answers</p>
            </div>
            <div class="my-2 my-md-5 element5">
                <sale-question :items="sweetsalefags"></sale-question>
            </div>
            <div class="my-2 my-md-5 w-100 text-center element6">
                <a  @click="openfaqspage"  class="btn  py-2 px-5 Roboto-Regula">View All FAQ's</a>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            selected_part:"traditionalpart"
        }
    },
    computed:{
        sweetsalefags(){
            return this.$store.state.sweetsalefags
        }
    },
    methods:{
        openfaqspage(){
            this.$router.push({name:'FrequentlyQuestion'});
            window.scrollTo(0,0)
        }
    }
}
</script>

<style scoped>
    .page1 .item1 .item1a p{
        font-size: 36px;
    }
    .page1 .item1 .item1b p{
    color:#434242;
    font-size: 18px;
    }
    .page1 .item2 .title p{
        font-size: 36px;
        font-weight: 600;
    }
    .page1 .item2 .item2a{
        width: 75%;
    }
    .page1 .item2 .item2a .item2b{
        font-size: 30px;
        cursor: pointer;
        font-weight: bold;
    }
    .page1 .item2 .item2a .item2b .active{
    background: rgb(255, 182, 0);margin-bottom: 0px;    width: 100%;  border-radius: 20px;height: 5px;
    }
    ul li{
        list-style-type: none;
        display: flex;
        font-size: 20px;
    }
    .item2c ul li .icon,
    .item2c2 ul li .icon{
        width: 24px;
        height: 24px;
        max-width: 24px;
        min-width: 24px;
    }
    .item2c .p1 , .item2c2 .p1{
    position: absolute;
    z-index: 10;
    left: 0;
    top: -2em;
    width: 253px;
    height: 302px;
    }
    .item2c .p2,
    .item2c2 .p2{
    position: absolute;
    z-index: 20;
    right: 0;
    top: 2em;
    width: 253px;
    height: 302px;
    }
    .item2c .gridcontainer,
    .item2c2 .gridcontainer{
        display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    grid-gap: 10px;
    padding: 10px;
    }
    .item2c .gridcontainer .gridcol,
    .item2c2 .gridcontainer .gridcol
    {
        border-right: 1px solid #707070;
        position: relative;
        height: 94px;
    }
    .item2c .gridcontainer .gridcol:last-child,
    .item2c2 .gridcontainer .gridcol:last-child{
        border-right: 0;
    }
    .item2c .gridcontainer .gridcol p:first-child,
    .item2c2 .gridcontainer .gridcol p:first-child
    {
        font-family: 'Roboto-Regular' , sans-serif  !important;
        font-size: 20px;
    }
    .item2c .gridcontainer .gridcol p,
    .item2c2 .gridcontainer .gridcol p{
        font-family: 'Roboto-Medium' , sans-serif  !important;
        color: #232323;
        font-size: 17px;
    /* position: absolute;
    left: 25%;
    right: 25%;
    top: 75%; */
    }
    .item2c .lastitem,
    .item2c2 .lastitem{
        width: 60%;
        margin-top: unset;}
    .item2c .lastitem p,
    .item2c2 .lastitem p{
        font-size: 14px;
        
    }
    .page1 .item3 p ,
    .page1 .item5 p{
        font-size: 36px;
        width: 80%;
        font-weight: 600;
    }
    .page1 .item4 p ,
    .page1 .item6 p
    {
        font-size: 36px;
        width: 80%;
        font-weight: 600;
    }
    .page1 .item3 ul li,
    .page1 .item4 ul li,
    .page1 .item5 ul li,
    .page1 .item6 ul li,
    .page1 .item3 ul li{
        margin-bottom: 1em;
        font-family: 'Roboto-Regular' , sans-serif  !important;
    }
    .page1 .item3 ul li .icon ,
    .page1 .item5 ul li .icon{
        width: 18px;
        height: 18px;
        max-width: 18px;
        min-width: 18px;
    }
    .page1 .item4 ul li .icon,
    .page1 .item6 ul li .icon{
        width: 18px;
        height: 18px;
        max-width: 18px;
        min-width: 18px;
    }
    .page1 .item3 .image ,
    .page1 .item5 .image{
        width: 500px;
        height: 380px;
    }
    .page1 .item4 .image,
    .page1 .item6 .image{
        width: 500px;
        height: 380px;
    }
    .page1 .item7 .h-300px{
        height: 300px;
    }
    .page1 .item7 p{
        font-size: 38px;
        font-weight: 600;
    }
    .page1 .item8 .element1 p:first-child{
        font-size: 38px;
        font-weight: 600;
    }
    .page1 .item8 .element1 p:last-child{
        font-size: 16px;
    }
    .page1 .item8 .element2 table{
        padding: 8px 3px;
    }
    .page1 .item8 .element2 table tbody tr{
        padding: 12px 20px;
        font-size: 18px;
    }
    .page1 .item8 .element2 table tbody tr td:nth-child(2){
        background: #EDF3F2;
        padding: 5px 30px;
    }
    .page1 .item8 .element2 table tbody tr td:first-child{
        padding: 5px 20px;
    }
    .page1 .item8 .element2 table tbody tr:first-child td
    {
        padding: 24px 20px 8px;
        font-size:24px;
        color:#232323;
    }
    .page1 .item8 .element2 table tbody tr:last-child td{
        padding: 24px 20px 8px;
        color:#232323;
    }
    .page1 .item8 .element2 table tbody tr:first-child td:nth-child(2){
        color: #FFB600;
        font-size: 26px !important;
    }
    .page1 .item8 .element2 table tbody tr td:nth-child(2) .h1,
    .page1 .item8 .element2 table tbody tr td:nth-child(2) .h1{
        font-size: 2.8em !important;
    }
    .page1 .item8 .element2 table tbody tr:nth-child(7) td:nth-child(2),
    .page1 .item8 .element2 table tbody tr:nth-child(8) td:nth-child(2){
        font-size: 16px !important;
    }
    .page1 .item8 .element4{
        font-size: 38px;
        font-weight: 600;
    }
    .page1 .item8 .element6 a{
        border-radius: 8px;
        border: 1px solid #AAAAAA;
        color: #707070;
        font-family: "Roboto", sans-serif;
        font-size: 18px;
    }
        .page1 .item8 .element6 a:hover{
        color: #FFB600;
        border: 1px solid #FFB600;
    }
      .page1 .item2c2 ul{
            margin-top: unset;
    }
    .page1 .item2c  ul{
         margin-top: unset;
    }
    .page1 .item11 .item11a{
        font-size: 36px;
        font-weight: 600;
    }
    .page1 .item11 .item11b{
        border: 2px solid;
        background: rgb(229, 245, 244);
    }
    .page1 .item11 .item11b .element1{
            background: rgb(229, 245, 244);
            height: -webkit-fill-available;
              
    }
     .page1 .item11 .item11b .element1 .p1,
     .page1 .item11 .item11b .element2 .p1
     {
         font-size: 38px;
         font-weight: 600;
     }
    @media only screen and (max-width: 600px){
        .item2c .gridcontainer,
    .item2c2 .gridcontainer{
        display: grid;
    grid-template-columns: auto;}
    .item2c .gridcontainer .gridcol,
    .item2c2 .gridcontainer .gridcol{
        border-right: 0;
        border-bottom: 1px solid #707070;
    }
    .page1 .item2 .item2a{
        width:100%;
    }
    .page1 .item2 .title p{
        font-size: 20px;
    }
    .page1 .item2 .item2a .item2b{
        font-size: 12px;
    }
    .page1 .item2c2 ul{
            margin-top: 16em;
    }
    .page1 .item2c  ul{
       margin-top: 16em; 
    }
    .page1 ul li{
        font-size: 16px;
    }
    .item2c .lastitem,
    .item2c2 .lastitem{
        width: 90%;
        margin-top: 1.5rem;}
    .page1 .item3 p ,
    .page1 .item5 p{
        width: 100%;
        font-size: 28px;
        font-weight: 600;
    }
    .page1 .item4 p ,
    .page1 .item6 p{
        font-size:28px;
        width: 100%;
        font-weight: 600;
    }
    .item2c .p1 , .item2c2 .p1{
    position: absolute;
    z-index: 10;
    left: 0;
    top: -2em;
    width: 194px;
    height: 194px;
    }
    .item2c .p2,
    .item2c2 .p2{
    position: absolute;
    z-index: 20;
    right: 0;
    top: 2em;
    width: 194px;
    height: 194px;
    }
    .page1 .item7 p{
        font-size: 26px;
    }
    .page1 .item11 .item11a{
        font-size: 32px;
    }
    .page1 .item8 .element4{
        font-size: 32px;
    }
    }

</style>
