// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function () {
//     return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//Prediction: this will return Miss Scarlet
//Actual: CORRECT!

// const murderer = 'Professor Plum';

// const changeMurderer = function () {
//     murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//Prediction: this will return Professor Plum
//Actual: error because there is already a constant variable declared. I was on the right lines, 
//just didn't think it would be an error,thought the initial constant would overrule it.

// let murderer = 'Professor Plum';

// const declareMurderer = function () {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

//Prediction: First verdict- Mrs Peacock, second verdict-Professor Plum
//Actual: Correct. In the first one, Mrs Peacock comes after and is in the scope. The second, Mrs
//Peacock isnt in the scope so it uses the murderer from above.

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function () {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

//Prediction: error and Mrs Peacock
//Actual: Wrong. There was no error, Colonel Mustard was added in. Mrs Peacock was correct 
// as shes outwith the scope of the const function declareAllSuspects

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function (newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function () {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

//Prediction: The weapon is Revolver
//Actual: CORRECT! The constants are the objects themselves, not the items inside

// let murderer = 'Colonel Mustard';

// const changeMurderer = function () {
//     murderer = 'Mr. Green';

//     const plotTwist = function () {
//         murderer = 'Mrs. White';
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//Predictions: Mrs White
//Actual: Plot twist is called towards the end of the changeMurderer function which overrules the others

// let murderer = 'Professor Plum';

// const changeMurderer = function () {
//     murderer = 'Mr. Green';

//     const plotTwist = function () {
//         let murderer = 'Colonel Mustard';

//         const unexpectedOutcome = function () {
//             murderer = 'Miss Scarlet';
//         }

//         unexpectedOutcome();
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//Predictions: Error, const already assigned.
//Actual: Wrong. Never noticed the let on Colonel Mustard which is overridden by the Mr Green const

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };

// const changeScenario = function () {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

//     const plotTwist = function (room) {
//         if (scenario.room === room) {
//             scenario.murderer = 'Colonel Mustard';
//         }

//         const unexpectedOutcome = function (murderer) {
//             if (scenario.murderer === murderer) {
//                 scenario.weapon = 'Candle Stick';
//             }
//         }

//         unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
// }

// const declareWeapon = function () {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

//Predictions: Not sure. If changeScenario runs in any order then candle stick, if it runs top to bottom then lead pipe
//Actual: Candle Stick. So it runs in any order.

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//     let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//Predictions: Professor Plum. The let murderer = Mrs Peacock is only inside that if method.
//Actual: Correct! The wee red writing gave it away, this shows its only for that.