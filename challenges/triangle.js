
/*
Write a program to determine whether a triangle is equilateral, isosceles, or scalene.
An equilateral triangle has all three sides the same length.
An isosceles triangle has exactly two sides of the same length.
A scalene triangle has all sides of different lengths.
Note: For a shape to be a triangle at all, all sides must be of length > 0, and the sum of the lengths of any two sides must be greater than the length of the third side.


PEDAC
P:
input: 3 arguments (sides) -> numbers
output:
- 'equilateral' if all three sides the same length.
- 'isosceles' if exactly two sides the same length.
- 'scalene' if all three different length

rules:
- triangle:
  - all side length > 0
  - side1 + side 2 > side 3

E:
look provide test cases.
Based on them, we need Triangle class that have two methods:
- constructor that accept 3 arguments (sides length)
  - if any side length is <= 0 throw an exeption
  - if the sum of two sides length is less than the remaining side throw error

- kind method return string representing the type of triangle. 

D: number --> string

A:
constructor method
- check if it's triangles:
  - if any side length <= 0 throw error;
  - if side 1 + side 2 < side 3 | side 1 + side 2 < 0 | side 2 + side 3 < 0 throw error; 

kind method
- determine the kind of triangle:
  - if side 1 === side 2 === side 3 return  'equilateral'
  - if side 1 === side 2 or side 1 === side 3 or side 2 === side 3 return 'isosceles'
  - if side 1 !== side 2 and side 2 !== 3 and side 1 !== side 3   


Attempt 1
class Triangle {
  constructor (side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

    this.sides = [this.side1, this.side2, this.side3];
    this.shortest = this.sides.sort((a,b) => a-b)[0];
    this.midle = this.sides.sort((a,b) => a-b)[1];
    this.longest = this.sides.sort((a,b) => a-b)[2];

    if(this.shortest <= 0) throw new Error();
    if(this.midle + this.shortest <= this.longest) throw new Error();

  }

  kind() {
    if (this.shortest === this.longest) return 'equilateral'
    if (this.shortest === this.midle | this.midle === this.longest) return 'isosceles'
    return 'scalene'
  }
}

*/

class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3].sort((a,b) => a - b);
    if(this.isInvalid()) throw new Error();
  }

  kind() {
    let [short, middle, long] = this.sides;
    if (short === long) return 'equilateral'
    if (short === middle | middle === long) return 'isosceles'
    return 'scalene'
  }

  isInvalid() {
    let [short, middle, long] = this.sides;
    return (short <= 0) || (middle + short <= long)
  }
}


module.exports = Triangle;