function userProfile() {
    let username = prompt("Enter your username:");
    let age = prompt("Enter your age:");
    let movies = prompt("Enter your favorite movies separated by commas:").split(",");

    console.log(`User: ${username}, Age: ${age}`);
    movies.forEach(movie => {
        console.log(`The film ${movie.trim()} is one of my favorites.`);
    });
}

userProfile();

function highestNumber() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        let num = parseFloat(prompt("Enter a number:"));
        numbers.push(num);
    }
    let highest = Math.max(...numbers);
    console.log(`The highest number is: ${highest}`);
}

highestNumber();

function setAlarm() {
    let seconds = parseInt(prompt("Enter the number of seconds for the alarm:"));
    let message = prompt("What message do you want to show when the time is up?");

    setTimeout(() => {
        console.log(`${message} after ${seconds} seconds.`);
    }, seconds * 1000);
}

setAlarm();

function isPalindrome() {
    let input = prompt("Enter a word or sentence:");
    let cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/gi, '');

    let reversedInput = cleanedInput.split('').reverse().join('');
    if (cleanedInput === reversedInput) {
        console.log(`"${input}" is a palindrome.`);
    } else {
        console.log(`"${input}" is not a palindrome.`);
    }
}

isPalindrome();

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

function factorialPrompt() {
    let n = parseInt(prompt("Enter an integer greater than or equal to 1:"));
    console.log(`Factorial of ${n} is ${factorial(n)}`);
}

factorialPrompt();

let multiDimension = [1, [2, 3, [4, 5, [6]]]];

function flattenArray(array) {
    return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}

console.log(flattenArray(multiDimension));