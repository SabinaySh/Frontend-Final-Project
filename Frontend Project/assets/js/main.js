$(document).ready(function(){
    $(window).scroll(function(e){
        if($(this).scrollTop()>84){
            $("header nav").addClass("header-fixed");
            $("#backToTop").fadeIn();
        }
        else{
            $("header nav").removeClass("header-fixed");
            $("#backToTop").fadeOut();
        }
    });
    $("#backToTop").click(function(){
        $("html,body").animate({scrollTop:0},'slow')
    });


    $('.top-owl').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('.testimonials').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    $('.owl-testimonial').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    $('.owl-latest').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })


    // $(".navbar-toggler").click(function () {
    //     $(this).next().addClass('show');
    //     $(".nav-overlay-panel").css('display', 'block');
    // });

    // $(".navbar-menus .close-button").click(function () {
    //     $(this).parent().removeClass('show');
    //     $(".nav-overlay-panel").css('display', 'none');
    // });

});