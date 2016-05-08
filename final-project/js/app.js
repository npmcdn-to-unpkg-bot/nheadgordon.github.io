$(document).ready(function () {
    // console.logs the window.width
    $(window).resize(function () {
        console.log($(window).width());
    })

    $('#burger').click(function () {
        $('#mobile-nav').show();
        $('#burger').hide();
        $('.astro-sign').hide();

    });

    $('#burger').click(function () {
        $('#x-out').show();

    });

    $('#x-out').click(function () {
        $('#mobile-nav').hide();
        $('#x-out').hide();
        $('#burger').show();
        $('.astro-sign').show();
    });

var elementPosition = $('#vertical-align-index').offset();


    // console.logs the window.width

})

