alert("hello World!"); //Will display an alert on reloading the website
console.log("Code is Running....") //will display this in the console
console.log("Code is also Running....")
console.log("Code is looking like a Wow....")

var a = prompt("Enter your Number ") // stores the value in the variable. the value will be accepted from a prompt
var isTrue = prompt("Are you sure u want to leave this page and burn this computer?")
if(isTrue){
    console.log("Computer is Blasting")
}
else{
    console.log("Computer is not Blasting") 
}
console.log("Your number is "+a)
document.title = "This is script.js" //We can change the document title
document.body.style.backgroundColor = "red" //The bg color will change . This adds inline CSS