/**
 *@Time  2018/8/24 19:45
 *@Author  沐沐
 *@Description  使用localstorage存储数据的工具模块
 *       1.函数
 *       2.对象
 *       需要向外暴露一个还是多个
 *@return
 **/
export default {
  saveTodos(todos){
    window.localStorage.setItem('key',JSON.stringify(todos));
  },
  readTodos(){
    return  JSON.parse(window.localStorage.getItem('key'||[]));
  }
}
