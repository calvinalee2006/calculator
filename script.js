const displayScreen = document.getElementById('display-screen');
const numberBtns = document.querySelectorAll(".number")
const operatorBtns = document.querySelectorAll(".operator")
const calcPad = document.getElementById("calc-btns");
const resetButton = document.querySelector('.clear');

let firstOperand = "";
let secondOperand = "";
let operator = "";


//For my numbers on my calculator
numberBtns.forEach(number => {
    number.addEventListener('click', event => {
        if (!operator) {
            firstOperand += event.target.textContent;
            displayScreen.value = firstOperand;
            console.log(`firstOperand: ${firstOperand}`);
        } else {
            secondOperand += event.target.textContent;
            displayScreen.value = secondOperand;
            console.log(`secondOperand: ${secondOperand}`);
        }
    });
});

//For my Operators on my calculator 
operatorBtns.forEach(operatorBtns => {
    operatorBtns.addEventListener('click', event => {
        if (firstOperand && secondOperand) {
            solveProblem();
        } else {
            operator = event.target.textContent;
            displayScreen.value = operator;
        }
    })
})

//Enter Button
document.addEventListener('click', event => {
    if (event.target.className === "enter") {
        solveProblem()
    }
})

//Left Parenthesis
document.addEventListener('click', event => {
    if (event.target.className === "L-para") {
        displayScreen.value = event.target.textContent;
    }
})

//Left Parenthesis
document.addEventListener('click', event => {
    if (event.target.className === "R-para") {
        displayScreen.value = event.target.textContent;
    }
})


// clear button
resetButton.addEventListener('click', () => {
    displayScreen.value = "0";
    firstOperand = "";
    secondOperand = "";
    operator = "";
});

//Math symbols function
function solveProblem() {
    if (operator == "+") {
        displayScreen.value = parseInt(firstOperand) + parseInt(secondOperand);
    }
    if (operator === "-") {
        displayScreen.value = parseInt(firstOperand) - parseInt(secondOperand);
    }
    if (operator === "X") {
        displayScreen.value = parseInt(firstOperand) * parseInt(secondOperand);
    }
    if (operator === "/") {
        displayScreen.value = parseInt(firstOperand) / parseInt(secondOperand);
    }
    if (operator === "%") {
        displayScreen.value = parseInt(firstOperand) % parseInt(secondOperand);
    }
    firstOperand = displayScreen.value;
    secondOperand = "";
}