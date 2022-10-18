
/*Series

Write a program that will take a string of digits and return all the possible consecutive number series of a specified length in that string.

For example, the string "01234" has the following 3-digit series:

012
123
234

"01234"
[[0, 1, 2]]
1:

0, 1, 2

Likewise, here are the 4-digit series:

0123
1234
Finally, if you ask for a 6-digit series from a 5-digit string, you should throw an 
error.

Problem:
- given a string of digits and a number represent a requirement length, return all the possible consecutive number of series with the given length
- if the given length is longer than the a string digit length throw an error.

Example / test cases:

- from the test cases we need Series class with two methods.
  constructor: that take one arguments the string of number
  
  slices: take one argument a number of specified length
    - it will slices the string number to a series of sub array with the same length as the specified length
    - throw an error if the specified length is greater than the length of the string length

Data Structure:
- input: string and number
- output: array

- need iteration method to iterate over the string numbers

Algoritm:
constructor:
 - take one argument a string of numbers

slice:
- check if the given argument is greater than the length of the string number
  - if it is throw an error
- create an empty array to hold the result
- iterate over the string of number. In each iteration:
  - create a subarray with an empty array.
  - do the inner iteration with the start number is the current element
    - push the current element to the empty array until the length is the same as the provided length
    - if it is already the same push the subarray to the result array
    - reassign it to empty array
  - end iteration  
- end iteration     
*/

class Series {
  constructor(stringNumber) {
    this.stringNumber = stringNumber;
  }

  slices(seriesLength) {
    if(this.stringNumber.length < seriesLength) {
      throw new Error();
    }
  
    let result = [];
    for(let i = 0; i < this.stringNumber.length; i++) {
      let subarray = [];
      for(let j = i; j < this.stringNumber.length; j++ ) {
        let currEle = this.stringNumber[j]
        if(subarray.length < seriesLength) {
          subarray.push(Number(currEle));
        }
      }
      if(subarray.length === seriesLength) result.push(subarray);
    }
    return result
  }
}




module.exports = Series;