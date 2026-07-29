function greetUser(){
   let name=document.getElementById("name").value.trim();
         if(name!==""){
          let welcoming=document.getElementById("sentence");
          welcoming.style.opacity="0";
          setTimeout(function(){
                                welcoming.innerHTML="welcome "+name+"! we're glad you're here!";
                                welcoming.style.opacity="1";
          },500);
         let about=document.getElementById("AboutButton");
         about.style.display="inline-block";
         about.style.opacity="1";
         about.style.transform="translateY(0)";
         let input=document.getElementById("name");
         let contin=document.getElementById("continueButton");
         input.style.opacity="0";
         contin.style.opacity="0";
         setTimeout(function(){
                              document.getElementById("name").style.display="none";
                              document.getElementById("continueButton").style.display="none";
                             },500);}

        else{
              document.getElementById("sentence").innerHTML="welcome to artizell,<br>please enter your name";
             }
            }