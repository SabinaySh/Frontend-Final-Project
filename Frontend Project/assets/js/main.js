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

});