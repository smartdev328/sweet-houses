<template>
    <div class="showlist">
        <div class="container ">
                <div class="space-40"></div>
            <div class="item1">
            <div class="item1a">
                <p>8485 <span class="DMSerifRegular text-color-2">Result</span> </p>
            </div>
            <div>
                <button class="Roboto-Regular btn bg-white" @click="submit">Show Map</button>
            </div>
            <div class="item1c">
                <div class="text-color-2 Roboto-Regular dropdown">
                    <a class="nav-link dropdown-toggle text-color-2"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Date listed (new to old)
                    </a>
                    <div class="dropdown-menu bg-white border-0" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Date listed (new to old)</a>
                    <a class="dropdown-item" href="#">Price (low to high)</a>
                    <a class="dropdown-item" href="#">Price (high to low)</a>
                    <a class="dropdown-item" href="#">Beds (most to least)</a>
                    <a class="dropdown-item" href="#">Internal sqft (most to least)</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="cards my-5">
            <div>
                <card-home></card-home>
            </div>
            <div>
                <card-home></card-home>
            </div>
            <div>
                <card-home></card-home>
            </div>
            <div>
                <card-home></card-home>
            </div>
            <div>
                <card-home></card-home>
            </div>
        </div>
        <div class="my-5 row">
            <div class="col-12 d-flex justify-content-center">
                 <pagination
                    v-model="paginationpage"
                    :records="15"
                    :perPage="5"
                    :prev-text="'Prev'"
                    :next-text="'Next'"
                    count-text=""
                    @paginate="myCallback"
                  />
            </div>
           
        </div>
              
        </div>
        
      
       <!--  <div class="togglemap">
      <button class="Roboto-Regular btn bg-white" @click="submit">Show Map</button>
    </div> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            paginationpage:1
        }
    },
    components: {
  
},
    methods:{
        submit(){
            this.$emit('submit')
        },
        myCallback() {
        console.log(this.paginationpage)
    },
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
    font-size: 16px;
}
.showlist .item1 .item1c{
    font-size: 16px;
}
.space-40{
    height: 40px;
}
.showlist .dropdown-menu .dropdown-item{
    color: #434242;
}
.showlist .dropdown-menu .dropdown-item:hover{
    background: #FFB600;
    color: #fff;
}
.item1c .dropdown-toggle{
    z-index: 1000;
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
    grid-template-columns: auto auto ;

}
}
@media only screen and (min-width: 1200px){
.showlist .cards {
    display: grid;
    grid-template-columns: auto auto auto;

}
}
</style>