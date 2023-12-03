// for(let i = 1 ; i<100 ;i++){
//     console.log(i+" ")
// }
//This will print from 1 to 99

let obj = {
    name: "Tuhin Chandra",
    year : "2nd Year 3rd Sem",
    stream: "CSE"
}
for(let i in obj){ //Syntax : for(key in object){}
    const value = obj[i]
    console.log(i,value)
}
//Output :
// name Tuhin Chandra
// year 2nd Year 3rd Sem
// stream CSE

// for(const c of "TUHIN"){ Syntax : for(variable of Iterable){}
    // console.log(c)
// }
//It will print the charactewrs of TUHIN

// let i =1
// while(i<10){
//     console.log(i);
//     i++;
// }

// do while is also same as that in java or c++
