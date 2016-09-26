var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SortSchema   = new Schema({
    name:String,
    articleId:[{
        type : mongoose.Schema.ObjectId,
        ref : 'Article'
    }],
});

// module.exports = mongoose.model('Sort', SortSchema);
mongoose.model('Sort', SortSchema);