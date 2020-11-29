/* It is used to sunscribe and unsubscribe particular event or function */

class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscibed to ${fn.name}`);
  }

  unsubscribe(fn) {
    /* Filter out the from the list whatever the callback function.If there is no match, the callback gets to stay on the function
     */
    // console.log(`You are now Unsubscibed to ${fn.name} , before Observers ${this.observers}`);

    this.observers = this.observers.filter((item) => {
      if (item !== fn) {
        // console.log('Inside unsubscriber>>');
        return item;
      }
    });
    // console.log(`You are now Unsubscibed to ${fn.name} , after Observers ${this.observers}`);
  }

  fire() {
    this.observers.forEach((item) => {
      /* Call it is used to call the function*/
    //   console.log(`Item in fire <<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>`, item);
      item.call();
    });
  }
}

const click = new EventObserver();

/* Event Listener */

document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurrMilliSeconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurrMilliSeconds);
});

document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurrSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscribe(getCurrSeconds);
});

document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});

/* Click Handler */

const getCurrMilliSeconds = function () {
  console.log(`get current milli seconds ${new Date().getMilliseconds()}`);
};

const getCurrSeconds = function () {
  console.log(`get current seconds ${new Date().getSeconds()}`);
};
