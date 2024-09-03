#! /usr/bin/env node

import inquirer from "inquirer";
console.log("\n---- Welcome To Our Mini Currency Converter----\n");

const currency: any = {
    USD: 1, // Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR:280
};

const user_answer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter From Currency",
            type: "list",
            choices: ["USD","EUR","GBP","INR","PKR"]
        },
        {
            name: "to",
            message: "Enter To Currency",
            type: "list",
            choices: ["USD","EUR","GBP","INR","PKR"]
        },
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number"
        }
    ]
);

const fromAmount = currency[user_answer.from];
const toAmount = currency[user_answer.to];
const amount = user_answer.amount;
const baseAmount = amount/fromAmount;
const convertedAmount = baseAmount * toAmount;

// console.log(convertedAmount);
console.log(Math.round(convertedAmount));

console.log("\n\t---- Thanks For Testing Our Project ----\t\n");
