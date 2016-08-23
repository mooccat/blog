/**
 * Created by liu on 2016/8/22 0022.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ArticleSchema   = new Schema({
    title: String,
    content: String,
});

module.exports = mongoose.model('Article', ArticleSchema);