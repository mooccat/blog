/**
 * Created by liu on 2016/9/26 0026.
 */
var TagModel = require('../models').Tag;

exports.getTags = function (req, res, next) {
    TagModel.find({})
        .then((tags) => res.json({
        type: false,
        data: tags
    })
    )
    .
    catch((err) => res.json({
        type: false,
        data: err
    })
    )
};
exports.postTag =  function (req, res, next) {
    TagModel.findOne({
        name: req.body.name
    }, function (err, tag) {
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
                tag.save(function (err, tag) {
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
};
