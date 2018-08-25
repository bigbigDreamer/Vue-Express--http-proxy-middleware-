<template>
    <div>
      我是即将要显示的内容
      {{dataBox}}
      <br>
      <button @click="del">删除</button>
    </div>
</template>

<script>
  import axios  from 'axios'
    export default {
      props:{
          dataBox:{
          type:String,
          required:true
        },
        delMsg:{
          type:Function,
          required:true
        }
      },
      name: "DIS",
      data(){
        return{
          msg:''
        }
      },
      updated(){
        this.msg=this.dataBox
      },
      methods:{
        del(){
          this.delMsg()
          axios.get('/base/test',{
            params:{
            name:123
            }
          })
            .then((data)=>{
              console.log('请求成功')
              console.log(data.data)
            })
            .catch((err)=>{
              console.log(err.response)
            })
        }
      }
    }
</script>

<style scoped>

</style>
