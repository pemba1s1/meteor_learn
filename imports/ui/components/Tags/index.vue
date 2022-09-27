<template>
    <div v-if="$subReady.tags">
        Tags
        <p>Name: {{tags.name}}</p>
        <form @submit.prevent="addContactTag(tags._id)">
            <InputField name="email" v-model="email" type="email" ></InputField>
            <p v-if="error">{{error}}</p>
            <button>Add Contact</button>
        </form>
        <div v-if="$subReady.contacts">

            <p>Contacts:</p>
            
            <div v-for="contact in contacts" :key="contact._id">
                <p>Name :{{contact.name}}</p>
                <p>Email :{{contact.email}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../../api/collections/Contacts';
import { Tags } from '../../../api/collections/Tags';
import InputField from '../Input/InputField.vue';

export default({
    components:{
        InputField
    },
    data(){
        return({
            email:'',
            error:''
        })
    },
    methods:{
        addContactTag(tag_id){
            Meteor.call('contacts.addTag',{
                email:this.email,
                tag_id,
                org_id:this.$route.params.orgid
            },(err)=>{
                if(err){
                    this.error = err.error;
                }else{
                    this.error = "";
                }
            })
        }
    },
    meteor:{
        $subscribe:{
            'tags'() {
                return [{ _id: this.$route.params.tagId }]
            },
            'contacts'(){
                return [{ 'Tags._id': this.$route.params.tagId } ]
            }
        },
        tags(){
            return Tags.findOne();
        },
        contacts(){
            return Contacts.find().fetch();
        }
    }
})
</script>
