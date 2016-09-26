/**
 * Created by liu on 2016/9/26 0026.
 */
var SortModel = require('../models').Sort;

exports.getSorts = function (req, res, next) {
    SortModel.find({}, function (err, sorts) {
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
};
exports.postSort= function (req, res, next) {
    SortModel.findOne({
        name: req.body.name
    }, function (err, sort) {
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
                sort.save(function (err, sort) {
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
};