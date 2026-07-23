function greetUser(){
   let name=document.getElementById("name").value.trim();
         if(name!==""){
          let welcoming=document.getElementById("sentence");
          setTimeout(function(){
                                welcoming.innerHTML="welcome "+"name "+"we're glad you're here!";
                                welcoming.style.opacity="1";
          },500);
         let proceed=document.getElementById("continueButton");
         let about=document.getElementById("AboutButton");
         let input=document.getElementById("name");
         about.style.display="inline-block";
         about.style.opacity="1";
         about.style.display="translateY(0)";
           }
       
    

         else{
              document.getElementById("sentence").innerHTML="welcome to artizell<br>please enter your name";
             }
            }