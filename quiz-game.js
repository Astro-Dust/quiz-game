const prompt = require("prompt-sync")();

console.log("Welcome to Computer Hardware Quiz!");


let player_points = 0;
const totalPoints = 3;

function calculatePoints(totalPoints, player_points) {
	
	totalPercentage = Math.floor((player_points * 100) / 3);
	return totalPercentage;

}

const answer1 = prompt("What is the brain of the computer? ").toUpperCase();
const correctAnswer1 = "CPU";

// ANSWER 1
if (answer1 === correctAnswer1) {
	console.log("You got it right!");
	player_points++;
} else {
	console.log("Too bad! You got it WRONG!");
}


// ANSWER 2
const answer2 = prompt("What is better, a 3090ti or a 4016ti? ").toLowerCase();
const correctAnswer2 = "3090ti";

if (answer2 === correctAnswer2) {
	console.log("You got it right!");
	player_points++;
} else {
	console.log("Too bad! You got it WRONG!");
}


// ANSWER 3

const answer3 = prompt("What is the recommended amount of RAM in 2023? ").toUpperCase();
const correctAnswer3 = "16GB";

if (answer3 === correctAnswer3) {
	console.log("You got it right!");
	player_points++;
} else {
	console.log("Too bad! You got it WRONG!");
}

// FINAL RESULT
const result = calculatePoints(totalPoints, player_points);

console.log(`You got ${player_points} questions answered correctly!`);
console.log(`Final score: ${result}%`);

