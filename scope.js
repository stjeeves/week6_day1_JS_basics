//Function Scope

 var secretFunction = function() {
    var pinCode = [0, 0, 0, 0];
    console.log('pinCode inside secret function', pinCode)
}

// secretFunction();
// console.log('pinCode outside secretFunction', pinCode);//this doesnt work because it is not in our scope, pinCode is only available for use inside secretFunction

var name = 'Keith';
var secretFunction = function() {
    var pinCode = [0, 0, 0, 0];
    console.log('name inside secretFunction', name)
}
//the name var is outside the function so is available within the file, it is thought of as parent info to stuff in the function
secretFunction()

//Block Scope Let

var filterNamesFirstLetter = function(names, letter) {
    var filteredNames = [];
    for (let name of names) {//let instead of var stops the name variable being used outside of this function
        if (name[0] === letter) {
            filteredNames.push(name)
        }
    }
    // console.log('name after the loop:', name)
    return filteredNames
}

var students = ['Ariane', 'Anna', 'Ian', 'Steven'];
var filteredStudents = filterNamesFirstLetter(students, 'A');
console.log('filteredStudents:', filteredStudents);

let isItFive = function(number) {
    let result
    if (number === 5) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

console.log('results from isItFive:', isItFive(5));

let temperature = 30;

if (temperature < 15) {
    let jacket = false;//this jacket is dark red to show scope, that it is only available inside this function
    var happy = true;
} else {
    let jacket = true;
    var happy = false;
}

// console.log('Jacket after if-else block:', jacket);
console.log('happy after if else block:', happy);

//constants with const

let calculateEnergy = function (mass) {
    const speedOfLight = 299792458;//const means that the variable created cannot ever be changed
    return mass * speedOfLight ** 2;

}

let energyOfMe = calculateEnergy(72);
console.log('energyOfMe(if i had a mas of 72kg', energyOfMe);

const song = {
    title: 'Raspberry Beret',
    artist: 'Prince'
};
console.log('song before mutation', song);
song.title = 'When Doves Cry';
console.log('song after mutation', song);

//above, we can change the title as the song object is the const, not the variable inside it. so we couldnt change song to an array etc
const songs = [
    song,
    'Happy Birthday',
    'Hey Jude'
];
console.log('songs array before mutation', songs);
songs[1] = 'Call Me Maybe';
songs.pop();
console.log('songs array after mutation', songs);