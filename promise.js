// const posts = [
//     {title:"Title One", body:"This is Post 1"},
//     {title:"Title Two", body:"This is Post 2"}
// ];

// //Callback

// function getPosts() {
//     setTimeout(()=> {
//       let output ='';
//       posts.forEach((post,index)=>{
//        output += `<li>${post.title}</li>`
//       });
//       document.body.innerHTML = output;
//       document.body.innerHTML = output;
//     },1000)
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
            
//             const error = false;

//             if(!error){
//                 resolve();
//             } else {
//                 reject("Error in something went wrong!!!")
//             }
//         }, 2000);
//     })
// }

// // getPosts();
// createPost({title:"Title Three", body:"This is Post 3"}).then(getPosts);


// // handling Api using promise 

  function getJsonPlaceHolder() {
    return new Promise((resolve, reject) => {
      let isError = false;
        fetch("https://jsonplaceholder.typicode.com/users").then(data =>{
     if(!isError){
        resolve(data.json())
     } else {
         reject("The URL is not correct")
     }
 })          
    });
};

getJsonPlaceHolder().then( data => console.log(">>>>>>>>>>a>>>data>>>>>>>>>>>>>>>>>>>>", data));

// let getData = getJsonPlaceHolder();

// getData.then( data => console.log(">>>>>>>>>>>>>data>>>>>>>>>>>>>>>>>>>>", data));











