<template>
 <div>
   我就测试一下增删改
   <Add :add="add"/>
   <Dis :dataBox="data" :delMsg="delMsg"/>
   <Router/>
   <keep-alive>
   <router-view>

   </router-view>
   </keep-alive>
 </div>
</template>

<script>
  import Add from './components/ADD'
  import Dis from './components/DIS'
  import Router from './components/Router'
export default {
  name: 'App',
  components:{
    Add,
    Dis,
    Router
  },
  data(){
    return {
      data:''
    }
  },
  methods:{
    add(data){
      this.data = data;
    },
    delMsg(){
      this.data = ''
    }
  }
}
</script>

<style>

</style>
