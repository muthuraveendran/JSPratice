/* Set the width of the side navigation to 250px */
function openNav() {
    console.log("<<<<<<<<<<<<<<<<<< Inside Open Nav >>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    document.querySelector(".sideNav").style.width = "250px";
    // document.getElementById("mySidenav").style.display = "block";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    // document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".sideNav").style.width = "0";
    // document.getElementById("mySidenav").style.display = "none";
  }
  