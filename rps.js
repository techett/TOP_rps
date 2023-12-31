/*

Making a rock paper scissor game.
28 of August, 2023

*/

// Variables
const choices = ["scissors", "rock", "paper", "lizard", "spock"];

// Computer decision
function PickWeapon() {
    let RandomNumber = Math.random() * 5;

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
    let choice = prompt(`
        - rock
        - paper
        - scissors
        - lizard
        - spock

        Please make your decision`
    ).toLowerCase();

    if (choices.includes(choice)) {
        return choice;
    } else {
        console.log(`Invalid choice. Please, try again.`)
        return PlayerSelect();
    }
}

// Call victor
function GameTime(PlayerChoice, ComputerChoice) {
    // A dictionary that maps each choice to the choices it can defeat
    const WinningMap = {
        'scissors': ['paper', 'lizard'],
        'rock': ['scissors', 'lizard'],
        'paper': ['rock', 'spock'],
        'lizard': ['spock', 'paper'],
        'spock': ['scissors', 'rock']
    };

    // Check for a tie
    if (PlayerChoice === ComputerChoice) {
        return "It's a tie!";
    }

    // Check if player's choice is in the winning map for that choice
    if (WinningMap[PlayerChoice].includes(ComputerChoice)) {
        return "Player wins!";
    }

    return "Computer wins!";
}

// Starting off we need to go over the rules.
console.log(
    `Rules for Winning Combos:

    Scissors cuts paper.
    Paper covers rock.
    Rock crushes lizard.
    Lizard poisons Spock.
    Spock smashes scissors.
    Scissors decapitates lizard.
    Lizard eats paper.
    Paper disproves Spock.
    Spock vaporizes rock.
    Rock crushes scissors.
    
    Your opponent is 
    the computer and it has already chose its answer.
    `
);

// Present player their options.
console.log(`Please make a choice from the following:
    1. Rock
    2. Paper
    3. Scissors
    4. Lizard
    5. Spock`
);

// Outputs
//console.log(PickWeapon()); // Working as expected.

//console.log(PlayerSelect());