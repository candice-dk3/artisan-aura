<template>
    <section class="signup-inner-sec">
        <div class="signUp-sec">
          <div class="container">
            <div class="heading">Don't have an account? Sign Up now</div>
            <form action="" class="form" @submit.prevent="insertUser()">
              <input required class="input" type="text" name="firstName" id="firstName" placeholder="First Name" v-model="firstName"/>
              <input required class="input" type="text" name="lastName" id="lastName" placeholder="Last Name" v-model="lastName"/>
              <input required class="input" type="gender" name="gender" id="gender" placeholder="Gender" v-model="gender"/>
              <input required class="input" type="age" name="Age" id="Age" placeholder="Age" v-model="Age"/>
              <input required class="input" type="text" name="Profile" id="Profile" placeholder="Profile" v-model="userProfile"/>
              <input required class="input" type="text" name="Role" id="Role" placeholder="Role" v-model="userRole"/>
              <input required class="input" type="text" name="ProfilePicture" id="ProfilePicture" placeholder="Profile Picture" v-model="userProfilePicture"/>
              <input required class="input" type="email" name="email" id="email" placeholder="E-mail" v-model="emailAdd"/>
              <input required class="input" type="password" name="password" id="password" placeholder="Password" v-model="userPass"/>
              
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
        firstName: '',
        lastName: '',
        userAge: '',
        gender: '',
        emailAdd: '',
        userPass: '',
        userProfile: '',
        userRole: '',
        userProfilePicture: '',
      };
    },
    methods: {
      insertUser() {
        this.$store.dispatch('insertUser', {
          firstName: this.firstName,
          lastName: this.lastName,
          userAge: this.userAge,
          Gender: this.gender,
          emailAdd: this.emailAdd,
          userPass: this.userPass,
          userProfile: this.userProfile,
          userRole: this.userRole,
          userProfilePicture: this.userProfilePicture
        });
      }
    }
  };
</script>

<style scoped>
.signup-inner-sec{
    margin-top: 7.4rem;
    color: black;
    margin-bottom: 2rem;
}
.signUp-sec{
  padding: 2rem;
}
.container {
  max-width: 100%;
  margin: 40px auto;
  padding: 30px; 
  background: #f3cfff;
  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, #f5dffc 100%);
  border-radius: 40px;
  border: 5px solid #f5dffc;
  box-shadow:  #B692C2 0px 30px 30px -20px;
  width: fit-content;
  box-sizing: border-box; 
}
.heading {
  text-align: center;
  font-weight: 900;
  font-size: 30px;
  color: #ffc400;
}
.form {
  margin-top: 30px;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
.form .input {
  width: 15rem;
  margin: 15px 5px;
  float: left;
  grid-column: auto;
  background: white;
  border: none;
  padding: 20px 30px; 
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
.login-button {
  justify-self: center; /* add this property to center the button horizontally */
  display: block;
  width: 20rem; /* keep the fixed width */
  margin: 20px auto; /* add auto margin to center the button */
  font-weight: bold;
  background: linear-gradient(45deg, #B692C2 0%, #B692C2 100%);
  color: white;
  padding-block: 15px;
  border-radius: 20px;
  box-shadow: #feedb5 0px 20px 10px -15px;
  border: none;
  transition: all 0.2s ease-in-out;
  text-align: center; /* add this property to center the button text */
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
@media screen and (max-width: 300px) {
.container {
  max-width: 15rem;
  padding: 0rem;
  margin: 0rem;
}
.form .input {
  width: 100%;
  padding: 10px 15px;
  border-radius: 20px;
  margin-top: 10px;
}
.form .login-button {
  width: 80%;
  padding-block: 10px;
  margin: 10px auto;
}
   
}
</style>
