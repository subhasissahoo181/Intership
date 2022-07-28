// Function in javaScript-------------------------

// function singHappybirthday(){
//     console.log("Happy Birthday To You ......");
// }

// function twoPlusFour(){
//     console.log(2+4);
// }
// twoPlusFour();
// singHappybirthday(10);
// singHappybirthday();

// function sumTwoNumbers(){
//     return 2+4;
// }
// const returnedValue = sumTwoNumbers();
// console.log(returnedValue);

// function sumTwoNumbers(number1, number2){
//     return number1 + number2;
// }
// const returnedValue = sumTwoNumbers(4,5);
// console.log(returnedValue);

// const singHappyBirthday = function(){
//     console.log("Happy Birthday To You ........")
// }
// singHappyBirthday();

// Odd & Even.........................
//input: 1number
//output: true, false.

// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(4));

// function firstChar(anyString){
//     return anyString[0];
// }
// console.log(firstChar("zbc"));

//function 
//input : array, target(number)
//output: index of target if target present in array 
// [1,5,9,27,6],9

// function findTarget(array, target){
//     for(let i=0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray=[1,3,8,90]
// const ans = findTarget(myArray, 8);
// console.log(ans);


// arrow function---------- 

// const singhappyBirthday = function(){
//     console.log("happy birthday to you ...");
// }

// const singhappyBirthday3 = () =>{
//     console.log("happy birthday to you")
// }
// singhappyBirthday3();

//Function inside function...

function app = () =>{
    const myFunc = () =>{
        console.log("Hello from myFunction")
    }
}
