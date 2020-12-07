const form = document.querySelector('form');
const submit = document.querySelector('.submit');
const firstname = document.querySelector('.firstname');
const lastname = document.querySelector('.lastname');
const ID = document.querySelector('.id');
const displayDiv = document.querySelector('.dsiplayData');

data = {
    form :[
        
    ]
}


/* Add a Data */
submit.addEventListener('click', function(e) {
    console.log("Hello")
    const Fname = firstname.value;
    const Lname = lastname.value;
    const id = new Date().getMilliseconds();
    var formData = {
        Fname,
        Lname,
        id
    }

    data.form.push(formData)

    //Get Id
    getId(data)

        /* Display Save data */
        DisplayUIData(data.form);
        /* Clear Input Field */
        clearField();


    e.preventDefault()
});


/* Genearate ID */
function getId(input) {
    let ID;
    /* Create ID */
    if(input.form.length > 0 ) {
     ID = input.form[input.form.length - 1].id +1;
    //  console.log("ID Length >>>>>>>>>>>>> ",input.form.length) 
    } else {
        ID = 0;
    }

    return ID


}



/* Display Data */

function DisplayUIData(input) {


    // console.log("The id is >>>>>>>>>>>>>>>>>", id);

    let Display = ``;
    input.forEach((post)=> {
        Display+=`
        <div class="parent" data-parent="parent1">
        <h4 class="card-title" data-Fname="title">${post.Fname}</h4>
        <p class="card-text" data-Lname="body">${post.Lname}</p>
        <p class="id" data-id=${post.id}></p>
       <button class="edit" >Edit</button>
       <button class="delete" >Delete</button> 
       </div>        
        `
        displayDiv.innerHTML = Display
    });
    

}

/* Delete Data */
displayDiv.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        console.log("Insi delete>>>>>>>>>>");
            e.target.parentElement.remove();
      }
});

/* Update Field */
displayDiv.addEventListener('click', function(e) {
    console.log("<<<<<<<<<<<id>>>>>>>>>>>>>>>>>>>>",data.form);
    if (e.target.classList.contains('edit')) {
        const parentElement = e.target.parentElement;
        const fiName = parentElement.querySelector('h4').textContent;
        const laName = parentElement.querySelector('p').textContent;
        const Lid = parentElement.querySelector('.id').dataset.id;
        console.log("<<<<<<<<<<LidLidLidLid></LidLidLidLid>",Lid);



        // const submit = document.querySelector('.submit');

        submit.textContent="update";
        
        /* Remove submit */
        submit.classList.remove('submit');
                /* Add Update */
                submit.classList.add('update');


        /* Value */
     

            firstname.value = fiName;
            lastname.value = laName;
  

            
      }
});






form.addEventListener('click', function(e) {
    console.log("<<<<<<<<<<<id1>>>>>>>>>>>>>>>>>>>>",e.target);
    if (e.target.classList.contains('update')) {
        console.log("Update data!!!!!!!!!!!!");
    }
});


/* Function clear Input field */

function clearField() {
    firstname.value="";
    lastname.value="";
}
