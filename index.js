let input1 = document.getElementById ("Number1Id")
let input2 = document.getElementById ("Number2Id")
let operationButtons = document.getElementsByClassName("buttonClass")

function makeOperation(operationCode) {
    let number1 = Number (input1.value)
    let number2 = Number (input2.value)

    if (operationCode === '+') {
        let result = number1 + number2
        alert (result)
    } else if (operationCode === "-") {
        let result = number1 - number2
        alert (result)
    } else if (operationCode === "*") {
        let result = number1 * number2
        alert (result)
    } else if (operationCode === "/") {
        let result = number1 / number2
        alert (result)
    } else {
        alert ("unknown")
    }
}

function onOperationButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget
    let operation = clickedElement.innerHTML
    makeOperation (operation)
}

for (let index = 0; index < operationButtons.length; index++) {
    operationButtons[index].addEventListener ("click", onOperationButtonClick)
    
}