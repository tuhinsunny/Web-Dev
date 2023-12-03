let arr = [1,2,3,4,5,6,7]
// console.log(arr)
// console.log(arr.length)//7
// //Arrays are mutable. We can change them
// console.log(arr[1])//2
// arr[0]=5666
// console.log(arr) // in array 1 will change to 5666

// //In strings we cannot change the characters so they are immutable
// let ch = "Tuhin"
// ch[0] = "C"
// console.log(ch)//Tuhin
// console.log(typeof arr) //object.... Javascript will show the type of array as object

// console.log(arr.toString()) //1,2,3,4,5,6,7
// console.log(arr.join(" and "))// The array will be joined by whatever is written inside
// //1 and 2 and 3 and 4 and 5 and 6 and 7
// console.log(arr.pop()) //7    Last element will be popped
// console.log(arr) //[ 1, 2, 3, 4, 5, 6 ]
// arr.push(54)
// arr.push("Sunny")
// console.log(arr)//[ 1, 2, 3, 4, 5, 6, 54, 'Sunny' ]
// arr.shift() //pehle wale element ko nikal leta hai
// console.log(arr) //[ 2, 3, 4, 5, 6, 54, 'Sunny' ]
// arr.unshift("Jack")//pehle add kar deta hai
// console.log(arr)//[ 'Jack', 2, 3, 4, 5, 6, 54, 'Sunny' ]

// //unshift push ka bhai hota hai aur shift pop ka bhai hai
// delete arr[3]
// console.log(arr)//[ 'Jack', 2, 3, <1 empty item>, 5, 6, 54, 'Sunny' ] : array mein memory allocated hai lekin value nahi hai

// let a = [1,2,3,4,5,6]
// let b = ["a","abcd",54]
// let c =[123,46]
// let d = c.concat(a,b)
// console.log(d)
// Output :
// [
//     123,    46, 1,
//     2,      3,  4,
//     5,      6,  'a',
//     'abcd', 54
//   ]

// let numbers = [1,2,3,4,5,6]
// numbers.splice(1,2) // Iska matlab yeh hai ki 1st position se 2 elements delete kardo. We can also print the deleted elements directly
// console.log(numbers) //[ 1, 4, 5, 6 ]

// numbers.splice(1,2,333,444) //1st position se 2 elements delete kardo aur uski jagah pe 333 aur 444 add kardo
// console.log(numbers) //[ 1, 333, 444, 4, 5, 6 ]

const sum =[1,2,3,4,5]
//slice creates a new array
const num = sum.slice(2)
console.log(num)//[ 3, 4, 5 ] 2nd position se start karo aur end tak elements store karlo
const num2 = sum.slice(1,4)
console.log(num2)//[ 2, 3, 4 ]  1st position se start karo aur 3rd index tak jao not including the 4th index
