/* /* Constructor & this Keyword */
// function Person(name , dob) {
    
//     /* Inside function 'this' will reffer to an instanse */
//     this.name = name;
//     /*  new Date(dob) will return bod with time */
//     this.dateOfBirth = new Date(dob);
//     this.calculateAge = function() {
//         console.log("The calculate Age is >>>>>>>>>>", Date.now())
//     }

//     console.log("this.dateOfBirththis.dateOfBirththis.dateOfBirth",this.dateOfBirth);
// }
// /* Outside function 'this' will reffer to window object */
//     console.log(this);
// /* while calling a function in JavaScript with new it is called as contructor */
// //  brad = new Person("Brad");
// //  brad = new Person("Traversy");
// brad = new Person("Traversy",'12-12-1990');
// console.log(brad);


/* Built in Constructor */
/* The InBuilt Constructor will have 'new' KeyWord
    EX: new Date()
        new String()
        return type of constructor is Object
*/

// /* String */
// const name1 = "Jeff";
// const name2 = new String('Jeff')

// /* we can add a Key to the Object */
// name2.foo = "bar";
// console.log(name2);

// if(name2 === 'Jeff') {
//     console.log("YES");
// } else {
//     console.log("NO");
// }

//  /* Number */
// const num1 = 5;
// const num2 = new Number(5);
// console.log(typeof num1);
// console.log(typeof num2);


// /* Boolean */
// const bool1 = true;
// const bool2 = new Boolean(true);
// console.log(typeof bool1);
// console.log(typeof bool2);

/* Function */

// const getSum1 = function() {
//     console.log("Normal Function");
// }

// const getSum2 = new function(){
//     console.log("Inside bult in constructor function");
// }




/* Object */
// const name1 = {name:"john"};
// const name2 = new Object({name:"john"});
// console.log(typeof name1);
// console.log(typeof name2);

/* Array */
// const array1 = [1,2,3,4,5];
// const array2 = new Array(1,2,3,4,5);
// console.log(typeof array1);
// console.log(typeof array2);

/* Regualar Expression */
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+')

/* ProtoType */
/* All Object Inherritate thier method from Prototype */
/* we can also set a protype for an Object and we can use it  */
//     function basic(Fname,Lname){
//         this.Fname = Fname;
//         this.Lname = Lname;
//     }

//     basic.prototype.getFullName = function() {
//         return `${this.Fname}${this.Lname}`
//     }

//     basic.prototype.Firstname = function() {
//         return this.Fname
//     }  
    
//     basic.prototype.LastName = function() {
//         return this.Lname;
//     }

//     /* We can manipulate the data by creating an another prototype */
//     basic.prototype.alterLastName = function(lastName) {
//          return this.Lname = lastName;
//     }


// const basicName = new basic("Muthu","Rave");
// // proto.prototype.setProtoType();

// console.log("The ProtoType is >>>>>>>>>>>basicName>>>>>>>>>>>>>>>>",basicName);
// console.log("The ProtoType is >>>>>>>>>>>>>getFullName>>>>>>>>>>>>>>",basicName.getFullName());
// console.log("The ProtoType is >>>>>>>>>>>>>>Firstname>>>>>>>>>>>>>",basicName.Firstname());
// console.log("The ProtoType is >>>>>>>>>>>>>>>LastName>>>>>>>>>>>>",basicName.LastName());
// console.log("The ProtoType is >>>>>>>>>>>>>>>AlteredLastName>>>>>>>>>>>>",basicName.alterLastName("Ajay"));
// console.log("The ProtoType is >>>>>>>>>>>>>getFullName>>>>>>>>>>>>>>",basicName.getFullName());

// /* hasownProperty() is used to verify any argument is passing through a function */
// console.log("<<<<<<<<Will give the boolean value", basicName.hasOwnProperty('Fname'));
// console.log("<<<<<<<<Will give the boolean value", basicName.hasOwnProperty('Mname'));




/* Prototypal Inherritance*/
/* We can inneritate one object prototype to other object prototype */
/* In Example We can create two Oject. And one proptope in each object then we can inheritate
    One Object prototype to other Object.
*/

