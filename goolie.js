	var angle = Math.floor(Math.random() * 10);

	var speed_left = Math.floor(Math.random() * 10);
	var speed_top  = Math.floor(Math.random() * 10);
	
	if( speed_top > 5 )
	{
		speed_top -= 4;
	}
	if( speed_left > 5 )
	{
		speed_left -= 4;
	}
	speed_top = 1;
	speed_left = 1;

	if( angle > 0.5 )
	{
		speed_top = (-1) * speed_top;		
	}
	var tom_dick_harry = Math.floor(Math.random() * 10);	

	if( tom_dick_harry > 0.5 )
	{
		// speed_left = (-1) * speed_left;
	}

	var flag = 0;
	var inc = 0;

	function start_ball()
	{
		var timerId = setInterval( 

			function ran() {

		    var one = document.getElementById("ball");
		    
		    one.style.top  = one.getBoundingClientRect().top + speed_top+"px" ;
		    one.style.left = one.getBoundingClientRect().left+ speed_left+"px" ;

		    var boundary = document.getElementById("ball").getBoundingClientRect();
			var play = document.getElementById("play_area").getBoundingClientRect();
			var leftS = document.getElementById("left").getBoundingClientRect();
			var rightS = document.getElementById("right").getBoundingClientRect();


				{
					if(boundary.left < play.left){
						alert("over");
						location.reload();
					}
					if(boundary.right > play.right ){
						alert("over");
						location.reload();
					}
					if(boundary.left < leftS.right && boundary.top+20>leftS.top && leftS.bottom>boundary.bottom-20 ){
						speed_left = (-1) * speed_left ;
					}
					if(boundary.right > rightS.left && boundary.top+20>rightS.top && rightS.bottom>boundary.bottom-20 ){
						speed_left = (-1) * speed_left ;
					}	
					if(boundary.top < play.top){
						speed_top = (-1) * speed_top ;
					}
					if(boundary.bottom > play.bottom){
						speed_top = (-1) * speed_top ;
					}
				}

		} , 20 );
	}
		
	setInterval( 

		function()
		{
		    	if( speed_top > 0 )
					{speed_top += .5;}
				else
					{speed_top -= .5;}
				
				if( speed_left > 0 )
					{speed_left += .5;}
				else
					{speed_left -= .5;}

				flag=0;
		}

		, 2000 );
	
	function myFunction(e) {

		var e = e || window.event;

	    var one1 = document.getElementById("left");
	    var one2 = document.getElementById("right");

	    var play = document.getElementById("play_area").getBoundingClientRect();
		var leftS = document.getElementById("left").getBoundingClientRect();
		var rightS = document.getElementById("right").getBoundingClientRect();


	    if (e.keyCode == '87' && leftS.top>play.top ) {
	        document.getElementById("left").style.top = one1.getBoundingClientRect().top+(-10)+"px" ;
	    }
	    else if (e.keyCode == '83' && leftS.bottom<play.bottom  ) {
	        document.getElementById("left").style.top = one1.getBoundingClientRect().top+10+"px";
	    }
	    else if (e.keyCode == '38' && rightS.top>play.top ) {
	       document.getElementById("right").style.top = one2.getBoundingClientRect().top-10+"px"  ;
	    }
	    else if (e.keyCode == '40' && rightS.bottom<play.bottom  ) {
	       document.getElementById("right").style.top = one2.getBoundingClientRect().top+10+"px"  ;
	    }
	    else
	    {
	    	start_ball();
	    }
	
	}