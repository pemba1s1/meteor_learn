<template>
    <div v-if="$subReady.contacts">    
        <form @submit.prevent="addContact">
            <InputField name="name" type="string" label="Name" v-model="name"></InputField>        
            <InputField name="email" type="email" label="Email" v-model="email"></InputField>
            <p v-if="error">{{error}}</p>
            <button type="submit">Update</button>
        </form>
    </div>
</template>
<script>
import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../../api/collections/Contacts';
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
            Meteor.call('contacts.update',{
                _id:this.$route.params.contactId,
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
    },
    meteor:{
        $subscribe:{
            "contacts":[]
        },
        contacts(){
            return Contacts.find({_id:this.$route.params.contactId}).fetch();
        }
    },
})
</script>