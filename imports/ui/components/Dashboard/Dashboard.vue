<template>
    <div>
        <h1>Dashboard </h1>
        <button @click.prevent="logout">Log Out</button>
        <button @click.prevent="createOrg">Create Organization</button>
        <button @click.prevent="addContact">Add Contact</button>
        <button @click.prevent="viewContact">View Contacts</button>
        {{user}}
        <div class="loading" v-if="$subReady.organizations">
            <div v-for="org in asd" :key="org._id">
                <router-link :to="`/org/${org._id}`">{{org.name}}</router-link>
                <button @click.prevent="addUser(org._id)">Add User</button>
            </div>
        </div>
        <br/>
    </div>
</template>
<script>
import { Meteor } from 'meteor/meteor'
import { Organizations } from '../../../api/collections/Organization'
export default({
    data(){
        return {
            orgsList:null,
        }
    },
    methods:{
        logout(){
            Meteor.logout((err)=>{
                if(err){
                    console.log(err)
                }else{
                    this.$router.push('/login')
                }
            });
        },
        createOrg(){
            this.$router.push({name:'createOrg'})
        },
        addContact(){
            this.$router.push({name:'addContact'})
        },
        addUser(id){
            this.$router.push(`/org/${id}/user/add`)
        },
        viewContact(){
            this.$router.push({name:'viewContact'})
        }
        
    },
    computed:{
        user(){
            console.log(Meteor.users)
        }
    },
    meteor:{
        $subscribe:{
            'organizations':[]
        },
        asd(){
            let experimentsData = Organizations.find({}).fetch();
            if(this.$subReady.organizations){
                console.log(experimentsData)
                return experimentsData;
            }
        }
    }
})
</script>

