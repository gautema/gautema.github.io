$(document).ready(function () {
    $(".header").click(function () {
        var height, width;
        if (window.innerWidth >= 680) {
            height = 480;
            width = 640;
        } else {
            height = 240;
            width = 320;
        }
        if ($(this).height() == height) {
            $(this).animate({
                height: (height - 60) + "px"
            });
            $("#text_frame").animate({
                height: "60"
            });
            $("#text").animate({
                opacity: "1"
            });
        }
        else {
            $(this).animate({
                height: (height) + "px"
            });
            $("#text_frame").animate({
                height: "0"
            });
            $("#text").animate({
                opacity: "0"
            });
        }

    });
});