/* Destructuring Assignment */

// let a,b;
//  [a,b] = [100,200];
// console.log(a)
// console.log(b)

/* Rest pattern */
// [a,b , c , ...rest] = [100,200,300,400,500];
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(rest) 

// ({a , b} = { a:10 , b:20 , c:30 , d:40 , e:50 , f:60 });
// console.log(b);
// ({a , b , ...rest} = { a:10 , b:20 , c:30 , d:40 , e:50 , f:60 });
//     console.log(rest)

/* Array Destructuring */

// const pepole = ['Ajay' , 'Anand' , 'Muthu']
// const [p1,p2,p3] = pepole;
// console.log(p1,p2,p3);



/* parese array returned from function */
// function getPerson() {
//     return ['jhon','mike','smith']
// }

// let [p1,p2,p3] = getPerson();
// console.log(p1, p2 ,p3);

/* Object Sestructuring */
// const person = {
//     name:'muthu',
//     age:26,
//     city:'nagercoil',
//     sayHello : function() {
//         return `Say Hello 123`
//     }
// }

/* Old ES5 */
// const   name = person.name,
//         age = person.age,
//         city = person.city;
// console.log(name , age , city);

/* ES6 Syntax */
//     const {name , age , city , sayHello} = person;
// console.log(name , age , city , sayHello());
