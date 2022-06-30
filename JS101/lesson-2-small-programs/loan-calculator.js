const readline = require('readline-sync');
let loanAmount;
let monthlyInterestRate;
let loanDurationInMonths;

function prompt(message) {
  console.log(`=> ${message}`);
}

function formatNumericalInput(string) {
  string = string.replace(/[,$%]/g, "");
  string = Number(string);
  string = string.toFixed(2);
  return string;
}

function getLoanAmount() {
  prompt("Please enter the loan amount (in dollars): ");
  loanAmount = formatNumericalInput(readline.question());

  while (isNaN(loanAmount) || loanAmount <= 0) {
    console.log("Invalid loan amount.");
    prompt("Please enter a valid loan amount: ");
    loanAmount = formatNumericalInput(readline.question());
  }
}

function getMonthlyInterestRate() {
  prompt("Please enter the Annual Percentage Rate (APR) (e.g. '5' for 5%): ");
  let loanAPR = formatNumericalInput(readline.question());
  while (isNaN(loanAPR) || loanAPR <= 0) {
    console.log("Invalid APR.");
    prompt("Please enter a valid APR: ");
    loanAPR = formatNumericalInput(readline.question());
  }
  monthlyInterestRate = loanAPR / 12 / 100;
}

function askLoanMonthsOrYears() {
  prompt("Do you want to enter a loan duration in months or years?\n1) Months 2) Years");
  let loanScheduleType = readline.question();
  while (!['1', '2'].includes(loanScheduleType.toString())) {
    console.log("Invalid Input.");
    prompt("Please enter '1' for Months or '2' for Years");
    loanScheduleType = readline.question();
  }
  return loanScheduleType;
}

function getLoanDurationInMonths() {
  let loanScheduleType = askLoanMonthsOrYears();
  if (loanScheduleType === '1') {
    prompt("Please enter the length of your loan in months: ");
    loanDurationInMonths = Number(readline.question());
    while (isNaN(loanDurationInMonths) || loanDurationInMonths <= 0) {
      console.log("Invalid loan duration.");
      prompt("Please enter a valid loan duration: ");
      loanDurationInMonths = Number(readline.question());
    }
  } else {
    prompt("Please enter the length of your loan in years: ");
    loanDurationInMonths = Number(readline.question()) * 12;
    while (isNaN(loanDurationInMonths) || loanDurationInMonths <= 0) {
      console.log("Invalid loan duration.");
      prompt("Please enter a valid loan duration: ");
      loanDurationInMonths = Number(readline.question()) * 12;
    }
  }
}

function calculateMonthlyPayment(amt, interest, dur) {
  let payment = (amt * (interest / (1 - Math.pow((1 + interest), (-dur)))));
  payment = payment.toFixed(2);
  return payment;
}

console.log("*** Welcome to the Mortgage Calculator! ***\n");
getLoanAmount();
getMonthlyInterestRate();
getLoanDurationInMonths();

console.log("Calculating...");
let monthlyPayment = calculateMonthlyPayment(loanAmount, monthlyInterestRate,
  loanDurationInMonths);
console.log(`Your monthly payment will be $${monthlyPayment}`);