// document.write("hello")
/* -----------------------object Literal----------------
-----------------------using let----------------
let student = {
    name: "John",
    location: "bbse",
    roll_no: "20",

    showInfo: function(){
        document.write(student.name+"roll number is"+ student.roll_no+"and he is lives in"+student.location);
    }
}
student.showInfo();

--------------------Using Constants --------------------

const student = new Object();
student.name = "John",
student.location="pune",
student.roll_no=20,

student.showInfo = function(){
    document.write(student.name+"roll number is"+ student.roll_no)
}
student.showInfo();

-----------------using function------------------------------------------------
function student(name,roll_no, location){
    this.name=name;
    this.roll_no=roll_no;
    this.location=location;
}
let student1 = new student('Ravi',234,'pune');
let student2 = new student('Raja',235,'ctc');
let student3 = new student('Rabi',236,'bbsr');
console.log(student1.name, student1.roll_no,student1.location)
console.log(student2.name, student2.roll_no,student2.location)
console.log(student3.name, student3.roll_no,student3.location)
*/

// how to use build in object in javascript  

// var d = new Date();
// var str = new String("Javascript");
// document.write(str.charAt());
// document.write(str.indexOf("p"))
// document.write(d.getHours(),":",d.getMinutes(),":",d.getSeconds())
// document.write(d.getFullYear());

/*------------------------FORM VALIDATION----------------*/

function validateForm(){
    var fname=document.getElementById('first').value;
    var lname=document.getElementById('last').value;
    var uname=document.getElementById('username').value;
    var desc = document.getElementById('description').value;
    var pass1 = document.getElementById('password1').value;
    var pass2 = document.getElementById('password2').value;

    if(fname==""||lname==""||uname==""|| desc==""|| pass1=="" ||pass2==""){
        alert("Please enter All requred details.");
        return false;
    }
    if(pass1 == pass2){
        alert("please enter valid password");
        return false;
    }
}