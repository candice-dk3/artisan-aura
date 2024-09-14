<template>
    <section class="login-inner-sec">
        <div class="login-sec">
          <div class="container">
            <div class="heading">Welcome Back</div>
            <form action="" class="form" @submit.prevent="loginUser()">
              <input required class="input" type="email" name="email" id="email" placeholder="E-mail" v-model="emailAdd"/>
              <input required class="input" type="password" name="password" id="password" placeholder="Password" v-model="userPass"/>
              <span class="forgot-password"><a href="#">Forgot Password ?</a></span>
              <input class="login-button" type="reset" value="Clear" />
              <input class="login-button" type="submit" value="Sign In" />
            </form>
            <span class="agreement"><a href="#">Learn user licence agreement</a></span>
          </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
      return {
        emailAdd: '',
        userPass: '',
      };
    },
    methods:{
        async loginUser() {
        if (!this.emailAdd || !this.userPass) {
          console.log('Please fill in all fields');
          return;
        }
        try {
          await this.$store.dispatch('loginUser', {
            emailAdd: this.emailAdd,
            userPass: this.userPass
          });
          this.$router.push('/');
        } catch (error) {
          console.error('Login failed:', error);
        }
      }
    }
}
</script>
<style scoped>
.login-inner-sec{
    margin-top: 5.4rem;
}
.login-sec{
    padding: 2rem;
}
.container {
  max-width: 500px;
  margin: 40px auto;
  padding: 30px; 
  background: #f3cfff;
  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, #f5dffc 100%);
  border-radius: 40px;
  border: 5px solid #f5dffc;
  box-shadow:  #B692C2 0px 30px 30px -20px;
}
.heading {
  text-align: center;
  font-weight: 900;
  font-size: 30px;
  color: #ffc400;
}
.form {
  margin-top: 30px;
}
.form .input {
  width: 100%;
  background: white;
  border: none;
  margin-top: 15px;
  padding: 15px 20px;
  border-radius: 20px;
  box-shadow: #B692C2 0px 10px 10px -5px;
  border-inline: 2px solid transparent;
}
.form .input::-moz-placeholder {
  color: rgb(170, 170, 170);
}
.form .input::placeholder {
  color: rgb(170, 170, 170);
}
.form .input:focus {
  outline: none;
  border-inline: 2px solid #B692C2;
}
.form .forgot-password {
  display: block;
  margin-top: 10px;
  margin-left: 10px;
}
.form .forgot-password a {
  font-size: 11px;
  color: #ffc400;
  text-decoration: none;
}
.form .login-button {
  display: block;
  width: 100%;
  font-weight: bold;
  background: linear-gradient(45deg, #B692C2 0%, #B692C2 100%);
  color: white;
  padding-block: 15px;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: #feedb5 0px 20px 10px -15px;
  border: none;
  transition: all 0.2s ease-in-out;
}
.form .login-button:hover {
  transform: scale(1.03);
  box-shadow: #ffc400 0px 23px 10px -20px;
}
.form .login-button:active {
  transform: scale(0.95);
  box-shadow: #ffc400 0px 15px 10px -10px;
}
.agreement {
  display: block;
  text-align: center;
  margin-top: 15px;
}
.agreement a {
  text-decoration: none;
  color: #ffc400;
  font-size: 9px;
}
</style>