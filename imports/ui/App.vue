<template>
  <div>
    <h1>Welcome to Meteor!</h1>
    <button @click="getU">Aasd</button>
    <router-view></router-view>
  </div>
</template>

<script>
import { Users } from '../api/collections/Users';
import {Meteor} from 'meteor/meteor'
export default {
  methods:{
    getU(){
      console.log(Meteor.userId())
      console.log(Users.find().fetch())
    }
  },
  meteor:{
    $subscribe:{
      'user':[]
    }
  }
}
</script>
<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
