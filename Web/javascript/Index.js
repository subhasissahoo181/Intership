 console.log('Hello')
/*---------------------------variable-------------------*/ 
//  Variables Can store some information
//We can use that information later .
//We can change that information later. 
// var firstName ="Subhasis";
// console.log(firstName);
// firstName='Chandan';
// console.log(firstName);
/*
Rules for naming variables .
you can not start with number 
ex:- 1value(invalid)
     value1(valid)

     you can use only undersore or dollar symbol
     first_name(valid){Snake Case Writing}
     _firstname(valid)
     first$name(valid)
     $firstname(valid)

     you cannot use spaces 
     first number(invalid)
     convertion
     start with small letter and use camelcase
 */
/*-------------Let---------*/
/*let keyword
declare variable with let keyword
block scope vs function scope(converted )
* /  

const pi=3.14;
// pi=3.25
console.log(pi);
/*-----------String Indexing----------------* /
let firstName = "subhasis";
// s u b h a s i s
console.log(firstName[3]);
//length of string .
//firstname.length
//last Index : length -1. 

/*
trim()  
toUpperCase()
toLowerCase()
Slice

console.log(firstName.length);
firstName=firstName.trim();//"Harshit"
console.log(firstName);
console.log(firstName.length);
firstName=firstName,toUpperCase();
* / 
let firstName2 = "Subhasis";
firstName2 = firstName.toLowerCase();
console.log(firstName2);
// Slice
let newString = firstName.slice(0,4); 
console.log(newString);

// Convert Number to String.
let age = 22;
let firstName3 = 'Subhasis'; 
console.log(typeof age);
age=age+" ";
console.log(typeof(age));
// or
let age2 = 18;
age2 = String(age);
console.log(typeof age2); 

// Convert String to number.
let myStr = +"34";
console.log(typeof myStr);

// or
let age3="18";
age3=Number(age);
console.log(typeof age3)

// String Concatenation
let string1="Subhasis";
let string2="Sahoo";
let fullName=string1 + " " + string2;
console.log(fullName)

// Template String 
let age4 =22;
let firstname = "Subhasis";
  
console.log(typeof null); //BUG 

// BIG Int
let myNumber = BigInt(1234567890228394);
console.log(Number.MAX_SAFE_INTEGER);

// Boolean & Comparision operator
let num1 = 7;
let num2 = "7";

// console.log(num1<num2);
// == vs === 
// console.log(num1===num2);
// != vs !=== 
console.log(num1!==num2); 


// Conditional Statement

//if else 

 let age5 = 17;
 if(age5>18){
    console.log("User can now eligiable for votting");
 }
 else{
    console.log("User can not Eligiable for votting.");
 }

 let num = 14;
 if(num%2===0){
    console.log("Even");
 }
 else{
    console.log("Odd");
 }

// Falsy Value--------------------------------
let firstName4 = "";
if(firstName4){
    console.log(firstName4);
}
else{
    console.log("first Name is Empty");
}
// Ternary Operator
let age6 =3;
let drink = age6 >= 5? "Coffee" : "milk";
console.log(drink)

//and or Operator
let firstName7="Subhasis";
let age7=16;

if(firstName7[0] === "S"){
    console.log("Your name starts with S");
}
if(age7 > 18){
    console.log("You are above 18");
}

if(firstName7[0]==="S" && age7>18){
    console.log("Name start with S and above 18");
}
else{
    console.log("Inside the else block")
}
// Neasted if else 
/*
let  winning number is 19, 
19 your guess is right, 17 too low, 20 too high * /
let winningNumber = 19;
let userGuess = prompt("Guess a number");
// console.log(typeof userGuess, userGuess);

if(userGuess === winningNumber){
    console.log("You are Right");
}
else{
    console.log("You are wrong4");
} 
* /

// Temperature Reader
let tempInDegree = 5;

if(tempInDegree < 0){
    console.log("extremely cold outside");
}
else if(tempInDegree <16){
    console.log("It is cold Outside");
}
else if(tempInDegree <25){
    console.log("Wheater is okay");
}
else if(tempInDegree<35){
    console.log("lets go for swim");
}
else if(tempInDegree<45){
    console.log("Turn on the A/C");
}
else{
    console.log("Too Hot!");
}
console.log("Hello")

// Switch Statement

let day = 20;

switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// While Loop

let i=0;
while(i<=9){
    console.log(i);i++;
}

// Sum of narural number 
// using while loop
/*
let number=100;
// let i=0;
let total =0;
while(i<=100){
    total=total+i;
    i++;
}
console.log(total);


let num = 100;
let total = (num*(num+1))/2;
console.log(total);

// Using for loop
let total =0;
let num = 100;

for (let i=1; i<=num; i++){
    total = total+i;
}
console.log(total);


// ------------------Break- & Continue-----------

for(let i=1; i<=10; i++){
    if(i===4){
        break;
    }
    console.log(i);
}

for(let i=1; i<=10; i++){
    if(i==4){
        continue;
    }
    console.log(i);
}
console.log("Hello")

// Do While Loop

let i =10;
do{
    console.log(i);
    i++;
}while(i<=9);

console.log("Value of i is ",i)


// Array
let fruits=["Aple","Orange","Grapes"];
console.log(fruits)

// Push element in an array
fruits.push("Banana");
console.log(fruits)

// Remove element in an array
fruits.pop("Banana");
console.log(fruits);

let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruits is".popedFruit);

// Unshift
fruits.unshift("Banana");
fruits.unshift("Mango");
console.log(fruits);

// Shift
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed feuit is",removedFruit)

// Primitive Vs Reference data type
// Primitive data type
let num1=6;
let num2=num1;
console.log("Value is num1 is",num1);
console.log("Value is num2 is",num2);
num1++
console.log("After increment number");
console.log("Value is num1 is",num1);
console.log("Value is num2 is",num2);

// Referance Type
let array1 = ["item1","item2"]
let array2 = array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("item3");
console.log("After push element")
console.log("array1",array1);
console.log("array2",array2  



//how to clone array .
//how to concatenate two array.

let array1 = ["item1","item2"];
// let array2 = array1;
// let array2 = array1.slice(0);  //best case
// let array2 = [].concat(array1);

let array2 = [...array1];
array1.push("item3");
console.log(array1===array2);
console.log(array1);
console.log(array2);


// wrt a code arr2 = arr1+ extra array where arr1 will be same.

let array1 = ["item1","item2"];
// let array2 = array1.slice(0).concat(["item3","item4"]);
// let array2 = [].concat(array1,["item3","item4"]);
let newArray = ["item3","item4"];
let array2 = [...array1,...newArray];
array1.push("item3");
console.log(array1===array2);
console.log(array1);
console.log(array2);


// <------------------------------for loop in array---------->

let fruits = ["apple","mango","grapes","banana"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits.length);
// console.log(fruits[fruits.length-2])

let fruits2 = [];
for(let i=0; i<fruits.length; i++){
    // console.log(fruits[i].toUpperCase());
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2)


// --------------constant using array--------------------------------

const pi = 3.141;
pi = 12;
console.log(pi);


const fruits = ["Apple","Banana","Mango"];
fruits.push("Grapes");
console.log(fruits);


// --------------while loop in array--------------------------------

const fruits = ["apple","banana","mango"];

let i = 0;
while(i<fruits.length){
    console.log(fruits[i]);
    i++;
}

// for of loop in array------------------------

// const fruits = ["Apple","Banana","Mango","Fruits"];
// for(let fruit of fruits){
//     console.log(fruit);
// }

let fruit
// for in loop in array------------------------
const fruits = ["Apple","Banana","Mango","Fruits"];
const fruits2=[];
 for(let index of fruits){
     console.log(fruits[index]);
 }  
 */

 //array destructuring-----------------------------
