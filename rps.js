/*

Making a rock paper scissor game.
28 of August, 2023

*/

// Variables
const choices = ["scissors", "rock", "paper"];

// Computer decision
function PickWeapon() {
    let RandomNumber = Math.random() * 3;

    /* 
    Taking the random number to convert to a whole
    number and then have that random number be the choice
    from choices list. 
    */
    function ActualChoice(RandomNumber) {
        RandomNumber = Math.floor(RandomNumber);

        let Selection = choices[RandomNumber];

        return Selection;
    }

    // The acutal output should be a string.
    return ActualChoice(RandomNumber);
}

// Player decision
function PlayerSelect() {
    console.log(`Please make a choice from the following`);
}

// Starting off we need to go over the rules.
console.log(
    `Rock beats scissors, scissors beat paper,
    and paper beats rock\nYour opponent is 
    the computer and it has already chose its answer.`
);

// Outputs
console.log(PickWeapon()); // Working as expected.