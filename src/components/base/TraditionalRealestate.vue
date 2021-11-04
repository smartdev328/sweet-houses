<template>
    <div class="page4">
        <div class="item1 container text-center Roboto-Regular text-color-1">
            <p>Sweetly Real Estate Is A Full-Service Real Estate Brokerage.  Our Experienced REALTORS® Have Years Of Experience And Are 
Award-Winning Industry Leaders. Along With Our Innovative Sweet Sale And Swift Sale Products, We Also Provide Traditional 
Listing Services To Anyone Who Wants To Try To Sell Their Home The Traditional Way. However, Our Approach And Services 
Go Above And Beyond The Industry Standards.  Here Is A Summary Of What's Available To Our Traditional Home Sellers.</p>
        </div>
        <div class="item2">
            <div class="container">
                <div class="px-5 py-3">
                    <div class="text-center  text-color-1 item2a"><p class="Roboto-Medium">Expert Agents</p></div>
                    <div class="text-center  text-color-1 mx-auto item2b"><p class="Roboto-Regular">We Are An Independent Brokerage So We Have No Red-Tape When It Comes To Creativity 
With Marketing And Promoting Our Listings, And Flexibility With Our Fee. When We Have 
A New Idea To Better Serve Our Clients, We Can Implement It Immediately. </p></div>
                    <div class="item2c">
                            <div class="gridcol" v-for="agent in expertagents" :key="agent.id">
                                <div class="image">
                                    <img :src="agent.image"  class="w-100 h-100" alt="agent image">
                                </div>
                                <div class="text-center conent-info">
                                    <p class="name text-color-1 mb-2 Roboto-Medium">{{agent.name}}</p>
                                    <p class="position mb-2 Roboto-Regular">{{agent.position}}</p>
                                    <a  @click="openprofile(agent)" class="btn leaen-more">
                                        <p class="Roboto-Regular">Learn More</p>
                                        <div class="icon-arrow">
                                            <img src="../../assets/image/homepage/team/Right.svg" class="ml-3" alt="">
                                        </div>
                                    </a>
                                </div>
                            </div>
                    </div>
                    <div class="my-2 my-md-5 w-100 text-center element6">
                                <a href="" class="btn  py-2 px-5 Roboto-Regular">View All Agents</a>
                            </div>
                </div>
            </div>
        </div>
        <div class="item3 container my-5">
            <div class="text-center text-color-1">
                <p class="-p1 Roboto-Medium">Systems</p>
                <p class="-p2 Roboto-Regular">
                    We are systems-oriented, and everyone has a role. Our systems are ever-evolving to keep up with new trends in marketing and social media. Sweetly has a full-time marketing division and a full-time listing coordinator. By hiring the right personnel to excel at their positions this enables our REALTORS® to spend more time and energy to provide excellent customer-focused service to our clients.
                </p><br>
                <p class="-p3 Roboto-Regular">Collectively, Sweetly offers a whole team of professionals dedicated to the successful sale of your home.</p>
            </div>
            <div class="my-3">
                <div class="item3c px-2 px-md-4">
                    <div class="col-item">
                        <div class="image">
                            <img src="../../assets/image/homepage/house-before.svg"  class="w-100 h-100" alt="image">
                        </div>
                    </div>
                      <div class="col-item">
                        <div class="image">
                            <img src="../../assets/image/homepage/house-after.svg" class="w-100 h-100" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item4">
            <div class="container">
                <div class="py-5">
                    <div class="text-color-1 text-center Roboto-Regular">
                        <p class="Roboto-Medium">Marketing & Exposure</p>
                        <p>Professional Photography – We have recruited the best photographers in the city as part of our Sweetly team!  But before we rush out to take photos, we need to ensure your home is well-presented.  
                            We have an interior designer who provides a one-hour consultation to rearrange furniture, artwork and décor so 
                            your home looks its best!  You only get one chance to make a first impression, so let us help you maximize the “wow” 
                            factor when buyers open the door!  If the home is vacant, our designer can provide beautiful furnishings to stage your home,
                            or we can send vacant photos for virtual staging to help a buyer "see" what artwork, plants and furnishings could do to 
                            finish the space. </p><br>
                            <p>RMS Measurements – All of our homes are professionally measured as per the standards 
                                set forth by the Real Estate Council of Alberta. </p><br>
                            <p>Marketing - Once your property is measured and photographed, our marketing team gets to work! </p>
                            <p>1. We design high-quality brochures, along with our “Sweet Sheet” educating buyers on the renovations,
                                benefits and location of your home.</p>
                            <p>2. We order and install custom wall decals pointing out all of the unique (or hard to see) features and benefits as they walk through the home,
                                drawing their attention to all the ownership benefits of your home.</p>
                            <p>3. Sweetly creates a unique website for your listing.  We share it on our social media sites such as Facebook + Instagram stories, posts and paid ads; Realtor.ca, 
                                and all 3rd party real estate sites to give you maximum exposure.</p>
                            <p>4. Your listing will appear on all member websites associated with the Edmonton Real Estate board and affiliates of Realtor.ca.</p><br>
                            <p>The goal of our marketing is to educate buyers and their REALTORS® on the benefits of ownership, any recent renovations, and unique features of your home. We want to showcase why your home is more special and better than the house that is for sale down the road.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="item5">
            <div class="container">
                <div class="py-5">
                    <div class="text-center text-color-1">
                        <p class="Roboto-Medium">Showings</p>
                        <p class="Roboto-Regular">While we understand that allowing showings on your home to prospective buyers can be difficult, we work with you to make it as stress-free as possible.  If there are times your family has in-house commitments such as piano lessons or tutors, we can block those times out so buyers do not have the option to request showings at undesirable times.  We provide you with an app for your smartphone which lets you control the time and date for the showings and offers an easy schedule for you to refer to for scheduling.  We never publish your name or phone number, while ensuring that the only showings on the home must be approved by you.
                            We will provide showing feedback as soon as it is available.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="item6">
            <div class="container">
                <div class="py-5">
                    <div class="text-color-1 text-center">
                        <p class="Roboto-Medium">Professional Advice & Guidance</p>
                        <p class="Roboto-Regular">We offer professional and timely advice.  Based on market activity and buyer feedback we can provide you with the information you’ll need to make the best decisions for your unique situation.  We have a team of contractors available to make any necessary improvements to obtain the maximum price for your home.  When an offer comes in, you can count on us to be great 
                            communicators and excellent negotiators, protecting your best interests at all times. </p><br><br>
                        <p class="Roboto-Regular">REALTOR.Ca Websites & Apps (Last 7 Days: 266 Views On 4 Sites)</p>
                        <div class="row">
                            <div class="col-12 col-md-6 Roboto-Medium">
                                <p class="text-left pl-5 ml-5">Views By Websites & Apps</p>
                                <p class="text-left pl-5 ml-5">Last 7 Days</p>
                                <div class="d-flex align-items-center justify-content-around element12">
                                    <div class="image">
                                        <img src="../../assets/image/homepage/Piechart.svg" class="w-100 h-100" alt="chart">
                                    </div>
                                    <div>
                                        <div class="d-flex align-items-baseline"> 
                                            <span class="red-dot mr-3"></span>
                                            <p>REALTOR.Ca</p>
                                        </div>
                                        <div class="d-flex align-items-baseline"> 
                                            <span class="dot-2 mr-3"></span>
                                            <p>iPhone REALTOR.Ca</p>
                                        </div>
                                        <div class="d-flex align-items-baseline"> 
                                            <span class="dot-3 mr-3"></span>
                                            <p>Android REALTOR.Ca</p>
                                        </div>
                                        <div class="d-flex align-items-baseline"> 
                                            <span class="dot-4 mr-3"></span>
                                            <p> iPad REALTOR.Ca</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 Roboto-Medium">
                                <p class="text-left pl-5 ml-5">Views By Websites & Apps</p>
                                <p class="text-left pl-5 ml-5">Last 7 Days</p>
                                <div class="">
                                   <!--  <div class="image">
                                        <img src="../../assets/image/homepage/Rectangle3928.svg" alt="">
                                    </div> -->
                                    <apexchart width="90%" type="bar" :options="chartOptions" :series="series"></apexchart>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="item7">
            <div class="container">
                <div class="py-5">
                    <div class="text-center text-color-1">
                        <p class="Roboto-Medium">Weekly Market Reports</p>
                        <p class="Roboto-Regular">While your home is for sale, we send you a weekly report of new listings, recent sales,
                            and all listings which expire in your neighbourhood market.  If you drive home from work and see a sold sign on another property, we want you to know how much it sold for. Together we will interpret this data to ensure you are the next one on the block to sell.  The best way to be a seller is to put yourself in the shoes 
                            of a buyer and present the best value to the marketplace.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="item8">
            <div class="container">
                <div class="py-5">
                    <div class="text-center text-color-1">
                        <p class="Roboto-Medium">Flexibility</p>
                        <p class="Roboto-Regular">You can start out with a traditional listing service and at any time have the freedom to cancel and switch to
                        our Sweet Sale or Swift Sale Program.  We can also offer potential buyers a "Sweet Sale" to purchase their existing home if they have to sell it before buying yours. This eliminates the "Sale of Buyer's Home condition"
                        and the uncertainty that goes along with it. </p>
                        <p class="Roboto-Regular">At Sweetly Real Estate, we believe in providing the best possible customer experience, and we are here for you!  Please reach out for a personal consultation. </p>
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
            expertagents:[
                {name:"Ed Deprato",phone:'(780) 499-2851',position:"Marketing & Media",image:require('../../assets/image/homepage/team/Ed.svg'),
            details:`
            <p>Ed DePrato is the founder and co-owner of Sweetly, as well as a licensed broker and REALTOR® since 2001. Consistently a top-producing agent in the Edmonton area, Ed has extensive knowledge about real estate, including buying, selling, developing, and investing in commercial and residential properties. His philosophy is to provide top-quality customer service in all aspects of his work as a REALTOR® and offer modern solutions to clients as an industry-leading innovator. Using his expertise as an investor and developer, Ed launched Sweetly, a full service real estate brokerage, in September 2019 and has already led the company to a remarkable 4% market share in Edmonton. He has recently presented seminars on (downsizing, etc) and is always looking for ways to innovate the real estate industry.</p>
            `
        },
        {name:"Kelly Grant",phone:'(780) 242-2469',position:"REALTOR®",image:require('../../assets/image/homepage/team/Kelly.svg'),
            details:`
            <p>A licensed REALTOR® for over 15 years, Kelly Grant is an award-winning Edmonton real estate agent and co-owner of Sweetly. Kelly brings professional experience in financing, mortgages, and renovations to the Sweetly team, as well as certification as a Seniors Real Estate Specialist. Since helping establish Sweetly in 2019, Kelly has built a robust, successful business with a team of dedicated, well-informed agents. Over her wide-ranging career in the industry, Kelly has provided above-and-beyond service to buyers and sellers in the Edmonton area, as well as expert advice to her devoted clientele.</p>
            `
        },
        {name:"Aidan Woodfine",phone:'(780) 264-1234',position:"REALTOR®",image:require('../../assets/image/homepage/team/Aidan.svg'),
            details:`
                <p>Since becoming a licensed REALTOR® in 2013, Aidan Woodfine has served the Edmonton area with a systematic approach to real estate. With years of experience in the real estate business along with his marketing diploma from NAIT, he is now a resourceful co-owner of Sweetly and a consistently top-producing agent in Edmonton.</p>
                <p>Aidan offers enthusiastic dedication to his clients, embracing efficiency and modern technology for the best results when selling and buying a home. Aidan provides expert advice and exceptional, innovative service with cutting-edge knowledge of industry trends. Aidan’s specialty is value-driven buyers and sellers, especially newcomers to the city and buyers looking for unique ways to experience unfamiliar neighbourhoods.</p>
            `},
            {name:"Maria Garces",phone:'(780) 965-2057',position:"Listings Coordinator",image:require('../../assets/image/homepage/team/Maria.svg'),
        details:`
            <p>I was born in Edmonton, to parents from rural backgrounds and lived within blocks of the original Fort Edmonton and the Legislature building.</p>
            <p>My father was a building contractor, and I spent my preschool years with my dad at houses he was building. I learned about the housing industry, and as I got older became interested in the operation of the family business and eventually decided to become a Real Estate Professional. My oldest son followed in the same industry direction and is now a Real Estate Appraiser.</p>
            <p>When I had decided to become a Real Estate Professional, I originally started with Metro City Realty in June of 1995. I have enjoyed my work as a Realtor and have acquired considerable amounts of my own real estate during the time. I’m excited for my move to “Sweetly” as I know it will offer myself and my client’s new options and added benefits in the purchase and sale of their homes.</p>
        `}
            ],
              chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
           colors: ['#FFB600'],
           dataLabels: {
               enabled: false,
},
          xaxis: {
            categories: ['Sep 22', 'Sep 23', 'Sep 24', 'Sep 25', 'Sep 26', 'Sep 27', 'Sep 28', 'Sep 29'],
            labels:{
                style:{
                    colors:['#707070','#707070','#707070','#707070','#707070','#707070','#707070','#707070']
                }
            }
          },
       
        },
        series: [{
          name: 'series-1',
          data: [40,35,42,20,45,35,27,20],
         labels:{
                style:{
                    colors:['#707070','#707070','#707070','#707070','#707070','#707070','#707070','#707070']
                }
            }
        }]
        }
    },
    methods:{
        openprofile(agent){
            this.$store.commit('setagent',agent)
            this.$router.push('/agent-profile/' + agent.name.replace(/\s+/g, '-')) 
            window.scrollTo(0,0); 
        }
    }
}
</script>

