// Variables
var name = "Mickey";
console.log(name);
// this prints Mickey to the terminal

//semicolons
//put them after every statement

// Dynamic Typing
var greeting = "Hello";
greeting = 10;
console.log(greeting);
//this prints 10 to the console. greeting is just a placeholder for whatever we assign it
//the dynamic typing means it will assess the most recent variable info

//data types
console.log(typeof "hello");
//will return string. typeof is checking what the input you have given it is

//Number
//pretty straightforward, 1,4, 12, 400, 2.4 etc
//you can also use the standard *,/,+,- as well as ** (to the power of),
//% (gives the remainder after a division)

//String
//a string is somethig surrounded by ""

//conditionals
var score = 7;
if(score > 6){
console.log("you passed")
}else if (score > 3){
    console.log("not bad");
}else{
    console.log("sorry, not enough");
}

//truthy and falsy values
//these evaluate to true or false
//empty string -is false
// 0 is false
//undefined is false
//NaN is false
//null is false
var myName; //undefined
if(myName){
    console.log("This wont print");
}

// Weak (or Loose) typing
console.log(3 + "hello");
console.log("route" + 6 + 6);
console.log(6 + 6 + "route");
//JS will try and coerce variables into something that it can work with

//Equality
console.log(2 == 2);//will evaluate as true
// == is comparing the two variables and if they evaluate to the same it returns true
// === checks both the value and the type of the variables and goves a more reliable answer

//Logical Operators

(1+1 === 2) && (1+1 === 4); // ->false
(1 + 1 === 2) || (1 + 1 === 4); // -> true
//&& is checking if bpth are true, || is either or


