// console.log("Hello")

var x = 10;
var y = 20;
// var z = x+y;
// console.log(x,y,z);
// document.write("The sum is ",z);
// [x, y] = [y, x];
// document.write(x,y)
y=y-x;
x= x+y;


console.log(x);
console.log(y);

var x = 5
/* Type casting :-To convert one data type to another data type.

// var num1 = prompt("Enter 1st number:");
// var num2 = prompt("Enter 2st number:");


var num1 = parseInt(prompt("Enter 1st number:"));
var num2 = parseInt(prompt("Enter 2st number:"));

var num1 = parseFloat(prompt("Enter 1st number:"));
var num2 = parsefloat(prompt("Enter 2st number:"));
var sum = num1+num2;
document.write("Sum is :",sum);
 
// If else
var i=100;
if(i == 10)
document.write("i is 10");
else if(i == 15)
document.write("i is 15");
else if(i == 20)
document.write("i is 20");
else
document.write("i is not present");

// var i;
// Assignment-Day-5
var num = prompt("Enter 1st number:");

 if(num%2===0){
    // console.log("Even");
    document.write(" The number is Even")
 }
 else{
    // console.log("Odd");
    document.write(" The number is Odd")
 }
 

//  wrt a program to write a table
// only by for loop table of 5
var num = prompt("Enter any number:");
for(i=1; i<=10;i++){
    if(num>0){
        // console.log("Even");
        // document.write(" " ,"num*i)
        document.write(" " ,num*i)
     }
}* /

// write the program to check in range 1 to 10 & find the sum of odd number in between them

// var i=10;
var num = prompt("Enter any number:");
for(i=1; i<=10;i++){
    if(num%2===0){
        
        document.write(" The number is Even")
    }
    else{
        document.write(" The number is Odd")
        document.write(" The number is Odd",num+i)
     }
}
let num = 100;
let total = (num*(num+1))/2;
console.log(total);
document.write(" The number is Odd",total)
*/

var num = prompt("Enter any number:");

if(n == 0)
document.write(0)
else if(n == 1)
document.write(1)
else
document.write( fibonacci(n - 1) + fibonacci(n - 2));