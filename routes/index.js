var express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = Promise;
var hljs = require('highlight.js');
var md = require('markdown-it')({
    html: true,
    highlight: function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                    hljs.highlight(lang, str, true).value +
                    '</code></pre>';
            } catch (__) {}
        }
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    },
});

var router = express.Router();

var ArticleModel = require('../models/article');
var SortModel = require('../models/sort');
var TagModel = require('../models/tag');

mongoose.connect("mongodb://127.0.0.1:27017/blog");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.html');
});
router.post('/article', function(req, res, next) {
    var article = new ArticleModel(req.body);
    article.save()
        .then((article) => res.json({
            type: true,
            data: article
        }))
        .catch((err) => res.json({
            type: false,
            data: err
        }))
});

router.get('/article', function(req, res, next) {
    ArticleModel.find().sort('-creat_at')
        .then((articles)=>{
            for(i=0;i<articles.length;i++)
            {
                articles[i].content = articles[i].content.split("<!--more-->")[0];
                articles[i].content = md.render(articles[i].content);
            };
            res.json({
                type: true,
                data: articles
            });
        })
        .catch((err) => res.json({
            type: false,
            data: err
        }))
    // ArticleModel.find({}, function (err, articles) {
    //     if (err) {
    //         res.json({
    //             type: false,
    //             data: err
    //         });
    //     } else {
    //         for(i=0;i<articles.length;i++)
    //         {
    //             articles[i].content = articles[i].content.split("<!--more-->")[0];
    //             articles[i].content = md.render(articles[i].content);
    //         };
    //         res.json({
    //             type: true,
    //             data: articles
    //         });
    //     }
    // })
});
router.get('/article/:id', function(req, res, next) {
    var _id = req.params.id;
    ArticleModel.findOne({
        "_id": _id
    }, function(err, article) {
        if (err) {
            res.json({
                type: false,
                data: err
            });
        } else {
            // article.content = article.content.split("<!--more-->")[0];
            var mdContent = article.content;
            var newArticle={};
            article.content = md.render(article.content);
            Object.assign(newArticle,article._doc,{md:mdContent});
            console.log(newArticle);
            res.json({
                type: true,
                data: newArticle
            });
        }
    })
});

router.put('/article/:id', function(req, res, next) {
    var _id = req.params.id;
    var condition = {_id:_id};
    var update = req.body;
    ArticleModel.update(condition,update,function (err,doc) {
        if (err) {
            res.json({
                type: false,
                data: err
            });
        } else {
            // article.content = article.content.split("<!--more-->")[0];
            var article = req.body;
            var mdContent = article.content;
            var newArticle={};
            article.content = md.render(article.content);
            Object.assign(newArticle,article,{md:mdContent,_id:_id});
            console.log(newArticle);
            res.json({
                type: true,
                data: newArticle
            });
        }
    })
});

router.post('/sort', function(req, res, next) {
    SortModel.findOne({
        name: req.body.name
    }, function(err, sort) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (sort) {
                res.json({
                    type: false,
                    data: "存在相同分类。",
                });
            } else {
                var sort = new SortModel(req.body);
                sort.save(function(err, sort) {
                    if (err) {
                        res.json({
                            type: false,
                            data: err
                        });
                    } else {
                        res.json({
                            type: true,
                            data: sort
                        });
                    }
                });
            }
        }
    });
});

router.get('/sort', function(req, res, next) {
    SortModel.find({}, function(err, sorts) {
        if (err) {
            res.json({
                type: false,
                data: err
            });
        } else {
            res.json({
                type: true,
                data: sorts
            });
        }
    })
});
router.post('/tag', function(req, res, next) {
        TagModel.findOne({
            name: req.body.name
        }, function(err, tag) {
            if (err) {
                res.json({
                    type: false,
                    data: "Error occured: " + err
                });
            } else {
                if (tag) {
                    res.json({
                        type: false,
                        data: "存在相同标签。",
                    });
                } else {
                    var tag = new TagModel(req.body);
                    tag.save(function(err, tag) {
                        if (err) {
                            res.json({
                                type: false,
                                data: err
                            });
                        } else {
                            res.json({
                                type: true,
                                data: tag
                            });
                        }
                    });
                }
            }
        });

});

router.get('/tag', function(req, res, next) {
    TagModel.find({})
        .then((tags) => res.json({
            type: false,
            data: tags
        }))
        .catch((err) => res.json({
            type: false,
            data: err
        }))
});

router.get('/sort/:sortId', function(req, res, next) {
    var id = mongoose.Types.ObjectId(req.params.sortId).sort('-creat_at');
    ArticleModel.find({"sort":id})
        .then((articles)=>{
                console.log(articles);
                for(i=0;i<articles.length;i++)
               {
                   articles[i].content = articles[i].content.split("<!--more-->")[0];
                   articles[i].content = md.render(articles[i].content);
               };

               res.json({
                   type: true,
                   data: articles
               });
           })
           .catch((err) => res.json({
               type: false,
               data: err
           }))
});
router.get('/tags/:tagId', function(req, res, next) {
    var id = mongoose.Types.ObjectId(req.params.tagId);
    console.log(id);
    ArticleModel.find({"tags": id}).sort('-creat_at')
        .then((articles)=>{
        console.log(articles);
    for(i=0;i<articles.length;i++)
    {
        articles[i].content = articles[i].content.split("<!--more-->")[0];
        articles[i].content = md.render(articles[i].content);
    };

    res.json({
        type: true,
        data: articles
    });
})
    .catch((err) => res.json({
        type: false,
        data: err
    }))
});

module.exports = router;