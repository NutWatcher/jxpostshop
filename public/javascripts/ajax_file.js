/**
 * Created by lyy on 13-12-22.
 */
function ajaxGetUser(cb){
    $.ajax({
        method: 'post',
        url: '/ajaxGetUser',
        data: {},
        success: function(msg){
            if (msg.success == false){
                cb(msg.data, msg) ;
            }
            else{
                cb(null, msg.data);
            }
        },
        error: function(xmlHttpRequest, err){
            cb(err.toString());
        }
    })
};
function ajaxGetUserShopCar(cb){
    cb(null, [{"name":"一个"},{"name":"2个"}]);
    /*$.ajax({
        method: 'post',
        url: './ajaxGetUser',
        data: {},
        success: function(msg){
            if (msg.success == false){
                cb(msg.data, msg) ;
            }
            else{
                cb(null, msg.data);
            }
        },
        error: function(xmlHttpRequest, err){
            cb(err.toString());
        }
    })*/
};
