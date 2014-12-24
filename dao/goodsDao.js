/**
 * Created by yzjf on 2014/10/24.
 */
var baseDb = require('./baseDao');
exports.getGoods = function (type_id, cb) {
    cb(null,[{"id":"12580","name":"一个神奇的购物单","price":30,"image":"/images/good1.jpg","href":"http://localhost:3000/good/00001.html"},
        {"id":"12590","name":"2水电费水电费速度放电饭锅的风格的风格放电饭锅的风格的风格放电饭锅的风格的风格放电饭锅的风格的风格的刚的个","price":60,"image":"/images/good1.jpg","href":"http://localhost:3000/good/00002.html"}]);
}
exports.getGood = function (type_id, cb) {
    cb(null,{"name":"一个",
        "price":30,
        "image":"/images/good1.jpg",
        "href":"http://localhost:3000/good/00001.html",
        "misc":""});
}
exports.getGoodsById = function (shop_ids, cb) {
    cb(null,[{"id":"12580","name":"一个","price":30,"image":"/images/good1.jpg","href":"http://localhost:3000/good/00001.html"},
        {"id":"125801","name":"2个","price":60.9,"image":"/images/good1.jpg","href":"http://localhost:3000/good/00002.html"},
        {"id":"125802","name":"2个","price":60,"image":"/images/good1.jpg","href":"http://localhost:3000/good/00002.html"},
        {"id":"125803","name":"2个","price":60,"image":"/images/good1.jpg","href":"http://localhost:3000/good/00002.html"},
        {"id":"125804","name":"2个","price":60,"image":"/images/good1.jpg","href":"http://localhost:3000/good/00002.html"},
        {"id":"125805","name":"2个","price":60,"image":"/images/good1.jpg","href":"http://localhost:3000/good/00002.html"}]);
}
