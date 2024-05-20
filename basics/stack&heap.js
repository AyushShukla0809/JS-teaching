// stack works on the principle of (copy) call by value 
//Stack include primitive data types(String,Number,Boolean,Null,Undefined,Symbol) Stack is im-mutable
// heap works on the the principle of call by reference
// heap includes  non-primitive datatypes (Array is mutable) 
let as="HiIt is"
let bs= as;// copy is passed iin stack
bs="Faullt"
console.log(as);
let ob={
    // key value pair
    naam: "Ayush",
    age : 20,
}
let ab=ob;
ob.naam="Shukla" // here call by refernce inside heap is allocated as above was non primitive
console.log(ab.naam);
// Strings application
let st="Welcome"
let s="page"
console.log(st+" to "+ s); // this way is not preferred in recent days , it was recommended to use backtick
console.log(`${st} to new ${s}`);
//declaration
let sst="stringname" // auto string declared
let gn = new String("StringNames");
console.log(sst)
console.log(gn);
console.log(sst.charAt(5));
console.log(sst.indexOf("g"));
console.log(gn.slice(4));
console.log(gn.slice(1,2));
let nst="  My name & id & is & OKK";
// let p = nst.trim;
// console.log(p);
console.log(nst.replace("&", "-"));
console.log(nst.replace("&", "-"));
console.log(nst.includes("id"));
console.log(nst.includes("Ok")); // Any matches can be find 
let ns= "hello ; my; name; is; ay";
console.log(ns);
console.log(ns.split(';'));
console.log("Now only practice it");