const bal= new Number(99)
console.log(bal);
console.log(bal.toString().length);
console.log(bal.toFixed(2));
const ab= 124.6214;
console.log(ab.toPrecision(3));// numbers before decimal should be same as toPrecision(number)
const amt=1000000000;
console.log(amt.toLocaleString()); // by default US based 
console.log(amt.toLocaleString('en-In')); //now indian based number
//Maths Function
console.log(Math.random());
console.log(Math);
// console.logMath.floor((Math.random() *10));
// Date And Time
const da=new Date()
console.log(da);
console.log(da.toString());
console.log(da.toLocaleDateString());
console.log(typeof (da));