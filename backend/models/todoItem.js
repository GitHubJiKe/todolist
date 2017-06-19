var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    id: {type: Number},
    content: {type: String},
    status:{type:String}
});

ItemSchema.index({id: 1}, {unique: true});
var TodoItem = mongoose.model('TodoItem', ItemSchema);