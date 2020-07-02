import Vue from 'vue'
import Router from 'vue-router'

import Maintainer from '../views/manager/maintainer.vue'

import Login from '../views/login/login.vue'
import Manager from'../views/manager/manage.vue'


import MyMessage from '../views/user/mymessage.vue'
import Repair from '../views/user/repair.vue'
import Ground  from '../views/user/ground.vue'

import OrderForm from '../views/manager/orderform.vue'
import ManagerLogin from '../views/manager/manager-login.vue'
Vue.use(Router)

export default new Router({
  routes: [
        {
            path: '',
		    redirect:'/login', 
     
        },
		{
		    name:'login',
		    path:'/login',
		    component:Login,	
		},
		
		
		{
			name:'mymessage',
			path:'/mymessage',
			component:MyMessage,
		},
		{
			name:'repair',
			path:'/repair',
			component:Repair,
		},
		{
			name:'ground',
			path:'/ground',
			component:Ground,
		},
		{
			name:'manager',
			path:'/manager',
			component:Manager,
			children:[
			 {
			name:'orderform',
			path:'/orderform',
			component:OrderForm
			},
			{
			name:'maintainer',
			path:'/maintainer',
			component:Maintainer,
			},
			]
		},
		{
			name:'manager-login',
			path:'/managerlogin',
			component:ManagerLogin,
			
		},
		
		
  ],
  
    mode:'history',
  
  })

