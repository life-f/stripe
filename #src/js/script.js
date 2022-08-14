$(document).ready(function () {

        $(".wrapper").addClass("active")

        $("#yes").click(() => {
            $(".wrapper").removeClass("active")
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
         *  Фиксация header
         */
        // window.onscroll = function () {
        //     myFunction()
        // };
        // var header = document.getElementById("header-top");
        // var sticky = 10;
        // // if (window.screen.width <= '768') {
        // //     header = document.getElementById("header");
        // //     sticky = 0
        // // }
        //
        // function myFunction() {
        //     if (window.pageYOffset >= sticky) {
        //         header.classList.add("fixed");
        //     } else {
        //         header.classList.remove("fixed");
        //     }
        // }

        /**
         * Меню на мобильных
         */
        // if ($(window).width() <= '768') {
        //     $('.header__menu').addClass('sidenav')
        // }
        // $('.header__mobile').on('click', function () {
        //     if ($(this).hasClass('change')) {
        //         $('.header__mobile').removeClass('change')
        //         $('.header__menu').removeClass('width')
        //     } else {
        //         $('.header__mobile').addClass('change')
        //         $('.header__menu').addClass('width')
        //     }
        // })

        // $('.menu__link').on('click', function () {
        //     $('.header__mobile').removeClass('change')
        //     $('.header__menu').removeClass('width')
        // })

        /**
         * Определение слайдеров
         */
        // if ($(window).width() <= '560') {
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
        // } else if ($(window).width() > '560') {
        //     $('.first__slider').slick({
        //         variableWidth: false,
        //         variableHeight: false,
        //         // autoplay: true,
        //         // centerMode: true,
        //         dots: true,
        //         dotsClass: "slick-dots first__dots",
        //         arrows: true,
        //         prevArrow: '<div class="arrow-prev first__arrow arrow"></div>',
        //         nextArrow: '<div class="arrow-next first__arrow arrow"></div>',
        //         slidesToShow: 1,
        //         infinite: true
        //     });
        // }

        $('.how__slider').slick({
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
        });
        $('.products__slider').slick({
            variableWidth: false,
            centerMode: true,
            // centerPadding: '35px',
            dots: true,
            dotsClass: "slick-dots products__dots",
            arrows: true,
            prevArrow: '<div class="arrow-prev products__arrow arrow"></div>',
            nextArrow: '<div class="arrow-next products__arrow arrow"></div>',
            slidesToShow: 3,
            infinite: true,
            // responsive: [
            //     {
            //         breakpoint: 560,
            //         settings: {
            //             variableWidth: false,
            //             slidesToShow: 1,
            //             arrows: false,
            //             dots: true,
            //         }
            //     }
            // ]
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
    }
)