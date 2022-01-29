const calcBtns = document.querySelectorAll('.calc-btns');

const display = document.getElementById('display-screen');
const numOne = document.getElementById('one');

//numOne.addEventListener('click', (e) => {
//console.log(e.target.textContent);
//display.value = e.target.textContent;
//});

calcBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        display.value += e.target.textContent;
    })
})












//all numbers together
//all operators together
//Use a for loop












