let num1Box = document.getElementById("num1Box")
let num2Box = document.getElementById("num2Box")
let errorMsg = document.getElementById("errorMsg")
let resultBox = document.getElementById("resultBox")

getNumbers()

function getNumbers(){
    num1 = Math.round((Math.random()) * 10)
    num2 = Math.round((Math.random()) * 10)
    num1Box.textContent = num1
    num2Box.textContent = num2
}

function add(){
    let result = num1 + num2
    resultBox.textContent = result
    errorMsg.textContent = ""
}

function subtract(){
    let result = num1 - num2
    resultBox.textContent = result
    errorMsg.textContent = ""
}

function multiply(){
    let result = num1 * num2
    resultBox.textContent = result
    errorMsg.textContent = ""
}

function divide(){
    if(num2 == 0) {
        errorMsg.textContent = "Error: cannot divide by zero (0)!"
    }
    else {
        let result = num1 / num2
        resultBox.textContent = result
    }
}