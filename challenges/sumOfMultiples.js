/*
Sum of Multiples

Write a program that, given a natural number and a set of one or more other numbers, can find the sum of all the multiples of the numbers in the set that are less than the first number. If the set of numbers is not given, use a default set of 3 and 5.

For instance, if we list all the natural numbers up to, but not including, 20 that are multiples of either 3 or 5, we get 3, 5, 6, 9, 10, 12, 15, and 18. The sum of these multiples is 78.

Problem:
- given a natural number and a set of one or more other number
- compute the sum of all the multiples of the numbers in the set that are less than the first number
- if the set number is not given, use default set of 3 and 5.

Example and test cases:
10
3, 6, 9,  5 -->  23
7 13 17 to 20
7, 14
17
13 --> 51

- we need a class SumOfMultiples with methods:
  - instance methods:
    - constructor:
      - take one or more arguments of numbers for the multiples list numbers
      - the default arguments for the multiples is 3 and 5 
    - to:
      - take one arguments for the maximum number
      - calculate the sum of the multiples numbers
  
  - static methods:
    - to:
      - take one arguments as the maximum number
      - the default arguments for the multiples is 3 and 5    

Data structure:
- input: numbers
- output: numbers

- need a collection to store the arguments and the multiples result
- need a collection to iterate on each of the arguments

A:
constructor:
- take one or more arguments as the list of multiple numbers
- convert the argument to an array
- the default argumetns are 3 and 5

instance to:
- take one argument as the max number
- create the sum variable to hold the array result.
- iterate over the list of arguments, start the counter from 1 until before the max number. In each iteration:
  - multiple the number by the current counter
  - if the result is less than the max number 
    - check if the result is already in the sum
      - if it is not push it to the array.
  - increment counter by 1
- end iteration
- return the sum of all element in result

static to:
- call the instance method with argument 3 and 5

*/

class SumOfMultiples {
  constructor(...args) {
    if (!args[0]) this.args = [3, 5]
    else this.args = args;
  }

  to(num) {
    let sumList = [];
    let sum = 0;
    this.args.forEach(ele => {
      let counter = ele;
        while (counter < num) {
          if(!sumList.includes(counter)) {
            sumList.push(counter);
            sum += counter;
          }
          counter += ele;     
        }
      });
      
      return sum;
  }

  static to(num) {
    return new SumOfMultiples().to(num)
  }
}

module.exports = SumOfMultiples;