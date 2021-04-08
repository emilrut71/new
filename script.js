let currentNumber = '0';
let numbers = [];
let operations = [];
let operationMode = false;


function updateDisplay(number = '0'){
    const caro = document.getElementById('display');
    caro.type = "text";
    caro.value = number;
}

function calculate(){
    let total = '0';
    for (let i = 0; i < numbers.length; i++){
        if(i === 0){
            total = Number.parseFloat(numbers[i]);
        }else {
            total = operate(total, Number.parseFloat(numbers[i]), operations[i-1]);
        }
    }
    return `${total}`;
}

function reset(num = '0'){
    numbers = [];
    operations = [];
    currentNumber = num;
}

function operate(number1, number2, op){
    switch (op) {
        case 'add':
            return number1 + number2;
        case 'subtract':
                return number1 - number2;
        case 'multiply':
                return number1 * number2;  
        case  'divide':
                return number1 / number2;
        default: 
            return '0';
    }
}

function numberPress(number) {
    currentNumber === '0' ? currentNumber = number : currentNumber += number;
    updateDisplay(currentNumber);
    operationMode = true;
}

function operatorPress(op) {
    if(!operationMode) {
        return;
    }
    operations.push(op);
    numbers.push(currentNumber);
    if(op === 'equal'){
        currentNumber = calculate();
        updateDisplay(currentNumber);
        reset(currentNumber);
    } else {
        currentNumber = '0';
        updateDisplay(currentNumber);
        operationMode = false;
    }
    
    
} 

function handleButtonPress(btnId){
    if(btnId === 'dot')
    {
        currentNumber = currentNumber + '.';
        updateDisplay(currentNumber);
    } else if (btnId === 'negate') 
    {
        currentNumber = -currentNumber;
        updateDisplay(currentNumber);
    } else if (!isNaN(Number.parseInt(btnId))) {
        numberPress(btnId)
    } else if (btnId === 'clear') {
        reset();
        updateDisplay();
    }else if(btnId === 'percent'){
        currentNumber = currentNumber * 0.01;
        updateDisplay(currentNumber);
    } else {
        operatorPress(btnId);
    }
}

document.querySelectorAll(".key").forEach(
 carolus => {
     carolus.addEventListener('click', () => handleButtonPress(carolus.id))
 });
