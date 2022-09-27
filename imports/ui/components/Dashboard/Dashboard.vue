<template>
    <div>
        <h1>Dashboard </h1>
        <button @click.prevent="logout">Log Out</button>
        <!-- <div v-if="$subReady.user && user.length > 0 && user[0].isAdmin">         -->
            <button @click.prevent="createOrg">Create Organization</button>
        <!-- </div> -->
        <div class="loading" v-if="$subReady.organizations">
            My organizations
            <div v-for="org in organizations" :key="org._id">
                <router-link :to="`/org/${org._id}/`">{{org.name}}</router-link>
            </div>
        </div>
        <br/>
    </div>
</template>
<script>
import { Meteor } from 'meteor/meteor'
import { Organizations } from '../../../api/collections/Organization'
import { Users } from '../../../api/collections/Users';
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
        viewContact(){
            this.$router.push({name:'viewContact'})
        }
        
    },
    meteor:{
        $subscribe:{
            'organizations':[],
            'user'(){
                return [ {'user._id':Meteor.userId()} ]
            }
        },
        organizations(){
            return Organizations.find({}).fetch();            
        },
        user(){
            return Users.find({}).fetch();
        }
    }
})
</script>

