/* Define UI Vars */
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.card-buttom');
const filter = document.querySelector('.card-text');
const taskInput = document.querySelector('.form-text');
const listBody = document.querySelector('.card-action');

/* Load all Event Listeners */
loadEventListeners();
/* DPM Load Event */
document.addEventListener("DOMContentLoaded",getTasks);

/* Load all Event Listeners */
function loadEventListeners() {
  /* Add a Task */
  form.addEventListener('submit', addTask);
  /* Remove element */
  taskList.addEventListener('click', removeElement);
  /* Remove all button by clicking clear button */
  clearBtn.addEventListener('click',clearAllValue);
  /* Filter add Event Listener */
  filter.addEventListener('keyup',filterTask);
}

/* Get Task from LS */
  function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
      tasks =[]; 
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task) {    
    const li = document.createElement('li');
    const span = document.createElement('span');
    /* Add a class */
    li.className = '.collection-item';

    /* Create a new link */
    const link = document.createElement('a');

    /* Add a icon and class name */
    link.className = 'fa fa-remove';

    /* Create a div use for only hover */
    const hover = document.createElement('p');
    hover.className = 'hover-content';


    /* Append the link to li */
    // taskList.appendChild(link);

    /* Create a Text Node and append to li */
    li.appendChild(document.createTextNode(task));
    hover.appendChild(document.createTextNode(task));
    li.appendChild(span);
    // li.appendChild(hover);
    li.appendChild(link);
    // li.appendChild(hover);
    taskList.appendChild(li);

    })
  }

/* Add a Task */
function addTask(e) {
  /* trim() used to remove white space from the text and give the ctual value */
  let val = taskInput.value.trim();
  if (taskInput.value === '' || val.length === 0) {
    alert('Please enter the valid Data ...');
  }
  /* Create li element */
  if (val.length != 0) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    /* Add a class */
    li.className = '.collection-item';

    /* Create a new link */
    const link = document.createElement('a');

    /* Add a icon and class name */
    link.className = 'fa fa-remove';

    /* Create a div use for only hover */
    const hover = document.createElement('p');
    hover.className = 'hover-content';


    /* Append the link to li */
    // taskList.appendChild(link);

    /* Create a Text Node and append to li */
    // span.appendChild(document.createTextNode(taskInput.value));
    li.appendChild(document.createTextNode(taskInput.value));
    hover.appendChild(document.createTextNode(taskInput.value));
    li.appendChild(span);
    // li.appendChild(hover);
    li.appendChild(link);
    // li.appendChild(hover);
    taskList.appendChild(li);
  }

  /* Local Storage */
  storeTaskInLocalStorage(taskInput.value);

  /* Clear Input */
  taskInput.value = '';
  e.preventDefault();
}

/* Function for Local Storage */
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks =[]; 
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
    tasks.push(task);
  localStorage.setItem('tasks',JSON.stringify(tasks));
}


/* Function to remove element */
function removeElement(e) {
  // console.log("<<<<<<<<<<<<<<<<<<<<<<< From Local >>>>>>>>>>>>>>>>>>>>>>>", e.target.parentElement);
  // if(e.target.parentElement.classList.contains(".fa-remove")) {
    if(e.target.classList.contains("fa-remove")) {
    e.target.parentElement.remove();
  }
 /* Remove Target from Local */
//  let data =document.querySelector('ul li ');
console.log("<<<<<<<<<<<<<<<<<<<<<<< From Local >>>>>>>>>>>>>>>>>>>>>>>", e.target.parentElement);
  removeTaskFromLocalStorage(e.target.parentElement);
}

/* Remove from Local Storage */
function removeTaskFromLocalStorage(taskItem) {
  console.log("<<<<<<<<<<<<<<<<<<<<<<< From Local >>>>>>>>>>>>>>>>>>>>>>>", taskItem.textContent);
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks =[]; 
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, index) {  

  console.log("The taskItemtaskItemtaskItemTask Item is :", task);
    if(taskItem.textContent === task) {
      /* Splice:
      first argument will select value in array
      second argument will remove the index
      */
      console.log("<<<<<<<<< splice and index of >>>>>>>",index);
      tasks.splice(index,1);
    }
});
  localStorage.setItem('tasks',JSON.stringify(tasks));
}



/* Clear All value */
function clearAllValue(e) {
  /* we can do it by two ways innerHtml and remove child */

  /* innerHTML */
  // taskList.innerHTML  = "";

  /* remove child it is a FASTER one */
  /* while loop is used to remove all thge first node */
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
  clearStorage();
}

/* clear a local storage */
function clearStorage() {
  localStorage.clear();
}


/* Filter Value */
function filterTask(e) {
  const text = e.target.value.toLowerCase();
/* forEach is usedto iterate array 
    firstArgument - represent value
     second argument represent index   
    */
  document.querySelectorAll('li').forEach(function(task) {//.collection span
    const spanText = task.textContent;
    let list = task.parentElement;
    /* indexOf method searches the array for the specified item, and returns its position. The search will start at the specified position,
     or at the beginning if no start position is specified, and end the search at the end of the array. Returns -1 if the item is not found. */
    if(spanText.toLowerCase().indexOf(text)!=-1){
      list.style.display ="block";
    }
    else {
      list.style.display ="none"

    }
  })
}

