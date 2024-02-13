import inquirer from 'inquirer';
type anstype = {
    userGuess:number
}
const systemGenerateNo = Math.floor(Math.random() *10)
console.log(systemGenerateNo)
const answers:anstype = await   inquirer.prompt([{
    type:"number",
    name:"userGuess",
    message:"Please enter Guessed Number"
}])
const {userGuess} = answers;
if(userGuess === systemGenerateNo){
    console.log("your win")
}else{
    console.log("try again")
}