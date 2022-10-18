/*
Point Mutations
Write a program that can calculate the Hamming distance between two DNA strands.
A mutation is simply a mistake that occurs during the creation or copying of a nucleic acid, in particular DNA. Because nucleic acids are vital to cellular functions, mutations tend to cause a ripple effect throughout the cell. Although mutations are technically mistakes, a very rare mutation may equip the cell with a beneficial attribute. In fact, the macro effects of evolution are attributable by the accumulated result of beneficial microscopic mutations over many generations.

The simplest and most common type of nucleic acid mutation is a point mutation, which replaces one base with another at a single nucleotide.

By counting the number of differences between two homologous DNA strands taken from different genomes with a common ancestor, we get a measure of the minimum number of point mutations that could have occurred on the evolutionary path between the two strands.

This is called the Hamming distance.

Copy Code
GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^
The Hamming distance between these two DNA strands is 7.

The Hamming distance is only defined for sequences of equal length. If you have two sequences of unequal length, you should compute the Hamming distance over the shorter length.

PEDAC
Problem:
- two DNA in string value is provided, 
- found the distance between them. To find the distance count the number of different letter in the same position between two string.
- the distance is only count for the same length string
  - if the length is different compute over the shortest length

input: a string (original strand)
output: number --> the number of distance between two DNA
- the amount of different letters in the same position between two strings

Example / test case:
- need class DNA that accept one argument (the origianl strand) with methods:
  - constructor
  - hamming distance, accept one argument ( the distance dna to compare):
    - no difference between empty strands --> '' === '' --> 0
    - no difference between identical strands --> 0
    - use the shortest string to check the distance.
    - does not actually shorten original strand

Data structure:
- strings -- array? --> number
option for result:
- put the different letter in an array  and return the length
- count it right away and store the value in a variable

Algoritm:
- Create a class call DNA with two methods:
  - constructor: accept an argument the original DNA

  - hamming distance: accept an argument the distance DNA
    check for the edge cases:
    - check if the string  is equal, return 0 if it is.
    - compare the length of the original and distance
      - if it's equal use any of them for the 'based'
      - if its not equal use the shortest as the 'based'
    - create 'count' variable and assign it to 0  
    - iterate over the 'based'
      - in each iteration check if the current element is the same as the element in the other DNA at the same position
        - if it's not increment count by 1
    - end iteration
    - return 'count'    
    

Attempt 1

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(distance) {
    if(this.strand === distance) return 0;

    let basedDNA = this.strand;
    let distanceDNA = distance;
    if(this.strand.length > distance.length) {
      basedDNA = distance;
      distanceDNA = this.strand;
    } 
    
    let count = 0;
    basedDNA = basedDNA.split('');
    for (let i = 0; i < basedDNA.length; i++) {
      if(basedDNA[i] !== distanceDNA[i] ) {
        count += 1;
      }
    }
  return count;
  }
}
--------------------------------------
Attempt 2

Alghoritm:
- Create class DNA with two methods:
 
  - constructor
    - accept a string argument
  
  - compute hamming distance:
    - accept another string argument
    - compare both of the length, use the shorter one as the based of iteration
    - set counter to 0
    - iterate over the based, in each iteration:
      - if the current char is different than on the other DNA at the sampe position
        - increment counter by 1
    - return counter      

*/

class DNA {
  constructor(dna1) {
    this.dna1 = dna1;
  }

  hammingDistance(dna2) {
    let basedDNA = [this.dna1, dna2].sort((a, b) => a.length - b.length)[0];

    let counter = 0;
    for(let i = 0; i < basedDNA.length; i++) {
      if(this.dna1[i] !== dna2[i]) {
        counter += 1;
      }
    }
    return counter;
   
  }
}


module.exports = DNA;