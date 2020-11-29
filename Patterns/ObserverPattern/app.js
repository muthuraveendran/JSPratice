// /* It is used to sunscribe and unsubscribe particular event or function */

function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe : function (fn) {
        this.observers.push(fn);
        console.log(`You are now subscibed to ${fn.name}`);
    },
    
    unsubscribe : function (fn) {
        /* Filter out the from the list whatever the callback function.If there is no match, the callback gets to stay on the function
          */

        this.observers = this.observers.filter((item) => {
            if(item !== fn) {
                console.log("Inside unsubscriber>>")
                return item;
            }
        })
        console.log(`You are now Unsubscibed to ${fn.name} `);
        console.log(`You are now observers to ${this.observers}`);
    },

    fire : function() {
        this.observers.forEach((item) => {
            /* Call it is used to call the function*/
            console.log(`Item in fire <<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>`,item);
            item.call();
        })
    }
}

const click = new EventObserver();

/* Event Listener */

document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurrMilliSeconds)
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurrMilliSeconds)
});

document.querySelector('.sub-s').addEventListener('click', function() {
    click.subscribe(getCurrSeconds)
});

document.querySelector('.unsub-s').addEventListener('click', function() {
    click.unsubscribe(getCurrSeconds)
});

document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
});

/* Click Handler */

const getCurrMilliSeconds = function() {
    
console.log(`get current milli seconds ${new Date().getMilliseconds()}`)    

}

const getCurrSeconds = function() {
    
    console.log(`get current seconds ${new Date().getSeconds()}`)    
    
    }


// function filter1() {
//     const number = [1,22,33,44,55];

// this.number = number.filter((data) => {
//     console.log(`Inside filter function ${data}`);
// })
// console.log(`Outside filter function ${this.number}`);
// }

// filter1();
