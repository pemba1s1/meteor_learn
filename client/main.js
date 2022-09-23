import Vue from 'vue'
import '../imports/api/collections'

import '../imports/ui/plugins'
import router from '../imports/routes/routes'

import App from '../imports/ui/App.vue'
import VueMeteorTracker from 'vue-meteor-tracker';

Vue.use(VueMeteorTracker);

Meteor.startup(() => {
  new Vue({
    router,
    el: '#app',
    ...App,
  })
})
