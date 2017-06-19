
var TodoItem = require('../models').TodoItem;

/*
 * 新建和保存一个话题
 * @param {String} title: 话题标题
 * @param {String} content: 话题内容
 * @param {Function} callback: 操作之后的回调函数 
 */
exports.newAndSave = function(id,content, status, callback) {
    var item = new TodoItem();
    item.id = id;
    item.content = content;
    item.status = status;

    item.save(callback);
}