import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import Msg from '../views/Msg'
Vue.use(VueRouter);
export default new VueRouter({
  //n个路由
  routes:[
    {
      path:'/about',
      component:About,
      children:[
        {
           path:'msg',
          component:Msg
        }
      ]
    },
    {
    path:'/home',
    component:Home
   }
  ]
})
