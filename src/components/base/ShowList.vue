<template>
    <div class="showlist">
        <div class="container ">
          <div class="space-40"></div>

            <div class="item1">
            <div class="item1a">
                <p class="font-weight-bold open-sans" v-if="listingsold">{{listingsold.count.toLocaleString('ja-JP')}}
                  <span class="open-sans text-color-2" style="font-size: 16px;" v-if="listingsold.count > 1500">Listings Found | Showing {{reshowing}} <br>Only 1500 properties may be displayed per search.<br> To see all your results, try narrowing your search criteria</span>
                  <span class="DMSerifRegular text-color-2" v-else>Results</span>
                </p>
            </div>
            <div class="item1b">
                <button class="Roboto-Regular btn bg-white" @click="submit">Show Map</button>
            </div>
            <div class="item1c">
                <div class="text-color-2 Roboto-Regular dropdown">
                    <a class="nav-link dropdown-toggle text-color-2"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{filerdata.value}} <img class="arrow-bottom" src="../../assets/image/icon/arrowbottom.svg" alt="">
                  <img class="arrow-top" src="../../assets/image/icon/arrowtop2.svg" alt="">
                    </a>
                    <div v-if="type == 'forsale'" class="dropdown-menu bg-white border-0" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item"  :class="{filteractive : filerdata.name == filter.name }"  v-for="filter in filerlist" :key="filter.id" @click="changeFilter(filter)" >{{filter.name}}</a>
                    </div>
                     <div v-else class="dropdown-menu bg-white border-0" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item pointer"   :class="{filteractive : filerdata.name == filter.name }"  v-for="filter in filerlistsold" :key="filter.id" @click="changeFilter(filter)">{{filter.name}}</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="cards my-5" >
            <card-list
             v-for="listing in listings" :key="listing.id" :homedata="listing" :type="type"
            @SignUp="SignUp"
             ></card-list>
        </div>
         <div class="text-center my-5 container">
        <b-spinner  v-if="loading" style="width: 4rem; height: 4rem;" variant="warning" label="Large Spinner"></b-spinner>
      </div>

        <div class="text-center my-5 DMSerifRegular" v-if="!loading && loadedlistingsold && tatal == 0">
            No Matchig Data
        </div>
        <div class="my-5 row">
            <div class="col-12 d-flex justify-content-center">
                   <b-pagination
                    v-model="paginationpage"
                    :total-rows="tatal"
                    :per-page="30"
                    prev-text="←  Prev"
                    next-text="Next  →"
                    first-number
                    last-number

                ></b-pagination>
            </div>

        </div>
            <div class="my-5 disclaimer-content">
                <p class="Roboto-Regular" v-if="MainboardId == 18">Data is supplied by Pillar 9™ MLS® System. Pillar 9™ is the owner of the copyright in its MLS® System. Data is deemed reliable but is not guaranteed accurate by Pillar 9™. The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by The Canadian Real Estate Association (CREA) and identify the quality of services provided by real estate professionals who are members of CREA. Used under license.</p>
                 <p class="Roboto-Regular" v-if="MainboardId == 21">
                     Copyright {{yearnow}} by the REALTORS® Association of Edmonton. All Rights Reserved.<code><br></code>
                     The MLS® System Data is made available from the REALTORS® Association of Edmonton. Data is deemed reliable but is not guaranteed accurate by the REALTORS® Association of Edmonton. Days on Site and market statistics values are calculated by Sierra Interactive based on values provided in the REALTORS® Association of Edmonton listing data feed. Mortgage values are calculated by Sierra Interactive and are provided for estimate purposes only.<code><br></code>
                     Trademarks are owned or controlled by the Canadian Real Estate Association (CREA) and identify real estate professionals who are members of CREA (REALTOR®, REALTORS®) and/or the quality of services they provide (MLS®, Multiple Listing Service®)

                 </p><br>
                  <p  class="Roboto-Regular text-color-1">
                    Listing information last updated on {{lastupdatemonth}} at {{lastupdatehour}}  ({{timezone}})
                 </p>
            </div>
        </div>
          <b-modal
            ref="my-modal"
            header-bg-variant="white"
            body-bg-variant="white"
            footer-bg-variant="white"
          >
            <sign-up
              @hidesignupmodal="hidesignupmodal"
              @XsignupOlogin="XsignupOlogin"
              @OpenVerifycode="OpenVerifycode"
            ></sign-up>
          </b-modal>
          <b-modal
            ref="my-modallogin"
            header-bg-variant="white"
            body-bg-variant="white"
            footer-bg-variant="white"
          >
            <log-in
              @hideloginmodal="hideloginmodal"
              @xloginOsignup="xloginOsignup"
               @Openforgetcode="Openforgetcode"
               @Openverifyemailbtcode="Openverifyemailbtcode"
            ></log-in>
          </b-modal>
                <b-modal
            id="verify-modal"
            header-bg-variant="white"
            body-bg-variant="white"
            footer-bg-variant="white"

            no-close-on-backdrop
          >
            <verification-code
              @OpenVerifycode="OpenVerifycode"
              @closeVerify="closeVerify"
            ></verification-code>
          </b-modal>

        <b-modal
            id="forget-code"
            header-bg-variant="white"
            body-bg-variant="white"
            footer-bg-variant="white"

            no-close-on-backdrop
          >
            <forget-code
              @closepopup="closepopup"
            ></forget-code>
          </b-modal>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import moment from "moment";
