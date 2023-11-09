const buttonsEl = document.querySelectorAll('button');
const inputFieldEl = document.getElementById('result');

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener('click', ()=> {
        const buttonValue = buttonsEl[i].textContent;
        if(buttonValue === 'C') {
            clearResult()
        } else if(buttonValue === '=') {
            calculateResult()
        } else {
            appendValue(buttonValue)
        }
    })
}

function clearResult() {
    inputFieldEl.value = '';
}

function calculateResult() {
    inputFieldEl.value = eval(inputFieldEl.value) /*calculates the equation entered in input field*/
}

function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue /*appends the values in the input field e.g. 5623 */
}