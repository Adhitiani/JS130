/*
Diamond

The diamond exercise takes as its input a letter, and outputs it in a diamond shape. Given a letter, it prints a diamond starting with 'A', with the supplied letter at the widest point.

The first row contains one 'A'.
The last row contains one 'A'.
All rows, except the first and last, have exactly two identical letters.
The diamond is horizontally symmetric.
The diamond is vertically symmetric.
The diamond has a square shape (width equals height).
The letters form a diamond shape.
The top half has the letters in ascending order.
The bottom half has the letters in descending order.
The four corners (containing the spaces) are triangles.

Problem:
- input: a letter
- output: a diamond shape

Example / Data Structure:
input C
- A
 B B
C   C
 B B
  A

 input: C
 index 2
  "AAAAAAA" =  width 6(+ 1 \n) --> index + 1 * 2 = 6
  length = 5 ( (index * 2) + 1)
  "AAAAAAA"
  ABC
  "  A  " = index 2         
  " B B " = index 1 and 3 
  "C   C" = index 0 - 4
  
  BA = index 4
  " B B " = index 1 and 3   
  "  A  ";= index 2


  input: E
  index: 4
  width: 4 + 1 = 5 * 2 = 10 + 1 = 11
  length: 9
  "AAAAAAAAAAA"
  "    A    \n" + index = 0 place 4 + 1 --> 5 - 0 , 5 + 0
  "   B B   \n" + index = 1 place 3 + 1 --> 4 - 1 , 4 + 1
  "  C   C  \n" +
  " D     D \n" +
  "E       E\n" +
  " D     D \n" +
  "  C   C  \n" +
  "   B B   \n" +
  "    A    \n";

  - 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  - slice the alphabet from index 0 to indexofLetter + 1
  --- 'ABCDE'
  - create a result with an empty string
  - iterate over the slice alphabet
    - create an array with the length of the slice string * 2 + 1
    - create start index = index of the input argument
    - create counter start from 0
    - iterate over the array:
    - if the current index is equal to start index - counter or start index + counter
      - replace the current element with ele.
    - if the current index is the last index replace the element with "/n"
    - increment counter by 1
    - if the counter is === start index reassign it to 0  
    - end iteration
    - concatenate the empty string with the array in the string from 
    - return result
    
- we need a Diamond class with methods:
  makeDiamond:
    - take one argument, a string letter
    - create a string diamond as required.

Data Structure:
- input string
- output letter

- need a collection to do iteration: an array
- how to determine the correct place for each of the letter?

Alghoritme:
- 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
- firstPart: --- ABCDE
  - slice the alphabet from index 0 to indexofLetter + 1
- second Part  ---  DCBA'
  - slice the alphabet from index 0 to index of letter, reverse

- create a result with an empty string

The first part: --- ABC
  - iterate over the slice alphabet
    - create an array with the length of the slice string * 2 - 1
    - create baseIndex = length
    - create counter = outer loop index
    - iterate over the array:
      - if the current index is equal to baseIndex - counter or start index + counter
      - replace the element in the position with current ele.
    - end iteration
    - concatenated the array with '/n'    
    - concatenate the empty string with the array in the string from
  - end iteration
  
The second part: BA
- iterate over the slice alphabet
    - create an array with the length of the slice string * 2 + 1
    - create counter start from 1
    - iterate over the array:
      - if the current index is equal to current idex + 1 or length - 1 - 1
      - replace the current element with ele.
      - if the current index is the last index replace the element with "/n"
      - increment counter by 1
    - end iteration    
    - concatenate the empty string with the array in the string from
  - end iteration

  - return result 



  Second Attemp:

  Alghoritme:
- 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

Letter C
create a variable indexLetter = index of letter argument in the alphabet
The first part: --- ABC
  - slice the alphabet from index 0 to indexLetter + 1
  - create the halfTop = ''
  - iterate over the slice alphabet
    - create a row which is a space of string with the length of sliceAlphabet * 2 - 1
    - create baseIndex = indexLetter
    - create counter = outer loop index
    - iterate over the row:
      - if the current index is equal to baseIndex - counter or start index + counter
      - replace the element in the position with current ele.
    - end iteration
    -   
    - concatenate the empty string with the row and the '\n'
  - end iteration
  


class Diamond {
  static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    return Diamond.firstPart(letter) //+ Diamond.secondPart(letter)
    }

  static firstPart(letter) {
    let letters =  Diamond.ALPHABET.slice(0, Diamond.ALPHABET.indexOf(letter) + 1);
    let result = [];
    let startPoint = Diamond.ALPHABET.indexOf(letter);

    for(let i = 0; i < letters.length; i ++) {
      let currentLetter = letters[i];
      let arrResult = new Array((letters.length * 2)- 1).fill('');

      for(let j = 0; j < arrResult.length; j++) {
        if(j === startPoint - i ) arrResult[j] = currentLetter;
        if(j === startPoint + i) arrResult[j] = currentLetter;
      }
     
      result.push(arrResult)
    }
    return `${result.join('\n')}\n`;
  }

  static secondPart(letter) {
    let letters =  Diamond.ALPHABET.slice(0, Diamond.ALPHABET.indexOf(letter)).split('').reverse().join('');
    let stringResult = '';
    
    let startPoint = 1;
    for(let i = 0; i < letters.length; i ++) {
      let currentLetter = letters[i];
      let arrResult = new Array((letters.length * 2) + 1).fill('');
      //console.log(arrResult.length)
      for(let j = 0; j < arrResult.length; j++) {
        if(j === startPoint + i) arrResult[j] = currentLetter;
        if(j === arrResult.length - i - 2) arrResult[j] = currentLetter;
        
      }
      //arrResult.push('\n')
      stringResult += arrResult.join(' ');

      if(i !== arrResult.length - 1) {
      stringResult += '\n'
      }
      
      
    }
    return stringResult
  }
}

*/

class Diamond {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  static makeDiamond(letter) {
    let letters = this.rangeLetter(letter).split('');
    let widthOfDiamond = letters.length;

    let result = [];
    for(let i = 0; i < letters.length; i ++) {
      let currentLetter = letters[i]
      result.push(this.row(this.centerSpaces(currentLetter), widthOfDiamond))
    }
    return (`${result.join("\n")}\n`)
  }


  static rangeLetter(letter) {
    let firstPart = this.alphabet.slice(0, this.alphabet.indexOf(letter) + 1);
    let secondPart = firstPart.slice(0, firstPart.length - 1).split('').reverse().join('')
    return firstPart + secondPart
  }


  static centerSpaces(letter) {
    if(letter === 'A') return 'A';
    if(letter === 'B') return 'B B';

    let indexLetter = this.alphabet.indexOf(letter);
    let space = (indexLetter * 2) - 1
    let center = (' ').repeat(space)
    return `${letter}${center}${letter}`
  }

  static row(content, width) {
  let space = (width - content.length)/2;
  let side = (' ').repeat(space)
    return `${side}${content}${side}`
  }
}



module.exports = Diamond;
