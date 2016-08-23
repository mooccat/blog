var express = require('express');
var mongoose     = require('mongoose');
var md = require('markdown-it')({ html: true  ,});

var router = express.Router();

var ArticleModel = require('../models/article')
mongoose.connect("mongodb://127.0.0.1:27017/blog");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});
router.post('/article',function (req,res,next) {
  var article = new ArticleModel();
  article.title = req.body.article.title;
  article.content = req.body.article.content;
  article.save(function (err,article) {
    if(err){
      res.json({
        type:false,
        data:err
      });
    }else{
      res.json({
        type:true,
        data:article
      });
    }
  })
});

router.get('/article',function (req,res,next) {
  ArticleModel.find({},function (err,articles) {
    if(err){
      res.json({
        type:false,
        data:err
      });
    }else{
      res.json({
        type:true,
        data:articles
      });
    }
  })
});
router.get('/article/:id',function (req,res,next) {
  var _id = req.params.id;
  ArticleModel.findOne({"_id":_id},function (err,article) {
    if(err){
      res.json({
        type:false,
        data:err
      });
    }else{
      article.content = md.render(article.content);
      console.log(article.content);
      res.json({
        type:true,
        data:article
      });
    }
  })
});
module.exports = router;
