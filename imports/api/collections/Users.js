import { Mongo } from 'meteor/mongo';
import { Organizations } from './Organization';

const Users = new Mongo.Collection('Users');

Users.helpers({
    organizations(){
        return Organizations.find({_id:this.Organization._id})
    }
})

export { Users };
