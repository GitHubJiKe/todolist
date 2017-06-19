var mongoose = require('mongoose');
var config = require('../config.js');

var connection_string = config.dbprefix + config.dbhost + '/' + config.dbname;

// 数据库连接
mongoose.connect(connection_string, function(err) {
    if (err) {
        console.log('connect to %s error', connection_string, err.message);
    }
});

require('./todoItem.js');

exports.TodoItem = mongoose.model('TodoItem');


require('../dao/todoItem').newAndSave(1,'AAA','undo',(err,result)=>{
    console.log(err,result)
});