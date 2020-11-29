let buttonPlus = document.getElementById ("buttonPlusId")
let buttonMinus = document.getElementById ("buttonMinusId")
let buttonMultiply = document.getElementById ("buttonMultiplyId")
let buttonDevide = document.getElementById ("buttonDevideId")
let input1 = document.getElementById ("Number1Id")
let input2 = document.getElementById ("Number2Id")

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

buttonPlus.addEventListener ("click", onOperationButtonClick)
buttonMinus.addEventListener ("click", onOperationButtonClick)
buttonMultiply.addEventListener ("click", onOperationButtonClick)
buttonDevide.addEventListener ("click", onOperationButtonClick)