//  const myArray = ["value1","value2","value3","value4"];
//  let myvar1 = myArray[0];
//  let myvar2 = myArray[1];
//  console.log("value of myvar1", myvar1);
//  console.log("value of myvar2", myvar2);

//  let [myvar1,myvar2] = myArray;
// let [myvar1,myvar2, ...myNewArray] = myArray;
//  console.log("value of myvar1", myvar1);
//  console.log("value of myvar2", myvar2);
//  console.log(myNewArray);

// Objects----------------------------------------
//arrays are good but not sufficient  
//for real world data 
//object store key value pairs
//objects don't have index


//how to create object.
// const person={name:"subhasis",
// age:22,
// hobbies:["guitar","sleeping","listening music"]}
// console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(person.hobbies)
// console.log(person["name"])
//how to add keyvalue pair to object.
// person.gender ="male";
// person["gender"]="male";

//difference between dot and braket notation.
// for(let key in person){
//     // console.log(person[key]);
//     console.log(`${key} : ${person[key]}`);
// }
// console.log(typeof(Object.keys(person)));

//Computed property.
// const key1='obj1';
// const key2 ='obj2';

// const value1="myval1";
// const value2= "myval2";

// const obj={
//     obj1 :"myval1",
//     obj2:"myval2",
// }
// const obj ={
//     [key1]:value1,
//     [key2]:value2,
// }
// console.log(obj);

// Spread Operator.-------------------
// const array1=[1,2,3];
// const array2=[5,6,7];

// const newArray=[...array1,...array2]
// console.log(newArray);

//spread operator in objects ----------------
// const obj1 = {
//     key1:"value1",
//     key2:"value2",
// }
// const obj2={
//     key3:"value3",
//     key4:"value4",
// }
// const newObject ={...obj1, ...obj2};
// console.log(newObject);


//object destructuring ----------------
// const band = {
//     bandName:"led zepplin",
//     famousSong:"stairway to heaven",
//     year:1968,
//     anotherFamousSong:"kashmir",
// };
// const bandName= band.bandName;
// const famousSong=band.famousSong;
// console.log(bandName,famousSong);

// const{bandName, famousSong}=band;
// bandName="queen";
// console.log(bandName);

// let { bandName, famousSong, ...restProps } = band;
// console.log(bandName);
// console.log(restProps);

//objects inside array-----------
//very useful in real world applications.

// const users = [
//     {userId: 1,firstName: 'harshit',gender: 'male'},
//     {userId:2,firstName:'mohit',gender:'male'},
//     {userId:3,firstName:'nitish',gender:'male'},
// ]
// // console.log(users);
// const[{firstName:user1firstName},{gender}]=users;
// console.log(firstName);
//function=--------------------------
// function singHappyBirthday(){
//     console.log("happy birthday to you ....");
// }
// // singHappyBirthday();
// function sumThreeNumber(number1, number2,number3){
//     return number1+number2+number3;
// }
// const returnedValue = sumThreeNumbers(2,3,5);
// console.log(returnValue);

// function isEven(number){
//     if(number % 2==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(5));

// console.log('hello')

