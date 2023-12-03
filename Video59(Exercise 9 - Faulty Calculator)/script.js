/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> *


It performs wrong operation 10% of the times

*/
function add(a, b) {
    a= Number(a);
    b= Number(b);
    console.log(a+b)
}
function sub(a, b) {
    console.log(a - b)
}
function pro(a, b) {
    console.log(a * b)
}
function div(a, b) {
    console.log(a / b)
}
let x = Math.random()
let a = prompt("Enter the first number")
let b = prompt("Enter the second number")
let c = prompt("Enter the operation : +,-,*,/ ")
if (c == "+") {
    if (x < 0.1)
        sub(a, b)
    else
        add(a, b)
}
else if (c == "-") {
    if (x < 0.1)
        div(a, b)
    else
        sub(a, b)
}
else if (c == "/") {
    if (x < 0.1)
        pro(a, b)
    else
        div(a, b)
}
else {
    if (x < 0.1)
        add(a, b)
    else
        pro(a, b)
}