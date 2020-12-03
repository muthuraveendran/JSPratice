/* CommonJS Module */
// const module1 = require('./module1');
// console.log("IN Module1",module1.name);

// /* ES5 Syntax for importing */
// import  { person , sayHello } from './module2'

// console.log("<<<<<<<<<<<<Module2>>>>>>>>>>>>>>>",person.name);
// console.log("<<<<<<<<<<<<Module2>>>>>>>>>>>>>>>",person.Desigination);
// console.log("<<<<<<<<<<<<sayHello>>>>>>>>>>>>>>>",sayHello());

/* We can call all the function module2 by a single name */
// import * as mod from './module2';
// console.log(mod.person.name);

/* While calling default function we no need to use curly braces {} */
import { AQW } from './module2'

// console.log(AQW);


const greeting = 'Hello World';
console.log(greeting);