/**
 * Created by yzjf on 2014/11/12.
 */
showShopToCar = function(){

};
showShopCar = function(){
    $("#jieSuanDanCar").show();
    ajaxGetUserShopCar(function(err, data){
        if (err){
            alert(err) ;
        }
        else{
            if (data.length <= 0 ){

            }
            else {
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
};