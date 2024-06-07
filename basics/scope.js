// var let const
// you know var is not prefered most of time as it has its impact outside the block also So, in a project multiple programmers do code one can use same variable in their block section (let and const is preffered)
 // global scope we check online inside console by inspect is different than global scope we have inside nodejs
 let a=300
 var b=200
 {
    let c =500
    b=300
    a=400
 }
 console.log("Let variable is & Var variable is",a,"&",b);
// console.log("here c is not defined shows as it is inside the block",c);
function one(){
    const usernaam = "Ayush"
console.log("first line")
    function two() // this two must be call else it will not execute properly warn that it is declared but never read
     {
        const id= 2
console.log(usernaam);
    }
    two();
    // console.log(id);// it will throw an error as id is not in scope to access
}
console.log("check");
one();// this one contains two that gets called
// ++++++++++++++++++++++++++++++ Interesting ++++++++++++++++
function addOne(num){ // all things will shown in light color when not got use or say not read only declared
    return num +1;
}
addOne(5); // It can be called in above and function will jump to required code sets by own
// variable are very strong in javascript as it can hold json value and function also
// Another way of declaring is like
const addTwo = function(num){
    return num+2;
}
addTwo(5); // in this calling should be made after definition otherwise error of before Initialization
// In JavaScript, hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution. In turn, this allows us to use functions, variables, and classes before they are declared.