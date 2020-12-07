const add = document.querySelector('.addbtn');
const close = document.querySelector('.closebtn');
const subContent = document.querySelector('.sub-content');

/* Maximize data */
add.addEventListener('click', function() {
    add.style.display = "none";
    close.style.display = "block";
    subContent.style.display = "block";
});

/* Minimize data */
close.addEventListener('click', function() {

    subContent.style.display = "none";
    add.style.display = "block";
    close.style.display = "none";

});