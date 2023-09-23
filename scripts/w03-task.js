/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1, num2){
    return num1 + num2;
}

function addNumbers(){

    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2)
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function substract(num1, num2){
    return num1 - num2;
}

function subtractNumbers(){
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = substract(subNumber1, subNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (num1, num2) => num1 * num2;

const multiplyNumbers = () => {
    let mulNumber1 = Number(document.querySelector('#factor1').value);
    let mulNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(mulNumber1, mulNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (num1, num2) => num1 / num2

const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
let currentDate = new Date()
let currentYear = currentDate.getFullYear();

let yearElement = document.querySelector('#year').value;
yearElement = currentYear

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

// Numbers in array
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let arrayElement = document.getElementById('array');
arrayElement.innerHTML += numbersArray

/* Output Odds Only Array */

// Odd numbers in array
let oddNumbers = numbersArray.filter((number) => number % 2 !== 0 );
let oddElement = document.getElementById('odds');
oddElement.innerHTML += oddNumbers

/* Output Evens Only Array */

// Even numbers in array
let evenNumbers = numbersArray.filter((number) => number % 2 ==0);
let evenElement = document.getElementById('evens');
evenElement.innerHTML += evenNumbers;

/* Output Sum of Org. Array */
// Sum of numbers in array 

sumOfArray = numbersArray.reduce((sum, number) => sum + number)
console.log(sumOfArray);
let sumElement = document.getElementById('sumOfArray');
sumElement.innerHTML = sumOfArray

/* Output Multiplied by 2 Array */

multipliedArray = numbersArray.map((number) => number * 2);
multipliedElement = document.getElementById('sumOfMultiplied');
multipliedElement.innerHTML += multipliedArray;

/* Output Sum of Multiplied by 2 Array */
sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number);


























  