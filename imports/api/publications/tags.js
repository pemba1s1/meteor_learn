import {Meteor} from 'meteor/meteor'
import { Tags } from '../collections/Tags'

Meteor.publish('tags', selector=>{ 
    return Tags.find(selector)
})