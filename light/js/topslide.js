$(document).ready(function() {
	var menuIndex = -1;
	
	// Expand Panel
	$("#open").click(function(){
		$('#menu ul li a').each(function(index){
			if($(this).hasClass("selected"))
				menuIndex = index;
			$(this).removeClass("selected");
		});
		
		$("#closec").addClass("selected");
	
		$("div#topslide").slideDown("slow");
	
	});	
	
	// Collapse Panel
	$("#close").click(function(){
		//alert(menuIndex);
		$("div#topslide").slideUp("slow");
		$('#menu ul li a').each(function(index){
			if(index == menuIndex)
				$(this).addClass("selected");
		});
		menuIndex = -1;
		$("#closec").removeClass("selected");	
	});		
	
	// Switch buttons from "open" to "close" on click
	$("#toggle a, #togglec a").click(function () {
		$("#toggle a, #togglec a").toggle();
	});
	
	// Expand Panel
	$("#openc").click(function(){
		
		$('#menu ul li a').each(function(index){
			if($(this).hasClass("selected"))
				menuIndex = index;
			$(this).removeClass("selected");
		});
		
		$("#closec").addClass("selected");
	
		$("div#topslide").slideDown("slow");
		
	});
	
	// Collapse Panel
	$("#closec").click(function(){
		$('#menu ul li a').each(function(index){
			if(index == menuIndex)
				$(this).addClass("selected");
		});
		menuIndex = -1;
		$("#closec").removeClass("selected");
		$("div#topslide").slideUp("slow");	
	});

	
	
});