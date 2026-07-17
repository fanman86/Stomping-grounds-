function greetUser(){
   let name=document.getElementById("name").value.trim();
         if(name!==""){
            document.getElementById("AboutButton").style.display="inline-block";
            document.getElementById("name").style.display="none";
            document.getElementById("sentence").innerHTML="Hello "+name+"! we're glad you're here!"
            document.getElementById("continueButton").style.display="none"
         }
         else{
              document.getElementById("sentence").innerHTML="welcome to artizell/nplease enter name";
            
       }
        }
          