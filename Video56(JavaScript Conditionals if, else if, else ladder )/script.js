/*console.log("Hello welcome to JS");
let age = 45
let grace  = 2
console.log(age+grace)
console.log(age-grace)
console.log(age*grace)
console.log(age/grace)
console.log(age%grace)
console.log(age**grace) // 45 to the power 2

// shorthand and assignment operator
let a=54
let b =2
a+=b //a=a+b
console.log(a)
a=54
a-=b //a=a-b
console.log(a)
a=54
a*=b //a=a*b
console.log(a)
a=54
a/=b //a=a/b
console.log(a)
a=54
a**=b //a=a**b
console.log(a)*/
//Output of thr above
// Hello welcome to JS
// 47
// 43
// 90
// 22.5
// 1
// 2025
// 56
// 52
// 108
// 27
// 2916

//comparison operator : == , != , === ,!== ,>, <, >= , <=, ?
let a=6
if(a%2 == 0)
console.log(a+" is even")
else
console.log(a+" is odd")
let age = 45
if(age>40){
    console.log("You cannot Drive");
}
else{
    console.log("You can drive");
}

//Output :
// 6 is even
// You cannot Drive

//== only compares the value wheres === compares both the value and the type
console.log("3"==3)//true
console.log("3"===3)//false
console.log("3"==="3")//true

//Logical Operators : && ,|| , ! : Logical AND, Logical OR, logical NOT
 
//Ternary Operators
let x =5, y=6
let c
c = (x>y)? (x-y) : (y*x)
console.log(c)//30