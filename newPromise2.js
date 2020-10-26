
// Promise

function getApi() {
    return new Promise((resolve, reject) => {
        let error = false;
        fetch("https://jsonplaceholder.typicode.com/users").then( data =>{
            if(!error) {
              resolve(data.json());
            } else {
                reject("Hitted the wrong one");
            }
        })
    })
}
getApi().then(data => console.log("data >>>>>>>>>>then>>>>>>>>>>>>>>>> ", data))
.catch( data => console.log("data >>>>>>>>>>>>>>>>catch>>>>>>>>>> ", data) );



// async await 

// async function getApi() {
//   let data =  await fetch("https://jsonplaceholder.typicode.com/users");
//  return jsonData = await data.json();
// }



// async function getApiData(){
//     let da1 = await getApi();
//     console.log(">>>>>>>>>>>>>>>>>>>>>Data<<<<<<<<<<<<<<<<<<<<<<<<<<<<", da1);
// }

// getApiData();