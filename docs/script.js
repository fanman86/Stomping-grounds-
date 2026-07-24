function greetUser(){
   let name=document.getElementById("name").value.trim();
         if(name!==""){
          let welcoming=document.getElementById("sentence"). style.opacity="0";
          setTimeout(function(){
                                welcoming.innerHTML="welcome "+name, +"we're glad you're here!";
                                welcoming.style.opacity="1";
          },500);
         let about=document.getElementById("AboutButton");
         about.style.display="inline-block";
         about.style.opacity="1";
         about.style.display="translateY(0)";
         let input=document.getElementById("name");
         let contin=coninueButton.getElementById("continueButton");
         input.style.display="0";
         contin.style.opacity="0";
         setTimeout(function(){
                              document.getElementById("name").input.opacity="0";
                              document.getElementById("continueButton").input.opacity="0";
                             },500);}

        else{
              document.getElementById("sentence").innerHTML="welcome to artizell<br>please enter your name";
             }
            }