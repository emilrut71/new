let currentNumber = '0';

function updateDisplay(number = '0'){
    const caro = document.getElementById('display');
    caro.type = "text";
    caro.value = number;
}

function numberPress(number) {
    currentNumber === '0' ? currentNumber = number : currentNumber += number;
    updateDisplay(currentNumber);
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
        updateDisplay();
    }else if(btnId = percent){
        currentNumber = currentNumber * 0.01;
        updateDisplay(currentNumber);
    }
}

document.querySelectorAll(".key").forEach(
 carolus => {
     carolus.addEventListener('click', () => handleButtonPress(carolus.id))
 });

