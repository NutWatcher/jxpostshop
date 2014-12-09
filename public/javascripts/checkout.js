/**
 * Created by yzjf on 2014/11/24.
 */
operationInit = function (){
    $(".jieSuan-goods-div .jieSuan-operation-plus").on({
        'click': function(event){
            event.stopPropagation();
            var input = $(this).siblings("input");
            var num = parseInt($(input).val());
            $(input).val(num + 1);
            changeTotal($(this).parent());
        }
    });
    $(".jieSuan-goods-div .jieSuan-operation-minus").on({
        'click': function(event){
            event.stopPropagation();
            var input = $(this).siblings("input");
            var num = parseInt($(input).val());
            if ( num > 0 ){
                $(input).val(num - 1);
                changeTotal($(this).parent());
            }
        }
    });
    $(".jieSuan-goods-div .jieSuan-goods-quantity-input").on({
        'change': function(event){
            event.stopPropagation();
            changeTotal($(this).parent());
        }
    });
};
changeTotal = function(quantity){
    var num = parseInt($(quantity).children('input').val());
    var price = parseFloat($(quantity).siblings('.jieSuan-goods-price').children('span').text());
    var total = num * price ;
    $(quantity).siblings('.jieSuan-goods-total').children('span').text(total);
    changeTotalCounts();
    /*console.log(num);
    console.log(price);
    console.log(total);*/
}
changeTotalCounts = function(){
    var totalCounts = parseFloat($('#jieSuan-totalCounts').text());
    var eachCount = $('.jieSuan-goods-total');
    var num = 0 ;
    for ( var i = 0 ; i < eachCount.length ; i ++ ){
        num += parseFloat($(eachCount[i]).text());
    }
    console.log(num);
    $('#jieSuan-totalCounts').text(num);
}