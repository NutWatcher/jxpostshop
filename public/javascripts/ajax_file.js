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
function ajaxGetUserShopCar(shopCar, cb){
    if (shopCar == null || shopCar == ""){
        cb(null, []);
    }
    else{
        $.ajax({
            method: 'post',
            url: '/goodsbyid',
            data: {
                shops : shopCar
            },
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
    }
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
