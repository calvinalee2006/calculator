const calcBtns = document.querySelectorAll('.calc-btns');
const calcNumber = document.querySelectorAll('.number');
const calcOperator = document.querySelectorAll('.operator')
const enterSum = document.querySelector('.enter');
const display = document.getElementById('display-screen');


//const numOne = document.getElementById('one');

//numOne.addEventListener('click', (e) => {
//console.log(e.target.textContent);
//display.value = e.target.textContent;
//});

//calcBtns.forEach(btn => {
//btn.addEventListener('click', (e) => {
//console.log(e.target.textContent);
//display.value += e.target.textContent;
//})
//})
let firstOperandStored = true;
let firstOperand = "";
let secondOperand = "";
let operator = "";


document.addEventListener('click', function (e) {
    if (e.target.className === "number") {
        if (firstOperandStored === true) {
            display.value = "";
            display.value = e.target.textContent;
        }
        if (firstOperandStored === false) {
            console.log(e.target.textContent);
            display.value = e.target.textContent;
        }

    }
})


document.addEventListener('click', function (e) {
    if (e.target.className === "operator") {
        firstOperand = display.value;
        operator = e.target.textContent;
        console.log(firstOperand)
        //console.log(e.target.textContent);
        firstOperandStored = true;
    }
})

document.addEventListener('click', function (e) {
    if (e.target.className === "decimal") {
        decimal = display.value;
        console.log(e.target.textContent);
        display.value = e.target.textContent;
    }
})

document.addEventListener('click', function (e) {
    if (e.target.className === "enter") {
        solveProblem();
    }
})



// calcOperator.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         console.log(e.target.textContent);
//         display.value += e.target.textContent;

//     })
// })

function solveProblem() {
    if (operator == "+") {
        secondOperand = display.value;
        display.value = +firstOperand + +secondOperand; //+ is making sure numbers are numbers and they are not concatenating.
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



//all numbers together
//all operators together
//Use a for loop