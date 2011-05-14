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

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-23338739-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();