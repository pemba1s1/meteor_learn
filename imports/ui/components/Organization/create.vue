<template>
    <div>
        <h1>Add organization</h1>
        <form @submit.prevent="addOrg">
            <InputField name="name" type="string" label="Org Name" v-model="name"/>
            <p v-if="error">{{error}}</p>
            <button type="submit">Add organization</button>
        </form>
    </div>
</template>
<script>
import { Meteor } from 'meteor/meteor';
import InputField from '../Input/InputField.vue';

export default {
    components:{
        InputField
    },
    data(){
        return{
            name:"",
            error:""
        }
    },
    methods: {
        addOrg(){
            Meteor.call('organization.create',this.name,(err)=>{
                if(err){
                    this.error = err.error
                }
            })
        }
    }
}
</script>

<style scoped>

</style>