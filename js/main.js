
jQuery(document).ready(function($) {
    $('.single-item').slick({
        dots: true
    });
    $('.center').slick({
        dots: true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    targetScrollFnc = function(targetName){
        var target = $('[data-scroll-id=' +targetName+']');
        if(target.length){
            var px = target.offset().top;
            var body = $("html, body");
            body.stop().animate({scrollTop:target.offset().top-30}, '1000', 'swing', function() {
                if ($('.navigation_toogle').css('display') == 'block') {
                    $('.navigation li:not(".navigation_toogle")').hide();
                }
            });
        }
    };
    window.targetScrollFnc = targetScrollFnc;

    $('[data-scroll-target]').click(function(e){
        e.preventDefault();
        var targetName = $(this).data('scroll-target');
        targetScrollFnc(targetName);
    });
    !function () {
        var t = $(".section-nav"), e = 600, o = $(window).height();
        $(".header");
    }(),

        function () {
            var t = $(".header-nav__btn");
            t.on("click", function () {
                $(this).toggleClass("active").next().slideToggle();
            })
        }(),


        $('.header-nav__link').on('click', function() {
            var secName = $(this).attr('href').replace(/#/, ''),
                offTop = $('.'+secName).offset().top,
                index = $(this).parent().index();
            if ($(window).width() <= 1024) {
                $(this).closest('.header-nav').find('.header-nav__btn').removeClass('active')
                    .next().slideUp(300);

                $('body').animate({scrollTop: offTop}, 500);
            } else {
                console.log(index);
                $.fn.fullpage.moveTo(index+1);
            }
        });


});

