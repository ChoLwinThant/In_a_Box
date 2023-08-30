
function validate(){
    var x=document.contactUs;
    var firstName=x.fname.value;
    if (firstName.length>30){
      alert("The first name field cannot contain more than 30 characters!");
      
    }
    
    var phNum=document.getElementById("phnum").value;
    console.log(phNum);
    for (let i = 0; i < phNum.length; i++) {
        if (isNaN (phNum.charAt(i))){
            alert("Please enter corret phone number.");
            return false;
        }
        else {
          return true;
        }
      }
     
   }

