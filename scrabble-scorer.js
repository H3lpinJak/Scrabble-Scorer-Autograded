// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
   word = word.toUpperCase();
   let letterPoints = "";

   for (let i = 0; i < word.length; i++) {

      for (const pointValue in oldPointStructure) {

         if (oldPointStructure[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`
         }

      }
   }
   return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log(`\nLet's play some scrabble!\n`)
   let word = input.question('Enter a word: ')
   return word;
};

function simpleScorer(word) {
   let score = 0;
   for (let letter in word.toUpperCase()) {
      score += 1
   }
   return score;
}

function vowelBonusScorer(word) {
   let score = 0;
   let vowel = 'AEIOU'
   for (let letter in word.toUpperCase()) {
      if (vowel.includes(letter)) {
         score += 3;
      } else
         score += 1;
   }
   return score;
}

let scrabbleScorer = function(word) {
   word = word.toUpperCase();
   let score = 0;
   for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      //if () {

      //}
   }
   return score;
};

const scoringAlgorithms = [
   {
      name: 'Simple Score',
      description: 'Each letter is 1 point',
      scoringFunction: simpleScorer
   },
   {
      name: 'Bonus Vowels',
      description: 'Vowels are 3 points, consonants are 1 point',
      scoringFunction: vowelBonusScorer
   },
   {
      name: 'Scrabble',
      description: 'The traditional scoring algorithm.',
      scoringFunction: oldScrabbleScorer
   },
];

function scorerPrompt(word) {
   console.log("Which algorithm would you like to use?")
   for (let i = 0; i < scoringAlgorithms.length; i++) {
      console.log(`${i} - ${scoringAlgorithms[i].name} : ${scoringAlgorithms[i].description}`)
   }
   let choose = input.question('Select what number you would like to score with: ')
   return choose;
}

function transform(oldScrabbleScorer) {
   let newPointStructure = {};
   for (let pointValue in oldPointStructure) {
      let letters = oldPointStructure[pointValue];
      for (let i = 0; i < letters.length; i++) {
         let letter = letters[i].toLowerCase();
         newPointStructure[letter] = Number[pointValue]
      }
   }
   return newPointStructure;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let word = initialPrompt();
   let chooseAlgorithm = scorerPrompt(word);
   let selectedAlgorithms = scoringAlgorithms[chooseAlgorithm];
   console.log(`Use Algorithm: ${selectedAlgorithms.name}`)

   let score = selectedAlgorithms.scoringFunction(word);
   console.log(`Scoring the word: ~ ${word} ~\n${selectedAlgorithms.name}\n${score}`);

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
   runProgram: runProgram,
   scorerPrompt: scorerPrompt
};
