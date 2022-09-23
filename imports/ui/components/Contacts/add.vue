<template>
    <form @submit.prevent="addContact">
        <InputField name="name" type="string" label="Name" v-model="name"></InputField>        
        <InputField name="email" type="email" label="Email" v-model="email"></InputField>
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
            email:""
        }
    },
    methods:{
        addContact(){
            Meteor.call('contact.create',{name:this.name,email:this.email})
        }
    }
})
</script>