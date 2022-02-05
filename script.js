const displayScreen = document.getElementById('display-screen');
const numberBtns = document.querySelectorAll(".number")
const operatorBtns = document.querySelectorAll(".operator")
const calcPad = document.getElementById("calc-btns");
const resetCalc = document.querySelectorAll('.clear');

let firstOperand = "";
let secondOperand = "";
let previousOperand = "";
let operator = "";


//For my numbers on my calculator
numberBtns.forEach(number => {
    number.addEventListener('click', event => {

        if (operator == '') {
            firstOperand = event.target.textContent;
            displayScreen.value = firstOperand;
            console.log(`firstOperand: ${firstOperand}`);
        } else {
            (operator == "")
            secondOperand = event.target.textContent;
            displayScreen.value = secondOperand;
            console.log(`secondOperand: ${secondOperand}`);
            console.log(`previousOperand: ${previousOperand}`)
        };
    });
})

//For my Operators on my calculator 
operatorBtns.forEach(symbol => {
    symbol.addEventListener('click', event => {
        console.log(`operator: `, event.target.textContent);
        operator = event.target.textContent;
        displayScreen.value = ''
        solveProblem()
    })
})

//Enter Button
document.addEventListener('click', event => {
    if (event.target.className === "enter") {
        solveProblem()
    }
})


// clear button
resetCalc.forEach(reset =>
    reset.addEventListener('click', event => {
        console.log('clear')
        event.preventDefault();
        displayScreen.value = ""
    }))

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
}