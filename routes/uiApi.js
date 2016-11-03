var express = require('express')
var uiApi = express.Router()

//定义中间件
uiApi.use(function(req, res, next){
	//console.log('Time: ', Date.new())
	next()
})

//定义页面接口
uiApi.get('/',function(req, res){
	res.render('index',{title: 'index', message: 'hello world!'})
})

module.exports = uiApi
	// res.send('login')//发送各种响应
	// res.download()//提示下载文件
	// res.end()//终结响应
	// res.json()//发送一个json响应
	// res.jsonp(）//发送一个支持jsonp的json
	// res.redirect()//重定向请求
	// res.render()//渲染视图模板
	// res.sendFile()//以八位字节流的实行发送文件
	// res.sendStatus()//设置响应状态吗，并将其以字符串的形式作为响应体的一部分发送