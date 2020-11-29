// /* Iterator Example */

// function nameIterator(names) {
//     let nextIndex = 0;

//     return {
//         next123: function() {
//             console.log("<<<<<<<< Next Index >>>>>>>>>>",nextIndex)
//             return nextIndex < names.length ?
//             {value:names[nextIndex++], done:false} :
//             {done:true}
//         }
//     }
// }

// /* Create an array of name */
// const nameArray = ['jack','jill','john'];
// const names = nameIterator(nameArray);
// console.log(names.next123().value);
// console.log(names.next123().done);
// console.log(names.next123());
// console.log(names.next123());
// console.log(names.next123());
// console.log(names.next123());
// console.log(names.next123());


/* Difference between iteratot\rs and generators 
    For Iterator we will store a data in array
    For generator we dont need to store a value in array
*/
/* Generators */
/* For donoting function as generator we will use '*' after function keyword */

// function* sayName() {
//     yield 'Jack'
//     yield 'Jill'
//     yield 'Jhon'
// }

// const name = sayName();
// console.log(name.next());
// console.log(name.next());
// console.log(name.next().value);

/* ID Creator */

// function* createId() {
//     let index = 1;
//     while(true) {
//         yield index++;
//     }
// }

// const gen = createId();

// console.log(gen.next().value)
// console.log(gen.next().value)


