$(document).ready(function() 
{
	$(".header").click(function(){
		if($(this).height() == 480)
		{
			$(this).animate({
				height:"440px"
			});
			$("#content").animate({
				height:"58",
				opacity: 1
			});
		}
		else
		{
			$(this).animate({
				height:"480"
			});
			$("#content").animate({
				height:"20",
				opacity: 0
			});
		}
		
	    });
});