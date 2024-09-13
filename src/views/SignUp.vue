<template>
    <section class="signup-inner-sec">
      <div class="register-login">
        <button @click="signUp = !signUp" class="login-button">SignUp / Login</button>
        <!-- Sign Up Section -->
        <div v-if="signUp" class="signUp-sec">
          <div class="form">
            <div class="title">Welcome</div>
            <div class="subtitle">Let's create your account!</div>
  
            <div class="input-container ic1">
              <input placeholder="" type="text" class="input" id="firstname" v-model="firstName">
              <label class="iLabel" for="firstname">First name</label>
            </div>
            <div class="input-container ic2">
              <input placeholder="" type="text" class="input" id="lastname" v-model="lastName">
              <label class="iLabel" for="lastname">Last name</label>
            </div>
            <div class="input-container ic1">
              <input placeholder="" type="text" class="input" id="age" v-model="userAge">
              <label class="iLabel" for="age">Age</label>
            </div>
            <div class="input-container ic2">
              <input placeholder="" type="text" class="input" id="gender" v-model="gender">
              <label class="iLabel" for="gender">Gender</label>
            </div>
            <div class="input-container ic2">
                <input placeholder="" type="password" class="input" id="password" v-model="userPass">
                <label class="iLabel" for="password">Password</label>
            </div>
            <div class="input-container ic1">
                <input placeholder="" type="email" class="input" id="email" v-model="emailAdd">
                <label class="iLabel" for="email">Email</label>
            </div>
            <div class="input-container ic1">
              <input placeholder="" type="text" class="input" id="profile-picture" v-model="userProfilePicture">
              <label class="iLabel" for="profile-picture">Profile Picture</label>
            </div>
            <div class="input-container ic2">
              <input placeholder="" type="text" class="input" id="user-role" v-model="userRole">
              <label class="iLabel" for="user-role">Role</label>
            </div>
            <button @click="insertUser()" class="submit" type="text">Register</button>
          </div>
        </div>
        <!-- Log In Section -->
        <div v-else class="login-sec">
          <div class="container">
            <div class="heading">Welcome Back</div>
            <form action="" class="form1" @submit.prevent="loginUser()">
              <input required class="input" type="email" name="email" id="email" placeholder="E-mail" v-model="emailAdd"/>
              <input required class="input" type="password" name="password" id="password" placeholder="Password" v-model="userPass"/>
              <span class="forgot-password"><a href="#">Forgot Password ?</a></span>
              <input class="login-button" type="submit" value="Sign In" />
            </form>
            <span class="agreement"><a href="#">Learn user licence agreement</a></span>
          </div>
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
        signUp: true
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
      },
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
  };
  </script>

<style scoped>
.signup-inner-sec{
    margin-top: 7.4rem;
    color: black;
    margin-bottom: 2rem;
}
.register-login {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 2rem;
  /* display: flex; Add this to center the section horizontally */
  /* justify-content: center; Add this to center the section horizontally */
}

/* Log in Styling */

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

/* Sign Up Styling */
.signUp-sec {
  margin: 0 auto;
  max-width: 500px;
  padding: 20px;
  background-color: #f3cfff;
  border-radius: 40px;
  box-shadow: #B692C2 0px 30px 30px -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 80vh;
  margin-bottom: 40rem; /* Add this */
  padding-bottom: 20rem; /* Add this */
  flex-direction: column;
}
.form , .signUp-sec{
  background-color: #15172b;
  border-radius: 20px;
  box-sizing: border-box;
  height: 500px;
  width: 100%;
  padding: 20px;
}
.title {
  color: #eee;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
}
.subtitle {
  color: #eee;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}
.input-container-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.input-container, .signUp-sec {
  height: 50px;
  position: relative;
  width: 48%;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: top;
}
.ic1 {
  margin-top: 40px;
}
.ic2 {
  margin-top: 40px;
}
.input {
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}
.iLabel {
  color: #65657b;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}
.input:focus ~ .cut {
  transform: translateY(8px);
}
.input:focus ~ .iLabel {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}
.input:not(:focus) ~ .iLabel {
  color: #808097;
}
.input:focus ~ .iLabel {
  color: #dc2f55;
}
.submit, .signUp-sec {
  background-color: #08d;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 20px; 
  text-align: center;
  width: 100%;
}
.submit:active {
  background-color: #06b;
}

.login-button {
  background-color: #2196F3;
  border: none;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  height: 50px; 
  margin: 20px auto;
  text-align: center; 
  width: 50%;
}

.login-button:hover {
  background-color: #1976D2; 
}

.login-button:active {
  background-color: #1976D2;
  transform: translateY(2px);
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
