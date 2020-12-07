console.log('The modal  is');
const open = document.querySelector('.open');
const modal_container = document.querySelector('.modal-container');
const close = document.querySelector('.close');
let paragrapgh = document.createElement('p');

/* Open a Popup */
open.addEventListener('click', function () {
    console.log("Indide Modal >>>>>>>>>>>>>>>>>>>>>>>>>>>")
  modal_container.classList.add('show');
  createPopup();


  // modal_container.style.opacity='1';
  // modal_container.style.pointerEvents = 'auto';
});

/* Close a Popup */
close.addEventListener('click', function () {
  modal_container.classList.remove('show');
  paragrapgh.innerHTML = '';

//   modal_container.style.opacity='0';
//   modal_container.style.pointerEvents = 'none';
});

function createPopup() {
  paragrapgh.innerText = `
  Updated December 12, 2019. In English grammar, a modal is a verb that combines with another verb to indicate
  mood or tense. A modal, also known as a modal auxiliary or modal verb, expresses necessity, uncertainty,
   possibility, or permission
  `;
//   let button = document.createElement('button');
//   button.className = 'close';

//   button.appendChild(document.createTextNode('Close'));
  modal_container.appendChild(paragrapgh);
//   modal_container.appendChild(button);
}
