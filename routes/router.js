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
