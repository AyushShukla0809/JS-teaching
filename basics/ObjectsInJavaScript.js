console.log("Objects")
//  Objects can be declared in two ways :-> 1.ObjectLiterals  2.-> Constructor
 
//Symbols can also be crated like
const Mysym = Symbol("Key1");
const Jusers={
    // like in arrays key were fixed start with 0 and soon ,As here it can customized
    names: "Ayush", // no need to write names in "" As it automatically stored as in Strings thatwe shall seeat time time value accessing
    "FullName" : "Ayush Shukla",
    age:22,
    // Mysym : "ActualKey", // here Both behaves same
    [Mysym]: "ActualKey1",
    location: "Kanpur",
    IsloggedIn : false,
}
// these can also be accessed in two ways : 1. Using . operator 2. Using Array like having key values inside[] bracket (it is preffered to do)
console.log(Jusers.age);
console.log((Jusers["age"])); // AS key above is String type so it needs to be stored inside ""
console.log(Jusers["names"]);
// Jusers["names"] = "Shukla";
console.log(Jusers.names);// its type is same as below String
console.log(Jusers["names"]); // type is String
console.log(Jusers["IsloggedIn"]);
// Diference in both these accessed types is seen when we add full name in declaration like
console.log(Jusers.FullName); // It gives in the form of String
console.log([Jusers["FullName"]]); // It will gives in the right form of type that is Object
console.log(typeof(Jusers.FullName)); // String type
console.log( typeof([Jusers["FullName"]]));  // Object type
// Object can be freezed
Jusers["age"] = 21;
// Object.freeze(Jusers);
Jusers["names"]="asdas";
console.log(Jusers["age"]); // it gets modified as changes took place before freeze operation
console.log(Jusers["names"]); // It do not get change because of freeze operations
// Now Symbol implementation as it is data type and it get declared using square brackets [] else it will be taken as String
console.log(Mysym);
console.log(Jusers[Mysym]);
console.log(typeof (Jusers[Mysym])); // when on declaration [] is not used it gives type as string else symbol
console.log(Jusers);// it will print mysym as Symbol
Jusers.greeting = function(){
    console.log("Good Day");
}
console.log("Check");
// console.log(Jusers.greeting);
console.log(Jusers.greeting()); // it gets the function value
console.log(".........................");
// Now Object creation using constructor
// const tinderUser = new Object();
const tinderUser={}
tinderUser.id="123as"
tinderUser.names= "Matche"
tinderUser.isLoggedIn= false;
console.log(tinderUser);
const regularUser= {
    email : "somee@gmail.com",
    fullname: {
        userfulnaame:{
            // it invloves a nesting of Objects
firstname:"Ayush",
lastname: "Shukla"
        }
    }
}
console.log("Output is like");
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfulnaame.firstname);
// If fullname in above is not found then it will be used as  ? then if else will get in use as API will be used to know the values
console.log(regularUser.fullname?.userfulnaame.firstname);
const obj1 ={1: "a", 2:"b"}
const obj2={3:"1", 4:"b"}
// const obj3= {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2);// it will copy all into obj1 
// const obj3= Object.assign({},obj1,obj2); // here empty object is used which symbolise that object values get copied into this new blank target object
// it copy all objects from one or more sources to target obj(indivdual)
const obj3 = {...obj1, ...obj2}; // This method will be used at mst called spread method
console.log(obj3);
const users=[
{
    id:1,
    email: "mailid2.in",
},
//it can be accessed by loop through and map method
{
id:2,
email:"itid@.in"
}
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // It will get the Key-Value pair accorddingly
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //  it is used  to check it is present it or not
console.log(tinderUser.hasOwnProperty('Islogged'));
