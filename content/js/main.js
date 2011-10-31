var js = $(".header").click(function () {
        if ($(this).height() == 480) {
            $(this).animate({
                height: "420px"
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
                height: "480"
            });
            $("#text_frame").animate({
                height: "0"
            });
            $("#text").animate({
                opacity: "0"
            });
        }

    });

var jsSmall = 	$(".header").click(function(){
		if($(this).height() == 240)
		{
			$(this).animate({
				height:"180px"
			});
			$("#text_frame").animate({
				height:"60"
			});
			$("#text").animate({
				opacity:"1"
			});
		}
		else
		{
			$(this).animate({
				height:"240"
			});
			$("#text_frame").animate({
				height:"0"
			});
			$("#text").animate({
				opacity:"0"
			});
		}

});

var compareWidth;
var detector;

$(document).ready(function () {
    detector = jQuery('#changeTarget');
    compareWidth = detector.width();

    $(window).resize(function () {
        if (detector.width() != compareWidth) {
            compareWidth = detector.width();

            if (compareWidth >= 480) {
                js();
            } else {
                jssmall();
            }
        }
    });
});