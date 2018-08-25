#Vue今日学习笔记  &nbsp;&nbsp;&nbsp;&nbsp;***2018.8.24  PM 22:06***

###复习了几种方法

*基础知识复习*

* v-model（动态绑定该数据，又叫做双向绑定数据）
* v-show（动态的显示数据，隐藏或者显示，切换状态）
* v-for （在模板html中，遍历状态数据）
* @事件 （为组件注册事件，例如点击事件）
* :属性 （动态的绑定属性）

*使用vue cli脚手架创建Vue项目*
* 创建并且初始化项目vue init webpack 项目名
* 在src文件目录下面创建components文件夹，在里面创建页面组件
* 在src文件目录下面创建router文件夹，创建路由入口文件，默认js文件
* 在src文件目录下面创建views文件夹，在下面放置路由文件（包含子路由文件）
* 在src文件目录下面放置utils文件夹，用来放置一些工具类，例如今天所学习到的处理浏览器缓存localStorage

*组件间通信*
* 第一种方式：再用props方式进行传递数据
  - 子组件接收父组件数据或者状态时配置
    
    `  props:{`<br>
          `  add:{`<br>
           `   //指定属性名，没指定属性值的类型以及必要性`<br>
              `type:Function,`<br>
         `     required:true`<br>
          `  }`<br>
        `  }`<br>
  - 父组件消息传递给子组件
  
    例如：
  `<template>`<br>
  `  <div>`<br>
      `我就测试一下增删改`<br>
     ` <Add :add="add"/>`<br>
     ` <Dis :dataBox="data" :delMsg="delMsg"/>`<br>
     ` <Router/>`<br>
      `<router-view>`
     ` </router-view>`<br>
    `</div>`<br>
   `</template>`<br>
   - 子组件更新父组件数据（状态）
   
     记住特别重要的一句话就是“初始状态在那个组件里面，最后更新状态的方法就定义在哪个组件”
   - 子组件接收数据状态后，更新当前组件状态
   
     ` updated(){//调用更新状态的方法`<br>
          `   this.msg=this.dataBox`<br>
        `   }`<br>
* 第二种方式：采用Vuex来进行状态管理

*Vue路由学习*
* 首先编写Vue-router入口文件index.js

  `import Vue from 'vue'`<br>
 `import VueRouter from 'vue-router'`<br>
` import About from '../views/About'`<br>
` import Home from '../views/Home'`<br>
 `Vue.use(VueRouter);`<br>
` export default new VueRouter({`<br>
  ` //n个路由`<br>
  ` routes:[`<br>
 `    {`<br>
     `  path:'/about',`<br>
    `   component:About`<br>
     `},` <br>
  `   {`    `   component:About`<br>
   `  path:'/home',`<br>
    ` component:Home`<br>
   ` },`<br>
   `  {`<br>
     `  path:'/',`<br>
     `  redirect:'/about'`<br>
     `  }`<br>
`   ]`<br>
` })`<br>
* 然后在组件中编写

  ` <router-link to="/about">`<br>
     `   About`<br>
     ` </router-link>`<br>
     ` <router-link to="/home">`<br>
     `   Home`<br>
    `  </router-link>`<br>
* 在App父组件中编写（默认会显示路由组件中的信息）

  `  <router-view>`
   ` </router-view>`
* 在main.js的入口文件中加载路由配置

    ``` import Vue from 'vue'```<br>
   ` import App from './App'`<br>
   ` import router from './router'`<br>
    `Vue.config.productionTip = false`<br>
    
    `/* eslint-disable no-new */`<br>
    `new Vue({`<br>
     ` //配置对象名不能随便修改`<br>
    `  el: '#app',`<br>
    `  components: { App },`<br>
     ` template: '<App/>',`<br>
  `    router`<br>
   ` })`<br>