export default {
    props:{homedata:{},type:{default:'forsale'}},
    data(){
        return{
            paginationpage:1,
            filerlist:[
              {name:'Date listed (new to old)',value:'createdOnDesc'},
              {name:'Price (low to high)',value:'listPriceAsc'},
              {name:'Price (high to low)',value:'listPriceDesc'},
              {name:'Internal sqft (most to least)',value:'sqftDesc'},
              {name:'Internal sqft (least to most)',value:'sqftAsc'}
            //   {name:'Price (high to low)',value:'listPriceDesc'},
            //   {name:'Price (high to low)',value:'listPriceDesc'},
            ],
            filerlistsold:[
              {name:'Date Sold (new to old)',value:'soldDateDesc'},
              {name:'Price (low to high)',value:'soldPriceAsc'},
              {name:'Price (high to low)',value:'soldPriceDesc'},
              {name:'Internal sqft (most to least)',value:'sqftDesc'},
              {name:'Internal sqft (least to most)',value:'sqftAsc'}
            //   {name:'Price (high to low)',value:'listPriceDesc'},
            //   {name:'Price (high to low)',value:'listPriceDesc'},
            ],
            listingsold:{},
            listings:[],
            loading:false,
            loadedlistingsold:null,
            tatal:0,
            filerdata:null,
            // minBeds:this.$store.state.filteroptdata.minBeds,
            // minParkingSpaces:this.$store.state.filteroptdata.minParkingSpaces,
            // minSqft:this.$store.state.filteroptdata.minSqft,
            // maxSqft:this.$store.state.filteroptdata.maxSqft,
            // maxPrice:this.$store.state.filteroptdata.maxPrice,
            // minPrice:this.$store.state.filteroptdata.minPrice,
            // propertyType:this.$store.state.filteroptdata.propertyType,
            // style:this.$store.state.filteroptdata.style,

            
            
        }
    },
watch:{
    paginationpage:function(){
        this.listings = []
        this.myCallback()
    }
},
computed:{
    ...mapState(["city"]),
    filteropt(){
        return this.$store.state.filteroptdata || {}
    },
    yearnow(){
        return new Date().getFullYear();
    },
    minBeds(){
        return this.filteropt.minBeds
    },
    minParkingSpaces(){
        return this.filteropt.minParkingSpaces
    },
    minBaths(){
        return this.filteropt.minBaths
    },
    minSqft(){
        if(this.filteropt.minSqft == null || this.filteropt.minSqft == 1){
            return ""
        }else{
        return this.filteropt.minSqft
        }
       
    },
    maxSqft(){
           if(this.filteropt.maxSqft == null || this.filteropt.maxSqft == 4500){
            return ""
        }else{
        return this.filteropt.maxSqft
        }
    },
     maxPrice(){
         if(this.filteropt.maxPrice){
             return this.filteropt.maxPrice.replace(/,/g, "");
         }else{
              return ""
         }  
       
    },
     minPrice(){
         if(this.filteropt.minPrice){
             return this.filteropt.minPrice.replace(/,/g, "");
         }else{
              return ""
         }  
    },
    propertyType(){
        return this.filteropt.propertyType
    },
    style(){
        return this.filteropt.style
    },
    // city(){
    //   return this.city
    // },
   MainboardId(){
       if(this.listings){
           return this.listings[0].boardId;
       }else{
           return null
       }
   },
   reshowing(){
            let start = (this.paginationpage -1) *  30;
            let end = start + 30
            return start + ` - ` + end
        },
         timezone(){
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    },
        lastupdatemonth(){
      return moment(this.lastupdate).format("MMM Do YYYY");
    },
    lastupdatehour(){
      const d = new Date();
     let res =  d.toLocaleString('en-US',  {
        timeZone: this.timezone,
    hour: '2-digit',
    hour12: true
})
    return  res.replace(/[ ,]+/g, ":00 ")
    },
},
    methods:{
        
        submit(){
            this.$emit('submit')
        },
        changeFilter(filter){
            console.log(filter)
            this.filerdata = filter;
            this.paginationpage = 1;

             if(this.type == 'sold'){
                this.find_listings_Sold();
            }else{
            this.find_listings_forSale();
            }
        },
        myCallback() {
            if(this.type == 'sold'){
                this.find_listings_Sold();
            }else{
            this.find_listings_forSale();
            }
        document.body.scrollTop = 0;
    },
    find_listings_SoldMain(){
         this.paginationpage = 1;
         this.filerdata = {name:'Date Sold (new to old)',value:'soldDateDesc'};
         this.find_listings_Sold();
    },
    find_listings_Sold(){
        let sortBy = this.filerdata.value;
        let pageNum = this.paginationpage;
        this.listings = 0
        this.loading = true ;
        let minBeds = this.minBeds;
        let minParkingSpaces = this.minParkingSpaces;
        let minSqft= this.minSqft;
        let maxSqft = this.maxSqft;
        let minPrice = this.minPrice;
        let maxPrice =this.maxPrice;
        let propertyType = this.propertyType;
        let style = this.style;
        let minBaths = this.minBaths;
        let city = this.city;

     //   this.$parent.runloading()
        this.loadedlistingsold = false
        this.$http.get(`listings/listings_pages/?sortBy=${sortBy}&pageNum=${pageNum}&resultsPerPage=30&type=sold&minBeds=${minBeds}&minParkingSpaces=${minParkingSpaces}&minSqft=${minSqft}&maxSqft=${maxSqft}&minSoldPrice=${minPrice}&maxSoldPrice=${maxPrice}&propertyType=${propertyType}&style=${style}&minBaths=${minBaths}&city=${city}`).then((res) =>{
            this.loading = false 
            this.listingsold = res.data
            this.listings = res.data.listings
            this.tatal = res.data.count
             this.loading = false
             this.loadedlistingsold=true

          this.$parent.stoploading()
        })
    },
    find_listings_forSaleMain(){
        this.paginationpage = 1;
        this.filerdata =  {name:'Date listed (new to old)',value:'createdOnDesc'};
        this.find_listings_forSale();
    },
    find_listings_forSale(){
        let sortBy = this.filerdata.value;
        let pageNum = this.paginationpage;
      this.listings = 0
        this.loading = true ;
        let minBeds = this.minBeds;
        let minParkingSpaces = this.minParkingSpaces;
        let minSqft= this.minSqft;
        let maxSqft = this.maxSqft;
        let minPrice = this.minPrice;
        let maxPrice =this.maxPrice;
        let propertyType = this.propertyType;
        let style = this.style;
        let city = this.city;
        let minBaths = this.minBaths;
       // this.$parent.runloading()
        this.loadedlistingsold = false
        this.$http.get(`listings/listings_pages/?sortBy=${sortBy}&pageNum=${pageNum}&resultsPerPage=30&type=forsale&minBeds=${minBeds}&minParkingSpaces=${minParkingSpaces}&minSqft=${minSqft}&maxSqft=${maxSqft}&minPrice=${minPrice}&maxPrice=${maxPrice}&propertyType=${propertyType}&style=${style}&minBaths=${minBaths}&city=${city}`).then((res) =>{
            this.loading = false 
            this.listingsold = res.data
            this.listings = res.data.listings
            this.tatal = res.data.count
             this.loading = false
             this.loadedlistingsold=true
          this.$parent.stoploading()
        })
    },
     SignUp() {
      this.$refs['my-modal'].show();
    },
    XsignupOlogin() {
        this.$refs['my-modal'].hide();
       this.$refs['my-modallogin'].show();
    },
    hidesignupmodal() {
     this.$refs['my-modal'].hide();
    },
    hideloginmodal() {
      this.$refs['my-modallogin'].hide();
    },
    xloginOsignup() {
      this.$refs['my-modallogin'].hide();
      this.$refs['my-modal'].show();
    },
    OpenVerifycode(){
      this.$bvModal.show("verify-modal");
    },
    Openverifyemailbtcode(){
         this.$bvModal.show("verify-modal");
         this.$bvModal.hide("my-modallogin");
    },
    closeVerify(){
      this.$bvModal.hide("verify-modal");
    },
     Openforgetcode(){
      this.$bvModal.hide("my-modallogin");
      this.$bvModal.show("forget-code");

    },
    closepopup(){
      this.$bvModal.hide("forget-code");
    },
    },
    created(){
          if(this.type == 'sold'){
            this.filerdata  =  {name:'Date solid (new to old)',value:'soldDateDesc'}
        }else{
            this.filerdata  =   {name:'Date listed (new to old)',value:'createdOnDesc'}
        }
     //   this.find_listings_forSale();
    }
}
</script>
<style scoped>
.hidden{
  display: none !important;
}
.showlist .item1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
/*     position: fixed;
    left: calc(2% - 4px);
    right: calc(2% - 4px);
    top: 35%;
    bottom: auto; */
}
/*     .showlist .togglemap{
    display: inline-block;
    height: 40px;
    position: fixed;
    left: calc(50% - 43px);
    top: 25%;
    bottom: auto;
    z-index: 1;
} */
.showlist .item1 button{
    color: inherit;
    white-space: nowrap;
    padding: 4px 16px;
    border-radius: 16px;
    font-size: 1rem;
    border: 1px solid #707070;
}
.showlist .cards {
    display: grid;
    grid-template-columns: auto auto auto ;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
}
.showlist .item1 .item1a{
    font-size: 20px;
    width: 33%;
}
/* .showlist .item1 .item1b{
    display: inline-block;
    height: 40px;
    position: absolute;
    left: calc(50% - 43px);
    bottom: 24px;
    top: 0px;
    z-index: 1;
} */
.showlist .item1 .item1c{
    font-size: 16px;
    width: 33%;
    text-align: right;
}
.space-40{
    height: 40px;
}
.showlist .dropdown-menu .dropdown-item{
    color: #434242;
}
.showlist .dropdown-menu .dropdown-item:hover{
    background: #ffbf00ad;
    color: #fff;
     cursor: pointer;
}
.dropdown-menu .filteractive{
     background: #FFB600;
    color: #fff !important;
}
.dropdown-menu{
    left: 5% !important;
    width: 95%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 29%), 0 -1px 2px -1px rgb(0 0 0 / 24%);

}
.dropdown-toggle::after{
    display: none;
}
.item1c .dropdown-toggle{
    z-index: 1000;
}
.pointer{
    cursor: pointer;
}
.disclaimer-content p{
    color: #434242;
}
.dropdown .arrow-top{
    display: none;
}
.show .arrow-top{
    display: initial;
}
.show .arrow-bottom{
    display: none;
}
@media only screen and (max-width: 600px){
    .showlist .cards{
        grid-template-columns: auto ;
    }
   
    .showlist .item1{
        /* flex-direction: column; */
    }
    .space-40{
        height: 100px;
    }
    .showlist .item1 .item1a{
        font-size: 14px;
    }
    .showlist .item1 .item1a{
        font-size: 14px;
    }
    .dropdown-menu {
    left: -20% !important;
    width: 14em;
}

}
@media only screen and (min-width: 900px){
.showlist .cards {
    display: grid;
    grid-template-columns: auto auto;

}
}
@media only screen and (min-width: 1200px){
.showlist .cards {
    display: grid;
    grid-template-columns: auto auto auto;

}
}
</style>