
var TheChangeScreen = 0;

function start() {
	$(" .ph_menu #P1p").fadeOut()
	$(" .ph_menu #P2p").fadeOut()
	$(" .ph_menu #P3p").fadeOut()
	$(" .ph_menu #P4p").fadeOut()

		$(" .Logo").animate({
     opacity: "0",
    });
	   

$("#menu").click(

function(){
 
 if (test_menu == 0)
 {
	
	$("#ff").rotate({animateTo:0})
	$("li").delay( 280 ).animate({
     height:'10vw',
    });
	$(" .ph_menu #P1p").fadeOut()
	$(" .ph_menu #P2p").fadeOut()
	$(" .ph_menu #P3p").fadeOut()
	$(" .ph_menu #P4p").fadeOut()
	
	test_menu = 1;
 }
 else if (test_menu==1)
	
	{
		$(".ph_menu").animate({
     opacity: "1",
    });
	   
	$("li").animate({
    height:'65vw',
    });
		$("#ff").rotate({animateTo:-90});
	$(" .ph_menu #P1p").delay( 280 ).fadeIn()
	$(" .ph_menu #P2p").delay( 280 ).fadeIn()
	$(" .ph_menu #P3p").delay( 280 ).fadeIn()
	$(" .ph_menu #P4p").delay( 280 ).fadeIn()
	
	test_menu = 0;
	

  }

  });

 $("#clickhere3").click( //event listener for mouse click 
 
  function(){
 
 if (TheChangeScreen==0) //If TheChangeScreen = 0
 {
	   $("#Over_image_change").css("visibility", "visible")
	   
		$("#Over_image_change").stop().animate({
			opacity:"0.8",
			height:"300%",
		});
	    $("#Over_image_box").css("visibility", "visible")
	   $("#Over_image_box").stop().animate({
		   opacity:"1",
			top:"16vw",
			height:"30vw",
		});
		TheChangeScreen = 1; //Set the TheChangeScreen to 1 so on next click, it will run The up fuction.
 }
 });
  
 
 $("#Over_image_change").click( //event listener for mouse click 
  function(){
	if (TheChangeScreen==1) //If TheChangeScreen = 0
	{
  $('iframe').attr('src', $('iframe').attr('src'));
		$("#Over_image_change").stop().animate({
			opacity:"0",
			height:"0px",

		});
		$("#Over_image_box").stop().animate({
			opacity:"-1",
			top:"0vw",
			  height:"0vw",
			
		});
		TheChangeScreen = 0; //Set the TheChangeScreen to 1 so on next click, it will run The up fuction.
	
 }
});	
	
 
	
}
	





window.addEventListener("load", start, false);


