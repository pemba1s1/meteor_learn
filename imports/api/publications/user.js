import {Meteor} from 'meteor/meteor'
import {Users} from '../collections/Users'

Meteor.publish('users', selector=>{ 
    return Users.find(selector)
})