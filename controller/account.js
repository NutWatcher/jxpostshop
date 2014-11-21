var log = require('./errLog');
var Goods = require('../dao').Goods;
exports.getCheckout = function(req, res){
    var shopCar = req.cookies["shopCar"].split("-") ;
    Goods.getGoodsById(shopCar,function(err, data){
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
            res.render('checkout', { title: '商品结算' ,goods: data });
        }
    });
};