var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
	name: String,
	password: String,
	createTime: Date,
	iphoneNum: String,
	lastLogin: Date
})

module.export.userSchema