/**
 * Created by yzjf on 2014/10/24.
 */
var Goods = require('../dao').Goods;
var log = require('./errLog');
exports.getGoodsList = function(req, res){
    var page = req.query["page"] ;
    Goods.getGoods(page, function(err, data){
        if (err) {
            log.error(err);
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        }
        else {
            console.info(data);
            res.render('shopList', { title: '首页' ,goods: data });
        }
    });
};
exports.getGood = function(req, res, next){
    var page = req.query["page"] ;
    var goodId = req.url.substr(6,req.url.length-11);
    Goods.getGood(goodId, function(err, data){
        if (err) {
            log.error(err);
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        }
        else {
            console.info(data);
            res.render('shop', { title: '首页' ,goods: data });
        }
    });
};