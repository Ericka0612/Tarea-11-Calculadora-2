const operationEntry = document.querySelector('.selected-number')
const button0 = document.querySelector('.number-0')
const button1 = document.querySelector('.number-1')
const button2 = document.querySelector('.number-2')
const button3 = document.querySelector('.number-3')
const button4 = document.querySelector('.number-4')
const button5 = document.querySelector('.number-5')
const button6 = document.querySelector('.number-6')
const button7 = document.querySelector('.number-7')
const button8 = document.querySelector('.number-8')
const button9 = document.querySelector('.number-9')
const buttonPoint = document.querySelector('.point')
const buttonPower = document.querySelector('.operation-power')
const buttonPercentage = document.querySelector('.operation-percentage')
const buttonClear = document.querySelector('.operation-clear')
const buttonDivide = document.querySelector('.operation-divide')
const buttonMultiply = document.querySelector('.operation-multiply')
const buttonSubstract = document.querySelector('.operation-substract')
const buttonResult = document.querySelector('.operation-result')
const buttonAdd = document.querySelector('.operation-add')

button0.onclick = function() {
    operationEntry.textContent = operationEntry.textContent + '0' 
}

button1.onclick = function() {
    operationEntry.textContent = operationEntry.textContent + '1' 
}

button2.onclick = function() {
    operationEntry.textContent = operationEntry.textContent + '2' 
}

button3.onclick = function() {
    operationEntry.textContent = operationEntry.textContent + '3' 
}

button4.onclick = function() {
    operationEntry.textContent = operationEntry.textContent + '4' 
}

button5.onclick = function() {
    operationEntry.textContent = operationEntry.textContent + '5' 
}

button6.onclick = function() {
    operationEntry.textContent = operationEntry.textContent + '6' 
}

button7.onclick = function() {
    operationEntry.textContent = operationEntry.textContent + '7' 
}

button8.onclick = function() {
    operationEntry.textContent = operationEntry.textContent + '8' 
}

button9.onclick = function() {
    operationEntry.textContent = operationEntry.textContent + '9' 
}

buttonPoint.onclick = function() {
    operationEntry.textContent = operationEntry.textContent + '.' 
}

buttonPower.onclick = function() {
    operationEntry.textContent = operationEntry.textContent + '**' 
}

buttonPercentage.onclick = function() {
    operationEntry.textContent = operationEntry.textContent + '%' 
}

buttonDivide.onclick = function() {
    operationEntry.textContent = operationEntry.textContent + '/' 
}

buttonMultiply.onclick = function() {
    operationEntry.textContent = operationEntry.textContent + '*' 
}

buttonAdd.onclick = function() {
    operationEntry.textContent = operationEntry.textContent + '+' 
}

buttonSubstract.onclick = function() {
    operationEntry.textContent = operationEntry.textContent + '-' 
}

buttonResult.onclick = function() {
    try {
        const operationResult = eval(operationEntry.textContent)
        operationEntry.textContent = operationResult; 
    } catch (error) {
        operationEntry.textContent = 'Syntax ERROR'
    }
}

buttonClear.onclick = function() {
    operationEntry.textContent = ''    
}
