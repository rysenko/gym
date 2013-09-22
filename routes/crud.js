var express = require('express');

module.exports = function (model) {
    var router = new express.Router();

    router.get('/', function (req, res, next) {
        model.find().exec(function (err, doc) {
            if (err) {
                next(err);
            }
            res.json(doc);
        })
    });

    router.post('/', function (req, res, next) {
        new model(req.body).save().exec(function (err, doc) {
            if (err) {
                next(err);
            }
            res.json(doc);
        });
    });

    router.get('/:id', function (req, res, next) {
        model.findById(req.params.id).exec(function (err, doc) {
            if (err) {
                next(err);
            }
            res.json(doc);
        })
    });

    router.post('/:id', function (req, res, next) {
        delete req.body._id;
        model.findByIdAndUpdate(req.params.id, req.body, null, function (err, doc) {
            if (err) {
                next(err);
            }
            res.json(doc);
        });
    });

    router.delete('/:id', function (req, res, next) {
        model.findByIdAndRemove(req.params.id).exec(function (err, doc) {
            if (err) {
                next(err);
            }
            res.json(doc);
        });
    });

    return router;
};