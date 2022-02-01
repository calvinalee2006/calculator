const displayScreen = document.getElementById('display-screen');
const numberBtns = document.querySelectorAll(".number");
const calcPad = document.getElementById("calc-btns");

let firstOperand = "";
let secondOperand = "";
let operator = " ";

numberBtns.forEach(number => {
    number.addEventListener('click', event => {
        const digit = event.target
        const firstValue = digit.textContent
        const displayValue = displayValue.textContent

        //now time to get multiple digits

        if (displayScreen === '0') {
            displayScreen.textContent = firstValue
        } else {
            displayScreen.textContent = `${digit} ${displayValue}`;
            console.log(numberBtns)
        }
    })
})


