import Vue from 'vue'

import '../imports/ui/plugins'
import router from '../imports/routes/routes'

import App from '../imports/ui/App.vue'
import VueMeteorTracker from 'vue-meteor-tracker';
import {Organizations} from '../imports/api/collections/organization'

Vue.use(VueMeteorTracker);

Meteor.startup(() => {
  new Vue({
    router,
    el: '#app',
    ...App,
  })
})
