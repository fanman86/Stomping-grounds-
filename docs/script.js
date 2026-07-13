function greetUser(){
   let name=document.getElementById("name").value.trim();
         If(name!=="");{
            document.getElementById("sentence").innerHTML="Welcome"+name+"We're glad you're here!!";
            document.getElementById("AboutButton").display.style="inline-block";
            document.getElementById("name").display.style="none";
         }
         else{document.getElementById("name").innerHtml=
               "please enter your name"
            }
      }
          