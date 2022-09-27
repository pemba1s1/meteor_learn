import { Meteor } from 'meteor/meteor';
import { Contacts } from '../collections/Contacts'
import { Users } from '../collections/Users';

Meteor.methods({
  'contacts.add'({name,email,org_id}) { 
    let KeelaUser = Meteor.user()
    let userPermission = Users.findOne({'user._id':this.userId,'Organization._id':org_id});
    console.log(userPermission)
    if((KeelaUser && 'role' in KeelaUser && KeelaUser.role==="admin") || (userPermission && userPermission.permission === 'admin')){
      return Contacts.insert({
        name,
        email,
        Organization:{_id:org_id},
        createdAt: new Date(),
      });
    }else{
      throw new Meteor.Error('Not authorized');
    }
   
  },
  'contacts.delete'({_id,org_id}) { 
    let userPermission = Users.find({'user._id':this.userId,'Organization._id':org_id}).fetch()[0];
    if(userPermission && userPermission.permission === 'admin'){
        return Contacts.remove(_id);
    }else{
      throw new Meteor.Error('Not authorized');
    }
      
  },
  'contacts.update'({_id,name,email,org_id}){
    let userPermission = Users.find({'user._id':this.userId,'Organization._id':org_id}).fetch()[0];
    if(userPermission && userPermission.permission === 'admin'){
      return Contacts.update({_id},{$set:{name,email}})
    }else{
      throw new Meteor.Error('Not authorized');
    }
  },
  'contacts.addTag'({email,tag_id,org_id}){
     let user = Users.findOne({'user._id':this.userId,'Organization._id':org_id});
     let contact = Contacts.findOne({email});
     if(contact){
       if(user && (user.permission ==='admin' || user.permission === 'coordinator')){
           Contacts.update({email},{
             $addToSet:{
               Tags:{ _id:tag_id }
             }
           })
       }else{
           throw new Meteor.Error('Not authorized');
       }
     }else{
      throw new Meteor.Error('Contact doesnt exist');
     }
  }
});
