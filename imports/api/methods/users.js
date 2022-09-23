import { Meteor } from 'meteor/meteor';
import { Users } from '../collections/Users'

Meteor.methods({
  'user.add'({name,org_id,email,permission}) { 
    let user = Meteor.users.findOne({'emails.address':email});
      return Users.insert({
        name:name,
        email:email,
        Organization:{
            _id:org_id
        },
        user:{
            _id: user._id
        },
        permission: permission
      });
  }
});
