<template>
    <div class="ourteams">
        <div class="container">
            <div class="my-5">
            <div class="item1 Roboto-Medium text-color-1">
                <p>Our Team Of Edmonton Realtors</p>
           </div>
                    <div class="item2">
                            <div class="gridcol" v-for="agent in agents" :key="agent.id">
                                <div class="image mx-auto">
                                    <img :src="agent.image" class="w-100 h-100" alt="personal photo">
                                </div>
                                <div class="conent-info text-center">
                                    <p class="name text-color-1 mb-2 Roboto-Medium">{{agent.name}}</p>
                                    <p class="position mb-2 Roboto-Regular">{{agent.position}}</p>
                                    <a @click="openprofile(agent)" class="btn leaen-more Roboto-Regular">
                                        <p>Learn More</p>
                                        <div class="icon-arrow">
                                            <img src="../../../assets/image/homepage/team/Right.svg" class="ml-3" alt="">
                                        </div>
                                    </a>
                                </div>
                            </div>
                    </div>
            <div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    computed:{
        agents(){
            return this.$store.state.agents
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
<style scoped>
    .ourteams .item1 p{
        font-size: 28px;
    }
    .ourteams .item2{
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
    padding: 10px;
    }
    .ourteams .item2 .gridcol .conent-info{
   /*  width: 75%;
    margin: auto; */
    }
    .ourteams .item2 .gridcol .image{
        width: 280px;
        height: 280px;
    }
    .ourteams .item2 .gridcol .conent-info .name  {
        font-size: 24px;
    }
    .ourteams .item2 .gridcol .conent-info .position{    
    color:#707070 ;  
    font-size: 18px;
}
.ourteams .item2 .gridcol .conent-info .leaen-more{
    font-size: 18px;
    color: #FFB600;
    display: flex;
    width: 50%;
    margin: auto;
    /* justify-content: center; */
    padding-left: 0px;
}
@media only screen and (max-width: 600px){
    .ourteams .item2{
        grid-template-columns: auto;
    }
    .ourteams .item1 p{
        font-size: 18px;
    }
    .ourteams .item2 .gridcol .image{
        width: 160px;
        height: 160px;
    }





}
</style>