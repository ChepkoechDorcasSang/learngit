/*let myName="Dorcas"
myName="Chepkoech"
 myName=5
 
console.log(myName)*/

/*let myNumber =6
 if (myNumber===56){
    console.log("true")
 }
 else{
    console.log("false")
 }*/
 /*let myNumber=5
 let myValue=7
 let sum=myNumber+myValue
 let product=myNumber*myValue
 let division=myNumber/myValue
 let difference=myNumber-myValue
 console.log("\nsum:",sum);
 console.log("\nproduct:",product);
 console.log("\ndivision:",division);
 console.log("\ndifference:",difference);*/
/*function Sum (a ,b){
    let result=a+b
    console.log(result)
}

Sum(5 ,5)
*/
// var name=prompt(Enter yourName);
// var age=prompt(enter yourAge);
// if(
//     age>=18 && age<=72){
//         console.log(yourName + is qualified)
//     }
//     else{
//         console.log(yourAame + is not qualified)
//     }
// yourName=Dorcas;
// yourAge=24;

function DriversLicense(name, age){
    if (age>=18 && age <=72){
        console.log(name, "Eligible");
    }
    else{
        console.log(name, "Not Eligible");
    }
}

DriversLicense("Denis", 78)