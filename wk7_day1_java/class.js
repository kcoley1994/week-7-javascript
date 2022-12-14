// <-- Single Line Comment, Logging to the console (same as printing to terminal in Python)
console.log('Intro to javascript!');

/*
Multi
Line
Comment
*/

// declaring a variable using var (the old way)
var x = 5;
var y = 10;
console.log(x + y);

// Reassigning variables
x = 3;
y = 7;
console.log(x + y);

// Use semicolons at the end of your JS code (Or not...)

// Use the typeof operator to see a data type
var int = 5;
var float = 3.12;

console.log(typeof int);
console.log(typeof float);

// strings in js
var cohort = 'thieves';
console.log(typeof cohort, cohort);

// Arrays AKA Python Lists
var instructors = ['christian', 'dylan', 'christopher'];
console.log(typeof instructors, instructors); // it returns object because arrays are a special type of object

// Objects AKA Python Dictionary
var bio = {
    first_name: 'christian',
    'last name': 'askew',
    location: 'New Mexico',
    'age': 27
};

console.log(typeof bio, bio);

// Hoisting
console.log(hoist);
var hoist = 'I\'ve been hoisted!';
console.log(hoist);

// NOTE: Instead of using VAR to define variables, use LET and CONST
// Because of var hoisting behaviors
// LET and CONST are also variable declarations using the ES6 syntax.
// LET vs CONST
// LET allows for reassignment of values (Just like we're used to in Python)
// CONST does NOT allow for reassignment of values

// LET
let fav_num = 3;
console.log(fav_num);
fav_num = 12;
console.log(fav_num);

// CONST
const fav_color = 'purple';
console.log(fav_color);
// fav_color = 'red'; this will NOT work
// console.log(fav_color)

// --------------------- Math Operations ---------------------------

// ---------- Addition ----------
let sum = 5 + 5;
console.log(sum);

// Incrementing += 
sum += 5;
console.log(sum);

// Increment by 1
sum++;
console.log(sum);

// ---------- Subtraction ----------
let diff = 12 - 7;
console.log(diff);

// Decrementing -=
diff -= 3;
console.log(diff);

// Decrementing by 1
diff--;
console.log(diff);

// ---------- Multiplication ----------
let multiply = 5 * 5;
console.log(multiply);

multiply *= 2;
console.log(multiply);

// ---------- Division ----------
let divide = 20 / 5;
console.log(divide);

divide /= 2;
console.log(divide);

// ---------- Exponential ----------
let expo = 5**2;
console.log(expo);

expo **= 2;
console.log(expo);

// // ---------- More Math Operations ----------
// unlike Python, the Math module is a built-in for JS
let floor = Math.floor(12.56);
console.log(floor);

let ceiling = Math.ceil(12.56);
console.log(ceiling);

// Watch out for these behaviors in your code when adding number and string
let num1 = 5;
let num2 = '5';
let final = num1 + num2;
console.log(typeof final, final);

// ---------- Data type conversion ----------
const pie = 3.14;

// parseInt() returns the lowest whole number
console.log(typeof pie, parseInt(pie));

// parseFloat() converts to a decimal
console.log(typeof pie, parseFloat(pie));

// ---------- Javascript Functions ----------
// 3 ways to make functions in JS
// Function Declaration, Function Expression, Arrow Function
// NOTE: Indentation does NOT matter in JS, but its good practice

// Function Declaration
// Very similar to Python
function full_name(first_name, last_name){
    console.log(first_name + ' ' + last_name);
};

full_name('christian', 'askew');

// Function Expression
const nfl_team = function(city, name){
    return city + ' ' + name;
}

console.log(nfl_team('Seattle', 'Seahawks'));

// Arrow Function (Newest way)
const goat_player = (name) => {
    return `The GOAT player will always be ${name}`;
}

console.log(goat_player('michael jordan'));

// ---------- if, else if, else conditional statements ----------
// syntax: if ( condition ) { code block if condition is true }
const check_weather = (temp) => {
    if (temp < 60) {
        return 'It\'s pretty cold outside! #hoodieseason';
    } else if (temp < 80) {
        return 'It\'s a beautiful day! Wear anything you want!';
    } else {
        return 'It\'s cooking outside! Avoid wearing black!';
    }
}

console.log(check_weather(50));

// ---------- Ternary Operators ----------
// Python: (run_this_code_on_true) if (condition) else (run_this_code_on_false)
// JS: (condition) ? (run_this_code_on_true) : (run_this_code_on_false)

const even_or_odd = (num) => {
    return (num % 2 == 0) ? ('Even') : ('Odd');
}

console.log(even_or_odd(11));

// --------------------- JS Loops ---------------------------
// ------- For loops -------
// Syntax: for(variable; condition; incrementor) {code block}

for(let i=0; i < 10; i++) {
    console.log(i);
}

// loop through an array
thieves_students = ['ashley', 'abela', 'taps', 'jag'];

const students = (arr) => {
    for(let i=0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

students(thieves_students);

// loop through an array (ES6)
// for of loop (loops values)
for(let student of thieves_students){
    console.log(student + 'ES6');
}

// for in loop (loops indices)
for(let i in thieves_students){
    console.log(i);
}

// ------- While loops -------
// Syntax: while (condition) {code block}
const testing_while = (num) => {
    while (num < 10) {
        console.log(num);
        num+=2;
    }
}

testing_while(1);

// Do-While Loop
// Syntax: do {code block} while (condition)
// NOTE: Difference between a regular while loop and a do-while, is that the code block will at least run once.
const test_do_while = (num) => {
    do {
        console.log(num);
        num++;
    }
    while (num < 10);
}

test_do_while(15);

// --------------------- JS Array Methods ---------------------------
let artists = ['GIVEON', 'Bruno Mars', 'Chris Brown']

// indexing
console.log(artists[1])

// indexing from the end
// Python: list[-1]
console.log(artists[artists.length-1])

//converting an array to string
console.log(artists.toString())

// joining an array with a seperator
// Python: (seperator).join(list)
console.log(artists.join('$$'))

// slice method in JS (Out of place Algorithm), does NOT effect original array
// Python: list[0:2]
console.log(artists.slice(0,2))
console.log(artists)

// splice method in JS (In Place Algorithm), does effect original array
console.log(artists.splice(1))
console.log(artists)