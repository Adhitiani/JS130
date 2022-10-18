/*Octal

Implement octal to decimal conversion. Given an octal input string, your program should produce a decimal output. Treat invalid input as octal 0.

Note: Implement the conversion yourself. Don't use any built-in or library methods that perform the necessary conversions for you. In this exercise, the code necessary to perform the conversion is what we're looking for,

About Octal (Base-8)

Decimal is a base-10 system. A number 233 in base 10 notation can be understood as a linear combination of powers of 10:

The rightmost digit gets multiplied by 100 = 1
The next digit gets multiplied by 101 = 10
The digit after that gets multiplied by 102 = 100
The digit after that gets multiplied by 103 = 1000
...
The n*th* digit gets multiplied by 10n-1.
All of these values are then summed.
Thus:

Copy Code
  233 # decimal
= 2*10^2 + 3*10^1 + 3*10^0
= 2*100  + 3*10   + 3*1
Octal numbers are similar, but they use a base-8 system. A number 233 in base 8 can be understood as a linear combination of powers of 8:

The rightmost digit gets multiplied by 80 = 1
The next digit gets multiplied by 81 = 8
The digit after that gets multiplied by 82 = 64
The digit after that gets multiplied by 83 = 512
...
The n*th* digit gets multiplied by 8n-1.
All of these values are then summed.
Thus:

Copy Code
  233 # octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155

Problem:
- given an octal number in string, covert it to its equal decimal value
- invalid input return 0 

Example and test case:
233 
2 *8^2 + 3 * 8^1 + 3*8^0
2*64 + 3*8 + 3*1
128 + 24 + 3
= 55

- we need Octal class with methods: 
  - constructor
    - accept a string argumnent, the octal number
  - toDecimal:
    - return the decimal of the octal string input
    - invalid input return 0
    - invalid input is any character other than numerical 0- 7
    
Data structure:
- input: string
- output: number

- maybe need a collection to store the number before we get all the sum of the numbers.
- need an iteration method

Algoritma:
constructor:
  - take one argument a string octal number

toDecimal:
- check if the input if its invalid. invalid output return 0.
- convert the string argument to an array of number
- iterate over the array number, in each iteration:
  - replace the current number with the result of multiplying the current number by 8 length - (index + 1) and place it in a new array.
- end iteration
- count the sum of all the element in the array
- return the sum.

isInvalid:
- check if the string input consist of any character beside numeric
  if so return true
  else return false;

*/

class Octal {
  constructor(stringOctal) {
    this.stringOctal = stringOctal;
  }

  toDecimal() {
    if(this.isInvalid(this.stringOctal)){
      return 0;
    }

    let arrNumber = this.stringOctal.split('').map(Number);
    let decimalOctal = arrNumber.map((num, index) => {
      return num * Math.pow(8, arrNumber.length - (index + 1))
    });
    
    return decimalOctal.reduce((previousValue, currentValue) => previousValue + currentValue)
  }

  isInvalid(str) {
    return str.match(/[^0-7]/)
  }
  
}

module.exports = Octal;