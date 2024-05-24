// function() is a calling Wheras function is reference only
function sayMyName(){
    console.log("A");
    console.log("Y");
    console.log("U")
    console.log("S");
console.log("H");
}
 sayMyName; // it is only reference that tells function is there
 sayMyName(); // It is a proper implementation of function

 function AdditionTwoNumbers(num1,num2){
    console.log(num1 + num2);
 }
 AdditionTwoNumbers(4,6);
 const res= AdditionTwoNumbers(5,6);
console.log('Result of the function is ${res}');

