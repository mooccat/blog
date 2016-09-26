/**
 * Created by liu on 2016/9/26 0026.
 */
var ArticleModel = require('../models').Article;
var hljs = require('highlight.js');
var md = require('markdown-it')({
    html: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                    hljs.highlight(lang, str, true).value +
                    '</code></pre>';
            } catch (__) {
            }
        }
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    },
});
exports.getArticleList =   function (req, res, next) {
    ArticleModel.find().sort('-creat_at')
        .then((articles) => {
        for(i=0;
    i < articles.length;
    i++
    )
    {
        articles[i].content = articles[i].content.split("<!--more-->")[0];
        articles[i].content = md.render(articles[i].content);
    }
    ;
    res.json({
        type: true,
        data: articles
    });
})
    .
    catch((err) => res.json({
        type: false,
        data: err
    })
    )
};
exports.getArticle = function (req, res, next) {
    var _id = req.params.id;
    ArticleModel.findOne({
        "_id": _id
    }, function (err, article) {
        if (err) {
            res.json({
                type: false,
                data: err
            });
        } else {
            // article.content = article.content.split("<!--more-->")[0];
            var mdContent = article.content;
            var newArticle = {};
            article.content = md.render(article.content);
            Object.assign(newArticle, article._doc, {md: mdContent});
            console.log(newArticle);
            res.json({
                type: true,
                data: newArticle
            });
        }
    })
};

exports.postArticle =  function (req, res, next) {
    var article = new ArticleModel(req.body);
    article.save()
        .then((article) => res.json({
        type: true,
        data: article
    })
    )
    .
    catch((err) => res.json({
        type: false,
        data: err
    })
    )
};

exports.putArticle = function (req, res, next) {
    var _id = req.params.id;
    var condition = {_id: _id};
    var update = req.body;
    ArticleModel.update(condition, update, function (err, doc) {
        if (err) {
            res.json({
                type: false,
                data: err
            });
        } else {
            // article.content = article.content.split("<!--more-->")[0];
            var article = req.body;
            var mdContent = article.content;
            var newArticle = {};
            article.content = md.render(article.content);
            Object.assign(newArticle, article, {md: mdContent, _id: _id});
            console.log(newArticle);
            res.json({
                type: true,
                data: newArticle
            });
        }
    })
};
exports.sortArticle = function (req, res, next) {
    var id = mongoose.Types.ObjectId(req.params.sortId);
    ArticleModel.find({"sort": id}).sort('-creat_at')
        .then((articles) => {
        console.log(articles);
    for (i = 0; i < articles.length; i++) {
        articles[i].content = articles[i].content.split("<!--more-->")[0];
        articles[i].content = md.render(articles[i].content);
    }
    ;

    res.json({
        type: true,
        data: articles
    });
})
    .
    catch((err) => res.json({
        type: false,
        data: err
    })
    )
};
exports.tagArticle = function (req, res, next) {
    var id = mongoose.Types.ObjectId(req.params.tagId);
    console.log(id);
    ArticleModel.find({"tags": id}).sort('-creat_at')
        .then((articles) => {
        console.log(articles);
    for (i = 0; i < articles.length; i++) {
        articles[i].content = articles[i].content.split("<!--more-->")[0];
        articles[i].content = md.render(articles[i].content);
    }
    ;

    res.json({
        type: true,
        data: articles
    });
})
    .
    catch((err) => res.json({
        type: false,
        data: err
    })
    )
};
