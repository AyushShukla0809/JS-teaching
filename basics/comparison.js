console.log("COMPARISON")
console.log("22" > 20 ); // string 22 auto converts into number 22
console.log(null>0);     // null behaves differently in >= and >,== operations
console.log(null>=0);
console.log(null==0);
console.log("22"==22); // it only compares the value not a data type
console.log("22" === 22); // it compares the value as well as data type
console.log("Symbols Checked");
const  a = Symbol("22");
const  b= Symbol("22");
console.log(a===b);
const he=["Shaktiman","Nagraj","doga"]
let myobj= {
    nam: "Ayush",
    age: 23
}
console.log(typeof(he));
console.log(typeof(myobj));
