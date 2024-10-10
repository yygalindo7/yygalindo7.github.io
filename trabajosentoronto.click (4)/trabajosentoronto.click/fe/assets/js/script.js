(function($) {

    "use strict";

    /* ----- Preloader ----- */
    function preloaderLoad() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(300);
        }
        $(".preloader_disabler").on('click', function() {
            $("#preloader").hide();
        });
    }

    /* ----- Navbar Scroll To Fixed ----- */
    function navbarScrollfixed() {
        $('.navbar-scrolltofixed').scrollToFixed();
        var summaries = $('.summary');
        summaries.each(function(i) {
            var summary = $(summaries[i]);
            var next = summaries[i + 1];
            summary.scrollToFixed({
                marginTop: $('.navbar-scrolltofixed').outerHeight(true) + 10,
                limit: function() {
                    var limit = 0;
                    if (next) {
                        limit = $(next).offset().top - $(this).outerHeight(true) - 10;
                    } else {
                        limit = $('.footer').offset().top - $(this).outerHeight(true) - 10;
                    }
                    return limit;
                },
                zIndex: 999
            });
        });
    }

    /** Main Menu Custom Script Start **/
    $(document).on('ready', function() {
        $("#respMenu").aceResponsiveMenu({
            resizeWidth: '768', // Set the same in Media query
            animationSpeed: 'fast', //slow, medium, fast
            accoridonExpAll: false //Expands all the accordion menu on click
        });
    });

    /* ----- Tags Bar Code for job list 1 page ----- */
    $('.tags-bar > span i').on('click', function() {
        $(this).parent().fadeOut();
    });

    $(function() {
        $('.btns').on('click', function() {
            $('.content_details').toggleClass('is-full-width');
        });
    });

    /* ----- This code for menu ----- */
    $(window).on('scroll', function() {
        if ($('.scroll-to-top').length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $('.scroll-to-top').fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $('.scroll-to-top').fadeOut(500);
            }
        };
        if ($('.stricky').length) {
            var headerScrollPos = $('.header-navigation').next().offset().top;
            var stricky = $('.stricky');
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.removeClass('slideIn animated');
                stricky.addClass('stricky-fixed slideInDown animated');
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass('stricky-fixed slideInDown animated');
                stricky.addClass('slideIn animated');
            }
        };
    });
    /** Main Menu Custom Script End **/

    /* ----- Blog innerpage sidebar according ----- */
    $(document).on('ready', function() {
        $('.collapse').on('show.bs.collapse', function() {
            $(this).siblings('.card-header').addClass('active');
        });

        $('.collapse').on('hide.bs.collapse', function() {
            $(this).siblings('.card-header').removeClass('active');
        });

        $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        })
    });

    /* ----- fact-counter ----- */
    function counterNumber() {
        $('div.timer').counterUp({
            delay: 5,
            time: 2000
        });
    }

    /* ----- Mobile Nav ----- */
    $(function() {
        $('nav#menu').mmenu();
    });

    /* ----- Candidate SIngle Page Price Slider ----- */
    $(function() {
        $("#slider-range").slider({
            range: true,
            min: 12000,
            max: 100000,
            values: [12000, 70000],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    });

    /* ----- Employee List v1 page range slider widget ----- */
    $(document).on('ready', function() {
        $(".slider-range").slider({
            range: true,
            min: 1998,
            max: 2040,
            values: [1998, 2018],
            slide: function(event, ui) {
                $(".amount").val(ui.values[0]);
                $(".amount2").val(ui.values[1]);
            }
        });
        $(".amount").change(function() {
            $(".slider-range").slider('values', 0, $(this).val());
        });
        $(".amount2").change(function() {
            $(".slider-range").slider('values', 1, $(this).val());
        });
    });

    /* ----- Progress Bar ----- */
    if ($('.progress-levels .progress-box .bar-fill').length) {
        $(".progress-box .bar-fill").each(function() {
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width', progressWidth + '%');
            $(this).children('.percent').html(progressWidth + '%');
        });
    }

    /* ----- Background Parallax ----- */
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    jQuery(document).on('ready', function() {
        jQuery(window).stellar({
            horizontalScrolling: false,
            hideDistantElements: true,
            verticalScrolling: !isMobile.any(),
            scrollProperty: 'scroll',
            responsive: true
        });
    });

    /* ----- Wow animation ----- */
    function wowAnimation() {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true, // trigger animations on mobile devices (default is true)
            offset: 0
        });
        wow.init();
    }

    /* ----- Date & time Picker ----- */
    if ($('.datepicker').length) {
        $('.datepicker').datetimepicker();
    }

    /* ----- PG Slider ----- */
    if ($('#js-main-slider').length) {
        $('#js-main-slider').pogoSlider({
            autoplay: true,
            autoplayTimeout: 5000,
            displayProgess: true,
            generateNav: false,
            preserveTargetSize: true,
            targetWidth: 1000,
            targetHeight: 300,
            responsive: true
        }).data('plugin_pogoSlider');
    }

    /*  Testimonial-Slider-Owl-carousel  */
    if ($('.testimonial_slider').length) {
        $('.testimonial_slider').owlCarousel({
            loop: true,
            margin: 15,
            dots: true,
            nav: false,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="fa fa-arrow-left"></i>',
                '<i class="fa fa-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                767: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        })
    }

    /*  Expert-Freelancer-Owl-carousel  */
    if ($('.ef_slider').length) {
        $('.ef_slider').owlCarousel({
            loop: true,
            margin: 15,
            dots: true,
            nav: false,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: true,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="fa fa-arrow-left"></i>',
                '<i class="fa fa-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        })
    }

    /*  Expert-Freelancer-Owl-carousel  */
    if ($('.ef_slider2').length) {
        $('.ef_slider2').owlCarousel({
            loop: true,
            margin: 15,
            dots: false,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: true,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        })
    }

    /*  Testimonial-Slider-Owl-carousel  */
    if ($('.company_reg_slider').length) {
        $('.company_reg_slider').owlCarousel({
            loop: true,
            margin: 0,
            dots: true,
            nav: false,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: true,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })
    }

    /*  Testimonial-Slider-Owl-carousel  */
    if ($('.team_slider').length) {
        $('.team_slider').owlCarousel({
            loop: true,
            margin: 15,
            dots: false,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 2,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })
    }

    /*  Testimonial-Slider-Owl-carousel  */
    if ($('.carrer_tips_slider').length) {
        $('.carrer_tips_slider').owlCarousel({
            loop: true,
            margin: 15,
            dots: false,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: true,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        })
    }

    /*  Testimonial-Slider-Owl-carousel  */
    if ($('.carrer_tips_slider2').length) {
        $('.carrer_tips_slider2').owlCarousel({
            loop: true,
            margin: 15,
            dots: true,
            nav: false,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: true,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        })
    }

    /*  One-Grid-Owl-carousel  */
    if ($('.testimonial_slider_home3').length) {
        $('.testimonial_slider_home3').owlCarousel({
            animateIn: 'fadeIn',
            loop: true,
            margin: 15,
            dots: true,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: true,
            smartSpeed: 2000,
            singleItem: true,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                320: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    // Owl-main-slider-carousel
    if ($('.main-slider-home5').length) {
        $('.main-slider-home5').owlCarousel({
            animateIn: 'fadeIn',
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            autoHeight: true,
            smartSpeed: 2000,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    /* ----- Scroll To top ----- */
    function scrollToTop() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 600) {
                $('.scrollToHome').fadeIn();
            } else {
                $('.scrollToHome').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scrollToHome').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    }

    // Jobtitles autocomplete
    $(document).on('ready', function() {

        /*$('#exampleInputName').autoComplete({
            resolverSettings: {
                url: 'fe/assets/js/test-ac.json'
            }
        });*/

        $('#homeJobTitle, #homeJobTitleMob').autoComplete({
            resolver: 'custom',
            minLength: 1,
            noResultsText: '',
            events: {
                search: function(qry, callback) {
                    $.ajax(
                        'ac-jt', {
                            data: {
                                'q': qry,
                                'lc': lc
                            }
                        }
                    ).done(function(res) {
                        callback(res.results)
                    });
                }
            }
        });

        $('#homeJobTitle, #homeJobTitleMob').on('autocomplete.select', function(evt, item) {
            $('#homeJobtitleId, #homeJobtitleIdMob').val(item.id);

            // mirror value on mobile and desktop
            if ($(this).attr('id') == 'homeJobTitle') {
                $("#homeJobTitleMob").val(item.text);
            } else {
                $("#homeJobTitle").val(item.text);
            }

            return item;
        });

        // make autocomplete results a little wider on job results page
        $('#homeJobTitle, #homeLocation').on('autocomplete.dd.shown', function(evt) {
            if ($(this).attr('id') == 'homeJobTitle' &&
                $('#homeJobTitleHolder').length != 0 &&
                $('#homeJobTitleHolder').width() > $('#homeJobTitleHolder .bootstrap-autocomplete.dropdown-menu').width()) {
                $('#homeJobTitleHolder .bootstrap-autocomplete.dropdown-menu').css('width', $('#homeJobTitleHolder').width() + 'px');
            }

            if ($(this).attr('id') == 'homeLocation' &&
                $('#homeLocationHolder').length != 0 &&
                $('#homeLocationHolder').width() > $('#homeLocationHolder .bootstrap-autocomplete.dropdown-menu').width()) {
                $('#homeLocationHolder .bootstrap-autocomplete.dropdown-menu').css('width', $('#homeLocationHolder').width() + 'px');
            }

        });

        // show autocomplete on focus when already has value
        $('#homeJobTitle, #homeJobTitleMob').focus(function() {
            if ($(this).val() != '') {
                $('#' + $(this).attr('id')).autoComplete('show');
            }
        });

        var homeJobTitleInitVal = $('#homeJobTitle').val();
        $('#homeJobTitle').on('autocomplete.freevalue', function(evt, value) {
            // freevalue gets triggered even when user simply clicks away or hits tab
            if (value != homeJobTitleInitVal) {
                $('#homeJobtitleId, #homeJobtitleIdMob').val('');
                homeJobTitleInitVal = null;
                homeJobtitleIdMobInitVal = null;
            }
            return value;
        });

        var homeJobtitleIdMobInitVal = null;
        if ($('#homeJobtitleIdMob').length == 1) {
            homeJobtitleIdMobInitVal = $('#homeJobtitleIdMob').val();
        }
        $('#homeJobTitleMob').on('autocomplete.freevalue', function(evt, value) {
            // freevalue gets triggered even when user simply clicks away or hits tab
            if (value != homeJobtitleIdMobInitVal) {
                $('#homeJobtitleId, #homeJobtitleIdMob').val('');
                homeJobTitleInitVal = null;
                homeJobtitleIdMobInitVal = null;
            }
            return value;
        });

        $('#homeLocation, #homeLocationMob').autoComplete({
            resolver: 'custom',
            minLength: 1,
            noResultsText: '',
            events: {
                search: function(qry, callback) {
                    $.ajax(
                        'ac-loc', {
                            data: {
                                'q': qry,
                                'lc': lc
                            }
                        }
                    ).done(function(res) {
                        callback(res.results)
                    });
                }
            }
        });

        $('#homeLocation, #homeLocationMob').on('autocomplete.select', function(evt, item) {
            $('#homeLocationId, #homeLocationIdMob').val(item.id);

            // mirror value on mobile and desktop
            if ($(this).attr('id') == 'homeLocation') {
                $("#homeLocationMob").val(item.text);
            } else {
                $("#homeLocation").val(item.text);
            }

            return item;
        });

        var homeLocationInitVal = $('#homeLocation').val();
        $('#homeLocation').on('autocomplete.freevalue', function(evt, value) {
            // freevalue gets triggered even when user simply clicks away or hits tab
            if (value != homeLocationInitVal) {
                $('#homeLocationId, #homeLocationIdMob').val('');
                homeLocationInitVal = null;
                homeLocationMobInitVal = null;
            }
            return value;
        });

        var homeLocationMobInitVal = null;
        if ($('#homeLocationMob').length == 1) {
            homeLocationMobInitVal = $('#homeLocationMob').val();
        }
        $('#homeLocationMob').on('autocomplete.freevalue', function(evt, value) {
            // freevalue gets triggered even when user simply clicks away or hits tab
            if (value != homeLocationMobInitVal) {
                $('#homeLocationId, #homeLocationIdMob').val('');
                homeLocationInitVal = null;
                homeLocationMobInitVal = null;
            }
            return value;
        });

        // when user clears field and hits submit
        $('.job-search-form-main').submit(function(evt) {
            if ($('#homeJobTitle').val() == '' && $('#homeJobtitleId').val() != '') {
                $('#homeJobtitleId').val('');
            }
            if ($('#homeLocation').val() == '' && $('#homeLocationId').val() != '') {
                $('#homeLocationId').val('');
            }
            return true;
        });
        $('#job-search-form-tiny-mob').submit(function(evt) {
            if ($('#homeJobTitleMob').val() == '' && $('#homeJobtitleIdMob').val() != '') {
                $('#homeJobtitleIdMob').val('');
            }
            if ($('#homeLocationMob').val() == '' && $('#homeLocationIdMob').val() != '') {
                $('#homeLocationIdMob').val('');
            }
            return true;
        });

        // mirror search input on mobile and desktop
        $('#homeJobTitleMob').change(function() {
            $('#homeJobTitle').val($('#homeJobTitleMob').val());
        });
        $('#homeJobTitle').change(function() {
            $('#homeJobTitleMob').val($('#homeJobTitle').val());
        });
        $('#homeLocationMob').change(function() {
            $('#homeLocation').val($('#homeLocationMob').val());
        });
        $('#homeLocation').change(function() {
            $('#homeLocationMob').val($('#homeLocation').val());
        });

        // enable Go "arrow" on job search
        var job_search_title_tiny_val = $('.job-search-title-tiny').val();
        $('.job-search-title-tiny').focus(function() {
            $('#btn-job-search-magnify').css('display', 'none');
            $('#bnt-job-search-go-one').css('display', 'inline');
        });
        $('.job-search-title-tiny').blur(function() {
            if (job_search_title_tiny_val == $('.job-search-title-tiny').val()) {
                setTimeout(function() {
                    $('#btn-job-search-magnify').css('display', 'inline');
                    $('#bnt-job-search-go-one').css('display', 'none');
                }, 300);
            }
        });

        var job_search_location_tiny_val = $('.job-search-location-tiny').val();
        $('.job-search-location-tiny').focus(function() {
            $('#btn-job-search-location').css('display', 'none');
            $('#bnt-job-search-go-two').css('display', 'inline');
        });
        $('.job-search-location-tiny').blur(function() {
            if (job_search_location_tiny_val == $('.job-search-location-tiny').val()) {
                setTimeout(function() {
                    $('#btn-job-search-location').css('display', 'inline');
                    $('#bnt-job-search-go-two').css('display', 'none');
                }, 300);
            }
        });

        //// enable Go "arrow" on job search on mobile

        var job_search_title_tiny_mob_val = $('.job-search-title-tiny-mob').val();
        $('.job-search-title-tiny-mob').focus(function() {
            $('#btn-job-search-magnify-mob').css('display', 'none');
            $('#bnt-job-search-go-one-mob').css('display', 'inline');
        });
        $('.job-search-title-tiny-mob').blur(function() {
            if (job_search_title_tiny_mob_val == $('.job-search-title-tiny-mob').val()) {
                setTimeout(function() {
                    $('#btn-job-search-magnify-mob').css('display', 'inline');
                    $('#bnt-job-search-go-one-mob').css('display', 'none');
                }, 300);
            }
        });

        var job_search_location_tiny_mob_val = $('.job-search-location-tiny-mob').val();
        $('.job-search-location-tiny-mob').focus(function() {
            $('#btn-job-search-location-mob').css('display', 'none');
            $('#bnt-job-search-go-two-mob').css('display', 'inline');
        });
        $('.job-search-location-tiny-mob').blur(function() {
            if (job_search_location_tiny_mob_val == $('.job-search-location-tiny-mob').val()) {
                setTimeout(function() {
                    $('#btn-job-search-location-mob').css('display', 'inline');
                    $('#bnt-job-search-go-two-mob').css('display', 'none');
                }, 300);
            }
        });


    });



    /* ======
       When document is ready, do
       ====== */
    $(document).on('ready', function() {
        // add your functions
        navbarScrollfixed();
        // scrollToTop();
        wowAnimation();

        // extending for text toggle
        $.fn.extend({
            toggleText: function(a, b) {
                return this.text(this.text() == b ? a : b);
            }
        });
        if ($('.showFilter').length) {
            $('.showFilter').on('click', function() {
                $(this).toggleText('Show Filter', 'Hide Filter');
                $(this).toggleClass('flaticon-close flaticon-filter-1 sidebarOpended sidebarClosed');
                $('.job_list_three.sidenav').toggleClass('opened');
                $('body').toggleClass('translated');
            });
        }

    });

    /* ======
       When document is loading, do
       ====== */
    // window on Load function
    $(window).on('load', function() {
        // add your functions
        counterNumber();
        preloaderLoad();

    });
    // window on Scroll function
    $(window).on('scroll', function() {
        // add your functions
    });

})(window.jQuery);