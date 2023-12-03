let arr = [1, 93, 54, 89, 20, 87]
// for(let i = 0 ;i<arr.length;i++){
//     console.log(arr[i])
// }


// arr.forEach((value, index, arr) => {
//     console.log(value,index, arr)
// });
// Output :
// 1 0 [ 1, 93, 54, 89, 20, 87 ]
// 93 1 [ 1, 93, 54, 89, 20, 87 ]
// 54 2 [ 1, 93, 54, 89, 20, 87 ]
// 89 3 [ 1, 93, 54, 89, 20, 87 ]
// 20 4 [ 1, 93, 54, 89, 20, 87 ]
// 87 5 [ 1, 93, 54, 89, 20, 87 ]

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//     const element = obj[key]
//     console.log(element)
//     }
// }
// Output :
// 1
// 2
// 3


for (const iterator of arr) {
    console.log(iterator) // will print all the elements of the array
}
