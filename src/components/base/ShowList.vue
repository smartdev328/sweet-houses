<template>
    <div class="showlist">
        <div class="container ">
                <div class="space-40"></div>
            <div class="item1">
            <div class="item1a">
                <p class="font-weight-bold" v-if="loadedlistingsold">{{listingsold.count.toLocaleString('ja-JP')}} <span class="DMSerifRegular text-color-2">Results</span> </p>
            </div>
            <div class="item1b">
                <button class="Roboto-Regular btn bg-white" @click="submit">Show Map</button>
            </div>
            <div class="item1c">
                <div class="text-color-2 Roboto-Regular dropdown">
                    <a class="nav-link dropdown-toggle text-color-2"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{filerdata.name}} <img class="arrow-bottom" src="../../assets/image/icon/arrowbottom.svg" alt=""> 
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
        <div class="cards my-5" v-if="loadedlistingsold">
            <card-list v-for="listing in listings" :key="listing.id" :homedata="listing" :type="type"
            @SignUp="SignUp"
             ></card-list>
        </div>
        <div class="text-center my-5"> 
            <b-spinner v-if="!loadedlistingsold && loading" style="width: 4rem; height: 4rem;" variant="warning" label="Large Spinner"></b-spinner>
        </div>
        <div class="my-5 row" v-if="loadedlistingsold">
            <div class="col-12 d-flex justify-content-center">
                  <!-- <pagination
                    v-model="paginationpage"
                    :records="tatal"
                    :perPage="30"
                    :prev-text="'Prev'"
                    :next-text="'Next'"
                    count-text=""
                    last-number
                     :options="{
                            chunk: 8,
                            lastnumber,
                            texts: {
                            count: ''
                            }
                        }"
                    @paginate="myCallback"
                  />  -->
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
                <p class="Roboto-Regular">Data is supplied by Pillar 9™ MLS® System. Pillar 9™ is the owner of the copyright in its MLS® System. Data is deemed reliable but is not guaranteed accurate by Pillar 9™. The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by The Canadian Real Estate Association (CREA) and identify the quality of services provided by real estate professionals who are members of CREA. Used under license.</p>
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
            ></log-in>
          </b-modal>
    </div>
</template>
<script>
export default {
    props:{homedata:{},type:{default:'forsale'}},
    data(){
        return{
            paginationpage:1,
            city:'Calgary',
            filerlist:[
              {name:'Date listed (new to old)',value:'createdOnDesc'},
              {name:'Price (low to high)',value:'listPriceAsc'},
              {name:'Price (high to low)',value:'listPriceDesc'},
            //   {name:'Price (high to low)',value:'listPriceDesc'},
            //   {name:'Price (high to low)',value:'listPriceDesc'},
            ],
            filerlistsold:[
              {name:'Date Sold (new to old)',value:'soldDateDesc'},
              {name:'Price (low to high)',value:'soldPriceAsc'},
              {name:'Price (high to low)',value:'soldPriceDesc'},
            //   {name:'Price (high to low)',value:'listPriceDesc'},
            //   {name:'Price (high to low)',value:'listPriceDesc'},
            ],
            listingsold:{},
            listings:[],
            loading:null,
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
        this.myCallback()
    }
},
computed:{
    filteropt(){
        return this.$store.state.filteroptdata || {}
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
        if(this.filteropt.minSqft == null || this.filteropt.maxSqft == 1){
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
         if(this.filteropt.maxPrice > 0){
             return this.filteropt.maxPrice.replace(',','')
         }else{
              return ""
         }  
       
    },
     minPrice(){
         if(this.filteropt.minPrice > 0){
             return this.filteropt.minPrice.replace(',','')
         }else{
              return ""
         }  
    },
    propertyType(){
        return this.filteropt.propertyType
    },
    style(){
        return this.filteropt.style
    }
   
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
        window.scrollTo(0,200);
    },
    find_listings_SoldMain(){
         this.paginationpage = 1;
         this.filerdata = {name:'Date solid (new to old)',value:'soldDateDesc'};
         this.find_listings_Sold();
    },
    find_listings_Sold(){
        let sortBy = this.filerdata.value;
        let pageNum = this.paginationpage;
        this.loading = true ;
        let minBeds = this.minBeds;
        let minParkingSpaces = this.minParkingSpaces;
        let minSqft= this.minSqft;
        let maxSqft = this.maxSqft;
        let minPrice = "";
        let maxPrice = "";
        let propertyType = this.propertyType;
        let style = this.style;
        let minBaths = this.minBaths;
        this.loading = true 
        this.loadedlistingsold = false
        this.$http.get(`listings/find_listings/?city=Calgary&sortBy=${sortBy}&pageNum=${pageNum}&resultsPerPage=30&type=sold&minBeds=${minBeds}&minParkingSpaces=${minParkingSpaces}&minSqft=${minSqft}&maxSqft=${maxSqft}&minPrice=${minPrice}&maxPrice=${maxPrice}&propertyType=${propertyType}&style=${style}&minBaths=${minBaths}`).then((res) =>{
            this.loading = false 
            this.listingsold = res.data
            this.listings = res.data.listings
            this.tatal = res.data.count
             this.loading = false
             this.loadedlistingsold=true
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
        this.loadedlistingsold = false
        this.$http.get(`listings/find_listings/?city=Calgary&sortBy=${sortBy}&pageNum=${pageNum}&resultsPerPage=30&type=forsale&minBeds=${minBeds}&minParkingSpaces=${minParkingSpaces}&minSqft=${minSqft}&maxSqft=${maxSqft}&minPrice=${minPrice}&maxPrice=${maxPrice}&propertyType=${propertyType}&style=${style}&minBaths=${minBaths}`).then((res) =>{
            this.loading = false 
            this.listingsold = res.data
            this.listings = res.data.listings
            this.tatal = res.data.count
             this.loading = false
             this.loadedlistingsold=true
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
    },
    created(){
          if(this.type == 'sold'){
            this.filerdata  =  {name:'Date solid (new to old)',value:'soldDateDesc'}
        }else{
            this.filerdata  =   {name:'Date listed (new to old)',value:'createdOnDesc'}
        }
        this.find_listings_forSale();
    }
}
</script>
<style scoped>
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
    left: 35% !important;
    width: 65%;
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
        flex-direction: column;
    }
    .space-40{
        height: 100px;
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