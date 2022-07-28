// Javascript from validation-----------
// function validateform(){
//     var name=document.myform.name.value;
//     var password=document.myform.password.value;
//     if(name==null||name==""){
//         alert("Name can't be blank");
//         return false;
//     }
//     else if(password.length<6){
//         alert("Password must be at least 8 characters long.");
//         return false;
//     }
// }
// ------------------------------
// Javascript Retype Password Validation--- 
// function matchpass(){
//     var firstpassword=document.f1.password.value; 
//     var secondpassword=document.f1.password2.value;

//     if(firstpassword==secondpassword){
//         return true;
//     }
//     else{
//         alert("password must be same!");
//         return false;
//     }
// }
// ----------------------------------------------------------------
// Javascript Number Validation =========
// function validate(){
//     var num=document.myform.num.value;
//     if(isNaN(num)){
//         document.getElementById('numloc').innerHTML="Enter Numeric value only";
//         return false;
//     }
//     else{
//         return true;
//     }
// }

// -------------------------------------------
// javascript validation with image.
// function validate(){
//     var name=document.f1.name.value;
//     var password=document.f1.password.value;
//     var status=false;

//     if(name.length<1){
//         document.getElementById("nameloc").innerHTML="<img src=''/>Please enter your name"; status=false;
//     }
//     else{
//         document.getElementById("nameloc").innerHTML="<img src=''/>"; status=true;
//     }
//     if(password.length<6){
//         document.getElementById("passwordloc").innerHTML="< img src='' />Password must be at least 6 char long"; status=false;
//     }
//     else{
//         document.getElementById("passwordloc").innerHTML="<img src='' />";
//     }
//     return status;
// }



// function validate(){  
//     var name=document.f1.name.value;  
//     var passwordlength=document.f1.password.value.length;  
//     var status=false;  
//     if(name==""){  
//     document.getElementById("namelocation").innerHTML=  
//     " <img src='http://www.javatpoint.com/javascriptpages/images/unchecked.gif'/> Please enter your name";  
//     status=false;
//     }else{  
//     document.getElementById("namelocation").innerHTML=" <img src='http://www.javatpoint.com/javascriptpages/images/checked.gif'/>";  
//     status=true;
//     }  
      
//     if(passwordlength<6){  
//     document.getElementById("passwordlocation").innerHTML=  
//     " <img src='http://www.javatpoint.com/javascriptpages/images/unchecked.gif'/> Password must be greater than 6";  
//     status=false; 
//     }else{  
//     document.getElementById("passwordlocation").innerHTML=" <img src='http://www.javatpoint.com/javascriptpages/images/checked.gif'/>";  
//     }  
      
//     return status;  
//     }  


// Javascript email validation........
function validateemail(){
    var x= document.myform.email.value; 
    var atposition=x.indexOf("@");
    var dotposition=x.lasrIndexOf(".");
    if(atposition<1 || dotposition<atposition+2>=x.length){
        alert("Please enter a valid e-mail address. \n atposition:"+atposition+"\n dotposition:"+dotposition);
        return false;
    }
}