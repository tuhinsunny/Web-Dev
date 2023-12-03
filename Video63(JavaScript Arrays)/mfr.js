let arr = [1,3,5,7,9,11]
let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element**2)
// }

// newArr = arr.map((e, index, arr)=>{
//     return e**2
// }
// )

// console.log(newArr) //[ 1, 9, 25, 49, 81, 121 ]

// const greaterThanSeven = (e)=>{
//     if(e>7)
//     return true;
// else
// return false;
// }
// console.log(arr.filter(greaterThanSeven)) //[ 9, 11 ]

//reduce method : It reduces the array to a single element
function add(a,b){
    a=Number(a)
    b=Number(b)
    return a+b
}
const n = [1,5,9,12]
let sum = n.reduce(add)//27
console.log(sum)

let a = Array.from("Tuhin")
 console.log(a) //[ 'T', 'u', 'h', 'i', 'n' ] Used to create array from objects
