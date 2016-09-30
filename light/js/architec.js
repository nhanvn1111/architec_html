/*
	Template Name: ARCHITEC
	Template URI: http://themeforest.net/user/designare
	Author: DesignareThemes
*/

$(document).ready(function() {
	$('#twitter a').hover(
	function(){$(this).stop().animate({width:'17px'}, 400);
		$("#twitter_hover", this).stop().animate({width:'25px', opacity:'0.8'}, 400);
			}, function() {$(this).stop().animate({width:'17px'}, 400);
				$("#twitter_hover", this).stop().animate({width:'17px', opacity:'0'}, 400);
			})
			
	
	/* FADE LABEL INPUTS */
	$('.maila').dwFadingLinks({
		color: '#7E9046',
		duration: 700
	});
	$('.mail, .name, .email, .message').dwFadingLinks({
		color: '#fff',
		duration: 700
	});
	$('.text').dwFadingLinks({
		color: '#8f8f8f',
		duration: 700
	});
	
	/* FADE LINKS MENU */
	$('.lfade').dwFadingLinks({
		color: '#fff',
		duration: 400
	});
	
	/* FADE SOCIAL */
	$('.face').dwFadingLinks({
		color: '#6281c0',
		duration: 400
	});
	$('.tw').dwFadingLinks({
		color: '#2dceff',
		duration: 400
	});
	/* FADE PROJECTS EFFECT */
	$('.leffect').dwFadingLinks({
		color: '#E8F2F6',
		duration: 400
	});
	/* FADE PROJECTS EFFECT */
	$('.designare').dwFadingLinks({
		color: '#8d8d8d',
		duration: 400
	});
		
	/* FADE IMAGES */
	$('.button, .facebook, .twitter, .mapimg, .workimg, .btnseework, .mapimg, .backthumbs, .moreinfo, .css_next, .css_prev, .css_prev_nav, .css_next_nav, .prev, .next, .seeproject, .lighton').append('<span class="hover"></span>').each(function () {
		var $span = $('> span.hover', this).css('opacity', 0);
	 	$(this).hover(function () {
	    $span.stop().fadeTo(500, 1);
	 	}, function () {
	   		$span.stop().fadeTo(500, 0);
	  	});
	});
		
	/* OVERLAY GOOGLE MAPS */
	$("a[rel^='prettyPhoto']").prettyPhoto({animationSpeed:'fast',theme:'dark_square',slideshow:5000});
	$("#map a[rel^='prettyPhoto']:first").prettyPhoto({
		custom_markup: '<div id="map_canvas" style="width:1000px; height:500px"></div>',
		changepicturecallback: function(){ initialize(); }
	});
	
	/* ASSIGN DEFAULT VALUES */
	$(document).ready(function() {
		$("#name").DefaultValue("Name");
		$("#email").DefaultValue("Email");
		$("#message").DefaultValue("How can we help you?");
		$("#search").DefaultValue("Search Anything");
	});

	/* CHANGE BETWEEN NEWS */
	$(document).ready(function(){
		$('ul.links li').click(function() {

		//Set "selected" the LI clicked
		$('ul.links li').each(function(){
		$(this).removeClass("newsld");
		});
		$(this).addClass("newsld");
			  
		//Hide all news content
		$('.newscontent div').each(function(){
		$(this).css("display", "none");
		});
			  
		//Show only the news content that as been clicked with fadein effect
		var newsid = $(this).attr('id');
		//$("#div"+newsid).css("display", "");
		$("#div"+newsid).fadeToggle("slow", "linear");
		});
	});
	
	/*
$(function() {		
		// initialize scrollable with mousewheel support
		$(".scrollable").scrollable({ vertical: true, mousewheel: true });	
	});
*/
	
	/* FUNCTION FOR SHOW MORE INFO AND GO BACK ON PROJECTS PAGE .Designare.*/
	$(".openproject").css("display", "none");
	$("#projectmoreinfo").css("display", "none");
			
			$('.openproject div.project_content').each(function(){
			  $(this).css("display", "none");
			});
		
		
			$('ul.tj_gallery li, a.project_0').click(function() {
			  var totalproject = 0;	
			  
			  //Hide projects thumbnails
			  $('.gallery_projects').css("display", "none");
			  
			  //Hide all projects info content
			  $('.openproject div.project_content').each(function(){
			  	$(this).css("display", "none");
			  	totalproject++;
			  });
			  
			  //Show only the project content that as been clicked with fadein effect
			  if($(this).hasClass("project_0"))
			  	var projectid = "project_1";
			  else
			  	var projectid = $(this).attr('id');
			  var id = projectid.split('_');
			  var prevproj = parseInt(id[1])-1;
			  var nextproj = parseInt(id[1])+1;
			 
			 	//Prepare the arrows to change to previous or next project
			 	if(prevproj <= 0){
			 		$('span.css_prev').css('opacity', '.3');
			 		$('.proj_prev').css('display', 'none');
			 		$('span.css_prev').css('display', '');
			 	}
			 	else{
			 		$('span.css_prev').css('opacity', '1');
			 		$('.proj_prev').css('display', '');
			 		$('span.css_prev').css('display', 'none');
			 	}		  	

			  if(nextproj == (totalproject + 1)){
			 		$('span.css_next').css('opacity', '.3');
			 		$('.proj_next').css('display', 'none');
			 		$('span.css_next').css('display', '');
			  }
			 	else{
			 		$('span.css_next').css('opacity', '1');
			 		$('.proj_next').css('display', '');
			 		$('span.css_next').css('display', 'none');
			 	}
			  
			  $(".proj_prev").attr("id", "project_"+prevproj);
			  $(".proj_next").attr("id", "project_"+nextproj);
			  
			  //Open project
			  $("#divnav"+projectid).fadeToggle("slow", "linear");
			  $("#projectmoreinfo").css("display", "");
			  $("#proj_navigation").css("display", "");
			  $(".openproject").css("display", "");
			  
			});
			
			$('.backthumbs').click(function() {
			
			  $("#proj_navigation").css("display", "none");
			  $(".openproject").css("display", "none");
			  $("#projectmoreinfo").css("display", "none");
			  
			  $('.gallery_projects').fadeToggle("slow", "linear");
			  
			});
			
						  
			  $('.projectnav a.css_prev, .projectnav a.css_next').click(function() {
			  	var totalproject=0;
			  	
			  	//Hide all projects info content
				  $('.openproject div.project_content').each(function(){
				  	$(this).css("display", "none");
				  	totalproject++;
				  });
				  
				  var projectid = $(this).attr('id');
				  var id = projectid.split('_');
				  var prevproj = parseInt(id[1])-1;
			  	var nextproj = parseInt(id[1])+1;
				  
			 	if(prevproj <= 0){
			 		$('span.css_prev').css('opacity', '.3');
			 		$('.proj_prev').css('display', 'none');
			 		$('span.css_prev').css('display', '');
			 	}
			 	else{
			 		$('span.css_prev').css('opacity', '1');
			 		$('.proj_prev').css('display', '');
			 		$('span.css_prev').css('display', 'none');
			 	}		  	

			  if(nextproj == (totalproject + 1)){
			 		$('span.css_next').css('opacity', '.3');
			 		$('.proj_next').css('display', 'none');
			 		$('span.css_next').css('display', '');
			  }
			 	else{
			 		$('span.css_next').css('opacity', '1');
			 		$('.proj_next').css('display', '');
			 		$('span.css_next').css('display', 'none');
			 	}
	 	
		 		$(".proj_prev").attr("id", "project_"+prevproj);
			  $(".proj_next").attr("id", "project_"+nextproj);
			  
			  //Open project
			  $("#divnav"+projectid).fadeToggle("slow", "linear");
			  $("#proj_navigation").css("display", "");
			  $(".openproject").css("display", "");
			  $("#projectmoreinfo").css("display", "");

			  });
			  
			  $('.projects ul li').hover(function(){
					$(".descript", this).stop().animate({top:'140px'},{queue:false,duration:160});
				}, function() {
					$(".descript", this).stop().animate({top:'187px'},{queue:false,duration:160});
				});	
	/*END MORE INFO PROJECTS*/
	
	/* START NIVO SLIDER */
	$(window).load(function() {
		$('.openproject div.nivoSlider').each(function(){
			  	var oid = $(this).attr('id');
			  	$('#'+oid).nivoSlider();
			  });
        
    });
    /*END NIVO SLIDER*/
    
    

});