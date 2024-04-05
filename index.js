#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result
const randomNumbers = 13;
const answers = await inquirer.prompt([
    {
        name: "userGuessingNumber",
        type: "number",
        message: "please guessa number",
    }
]);
console.log(answers);
if (answers.userGuessingNumber === randomNumbers) {
    console.log("congtrstultion! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
//const randomNumber = Math.floor(Math.random() * 10 + 1);
//console.log(randomNumber);
