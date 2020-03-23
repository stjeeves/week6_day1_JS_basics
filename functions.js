function sayHello(greeting, name = 'World') {//can accept default values like ruby
    return `${greeting} ${name}`;
}

// console.log('sayHello message:', sayHello('Hi', 'Stephen'));

var add = function (firstNumber, secondNumber) {//this is an anonymous function becauser it has no function name, it is stored in a variable
    return firstNumber + secondNumber;
}

console.log('5 + 5 with add', add(5, 5));//if logging to console its good to add this message at the start to say what its supposed to do

// Declare a named function that takes an array of numbers, and returns the sum, or total, 
//of all of the numbers in the array.

function numberTotal(numbers) {
    var total = 0;
    for (var number of numbers) {
       total += number;
    }
    return total;
}

var sum = numberTotal([1, 2, 3, 4, 5]);

console.log('total of the array is:', sum);
// Define an anonymous function expression that takes two arguments:
// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for example, 'name'
// Your function should return true if the given string is a key on the given object 
//and false if the object does not have a key that matches the string.Store this function in an 
//appropriately named variable to invoke it.

var objectHasKey = function(object, string) {
    for (var key in object) {//the for in loop is specifically for looking for keys in values
        if (string === key) {
            return true;
        }
    }
    return false;
    
}

var person = {
    name: 'John',
    age: 30
};

var keyIsFound = objectHasKey(person, 'name')
console.log('key is found:', keyIsFound);

//this below is an arrow function, named for the fat arrow

var multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

console.log('multiply 2 x 2', multiply(2, 2));

