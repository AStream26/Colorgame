
 var a= document.querySelectorAll(".square");
 mode=3;
  var colors =  generatenumber(mode);
 var correct = pickcolor();
 var b = document.querySelector(".body");
 var message = document.querySelector("#result");
 var diplay = document.querySelector("#display");
 display.textContent=correct;
 call(mode);


var hard = document.querySelector(".selected");

var easy = document.querySelector(".easy");

var medium = document.querySelector(".medium");

easy.addEventListener("click",function(){
    console.log("easy clicked");
	mode = 3;

    if(hard.classList.contains("selected")){
        hard.classList.remove("selected");
    }
	else{
        medium.classList.remove("selected");
    }
	easy.classList.add("selected");

	for(var i=mode;i<9;++i)
	a[i].style.backgroundColor="#232323";

	generatetemplate(mode);

});

medium.addEventListener("click",function(){
     console.log("medium clicked");
     mode = 6;
     if(easy.classList.contains("selected")){
        easy.classList.remove("selected");
     }
     else{
         hard.classList.remove("selected");
     }
     medium.classList.add("selected");
     for(var i=mode;i<9;++i)
    a[i].style.backgroundColor="#232323";

    generatetemplate(mode);
    call(mode);

});


hard.addEventListener("click",function(){
     console.log("hard clicked");
	mode = 9;
    if(easy.classList.contains("selected")){
        easy.classList.remove("selected");
     }
     else{
         medium.classList.remove("selected");
     }
	hard.classList.add("selected");
	easy.classList.remove("selected");
     generatetemplate(mode);
     call(mode);

});

var reset = document.querySelector(".reset");
reset.addEventListener("click",function(){
     console.log("reset clicked");
            
            reset.textContent="NEW COLOR";
           generatetemplate(mode);

});

 function generatetemplate(mode){
    console.log("generated");

               colors =generatenumber(mode);
            correct=pickcolor();
            display.textContent=correct;
            for(var i=0;i<colors.length;++i)
                a[i].style.backgroundColor = colors[i];
            document.querySelector("#result").textContent="";
            document.querySelector(".reset").innerHTML="<h4>NEW COLOR</h4>"
}

    function call(mode){
        for(var i=0;i<mode;++i)
        {     console.log("clicked");
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

    }

        


        function pickcolor()
        {
            var a = Math.floor((Math.random()*colors.length));

            return colors[a];


        }
       
       function generatenumber(num)
       {    console.log("number generated");
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

