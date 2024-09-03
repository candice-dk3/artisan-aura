<template>
    <section class="signup-inner-sec">
        <div class="register-login">
            <div class="register-sec">
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
            </div>
            <div class="login-sec">
                <h1>login</h1>
                <table>
                    <tr>
                        <th><label>Enter Username: </label></th>
                        <td><input type="text" v-model="userProfile"></td>
                    </tr>
                    <tr>
                        <th><label>Enter password: </label></th>
                        <td><input type="password" v-model="userPass"></td>
                    </tr>
                    <tr>
                        <td><input @click="loginUser()" type="button" value="enter"></td>
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
        }
    },
    methods:{
        insertUser() {
            this.$store.dispatch('insertUser', this.$data);
        },
    },
    computed:{
        loginUser(){
            this.$store.dispatch('loginUser',{userName:this.userName,userPass:this.userPass})
            // console.log(userName);
            
        }
    }
}
</script>
<style scoped>
    .signup-inner-sec{
        margin-top: 4.5rem;
    }
    .register-login{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
</style>