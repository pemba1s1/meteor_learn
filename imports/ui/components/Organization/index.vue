<template>
    <div>
        Organization Page
        <button @click="getOrg">asd</button>
        <div v-if="orgDetail">
            {{orgDetail.name}}            
        </div>
        <div>
            Users:
        </div>
    </div>
</template>
<script>
import {Meteor} from 'meteor/meteor'
import { Organizations } from '../../../api/collections/organization'
export default({
    data(){
        return {
            orgDetail:null
        }
    },
    methods:{
        getOrg(){
            this.orgDetail = Organizations.findOne({_id:this.$route.params.id})
            console.log(this.$route.params.id)
        }
        // console.log(a)
        // console.log(Meteor.call('organization.getOne',this.$route.params.id))
    },
    watch:{
        'this.$route.params.id':{
            handler(){
                this.getOrg();
            },
            immediate:true
        }
    }
})
</script>
