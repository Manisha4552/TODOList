$(document).ready(function(){
    $('.container1').on('click','button',function(){
        var value=$('.container1 input').val();
        console.log(value);
        var html= '<div class="container2 rounded ml-4 mt-3">\
                    <div class="items ml-3 pt-1 col">\
                        <span class="trash">\
                            <i class="fas fa-trash-alt"></i>\
                            </span>' +value +
                    '</div>\
                    </div>';
        console.log(html);
        $('.container').append(html);
    });
    $('.container').on('click','.trash',function(){
        var parent=$(this).parent().parent();
        parent.remove();
    });
   
});