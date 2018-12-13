$(document).ready(function () {

    $("input[type=radio]").on('click',  function(){
        var id = $(this).prop('id');
        if (id == 'radio_1'){



       }else if (id == 'radio_2'){
            $(".hiden").show();


       }
    });


});