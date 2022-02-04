const displayScreen = document.getElementById('display-screen');
const numberBtns = document.querySelectorAll(".number")
const operatorBtns = document.querySelectorAll(".operator")
const calcPad = document.getElementById("calc-btns");

let firstOperand = "";
let secondOperand = "";
let operator = "";
let sum = "";

//For my numbers on my calculator
numberBtns.forEach(number => {
    number.addEventListener('click', event => {
        if (operator === '') {
            firstOperand += event.target.textContent;// spelling error operand was spelled wrong
            displayScreen.value += firstOperand;
            console.log(`firstOperand: ${firstOperand}`);
        } else {
            secondOperand += event.target.textContent;
            displayScreen.value += secondOperand;
            console.log(`secondOperand: ${secondOperand}`);
        };
    });
})

//For my Operators on my calculator 
operatorBtns.forEach(symbol => {
    symbol.addEventListener('click', event => {
        console.log(`operator: `, event.target.textContent);
        operator = event.target.textContent;
        displayScreen.value = ''
    })
})

//Enter Button
document.addEventListener('click', event => {
    if (event.target.className === "enter") {
        solveProblem()
    }
})

//Math symbols function
function solveProblem() {
    if (operator == "+") {
        displayScreen.value = parseInt(firstOperand) + parseInt(secondOperand);
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




