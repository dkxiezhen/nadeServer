var express = require('express')

var app = express()


//设置server文件
var port = process.env.PORT || 12121
app.listen(port)
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next){
		res.status(err.status || 500)
		res.render('error', {
			message: err.message,
		})
	})
}

//设置模板文件目录
app.set('views','./views')
app.set('view engine','jade')

//设置路由
var dataApi = require('./routes/dataApi')
var uiApi = require('./routes/uiApi')

// app.get('/',function(){
// 	res.render('index',{title: 'index', message: 'hello world!'})
// })
app.use('/', uiApi)
app.use('/api', dataApi)




