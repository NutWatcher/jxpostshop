/**
 * Created by yzjf on 2014/11/12.
 */

function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)) {
        return decodeURI(arr[2]);
    }
    else
        return null;
}
function setCookie(name,value)
{
    var Days = 1/24;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ encodeURI (value) + ";path=/;expires=" + exp.toGMTString();
}
function clearCar(){
    setCookie('shopCar',"");
}
function addToCar(id){
    var shopCar = getCookie('shopCar');
    //console.info(shopCar);
    if (shopCar == null || shopCar == ""){
        shopCar = id ;
    }
    else{
        var shops = shopCar.split("-") ;
        var flag = 0 ;
        for ( var i = 0 ; i < shops.length ; i ++ ){
            if (shops[i] == id){
                flag = 1 ;
            }
        }
        if ( flag == 0 ) {
            shopCar = shopCar + "-" + id;
        }
    }
    setCookie('shopCar',shopCar);
    $('#shop-dialog').show();
}