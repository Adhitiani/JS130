/*Write a program that, given a word, computes the Scrabble score for that word.
Letter Values
You'll need the following tile scores:
Letter	Value
A, E, I, O, U, L, N, R, S, T	1
D, G	2
B, C, M, P	3
F, H, V, W, Y	4
K	5
J, X	8
Q, Z	10

PROBLEM:
computes the score for a word according to its letter value
Letter	Value: 
A, E, I, O, U, L, N, R, S, T	1
D, G	2
B, C, M, P	3
F, H, V, W, Y	4
K	5
J, X	8
Q, Z	10

rules:
- other than those letter everything else score 0
- scores are case-insensitive

EXAMPLE / Test Case
- from the example we need a Scrablle class that has one method:
  - constructor:
    - take one argument a string word
  - score:  
    - calculate the score of the word

    A

let scribbleScore = {
1: [A, E, I, O, U, L, N, R, S, T],	
2: [D, G],	
3: [B, C, M, P],	
4: [F, H, V, W, Y],	
5: [K],	
8: [J, X],	
10: [Q, Z],
}

Data Structure
- input: string
- output: number
- array or object to store the lookup scores
- a collection to iterate

Alghoritme:
- constructor
  - take one argument word, covert it to uppercase

- score:
- createa score variable to store the score result

- edge cases:
  - null score 0
- create an object with aray value to store the score
- iterate over the word
  - for each of the word:
    - iterate over the object key, in each iteration:
      - if the current letter include in the values of the object
        - increment the 'score' variable by the key in number form.
    - end iteration
- end iteration
- return score

------------------------
class Scrabble {
  constructor(word) {
    this.word = word;
  }

   score() {
    const scrScores = {
      1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],	
      2: ['D', 'G'],	
      3: ['B', 'C', 'M', 'P'],	
      4: ['F', 'H', 'V', 'W', 'Y'],	
      5: ['K'],	
      8: ['J', 'X'],	
      10: ['Q', 'Z'],
    }
    if(this.word === undefined) this.word = this.word;
    if(this.word === null) return 0;

    let scoreTotal = 0;
    this.word = this.word.toUpperCase();
    for(let i = 0; i < this.word.length; i ++) {
      let currentLetter = this.word[i];
      for(let key in scrScores) {
        if(scrScores[key].includes(currentLetter)) {
          scoreTotal += Number(key);
        }
      }
    }
    return scoreTotal;
  }

  static score(testWord) {
    const scrScores = {
      1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],	
      2: ['D', 'G'],	
      3: ['B', 'C', 'M', 'P'],	
      4: ['F', 'H', 'V', 'W', 'Y'],	
      5: ['K'],	
      8: ['J', 'X'],	
      10: ['Q', 'Z'],
    }
    
    if(testWord === null) return 0;

    let scoreTotal = 0;
    testWord = testWord.toUpperCase();
    for(let i = 0; i < testWord.length; i ++) {
      let currentLetter = testWord[i];
      for(let key in scrScores) {
        if(scrScores[key].includes(currentLetter)) {
          scoreTotal += Number(key);
        }
      }
    }
    return scoreTotal;
  }
}
*/

// attemp2


class Scrabble {
  constructor(word) {
    this.word = word;
  }

   score() {
    const scrScores = {
      1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],	
      2: ['D', 'G'],	
      3: ['B', 'C', 'M', 'P'],	
      4: ['F', 'H', 'V', 'W', 'Y'],	
      5: ['K'],	
      8: ['J', 'X'],	
      10: ['Q', 'Z'],
    }

    if(this.word === null) return 0;
    let scoreTotal = 0;
    this.word = this.word.toUpperCase();
    for(let i = 0; i < this.word.length; i ++) {
      let currentLetter = this.word[i];
      for(let key in scrScores) {
        if(scrScores[key].includes(currentLetter)) {
          scoreTotal += Number(key);
        }
      }
    }
    return scoreTotal;
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}
module.exports = Scrabble;