var express = require('express')

var app = express()

//设置server文件
app.set('port', process.env.PORT || 8989)
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next){
		res.status(err.status || 500)
		res.render('error', {
			message: err.message,
			error.err
		})
	})
}

//设置模板文件目录
app.set('views','./views')
app.set('view engine','jade')

//设置路由
app.get('/',function(req, res){
	res.render('index', {title: 'Hey', message: 'hello boy'})
})
app.get('/login',function(req,res){
	res.send('login')
})




