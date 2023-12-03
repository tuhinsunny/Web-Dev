// console.log("This is String tutorial")
// let a = "Tuhin"
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])
// console.log(a[5]) //undefined
// console.log(a.length) //5
let realname = "tuhin"
let friend = "mukesh"
console.log("His name is " + realname + " and her name is " + friend)//His name is tuhin and her name is mukesh
console.log(`His name is ${realname} and her name is ${friend}`)//His name is tuhin and her name is mukesh

let b = "Shivam"
console.log(b.toUpperCase()) //SHIVAM
console.log(b.toLowerCase()) //shivam
console.log(b.length)//6
console.log(b.slice(1,5)) //hiva ... It is similar to substring in Java
console.log(b.slice(2)) //ivam
console.log(b.replace("Sh","Tu")) //Tuivam    .. AGar 2 or zyada occurences hoga to pehle wala hi replace hoga
console.log(b.concat("Tuhin", "Rahul","Hello")) //ShivamTuhinRahulHello
console.log(b) //Shivam   ..... Strings are immutable we cant change them
console.log(b.charAt(1)) //h
console.log(b.indexOf("hi"))//-1
console.log(b.indexOf("u"))//1