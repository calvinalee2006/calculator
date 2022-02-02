const displayScreen = document.getElementById('display-screen');
const numberBtns = document.querySelectorAll(".number")
const operatorBtns = document.querySelectorAll(".operator")
const calcPad = document.getElementById("calc-btns");

let firstOperand = "";
let secondOperand = "";
let operator = " ";

//For my numbers on my calculator
numberBtns.forEach(number => {
    number.addEventListener('click', event => {
        //console.log(event.target.textContent);
        displayScreen.value += event.target.textContent
        if (operator === "") {
            firstOpernd += event.target.textContent;
            console.log(firstOperand)
        } else {
            secondOperand += event.target.textContent;
            console.log(secondOperand)
        };
    });
})

//For my Operators on my calculator 
operatorBtns.forEach(symbol => {
    symbol.addEventListener('click', event => {
        console.log(event.target.textContent);
        displayScreen.value += event.target.textContent
    })
})

//Enter Button
document.addEventListener('click', function (e) {
    if (e.target.className === "enter") {
        solveProblem();
    }
})

//Math symbols function
function solveProblem() {
    if (operator == "+") {
        return `${firstOperand} + ${secondOperand}`
    }
    if (operator === "-") {
        secondOperand = display.value;
        display.value = +firstOperand - +secondOperand;
    }
    if (operator === "X") {
        secondOperand = display.value;
        display.value = +firstOperand * +secondOperand;
    }
    if (operator === "/") {
        secondOperand = display.value;
        display.value = +firstOperand / +secondOperand;
    }
}




