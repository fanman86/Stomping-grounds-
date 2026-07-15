function greetUser(){
   let name=document.getElementById("name").value.trim();
         if(name!==""){
            document.getElementById("AboutButton").style.display="inline-block";
            document.getElementById("name").innerHTML="please enter your name";
         }
         else{document.getElementById("sentence").innerHtml="Hello "+name+"we're glad you're here";
       }
        }
          