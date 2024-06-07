// it is introduced in 2015 of 6th version
// This keyword sholud be known when arrow function impplements
// this is used to refer current context
const user= {
    username : "Ayush",
    price :999,
     // function can also be inside object
    WelcomeMessage : function(){
        // this.username without this it will throw an error
        console.log(`${this.username} , welcome to website `);
        console.log(this); // this print the complete context of current OBJECT
    }
}
user.WelcomeMessage();
user.username="Shukl";
user.WelcomeMessage();
// now it will printy empty Object as GLOBAL OBJECT OF NODEJS is EMPTY OBJECCT while browser has GLOBAL OBJECT as WINDOW OBJECT
console.log(this);
 
//Now this with functions
function chai(){
    console.log(this);
}
chai()
