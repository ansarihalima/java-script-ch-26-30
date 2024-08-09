//////////////////////////Question 1


function processNumber() {
  
    var numberInput = document.getElementById('numberInput').value;
    var number = parseFloat(numberInput);

    if (isNaN(number) || number < 0) {
        alert('Please enter a positive integer.');
        return;
    }

    const rounded = Math.round(number);
    const floored = Math.floor(number);
    const ceiled = Math.ceil(number);

    document.getElementById('originalNumber').textContent = `Number: ${number}`;
    document.getElementById('roundedNumber').textContent = `Round off value: ${rounded}`;
    document.getElementById('flooredNumber').textContent = `Floor value: ${floored}`;
    document.getElementById('ceiledNumber').textContent = `Ceil value: ${ceiled}`;
}

////////////////////////Question 2

function processNum() {
   
    const numberInput = document.getElementById('valueInput').value;
    const number = parseFloat(numberInput);

    if (isNaN(number) || number >= 0) {
        alert('Please enter a negative floating-point number.');
        return;
    }
    const rounded = Math.round(number);
    const floored = Math.floor(number);
    const ceiled = Math.ceil(number);

 
    document.getElementById('originalNum').textContent = 'Number: ' + number;
    document.getElementById('roundedNum').textContent = 'Round off value: ' + rounded;
    document.getElementById('flooredNum').textContent = 'Floor value: ' + floored;
    document.getElementById('ceiledNum').textContent = 'Ceil value: ' + ceiled;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitButton').addEventListener('click', processNum);
});


////////////////////////Question 3

function calculateAbsoluteValue() {
   
    const numberInput = document.getElementById('nInput').value;
    const number = parseFloat(numberInput);

    if (isNaN(number)) {
        alert('Please enter a valid number.');
        return;
    }

   
    const absoluteValue = Math.abs(number);

    
    document.getElementById('absoluteValue').textContent = `Absolute value: ${absoluteValue}`;
}


document.getElementById('calculateButton').addEventListener('click', calculateAbsoluteValue);

////////////////////////Question 4

function rollDice() {
          
    const diceValue = Math.floor(Math.random() * 6) + 1;
   
    document.getElementById('diceResult').textContent = `Dice rolled: ${diceValue}`;
}
document.getElementById('rollDiceButton').addEventListener('click', rollDice);


////////////////////////Question 5

function tossCoin() {
    const randomValue = Math.random();
    const coinResult = randomValue < 0.5 ? 'Heads' : 'Tails';
    
    
    document.getElementById('coinResult').textContent = `Coin result: ${coinResult}`;
}

document.getElementById('tossCoinButton').addEventListener('click', tossCoin);

////////////////////////Question 6

function generateRandomNumber() {

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('randomNumber').textContent = `Random number: ${randomNumber}`;
}


document.getElementById('generateNumberButton').addEventListener('click', generateRandomNumber);

////////////////////////Question 7

function checkWeight() {
    
    const userInput = prompt("Enter Your Weight");
    const weight = parseFloat(userInput);

    document.getElementById("weightDisplay").innerText = isNaN(weight) 
        ? "Invalid weight input." 
        : `Your weight is ${weight} kg`;
}

////////////////////////Question 8

function guessNumber() {
    
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    const userInput = prompt("Guess a number between 1 and 10");
    const userNumber = parseInt(userInput, 10);

   
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
        document.getElementById("result1").innerText = "Please enter a valid number between 1 and 10.";
    } else if (userNumber === secretNumber) {
        document.getElementById("result1").innerText = "Congratulations! You guessed the correct number!";
    } else {
        document.getElementById("result1").innerText = `Sorry, the correct number was ${secretNumber}.`;
    }
}
// Combined window.onload handler
window.onload = function() {
    checkWeight();
    guessNumber();
};