/*
App.js
*/

/*====== Navbar ======*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function navbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/*====== Interaction ======*/
function buttonClick() {
    document.getElementById("mySidenav").style.width = "250px";
}

function buttonClick2() {
    document.getElementById("mySidenav").style.width = "0";
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}