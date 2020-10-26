/* 
console i JavaScript
*/
// let a = {a:1,b:2,c:3};
// console.log(a);
// console.table(a);
// console.error("Hello");
// console.clear(); 
// console.warn("pleae provice the valid");
// console.time();
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.timeEnd();

// const a = {
//     name:"Muthu",
// }
// a.name="Raveendran";
// console.log(a);
// let name="Raveendran";
// let name="222222";
// let d= name.substring(0,3);
// console.log(d);
// console.log(name.substring(0,3))
// let a = [1,2121,"sdsdsds"];
let name = "Muthu,Raveendran";
// // d = name.split('');
// d= a.lastIndexOf(2121);
// console.log(d);

name === Number ? typeof console.log("It is an Number") : console.log("It is an String")

// console.log("The Name is >>>>>>>>>" , name);


// replace()
// let name = "Muthu Rave";
// let d = name.replace("Rave","endran"); 
// console.log(d);

// let name1 = "Muthu Rave";
// // let d = name.includes("Muthu");
// // console.log(d);
// let html = '<ul>'+
//   '<li>'+  name1   +'</li>'

// + '<ul>'

// document.body.innerHTML=html;

// var a=1;
// const b =2;
// let c =3;

// function a1 () {
//   var a=4;
// const b =5;
// let c =6;
// console.log("Inside function ",a);
// console.log("Inside function ",b);
// console.log("Inside function ",c);
// }

// a1();

// if(true) {
//   var a=88;
//   const b =588;
//   let c =688;
//   console.log("Inside function ",a);
//   console.log("Inside function ",b);
//   console.log("Inside function ",c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// console.log(document.getElementById("title"));
// console.log(document.getElementById("title").id);
// let className = document.getElementById("title").className
// console.log(className);

// const taskTitle = document.getElementById("title");

// //Changing Styling
// taskTitle.style.background="red";
// taskTitle.style.color="white";
// taskTitle.style.padding="5px";
// taskTitle.style.width="100px";

// //Change Content
// taskTitle.innerText = "Welecome";
// taskTitle.textContent = "New to This";
// taskTitle.innerHTML = "<span>New to Span</span>"

// //Query Selector
// console.log("<<<<<<<<<<< Query selector >>>>>>>>>>");
// console.log(document.querySelector("#title"));
// console.log(document.querySelector("#title").id);
// console.log(document.querySelector(".className"));
// console.log(document.querySelector(".className").className);
// console.log(document.querySelector("div"));

// // will apply to li which is next to ul
// document.querySelector('ul li').style.color="red";
// // will apply to all the element which is present in ul
// document.querySelector('ul').style.color="blue";
// // will apply for last element
// document.querySelector('li:last-child').style.color="black";
// //will apply to the particular element
// document.querySelector('li:nth-child(4)').style.color="green";
// //will apply to the particular element
// document.querySelector('li:nth-of-type(3)').style.color="violet";
// //Text content in queryselector
// document.querySelector('li:nth-of-type(5)').textContent="Query Selector";
// //applying to odd element it's an single selector so it will apply for only fist odd element
// document.querySelector('li:nth-child(odd)').style.background="grey";
// //applying to even element it's an single selector so it will apply for only fist odd element
// document.querySelector('li:nth-child(even)').style.background="black";


// //DOM Selector for Multiple Item of HTML COllection
//     let item = document.getElementsByClassName("collection-item");
//     console.log(item);
//     console.log(item[0]);
//     item[0].style.color="Red";
//     item[1].textContent="Hello";
//     //Converting HTML Collection into Array collection
//     item = Array.from(item);
//     item.reverse();
//     console.log("The List name are ",item);
//     // way to get classname for multiple element 
//     const listName = document.querySelector("ul").getElementsByClassName("collection-item");
//     console.log("The List name are ",listName);
//     let item = document.getElementsByTagName("li");
//     console.log(item);
//     console.log(item[0]);
//     item[0].style.color="Red";
//     item[1].textContent="Hello";
//     // Converting HTML Collection into Array collection
//     item = Array.from(item);
//      item.reverse();
//      console.log("The List name are ",item);
//      item.forEach((item1 , index) => {
//          item1.textContent=`${index} Weleocome`;
//         console.log("The List name are ",item1);
//      });
//     document.querySelectorAll() getting element by NodeList
//     const items = document.querySelectorAll('ul.collection li.collection-item');
//     console.log("The Node List is :", items);
//     items.forEach((item1 , index) => {
//          item1.textContent=`${index} Hello ALL`;
//         console.log("The List name are ",item1);
//      });
//     // Change the odd and even selector
//     const oddItem = document.querySelectorAll('li:nth-of-type(odd)');
//     const evenItem = document.querySelectorAll('li:nth-of-type(even)');
//     oddItem.forEach(arr => {
//       arr.style.background="grey";  
//     });
//     for(let i=0; i<evenItem.length; i++) {
//         evenItem[i].style.background="violet"
//     }

// //Traversing DOM:
//     /* 
//       Difference between childNode and children elemnt node
//        1.child node will return node list
//        2.children element will return HTML collection
//     */
//         const list = document.querySelector('ul.collection');
//         const listItem = document.querySelector('li.collection-item');
        
//         //Get Child Node
//         console.log(list.childNodes);
//         //Get Children
//        let val = list.children;
//         val = list.children[0].children[0];
//         // First Child
//         val = list.firstChild;
//         val = list.firstElementChild;
//         // Last child
//         val = list.lastChild;
//         val = list.lastElementChild;
//         //Count child element
//         val = list.childElementCount;
//         //Get Parent elemnt
//         val = listItem.parentNode;
//         val = listItem.parentElement;
//         //Get Next Sibiling
//         val = listItem.nextSibling;
//         val = listItem.nextElementSibling;
//         //Get Prev Sibiling
//         val = listItem.previousSibling;
//         val = listItem.previousElementSibling;
//         console.log(val);


// // Create a element
// const li = document.createElement('li');
//     //create a class name
//     li.className = "collection-item";
//     //Add a id 
//     li.id = "new-item";
//     // Add a attribute
//     li.setAttribute("title" , "New Item");
//     //Add a inner Text
//     // li.innerText = "Hello Inner Text";
//     li.appendChild(document.createTextNode("Hello Inner Text1"));
//     //Create a new link in elemenet
//     const link = document.createElement('a');
//     // Added Classes
//     link.className = "delete-item secondary-content";
//     //Add icon html
//     link.innerHTML = '<i class="fa fa-remove"></i>'
//     // //Create a tag and append to parent
//     // let font = document.createElement('i');
//     // font.className ="fa fa-remove";
//     // link.appendChild(font);

//     //Apend link to li
//     li.appendChild(link);

//     //Append li as child to ul
//     document.querySelector('ul.collection').appendChild(li);
//     console.log("The element is" , li);












