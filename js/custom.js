$(".noticias .item .date").append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.033 17.801"><defs></defs><path id = "Path_548" data - name = "Path 548" class = "cls-1" d = "M0,0H111.033l-8.865,17.668L0,17.8Z" / ></svg>');

$(".section-head").append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.669 46.669"><defs></defs><rect id="Rectangle_739" data-name="Rectangle 739" class="cls-1" width="33" height="33" transform="translate(23.334) rotate(45)"/></svg>');


jQuery('iframe[src*="https://www.youtube.com/embed/"]').addClass("youtube-iframe");

jQuery(".youtube .youtube-nav").click(function () {
    // changes the iframe src to prevent playback or stop the video playback in our case
    $('.youtube-iframe').each(function (index) {
        $(this).attr('src', $(this).attr('src'));
        return false;
    });

    //click function
});

$('.slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    infinite: false,
    asNavFor: '.slick2'
});
$('.slick2').slick({
    slidesToShow: 25,
    slidesToScroll: 1,
    asNavFor: '.slick',
    dots: false,
    infinite: false,
    centerMode: false,
    focusOnSelect: false
});


$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fas fa-angle-left"></i>',
    nextArrow: '<i class="fas fa-angle-right"></i>',
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    fade: true,
    infinite: true,
});
$('.footer-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fas fa-angle-left"></i>',
    nextArrow: '<i class="fas fa-angle-right"></i>',
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    fade: true,
    infinite: true,
    responsive: [

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
    }
  ]
});

$('.patner-slider').slick({
    arrows: true,
    prevArrow: '<i class="fas fa-angle-left"></i>',
    nextArrow: '<i class="fas fa-angle-right"></i>',
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
            }
    },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            }
    },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
    },

        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
    }
  ]
});









$(document).ready(function () {
    $(".header-top .social-top-2 #font-resize-control").click(function () {
        $(".header-top .social-top-2 .font-resize").toggleClass("active");
        $("#google_translate_element").removeClass("active");
    });
    
    $(".main-mega-menu .social-top-2 #font-resize-control").click(function () {
        $(".main-mega-menu .social-top-2 .font-resize").toggleClass("active");
        $("#google_translate_element").removeClass("active");
        $(".search-top-2.search-top").removeClass("active");
    });
    $(".translation").click(function () {
        $("#google_translate_element").toggleClass("active");
        $(".header-top .social-top-2 .font-resize").removeClass("active");
        $(".main-mega-menu .social-top-2 .font-resize").removeClass("active");
        $(".search-top-2.search-top").removeClass("active");
    });
    
    
    
    
    
    
    $(".search-tigger").click(function () {
        $(".search-top-2.search-top").toggleClass("active");
        $(".main-mega-menu .social-top-2 .font-resize").removeClass("active");
        $("#google_translate_element").removeClass("active");
    });
    $(".font-resize .fa-plus").click(function () {
        var fontSize = parseInt($(this).css("font-size"));
        fontSize = fontSize + 1 + "px";
        $('html').css({
            'font-size': fontSize
        });
    });
    $(".font-resize .fa-minus").click(function () {
        var fontSize = parseInt($(this).css("font-size"));
        fontSize = fontSize - 1 + "px";
        $('html').css({
            'font-size': fontSize
        });
    });
    $(".black-white").click(function () {
        $("section,footer,main,.navbar-brand,.header-top,.yamm .yamm-fw > a,.yamm .dropdown.yamm-fw .dropdown-menu,.main-header .social-top.social-top-3,.menu-icon li a,.yamm .menu-icon .search-top-2,.social-top-2 li .font-resize").toggleClass("gray");
        $(".goog-te-banner-frame").toggleClass("translate-posotion");
    });
    $(".search-logo").click(function () {
        $(".search-logo form").toggleClass("active");
    });
    $("a").click(function () {
        $(".tooltip").removeClass("in");
    });

});



function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es'
    }, 'google_translate_element');
}









$(document).scroll(function (e) {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 0) {
        console.log(scrollTop);
        $('.main-header').addClass('fixed');
        $(".header-top .social-top-2 .font-resize").removeClass("active");
    } else {
        $('.main-header').removeClass('fixed');
    }
});



$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});



// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
