
var buttonstart = document.getElementById("Logo"); 
var button1state = "up";

var Home_ID = document.getElementById("P1"); 
var About_ID = document.getElementById("P2"); 
var Images_ID = document.getElementById("P3"); 
var contact_ID = document.getElementById("P4"); 
var test_menu = 1;





function start() {

 $(".one #ho").hover(function (){
 

   $(".one #ho").stop().animate({
       color:'black',
    });

},
	function (){
 
   
 $(".one #ho").stop().animate({
       color:'#c2c2c4',
    });

	}
);


 $(".one #ab").hover(function (){
 

   $(".one #ab").stop().animate({
       color:'black',
    });

},
	function (){
 
   
 $(".one #ab").stop().animate({
       color:'#c2c2c4',
    });

	}
);

 $(".one #im").hover(function (){
 

   $(".one #im").stop().animate({
       color:'black',
    });

},
	function (){
 
   
 $(".one #im").stop().animate({
       color:'#c2c2c4',
    });

	}
);
 $(".one #co").hover(function (){
 

   $(".one #co").stop().animate({
       color:'black',
    });

},
	function (){
 
   
 $(".one #co").stop().animate({
       color:'#c2c2c4',
    });

	}
);


 $("#Page_Box1").hover(function (){
 

   $("#Page_Box1").stop().animate({
       backgroundColor:'#1aa3ff',
    });

},
	function (){
 
   
 $("#Page_Box1").stop().animate({
       backgroundColor:'#f6f6f6',
    });

	}
);

 $("#Page_Box2").hover(function (){
 

   $("#Page_Box2").stop().animate({
       backgroundColor:'#1aa3ff',
    });

},
	function (){
 
   
 $("#Page_Box2").stop().animate({
       backgroundColor:'#f6f6f6',
    });

	}
);


 $("#Page_Box3").hover(function (){
 

   $("#Page_Box3").stop().animate({
       backgroundColor:'#1aa3ff',
    });

},
	function (){
 
   
 $("#Page_Box3").stop().animate({
       backgroundColor:'#f6f6f6',
    });

	}
);

  $("#Somedia_footer4 img").hover(function (){
 

   $("#Somedia_footer4 img").stop().animate({
       top:'-0.3vw',
	 backgroundColor:'#1aa3ff',
	     opacity:"0.4",

    });

},
	function (){
 
   
  $("#Somedia_footer4 img").stop().animate({
        top:'0vw',
		   opacity:"1",

    });
	}
);
  $("#Somedia_footer img").hover(function (){
 

   $("#Somedia_footer img").stop().animate({
       top:'-0.3vw',
	 backgroundColor:'#1aa3ff',
	     opacity:"0.4",

    });

},
	function (){
 
   
  $("#Somedia_footer img").stop().animate({
        top:'0vw',
		   opacity:"1",

    });
	}
);

 $("#Somedia_footer2 img").hover(function (){
 

   $("#Somedia_footer2 img").stop().animate({
       top:'-0.3vw',
	     opacity:"0.4",
    });

},
	function (){
 
   
  $("#Somedia_footer2 img").stop().animate({
        top:'0vw',
			   opacity:"1",
    });
	}
);

 $("#Somedia_footer3 img").hover(function (){
 

   $("#Somedia_footer3 img").stop().animate({
       top:'-0.3vw',
	   	   opacity:"0.4",
    });

},
	function (){
 
  $("#Somedia_footer3 img").stop().animate({
        top:'0vw',
			   opacity:"1",
    });
	}
);
	
}
	

window.addEventListener("load", start, false);
$(".menus").stop().fadeOut();
$(".Logo img").stop().fadeOut();

