/*
Perfect Number

The Greek mathematician Nicomachus devised a classification scheme for natural numbers (1, 2, 3, ...), identifying each as belonging uniquely to the categories of abundant, perfect, or deficient based on a comparison between the number and the sum of its positive divisors (the numbers that can be evenly divided into the target number with no remainder, excluding the number itself). For instance, the positive divisors of 15 are 1, 3, and 5. This sum is known as the Aliquot sum.

Perfect numbers have an Aliquot sum that is equal to the original number.
Abundant numbers have an Aliquot sum that is greater than the original number.
Deficient numbers have an Aliquot sum that is less than the original number.
Examples:

6 is a perfect number since its divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.
28 is a perfect number since its divisors are 1, 2, 4, 7, and 14 and 1 + 2 + 4 + 7 + 14 = 28.
15 is a deficient number since its divisors are 1, 3, and 5 and 1 + 3 + 5 = 9 which is less than 15.
24 is an abundant number since its divisors are 1, 2, 3, 4, 6, 8, and 12 and 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36 which is greater than 24.
Prime numbers 7, 13, etc. are always deficient since their only divisor is 1.
Write a program that can tell whether a number is perfect, abundant, or deficient.


Problem:
- input: number
- determine the chategory of a number whether it is:
  - 'perfect' if the sum of divisors are equal to the original number
  - 'abundant' if the sum of the divisors is greater than the original number
  - 'deficient' if the sum of the divisors is less than the original number
  - prime numbers are always 'deficient'

Example / Test cases:
- we need PerfectNumber class with one static method:
  - classify: take one argument, a number and return the chategory of the number
    - negative number raise an error.
 
Data structure:
input: number
output: string

- need an iteration method to determine the possible divisiors
- maybe some helper function to find the prime number, 

A:
- classify:
  - check if the number is less than 0, if so throw an error.
  - create a variable 'divisorSum' and intialized it to 0 to store the sum of its positive divisior.
  - do the iteration start from 0 until the number before the argument 
    - check if there is no remainder if the argument number divided by the current number
      - if so, add the current number to the divisorSum.
  - end iteration

  if divisorSum equal to the original number return 'perfect'
  if divisorSum less than the original number return 'deficient'
  if divisorSum greater than the original number return 'abundant'




*/

class PerfectNumber {
  static classify(num) {
    if(num < 1) {
      throw new Error()
    };

    let sum = 0;
    for(let divisor = 1; divisor < num; divisor++) {
      if(num % divisor === 0) {
        sum += divisor;
      }
    }

    if (sum === num) return 'perfect';
    if (sum > num) return 'abundant';
    if (sum < num) return 'deficient';

  }
      
  
}

module.exports = PerfectNumber;