import { Mongo } from 'meteor/mongo';

const Users = new Mongo.Collection('Users');

export { Users };
