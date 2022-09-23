import { Meteor } from 'meteor/meteor';
import { Organizations } from "../collections/Organization"

Meteor.publish('organizations', function publishOrg() {
  return Organizations.find({});
});
