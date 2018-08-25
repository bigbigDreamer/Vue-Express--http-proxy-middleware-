<template>
    <div>
      <input type="text" v-model="msg">
      <button @click="addData">增加</button>
    </div>
</template>

<script>
    export default {
      props:{
        add:{
          //指定属性名，没指定属性值的类型以及必要性
          type:Function,
          required:true
        }
      },
      name: "ADD",
      data(){
          return{
            msg:'你输入我就出来。'
          }
      },
      methods:{
        addData(){
          //检查输入的合法性
          //根据输入的数据，封装成一个comment对象
          //添加到comments中
          this.add(this.msg)
        }
      }
    }
</script>

<style scoped>

</style>
