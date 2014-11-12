/**
 * Created by yzjf on 2014/11/12.
 */

function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)) {
        return unescape(arr[2]);
    }
    else
        return null;
}
function setCookie(name,value)
{
    var Days = 1/24;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";path=/;expires=" + exp.toGMTString();
}
function addToCar(id){
    var shopCar = getCookie('shopCar');
    //console.info(shopCar);
    if (shopCar == null){
        shopCar = id ;
    }
    else{
        shopCar = shopCar + "-" + id ;
    }
    setCookie('shopCar',shopCar);
    $('#shop-dialog').show();
}