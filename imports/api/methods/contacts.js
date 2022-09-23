import { Meteor } from 'meteor/meteor';
import { Contacts } from '../collections/Contacts'

Meteor.methods({
  'contact.create'({name,email}) { 
      return Contacts.insert({
        name,
        email,
        createdAt: new Date(),
      });
  },
  'contact.remove'({_id}) { 
      return Contacts.direct.remove(_id);
  },
  'contact.update'({_id,value}){
    return Contacts.update(_id,{value})
  }
});
