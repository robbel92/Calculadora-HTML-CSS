const displayPreviousValue = document.querySelector('.previous-value');
const displayCurrentValue = document.querySelector('.current-value');
const numbersButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const buttonAc = document.querySelector('.button-ac');


const display = new Display (displayPreviousValue, displayCurrentValue);


numbersButtons.forEach(buttonNumber => {

    buttonNumber.addEventListener('click', () => display.addNumber(buttonNumber.textContent));
})

buttonAc.addEventListener('click', () => {display.deleteAll()});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => display.compute(operatorButton.value));
})
