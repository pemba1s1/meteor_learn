import { Meteor } from 'meteor/meteor';
import { Contacts } from "../collections/Contacts"

Meteor.publish('contacts', function publishContact() {
  return Contacts.find({});
});
