/**
 * Created by liu on 2016/9/26 0026.
 */
var express = require('express');
var article = require('./controllers/article');
var sort = require('./controllers/sort');
var tag = require('./controllers/tag');
var router = express.Router();

//文章
router.get('/article', article.getArticleList);
router.get('/article/:id',article.getArticle);
router.put('/article/:id',article.putArticle);
router.post('/article',article.postArticle);
router.get('/sort/:sortId',article.sortArticle);
router.get('/tags/:tagId',article.tagArticle);

//分类
router.get('/sort',sort.getSorts);
router.post('/sort',sort.postSort);


//标签
router.get('/tag',tag.getTags);
router.post('/tag',tag.postTag);
module.exports = router;