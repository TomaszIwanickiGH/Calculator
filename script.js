const res = document.getElementById("display-message")
let result = ""
let count = 0

const checkIfChar = () => {
    if (result[result.length - 1] !== '+' &&
        result[result.length - 1] !== '-' &&
        result[result.length - 1] !== '*' &&
        result[result.length - 1] !== '/' &&
        result[result.length - 1] !== ','
    ) return true
}

const checkIndexOfChar = () => {
    if (result.includes("+")) return result.indexOf("+")
    if (result.includes("-")) return result.indexOf("-")
    if (result.includes("*")) return result.indexOf("*")
    if (result.includes("/")) return result.indexOf("/")
}

const calculate = (first, second) => {
    if (result.includes("+")) return first + second
    if (result.includes("-")) return first - second
    if (result.includes("*")) return first * second
    if (result.includes("/")) return first / second
}

document.querySelector("#n0").addEventListener("click", () => {
    if (result.length >= 1) {
        result += "0"
        res.innerHTML = result
    }
    else {
        result = ""
        res.innerHTML = "0"
    }
})
document.querySelector("#n1").addEventListener("click", () => {
    result += "1"
    res.innerHTML = result
})
document.querySelector("#n2").addEventListener("click", () => {
    result += "2"
    res.innerHTML = result
})
document.querySelector("#n3").addEventListener("click", () => {
    result += "3"
    res.innerHTML = result
})
document.querySelector("#n4").addEventListener("click", () => {
    result += "4"
    res.innerHTML = result
})
document.querySelector("#n5").addEventListener("click", () => {
    result += "5"
    res.innerHTML = result
})
document.querySelector("#n6").addEventListener("click", () => {
    result += "6"
    res.innerHTML = result
})
document.querySelector("#n7").addEventListener("click", () => {
    result += "7"
    res.innerHTML = result
})
document.querySelector("#n8").addEventListener("click", () => {
    result += "8"
    res.innerHTML = result
})
document.querySelector("#n9").addEventListener("click", () => {
    result += "9"
    res.innerHTML = result
})

document.querySelector("#add").addEventListener("click", () => {
    if (result.length !== 0) {
        if (checkIfChar()) result += "+"
        res.innerHTML = result
        document.getElementById("add").disabled = true
        document.getElementById("subtract").disabled = true
        document.getElementById("multiply").disabled = true
        document.getElementById("divide").disabled = true
    } else
        res.innerHTML = "0"
})
document.querySelector("#subtract").addEventListener("click", () => {
    if (result.length !== 0) {
        if (checkIfChar()) result += "-"
        res.innerHTML = result
        document.getElementById("add").disabled = true
        document.getElementById("subtract").disabled = true
        document.getElementById("multiply").disabled = true
        document.getElementById("divide").disabled = true
    } else
        res.innerHTML = "0"
})
document.querySelector("#multiply").addEventListener("click", () => {
    if (result.length !== 0) {
        if (checkIfChar()) result += "*"
        res.innerHTML = result
        document.getElementById("add").disabled = true
        document.getElementById("subtract").disabled = true
        document.getElementById("multiply").disabled = true
        document.getElementById("divide").disabled = true
    } else
        res.innerHTML = "0"
})
document.querySelector("#divide").addEventListener("click", () => {
    if (result.length !== 0) {
        if (checkIfChar()) result += "/"
        res.innerHTML = result
        document.getElementById("add").disabled = true
        document.getElementById("subtract").disabled = true
        document.getElementById("multiply").disabled = true
        document.getElementById("divide").disabled = true
    } else
        res.innerHTML = "0"
})

const comma = document.querySelector("#comma").addEventListener("click", () => {
    if (result.length !== 0) {
        if (checkIfChar()) result += "."
        res.innerHTML = result
    } else
        res.innerHTML = "0"
})

const clear = document.querySelector("#clear").addEventListener("click", () => {
    result = ""
    res.innerHTML = "0"
    document.getElementById("add").disabled = false
    document.getElementById("subtract").disabled = false
    document.getElementById("multiply").disabled = false
    document.getElementById("divide").disabled = false
})

document.querySelector("#backspace").addEventListener("click", () => {
    result.length > 0 ? result = result.slice(0, -1) : result = ""
    res.innerHTML = result
    if (result.length === 0) res.innerHTML = "0"
    if (!checkIndexOfChar()) {
        document.getElementById("add").disabled = false
        document.getElementById("subtract").disabled = false
        document.getElementById("multiply").disabled = false
        document.getElementById("divide").disabled = false
    }
})

document.querySelector("#equals").addEventListener("click", () => {
    if (checkIndexOfChar() && checkIfChar()) {
        const firstNumber = parseFloat(result.slice(0, checkIndexOfChar()))
        const secondNumber = parseFloat(result.slice(checkIndexOfChar() + 1, result.length))
        result = calculate(firstNumber, secondNumber)
        res.innerHTML = result
        document.getElementById("add").disabled = false
        document.getElementById("subtract").disabled = false
        document.getElementById("multiply").disabled = false
        document.getElementById("divide").disabled = false
    } else {
        result = ""
        res.innerHTML = "0"
    }
})