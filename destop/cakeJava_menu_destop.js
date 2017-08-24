
var TheChangeScreen = 0;
  
$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $(".menus").fadeIn();

     }
    else
     {
      $(".menus").finish().fadeOut();
	  
     }
 });

function start() {







  
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
			top:"8vw",
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
	
  



  $("#Social1 img").stop().animate({
     top:'9vw',
    });
      
buttonstart.style.cursor = "pointer";

	  console.log("Start");

	  
 $("#P1").hover(function (){
 

   $("#P1").stop().animate({
       backgroundColor: '#1aa3ff',
    });
	$("#display").stop().animate({
       backgroundColor: '#1aa3ff',
	      height:"3.6vw",
    });

},
	function (){
 
   
  $("#P1").stop().animate({
      backgroundColor: 'white',
    });
$("#display").stop().animate({
       backgroundColor: '#1aa3ff',
	   height:"0vw",
    });
	}
	
);

 $("#P2").hover(function (){
 

   $("#P2").stop().animate({
       backgroundColor: '#1aa3ff',
    });
	$("#display2").stop().animate({
       backgroundColor: '#1aa3ff',
	    height:"3.6vw",
    });

},
	function (){
 
   
  $("#P2").stop().animate({
      backgroundColor: 'white',
    });
$("#display2").stop().animate({
       backgroundColor: '#1aa3ff',
	   height:"0vw",
    });
	}
);

 $("#P3").hover(function (){
 

   $("#P3").stop().animate({
       backgroundColor: '#1aa3ff',
    });
	$("#display3").stop().animate({
       backgroundColor: '#1aa3ff',
	    height:"3.6vw",
    });

},
	function (){
 
   
  $("#P3").stop().animate({
      backgroundColor: 'white',
    });
$("#display3").stop().animate({
       backgroundColor: '#1aa3ff',
	   height:"0vw",
    });
	}
);

 $("#P4").hover(function (){
 

   $("#P4").stop().animate({
       backgroundColor: '#1aa3ff',
    });
	$("#display4").stop().animate({
       backgroundColor: '#1aa3ff',
	      height:"3.6vw",
    });

},
	function (){
 
   
  $("#P4").stop().animate({
      backgroundColor: 'white',
    });
$("#display4").stop().animate({
       backgroundColor: '#1aa3ff',
	   height:"0vw",
    });
	}
);
	
	
	
	 $("#AnAspieI").hover(function (){
 
	
   $("#AnAspieI").stop().animate({
       opacity:"0.2",
    });
	$("#clickhere").stop().animate({
     opacity:"1",
    });

},
	function (){
 
   
  $("#AnAspieI").stop().animate({
     opacity:"0.5",
    });
$("#clickhere").stop().animate({
     opacity:"0.2",
	  backgroundColor:"transparent",
    });
	}
);
	
	
		 $("#clickhere").hover(function (){
 

	$("#clickhere").stop().animate({
     opacity:"1",
	 backgroundColor:"#1aa3ff",
    });

},
	function (){
$("#clickhere").stop().animate({
     opacity:"0.2",	 
	 backgroundColor:"transparent",
    });
});

	
	
	
	
	 $("#AnDarkplace").hover(function (){
 
	
   $("#AnDarkplace").stop().animate({
       opacity:"0.2",
    });
	$("#clickhere2").stop().animate({
     opacity:"1",
    });

},
	function (){
 
   
  $("#AnDarkplace").stop().animate({
     opacity:"0.5",
    });
$("#clickhere2").stop().animate({
     opacity:"0.2",
	  backgroundColor:"transparent",
    });
	}
);
	
	
		 $("#clickhere2").hover(function (){
 

	$("#clickhere2").stop().animate({
     opacity:"1",
	 backgroundColor:"#1aa3ff",
    });

},
	function (){
$("#clickhere2").stop().animate({
     opacity:"0.2",	 
	 backgroundColor:"transparent",
    });
	});
	
	
	
	
	
	
	 $("#DarkAnimation_2017").hover(function (){
 
	
   $("#DarkAnimation_2017").stop().animate({
       opacity:"0.2",
    });
	$("#clickhere3").stop().animate({
     opacity:"1",
    });

},
	function (){
 
   
  $("#DarkAnimation_2017").stop().animate({
     opacity:"0.5",
    });
$("#clickhere3").stop().animate({
     opacity:"0.2",
	  backgroundColor:"transparent",
    });
	}
);
	
	
		 $("#clickhere3").hover(function (){
 

	$("#clickhere3").stop().animate({
     opacity:"1",
	 backgroundColor:"#1aa3ff",
    });

},
	function (){
$("#clickhere3").stop().animate({
     opacity:"0.2",	 
	 backgroundColor:"transparent",
    });
	});
}
	
	






window.addEventListener("load", start, false);
$(".menus").stop().fadeOut();
$(".Logo img").stop().fadeOut();

