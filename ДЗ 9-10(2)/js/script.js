$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );
});

$(document).ready(function(){
$( '.sub-menu' ).mouseenter(
  function () {
    $(this).animate({
        backgroundColor:"#03C",
    }, 500 );
});

$( '.sub-menu' ).mouseleave(function() {

    $(this).animate({

        backgroundColor:"#0CF",
    }, 500 );
});
});
