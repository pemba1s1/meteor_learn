import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import { Meteor } from 'meteor/meteor'

Vue.use(VueRouter)

import Login from "../ui/components/Auth/Login.vue"
import Signup from "../ui/components/Auth/Signup.vue"
import Dashboard from "../ui/components/Dashboard/Dashboard.vue"
import CreateOrg from "../ui/components/Organization/create.vue"
import AddUser from "../ui/components/User/add.vue"
import AddContact from "../ui/components/Contacts/add.vue"
import ViewOrg from "../ui/components/Organization/index.vue"
import AllContacts from "../ui/components/Contacts/index.vue"

const routes = [
    { path:'/',name:"dashboard", component: Dashboard, meta: {requiresAuth: true} },
    { path:'/login',name:"login", component: Login },
    { path:'/signup',name:"signup", component: Signup },
    { path:'/org/create',name:"createOrg", component: CreateOrg},
    { path:'/org/:orgid/user/add',name:"addUser", component: AddUser},
    { path:'/org/:id',name:"createOrg", component: ViewOrg},
    { path:'/contact/create',name:"addContact", component: AddContact},
    { path: '/contact/', name:'viewContact', component: AllContacts}
]

export default router = new Router({
    mode:'history',
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth){
        if(Meteor.userId()){
            console.log(Meteor.users)
            next();
        }else{
            next('/login')
        }
    }else{
        next();
    }
})
