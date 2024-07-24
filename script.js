
function updateDisplay(value) {
    const display = document.querySelector('.display');
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    const display = document.querySelector('.display');
    display.value = '';
}


function calculate() {
    const display = document.querySelector('.display');
    try {
        display.value = eval(display.value); 
    } catch (error) {
        display.value = 'Error'; 
    }
}

document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        const display = document.querySelector('.display');

        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculate();
        } else {
            updateDisplay(value);
        }
    });
});
