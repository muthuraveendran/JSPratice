// console.log("ES6 Syntax");

// const data = {
//   item:  [  {id:1,name:"Muthu"},
//     {id:2,name:"Raveendran"},
//     {id:3,name:"Kosal"},
// ]
// }


// console.log(data.item[data.item.length-1].id+1);
// // console.log(data.item[data.item.length-1].id);
// // console.log(data.item[data.item.length-1].id);



const UI = (()=> {
function nav() {
  console.log(`<<<<<<<<<<<The nav>>>>>>>>>>>>>>>`)
}
return {
  nav,
}
})();

const Data = (()=> {
  function passData(name) {
    console.log("Pass the data value is", name)
  }

  return {
    passData
  }
})();


const App = ((UI,Data)=> {

  function init() {
    console.log("App is started");
    UI.nav();
    Data.passData("Muthu");
  }

  return {
    init
  }

})(UI,Data);


App.init();