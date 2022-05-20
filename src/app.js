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

/*====== Buttons ======*/
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
/*====== Forms ======*/
function validateForm() {
    var x = document.forms[ "myForm" ][ "fname" ].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

/*====== Skills ======*/
function skills() {
    var x = document.getElementById("skills");
    if (x.className === "skills") {
        x.className += " responsive";
    } else {
        x.className = "skills";
    }
}

/*===== Tickers =====*/
function ticker() {
    var ticker = document.getElementById("ticker-languages");
    var ticker2 = document.getElementById("ticker-skills");
    var ticker3 = document.getElementById("ticker-interests");
    ticker.innerHTML = ticker.innerHTML.substring(1) + ticker.innerHTML.charAt(0);
    ticker2.innerHTML = ticker2.innerHTML.substring(1) + ticker2.innerHTML.charAt(0);
    ticker3.innerHTML = ticker3.innerHTML.substring(1) + ticker3.innerHTML.charAt(0);
    moveBy = setTimeout('ticker()', 100);
}