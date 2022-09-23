
import { Meteor } from 'meteor/meteor';
import moment from 'moment-timezone';
import { Mongo } from 'meteor/mongo';

export const socialFields = [ 'twitter', 'facebook', 'youtube', 'linkedin', 'google', 'instagram' ];

const Organizations = new Mongo.Collection('Organizations');

export { Organizations };
