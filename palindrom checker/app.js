const input = document.getElementById("input")

function check () {
    let value = input.value
    let reverse = value.split("").reverse().join("")

    reverse === value ? alert("yes, its a palindrom") : alert("no")
}

