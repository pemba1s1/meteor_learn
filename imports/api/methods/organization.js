import { Meteor } from 'meteor/meteor';
import { Organizations } from '../collections/Organization'
import { Users } from '../collections/Users';


Meteor.methods({
  'organization.create'(name) {
    let user = Meteor.user();
    if(user && 'role' in user && user.role === "admin"){
      return Organizations.insert({
        name,
        createdAt: new Date(),
      });
    }else{
      throw new Meteor.Error('Not authorized.');
    }
  },
  'organization.getOne'(_id) { 
    return Organizations.findOne(_id);
  },
});
