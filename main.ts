#! /usr/bin/env node
import inquirer from "inquirer";
import chalk, { Chalk } from "chalk";
// word counter project

const ans :{
    Sentence:string
}= await inquirer.prompt([
       {
        name: "Sentence",
        type: "input",
        message: chalk.magenta("Enter your sentence to count the word:")

       } 
    ])
    let words = ans.Sentence.trim().split(" ");
        console.log(words);
    console.log(chalk.yellowBright(`your Sentence words Counting Is :${words.length}`));

     
     
