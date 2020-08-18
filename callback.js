const posts = [
    {title:"Title One", body:"This is Post 1"},
    {title:"Title Two", body:"This is Post 2"}
];

//Callback

function getPosts() {
    setTimeout(()=> {
      let output ='';
      posts.forEach((post,index)=>{
       output += `<li>${post.title}</li>`
      });
      document.body.innerHTML = output;
      document.body.innerHTML = output;
    },1000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// getPosts();
createPost({title:"Title Three", body:"This is Post 3"}, getPosts);

