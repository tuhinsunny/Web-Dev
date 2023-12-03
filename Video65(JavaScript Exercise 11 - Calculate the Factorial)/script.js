let n = prompt("Enter the number : ")
//Using for loop
// let pro= 1;
// for(let i = 1;i<=n;i++){
//     pro*=i
// }
// alert("The factorial of "+n+" is "+pro);

//Using reduce
//First we have to create an array from 1 to n
let arr = []
for (let i = 1; i <= n; i++) {
    arr.push(i)
}
function pro(a, b) {
    return a * b;
}
let val
if (n == 0)
    val = 1
else
    val = arr.reduce(pro)

alert("The factorial is " + val)