<template>
  <div>
    <h1>Welcome to Meteor!</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import { Users } from '../api/collections/Users';
import {Meteor} from 'meteor/meteor'
export default {
  methods:{
  },
  meteor:{
    
  }
}
</script>
<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
