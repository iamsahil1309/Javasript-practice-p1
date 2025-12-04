const input = document.getElementById("input")

function check () {
    let value = input.value
    let reverse = reverseStr(value)

    reverse === value ? alert("yes, its a palindrom") : alert("no")
}

function reverseStr (val) {
    return val.split("").reverse().join("")
}