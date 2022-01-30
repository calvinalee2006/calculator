const calcBtns = document.querySelectorAll('.calc-btns');
const calcNumber = document.querySelectorAll('#number');
const calcOperator = document.querySelectorAll('#operator')
const enterSum = document.querySelector('#enter');
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

let firstOperand = "";
let secondOperand = "";
let operator = ""

calcNumber.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        display.value += e.target.textContent;
    })
})

calcOperator.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        display.value += e.target.textContent;

    })
})

function solveProblem() {
    enterSum.addEventListener('click', () => {
        if (operator === "+") {
            return display.value = firstOperand + secondOperand;
        }
        if (operator === "-") {
            return display.value = firstOperand - secondOperand;
        }
        if (operator === "X") {
            return display.value = firstOperand * secondOperand;
        }
        if (operator === "/") {
            return display.value = firstOperand / secondOperand;
        }
    })
}






























//all numbers together
//all operators together
//Use a for loop












