console.log("The modal  is")
const open = document.querySelector('.open');
const modal_container = document.querySelector('.modal-container');
const close = document.querySelector('.close');

/* Open a Popup */
open.addEventListener('click', function() {
    modal_container.classList.add('show')


    // modal_container.style.opacity='1';
    // modal_container.style.pointerEvents = 'auto';

});

/* Close a Popup */
close.addEventListener('click', function() {
    modal_container.classList.remove('show')


    // modal_container.style.opacity='0';
    // modal_container.style.pointerEvents = 'none';
});  