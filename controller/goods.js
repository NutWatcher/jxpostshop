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