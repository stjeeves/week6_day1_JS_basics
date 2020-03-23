// declare an array

var sports = ['football', 'tennis', 'rugby'];

console.log(sports); // returnst the array
console.log(sports[0]); // returns fooptball
console.log(sports[0]); //returns undefined

//length of an array

console.log(sports.length);

//adding elements to the end

sports.push('curling');
sports.push('darts');
sports.push('snooker');

//removing last elemetns from the end
var lastThing = sports.pop();// pops off the last thing
console.log(lastThing);

// Adding elements to the start
sports.unshift('basketball');
console.log(sports);

//Removing elements from the start
var removedElement = sports.shift();
console.log(removedElement); //basketball

//manipulating objects with splice
var removedSport = sports.splice(3, 1);//first number is position in the array to start at, second is the amount of objects to remove
console.log(removedSport);
console.log(sports);
//splice lets you take out certain elements from the array

// Copy an array using slice
var copiedArray = sports.slice();//pass in no arguments to copy it
console.log('copiedArray', copiedArray);

//Looping over an array
for(var sport of sports){
console.log(sport);
}

for ( var i=0; i < sports.length; i++ )
    console.log(sports[i]);
    //this is an oldschool way to do a for loop, youre being more specific. set the
    //variable, set the while part of the loop, then set the condition it has to do every time
    //the ++ is shorthand for 1 + 1

//Objects
var movie = {
    title: "It's A Wonderful Life",
    year: 1946,
    language: 'Spanish'
};
console.log(movie);//prints a hash looking felly
console.log(movie.title);//prints the title

//Add a new property to the object

movie.cast = ['Donna Reed', 'James Stewart'];
console.log(movie);

//Changing a property
movie.language = 'English';
console.log(movie);

//you can also access a property usig [] instead of .
movie['language'] = 'French';

//Deleting a property
// delete movie.year;
// console.log(movie);

movie.ratings = {
    critic: 94,
    audience: 98
}
console.log(movie);

//this adds another object inside our existing object, to access something inside it youn do this:
console.log(movie.ratings.audience);

for(var key in movie){
    console.log(`The ${key} is ${movie[key]}`);
}
//${} is string interpolation like ruby