// JavaScript Document
	$(function(){
				$(".main01 div").hide();
    	$(".main01 p").click(
			function(){
				$(this).fadeOut(1000);
				$(this).siblings(".main01 div").fadeIn(1500)
				}
		)
    	$(".main01 div").click(
			function(){
				$(this).fadeOut(1000);
				$(this).siblings(".main01 p").fadeIn(1500)
				}
		)

		})
    



