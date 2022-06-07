calculateNewScale(); // if the user go to the page and his window is less than 1920px
$(window).resize(function () 
{
    calculateNewScale();
});

function calculateNewScale()
{
    var percentageOn1 = $(window).width() / 1180 ;
    $("body").css(
    {
        "-moz-transform": "scale("+percentageOn1 +")",
        "-webkit-transform": "scale("+percentageOn1 +")",
        "transform": "scale("+percentageOn1 +")",
    });
}
