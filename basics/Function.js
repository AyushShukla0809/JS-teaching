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


 function AddTwo(n1,n2){
   console.log("Sum before return will print ");
   // let result = n1+n2;
   // return result; // once funnction returnsomething it will not execute further statements
   return n1 + n2;
   // console.log("Sum of numbers after after return will not printed") // It will not get printed after return.
 }


 const Ans =  AddTwo(5,2);
 console.log("Return value Output is like " , Ans);
 AdditionTwoNumbers(4,6)
 const res= AdditionTwoNumbers(5,6);
 console.log("first");
 console.log(res); // res do not store any returned value so it is UNDEFINED here
 console.log("second");
//  console.log("2",res);
// console.log('Result of the function is ${res}');
// function LoginMessage(UserName="DefaultName") // It will print in case of undefined value means when no value is passed inside function
function LoginMessage(UserName){
  // To counter undefined values when no arguments is passed
  // if(!UserName){} // It is same as below condition
  // As undefined is taken as FALSE and !undefined will be taken as TRUE
  if(UserName === undefined){
    console.log("Enter the message in function")
    return; // it is used to control further statements 
  }
  // if above block is satisfied then below statemnt will not get executed.
return `${UserName} is recently logged in`;
}
console.log(LoginMessage("Hitesh"));
console.log(LoginMessage()); // will print UNDEFINED if no value is passed
// let le = LoginMessage("Hitesh");
// console.log(le); // will function in same
console.log("GOING");
