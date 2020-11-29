/* SETS - Store a unique value */

/* It will store in form of Array  */
const set1 = new Set();
    set1.add(10);
    set1.add(true);
    set1.add('Muthu');
    set1.add({name:"Raveendran"});
    set1.add(10);
    // console.log(set1);


/* we can define set in another type by passing as argumnet */
// const set2 = new Set([1,true,"string",{name:"john"}])
// console.log(set2);

/* Get Count */
// console.log(set1.size);

/* Check for value */
// console.log(set1.has(10));
// console.log(set1.has(true));
/* It will return false because the Object refference variable is not same  */
// console.log(set1.has({name:"Raveendran"}));
// console.log({name:"Raveendran"} === {name:"Raveendran"});

/* Delete Set */
// set1.delete(10);
// console.log(set1);

/* Iterating Set */

/* For  of */
// for(value of set1) {
//     console.log(value);
// }

/* forEach */

// set1.forEach((data) => {
//     console.log(data);
// })

/* CONVERT set into Array */
const data = Array.from(set1);
console.log(data);










/*In if we store object based on reference variable  value will be change */


