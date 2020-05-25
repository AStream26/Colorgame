
 var a= document.querySelectorAll(".square");


var mode = 6;





var colors =  generatenumber(mode);

        var correct = pickcolor();
        var b = document.querySelector(".body");
        var message = document.querySelector("#result");
        var diplay = document.querySelector("#display");
        display.textContent=correct;


       
        var reset = document.querySelector(".reset");
        reset.addEventListener("click",function(){
        	
            reset.textContent="NEW COLOR";
            document.querySelector("#result").textContent="";
        	colors =generatenumber(mode);
        	correct=pickcolor();
        	display.textContent=correct;
        	for(var i=0;i<colors.length;++i)
        		a[i].style.backgroundColor = colors[i];

        });

        for(var i=0;i<colors.length;++i)
        { 
        	a[i].style.backgroundColor = colors[i];


        	a[i].addEventListener("click",function(){
        	

        	if(this.style.backgroundColor===correct)
        	{
        		for(var j=0;j<colors.length;++j)
        		{    
        			a[j].style.backgroundColor=this.style.backgroundColor;
        			document.querySelector(".win").style.backgroundColor=this.style.backgroundColor;
        			message.innerHTML="<h4>CORRECT</h4>";
        			reset.innerHTML="<h4>play again!!</h4>";


        		}

        	}

        	else{
        		this.style.backgroundColor="#232323";
        		message.innerHTML="<h4>try again!!</h4>"
        	}
        	});

        }


        function pickcolor()
        {
        	var a = Math.floor((Math.random()*colors.length));

        	return colors[a];


        }
       
       function generatenumber(num)
       {
       	 var a = [];
       	 

       	 for(var i=0;i<num;++i)
         {
         	var x = Math.floor((Math.random()*256));
       	 var b =  Math.floor((Math.random()*256));
       	 var c =  Math.floor((Math.random()*256));
       	 	var cc= "rgb("+x+", "+b+", "+c+")";
       	 	a.push(cc); 
       	 }
         return a;


       }


var hard = document.querySelector(".selected");

var easy = document.querySelector(".easy");
easy.addEventListener("click",function(){
	mode = 3;
	hard.classList.remove("selected");
	easy.classList.add("selected");

	for(var i=mode;i<6;++i)
	   a[i].style.backgroundColor="#232323";

	colors =generatenumber(mode);
        	correct=pickcolor();
        	display.textContent=correct;
        	for(var i=0;i<colors.length;++i)
        		a[i].style.backgroundColor = colors[i];
        	document.querySelector("#result").textContent="";



	
});


hard.addEventListener("click",function(){
	mode = 6;
	hard.classList.add("selected");
	easy.classList.remove("selected");


	colors =generatenumber(mode);
        	correct=pickcolor();
        	display.textContent=correct;
        	for(var i=0;i<colors.length;++i)
        		a[i].style.backgroundColor = colors[i];

        	document.querySelector("#result").textContent="";


})
