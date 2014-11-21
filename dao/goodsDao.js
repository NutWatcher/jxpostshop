/**
 * Created by yzjf on 2014/10/24.
 */
var baseDb = require('./baseDao');
exports.getGoods = function (type_id, cb) {
    cb(null,[{"name":"一个","price":30,"image":"/images/good1.jpg","href":"http://localhost:3000/good/00001.html"},
        {"name":"2个","price":60,"image":"/images/good1.jpg","href":"http://localhost:3000/good/00002.html"}]);
}
exports.getGood = function (type_id, cb) {
    cb(null,{"name":"一个",
        "price":30,
        "image":"/images/good1.jpg",
        "href":"http://localhost:3000/good/00001.html",
        "misc":""});
}
exports.getGoodsById = function (shop_ids, cb) {
    cb(null,[{"name":"一个","price":30,"image":"/images/good1.jpg","href":"http://localhost:3000/good/00001.html"},
        {"name":"2个","price":60,"image":"/images/good1.jpg","href":"http://localhost:3000/good/00002.html"}]);
}
