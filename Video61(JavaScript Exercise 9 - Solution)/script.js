let random = Math.random()
let a = prompt("Enter first number : ")
let b = prompt("Enter second number : ")
let c = prompt("Enter the operation : ")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(random>0.1){
    //perform correct operation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    //perform wrong operation
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}