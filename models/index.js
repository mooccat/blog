/**
 * Created by liu on 2016/9/26 0026.
 */
var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect("mongodb://127.0.0.1:27017/blog");

require('./article');
require('./sort');
require('./tag');

exports.Article = mongoose.model('Article');
exports.Sort= mongoose.model('Sort');
exports.Tag = mongoose.model('Tag');