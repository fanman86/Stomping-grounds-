function greetUser(){
   let name=document.getElementById("name").value.trim();
         if(name!==""){
            document.getElementById("sentence").innerHTML="Hello "+name+"! we're glad you're here!";
            document.getElementById("continueButton").style.display="none";
           }
   let about=document.getElementById("AboutButton");
      about.style.display="inline-Block"
      about.style.opacity="1"
   let input=document.getElementById("name");
       input.style.opacity="0"
    

         else{
              document.getElementById("sentence").innerHTML="welcome to artizell<br>please enter your name";
             }
            }
   