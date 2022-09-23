import {Meteor} from 'meteor/meteor'
import {Users} from '../collections/Users'

Meteor.publish('user', function publishUser(){
    return Users.find({'user._id':Meteor.userId()})
})