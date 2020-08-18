
  async function dataGenerator(){
    let resp =  await fetch("https://jsonplaceholder.typicode.com/users");
   return  data = await resp.json();
}

//Outside function

dataGenerator().then(data =>{
    console.log("The new data is >>>>>>>Outside function>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", data);  
   
})

// Inside function
async function a() {
    let data = await dataGenerator();
    console.log("The new data is >>>>>>>>>>>>Inside function>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", data);  

}

a();