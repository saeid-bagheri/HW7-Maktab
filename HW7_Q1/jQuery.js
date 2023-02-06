// $(document).ready(function () {
//     debugger;
//     changeLabels();
// });

// function changeLabels() {
//     debugger;
//     sum += +$(this).value() || 0;
//     $('#itemCount1 span').text(sum);
// }


$("input").focusout(function () {
    var sum = 0;
    $("input[type=number]").each(function(){
    if ($(this).val() != '') {
        sum += parseInt($(this).val());
        $('#itemCount1 span').text(sum);
        $('#itemCount2 span').text(sum);
        $('#price1 span').text(sum * 200000);
        $('#price2 span').text((sum * 200000) + parseInt($('#delivery').val()));
    }});
});