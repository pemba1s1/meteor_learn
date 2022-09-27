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
import UpdateUser from "../ui/components/User/update.vue"
import UpdateContact from "../ui/components/Contacts/edit.vue"
import ContactPage from "../ui/components/Contacts/index.vue"
import AddTags from "../ui/components/Tags/add.vue"
import EditTags from "../ui/components/Tags/update.vue"
import ViewTags from "../ui/components/Tags/index.vue"

const routes = [
    { path:'/',name:"dashboard", component: Dashboard, meta: {requiresAuth: true} },
    { path:'/login',name:"login", component: Login },
    { path:'/signup',name:"signup", component: Signup },
    { path:'/org/create',name:"createOrg", component: CreateOrg},
    { path:'/org/:orgid/user/add',name:"addUser", component: AddUser},
    { path:'/org/:orgid/',name:"createOrg", component: ViewOrg},
    { path:'/org/:orgid/contact/add',name:"addContact", component: AddContact},
    { path:'/org/:orgid/:userId', name:'updateUser', component:UpdateUser },
    { path:'/org/:orgid/contacts/:contactId/edit', name:'updateContact', component:UpdateContact },
    { path:'/org/:orgid/contacts/:contactId/' , name:'viewContact', component:ContactPage},
    { path:'/org/:orgid/tags/add', name:'addTags', component:AddTags},
    { path:'/org/:orgid/tags/:tagId', name:'viewTags', component:ViewTags},
    { path:'/org/:orgid/tags/:tagId/edit', name:'editTags', component:EditTags}
]

export default router = new Router({
    mode:'history',
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth){
        if(Meteor.userId()){
            next();
        }else{
            next('/login')
        }
    }else{
        next();
    }
})
