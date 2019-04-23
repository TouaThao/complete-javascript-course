////////////////////
// ********************Prototype********************
////////////////////

//creating a functional constructor

//This is our blueprint. And we could make more copy of it if we need to.
let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

/*
We create a variable. the new keyword create an empty object of person
then we could assign it name,years and job title to it
*/
let john = new Person('john', 1990, 'teacher')
let jane = new Person('jane', 1969, 'designer')
let mark = new Person('nark', 1940, 'retire')

//This is passing a method to the Person constructor
//And we could access to it later if needed to 
Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
}
//This is passing a property to the Person constructor
//this is inherite from the prototype
//So it's actually not part of john
Person.prototype.lastName = 'smith'

console.log(john.lastName)
john.calculateAge();
jane.calculateAge();
mark.calculateAge();
////////////////////
// ********************object.create method********************
////////////////////

let personProto = {
    calculateAge: function () {
        console.log(2018 - this.yearOfPerson)
    }
}

let johnny = Object.create(personProto)
johnny.name = 'johnny';
johnny.job = 'Chef';
johnny.yearOfPerson = 1990;

//another way to do object create
//cleaner

let wick = Object.create(personProto, {
    name: { value: 'wick' },
    job: { value: 'hitman' },
    year: { value: 1988 }
})

////////////////////
// ********************Primitives vs objects ********************
////////////////////

//Primitives
let exampleA = 23
let exampleB = exampleA
exampleA = 46
console.log('A', exampleA);
console.log('B', exampleB);

//As seen from above. We assign A to 23 and B to equal to A. But later change A to 46.
//But when we console.log it A is 46 and not 23

//objects 
let object1 = {
    age: 23,
    name: 'Neo'
}

let object2 = object1;

object1.age = 30;
console.log('object 1', object1.age)
console.log('object 2', object2.age)

//function

let weightInPound = 150;
let obj = {
    name: 'Blake',
    city: 'Minnesota'
}

function changeOver(a, b) {
    a = 127,
        b.city = 'New York'
}

changeOver(weightInPound, obj)
console.log('function Primitives ', weightInPound)
console.log('function object', obj.city)

////////////////////
// ********************First Class Function********************
////////////////////
//Firstclass function
function arrayCal(arr, fn) {
    let arrayResult = []
    for (let i = 0; i < arr.length; i++) {

        arrayResult.push(fn(arr[i]));

    }
    return arrayResult; 
}

let someArray = [2000, 1991, 1968, 1980, 2017]

//callback function
function calculateArray(element){
return 2018 - element
}

//another call back functino
//element could be anything
function fullAges(element){
return element >= 18
}

function maxHeartRate(element){
    if( element >= 18 && element <= 81){
        return Math.round(206.9-(0.67 * element))
    } else{
        return -1
    }
   
}

let ages = arrayCal(someArray,calculateArray) 
let calculateFullAges = arrayCal(ages,fullAges)
let rate = arrayCal(ages,maxHeartRate)

console.log(ages)
console.log(calculateFullAges)
console.log(rate)