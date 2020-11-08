/* Listen for submit */
document.getElementById('loan-form').addEventListener('submit', function(e) {
    /* hide Results */
document.getElementById('results').style.display='none';
    /* show Results */
document.getElementById('loading').style.display='block';

/* SetTimeout loader for 2seconds */
setTimeout(calculateResult, 2000);

    e.preventDefault();

});

/* Calculate Result */
function calculateResult() {
/* UI Vars */
const amount = document.getElementById('loan-amount');
const interest = document.getElementById('interest');
const years = document.getElementById('repay');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

/* parseFloat is used to convert */
const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) /100 / 12;
const calculatedPayments = parseFloat(years.value) * 12

/* Compute Monthy Paymnet */
/* The Math. pow() function returns the base to the exponent power, that is, baseexponent  */
/* EX : 4^3 = 64 */
const x = Math.pow(1+ calculatedInterest, calculatedPayments);
const monthly = (principal*x*calculatedInterest)/(x-1);

/* The isFinite() function returns false if the value is +infinity, -infinity, or NaN, otherwise it returns */
if(isFinite(monthly)) {
    /* toFixed() will get take last two decimal number*/
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        /* Show Results */
document.getElementById('results').style.display='block';
/* Hide Loading */
document.getElementById('loading').style.display='none';
} else {
    showError("Please Enter Valid Number");
    console.log("The length of the error>>>>>>>>>>>>>>>>>>>", e.value)
}

}

/* Show Error */
function showError(error) {
        /* hide Results */
        document.getElementById('results').style.display='none';
        /* hide loader */
        document.getElementById('loading').style.display='none';

    /* create a div */
  const errorDiv =  document.createElement('div');

    /* Add a class Name */
    errorDiv.className="danger-alert";

  /* Get elements */
  const card = document.querySelector('.loan-container');
  const heading = document.querySelector('.heading');

  /* Create a text node append to div */
  errorDiv.appendChild(document.createTextNode(error));

  /* **** Inser error above heading */
  card.insertBefore(errorDiv , heading);

  /* clear error */
  setTimeout(clearError , 3000);
}

function clearError() {
    document.querySelector('.danger-alert').remove();
}