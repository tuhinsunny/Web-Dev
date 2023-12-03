function nice(name){
    console.log("Hey "+name+" you are nice!");
}
function sum(a,b) {
    console.log("SUM = "+(a+b))
}
function sub(a,b){
    return a-b
}
function pro(a, b=5){ //b is an optional parameter
    console.log(a*b)
}
nice("Tuhin")
nice("Lolu")
nice("Golu")
sum(5,6) //11
sum("Tuhin","Hello")//TuhinSohini
x= sub(5,2)
y = sub("Tuhin","Tuhiniiii")
console.log(x)//3
console.log(y)//NaN
pro(3)//15
pro(3,9)//27
pro()//NaN : Not a Number : If we dont pass a value

//we can put a function inside the variable
const funct1 =(a)=>{
    console.log("I am an arrow function",a)
}
funct1(34)
funct1(56)
// I am an arrow function 34
// I am an arrow function 56