console.log('testing')

// additional control flow concept, switch statements

const day = new Date().getDay()
const literalDate = new Date().toDateString()

console.log(day)
console.log(literalDate)

switch (day) {
    case 1:
        console.log('its monday...')
        break;
    case 2:
        console.log('its tuessssssday')
        break;
    case 3:
        console.log('Wednesday, officially the middle of the week!')
        break;
    case 4:
        console.log('Thursday, one more day til friday!')
        break;
    case 5:
        console.log('ITS FRIDAY')
        break;
    default:
        console.log('chilling on the weeeeekend.')
        break;
}

// Literal Day Ex:
switch (literalDate.slice(0,3)) {
    case 'Mon':
        console.log('its monday...')
        break;
    case 'Tue':
        console.log('its tuessssssday')
        break;
    case 'Wed':
        console.log('Wednesday, officially the middle of the week!')
        break;
    case 'Thu':
        console.log('Thursday, one more day til friday!')
        break;
    case 'Fri':
        console.log('ITS FRIDAY')
        break;
    default:
        console.log('chilling on the weeeeekend.')
        break;
}

// Objects (Python Dictionaries)
const person = {
    'name': 'christian',
    'age': 27,
    'fav_color': 'purple'
}

// accessing data in objects
console.log(person['name']) // Bracket Notation
console.log(person.name) // Dot Notation

// Inclass Exercise #1 (Get the Value 'Manchester United')
const person2 = {
    name: "Max",
    age: 31,
    prog_languages: ["JavaScript", "Python", "C++", "Java"],
    fav_color: "Blue",
    teams: [
      {
        baseball: "Chicago White Sox",
        football: "Chicago Bears",
        hockey: "Chicago Blackhawks",
        basketball: ["Chicago Bulls", "Chicago Sky"],
        soccer: ["Chicago Fire", "Naperville Yellowjacks"],
      },
      {
        baseball: "Toronto Bluejays",
        football: "LA Rams",
        basketball: "Milwalkee Bucks",
        soccer: ["Manchester United", "Liverpool"],
      },
    ],
  };

  // JS Object Methods
  // Python: dict.keys(), dict.values()
console.log(Object.keys(person2))
console.log(Object.values(person2))

// looping an object using for in
// for in: iterates over keys in object or indices in array
for(let key in person2){
    console.log(key, person2[key])
}

// Creating a JS Class
class Team {

    constructor(city, name){
        this.city = city
        this.name = name
    }
    
    printInfo = () => {
        return `The ${this.name} are from the city ${this.city}.`
    }
}

// creating an instance of the Team Class
const team1 = new Team('LA', 'Lakers')
console.log(team1.printInfo())

// inheriting from Team class using 'extends'
class Player extends Team {
    constructor(city, name, player_name){
        super(city, name)
        this.player_name = player_name
    }

    printInfo = () => {
        return `${this.player_name} plays for the ${this.city} ${this.name}.`
    }
}

const player1 = new Player('Golden State', 'Warriors', 'Jag')
console.log(player1.printInfo())

// Javascript Closures/Lexical Scoping
// Help you maintain a state that you can use later
function a(){
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return `${grandpa}, ${father}, ${son}`
        }
    }
}

const step_one = a()
console.log(step_one)
const step_two = step_one()
console.log(step_two)
const step_three = step_two()
console.log(step_three)

// self-invoking
console.log(a()()())

// ASYNC Javascript Section
// Synchronous vs Asynchronous
// Sync Example
let sync_a = 1;
let sync_b = 2;
let sum = sync_a + sync_b
console.log(sum)

// Javascript Callbacks
// a Callback is a function that is passed inside another function, and then called in that function to perform a task.

// Async Example
console.log('im logging first.')
console.log('im logging second.')
// Syntax: setTimeout(function, delay)
setTimeout(() => {
    console.log('im logging third')
}, 3000)
console.log('im logging last.')

/* 
although callbacks give us more functionality 
they also introduce their own problems known as "callback hell". 
To fix this, promises were introduced.
*/

// Javascript Promises
/*
Syntax: new Promise((resolve, reject) => {}) 
a Promise is something that will take some time to do.
There are two possible outcomes of a promise.
-- Resolve/Fulfilled = Success
-- Reject = Error
*/

const is_even = (num) => {
    return new Promise((resolve, reject) => {
        const calculation = num / 2 * 5 - 1 + 3
        setTimeout(() => {
            if (calculation % 2 == 0){
                resolve('True, The number is even!')
            } else {
                reject('False...')
            }
        }, 4000)
    }
)}

// const response = is_even(12)
// console.log(response)
// setTimeout(() => {console.log(response)}, 5000)

// 2 ways to handle promise finishing
// first way using callbacks: .then(resolved) / .catch(reject)
is_even(1)
.then((response) => {
    console.log('We got a response using .then()!', response)
})
.catch((response) => {
    console.log('We got a response using .catch()!', response)
})

// second way using async/await (ES6)
// Syntax: const response = async () => { await }
/* 
NOTE: async just means it takes time to perform this operation 
You can only use await with async functions
*/

const pay_taxes = (salary) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (salary < 100000) {
                resolve('You pay NO taxes this year!')
            } else {
                reject('You pay 10% in taxes this year!')
            }
        }, 4000)
    })
}

const tax_checker = async (num) => {
    const response = await pay_taxes(num)
    console.log(response)
}

tax_checker(1000000)
