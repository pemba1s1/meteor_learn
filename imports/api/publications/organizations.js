import { Meteor } from 'meteor/meteor';
import { Organizations } from "../collections/organization"

Meteor.publish('organizations', function publishOrg() {
  return Organizations.find({});
});
