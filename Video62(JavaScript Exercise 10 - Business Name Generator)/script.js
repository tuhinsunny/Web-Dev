/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

function adjective(){
    let a = "Crazy"
    let b = "Amazing"
    let c = "Fire"
    let d = Math.floor(Math.random()*3)
    if(d==0)return a;
    if(d==1)return b;
    if(d==2)return c;
}
function shopname(){
    let a = "Engine"
    let b = "Foods"
    let c = "Garments"
    let d = Math.floor(Math.random()*3)
    if(d==0)return a;
    if(d==1)return b;
    if(d==2)return c;
}
function anotherword(){
    let a = "Bros"
    let b = "Limited"
    let c = "Hub"
    let d = Math.floor(Math.random()*3)
    if(d==0)return a;
    if(d==1)return b;
    if(d==2)return c;
}

let a = adjective()
let b = shopname()
let c = anotherword()
let newstr = a + " " + b + " " + c
console.log(newstr)