import {Meteor} from 'meteor/meteor'
import {Users} from '../collections/Users'

Meteor.publish('user', function publishUser(){
    return Users.findOne({'user._id':Meteor.userId()})
})