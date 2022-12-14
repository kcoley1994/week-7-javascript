//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};
const favorite_food =(name) => {
    for(let key in name){
        console.log(` My favorite ${key} is ${name[key]}`)
    }
    
    
    
};
console.log(favorite_food(person3))

//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class
class Person{

    constructor(name,age){
        this.name= name
        this.age = age
    }

    printInfo =() => {
        return `${this.name} will be ${this.age} this year! `
    }
    addAge =(age) => {
        this.age += 1
        return ` ${this.name} will be ${this.age} next year!`
    }
}
const person1 = new Person('Kevon',28)
const person2 = new Person ('Mike', 21)
console.log(person1.printInfo())
console.log(person1.addAge())
console.log(person1.addAge())
console.log(person2.printInfo())
console.log(person2.addAge())
console.log(person2.addAge())
// Use an arrow to create the printInfo method
 

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to 
    determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const greater = (string) =>{
    return new Promise((resolve, reject) => {
        const is_string = string.length
        setTimeout(() =>{
            if (is_string > 10){
                console.log('Big word')
            }else {
                console.log('Small Number')
            }
        },4000)
    } 
)}
console.log(greater('My name is kevon'))
console.log(greater('Hello'))
/*8 kyu: Even or Odd 
function evenOrOdd(number) {
  if (number % 2 == 0) {
      return "Even"
  } else{
      return "Odd"
  }
      
}

8 kyu: Opposite number
function opposite(number) {
    return - (number)
}
*/