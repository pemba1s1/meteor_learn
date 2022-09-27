import {Meteor} from 'meteor/meteor'
import { Tags } from '../collections/Tags'
import { Users } from '../collections/Users'

Meteor.methods({
    'tags.create'({name,org_id}){
        let user = Users.findOne({'user._id':this.userId,'Organization._id':org_id});
        if(user && (user.permission ==='admin' || user.permission === 'coordinator')){
            Tags.insert({
                name,
                Organization:{
                    _id:org_id
                },
                createdAt: new Date(),
            })
        }else{
            throw new Meteor.Error('Not authorized');
        }
    },
    'tags.update'({_id,name,org_id}){
        let user = Users.findOne({'user._id':this.userId,'Organization._id':org_id});
        if(user && (user.permission ==='admin' || user.permission === 'coordinator')){
            Tags.update({_id},{
                $set:{name}
            })
        }else{
            throw new Meteor.Error('Not authorized');
        }
    },
    'tags.delete'({_id,org_id}){
        let user = Users.findOne({'user._id':this.userId,'Organization._id':org_id});
        if(user && (user.permission ==='admin' || user.permission === 'coordinator')){
            Tags.remove(_id)
        }else{
            throw new Meteor.Error('Not authorized');
        }
    }
})