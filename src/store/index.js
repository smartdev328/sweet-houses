import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'https://zeekoo90.pythonanywhere.com/api/auth/'
export const store = new Vuex.Store({
    state:{
        token: localStorage.getItem('token') || '',
        user:{},
        agents:[
            {name:"Barbara Diduch",phone:'(587) 984-2058',position:"REALTOR®",image:require('../assets/image/homepage/team/Barbara.svg'),
            details:`
                <p>My career in Real Estate started in 2012, after working in the staging industry and always having an interest in residential living spaces. Prior to venturing into Real Estate I have also worked as a marketing and project coordinator in the advertising industry. That job took me for a time to London, UK. While there I had the opportunity to travel a bit around Europe to Greece, Italy, Germany, Poland and Spain. </p>
                <p>I first began in 'Staging', with a specific interest in Residential living spaces.  I found it fascinating how even the most unsuspecting spaces, with just a little effort and imagination could quickly be transformed into the backdrop of someone’s dream property!  Originally my educational background was in visual communications and marketing.  Seeing the big picture potential, I decided that it was best to also get my Real Estate License.  </p>
                <p>Having worked first in staging, then as an Agent, I believe in the value of educating my clients on every aspect of their purchase or sale.  I try to provide them with a balance of cold hard numbers and recent market comparables, combined with information about the less quantifiable ‘emotional factor’ that ultimately drives most Buyers and Sellers' decisions.  I want my clients to say that I advised them ‘best', based on their specific situation and helped steer them towards the ‘right’ decision for them at this given time.</p>
                <p>Feel free to contact me directly, I’m always interested in hearing your story and how I can help you find your dream home, through the use of my industry knowledge combined with your imagination!   </p>
            ` 
        },
            {name:"Aidan Woodfine",phone:'(780) 264-1234',position:"REALTOR®",image:require('../assets/image/homepage/team/Aidan.svg'),
            details:`
                <p>Since becoming a licensed REALTOR® in 2013, Aidan Woodfine has served the Edmonton area with a systematic approach to real estate. With years of experience in the real estate business along with his marketing diploma from NAIT, he is now a resourceful co-owner of Sweetly and a consistently top-producing agent in Edmonton.</p>
                <p>Aidan offers enthusiastic dedication to his clients, embracing efficiency and modern technology for the best results when selling and buying a home. Aidan provides expert advice and exceptional, innovative service with cutting-edge knowledge of industry trends. Aidan’s specialty is value-driven buyers and sellers, especially newcomers to the city and buyers looking for unique ways to experience unfamiliar neighbourhoods.</p>
            `},
            {name:"Carlyna Greshuk",phone:'',position:"Marketing & Media",image:require('../assets/image/homepage/team/Carlyna.svg'),
            details:`
                <p>Carlyna is the Media and Marketing Coordinator at Sweetly. Carlyna grew up in a trades family and started working in construction (doing concrete work) before she eventually made the switch into the Event Management industry. During her studies in Event Management, she studied a lot about interior design and marketing along the way. With these courses, along with her background being around homebuilders and trade professionals, she gravitated towards the Real Estate industry where she is now happily able to bring her creative abilities to help the Sweetly team.</p>
            `},
            {name:"Dallas Moravec",phone:'(780) 707-7191',position:"REALTOR®",image:require('../assets/image/homepage/team/Dallas.svg'),
            details:`
            <p>Possessing high-level negotiating skills, a master at pricing, and extraordinary with people Dallas Moravec was born for real estate. Dallas has sold hundreds of homes, at the end of the day it's not about the number of homes he sells; he believes it is all about the people he gets to help and the service he provides. The ultimate reward is his clients' happiness and confidence in the sale or purchase of their home. That's better than any plaque on his shelf that just collects dust. Being a realtor for almost 20 years his core values are being dependable, honest, and the hardest worker in the business.</p>`},
            {name:"Lindsay Brommeland",phone:'(780) 903-1789',position:"REALTOR®",image:require('../assets/image/homepage/team/Lindsay.svg'),
            details:`
            <p>Lindsay is a sales and marketing professional with roots in the Edmonton media community. Her background in traditional and digital marketing, key account contract negotiation, and customer service have been essential to her career as a licensed real estate agent. Lindsay has been a real estate investor in Edmonton for over 25 years, and is equally as comfortable wearing a tool belt as she is working with her customers. When it comes to houses, she has seen it all! Over the years, she has accumulated lots of tips and tricks to help her customers see the potential (and pitfalls) in their home investment. Lindsay knows that no two real estate transactions are the same, and looks forward to helping each client with their individual real estate needs!</p>`
            },
            {name:"Ed Deprato",phone:'(780) 499-2851',position:"REALTOR®",image:require('../assets/image/homepage/team/Ed.svg'),
            details:`
            <p>Ed DePrato is the founder and co-owner of Sweetly, as well as a licensed broker and REALTOR® since 2001. Consistently a top-producing agent in the Edmonton area, Ed has extensive knowledge about real estate, including buying, selling, developing, and investing in commercial and residential properties. His philosophy is to provide top-quality customer service in all aspects of his work as a REALTOR® and offer modern solutions to clients as an industry-leading innovator. Using his expertise as an investor and developer, Ed launched Sweetly, a full service real estate brokerage, in September 2019 and has already led the company to a remarkable 4% market share in Edmonton. He has recently presented seminars on (downsizing, etc) and is always looking for ways to innovate the real estate industry.</p>
            `
        },
            {name:"Greg Rosychuk",phone:'',position:"REALTOR®",image:require('../assets/image/homepage/team/Greg.svg'),
            details:`
            <p>Ed DePrato is the founder and co-owner of Sweetly, as well as a licensed broker and REALTOR® since 2001. Consistently a top-producing agent in the Edmonton area, Ed has extensive knowledge about real estate, including buying, selling, developing, and investing in commercial and residential properties. His philosophy is to provide top-quality customer service in all aspects of his work as a REALTOR® and offer modern solutions to clients as an industry-leading innovator. Using his expertise as an investor and developer, Ed launched Sweetly, a full service real estate brokerage, in September 2019 and has already led the company to a remarkable 4% market share in Edmonton. He has recently presented seminars on (downsizing, etc) and is always looking for ways to innovate the real estate industry.</p>
            `
        },
            {name:"Zane Beddow",phone:'(780) 893-2016',position:"REALTOR®",image:require('../assets/image/homepage/team/Zane.svg'),
            details:`
            <p>Representing Edmonton and Surrounding Area homeowners and future homeowners, Zane is committed to listening to all of his clients’ needs and utilizing his keen negotiating skills to ensure a successful and smooth transaction.</p>
            <p>Zane showcases his listings through online marketing platforms and networks, as well as collaborating alongside a team of professional service providers to assist with his clients buying and selling goals. Working with designers, photographers, developers and inspectors, you can expect professional care along every step of the way. Zane is communicative, thorough, and detail-oriented - he can’t wait to start working alongside you!</p>
            `
        },
            {name:"Kerry Parsons",phone:'',position:"REALTOR®",image:require('../assets/image/homepage/team/Kerry.svg'),
            details:`
            <p>Representing Edmonton and Surrounding Area homeowners and future homeowners, Zane is committed to listening to all of his clients’ needs and utilizing his keen negotiating skills to ensure a successful and smooth transaction.</p>
            <p>Zane showcases his listings through online marketing platforms and networks, as well as collaborating alongside a team of professional service providers to assist with his clients buying and selling goals. Working with designers, photographers, developers and inspectors, you can expect professional care along every step of the way. Zane is communicative, thorough, and detail-oriented - he can’t wait to start working alongside you!</p>
            `
        },
            {name:"Kelly Grant",phone:'(780) 242-2469',position:"REALTOR®",image:require('../assets/image/homepage/team/Kelly.svg'),
            details:`
            <p>A licensed REALTOR® for over 15 years, Kelly Grant is an award-winning Edmonton real estate agent and co-owner of Sweetly. Kelly brings professional experience in financing, mortgages, and renovations to the Sweetly team, as well as certification as a Seniors Real Estate Specialist. Since helping establish Sweetly in 2019, Kelly has built a robust, successful business with a team of dedicated, well-informed agents. Over her wide-ranging career in the industry, Kelly has provided above-and-beyond service to buyers and sellers in the Edmonton area, as well as expert advice to her devoted clientele.</p>
            `
        },
            {name:"Nigel Nethersole",phone:'(780) 271-6300',position:"REALTOR®",image:require('../assets/image/homepage/team/Nigel.svg'),
            details:`
            <p>Nigel Nethersole was born and raised in Edmonton and is a University graduate with a Management Degree majoring in Marketing with a minor in Accounting. His career path started in Accounting and he began to invest in Real Estate which sparked a passion he had to pursue. Nigel started his Real Estate Career in 2005 and has never looked back!!</p>
            <p>Nigel is a respected Realtor who works well with all types of clients from first-time buyers to investors, seasoned clients to seniors wanting to downsize. His approach to Real Estate is finding the right solution for his client and ensuring they are completely satisfied. Nigel is articulate, tech savvy, and knows his product - Real Estate!</p>
            <p>Outside of Real Estate, Nigel enjoys skiing, cycling, spending time in the river valley, reading, cooking, traveling, and most importantly – time with family.</p>
            `
        },
            {name:"Jenna Panchuk",phone:'',position:"Accountant",image:require('../assets/image/homepage/team/Jenna.svg'),
        details:`<p>Jenna has been doing independent bookkeeping for many years within various industries before she was referred over to Ed DePrato and Sweetly. She now enjoys being part of  the Sweetly team because she has the opportunity to expand on her skills - specifically for the accounting side of the real estate industry!</p>`},
            {name:"Karen Prosser",phone:'',position:"Conveyancer",image:require('../assets/image/homepage/team/Karen.svg'),
        details:``},
            {name:"Diane Walker",phone:'(780) 965-2057',position:"REALTOR®",image:require('../assets/image/homepage/team/Diane.svg'),
        details:`
            <p>I was born in Edmonton, to parents from rural backgrounds and lived within blocks of the original Fort Edmonton and the Legislature building.</p>
            <p>My father was a building contractor, and I spent my preschool years with my dad at houses he was building. I learned about the housing industry, and as I got older became interested in the operation of the family business and eventually decided to become a Real Estate Professional. My oldest son followed in the same industry direction and is now a Real Estate Appraiser.</p>
            <p>When I had decided to become a Real Estate Professional, I originally started with Metro City Realty in June of 1995. I have enjoyed my work as a Realtor and have acquired considerable amounts of my own real estate during the time. I’m excited for my move to “Sweetly” as I know it will offer myself and my client’s new options and added benefits in the purchase and sale of their homes.</p>
        `},
        {name:"Maria Garces",phone:'(780) 965-2057',position:"Listings Coordinator",image:require('../assets/image/homepage/team/Maria.svg'),
        details:`
            <p>I was born in Edmonton, to parents from rural backgrounds and lived within blocks of the original Fort Edmonton and the Legislature building.</p>
            <p>My father was a building contractor, and I spent my preschool years with my dad at houses he was building. I learned about the housing industry, and as I got older became interested in the operation of the family business and eventually decided to become a Real Estate Professional. My oldest son followed in the same industry direction and is now a Real Estate Appraiser.</p>
            <p>When I had decided to become a Real Estate Professional, I originally started with Metro City Realty in June of 1995. I have enjoyed my work as a Realtor and have acquired considerable amounts of my own real estate during the time. I’m excited for my move to “Sweetly” as I know it will offer myself and my client’s new options and added benefits in the purchase and sale of their homes.</p>
        `}
        
        ],
        sweetsalefags:[
            {title:'What is Sweetly?',content:`Sweetly is a full service, licensed brokerage offering more than just the traditional real estate model. Our owners are ex Re/Max agents who came together to form Canada's first ibuyer. Sweetly is the only brokerage that invests its’ own resources to literally buy your home so that you don't need to be 'for sale'. We offer a Swift Sale where we'll pay 90.1% of current market value on whatever day you choose as the date for possession (move out). We also offer a Sweet Sale where we'll buy your home in two payments - we'll make the necessary improvements to maximize the resale price, and pay you the full balance of the improved resale price less our fee. We also offer a Sweet Swap where you can trade your current home for your next one - you can buy any home you want, not just our inventory, And we offer an Equity Advance if you just want some of the cash from the home equity you've built up - you pay us back when the home sells.
            `},
            {title:`What's the cost of a Sweet Sale?
            `,content:`The Sweet Sale is the SMARTEST WAY to sell a house! Our fee to buy and resell your home is 2% of the value of the property plus our standard real estate commission (7/3) or 7% of $100,000 plus 3% on the balance of the sale price. The extra 2% covers the expenses we take on, like property tax, utilities, insurance, lawn/snow care, and mortgage payments. The fee is fixed and never increases regardless of how long it takes to sell the property.`},
            {title:`What's the catch?
            `,content:`We get this question every day — actually. There's really no catch! The Sweet Sale is NOT a buy low sell high model, so we don’t ‘low-ball’. With a Sweet Sale you get ALL the equity from your (fully renovated and ready to sell) home. You benefit from having us make the right improvements to sell your home for the highest price possible. Our Sweet Sale process is simply the easiest and smartest way to sell a home for the most money possible AND avoiding the stresses of public showings. The difference is more money for you, and the convenience of no public showings.`},
            {title:`Who gets the extra money if Sweetly re-sells my home for more than the original value?`,content:`You do! We re-sell homes for more than the original value by design of the Sweet Sale. It's because we make the right improvements that we know buyers can't resist, so our re-sales often sell for more than the original evaluated amount. You get that money! We only keep our fee (and our contractor costs for any improvements). You get the full balance of the resale price.`},
            {title:`Is the Sweet Sale program available to me if I’m already listed with another Realtor?`,content:`Yes, you can consider our offer through your current listing brokerage. We normally re-list the property with the same Realtor and we pay 1% of the value which is roughly half of what most full service Realtors charge.`},
            {title:`Who controls the asking/sale price once Sweetly puts the house for sale?`,content:`You do! Sweetly will list the house at the pre-determined value and we don’t accept any offer of less than 97% of that evaluation, without you’re permission. If we feel a price reduction is necessary we’ll tell you, and you can decide to either allow a reducton to attract more buyers, or leave it for sale at the same price – you’re in control for the first 30 days of our listing. If the home is not selling within 30 days, we'll adjust the price at our discretion to attract more buyers.`},
            {title:`How can I be sure that I'll get the second payment?`,content:`Your second payment is protected by a caveat registered on the title of your home which requires us to pay you before we can sell to anyone else. It’s the same level of protection a bank gets when they lend money on a property in the form of a mortgage.`},
            {title:`How do I know that Sweetly will seek the highest sale price?`,content:`Sweetly is the only Brokerage in Canada that buys and re-sells your home in a fair way. Our goal of getting the highest sale price is aligned with yours! We always seeks the highest price, and we commit to only accept offers no less than 97% of the original evaluation we provided to you. If for any reason, we can’t get to within 97% you’ll be consulted. We even give you the right to buy back the house by simply retuning our money any time before we’ve accepted an offer from anyone else.`},
            {title:`Can Sweetly help me buy my next home, before I sell my current home?`,content:`Yes, Sweetly is a full service brokerage. We'd be happy to activate a free homes search based on your buying criteria. We'll show you any home for sale and when you find the right one we'll help you make an informed offer by showing you what the home last sold for (if available) and the recent comparable sales for the area to help you make good real estate decisions. Once you have a firm purchase Sweetly will buy your current home on the date that makes the most sense for you!`},
            {title:`How fast will I receive my offer?`,content:`You'll have our offer on the same day we see the property.`},
            {title:`Do I get to choose my own closing date?`,content:`Yes, you get to choose a date that works for you which is materially different than selling your home to a traditional buyer that may need the home on a date that works for them.`},
            {title:`Is the offer I get subject to commissions?`,content:`No. You don't pay commissions when you sell to us. We make our money from the service fee we charge against the resale which includes commission. IF YOUR HOME IS LISTED WITH ANY OTHER BROKERAGE you can still get our offer, but only through your current brokerage.`},
            {title:`How do the improvements I made affect the value of my home?`,content:`Improvements, additions and renovations are important factors for us to consider when determining the current value of your home as compared to others for sale or sold. Please tell us about them and include as many pictures as possible.`},
            {title:`Where are you currently buying homes?`,content:`We are currently buying homes in Edmonton, Red Deer, Calgary, and other major centers in Alberta.`},
            {title:`What types of homes are you buying?
            `,content:`We’re currently interested in buying single family homes of 850 square feet or more, with 2 or more bedrooms above grade. The homes we buy must have a value of $200,000 and up. Some exceptions can be made and all deals are carefully considered.`},
            {title:`What types of homes will you absolutely NOT buy?
            `,content:`Homes we buy must be vacant on possession date. We cannot assume any tenancies. We can't buy any homes that require significant work such as foundation problems, etc.. We also cannot buy a mobile home or other type of property that doesn't include title to land or a city lot. At this time we are not buying most condominiums, or commercial property, and some smaller communities throughout Alberta.`},
            {title:`Is this a Guaranteed Sale program?
            `,content:`NO! A Guaranteed Sale is a gimmick some agents use to get your listing. Sweetly provides a clean offer and an actual sale - NO LISTING required. Guaranteed Sale programs require you to list the home for a period of time, then if the brokerage buys the home and resells it for more they keep the profit. That's not Sweetly.
            `},
            {title:`Should I include photos of my home?
            `,content:`YES! We consider every home carefully and photos help us understand the condition and unique appeal of your home. Send photos!
            `},
            {title:`Does your offer expire?
            `,content:`Our offer is valid for however long you want, but stale dated offers will be re-visited to ensure we are paying current value, and where the market has shifted substantially, we may just withdraw a stale offer.
            `},
            {title:`How long will the selling process take?
            `,content:`We can move as fast as you need us to. Typically we need about 10 days to do our inspection of the home and finalize our commitment to you. We can move faster if necessary. You'll get your first payment on the possession date you choose.
            `},
            {title:`What happens to my house after you buy it?
            `,content:`We’ll do any improvements needed (which you agree to in advance) to ensure the home shows its best and sells for maximum value. We take photos and measurements, introduce the home to the buying public, post the home on the MLS, hold open houses, book showings, deal with agents, buyers, inspectors and appraisers. We negotiate with buyers and re-sell the home on the open market. Basically, we do all the work, pay for all the holding costs and handle all the stress associated with selling a house.
            `},
            {title:`Is my information secure?
            `,content:`Yes, we don't discuss or disclose your reasons for moving, nor will we disclose your home selling price until after a firm (unconditional) commitment is received. We may share your contact information with other top agents in your community to reassure you that our offer is at current market value. You're under no obligation to anyone and you may proceed with your sale as you see fit.
            `},
            {title:`How do you determine the price you'll pay?
            `,content:`Our offer is based on the expected market value. We determine the current value of your home by direct comparison to other recent sales in your area, or we can use a recent appraisal if you have one.
            `},
            {title:`How does my offer compare to actual market value?
            `,content:`Our offer is based on Current Market Value of your home! 
            `},
            {title:`Do you negotiate on your offer price?
            `,content:`Yes, If you feel like we've missed something about your home that makes it worth more than our offer price please bring that to our attention, we'd be happy to revisit our offer.
            `},
            {title:`Can I change the possession date after we sign?
            `,content:`Yes, it doesn't matter to us when we close so if you need more time just let us know and we can make that change.
            `},
            {title:`Will you want to see my house in person?
            `,content:`Yes. We’ll want to see your property in order to make you an offer.
            `},
            {title:`Who does the inspection on my home?
            `,content:`We use certified home inspectors.
            `},
            {title:`What happens if the inspector finds problems in my home?
            `,content:`Don't worry. We are not a nervous buyer. Home inspections most often (actually always) yield some kind of deficiency or maintenance requirement. Once we know what those are we'll review them with you and discuss possible remedies if needed. If there's something seriously wrong with your home (like a faulty foundation) we'll likely need to pass on buying your home as we simply don't have the resources to deal with substantial issues of that sort.
            `},
            {title:`When will I need to move out of my house?
            `,content:`You'll need to provide clean, vacant possession on the closing day of your choosing.
            `},
            {title:`Can I take any appliances?
            `,content:`Yes, but please note that all of the appliances (Chattels) listed on the contract need to stay with the home. These will normally include the Fridge, Stove, Hood fan, Washer and Dryer, Window coverings, Garage door opener and remotes, built in speaker systems, closet organizers, etc. If any of these items are important for you to take with you, you'll need to ensure they are not included in the sale.
            `},
            {title:`What if I have more questions?
`,content:`What if I have more questions?
`}
        ],
        swiftsalefaqs:[
            {title:`What is Sweetly?
            `,content:`Sweetly is a Canadian iBuyer. We are a full-service, licensed real estate brokerage that uses our money to make your move easier. Sweetly is the only Canadian real estate brokerage that literally buys your home so that you don't need to be 'for sale'. We offer several options including the new Swift Sale where we'll pay 90.1% of current market value on whatever day you choose; Our Sweet Sale pays you in two payments - we pay 75% on your chosen moving day, we'll make the right improvements to maximize the resale price, then pay you the full balance of our selling price less our fee. We also offer a Sweet Swap where you can trade your current home for your next one, and an Equity Advance if you just want some of the cash from the home equity you've built up - you pay us back when the home sells.`},
            {title:`Why would I consider a Swift Sale?
            `,content:`With a Swift Sale, you receive 1 payment for 90.1% of the property value on the day you choose. Skip all the showings and hassles of being for sale. Your payment is free of commissions, and there are no hidden fees.
            `},
            {title:`What's the cost of a Swift Sale?
            `,content:`Our Swift Sale fee is 9.9% of your property value. We'll pay 90.1% in one lump payment on whatever day you choose.`},
            {title:`What's the catch?
            `,content:`There's really no catch! The risk is ours. We'll offer to buy your home and re-sell it on the open market after you've moved out. You pick the day! We'll pay 90.1% of the current market value. The difference is the convenience of no public showings.
            `},
            {title:`Is the Swift Sale Program available to me if I'm already listed with another Realtor?
            `,content:`Yes, you can consider our offer through your current listing brokerage. Any commissions payable under a current listing agreement should be considered.
            `},
            {title:`Who controls the asking/sale price once Sweetly puts the house for sale?
            `,content:`With a Swift Sale, we control the asking/selling price right from the start. Sweetly will prepare the property for sale and list it at a price we feel will attract a serious, qualified buyer.
            `},
            {title:`What happens if you can't sell the property for more than you paid?
            `,content:`That's our risk. We don't win on every deal we do, and that's just a part of our business model.
            `},
            {title:`What happens if you resell the property for way more than you expected?
            `,content:`Sometimes a sale can be competitive between 2 or more different buyers and the resulting sale price will exceed the asking price. So, if we resell the property for anything more than our evaluation price, You'll get 100% of that overage.
            `},
            {title:`Can Sweetly help me buy my next home before I sell my current home?
            `,content:`Yes, Sweetly is a full-service brokerage. We'd be happy to activate a free homes search based on your buying criteria. We'll show you any home for sale and when you find the right one we'll help you make an informed offer by showing you what the home last sold for (if available) and the recent comparable sales for the area to help you make good real estate decisions. Once you have a firm purchase Sweetly will buy your current home on the date that makes the most sense for you!
            `},
            {title:`How fast will I receive my offer?
            `,content:`You'll have our written offer on the same day we see the property
            `},
            {title:`Do I get to choose my own closing date?
            `,content:`Yes, you get to choose a date that works for you which is materially different than selling your home to a traditional buyer that may need the home on a date that works for them.
            `},
            {title:`Is the offer I get subject to commissions?
            `,content:`No. You don't pay commissions when you sell to us. We make our money from the service fee we charge against the resale which includes commission. IF YOUR HOME IS LISTED WITH ANY OTHER BROKERAGE you can still get our offer, but only through your current brokerage.
            `},
            {title:`How do the improvements I made affect the value of my home?
            `,content:`Improvements, additions and renovations are important factors for us to consider when determining the current value of your home as compared to others for sale or sold. Please tell us about them and include as many pictures as possible.
            `},
            {title:`Where are you currently buying homes?
            `,content:`We are currently buying homes in Edmonton, Red Deer, Calgary, and other major centers in Alberta.
            `},
            {title:`What types of homes are you buying?
            `,content:`We’re currently interested in buying single-family homes of 850 square feet or more, with 2 or more bedrooms above grade. The homes we buy must have a value of $200,000 and up. Some exceptions can be made and all deals are carefully considered.
            `},
            {title:`What types of homes will you absolutely NOT buy?
            `,content:`Homes we buy must be vacant on possession date. We cannot assume any tenancies. We can't buy any homes that require significant work such as foundation problems, etc.. We also cannot buy a mobile home or another type of property that doesn't include title to land or a city lot. At this time we are not buying most condominiums, or commercial property, and some smaller communities throughout Alberta.
            `},
            {title:`Is this a Guaranteed Sale program?
            `,content:`NO! A Guaranteed Sale is a gimmick some agents use to get your listing. Sweetly provides a clean offer and an actual sale - NO LISTING required. Guaranteed Sale programs require you to list the home for a period of time, then if the brokerage buys the home and resells it for more they keep the profit. That's not Sweetly.
            `},
            {title:`Should I include photos of my home?
            `,content:`YES! We consider every home carefully and photos help us understand the condition and unique appeal of your home. Send photos!
            `},
            {title:`Does your offer expire?
            `,content:`Our offer is valid for however long you want, but stale-dated offers will be re-visited to ensure we are paying current value, and where the market has shifted substantially, we may just withdraw a stale offer.
            `},
            {title:`How long will the selling process take?
            `,content:`We can move as fast as you need us to. Typically we need about 10 days to do our inspection of the home and finalize our commitment to you. We can move faster if necessary. You'll get your first payment on the possession date you choose.
            `},
            {title:`What happens to my house after you buy it?
            `,content:`We’ll do any improvements needed (which you agree to in advance) to ensure the home shows its best and sells for maximum value. We take photos and measurements, introduce the home to the buying public, post the home on the MLS, hold open houses, book showings, deal with agents, buyers, inspectors and appraisers. We negotiate with buyers and re-sell the home on the open market. Basically, we do all the work, pay for all the holding costs and handle all the stress associated with selling a house.
            `},
            {title:`Is my information secure?
            `,content:`Yes, we don't discuss or disclose your reasons for moving, nor will we disclose your home selling price until after a firm (unconditional) commitment is received. We may share your contact information with other top agents in your community to reassure you that our offer is at current market value. You're under no obligation to anyone and you may proceed with your sale as you see fit.
            `},
            {title:`How do you determine the price you'll pay?
            `,content:`Our offer is based on the expected market value. We determine the current value of your home by direct comparison to other recent sales in your area, or we can use a recent appraisal if you have one.
            `},
            {title:`How does my offer compare to actual market value?
            `,content:`Our offer is based on Current Market Value of your home! 
            `},
            {title:`Do you negotiate on your offer price?
            `,content:`Yes, If you feel like we've missed something about your home that makes it worth more than our offer price please bring that to our attention, we'd be happy to revisit our offer.
            `},
            {title:`Can I change the possession date after we sign?
            `,content:`Yes, it doesn't matter to us when we close so if you need more time just let us know and we can make that change.
            `},
            {title:`Will you want to see my house in person?
            `,content:`Yes. We’ll want to see your property in order to make you an offer.
            `},
            {title:`Who does the inspection on my home?
            `,content:`We use certified home inspectors.
            `},
            {title:`What happens if the inspector finds problems in my home?
            `,content:`Don't worry. We are not a nervous buyer. Home inspections most often (actually always) yield some kind of deficiency or maintenance requirement. Once we know what those are we'll review them with you and discuss possible remedies if needed. If there's something seriously wrong with your home (like a faulty foundation) we'll likely need to pass on buying your home as we simply don't have the resources to deal with substantial issues of that sort.
            `},
            {title:`When will I need to move out of my house?
            `,content:`You'll need to provide clean, vacant possession on the closing day of your choosing.
            `},
            {title:`Can I take any appliances?
            `,content:`Yes, but please note that all of the appliances (Chattels) listed on the contract need to stay with the home. These will normally include the Fridge, Stove, Hood fan, Washer and Dryer, Window coverings, Garage door opener and remotes, built in speaker systems, closet organizers, etc. If any of these items are important for you to take with you, you'll need to ensure they are not included in the sale.
            `},
            {title:`What if I have more questions?
`,content:`What if I have more questions?
`}
        ],
        equityadvancefaqs:[
            {title:`Is there a maximum amount Sweetly will lend as an equity advance?
            `,content:`The size of our advance is limited only by the equity you have in the property you want to sell.
            `},
            {title:`Doesn't the property need to sell to get all my equity?
            `,content:`Yes, Sweetly advances a portion of your equity up front, when you list the property with us. Once the property is sold you repay us from the sale proceeds and the remaining equity is yours.
            `},
            {title:`Who controls the asking price and the sale price?
            `,content:`You do. We'll represent you in the process and list the home professionally on the open market. You set the asking price and decide which offers you'll accept, counter, or reject.
            `},
            {title:`What if the property doesn't sell?
            `,content:`We'll help you set an asking price and manage the listing during the listing. If the property isn't sold within 120 days, Sweetly will buy it, then resell it under the terms of our Sweet Sale program; Our we'll pay you out under our Swift Sale program. 
            `},
            {title:`What if I have more questions?
            `,content:`Call us! Our number is 780-477-9338.
            `},
        ],
        faqs:[
            {title:`What is Sweetly?
            `,content:`
            Sweetly is a full service, licensed brokerage offering more than just the traditional real estate model. Our owners are ex Re/Max agents who came together to form Canada's first ibuyer. Sweetly is the only brokerage that invests its’ own resources to literally buy your home so that you don't need to be 'for sale'. We offer a Swift Sale where we'll pay 90.1% of current market value on whatever day you choose as the date for possession (move out). We also offer a Sweet Sale where we'll buy your home in two payments - we'll make the necessary improvements to maximize the resale price, and pay you the full balance of the improved resale price less our fee. We also offer a Sweet Swap where you can trade your current home for your next one - you can buy any home you want, not just our inventory, And we offer an Equity Advance if you just want some of the cash from the home equity you've built up - you pay us back when the home sells.`},

            
            
            
            {title:`
            Why would I consider a Swift Sale?
            `,content:`
            With a Swift Sale, you receive 1 payment for 90.1% of the property value on the day you choose. Skip all the showings and hassles of being for sale. Your payment is free of commissions, and there are no hidden fees.
What's the cost of a Swift Sale?
Our Swift Sale fee is 9.9% of your property value. We'll pay 90.1% in one lump payment on whatever day you choose.

            `},
            {title:`What's the catch?
            `,content:`
            We get this question every day — actually. There's really no catch! The Sweet Sale is NOT a buy low sell high model, so we don’t ‘low-ball’. With a Sweet Sale you get ALL the equity from your (fully renovated and ready to sell) home. You benefit from having us make the right improvements to sell your home for the highest price possible. Our Sweet Sale process is simply the easiest and smartest way to sell a home for the most money possible AND avoiding the stresses of public showings.
            The difference is more money for you, and the convenience of no public showings.
            `},
            {title:`What happens if you can't sell the property for more than you paid?
            `,content:`
            That's our risk. We don't win on every deal we do, and that's just a part of our business model.
            `},
            {title:`What happens if you resell the property for way more than you expected?
            `,content:`Sometimes a sale can be competitive between 2 or more different buyers and the resulting sale price will exceed the asking price. So, 
            if we resell the property for anything more than our evaluation price, You'll get 100% of that overage.
            `},
            {title:`Can Sweetly help me buy my next home before I sell my current home?
            `,content:`Yes, Sweetly is a full-service brokerage. We'd be happy to activate a free homes search based on your buying criteria. We'll show you any home for sale and when you find the right one we'll help you make an informed offer by showing you what the home last sold for (if available) and the recent comparable sales for the area to help you make good real estate decisions.
            Once you have a firm purchase Sweetly will buy your current home on the date that makes the most sense for you!
            `},
            {title:`How fast will I receive my offer?
            `,content:`
            You'll have our offer on the same day we see the property.
            `},
            {title:`
            Do I get to choose my own closing date?
            `,content:`
            Yes, you get to choose a date that works for you which is materially
            different than selling your home to a traditional buyer that may need the home on a date that works for them.
            `},
            {title:`
            Is the offer I get subject to commissions?
            `,content:`
            No. You don't pay commissions when you sell to us. We make our money from the service fee we charge against the resale which includes commission. 
            IF YOUR HOME IS LISTED WITH ANY OTHER BROKERAGE you can still get our offer, but only through your current brokerage.
            `},
            {title:`
            How do the improvements I made affect the value of my home?
            `,content:`
            Improvements, additions and renovations are important factors for us to consider when determining the current value of your home as compared to others for sale or sold.
            Please tell us about them and include as many pictures as possible.
            `},
            {title:`
            Where are you currently buying homes?
            `,content:`
            We are currently buying homes in Edmonton, Red Deer, Calgary, and other major centers in Alberta
            `},
            {title:`
            What types of homes are you buying?
            `,content:`
            We’re currently interested in buying single family homes of 850 square feet or more, with 2 or more bedrooms above grade.
            The homes we buy must have a value of $200,000 and up. Some exceptions can be made and all deals are carefully considered.
            `},
            {title:`
            What types of homes will you absolutely NOT buy?
            `,content:`
            Homes we buy must be vacant on possession date. We cannot assume any tenancies. We can't buy any homes that require significant work such as foundation problems, etc.. We also cannot buy a mobile home or other type of property that doesn't include title to land or a city lot. At this time we are not buying most condominiums,
            or commercial property, and some smaller communities throughout Alberta.
            `},
            {title:`
            Is this a Guaranteed Sale program?
            `,content:`
            NO! A Guaranteed Sale is a gimmick some agents use to get your listing. Sweetly provides a clean offer and an actual sale - NO LISTING required. Guaranteed Sale programs require you to list the home for a period of time, 
            then if the brokerage buys the home and resells it for more they keep the profit. That's not Sweetly.
            `},
            {title:`
            Should I include photos of my home?
            `,content:`
            YES! We consider every home carefully and photos help us understand the condition and unique appeal of your home. Send photos!
            `},
            {title:`
            Does your offer expire?
            `,content:`
            Our offer is valid for however long you want, but stale dated offers will be re-visited to ensure we are paying current value,
            and where the market has shifted substantially, we may just withdraw a stale offer.
            `},
            {title:`
            How long will the selling process take?
            `,content:`
            We can move as fast as you need us to. Typically we need about 10 days to do our inspection of the home and finalize our commitment to you. We can move faster if necessary. 
            You'll get your first payment on the possession date you choose.
            `},
            {title:`
            What happens to my house after you buy it?
            `,content:`
            We’ll do any improvements needed (which you agree to in advance) to ensure the home shows its best and sells for maximum value. We take photos and measurements, introduce the home to the buying public, post the home on the MLS, hold open houses, book showings, deal with agents, buyers, inspectors and appraisers. We negotiate with buyers and re-sell the home on the open market. Basically, we do all the work,
            pay for all the holding costs and handle all the stress associated with selling a house.
            `},
            {title:`Is my information secure?`,
        content:`
        Yes, we don't discuss or disclose your reasons for moving, nor will we disclose your home selling price until after a firm (unconditional) commitment is received. We may share your contact information with other top agents in your community to reassure you that our offer is at current market value. 
        You're under no obligation to anyone and you may proceed with your sale as you see fit.`},
        {title:`How do you determine the price you'll pay?`,
        content:`Our offer is based on the expected market value. We determine the current value of your home
        by direct comparison to other recent sales in your area, or we can use a recent appraisal if you have one.`},
        {title:`
        How does my offer compare to actual market value?`,
        content:`Our offer is based on Current Market Value of your home!`},
        {title:`Do you negotiate on your offer price?`,
        content:`Yes, If you feel like we've missed something about your home that makes
        it worth more than our offer price please bring that to our attention, we'd be happy to revisit our offer.`},
        {title:`Can I change the possession date after we sign?`,
        content:`Yes, it doesn't matter to us when we close so if you need more time just let us know and we can make that change.`},
        {title:`Will you want to see my house in person?`,
        content:`Yes. We’ll want to see your property in order to make you an offer.`},
        {title:`Who does the inspection on my home?`,
        content:`We use certified home inspectors.`},
        {title:`What happens if the inspector finds problems in my home?`,
        content:`Don't worry. We are not a nervous buyer. Home inspections most often (actually always) yield some kind of deficiency or maintenance requirement. Once we know what those are we'll review them with you and discuss possible remedies if needed. If there's something seriously wrong with your home (like a faulty foundation) we'll likely need to pass on
        buying your home as we simply don't have the resources to deal with substantial issues of that sort.`},
        {title:`When will I need to move out of my house?`,
        content:`You'll need to provide clean, vacant possession on the closing day of your choosing.`},
        {title:`Can I take any appliances?`,
        content:`Yes, but please note that all of the appliances (Chattels) listed on the contract need to stay with the home. These will normally include the Fridge, Stove, Hood fan, Washer and Dryer, Window coverings, Garage door opener and remotes, built-in speaker systems, closet organizers, etc. 
        If any of these items are important for you to take with you, you'll need to ensure they are not included in the sale.`},
        {title:`What's the cost of a Sweet Sale?`,
        content:`The Sweet Sale is the SMARTEST WAY to sell a house! Our fee to buy and resell your home is 2% of the value of the property plus our standard real estate commission (7/3) or 7% of $100,000 plus 3% on the balance of the sale price. The extra 2% covers the expenses we take on, like property tax, utilities, insurance, lawn/snow care, and mortgage payments. 
        The fee is fixed and never increases regardless of how long it takes to sell the property.`},
        {title:`Who gets the extra money if Sweetly re-sells my home for more than the original value?`,
        content:`You do! We re-sell homes for more than the original value by design of the Sweet Sale. It's because we make the right improvements that we know buyers can't resist, so our re-sales often sell for more than the original evaluated amount. You get that money! 
        We only keep our fee (and our contractor costs for any improvements). You get the full balance of the resale price.`},
        {title:`Is the Sweet Sale program available to me if I’m already listed with another Realtor?`,
        content:`Yes, you can consider our offer through your current listing brokerage. We normally re-list the property with the same Realtor and we pay 1% of the value which is roughly half of what most full service Realtors charge.`},
        {title:`Who controls the asking/sale price once Sweetly puts the house for sale?`,
        content:`You do! Sweetly will list the house at the pre-determined value and we don’t accept any offer of less than 97% of that evaluation, without you’re permission. If we feel a price reduction is necessary we’ll tell you, and you can decide to either allow a reducton to attract more buyers, or leave it for sale at the same price – you’re in control for the first 30 days of our listing. If the home is not selling within 30 days, we'll adjust the price at our discretion to attract more buyers.`},
        {title:`How can I be sure that I'll get the second payment?`,
        content:`Your second payment is protected by a caveat registered on the title of your home which requires us to pay you before we can sell to anyone else. It’s the same level of protection a bank gets when they lend money on a property in the form of a mortgage.`},
        {title:`How do I know that Sweetly will seek the highest sale price?`,
        content:`Sweetly is the only Brokerage in Canada that buys and re-sells your home in a fair way. Our goal of getting the highest sale price is aligned with yours! We always seeks the highest price, and we commit to only accept offers no less than 97% of the original evaluation we provided to you. If for any reason, we can’t get to within 97% you’ll be consulted. We even give you the right to buy back the house
        by simply retuning our money any time before we’ve accepted an offer from anyone else.`},
        {title:`Can Sweetly help me buy my next home, before I sell my current home?`,
        content:`Yes, Sweetly is a full service brokerage. We'd be happy to activate a free homes search based on your buying criteria. We'll show you any home for sale and when you find the right one we'll help you make an informed offer by showing you what the home last sold for (if available) and the recent comparable sales for the area to help you make good real estate decisions. 
        Once you have a firm purchase Sweetly will buy your current home on the date that makes the most sense for you!`},
        {title:`Is there a maximum amount Sweetly will lend as an equity advance?`,
        content:`The size of our advance is limited only by the equity you have in the property you want to sell.`},
        {title:`Doesn't the property need to sell to get all my equity?`,
        content:`Yes, Sweetly advances a portion of your equity up front, when you list the property with us.
        Once the property is sold you repay us from the sale proceeds and the remaining equity is yours.`},
        {title:`Who controls the asking price and the sale price?`,
        content:`You do. We'll represent you in the process and list the home professionally on the open market. 
        You set the asking price and decide which offers you'll accept, counter, or reject.`},
        {title:`What if the property doesn't sell?`,
        content:`We'll help you set an asking price and manage the listing during the listing. If the property isn't sold within 120 days, Sweetly will buy it, 
        then resell it under the terms of our Sweet Sale program; Our we'll pay you out under our Swift Sale program.`},
        {title:`What if I have more questions?`,
        content:`Call us! Our number is 780-477-9338.`},
        ],
        agent:{},
        status:'',
        homeaddress:'',
        latlong:null,
        homedatafirst:{},
        homedatasecond:{},
        contactinput:{},
        editdatainput:{},
        canadianprovinces:[
            {
                "name" : "Alberta",
                "short" : "AB",
                "rank" : 4,
                "population" : 4067175,
                "capital" : "Edmonton",
                "latitude" : 53.9332706,
                "longitude" : -116.5765035
            }
            ,
            {
                "name" : "British Columbia",
                "short" : "BC",
                "rank" : 3,
                "population" : 4648055,
                "capital" : "Victoria",
                "latitude" : 53.7266683,
                "longitude" : -127.6476206
            }
            ,
            {
                "name" : "Manitoba",
                "short" : "MB",
                "rank" : 5,
                "population" : 1278365,
                "capital" : "Winnipeg",
                "latitude" : 53.7608608,
                "longitude" : -98.8138763
            }
            ,
            {
                "name" : "New Brunswick",
                "short" : "NB",
                "rank" : 8,
                "population" : 747101,
                "capital" : "Fredericton",
                "latitude" : 46.5653163,
                "longitude" : -66.4619164
            }
            ,
            {
                "name" : "Newfoundland And Labrador",
                "short" : "NL",
                "rank" : 9,
                "population" : 519716,
                "capital" : "St John's",
                "latitude" : 48.6064556,
                "longitude" : -56.3330408
            }
            ,
            {
                "name" : "Nova Scotia",
                "short" : "NS",
                "rank" : 7,
                "population" : 923598,
                "capital" : "Halifax",
                "latitude" : 44.6819866,
                "longitude" : -63.744311
            }
            ,
            {
                "name" : "Nunavut",
                "short" : "NU",
                "rank" : 12,
                "population" : 35944,
                "capital" : "Iqaluit",
                "latitude" : 70.2997711,
                "longitude" : -83.1075769
            }
            ,
            {
                "name" : "Northwest Territories",
                "short" : "NT",
                "rank" : 11,
                "population" : 41786,
                "capital" : "Yellowknife",
                "latitude" : 64.8255441,
                "longitude" : -124.8457334
            }
            ,
            {
                "name" : "Ontario",
                "short" : "ON",
                "rank" : 1,
                "population" : 13448494,
                "capital" : "Toronto",
                "latitude" : 51.253775,
                "longitude" : -85.3232139
            }
            ,
            {
                "name" : "Prince Edward Island",
                "short" : "PE",
                "rank" : 10,
                "population" : 142907,
                "capital" : "Charlottetown",
                "latitude" : 46.510712,
                "longitude" : -63.4168136
            }
            ,
            {
                "name" : "Quebec",
                "short" : "QC",
                "rank" : 2,
                "population" : 8164361,
                "capital" : "Quebec City",
                "latitude" : 52.9399159,
                "longitude" : -73.5491361
            }
            ,
            {
                "name" : "Saskatchewan",
                "short" : "SK",
                "rank" : 6,
                "population" : 1098352,
                "capital" : "Regina",
                "latitude" : 52.9399159,
                "longitude" : -106.4508639
            }
            ,
            {
                "name" : "Yukon",
                "short" : "YT",
                "rank" : 13,
                "population" : 35874,
                "capital" : "Whitehorse",
                "latitude" : 64.2823274,
                "longitude" : -135
            }
          ]

    },
    mutations:{
        setagent(state,payload){
            state.agent = payload
        },
        auth_request(state){
            state.status = 'loading'
        },
        auth_success(state, token){
            state.status = 'success'
            state.token = token
        },
        auth_error(state){
            state.status = 'error'
        },
        getUser(state,payload){
        state.user = payload
        },
        sethomeaddress(state,payload){
            state.homeaddress = payload
        },
        setlatlong(state,payload){
            state.latlong = payload
        },
        logout(state){
            state.status = ''
            state.token = ''
            state.user = {}
        },
        sethomedata(state,payload){
        state.homedatafirst = payload
        },
        sethomedatasecond(state,payload){
            state.homedatasecond = payload
        },
        setContactDetail(state,payload){
            state.contactinput = payload
        },
        editHomeaddressdata(state,payload){
            state.editdatainput = payload
        }
    },
    actions:{
        ScrollTop(){
            window.scrollTo(0,0);
        },
        login({commit , state} , input){
            return new Promise((resolve, reject) => {
              commit('auth_request')
              axios({url: 'login/', data: input, method: 'POST' })
              .then(resp => {
               const token = resp.data.token
                const user = resp.data.user
                localStorage.setItem('token', token)
                localStorage.setItem('user', user)
                axios.defaults.headers.common['Authorization'] = token
                commit('auth_success', token,user)
                state.user = resp.data.user
                state.token = resp.data.token
                resolve(resp)
              })
              .catch(err => {
              commit('auth_error')
              localStorage.removeItem('token')
                reject(err)
              })
            })
        },
        register({commit , state}, input){
            return new Promise((resolve, reject) => {
              commit('auth_request')
              axios({url: 'register/', data: input, method: 'POST' })
              .then(resp => {
                const token = resp.data.token
                const user = resp.data.user
                localStorage.setItem('token', token)
                localStorage.setItem('user', user)
                axios.defaults.headers.common['Authorization'] = token
                commit('auth_success', token)
                state.user = resp.data.user
                state.token = resp.data.token
                resolve(resp)
              })
              .catch(err => {
                commit('auth_error', err)
                localStorage.removeItem('token')
                reject(err)
              })
            })
          },
          logout({commit,state}){

            return new Promise((resolve) => {
                axios({url: 'logout/',  method: 'POST',headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Token ${state.token}`
                } }).then(() =>{
                commit('logout')
                localStorage.removeItem('token')
                localStorage.setItem('token', '')
                    localStorage.setItem('user', '')
                delete axios.defaults.headers.common['Authorization']
                resolve
                })
                
              
            })
         
          },
    },
    getters:{
    },
})
export default store;