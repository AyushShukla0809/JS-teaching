console.log("Date and Time")
let mdat= new Date();
// console.log(mdat);
// console.log(mdat.toString());// it returns in proper specifying date manner
// console.log(mdat.toDateString()); // it returns simply in day month day and year format
// console.log(mdat.toLocaleDateString());
console.log(mdat.toLocaleString());
let modat= new Date(2023,3,5);
let moadat= new Date(2023,3,5,5,6); // here time is also get added
console.log(moadat.toString());
console.log(modat);
console.log(modat.getMonth());
console.log(modat.getDate());
console.log(modat.getFullYear());
console.log(modat.getMilliseconds());
let ndat= Date.now();
console.log(ndat); // in milliseconds
// console.log(ndat.getTime());
console.log(Date.now() /1000); // in seconds heree floor function get used to  remove decimal 
console.log(Math.floor(Date.now()/1000)); // in seconds
console.log("Arrays")
const arr= [2,4,6,8,10];
console.log(arr);
const str = arr.join(); // Array get converted to String using join function
console.log(str);
console.log ("Slice and Splice");
const Myarr=[1,2,3,4,5,6,7];
console.log(Myarr.slice(2,4));// Slice will not include 4th amd also not affect the array
console.log(Myarr);
console.log(Myarr.splice(2,4)); // Splice returns the array with including 4 values and affect the old array
console.log(Myarr);