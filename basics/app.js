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
// let name = "Muthu,Raveendran";
// // d = name.split('');
// d= a.lastIndexOf(2121);
// console.log(d);

// name === Number ? typeof console.log("It is an Number") : console.log("It is an String")

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

/* 
className will look for entire String
*/

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


/* // //DOM Selector for Multiple Item of HTML COllection */
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
    /* forEach is usedto iterate array 
    firstArgument - represent value
     second argument represent index   
    */
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

/* Traversing DOM: */

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

/* 
    Replacing a Element
*/
    //Create a element
    // const newHeading = document.createElement('h2');
    // //Add id
    // newHeading.id = "Task-title1";
    // // newHeading.innerText="ADD ON"
    // newHeading.appendChild(document.createTextNode("SUB ON"));
    // const oldHeading = document.querySelector(".task-title");
    // const cardAction = document.querySelector(".card-action");
    // cardAction.replaceChild(newHeading , oldHeading);
    // cardAction.replaceChild(oldHeading , newHeading); 
// console.log(newHeading);
// console.log(cardAction);


// //Remove Element
    // const li = document.querySelectorAll('li');
    // const list = document.querySelector('ul');
    // // Remove List Item
    // li[1].remove();
    // //Remove the child element
    // list.removeChild(li[4]);

//// CLASSES & ATTR
    // const firstli = document.querySelector("li:first-child");
    // // const firstli = document.querySelector("li:nth-of-type(2)");
    // const link = firstli.children[0];
    // let val;
    //  link.classList.add("new1");
    //  link.classList.remove("new1");
    //  val = link;
    // console.log(val);
    
    // //Attribute
    // val = link.getAttribute('href');
    // val = link.setAttribute('href','https://www.google.com');
    // val = link.hasAttribute('title');
    // val = link.setAttribute('title','https://www.google.com');
    // val = link.removeAttribute('title');
    // console.log(val);

    // let selector = document.querySelector('h2');
    // selector.setAttribute("class","h2-text");



    // console.log("<<<<<<<<<<< Selector >>>>>>>>>>>>>" , selector);


/* Event Listener and Event Object */
    // document.querySelector('.button-link').addEventListener('click', (e) => {
    //     console.log("Hello World 123");
    //     e.preventDefault();
    // });

    //  document.querySelector('.paragrap').addEventListener('click', (e) => {
    //     console.log("Hello World 123");
    //     e.preventDefault();
    // });

    //callback in Event Listener
    // document.querySelector('.button-link').addEventListener('mouseover',onclick);

    // onclick = (e) => { // arrow function will not work in callback
        // function onclick(e) {
    //   alert("Hello all");
    // e.preventDefault();
    // let val;
    // val = e;
    
    //     //Event Tatget name
    //     val= e.target;
    //     val= e.target.id;
    //     val= e.target.className;
    //     val= e.target.classList;

        // //Event Type
        // val = e.type;

        //Timestamp
        // val = e.timeStamp

        // //Co-ordinate event relative to the window
        // val = e.clientX;
        // val = e.clientY;

        // //Co-ordinate event relative to the element
        // val = e.offsetX;
        // val = e.clientY;
        
        // console.log(val);
// }

/* Mouse Events */
    //   const clearBtn = document.querySelector('.button-link');
    //   const card = document.querySelector('.collection');
    //   const heading = document.querySelector('.list-heading');

    /* click */
    //     clearBtn.addEventListener('click',runEvent);
    /*  dbclick */
    //   clearBtn.addEventListener('dblclick',runEvent);

    /* mousedown wiil not apply for button / we can use it in cards
       once button is clicked before relase  it will work
    */
    // card.addEventListener('mousedown',runEvent);

     /* mousedown wiil not apply for button / we can use it in cards
       once button is clicked and relased  it will work
    */
    // card.addEventListener('mouseup',runEvent);
    /* 
        It will works once we hover on the element
     */
    // clearBtn.addEventListener('mouseenter',runEvent);
     /* 
        It will works once we hover and leave the element
     */
    // clearBtn.addEventListener('mouseleave',runEvent);

     /* 
        It will works similar to mouse hover
     */
    // clearBtn.addEventListener('mouseover',runEvent);

     /* 
        It will works similar to mouse leave
     */
    // clearBtn.addEventListener('mouseout',runEvent);

     /* 
       It will work when we hover the mouse on the element
     */
    // card.addEventListener('mousemove',runEvent);

    // function runEvent(e) { 
    //     console.log(`Event Type is : ${e.type}`);
    //     //generating text in html
    //     heading.textContent = `MouseX: ${e.offsetX} MouseY ${e.offsetY}`;
    //     //generating HTML Component
    //     heading.innerHTML = `<h5>Hello</h5>`;
    //     //rgb takes 3 value to generate red,green,blue color
    //     document.body.style.background = `rgb(${e.offsetX} , ${e.offsetY} , 40)`
    // }


