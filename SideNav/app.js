// const sideMenu = document.querySelector('.side-menu-icon');
// const sideNav = document.querySelector('.side-nav');
// const container = document.querySelector('.container');

// /* Open Side Menu */
// sideMenu.addEventListener('click', function() {
//     sideNav.style.display="block";
//     sideMenu.style.display="none";
// });

// /* Close Side Menu */
// container.addEventListener('click', function() {
//     sideNav.style.display="none";
//     sideMenu.style.display="block";
// });



/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("mySidenav").style.display = "block";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    // document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("mySidenav").style.display = "none";
  }