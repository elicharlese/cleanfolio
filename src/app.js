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
    for (var i = 0; i < document.getElementsByClassName("button").length; i++) {
        document.getElementsByClassName("button")[i].style.backgroundColor = "white";
        document.getElementsByClassName("button")[i].style.color = "black";
    }
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

/*===== Projects =====*/
function projects() {
    var x = document.getElementById("projects");
    if (x.className === "projects") {
        x.className += " responsive";
    } else {
        x.className = "projects";
    }
}

/*===== E-commerce =====*/
function ecommerce() {
    var x = document.getElementById("ecommerce");
    if (x.className === "ecommerce") {
        x.className += " responsive";
    } else {
        x.className = "ecommerce";
    }
}

function width() {
    var x = document.getElementById("width");
    if (x.className === "width") {
        x.className += " responsive";
    } else {
        x.className = "width";
    }
}

function widget() {
    var x = document.getElementById("widget");
    if (x.className === "widget") {
        x.className += " responsive";
    } else {
        x.className = "widget";
    }
}

function height() {
    var x = document.getElementById("height");
    if (x.className === "height") {
        x.className += " responsive";
    } else {
        x.className = "height";
    }
}

function cart() {
    var x = document.getElementById("cart");
    if (x.className === "cart") {
        x.className += " responsive";
    } else {
        x.className = "cart";
    }
}