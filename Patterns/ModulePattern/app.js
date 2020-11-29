

/*Code Standard :  private varibale will be declared with _ */



//  (()=> {
//      /* Declare private var and function */
//     console.log(`IIFE block >>>>>>>>>>>>>> `)
//     return {
//         /* Declare public var and function */
//     }
// })();

/* Moddule Pattern */

// let uiCrtl = (() => {
//     let text = 'Hello World'; 
//     function changeText() {
//         console.log(`IIFE block >>>>>>>>>>>>>> `,text)
//         const element = document.querySelector('h1');
//     element.textContent = text;
//     }

    
// return {
//     TextChange : function () {
//         changeText();
//     }
// }
// })();

// uiCrtl.TextChange();



/* Revealing Module Pattern */

let ItemCtrl = ( function() {
    let _data = [];

    function add(item) {
        console.log(`Item is added successfully`);
        _data.push(item);
    };

    function get(id) {
        return _data.find((data) => {
            return data.id === id;
            // return data === id
        });
    };

return {
    add1: add,
    get1: get,
    // add,
    // get
}


})();

// ItemCtrl.add({id:5,name:"Muthu"});
ItemCtrl.add1({id:1,name:"Muthu"});
ItemCtrl.add1({id:2,name:"Raveendran"});
 console.log(ItemCtrl.get1(2));





