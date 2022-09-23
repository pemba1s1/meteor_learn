<template>
    <div>
        <h1>Log In</h1>
        <form @submit.prevent="login">
           <InputField v-model="email" type="text" placeholder="Username/Email" label="Username/Email : "/>
           <InputField v-model="password" :value="password" type="password" placeholder="Password" label="Password : "/>
           <p v-if="error">{{error}}</p>
           <button type="submit">Log In</button>
           <button @click="register">Register</button>
        </form>
    </div>
</template>
<script>
import InputField from '../Input/InputField.vue';
import {Meteor} from 'meteor/meteor';

export default {
    components:{
        InputField
    },
    data(){
        return{
            email:'',
            password:'',
            error:''
        }
    },
    methods:{
        login(){
            console.log(this.email,this.password)
            Meteor.loginWithPassword(this.email,this.password,(err)=>{
                if(err){
                    this.error = err.reason
                }else{
                    this.$router.push("/")
                }
            })
        },
        register(){
            this.$router.push({name: 'signup'})
        }
    }
}
</script>
<style>
    
</style>