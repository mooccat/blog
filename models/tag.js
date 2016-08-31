var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TagSchema   = new Schema({
    name:String,
    articleId:[{
        type : mongoose.Schema.ObjectId,
        ref : 'Article'
    }],
});

module.exports = mongoose.model('Tag', TagSchema);