var express = require('express')
var dataApi = express.Router()

//设置路由的中间件
dataApi.use(function(req, res, next){
    console.log('Time: ', Date.new())
    next()
})

//定义路由

//登录路由
dataApi.get('/login', function(req, res){
    res.send('login Success!')
})

module.exports = dataApi
