<template>
    <section class="contact-page-sec">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-map-marked"></i>
              </div>
              <div class="contact-info-text">
                <h2>ADDRESS</h2>
                <span>88 downwards</span>
                <span>Mitchell's Plain, South Africa</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-info-text">
                <h2>E-MAIL</h2>
                <span>solofinn8@gmail.com</span>
                <span>jsolomons239@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-info-text">
                <h2>Contact Number</h2>
                <span>Business: 0213722985</span>
                <span>For Assistance: 0724170483</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="contact-page-form" method="post">
            <h2>Get in Touch</h2>
            <form action="contact-mail.php" method="post">
              <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field v-model">
                  <input type="text" placeholder="Your Name" name="name"/>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field v-model">
                  <input type="email" placeholder="E-mail" name="email" required/>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field v-model">
                  <input type="text" placeholder="Phone Number" name="phone"/>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field v-model">
                  <input type="text" placeholder="Subject" name="subject"/>
                </div>
              </div>
              <div class="col-md-12 message-input">
                <div class="single-input-field v-model">
                  <textarea class="text-center" placeholder="Write Your Message" name="message"></textarea>
                </div>
              </div>
              <div class="single-input-fieldsbtn">
                <input type="submit" value="Send Now"/>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
}
</script>
<style scoped>
  .contact-page-sec{
    background:
     linear-gradient(rgba(255, 255, 255, 0),rgba(0, 0, 0, 0.919)), url(https://i.postimg.cc/43TDH263/sneakerstore.png) center/cover no-repeat;
     min-height: 100vh;
  }
.contact-info {
  display: inline-block;
  width: 100%;
  text-align: center;
      margin: 10px;
      margin-top: 4rem;
      box-shadow: 2px 2px 2px 2px;
}
.contact-info-icon {
margin-bottom: 15px;
}
.contact-info-item {
  background: #000000;
  padding: 30px 0px;
}
.contact-page-sec .contact-page-form h2 {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
}
.contact-page-form .col-md-6.col-sm-6.col-xs-12 {
  padding-left: 0;
}
.contact-page-form.contact-form input {
  margin-bottom: 5px;
}
.contact-page-form.contact-form textarea {
  height: 110px;
}
.contact-page-form.contact-form input[type="submit"] {
  width: 150px;
}
.contact-info-icon i {
  font-size: 48px;
}
.contact-info-text p{margin-bottom:0px;}
.contact-info-text h2 {
  color: #fff;
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 10px;
}
.contact-info-text span {
  color: #FFFFFF;
  font-size: 16px;
  display: inline-block;
  width: 100%;
}
.contact-page-form input {
  background: #F9F9F9 none repeat scroll 0 0;
  border: 1px solid #F9F9F9;
  margin-bottom: 20px;
  padding: 12px 16px;
  width: 100%;
  border-radius: 4px;
}
.contact-page-form .message-input {
display: inline-block;
width: 100%;
padding-left: 0;
}
.single-input-field textarea {
  background: #F9F9F9 none repeat scroll 0 0;
  border: 1px solid #F9F9F9;
  width: 100%;
  height: 120px;
  border-radius: 4px;
}
.single-input-fieldsbtn input[type="submit"] {
  background: #000000 none repeat scroll 0 0;
  color: #fff;
  display: inline-block;
  font-weight: 600;
  padding: 10px 0;
  text-transform: capitalize;
  width: 150px;
  margin-top: 20px;
  font-size: 16px;
}
.single-input-fieldsbtn input[type="submit"]:hover{background:#ffffff;color:black; transition: all 0.4s ease-in-out 0s;border-color:rgb(0, 0, 0)}
.single-input-field  h4 {
  color: #000000;
  text-transform: capitalize;
  font-size: 14px;
}
.contact-page-form {
  display: inline-block;
  width: 100%;
  margin-top: 30px;
}
.contact-page-form form {
  padding: 20px 15px 0;
}
</style>