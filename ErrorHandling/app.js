// const user = {email:"new@gmail.com"}

// function Data() {
//     console.log("Inside the Data function")
// }

// /* try throw catch finally */
// try {
//     // mfFunction();
//     if(!user.name) {
//         /* throw will work if we use catch block */
//         throw  Data();//"The function is throwend";
//     }
//     console.log("Inside try block");

// }
//  catch(e) {
// //     console.log("Inside Catch block", e);
// //     console.log("Error Name", e.name);
// //     console.log("Error Message", e.message);
// } 
// finally {
//     console.log("Inside finally block");
// }


/* Regular Expression */

let re = /Hello/;
 re = /Hello/i; //i= ignore case sensitive
//let re = /Hello/g; g= Global Search
// console.log(re.source);

/* exec() return result in array or null */
// const results = re.exec("Hello All")
// console.log(results);
// console.log(results[0]);
// console.log(results.index);
// console.log(results.input);

/* text() returns true or false */
// const results = re.test("hello");
// console.log(results);

/* match() return result array or null */
// const str = "Hello";
// const results = str.match(re);
// console.log(results);

/* search() return index of first match if not found return -1 */
// const str = "weleome hello";
// const results = str.search(re);
// console.log(results);

/* replace() - Return new string with some or all matches of a pattern */
const str = "weleome hello";
const results = str.replace(re,'Hi');
console.log(results);