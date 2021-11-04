<template>
  <div class="container">
    <div class="contactus my-5">
      <div class="item1 text-center">
        <p class="Roboto-Medium">Contact Sweetly Real Estate</p>
        <p class="text-color-1 Roboto-Regular">
          We're happy to provide the information you need, when you want it.
          There's never any cost or obligation when you call Sweetly.
        </p>
      </div>
      <div class="item2">
        <div class="row my-5">
          <div class="col-12 col-md-6">
            <div class="item2a">
              <div class="d-flex align-items-baseline">
                <div class="icon">
                  <img src="../../assets/image/contactus/email.svg" class="w-100 h-100" alt="email" />
                </div>
                <p class="ml-3 Roboto-Medium">info@sweetly.ca</p>
              </div>
              <div class="d-flex align-items-baseline">
                <div class="icon">
                  <img src="../../assets/image/contactus/address.svg" class="w-100 h-100" alt="address" />
                </div>
                <p class="ml-3 Roboto-Medium">
                  <span>Office:</span><br />
                  <span>Sweetly Real Estate</span><br />
                  <span>#161 6005 Gateway BVLD</span><br />
                  <span>Edmonton AB T6H 2H3</span>
                </p>
              </div>
              <div class="d-flex align-items-baseline">
                <div class="icon">
                  <img src="../../assets/image/contactus/phone.svg" class="w-100 h-100" alt="phone" />
                </div>
                <p class="ml-3 Roboto-Medium">780-477-9338</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="map-image">
              <img
                src="../../assets/image/contactus/map.svg"
                class="w-100 h-100"
                alt="map"
              />
            </div>
            <img
              src="../../assets/image/contactus/icon-location.svg"
              class="icon-location"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="item3">
        <div class="p-2 p-md-5">
          <div class="element1 text-center">
            <p class="Roboto-Medium">Contact Us</p>
            <p class="Roboto-Regular">
              Please fill out the form below and we'll get back to you as
              quickly as we can!
            </p>
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
                  <input type="email" class="form-control border-0 shadow-sm" />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Phone:*</label>
                  <input type="email" class="form-control border-0 shadow-sm" />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="exampleInputEmail1">Questions / Comments:*</label>
                  <textarea class="form-control border-0 shadow-sm" rows="4"></textarea>
                </div>
              </div>
            </div>
            <div class="col-10 col-md-3 mx-auto">
                <button type="submit" class="btn btn-submit w-100">Submit</button>
            </div>
            
          </form>
          <div class="text-center mt-4 text-color-1  element4 Roboto-Regular">
               <p>By proceeding, you consent to receive calls and texts at the number you provided, including marketing by auto-dialer, pre-recorded voicemail, and email, from this site's operators about real estate related matters, but not as a condition of purchase. You also agree to our Terms of Service, and to our Privacy Policy regarding the information relating to you. Message and data rates may apply. This consent applies even if you are on a corporate, state or national Do Not Call list.
             
.</p>
   <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.contactus .item1 p:first-child {
  color: #434242;
  font-size: 32px;
}
 .contactus .item1 p:last-child{
     font-size: 18px;
 }
.contactus .item2 .item2a {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 18px;
  padding: 10px;
}
.contactus .item2 .item2a .icon{
    width: 55px;
    height: 55px;
}
.contactus .item2 .item2a p{
    color: #707070;
    font-family: "Roboto", sans-serif;
}
.contactus .item2 .icon-location{
  position: absolute;
  bottom: 48%;
  left: 50%;
  right: 50%;
  top: 48%;
  width:46px ;
  height: 46px ;
}
.contactus .item3 {
  background-color: #edf3f2;
  margin-bottom: 6em;
}
.contactus .item3 .element1 p:first-child {
  font-size: 30px;
}
.contactus .item3 .element1 p:nth-child(2) {
  font-size: 18px;
}
.contactus .item3 .btn-submit{
    background-color: #FFB600;
    color: #fff;
    line-height: 1.8;
    transition: 0.3s ease-in-out;
}
.contactus .item3 .btn-submit:hover{
    background-color: #Fff;
    color: #FFB600;
    border: 1px solid #FFB600;
    line-height: 1.8;
}
.contactus .item3 .element4 p{
    font-size: 16px;
}
textarea{
    resize: none;
}

@media only screen and (max-width: 600px){
    .contactus .item1 p:first-child{
        font-size: 22px;
    }
    .contactus .item1 p:last-child{
        font-size: 14px;
    }
    .contactus .item2 .item2a{
    display: grid;
    grid-template-columns: auto;
    grid-gap: 4px;
    padding: 10px;
    
    }
    .contactus .item2 .item2a .icon {
    width: 40px;
    height: 40px;
}
.contactus .item2 .icon-location{
    position: absolute;
  bottom: 48%;
  left: 50%;
  right: 50%;
  top: 48%;
  width:26px ;
  height: 26px ;
}
.contactus .item3 .element1 p:first-child {
    font-size: 22px;
}
.contactus .item3 .element1 p:nth-child(2){
    font-size: 14px;
}
.contactus .item3 .element4 p{
    font-size: 12px;
}
}


</style>
