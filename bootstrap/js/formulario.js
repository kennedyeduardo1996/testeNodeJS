$(document).ready(function () {

    $("input[type=radio]").on('click',  function(){
        var id = $(this).prop('id');
        if (id == 'radio_1'){
            $(".hiden").slideUp(2000);
            // $(".hiden").hide(2000);
            // $(".hiden").fadeOut(2000);
            // $(".hiden").slideToggle(2000);
        }else if (id == 'radio_2'){
            $(".hiden").slideDown(2000);
            // $(".hiden").show(2000);
            // $(".hiden").fadeIn(2000);
            // $(".hiden").slideToggle(2000);
        }
    });


});