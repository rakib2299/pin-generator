function getPin () {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
       return pin;
    } else {
        console.log('3 digit pin again here', pin);
        return getPin();
    }
}


function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}


document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } 
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
    
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const success = document.getElementById('notify-success');
    const failed = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        failed.style.display = 'none';
        success.style.display = 'block';
    }
    else {
        success.style.display = 'none';
        failed.style.display = 'block'
    }
}