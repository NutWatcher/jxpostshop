/**
 * Created by yzjf on 2014/11/12.
 */
showShopToCar = function(){

};
showShopCar = function(){
    $("#jieSuanDanCar").show();
    var shopCar = getCookie('shopCar');
    ajaxGetUserShopCar(shopCar,function(err, data){
        if (err){
            alert(err) ;
        }
        else{
            if (data.length <= 0 ){
                $("#jieSuanDanCar .top-content-div-car-top-div").hide();
                $("#jieSuanDanCar .top-content-div-car-bottom-div").hide();
                var str = "";
                str += "<li>";
                str += "<span style='color: #666666'> 结算单中还没有商品! </span>";
                str += "</li>";
                for (var i = 0; i < data.length; i++) {
                    str += "<li>";
                    str += "<a>" + data[i].name + "</a>";
                    str += "</li>";
                }
                $("#jieSuanDanCar ul").empty();
                $('#jieSuanDanCar ul').append(str);
            }
            else {
                $("#jieSuanDanCar .top-content-div-car-top-div").show();
                $("#jieSuanDanCar .top-content-div-car-bottom-div").show();
                var str = "";
                for (var i = 0; i < data.length; i++) {
                    str += "<li>";
                    str += "<a>" + data[i].name + "</a>";
                    str += "</li>";
                }
                $("#jieSuanDanCar ul").empty();
                $('#jieSuanDanCar ul').append(str);
            }
        }
    });
}
topDivInit = function (){
    /*ajaxGetUser(function(err, data){
        if (err){
            alert(err) ;
        }
        else{
            $('#top-div-username').text(data);
        }
    });*/
    $('#jieSuanDan').on({
        'mouseenter': function (e) {
            e.stopPropagation();
            showShopCar();
        },
        'mouseleave': function (e) {
            e.stopPropagation();
            $("#jieSuanDanCar").hide();
        }
    });
    $('#jieSuanDanClear').on({
        'click': function (e) {
            clearCar();
            $("#jieSuanDanCar").hide();
        }
    });
};