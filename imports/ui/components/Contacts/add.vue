<template>
    <form @submit.prevent="addContact">
        <InputField name="name" type="string" label="Name" v-model="name"></InputField>        
        <InputField name="email" type="email" label="Email" v-model="email"></InputField>
        <p v-if="error">{{error}}</p>
        <button type="submit">Add</button>
    </form>
</template>
<script>
import { Meteor } from 'meteor/meteor';
import InputField from '../Input/InputField.vue';
export default({
    components:{
        InputField
    },
    data(){
        return{
            name:"",
            email:"",
            error:""
        }
    },
    methods:{
        addContact(){
            Meteor.call('contacts.add',{
                name:this.name,
                email:this.email,
                org_id:this.$route.params.orgid
            },(err)=>{
                if(err){
                    this.error= err.error;
                }else{
                    this.$router.go(-1)
                }
            })
        }
    }
})
</script>