// function Person(firstName , lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.getFullName = function() {
//         return `${this.firstName}${this.lastName}`
// }

// const person1 = new Person("Muthu","Raveendran");

// // console.log(`The person protype is ${person1.getFullName()}`)

// function Customer(firstName , lastName , phoneNumber) {
//     Person.call(this, firstName , lastName);
//     this.phoneNumber = phoneNumber;
// }



// /* Inorder to access another object prototype method we need to use Object.create() */
//     Customer.prototype = Object.create(Person.prototype)



// /* We can override the inherriteted  prototype methode */
// Customer.prototype.getFullName = function() {
//     return `${this.phoneNumber}`
// }

// /* We can change Constructor in Prototype */
// Customer.prototype.constructor = Customer;

// const customer1 = new Customer("Muthu", "Raveendran", "999999999");
// console.log("<<<<<<<<<<<Customer>>>>>>>>>>>>>>>>>>>",customer1.getFullName());
// console.log("<<<<<<<<<<<Customer>>>>>>>>>>>>>>>>>>>",customer1);








/* Using Object.create() */
// const person = {
//  greeting: function() {
//      return `Hello there ${this.firstName} ${this.lastName}`
//  },
//  getsMarried: function(newLastName) {
//     this.lastName = newLastName;
//  }    
// }

// /* One Way */
// const mary = Object.create(person);
// mary.firstName = "Brad";
// mary.lastName = "Traversy";
// mary.age = 30;

// /* Another way */
// const brad = Object.create(person , {
//     firstName : {value:"Brad1"},
//     lastName : {value:"traversy"},
//     age : {value:30},
// });


// console.log("<<<<<<<<<<The Mary is >>>>>>>>>>>>>>>>>>>>>>", mary);
// console.log("<<<<<<<<<<The Mary is >>>>>>>>>>>>>>>>>>>>>>", mary.greeting());

// console.log("<<<<<<<<<<The brad is >>>>>>>>>>>>>>>>>>>>>>", brad);
// console.log("<<<<<<<<<<The brad is >>>>>>>>>>>>>>>>>>>>>>", brad.greeting());

/* ES6 Classes */
/* Any method are addded to Class will be added to the prototype
In class we don't want to mention FunctionName.prototype.function() to add in prototype
*/

// class Person {
//     constructor(firstName , lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getFirstName() {
//         return this.firstName;
//     }

//     getLastName() {
//         return this.lastName;
//     }

//     /* For Static Method we need to pass the argument */
//     static getFullName(firstName , lastName) {
//         return `${this.firstName = firstName}${this.lastName = lastName}`
//     }
// }

// const person = new Person("Muthu","Raveendran");

// /* getFirstName */
// console.log(`<<<<<<<<get the firstName >>>>>>>>> ${person.getFirstName()}`);

// /* getLastName */
// console.log(`<<<<<<<<get the lastName >>>>>>>>> ${person.getLastName()}`);

// /*way of accessing static method getFullName */
// console.log(`<<<<<<<<get the FullName >>>>>>>>> ${Person.getFullName("Muthu","Raveendran")}`);








/* Inherritance */
// class Person {
//     constructor(firstName , lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         console.log(`<<<<<<<<<The First Name >>>>>>>>>>>>>>>>${this.firstName}`);
//         console.log(`<<<<<<<<<The last Name >>>>>>>>>>>>>>>>${this.lastName}`);
//     }

//     getFirstName() {
//         return `${this.firstName} ${this.lastName}`
//     }


// }

// // const person = new Person("Muthu" , "Raveendran");
// // console.log(person.getFirstName());

// class Customer extends Person {
//    constructor(firstName , lastName , dob) {
//     super(firstName , lastName);
    

//        this.dob = dob;
//    }

//    static getMemeberShipCost() {
//        return 500;
//    }
    
// }
// const customer = new Customer("Muthu" , "Raveendran" , "24-06-1993");
// console.log(customer);
// console.log(Customer.getMemeberShipCost());