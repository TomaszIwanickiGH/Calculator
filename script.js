const res = document.getElementById("display-message")
let result = ""

const checkIfChar = () => {
    if (result[result.length - 1] !== '+' &&
        result[result.length - 1] !== '-' &&
        result[result.length - 1] !== '*' &&
        result[result.length - 1] !== '/' &&
        result[result.length - 1] !== ','
    ) return true
}

document.querySelector("#n0").addEventListener("click", () => {
    result += "0"
    res.innerHTML = result
})
document.querySelector("#n1").addEventListener("click", () => {
    result += "1"
    document.getElementById("display-message").innerHTML = result
})
document.querySelector("#n2").addEventListener("click", () => {
    result += "2"
    document.getElementById("display-message").innerHTML = result
})
document.querySelector("#n3").addEventListener("click", () => {
    result += "3"
    document.getElementById("display-message").innerHTML = result
})
document.querySelector("#n4").addEventListener("click", () => {
    result += "4"
    document.getElementById("display-message").innerHTML = result
})
document.querySelector("#n5").addEventListener("click", () => {
    result += "5"
    document.getElementById("display-message").innerHTML = result
})
document.querySelector("#n6").addEventListener("click", () => {
    result += "6"
    document.getElementById("display-message").innerHTML = result
})
document.querySelector("#n7").addEventListener("click", () => {
    result += "7"
    document.getElementById("display-message").innerHTML = result
})
document.querySelector("#n8").addEventListener("click", () => {
    result += "8"
    document.getElementById("display-message").innerHTML = result
})
document.querySelector("#n9").addEventListener("click", () => {
    result += "9"
    document.getElementById("display-message").innerHTML = result
})

document.querySelector("#add").addEventListener("click", () => {
    if (result.length !== 0) {
        if (checkIfChar()) result += "+"
        document.getElementById("display-message").innerHTML = result
    } else
        document.getElementById("display-message").innerHTML = "0"
})
document.querySelector("#subtract").addEventListener("click", () => {
    if (result.length !== 0) {
        if (checkIfChar()) result += "-"
        document.getElementById("display-message").innerHTML = result
    } else
        document.getElementById("display-message").innerHTML = "0"
})
document.querySelector("#multiply").addEventListener("click", () => {
    if (result.length !== 0) {
        if (checkIfChar()) result += "*"
        document.getElementById("display-message").innerHTML = result
    } else
        document.getElementById("display-message").innerHTML = "0"
})
document.querySelector("#divide").addEventListener("click", () => {
    if (result.length !== 0) {
        if (checkIfChar()) result += "/"
        document.getElementById("display-message").innerHTML = result
    } else
        document.getElementById("display-message").innerHTML = "0"
})

const comma = document.querySelector("#comma").addEventListener("click", () => {
    if (result.length !== 0) {
        if (checkIfChar()) result += ","
        document.getElementById("display-message").innerHTML = result
    } else
        document.getElementById("display-message").innerHTML = "0"
})

const clear = document.querySelector("#clear").addEventListener("click", () => {
    result = ""
    document.getElementById("display-message").innerHTML = "0"
})

document.querySelector("#backspace").addEventListener("click", () => {
    result.length > 0 ? result = result.slice(0, -1) : result = ""
    document.getElementById("display-message").innerHTML = result
    if (result.length === 0) document.getElementById("display-message").innerHTML = "0"
})


document.querySelector("#equals").addEventListener("click", () => {
    if (checkIfChar()) {
        const firstNumber = parseFloat(result.slice(0, result.indexOf("+")))
        const secondNumber = parseFloat(result.slice(result.indexOf("+") + 1, result.length))
        console.log(firstNumber)
        console.log(secondNumber)
        console.log(firstNumber + secondNumber)
    }
})