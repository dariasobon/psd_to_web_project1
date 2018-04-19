$(document).ready(function() {

    let scrollTop = $(".scrollTop");

    $(window).scroll(function() {

        let topPos = $(this).scrollTop();

        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");
        } else {
            $(scrollTop).css("opacity", "0");
        }

    });

    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    let link1 = $('#about').position();
    let link2 = $('#services').position();
    let link3 = $('#prices').position();
    let link4 = $('#contact').position();

    $('.about').click(function() {
        $('body, html').animate({
            scrollTop: link1.top
        }, 400);
        return false;
    });

    $('.services').click(function() {
        $('body, html').animate({
            scrollTop: link2.top
        }, 500);
        return false;
    });
    $('.pricess').click(function() {
        $('body, html').animate({
            scrollTop: link3.top
        }, 800);
        return false;
    });
    $('.contact').click(function() {
        $('body, html').animate({
            scrollTop: link4.top
        }, 1000);
        return false;
    });

    //show more - show slowly 

    $(".showslow").click(function() {
        $("#myDIV").toggle('slow');
    });



});