<style>
    .page4 .item2{
        background-color: #EDF3F2;
    }
    .page4 .item2 .item2a{
        font-size: 30px;
    }
    .page4 .item2 .item2b{
        width: 75%;
        line-height: 2;
    }
    .page4 .item2 .item2c{
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 24px;
    grid-gap: 10px;
    padding: 10px;
    }
    .page4 .item2c .gridcol .image{
        width: 240px;
        height: 240px;
    }
    .page4 .item2c .gridcol .conent-info{
    width: 75%;
    margin: auto;
    }
    .page4 .item2c .gridcol .conent-info .name  {
        font-size: 24px;
    }
    .page4 .item2c .gridcol .conent-info .position{    
    color:#707070 ;  
    font-size: 18px;
}
.page4 .item2c .gridcol .conent-info .leaen-more{
    font-size: 18px;
    color: #FFB600;
    display: flex;
    justify-content: center;
}
.page4 .item2  .element6 a{
    border-radius: 8px;
    border: 1px solid #AAAAAA;
    color: #707070;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    background: #fff;
    transition: 0.2s ease-in-out;
}
.page4 .item2  .element6 a:hover{
    border: 1px solid #FFB600;
    color: #FFB600;
}
.page4 .item3 .-p1{
    font-size: 30px;
}
.page4 .item3 .-p2,
.page4 .item3 .-p2{
    font-size: 16px;
}
.page4 .item3 .item3c{
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    padding: 10px;
}
.page4 .item3 .item3c .col-item .image{

}
.page4 .item4,
.page4 .item6,
.page4 .item8{
    background-color: #EDF3F2;
}
.page4 .item6 .image{

}
.page4 .item6 .element12{
    flex-direction: row;
}
.page4 .item4 p:first-child{
    font-size: 28px;
}
.page4 .item5 p:first-child{
    font-size: 28px;
}
.page4 .item6 .red-dot{
    height: 14px;
    width: 14px;
    background-color: #D0191D;
    border-radius: 50%;
    display: inline-block;
}
.page4 .item6 .dot-2{
    height: 14px;
    width: 14px;
    background-color: #94CA60;
    border-radius: 50%;
    display: inline-block;
}
.page4 .item6 .dot-3{
    height: 14px;
    width: 14px;
    background-color: #BBE50B;
    border-radius: 50%;
    display: inline-block;
}
.page4 .item6 .dot-4{
    height: 14px;
    width: 14px;
    background-color: #E89E0C;
    border-radius: 50%;
    display: inline-block;
}
.page4 .item7 p:first-child,
.page4 .item8 p:first-child{
    font-size: 28px;
}
 @media only screen and (max-width: 600px){
     .page4 .item2 .item2c{
    display: grid;
    grid-template-columns: auto;
    grid-gap: 10px;
    padding: 10px;
    }
    .page4 .item3 .item3c{
        grid-template-columns: auto;
    }
    .page4 .item3 .item3c .col-item .image{
        width: 360px;
        height: 360px;
}
.page4 .item6 .image{
        width: 220px;
        height: 220px;
}
.page4 .item6 .element12{
    flex-direction: column;
}
 }
</style>