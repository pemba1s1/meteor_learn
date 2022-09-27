<template>
    <form @submit.prevent="addUser">
        <InputField name="name" type="name" v-model="name" placeholder="name" label="Name"/>
        <InputField name="email" type="email" v-model="email" placeholder="email" label="Email"/>
        <select name="permission" v-model="permission">
            <option value="admin">
                Admin
            </option>
            <option value="coordinator">
                Coordinator
            </option>
        </select>
        <p v-if="error">{{error}}</p>
        <button type="submit">Add</button>
    </form>
</template>
<script>
import { Meteor } from 'meteor/meteor';
import InputField from '../Input/InputField.vue';
export default({
    data() {
        return {
            email:"",
            name:"",
            permission:"",
            error:""
        }
    },
    components:{
        InputField
    },
    methods:{
        addUser(){
            // console.log(this.name,this.email,this.permission)
            Meteor.call('users.add',{
                name:this.name,
                org_id:this.$route.params.orgid,
                email:this.email,
                permission: this.permission
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