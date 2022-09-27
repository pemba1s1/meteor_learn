<template>
    <form @submit.prevent="updatePermission">
        <select name="permission" v-model="permission">
            <option value="admin">
                Admin
            </option>
            <option value="coordinator">
                Coordinator
            </option>
        </select>
        <p v-if="error">{{error}}</p>
        <button type="submit">Save</button>
    </form>
</template>
<script>
import { Meteor } from 'meteor/meteor';
import InputField from '../Input/InputField.vue';
export default({
    data() {
        return {
            permission:"",
            error:""
        }
    },
    components:{
        InputField
    },
    methods:{
        updatePermission(){
            // console.log(this.name,this.email,this.permission)
            Meteor.call('users.update',{
                org_id:this.$route.params.orgid,
                _id:this.$route.params.userId,
                permission: this.permission
            },(err)=>{
                if(err){
                   this.error = err.error
                }else{
                    this.$router.go(-1)
                }
            })
        }
    }
})
</script>