<template>
    <div>
        <h1>Sign Up Form</h1>
        <form @submit.prevent="signup">
            <InputField name="email" type="email" label="Email" v-model="email"/>
            <InputField name="password" type="password" label="Password" v-model="password"/>
            <p v-if="error">{{error}}</p>
            <button type="submit">Register account</button>
        </form>
    </div>
</template>
<script>
import InputField from '../Input/InputField.vue';
import { Accounts } from 'meteor/accounts-base';

export default {
    components:{
        InputField
    },
    data(){
        return{
            email:"",
            password:"",
            error:""
        }
    },
    methods: {
        signup(){
            const data = {
                email: this.email,
                password: this.password,
            }
            Accounts.createUser(data,(err)=>{
                if(err){
                    this.error = err.reason
                }else{
                    console.log("User created")
                    this.$router.push({name:"login"})
                }
            })
        }
    }
}
</script>

<style scoped>

</style>