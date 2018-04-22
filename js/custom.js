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
    $(".social-top-2 #font-resize-control").click(function () {
        $(".social-top-2 .font-resize").toggleClass("active");
        $(".social-top-2 #google_translate_element").removeClass("active");
    });
    $(".social-top-2 #translate").click(function () {
        $(".social-top-2 #google_translate_element").toggleClass("active");
        $(".social-top-2 .font-resize").removeClass("active");
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
        $("section,footer,.navbar-collapse,.navbar-brand,.header-top").toggleClass("gray");
        $(".goog-te-banner-frame").toggleClass("translate-posotion");
    });


    $(".social-top-3 #search-control").click(function () {
        $(".social-top-3 .search-top-2").toggleClass("active");
        $(".social-top-3 .font-resize").removeClass("active");
        $("#google_translate_element").removeClass("active");
    });
    $(".social-top-3 #font-resize-control").click(function () {
        $(".social-top-3 .font-resize").toggleClass("active");
        $(".social-top-3 .search-top-2").removeClass("active");
        $("#google_translate_element").removeClass("active");
    });
    $(".social-top-3 #translate").click(function () {
        $("#google_translate_element").toggleClass("active");
        $(".social-top-3 .search-top-2").removeClass("active");
        $(".social-top-3 .font-resize").removeClass("active");
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
    } else {
        $('.main-header').removeClass('fixed');
    }
});
