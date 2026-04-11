zero = document.getElementById("zero");
one = document.getElementById("1");
two = document.getElementById("2");
three = document.getElementById("3");
four = document.getElementById("4");
five = document.getElementById("5");
six = document.getElementById("6");
seven = document.getElementById("7");
eight = document.getElementById("8");
nine = document.getElementById("9");
clear = document.getElementById("clear");
back = document.getElementById("back");
display = document.getElementById("display");
plus = document.getElementById("plus");
minus = document.getElementById("minus");
mult = document.getElementById("mult");
div = document.getElementById("div");
equal = document.getElementById("equal");

let total = "0";
let currentTotal = "0";
let opValue = "";
let tempTotal = "0"
let equation = [];

function isZero() {
    if (currentTotal === "0") {
        currentTotal = "";
    }
}

function reset() {
    currentTotal = "0";
    opValue = "";
    equation = [];
    console.log("donw with reset");
}

function updateTotal() {
    String(currentTotal);
    if (currentTotal[0] == "0") {
        currentTotal = "0";
    }
    if (equation.length != 0) {
        display.textContent = equation.join("") + currentTotal;
    }
    else {
        display.textContent = currentTotal;
    }
}

function operator(opValue) {
    tempTotal = Number(currentTotal);
    equation.push(tempTotal);
    equation.push(opValue);
    opValue;
    currentTotal = "0";
    console.log(equation);
}

function calcTotal() {
    let total = equation.at(0);
    let tempOp;    
    for (let i = 1; i<equation.length; i++) {
        console.log("Current equation value: " + equation.at(i));
        if (i % 2 == 1) {
            tempOp = equation.at(i);
        }
        else {
            console.log(equation.at(i));
            switch (tempOp) {
                case ("+"): 
                    total += equation.at(i);
                    break;
                case ("-"): 
                    total -= equation.at(i);
                    break;
                case ("x"):
                    total *= equation.at(i);
                    break;
                case ("/"):
                    total /= equation.at(i);
                    break;
            }
        }
    }
    total = Number(total.toFixed(4));
    display.textContent = total;
    reset();
    currentTotal = total;
    
}

one.onclick = function() {
    isZero();
    currentTotal += "1";
    updateTotal();
}

two.onclick = function() {
    isZero();
    currentTotal += "2";
    updateTotal();
}

three.onclick = function() {
    isZero();
    currentTotal += "3";
    updateTotal();
}

four.onclick = function() {
    isZero();
    currentTotal += "4";
    updateTotal();
}

five.onclick = function() {
    isZero();
    currentTotal += "5";
    updateTotal();
}

six.onclick = function() {
    isZero();
    currentTotal += "6";
    updateTotal();
}

seven.onclick = function() {
    isZero();
    currentTotal += "7";
    updateTotal();
}

eight.onclick = function() {
    isZero();
    currentTotal += "8";
    updateTotal();
}

nine.onclick = function() {
    isZero();
    currentTotal += "9";
    updateTotal();
}

zero.onclick = function() {
    if (currentTotal != "0") {
        currentTotal += "0";
    }
    updateTotal();
}

clear.onclick = function() {
    reset();
    updateTotal();
}

back.onclick = function() {
    currentTotal = Number(currentTotal);
    if(typeof(equation.at(-1)) === "string" && currentTotal == 0) {
        equation.pop(equation.at(-1));
        currentTotal = equation.at(-1);
        console.log(currentTotal);
        equation.pop(equation.at(-1));
    }
    else {
        currentTotal = Math.floor(Number(currentTotal) / 10);
        currentTotal = String(currentTotal);
    }
    updateTotal();
}

plus.onclick = function() {
    operator(opValue = "+");
    updateTotal();
}

minus.onclick = function() {
    operator(opValue = "-");
    updateTotal();
}

mult.onclick = function() {
    operator(opValue = "x");
    updateTotal();
}

div.onclick = function() {
    operator(opValue = "/");
    updateTotal();
}

equal.onclick = function() {
    operator(opValue = "=");
    calcTotal();
}