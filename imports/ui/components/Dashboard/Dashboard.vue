<template>
    <div>
        <h1>Dashboard </h1>
        <button @click.prevent="logout">Log Out</button>
        <button @click.prevent="createOrg">Create Organization</button>
        <button @click.prevent="addContact">Add Contact</button>
        <button @click.prevent="viewContact">View Contacts</button>
        {{user}}
        <p v-if="$subReady.organizations">ASDsa</p>
        <button @click="getOrgs">Get orgs</button>
        
        <br/>
        <div v-if="orgsList" >
            <div v-for="org in orgsList" :key="org._id">
                <router-link :to="`/org/${org._id}`">{{org.name}}</router-link>
                <button @click.prevent="addUser(org._id)">Add User</button>
            </div>
        </div>
    </div>
</template>
<script>
import { Meteor } from 'meteor/meteor'
export default({
    data(){
        return {
            orgsList:null
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
        getOrgs(){
            this.orgsList = Organizations.find().fetch()
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
        organizations(){
            console.log(Organizations)
        }
    }
})
</script>

