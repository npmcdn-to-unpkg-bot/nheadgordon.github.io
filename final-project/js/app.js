$(document).ready(function () {
    // console.logs the window.width
    var isMobile = $(window).width() < 767;


    $(window).resize(function () {
        isMobile = $(window).width() < 767;
        if (!isMobile) {
          $('#burger').hide();
          $('#mobile-nav').hide();
          $('#x-out').hide();
          return;
        } 
        $('#burger').show();
    });

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

        // hover states


    $("#aries-icon").on({
 "mouseover" : function() {
    this.src = 'images/aries-hover.svg';
  },
  "mouseout" : function() {
    this.src='images/aries.svg';
  }
});

    $("#aquarius-icon").on({
 "mouseover" : function() {
    this.src = 'images/aquarius-hover.svg';
  },
  "mouseout" : function() {
    this.src='images/aquarius.svg';
  }
});

    $("#cancer-icon").on({
 "mouseover" : function() {
    this.src = 'images/cancer-hover.svg';
  },
  "mouseout" : function() {
    this.src='images/cancer.svg';
  }
});

    $("#capricorn-icon").on({
 "mouseover" : function() {
    this.src = 'images/capricorn-hover.svg';
  },
  "mouseout" : function() {
    this.src='images/capricorn.svg';
  }
});

    $("#gemini-icon").on({
 "mouseover" : function() {
    this.src = 'images/gemini-hover.svg';
  },
  "mouseout" : function() {
    this.src='images/gemini.svg';
  }
});

    $("#leo-icon").on({
 "mouseover" : function() {
    this.src = 'images/leo-hover.svg';
  },
  "mouseout" : function() {
    this.src='images/leo.svg';
  }
});

    $("#libra-icon").on({
 "mouseover" : function() {
    this.src = 'images/libra-hover.svg';
  },
  "mouseout" : function() {
    this.src='images/libra.svg';
  }
});

    $("#pisces-icon").on({
 "mouseover" : function() {
    this.src = 'images/pisces-hover.svg';
  },
  "mouseout" : function() {
    this.src='images/pisces.svg';
  }
});

    $("#sagittarius-icon").on({
 "mouseover" : function() {
    this.src = 'images/sagittarius-hover.svg';
  },
  "mouseout" : function() {
    this.src='images/sagittarius.svg';
  }
});

    $("#scorpio-icon").on({
 "mouseover" : function() {
    this.src = 'images/scorpio-hover.svg';
  },
  "mouseout" : function() {
    this.src='images/scorpio.svg';
  }
});

    $("#taurus-icon").on({
 "mouseover" : function() {
    this.src = 'images/taurus-hover.svg';
  },
  "mouseout" : function() {
    this.src='images/taurus.svg';
  }
});

    $("#virgo-icon").on({
 "mouseover" : function() {
    this.src = 'images/virgo-hover.svg';
  },
  "mouseout" : function() {
    this.src='images/virgo.svg';
  }
});

var elementPosition = $('#vertical-align-index').offset();

$('.arrow').click(function() {
   $.scrollTo($('.astro-content-container'), 500);
});

    // console.logs the window.width

})

