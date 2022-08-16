let how_data = {
    variableWidth: false,
    dots: true,
    dotsClass: "slick-dots how__dots",
    arrows: true,
    prevArrow: '<div class="arrow-prev first__arrow arrow"></div>',
    nextArrow: '<div class="arrow-next first__arrow arrow"></div>',
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 560,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
                arrows: false,
                dots: true,
            }
        }
    ]
}

$(document).ready(function () {

        $("#yes").click(() => {
            $("#years-popup").removeClass("active")
        })
        $("#no").click(() => {
            // window.close()
            window.location.replace('https://disney.ru');
        })

        $(".link-to-view").on("click", function () {
            let id = $(this).attr('data-for')
            $('#' + id)[0].scrollIntoView({behavior: "smooth"})
        })

        $('.products__slider .slide__image').on('click', function () {
            let id = $(this).attr('data-for')
            $('#' + id).addClass('active')
            $('.popup-product__slider').slick({
                variableWidth: false,
                dots: false,
                arrows: true,
                prevArrow: '<div class="arrow-prev popup-arrow arrow"></div>',
                nextArrow: '<div class="arrow-next popup-arrow arrow"></div>',
                slidesToShow: 1,
                infinite: true,
                autoplay: true,
            });
        })

        $('.popup').on('click', function (event) {
            event.stopPropagation()
        })


        $('.wrapper-to-close').on('click', function () {
            $(this).removeClass('active')
        })
        $('.popup-product__close').on('click', function () {
            $(this).closest('.wrapper').removeClass('active')
        })


        $('.popup-product__close-mob').on('click', function () {
            $(this).closest('.wrapper').removeClass('active')
        })


        $(".menu-burger").click(() => {
            if ($(".menu-burger").hasClass("active")) {
                $(".menu-burger").removeClass("active")
                $(".header__menu").removeClass("active")
            } else {
                $(".menu-burger").addClass("active")
                $(".header__menu").addClass("active")
            }
        })

        var parallaxItem = $('.image-flakes img')[0];
        new simpleParallax(parallaxItem, {
            'overflow': true,
            'scale': 1.3,
            'delay': 0,
        });

        var parallaxItem = $('.image-pine img')[0];
        new simpleParallax(parallaxItem, {
            'overflow': true,
            'scale': 1.5,
            'delay': 0,
        });

        var parallaxItem = $('.image-hello img')[0];
        new simpleParallax(parallaxItem, {
            'overflow': true,
            'delay': 0,
            'orientation': 'down'
        });

        /**
         * Определение слайдеров
         */
        $('.first__slider').slick({
            variableWidth: false,
            variableHeight: false,
            // autoplay: true,
            // centerMode: true,
            dots: true,
            dotsClass: "slick-dots first__dots",
            arrows: true,
            prevArrow: '<div class="arrow-prev first__arrow arrow"></div>',
            nextArrow: '<div class="arrow-next first__arrow arrow"></div>',
            slidesToShow: 1,
            infinite: true,
            responsive: [
                {
                    breakpoint: 560,
                    settings: {
                        variableWidth: false,
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                    }
                }
            ]
        });


        $('.how__slider').slick(how_data);

        // var length = $('#selected ul').children('li').length
        //
        // for(let i=0; i < newBlockChildrens.length; i++){
        //     newBlock.insertAdjacentHTML('beforeend', newBlockChildrens[i].outerHTML)
        // })

        $('.products__slider').each(function () {
            if ($(this).children('.slide').length <= 3) {
                $(this).html($(this).html() + $(this).html())
            }
        })
        $('.products__slider').slick({
            variableWidth: false,
            centerMode: true,
            dots: true,
            dotsClass: "slick-dots products__dots",
            arrows: true,
            prevArrow: '<div class="arrow-prev products__arrow arrow"></div>',
            nextArrow: '<div class="arrow-next products__arrow arrow"></div>',
            slidesToShow: 3,
            infinite: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        variableWidth: false,
                        centerMode: true,
                        centerPadding: '80px',
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                    }
                }
            ]
        });

        /**
         * Форма для заявки
         */

        // $('.btn').on("click", function () {
        //     $('.pop-up__card').addClass('active')
        //     $('.pop-up__wall').addClass('active')
        // })
        //
        // $('.pop-up__close-btn').on("click", function () {
        //     $('.pop-up__card').removeClass('active')
        //     $('.pop-up__wall').removeClass('active')
        // })


        var $video = $('video');
        var $window = $(window);

        let how_slider  = $('.how__slider')
        $window.scroll(function() {

            var $topOfVideo = $video.offset().top;
            var $bottomOfVideo = $video.offset().top + $video.outerHeight();

            let bottomOfSlider = how_slider.offset().top + how_slider.outerHeight();

            var $topOfScreen = $window.scrollTop();
            var $bottomOfScreen = $window.scrollTop() + $window.innerHeight();

            if($bottomOfScreen > ($topOfVideo+100) ) {
                $video[0].play();
                console.log('play')
            }

            if($bottomOfScreen > bottomOfSlider) {
                how_data.autoplay = true
            }
        });

    }
)