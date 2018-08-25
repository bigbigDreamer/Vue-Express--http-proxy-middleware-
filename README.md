# vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
> Express server
```bush
# install dependencies
  npm install
# build background server
  npm install express -g
  express -e projectName
# build missing modules
  npm install modules
# build ajax requests across domain proxies
  npm install http-proxy-middleware
# build the hot start of the background server
  npm install hotnode
  you can use 'hotnode ./bin/www' to start your background server
```
>实践手札
* 目的：实践一次前后端分离体验
* 工具：axios,http-proxy-middleware,Vue cli脚手架
* 配置：
  * 前台配置（有vue-cli脚手架的情况下）
    * 在config这个文件夹下的index.js文件中proxyTable这个位置添加代理后台服务器信息
    ```bush
         proxyTable: {
           '/base': {
             target: 'http://127.0.0.1:3000/',
             changeOrigin: true,
             pathRewrite: {
               '^/base': '/base'
             }
           }
    ```
* 使用
  * 前台ajax请求配置
  ```bush
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
  ```
   * 后台路由响应配置
    ```bush
    var express = require('express');
    var router = express.Router();
    /* GET home page. */
    router.get('/test', function(req, res, next) {
      console.log('客户端8080端口请求我了')
        console.log(req.query.name)
      res.status(200)
        .send({msg:"我是来自服务器端的问候"})
        //res.send(200,{msg:"我是来自服务器端的问候"})
    
    })
    module.exports = router;

    ```
> 总结
   * 404错误代表服务器请求路径不对
   * 500错误表示
     * 情况一：代码问题，一般是代码错误
       * 我的错误就是，axios发送ajax请求如果是get请求，所附带的信息需要使用{{params:{data:xxx}}
       
       执行get请求
       ```bash
           // 为给定 ID 的 user 创建请求
           axios.get('/user?ID=12345')
             .then(function (response) {
               console.log(response);
             })
             .catch(function (error) {
               console.log(error);
             });
           
           // 可选地，上面的请求可以这样做
           axios.get('/user', {
               params: {
                 ID: 12345
               }
             })
             .then(function (response) {
               console.log(response);
             })
             .catch(function (error) {
               console.log(error);
             });
        ```
        执行post请求
        ```bash
        axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        ```
     * 情况二：后台服务器没有响应新的状态码，一般成功状态码为200
        ```bash
        //先发送状态码，然后发送数据
        res.status(200)
           .send({msg:"我是来自服务器端的问候"})
       ```
  * hotnode热启动express项目一段时间之后会提示服务器内存不足，需要慎用
---------------------------------------------------------
>心得体会

&nbsp;&nbsp;&nbsp;&nbsp;遇到错误一定要冷静，努力尝试并且勇于尝试，相信自己是最棒的，必要的时候去求教别人，记住一定是虚心求教。

&nbsp;&nbsp;&nbsp;&nbsp;每天坚持去写代码，去钻研，相信未来的自己一定不会失望现在的付出。

&nbsp;&nbsp;&nbsp;&nbsp;*我是沐沐，我为自己代言，现在是：2018.8.25日 晚20:09*

