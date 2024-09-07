<template>
    <section class="signup-inner-sec">
        <div class="register-login">
            <!-- <div class="register-sec">
                <h1>register</h1>
                <table>
                    <tr>
                        <th><label>Enter first name :</label></th>
                        <td><input type="text" v-model="firstName"></td>
                    </tr>
                    <tr>
                        <th><label>Enter last name:</label></th>
                        <td><input type="text" v-model="lastName"></td>
                    </tr>
                    <tr>
                        <th><label>Enter age: </label></th>
                        <td><input type="number" v-model="userAge"></td>
                    </tr>
                    <tr>
                        <th><label>Enter gender: </label> </th>
                        <td><input type="text" v-model="Gender"></td>
                    </tr>
                    <tr>
                        <th><label>Enter email:</label></th>
                        <td><input type="text" v-model="emailAdd"></td>
                    </tr>
                    <tr>
                        <th><label>Enter password:</label></th>
                        <td><input type="password" v-model="userPass"></td>
                    </tr>
                    <tr>
                        <th><label>Enter profile:</label></th>
                        <td><input type="text" v-model="userProfile"></td>
                    </tr>
                    <tr>
                        <th><label>Enter role:</label></th>
                        <td><input type="text" v-model="userRole"></td>
                    </tr>
                    <tr>
                        <td><input @click="insertUser()" type="button" value="enter"></td>
                    </tr>
                </table>
            </div> -->
            <div class="login-sec">
                <h1>login</h1>
                <table>
                    <tr>
                        <th><label>Enter Email: </label></th>
                        <td><input type="text" v-model="emailAdd"></td>
                    </tr>
                    <tr>
                        <th><label>Enter password: </label></th>
                        <td><input type="password" v-model="userPass"></td>
                    </tr>
                    <tr>
                        <td><input @click.prevent="loginUser()" type="button" value="enter"></td>
                    </tr>
                </table>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            firstName: '',
            lastName: '',
            userAge: '',
            Gender: '',
            emailAdd: '',
            userPass: '',
            userProfile: '',
            userRole: '',
            // signUp: 'true'
        }
    },
    methods:{
        insertUser() {
            this.$store.dispatch('insertUser', this.$data);
        },
        // loginUser() {
        //     if (this.emailAdd && this.userPass) {
        //         try {
        //         this.$store.dispatch('loginUser', {
        //             emailAdd: this.emailAdd,
        //             userPass: this.userPass
        //         })
        //         .then((response) => {
        //             console.log(response);
        //             // You can redirect to a different page here
        //             // this.$router.push('/');
        //         })
        //         .catch((error) => {
        //             console.error(error);
        //         });
        //         } catch (error) {
        //         console.error(error);
        //         }
        //     } else {
        //         console.log('Please fill in all fields');
        //     }
        // }
        async loginUser() {
      await this.$store.dispatch('loginUser', { emailAdd: this.emailAdd, userPass: this.userPass });
      this.$router.push('/'); // Redirect to home page
    }
    },
  
}
</script>
<style scoped>
    .signup-inner-sec{
        margin-top: 7.4rem;
    }
    .register-login{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
</style>