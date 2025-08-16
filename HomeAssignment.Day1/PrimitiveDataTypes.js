var city ='Thiruvannamalai'
console.log("I live in" + city)
console.log("value:", city, "| Type:", typeof city)


const marks=50
console.log("Marks + 10:", marks + 10)
console.log("value:", marks, "| Type:", typeof marks)


var isweekend=true
if(isweekend){

    console.log("Relax")
}
else{
    console.log("Work")
}
console.log("value:", isweekend, "| Type:", typeof isweekend)


let futureGoal
console.log(futureGoal)


//Note: In the below example var allows redeclare variable and reassignement
var name="mani"
var name="mani"
console.log(name)


//Note: In the below example let allows redeclare but NOT allows reassignement, 
// "SyntaxError: Identifier 'name' has already been declared" is displayed
let name="mani"
let name="mani"
console.log(name)