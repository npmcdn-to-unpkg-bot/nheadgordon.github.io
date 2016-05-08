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


$("#aries-icon").on("click", function () {
    window.location = 'aries.html';
});

$("#taurus-icon").on("click", function () {
    window.location = 'taurus.html';
});

$("#gemini-icon").on("click", function () {
    window.location = 'gemini.html';
});

$("#cancer-icon").on("click", function () {
    window.location = 'cancer.html';
});

$("#leo-icon").on("click", function () {
    window.location = 'leo.html';
});

$("#virgo-icon").on("click", function () {
    window.location = 'virgo.html';
});

$("#libra-icon").on("click", function () {
    window.location = 'libra.html';
});

$("#scorpio-icon").on("click", function () {
    window.location = 'scorpio.html';
});

$("#sagittarius-icon").on("click", function () {
    window.location = 'sagittarius.html';
});

$("#capricorn-icon").on("click", function () {
    window.location = 'capricorn.html';
});

$("#aquarius-icon").on("click", function () {
    window.location = 'aquarius.html';
});

$("#pisces-icon").on("click", function () {
    window.location = 'pisces.html';
});

})

