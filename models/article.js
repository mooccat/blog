/**
 * Created by liu on 2016/8/22 0022.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ArticleSchema   = new Schema({
    title: String,
    sort:{  type : mongoose.Schema.ObjectId,
        ref : 'Sort'},
    tags:[{  type : mongoose.Schema.ObjectId,
        ref : 'Tag'}],
    author:String,
    img:String,
    creat_at:{type:Date,default:Date.now},
    update_at:{type:Date,default:Date.now},
    content: String,
    meta:{
      votes: Number,
      favs:Number
    }
});

// module.exports = mongoose.model('Article', ArticleSchema);
mongoose.model('Article', ArticleSchema);