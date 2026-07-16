function greetUser(){
   let name=document.getElementById("name").value.trim();
         if(name!==""){
            document.getElementById("AboutButton").style.display="inline-block";
            document.getElementById("name").innerHTML="none";
            document.getElementById("sentence").innerHTML="Hello "+name+"! we're glad you're here!"
            document.getElementById("continueButton").style.display="block"
         }
         else{
              document.getElementById("name").innerHTML="please enter name";
              document.getElementById("AboutButton").style.display="block"
       }
        }
          