/* 
Keyboard & Input Events
*/

    //   const form = document.querySelector('form');
    //   const input = document.querySelector('.form-text');
    //   const heading = document.querySelector('h1');
    //   const select = document.querySelector('select');

    /* Used to submit whna a form sa submit */
    //   form.addEventListener('submit', runEvent);
    /* Keydown need to fid difference between keyup and keydown */
    // input.addEventListener('keydown', runEvent);
    /* KeyUp need to fid difference between keyup and keydown */
    // input.addEventListener('keyup', runEvent);
    /* keypress  */
    // input.addEventListener("keypress",runEvent);
     /* Focus --- will focus only that particular element */
    // input.addEventListener("focus",runEvent);
    /* Focus --- will focus only that particular element */
    // input.addEventListener("blur",runEvent);
    /* cut  */
    // input.addEventListener("cut",runEvent);
    /* Paste  */
    // input.addEventListener("paste",runEvent);
    /* input */
    // input.addEventListener("input",runEvent);
    /* change */ 
    //     select.addEventListener("change",runEvent);

    //    function runEvent(e) {
    //     heading.innerText = e.target.value;
    //      console.log("Event Type is : ",e.type);
    //      console.log("The input is : ",e.target.value);
    //     }

/* 
Event Bubbling and Deligation
Bubbling of the events through DOM
Event Bubbling travelling from child to parent
Event Deligation travelling from parent to child
        */

        /* 
        Example for Event bubling if we click child element to parent element also buble
        */

        // document.querySelector('.card-title').addEventListener('click', function() {
        //     console.log("card-title")
        // });

        // document.querySelector('.card-body').addEventListener('click', function() {
        //     console.log("card-body")
        // });

        // document.querySelector('.card').addEventListener('click', function() {
        //     console.log("card")
        // });

        /* Example for Event delegation if we click parent element to child element also buble
        */

        /*It will select only frst eleemnt inorder to overcome this we use event delegation  */
        // document.querySelector('.delete-list').addEventListener('click', function() {
        //     console.log("Event delegiation is : delete item" );
        // });

        /* Event delegation */
        // document.body.addEventListener('click', deleteItem);

        // function deleteItem(e) {
        //     /* className will look for entire String so istead of that use classList  */
        //     if(e.target.className === "delete-list dd" ){
        //       console.log('delete-item'); 
        //     }
        // //   console.log("Event fire",e.target) 
        // };

        /* className will look for entire String so istead of that use classList  */
        // function deleteItem(e) {
        //     /* className will look for entire String so istead of that use  */
        //     if(e.target.parentElement.classList.contains("collection-item")){
        //       console.log('delete-item'); 
        //       e.target.parentElement.remove();
        //     }
        // };

/* Local and Session Storage 
    Local storage : until manually or programmly clear it will stay
    session storage: ends once we close the terminal
*/
        /* set local storage */
        // localStorage.setItem('name','jhon');
        /* set session storage */
        // sessionStorage.setItem('name','Benth');  
        
        /* remove from storage */
        // localStorage.removeItem('name');

        /* get from storage */
        // const name = localStorage.getItem('name');
        // console.log("Name :", name);

        /* clear from storage which value is already set */
        //  localStorage.clear();
        // console.log("Name :", name);

        /* will set local storage and replace if we type a new data */
        // document.querySelector('form').addEventListener('submit', function(e) {
        //   const task = document.querySelector('.form-text').value;
        //   localStorage.setItem('task',task)
        //   console.log("Value is: ", task);
        //   e.preventDefault();  
        // })

        /* Make multiple value in Local storage using array  */
        // document.querySelector('form').addEventListener('submit', function(e) {
        //   const task = document.querySelector('.form-text').value;
        //     let tasks;

        //     if(localStorage.getItem('tasks') === null) {
        //         tasks = [];
        //     }
        //     else {
        //         tasks = JSON.parse(localStorage.getItem('tasks'));
        //     }
        //     console.log("tasks Value is: ",  typeof tasks);

        //     tasks.push(task);


        //   localStorage.setItem('tasks',JSON.stringify(tasks))
        //   console.log("Value is: ", typeof tasks);
        //   e.preventDefault();  
        // });

        /*When we click on any input box in Form the Form rendered  */
        // let a = document.querySelector('form');
        // a.addEventListener('click', function(){
        //     console.log(a);

        // })

