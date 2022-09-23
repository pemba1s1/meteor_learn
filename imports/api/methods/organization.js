import { Meteor } from 'meteor/meteor';
import { Organizations } from '../collections/organization'


const KeelaAdmin = "h3bviCvE7WY3L5NCf";
Meteor.methods({
  'organization.create'(name) { 
    if(this.userId == KeelaAdmin){
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
