/*
Problem:
- convert modern decimal numbers into their roman number equivalent
- roman number:
I - 1
V - 5
X - 10
L - 50
C - 100
D - 500
M - 1000

Rule:
Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.

Example:
27 = 20 + 7 --> 20 + 5 + 1 + 1 --> XXVII
163 = 100 + 60 + 3 --> 100 + 50 + 10 + 1 + 1 + 1 --> CLXIII
402 = 400 + 2 --> 100 - 500 + 1 + 1 --> CDII

- need a RomanNumeral class with methods:
  - constructor, accept one argument a number, does not raise any errors
  - toRoman, no argument, converting number to the roman number

Data Structur:
input: number
output: string

- need a library to lookup the number to the equivalent character --> object?
- how do we separate the number to its digits?

Algoritme:
- constructor:
  - accept one argument a number

- toRoman method:
- create a lookup in the object
check the number:
- if the number is less or equal to 10
I - 1 --> 1 - 3
V - 5 --> 5 - 8
X - 10 --> 10 - 30
L - 50 --> 50 - 80
C - 100 --> 100 - 300
D - 500 --> 500 - 800
M - 1000 --> 1000 - 3000 


*/

function toRoman(num) {
  const ROMAN = {
    M: 1000,
    CM: 900,
     D: 500,
    CD: 400,
     C: 100,
    XC: 90,
     L: 50,
    XL: 40,
     X: 10,
    IX: 9,
     V: 5,
    IV: 4,
     I: 1
  }

  let result = '';
  for (let key in ROMAN) {
    /*
    console.log(key)
    while (num >= ROMAN[key]) {
      result += key;
      console.log(result);
      num -= ROMAN[key]
      console.log(num)

      */

      if(num >= ROMAN[key]) {
        result += key;
        num -= ROMAN[key];
      }
    }
    return result;
  }

  




console.log(toRoman(32))