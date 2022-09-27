<template>
    <div>
        Organization Page
        <div v-if="$subReady.organizations && getOrg">
            
            <p>{{getOrg.name}}</p>

        <button @click.prevent="addContact(getOrg._id)">Add Contact</button>
        <button @click.prevent="addUser(getOrg._id)">Add User</button>

        <button @click.prevent="addTag(getOrg._id)">Add Tags</button>
        <!-- <p>{{getOrg.org("YO SUP")}}</p> -->
        <div>
            <p>Users:</p>
        </div>
        <div v-if="$subReady.users">
        
            <table>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            <tbody v-for="user in getOrg.users()" :key="user._id">
                <tr>
                    <td>
                        {{user.name}}
                    </td>
                    <td>
                        {{user.permission}}
                    </td>
                    <td>
                        <button @click="update(user._id,getOrg._id)">Update</button>
                    </td>
                    <td>
                        <button @click="remove(user._id,getOrg._id)">Remove</button>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
        <div v-if="$subReady.contacts">
        <div>
            <p>Contacts:</p>
        </div>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
        <tbody v-for="contact in getOrg.contacts()" :key="contact._id">
            <tr>
                <td>
                    <router-link :to="`/org/${getOrg._id}/contacts/${contact._id}/`">{{contact.name}}</router-link>
                </td>
                <td>
                    {{contact.email}}
                </td>
                <td>
                    <button @click="updateContact(contact._id,getOrg._id)">Update</button>
                </td>
                <td>
                    <button @click="removeContact(contact._id,getOrg._id)">Remove</button>
                </td>
            </tr>
        </tbody>
        </table>
        <div v-if="$subReady.tags">        
            <p>Tags:</p>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>   
                <tbody v-for="tag in tags" :key="tag._id">
                    <tr>
                        <td><router-link :to="`/org/${$route.params.orgid}/tags/${tag._id}/`">{{tag.name}}</router-link></td>
                        <td>
                            <button @click="updateTag(tag._id,getOrg._id)">Update</button>
                        </td>
                        <td>
                            <button @click="removeTag(tag._id,getOrg._id)">Remove</button>
                        </td>
                    </tr>
                </tbody>         
            </table>
        </div>

        </div>
        </div>
    </div>
</template>
<script>
import {Meteor} from 'meteor/meteor'
import { Organizations } from '../../../api/collections/Organization'
import { Tags } from '../../../api/collections/Tags';
export default({
    data(){
        return {
            orgDetail:null
        }
    },
    methods: {
        remove(_id,org_id){
            Meteor.call('users.delete',{_id,org_id});
        },
        update(_id,org_id){
            this.$router.push(`/org/${org_id}/${_id}/`)
        },
        addContact(org_id){
            this.$router.push(`/org/${org_id}/contact/add`)
        },
        addUser(org_id){
            this.$router.push(`/org/${org_id}/user/add`)
        },
        removeContact(_id,org_id){
            Meteor.call('contacts.delete',{_id,org_id});
        },
        updateContact(_id,org_id){
            this.$router.push(`/org/${org_id}/contacts/${_id}/edit`)
        },
        addTag(org_id){
            this.$router.push(`/org/${org_id}/tags/add`)
        }, 
        removeTag(_id, org_id) {
            Meteor.call('tags.delete', { _id, org_id });
        },
        updateTag(_id, org_id) {
            this.$router.push(`/org/${org_id}/tags/${_id}/edit`)
        },
    },
    meteor:{
        $subscribe:{
            'organizations':[],
            'contacts'() {
                return [{ 'Organization._id': this.$route.params.orgid }];
            },
            'users'(){
                return [{ 'Organization._id': this.$route.params.orgid } ]  ; 
            },
            'tags'(){
                return [{ 'Organization._id': this.$route.params.orgid } ]
            }
        },
        getOrg(){
            return Organizations.findOne({ _id: this.$route.params.orgid });
        },
        tags(){
            return Tags.find({}).fetch();
        }
    }
})
</script>

<style scoped>
table{
    border: 1px solid;
    width:100%;
}

th,td{
    border: 1px solid;
}
</style>