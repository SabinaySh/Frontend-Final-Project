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
        margin:10,
        nav:true,
        dots:false,
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
        margin:10,
        nav:true,
        dots:false,
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
});