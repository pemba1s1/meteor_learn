
import { Meteor } from 'meteor/meteor';
import moment from 'moment-timezone';
import { Mongo } from 'meteor/mongo';
import { Users } from './Users';
import { Contacts } from './Contacts';

const Organizations = new Mongo.Collection('Organizations');

Organizations.helpers({
    users(){
        return Users.find({'Organization._id':this._id})
    },
    contacts(){
        return Contacts.find({'Organization._id':this._id})
    }
})

export { Organizations };
