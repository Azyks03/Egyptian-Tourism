const alex = document.getElementById("travel1");
const luxor = document.getElementById("travel2");
const giza = document.getElementById("travel3");
const aswan = document.getElementById("travel4");
const cairo = document.getElementById("travel5");
const visit = document.getElementById("visited");

let a = sessionStorage.getItem("a") ? parseInt(sessionStorage.getItem("a")) : 1;
let b = sessionStorage.getItem("b") ? parseInt(sessionStorage.getItem("b")) : 1;
let x = sessionStorage.getItem("x") ? parseInt(sessionStorage.getItem("x")) : 1;
let y = sessionStorage.getItem("y") ? parseInt(sessionStorage.getItem("y")) : 1;
let z = sessionStorage.getItem("z") ? parseInt(sessionStorage.getItem("z")) : 1;

function updateValue(key, value) {
    if (value >= 20) {
        value = 0;
    }
    sessionStorage.setItem(key, value);
}

alex.onclick = function() {
    a++;
    updateValue("a", a);
    window.location.href = "flyEalexandria.html";
}

luxor.onclick = function() {
    b++;
    updateValue("b", b);
    window.location.href = "flyEluxor.html";
}

giza.onclick = function() {
    x++;
    updateValue("x", x);
    window.location.href = "flyEgiza.html";
}

aswan.onclick = function() {
    y++;
    updateValue("y", y);
    window.location.href = "flyEaswan.html";
}

cairo.onclick = function() {
    z++;
    updateValue("z", z);
    window.location.href = "flyEcairo.html";
}

function updateDisplay() {
    let a = parseInt(sessionStorage.getItem("a") || 0);
    let b = parseInt(sessionStorage.getItem("b") || 0);
    let x = parseInt(sessionStorage.getItem("x") || 0);
    let y = parseInt(sessionStorage.getItem("y") || 0);
    let z = parseInt(sessionStorage.getItem("z") || 0);
    let display = "Cairo";

    if(a > b && a > x && a > y && a > z) {
        display = "Alexandria";
    }
    else if(b > a && b > x && b > y && b > z) {
        display = "Luxor";
    }
    else if(x > a && x > b && x > y && x > z) {
        display = "Giza";
    }
    else if(y > a && y > b && y > x && y > z) {
        display = "Aswan";
    }
    else if(z > a && z > b && z > x && z > y) {
        display = "Cairo";
    }

    visit.textContent = display;
}

setInterval(() => {
    let i = Math.floor(Math.random() * 5 + 1);

    if (i === 1) {
        a = parseInt(sessionStorage.getItem("a") || 0) + 1;
        updateValue("a", a);
    } else if (i === 2) {
        b = parseInt(sessionStorage.getItem("b") || 0) + 1;
        updateValue("b", b);
    } else if (i === 3) {
        x = parseInt(sessionStorage.getItem("x") || 0) + 1;
        updateValue("x", x);
    } else if (i === 4) {
        y = parseInt(sessionStorage.getItem("y") || 0) + 1;
        updateValue("y", y);
    } else {
        z = parseInt(sessionStorage.getItem("z") || 0) + 1;
        updateValue("z", z);
    }
    updateDisplay();
}, 3000);

updateDisplay();
