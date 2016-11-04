var express = require('express')
var bodyParser = require('body-parser')

var dataApi = express.Router()

//设置路由的中间件
dataApi.use(function(req, res, next){
    console.log('Time: ')
    next()
})
//json解析中间件
// parse application/x-www-form-urlencoded
dataApi.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
dataApi.use(bodyParser.json())

//定义路由

//登录路由
dataApi.get('/login', function(req, res){
    res.send('login Success!')
})

dataApi.get('/myjson', function(req, res){
	var date = 'shijian1111'
	res.json({status:200, message:{data:['xezhen','shasha'], time: date}})
})

module.exports = dataApi
