
const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');


/* Error Message to Dispaly No Value */
function showError(input , message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    input.parentElement.classList.remove('success');
    input.parentElement.classList.add('error');
    small.innerText = message;
}


/* Error Message to Dispaly No Value */
function showSuccess(input) {
    input.parentElement.classList.remove('error');
    input.parentElement.classList.add('success');
}

/* Validate Email Address */
function isValidEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input,`${getFieldName(input.id)} is not valid`);
    }
}

/* Check for Required Fields */
function checkRequiredFields(inpurArray) {
    inpurArray.forEach((input) => {
    const user= input.value.trim();
    if(user.length === 0) {
        showError(input,`${getFieldName(input.id)} is Required`);
    } else {
        input.parentElement.classList.add('success')
        showSuccess(input)
    }
    });
};

/* getFieldName first letter in Capital */

function getFieldName(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

/* Check the length of the UserName and Password Field */
    function checkLength(input , min, max){
        if(input.value.length < min) {
            showError(input,`${getFieldName(input.id)} should be greater than ${min} Characters`);
        } else if(input.value.length > max) {
            showError(input,`${getFieldName(input.id)} should be Less than ${min} Characters`);
        } else {
            showSuccess(input);
        }
    }

    /* Check Password match */

    function checkPasswordmatch(input1, input2) {
        console.log("<<<<<<<<<<<<<< Input1 >>>>>>>>>>>>>>>>>>>", input1.value);
        console.log("<<<<<<<<<<<<<< Input2 >>>>>>>>>>>>>>>>>>>", input2.value);
        if(input1.value !== input2.value) {
            showError(input2,'Password doesnot match')
        }
    }


form.addEventListener('submit', function(e) {
    checkRequiredFields([username , email , password , password2])
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    isValidEmail(email);
    checkPasswordmatch(password,password2),
     e.preventDefault();
});























/* Normal Code */
// form.addEventListener('submit', function(e) {

//     /* Validate UserName */
//     const user= username.value.trim();
//     if(user.length === 0) {
//         showError(username,"UserName is Required");
//     } else {
//         username.parentElement.classList.add('success')
//         showSuccess(username)
//     }

//      /* Validate Email */
//      const _Email= email.value.trim();
//      if(_Email.length === 0) {
//          showError(email,"Email is Required");
//      } else if(!isValidEmail(email.value)) {
//         showError(email,"Email is not valid");
//      }
//      else {
//         email.parentElement.classList.add('success')
//          showSuccess(email)
//      }

//       /* Validate Password */
//     const _password= username.value.trim();
//     if(_password.length === 0) {
//         showError(password,"Password is Required");
//     } else {
//         password.parentElement.classList.add('success')
//         showSuccess(password)
//     }

//      /* Validate Confirm Password */
//      const _password2= password2.value.trim();
//      if(_password2.length === 0) {
//          showError(password2,"Confirm Passwod is Required");
//      } else {
//         password2.parentElement.classList.add('success')
//          showSuccess(password2)
//      }

//      e.preventDefault();
// });


































// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();


//     if(username.value === '') {
//         console.log("EmptyName !!!!!!!!!!!!!!!!!!",username);
//     } else {
//         console.log("username !!!!!!!!!!!!!!!!!!",username.value);
//     }


// } )