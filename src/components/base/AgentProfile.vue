<template>
    <div>
        <div class="agentprofile">
            <div class="item1 ">
                <div class="container">
                    <div class="element1">
                        <div class="image">
                            <img :src="agent.image" class="w-100 h-100" alt="personal photo" />
                        </div>
                        <div class="contactinfo">
                        <div class="mb-2 mb-md-0">
                            <button class="btn btn-call px-1 px-md-5 py-1 Roboto-Medium w-100">call  <span v-if="agent.phone">{{agent.phone}}</span></button>
                        </div>
                        <div class="">
                            <b-button v-b-modal="'contact-modal'" class="bnt btn-mail px-5 py-1 Roboto-Medium w-100">Email</b-button>
                            <b-modal size="lg" id="contact-modal">
                                
                                <div class="px-4 element1">
                                    <div class="text-center text-color-1 Roboto-Regular element1a">
                                        <p class="Roboto-Medium">Contact Agent Name</p>
                                        <p class="Roboto-Medium">Please complete the form below.</p>
                                    </div>
                                        <form>
                                    <div class="row Roboto-Regular">
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                        <label for="exampleInputEmail1">First Name:*</label>
                                        <input type="email" class="form-control border-0 shadow-sm" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                        <label for="exampleInputEmail1">Last Name:*</label>
                                        <input type="email" class="form-control border-0 shadow-sm" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                        <label for="exampleInputEmail1">Email Address:*</label>
                                        <input type="email" class="form-control border-0 shadow-sm" placeholder="name@website.com" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                        <label for="exampleInputEmail1">Phone:*</label>
                                        <input type="email" class="form-control border-0 shadow-sm" placeholder="(000) 000-0000" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                        <label for="exampleInputEmail1">Questions / Comments:*</label>
                                        <textarea class="form-control border-0 shadow-sm" rows="4"></textarea>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-10 col-md-6 mx-auto d-flex justify-content-around">
                                        <button type="button" class="btn btn-submit px-5 Roboto-Regular">Submit</button>
                                        <button type="button" class="btn btn-cancel px-5 Roboto-Regular">Cancel</button>
                                    </div>
                                    
                                </form>
                                <div class="text-center text-color-1 Roboto-Regular element5">
                                    <p>By proceeding, you consent to receive calls and texts at the number you provided, including marketing by auto-dialer, pre-recorded voicemail, and email, from this site's operators about real estate related matters, but not as a condition of purchase. You also agree to our Terms of Service, and to our Privacy Policy regarding the information relating to you. Message and data rates may apply.
                                    This consent applies even if you are on a corporate, state or national Do Not Call list.</p>
                                    <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                                </div>
                                </div>
                            </b-modal>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="item2 container mt-5">
                <div class="ml-5">
                    <p class="text-color-1 Roboto-Medium  name" v-if="agent.name">{{agent.name}}</p>
                    <p class="positionagent Roboto-Regular" v-if="agent.position">{{agent.position}}</p>
                </div>
                <div class="ml-5">
                    <p class="description Roboto-Regular text-color-1 pb-5" v-html='agent.details'>
                   
                      
                    

                    </p>
                </div>
            </div>

            <br><br>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        agent(){
            return this.$store.state.agent
        }
    },
}
</script>
<style scoped>
.agentprofile .item1{
    background-color: #F8F5E4;
/*     height: 300px; */
}
.agentprofile .item1 .element1{
    display: grid;
    grid-template-columns: auto auto;
} 
.agentprofile .item1 .element1 .contactinfo{
    display: flex;
    justify-content: space-around;
    align-items: self-end;
    flex-direction: row;
}
.agentprofile .item1 .image{
    width: 260px;
    height: 260px;
    
}
.agentprofile .item1 .image img{
margin-top: 5em;
}
.agentprofile .item1 .btn-call{
    background: #FFB600;
    border-radius: 8px;
    color: #fff;
    border: 1px solid #FFB600;
    font-size: 20px;
    
}
.agentprofile .item1 .btn-mail{
    background: #FFB600;
    border-radius: 5px;
    color: #fff;
    border: 1px solid #FFB600;
    font-size: 20px;
}
.agentprofile .item2 .name{
font-size: 30px;
}
.agentprofile .item2 .positionagent{
    color: #707070;
    font-size: 18px;
}
.agentprofile .item2 .description{
    font-size: 18px;
    border-bottom: 1px solid #C2C8C8;
}
.agentprofile .modal-dialog{
    max-width: 800px;
}
#contact-modal .element1 .element1a  p:first-child{
    font-size: 28px;
}
#contact-modal .element1 .element1a  p:last-child{
    font-size: 18px;
}
#contact-modal .element1{
    margin-top: -3em;
}
button.close{
      background-color: #fff !important;
}
.modal-header .close {
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
  margin: 0.25rem 0.125rem !important;
  border-radius: 50%;
}
#contact-modal .btn-submit{
    background: #FFB600;
    border: 1px solid #FFB600;
    color: #fff;
    border-radius: 6px;

}
#contact-modal .btn-cancel{
    background: #EDF3F2;
    border: 1px solid #707070;
    color: #707070;
    border-radius: 6px;
    
}
#contact-modal .element5 p{
    font-size: 14px;
}
textarea{
    resize: none;
}
.contactinfo div{
    width: unset;
}
@media (min-width: 760px){
.modal-dialog {
    max-width: 780px;
    margin: 1.75rem auto;
    
    }
}
@media only screen and (max-width: 600px){
    .agentprofile .item1 .image{
        width: 200px;
        height: 260px;
    }
    .agentprofile .item1 .element1 .contactinfo{
    display: flex;
    justify-content: flex-end;
    align-items: self-end;
    flex-direction: column;
}
.agentprofile .item1 .btn-call{
    font-size: 16px;
}
.agentprofile .item1 .btn-mail{
    font-size: 16px;
}
.contactinfo div{
    width: 100%;
}
}
</style>