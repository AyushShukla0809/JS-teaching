// Destructuring is made in both Array and Destructuring
const Course = {
    coursename : "Js In Hindi",
    price: 99,
    "coursetutor": "Hitesh" // no need to do key within "" as it auto identify itas String
}
const{coursetutor: tutor} = Course;
// console.log(coursetutor); // now it will not work as its new name is assigned
// Can Also Be Called As De-Structure of Objects also
console.log(tutor);
// // In react there are functionalities of props as props.company so here curly braces is used within it
// const navbar = ({company} ) =>{ // curly braces were used in it for destructuring

// }
// navbar(company ="hitesh")


 // API is used to get jobs done from another source
//  In earlier days XML Structure were used to get values from backend in API but now Json is used

{  // it is a json similar to objec without object name and Key and Values Both are string here
//     "names":"hites",
//     "coursename" : "Js in Hindi",
//     "price" : "Free"
// }

//Json API are used
// We can have Any random API in APIGENERATOR SITE AND CONVER IT INTO JSON via JSON FORMATTER
//  API looks like below
// {"results":[{"gender":"male","name":{"title":"Mr","first":"Gerónimo","last":"Griego"},"location":{"street":{"number":409,"name":"Circuito Malasia"},"city":"San José Babicora","state":"Yucatan","country":"Mexico","postcode":69788,"coordinates":{"latitude":"29.6004","longitude":"-154.4448"},"timezone":{"offset":"-12:00","description":"Eniwetok, Kwajalein"}},"email":"geronimo.griego@example.com","login":{"uuid":"56005bfa-9aff-4c91-8ce2-3a770627fd56","username":"whitecat285","password":"sidney","salt":"MP00VKdc","md5":"58612de9159d06c3914c29c5dff16db6","sha1":"8bdac55b5c22e93a05221694731c83b254a501ed","sha256":"6dd3658e902d1c7644e3eb43e7bd85dd484af0297192ecc76703a5d0e94e5449"},"dob":{"date":"1982-04-23T20:29:35.289Z","age":42},"registered":{"date":"2011-10-07T23:17:19.205Z","age":12},"phone":"(604) 149 8344","cell":"(679) 589 3224","id":{"name":"NSS","value":"17 27 79 1615 0"},"picture":{"large":"https://randomuser.me/api/portraits/men/46.jpg","medium":"https://randomuser.me/api/portraits/med/men/46.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/46.jpg"},"nat":"MX"}],"info":{"seed":"5faa4560e21af32f","results":1,"page":1,"version":"1.4"}}
console.log("Functions and Parameter in JavaScript")
