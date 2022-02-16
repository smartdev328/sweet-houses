import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = process.env.VUE_APP_URL_API
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
export const store = new Vuex.Store({
    state:{
        token: localStorage.getItem('token') || '',
        user:{},
        footerh:null,
        typesale:'',
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
                <p>Carlyna   Media and Marketing Coordinator at Sweetly. Carlyna grew up in a trades family and started working in construction (doing concrete work) before she eventually made the switch into the Event Management industry. During her studies in Event Management, she studied a lot about interior design and marketing along the way. With these courses, along with her background being around homebuilders and trade professionals, she gravitated towards the Real Estate industry where she is now happily able to bring her creative abilities to help the Sweetly team.</p>
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
            {title:'How do I know that I’m getting a fair price from Sweetly?',
            content:`You get FULL market value for your home from Sweetly. Our resale price is often higher than what a seller can achieve because we sell the home vacant and available immediately, and we also make improvements to ensure that the house shows it's best. When we resell your home, we retain commission of 7% of $100,000 and 3% of the balance, and you get the full balance of the resale price! The full market value is paid to you, even if the actual sale price is more than the appraised value. The major difference is you don't need to tolerate showings and seller pains. `},
            {title:`How does the Sweetly offer compare to actual market value?
            `,content:`Actual market value can only be determined by the market (buyers). Our appraisal is done by a professional appraiser who's only job is to predict what a property will sell for in the current market, which makes our appraisal very reliable. Regardless of what your property sells for, we charge the same 7% of $100,000 and 3% of the balance. Which pays you the exact same net as compared to a traditional listing and sale. The difference is in the experience, given that you won't need to list your home, tolerate any public showings, and you even get to choose your own moving day.`},
            {title:`Does Sweetly negotiate on price?
            `,content:`Absolutely. If you think the appraised value has overlooked anything, please let us know and we’ll be happy to revisit the value.`},
            {title:`What is Sweetly?`,content:`We get this question almost every day, actually. There’s really no catch. We know, our programs make it easy – it’s by design! It’s not too good to be true, it’s just very good`},
            {title:`What's the catch?`,content:`Yes, you can consider our offer through your current listing brokerage. We normally re-list the property with the same Realtor and we pay 1% of the value which is roughly half of what most full service Realtors charge.`},
            {title:`What type of homes will you buy, not buy?`,content:`Our focus is on single family detached houses located in major centers within Alberta. We buy houses, duplex, townhomes, and row houses. We will consider condominiums ad-hawk but our focus is single family property. We do not purchase houses without a basement, those in extreme distress, in rural locations, vacant lots or commercial property.`},
            {title:`Are Sweetly programs available to me if I'm already listed with another agent?`,content:`Yes, but you may only consider our offer through your current brokerage. Sweetly is a licensed brokerage in the Province of Alberta and as such we follow the rules. If your home is currently listed with any other brokerage you must comply with the terms of your listing agreement for the duration of that listing term. You may consider our offer during your listing through your brokerage, or you may wait until your listing expires, is terminated or cancelled.`},
            {title:`Is there any obligation when I contact Sweetly?`,content:`No, there's never any obligation when you contact Sweetly.`},
            {title:`Can Sweetly help me buy my next home?`,content:`Yes! We can activate a search to notify you by email of all listings (from all real estate companies) that match your buying criteria. We’ll show you any home for sale and help you secure the home you love.`},
            {title:`How long does it take to get an offer for my home?`,content:`We can move as fast as you need. The first step is getting an appraisal to help set the price.`},
            {title:`Do I get to set my own closing date?`,content:`Yes, you can set a closing date that works best for you, but the date you select must be within 45 days. You’re free to change the possession date with reasonable notice too, and the change is free of charge. Let us know how we can make it easy for you, we’ll do what we can.`},
            {title:`Can I change the possession date after I sign?`,content:`Yes. You’re free to change the possession date as necessary, and at no cost. Just let us know how we can help.`},
            {title:`When will I need to move out of my home?`,content:`The possession day you choose is the day that you need to be out of the home. You need to provide vacant and clean possession on the day you choose.`},
            {title:`Do I have to pay a commission to sell to Sweetly?`,content:`No, we subtract our commission from the Appraised value which is the purchase price.`},
            {title:`How do the improvements I made to my home affect the value?`,content:`Improvements have an impact on the value of your property and will be accounted for in the appraisal.`},
            {title:`Is this a Guaranteed Sale program like those offered by other brokerages?`,content:`No! A Guaranteed Sale is a gimmick used by some Realtors to get your listing. They advertise a guaranteed sale that only takes place if your home doesn’t sell during a traditional listing period which requires you to list your home for sale and live through seller pains. We don’t require you to ‘list’ your home to sell to Sweetly.`},
            {title:`Does the Sweetly offer expire?
            `,content:`Not technically. However any stale or out dated offers may be withdrawn without notice.
            `},
            {title:`Will you want to see my house in person?
            `,content:`Sometimes yes. We love seeing homes but unfortunately we cannot see all the houses we buy. If there’s something you’d like us to know or see at your home, please let us know.
            `},
            {title:`What happens if the inspector finds a problem?
            `,content:`Don’t worry. No house is perfect and all have some level of deficiencies. We share the inspection report with you. The home inspections we do are for us (and you) to know what deficiencies exist, if any. If something is uncovered we’ll review them and propose a remedy to have them resolved – just like any buyer.
            `},
            {title:`Can I take any of my appliances?
            `,content:`Yes, but please make us aware of what you want to take so that we can make the necessary adjustment to the purchase agreement.
            `},
            {title:`What if I have more questions?
            `,content:`Call us! We’re happy to answer your questions. Our number is 780-477-9338.
            `},
        ],
        swiftsalefaqs:[
           {title:'How do I know that I’m getting a fair price from Sweetly?',
            content:`You get FULL market value for your home from Sweetly. Our resale price is often higher than what a seller can achieve because we sell the home vacant and available immediately, and we also make improvements to ensure that the house shows it's best. When we resell your home, we retain commission of 7% of $100,000 and 3% of the balance, and you get the full balance of the resale price! The full market value is paid to you, even if the actual sale price is more than the appraised value. The major difference is you don't need to tolerate showings and seller pains. `},
            {title:`How does the Sweetly offer compare to actual market value?
            `,content:`Actual market value can only be determined by the market (buyers). Our appraisal is done by a professional appraiser who's only job is to predict what a property will sell for in the current market, which makes our appraisal very reliable. Regardless of what your property sells for, we charge the same 7% of $100,000 and 3% of the balance. Which pays you the exact same net as compared to a traditional listing and sale. The difference is in the experience, given that you won't need to list your home, tolerate any public showings, and you even get to choose your own moving day.`},
            {title:`Does Sweetly negotiate on price?
            `,content:`Absolutely. If you think the appraised value has overlooked anything, please let us know and we’ll be happy to revisit the value.`},
            {title:`What is Sweetly?`,content:`We get this question almost every day, actually. There’s really no catch. We know, our programs make it easy – it’s by design! It’s not too good to be true, it’s just very good`},
            {title:`What's the catch?`,content:`We get this all the time. We know, our model is better. It's not too good to be true - it's just way better.`},
            {title:`What type of homes will you buy, not buy?`,content:`Our focus is on single family detached houses located in major centers within Alberta. We buy houses, duplex, townhomes, and row houses. We will consider condominiums ad-hawk but our focus is single family property. We do not purchase houses without a basement, those in extreme distress, in rural locations, vacant lots or commercial property.`},
            {title:`Can I sell to Sweetly if my home is already listed with another Brokerage?`,content:`Yes, but you may only consider our offer through your current brokerage. Sweetly is a licensed brokerage in the Province of Alberta and as such we follow the rules. While your listing is active, you must honor the terms of your listing agreement. Our rules require that we submit offers on listed properties through the listing agent only. If you want to avoid involving your current agent you may only consider our offer once your listing is no longer active.`},
            {title:`Is there any obligation when I contact Sweetly?`,content:`No, there's never any obligation when you contact Sweetly.`},
            {title:`Can Sweetly help me buy my next home?`,content:`Yes! We can activate a search to notify you by email of all listings (from all real estate companies) that match your buying criteria. We’ll show you any home for sale and help you secure the home you love.`},
            {title:`How long does it take to get an offer for my home?`,content:`We can move as fast as you need. The first step is getting an appraisal to help set the price.`},
            {title:`Do I get to set my own closing date?`,content:`Yes, you can set a closing date that works best for you, but the date you select must be within 45 days. You’re free to change the possession date with reasonable notice too, and the change is free of charge. Let us know how we can make it easy for you, we’ll do what we can.`},
            {title:`Can I change the possession date after I sign?`,content:`Yes. You’re free to change the possession date as necessary, and at no cost. Just let us know how we can help.`},
            {title:`When will I need to move out of my home?`,content:`The possession day you choose is the day that you need to be out of the home. You need to provide vacant and clean possession on the day you choose.`},
            {title:`Do I have to pay a commission to sell to Sweetly?`,content:`No, we subtract our commission from the Appraised value which is the purchase price.`},
            {title:`How do the improvements I made to my home affect the value?`,content:`Improvements have an impact on the value of your property and will be accounted for in the appraisal.`},
            {title:`Is this a Guaranteed Sale program like those offered by other brokerages?`,content:`No! A Guaranteed Sale is a gimmick used by some Realtors to get your listing. They advertise a guaranteed sale that only takes place if your home doesn’t sell during a traditional listing period which requires you to list your home for sale and live through seller pains. We don’t require you to ‘list’ your home to sell to Sweetly.`},
            {title:`Does the Sweetly offer expire?
            `,content:`Not technically. However any stale or out dated offers may be withdrawn without notice.
            `},
            {title:`Will you want to see my house in person?
            `,content:`Sometimes yes. We love seeing homes but unfortunately we cannot see all the houses we buy. If there’s something you’d like us to know or see at your home, please let us know.
            `},
            {title:`What happens if the inspector finds a problem?
            `,content:`Don’t worry. No house is perfect and all have some level of deficiencies. We share the inspection report with you. The home inspections we do are for us (and you) to know what deficiencies exist, if any. If something is uncovered we’ll review them and propose a remedy to have them resolved – just like any buyer.
            `},
            {title:`Can I take any of my appliances?
            `,content:`Yes, but please make us aware of what you want to take so that we can make the necessary adjustment to the purchase agreement.
            `},
            {title:`What if I have more questions?
            `,content:`Call us! We’re happy to answer your questions. Our number is 780-477-9338.
            `},
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
            {title:'How do I know that I’m getting a fair price from Sweetly?',
            content:`You get FULL market value for your home from Sweetly. Our resale price is often higher than what a seller can achieve because we sell the home vacant and available immediately, and we also make improvements to ensure that the house shows it's best. When we resell your home, we retain commission of 7% of $100,000 and 3% of the balance, and you get the full balance of the resale price! The full market value is paid to you, even if the actual sale price is more than the appraised value. The major difference is you don't need to tolerate showings and seller pains.`},
            {title:`How does the Sweetly offer compare to actual market value?
            `,content:`Actual market value can only be determined by the market (buyers). Our appraisal is done by a professional appraiser who's only job is to predict what a property will sell for in the current market, which makes our appraisal very reliable. Regardless of what your property sells for, we charge the same 7% of $100,000 and 3% of the balance. Which pays you the exact same net as compared to a traditional listing and sale. The difference is in the experience, given that you won't need to list your home, tolerate any public showings, and you even get to choose your own moving day.`},
            {title:`Does Sweetly negotiate on price?
            `,content:`Absolutely. If you think the appraised value has overlooked anything, please let us know and we’ll be happy to revisit the value.`},
            {title:`What is Sweetly?`,content:`Sweetly is a licensed real estate brokerage, blended with finance, and technology. We apply our finances to make our customers' selling and buying process easier, less risky, and more profitable! Sweetly offers solutions not available from traditional real estate brokerages.`},
            {title:`What's the catch?`,content:`We get this question almost every day, actually.  There's really no catch. We know, our programs make it easy - it's by design! It's not too good to be true, it's just very good.`},
            {title:`What type of homes will you buy, not buy?`,content:`Our focus is on single family detached houses located in major centers within Alberta. We buy houses, duplex, townhomes, and row houses. We will consider condominiums ad-hawk but our focus is single family property. We do not purchase houses without a basement, those in extreme distress, in rural locations, vacant lots or commercial property.`},
            {title:`Are Sweetly programs available to me if I'm already listed with another agent?`,content:`Yes, but you may only consider our offer through your current brokerage. Sweetly is a licensed brokerage in the Province of Alberta and as such we follow the rules. If your home is currently listed with any other brokerage you must comply with the terms of your listing agreement for the duration of that listing term. You may consider our offer during your listing through your brokerage, or you may wait until your listing expires, is terminated or cancelled.`},
            {title:`Is there any obligation when I contact Sweetly?`,content:`No, there's never any obligation when you contact Sweetly.`},
            {title:`Can Sweetly help me buy my next home?`,content:`Yes! We can activate a search to notify you by email of all listings (from all real estate companies) that match your buying criteria. We’ll show you any home for sale and help you secure the home you love.`},
            {title:`How long does it take to get an offer for my home?`,content:`We can move as fast as you need. The first step is getting an appraisal to help set the price.`},
            {title:`Do I get to set my own closing date?`,content:`Yes, you can set a closing date that works best for you, but the date you select must be within 45 days. You’re free to change the possession date with reasonable notice too, and the change is free of charge. Let us know how we can make it easy for you, we’ll do what we can.`},
            {title:`Can I change the possession date after I sign?`,content:`Yes. You’re free to change the possession date as necessary, and at no cost. Just let us know how we can help.`},
            {title:`When will I need to move out of my home?`,content:`The possession day you choose is the day that you need to be out of the home. You need to provide vacant and clean possession on the day you choose.`},
            {title:`Do I have to pay a commission to sell to Sweetly?`,content:`No. Our fee is taken from the second payment due to you once we resell the property. Our first payment is net to you.`},
            {title:`How do the improvements I made to my home affect the value?`,content:`Improvements have an impact on the value of your property and will be accounted for by the appraiser. If there is something specific or unique about your property, please let us know.`},
            {title:`Is this a Guaranteed Sale program like those offered by other brokerages?`,content:`No! A Guaranteed Sale is a gimmick used by some Realtors to get your listing. They advertise a guaranteed sale that only takes place if your home doesn’t sell during a traditional listing period which requires you to list your home for sale and live through seller pains. We don’t require you to ‘list’ your home to sell to Sweetly.`},
            {title:`Does the Sweetly offer expire?
            `,content:`Not technically. However any stale or out dated offers may be withdrawn without notice.
            `},
            {title:`Will you want to see my house in person?
            `,content:`Sometimes yes. We love seeing homes but unfortunately we cannot see all the houses we buy. If there’s something you’d like us to know or see at your home, please let us know.
            `},
            {title:`What happens if the inspector finds a problem?
            `,content:`Don’t worry. No house is perfect and all have some level of deficiencies. We share the inspection report with you. The home inspections we do are for us (and you) to know what deficiencies exist, if any. If something is uncovered we’ll review them and propose a remedy to have them resolved – just like any buyer.
            `},
            {title:`Can I take any of my appliances?
            `,content:`Yes, but please make us aware of what you want to take so that we can make the necessary adjustment to the purchase agreement.
            `},
            {title:`What if I have more questions?
            `,content:`Call us! We’re happy to answer your questions. Our number is 780-477-9338.
            `},
        ],
        Homefaqs:[
            {
                title:"How do I know that I’m getting a fair price from Sweetly?",
                content:"You get FULL market value for your home from Sweetly. Our resale price is often higher than what a seller can achieve because we sell the home vacant and available immediately, and we also make improvements to ensure that the house shows it's best. When we resell your home, we retain commission of 7% of $100,000 and 3% of the balance, and you get the full balance of the resale price! The full market value is paid to you, even if the actual sale price is more than the appraised value. The major difference is you don't need to tolerate showings and seller pains."
            },
            {
                title:"How does the Sweetly offer compare to actual market value?",
                content:"Actual market value can only be determined by the market (buyers). Our appraisal is done by a professional appraiser who's only job is to predict what a property will sell for in the current market, which makes our appraisal very reliable. Regardless of what your property sells for, we charge the same 7% of $100,000 and 3% of the balance. Which pays you the exact same net as compared to a traditional listing and sale. The difference is in the experience, given that you won't need to list your home, tolerate any public showings, and you even get to choose your own moving day."
            },
            {
                title:"Does Sweetly negotiate on price?",
                content:`Absolutely.  If you think the appraised value has overlooked anything, please let us know and we'll be happy to revisit the value.`
            },
            {
                title:"What is Sweetly?",
                content:`Sweetly is a licensed real estate brokerage, blended with finance, and technology. We apply our finances to make our customers' selling and buying process easier, less risky, and more profitable! Sweetly offers solutions not available from traditional real estate brokerages.`
            },
            {
                title:"What’s the catch?",
                content:`We get this question almost every day, actually.  There's really no catch. We know, our programs make it easy - it's by design! It's not too good to be true, it's just very good.
            `}
        ],
        instant_estimate_data:{},
        agent:{},
        status:'',
        homeaddress:'',
        latlong:null,
        homedatafirst:{},
        homedatasecond:{},
        contactinput:{},
        editdatainput:{},
        filteroptdata:{
            minBeds:'',
            minBaths:'',
            minParkingSpaces:'',
            minSqft:null,
            maxSqft:null,
            maxPrice:null,
            minPrice:null,
            propertyType:[],
            style:[],
        },
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
          ],
        formData: new FormData(),
        currentHome:null,
        similerbymsl:null,
        estimatevalue:null,
        localemail:null,
        selected_menu:"Sweet_Sale",
        city:"",
        imageArr:[],
        posY:null,

    },
    mutations:{
        setType(state,payload){
            state.typesale = payload
        },
        setfooterh(state,payload){
            state.footerh = payload
        },
        setposY(state,payload){
            state.posY = payload
        },
        editSelectedMenu(state,payload){
            state. selected_menu  = payload
        },
        setCity(state,payload){
            state.city = payload
        },
        CITYEMPLTY(state){
            state.city=""
        },
        setlocalemail(state,payload){
            state.localemail = payload
        },
        SET_CURRENT_AGENT(state,payload){
            state.agent = state.agents.filter(agent => {
                return agent.name.replace(/\s+/g, '-') === payload
            })
        },
        SET_CURRENT_HOME(state,payload){
            state.currentHome = payload
        },
        SAVE_FILTER_OPT(state,payload){
            state.filteroptdata = payload
        },
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
        },
        instant_estimate(state,payload){
            state.instant_estimate_data = payload
        },
        SETSimilarBymls(state,payload){
            state.similerbymsl = payload
        },
        SETestimatevalue(state,payload){
            state.estimatevalue = payload
        },
        Setuploadfile(state,payload){
            state.imageArr = payload
        }
    },
    actions:{
        Post_Instant({commit,state,dispatch}){
            let input={}
            input.full_address = state.homeaddress,
            input.storeys = state.homedatafirst.storeys,
            input.sqft = state.homedatafirst.squfeet,
            input.home_type = state.homedatafirst.hometype,
            input.bathrooms_full = state.homedatafirst.bathrooms_full,
            input.bathrooms_partial = state.homedatafirst.bathrooms_partial,
            input.bedrooms_bg = state.homedatafirst.bedrooms_bg,
            input.bedrooms_ag = state.homedatafirst.bedrooms_ag,
            input.garage_spaces = state.homedatafirst.garage_spaces,
            input.home_condition = state.homedatasecond.home_condition,
            input.parking_desc = state.homedatasecond.parking_desc,
            input.basement_desc = state.homedatasecond.basement_desc,
            input.priority = state.homedatasecond.prioritysale,
            input.occupancy = state.homedatasecond.CurrentOccupancy,
            input.hear_about_us = state.contactinput.socialchanel,
            input.full_name = state.contactinput.fullname,
            input.email = state.contactinput.email
            input.phone_number = state.contactinput.phone,
            input.longitude = state.latlong.lng,
            input.latitude = state.latlong.lat
            Object.entries(input).forEach((entry) =>
            state.formData.append(entry[0], entry[1])
            );
            return new Promise((resolve, reject) => {
                axios({url: 'listings/sweetly_estimate_form/', data:  state.formData, method: 'POST' })
                .then(resp => {

                  commit('instant_estimate', resp.data)

                  state.formData = new FormData()
                    if(state.imageArr.length){
                        dispatch('UploadImage');
                    }
                    
                  resolve(resp)


                 
                })
                .catch(err => {
                    state.formData = new FormData(),
                  reject(err)
                })
              })

        },

        UploadImage({state}){
            const formData = new FormData();
            for (const i of Object.keys(state.imageArr)) {
                formData.append('image', state.imageArr[i])
            }
            formData.append('form_id', state.instant_estimate_data.form_id)
            return new Promise((resolve, reject) => {
                axios({url: 'listings/form_images/', data:  formData, method: 'POST' })
                    .then(resp => {
                            resolve(resp)
                    })
                    .catch(err => {
                            reject(err)
                    })
            })

            // this.$http.post('listings/form_images/', formData, {
            // }).then((res) => {
            //     console.log(res)
            // })
        },
        ScrollTop(){
            window.scrollTo(0,0);
        },
        
        verifycodeactive({commit , state} , input){
            return new Promise((resolve, reject) => {
              commit('auth_request')
              axios({url: 'auth/activate_by_code/', data: input, method: 'POST' })
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
        login({commit , state} , input){
            return new Promise((resolve, reject) => {
              commit('auth_request')
              axios({url: 'auth/login/', data: input, method: 'POST' })
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
        register({commit }, input){
            return new Promise((resolve, reject) => {
              commit('auth_request')
              axios({url: 'auth/register/', data: input, method: 'POST' })
              .then(resp => {
                // const token = resp.data.token
                // const user = resp.data.user
                // localStorage.setItem('token', token)
                // localStorage.setItem('user', user)
                // axios.defaults.headers.common['Authorization'] = token
                // commit('auth_success', token)
                // state.user = resp.data.user
                // state.token = resp.data.token
                resolve(resp)
              })
              .catch(err => {
                commit('auth_error', err)
                localStorage.removeItem('token')
                reject(err)
              })
            })
          },
          registerGauth({commit, state} , atoken){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'social_auth/google/', data: atoken, method: 'POST' })
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
                axios({url: 'auth/logout/',  method: 'POST',headers:{
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
