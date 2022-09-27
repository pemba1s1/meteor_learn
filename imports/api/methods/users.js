import { Meteor } from 'meteor/meteor';
import { Organizations } from '../collections/Organization';
import { Users } from '../collections/Users'

Meteor.methods({
  'users.add'({name,org_id,email,permission}) { 
    let KeelaUser = Meteor.user()
    let userPermission = Users.find({'user._id':this.userId,'Organization._id':org_id}).fetch()[0];
    let org = Organizations.findOne({_id:org_id});
    console.log(org)
    if((KeelaUser && 'role' in KeelaUser && KeelaUser.role==="admin") || (userPermission && userPermission.permission === 'admin')){
      let user = Meteor.users.findOne({'emails.address':email});
      if(user){
        return Users.insert({
          name:name,
          email:email,
          Organization:{
              _id:org_id,
              name:org.name,
          },
          user:{
              _id: user._id
          },
          permission: permission
        });
      }else{
        throw new Meteor.Error('User not found.');
      }
    }else{
      throw new Meteor.Error('Not authorized.');
    }
  },
  'users.delete'({_id,org_id}){
    let userPermission = Users.find({'user._id':this.userId,'Organization._id':org_id}).fetch()[0];
    
    if(userPermission && userPermission.permission === 'admin'){
      Users.remove(_id);
    }else{
      throw new Meteor.Error('Not authorized.');
    }
  },
  'users.update'({org_id,_id,permission}){
    let userPermission = Users.find({'user._id':this.userId,'Organization._id':org_id}).fetch()[0];
    if(userPermission && userPermission.permission === 'admin'){
      Users.update({_id},{$set:{permission}});
    }else{
      throw new Meteor.Error('Not authorized.');
    }
  }
});
