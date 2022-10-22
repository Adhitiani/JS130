/*
Custom Set

Create a custom set type.

Sometimes it is necessary to define a custom data structure of some type, like a set. In this exercise you will define your own set type. How it works internally doesn't matter, as long as it behaves like a set of unique elements that can be manipulated in several well defined ways.

In some languages, including Ruby and JavaScript, there is a built-in Set type. For this problem, you're expected to implement your own custom set type. Once you've reached a solution, feel free to play around with using the built-in implementation of Set.

For simplicity, you may assume that all elements of a set must be numbers.


Problem:
- create a custom set type. How it iwroks internally doesn't matter, as long as it behaves like a set of uique elements that can be manipulated in several well
- all elements of a set must be a numbers
- The elements must be unique

Example/ test case:
We need a class CustomSet with methods:
- constuctor
  - takes an argument, an array of number?
  - save it as the set value

- a method to check if the set element is empty or not
- a method that can report if they contain an element (take a value argument)
- a method that can check if the other set is a subset (take a new subset argument):
    - empty set is a subset of non-empty set
    - non-empty set is not a subset of empty set
    - set is a subset of set with exact same elements
    - set is a subset of larger set with same elements
    - set is not a subset of set that does not contain its elements
- a method that check if the sets are  disjoint (take a new subset argument):
    - the empty set is disjoint with itself
    - empty set is disjoint with non-empty set
    - non-empty set is disjoint with empty set
    - sets are not disjoint if they share an element
    - sets are disjoint if they share no elements
- a method that check if sets with the same elements are equal
    - empty sets are equal
    - empty set is not equal to non-empty set
    - non-empty set is not equal to empty set
    - sets with the same elements are equal
    - sets with different elements are not equal
- a method that can add unique element to the set
    - it can add to empty set 
    - adding an existing element does not change the set
- a method that returns a set of all shared elements
    - intersection of two empty sets is an empty set
    - intersection of an empty set and non-empty set is an empty set
    - intersection of a non-empty set and an empty set is an empty set
    - intersection of two sets with no shared elements is an empty set
    - intersection of two sets with shared elements is a set of the shared elements
- a method taht return a set of all elements that are on ly in the first set
    - difference of two empty sets is an empty set
    - difference of empty set and non-empty set is an empty set
    - difference of a non-empty set and an empty set is the non-empty set
    - difference of two non-empty sets is a set of elements that are only in the first set
- a method that returns a set of all elements in either set
    - union of empty sets is an empty set
    - union of an empty set and non-empty set is the non-empty set
    - union of a non-empty set and empty set is the non-empty set
    - union of non-empty sets contains all unique elements     

Data structure:
- object and array

Algorithm:

constructor
  - take a value as argument
  - create an instance property with that value
  - if the value is empty return an empty array

isEmpty:
  - check if the set contain no elements, if the array is empty.
    - if there is no element return true
    - if there is alement return false

contains:
- take a value argument
  - check if the argument value is contain the the set
  - return true if the element is in the set
  - return false if the lement is not in the set

isSubset
- take one argument a new set:
  - check if all of its elements are contained in the other set
  - return true if empty set is a subset of another empty set
  - return true if empty set is a subset of non-empty set
  - return false if non-empty set is not a subset of empty set
  - return true if set with exact same elements

  
*/

function uniqueNumber(arr) {
  let onlyUnique = [];
 
    let sortArr = arr.sort();
    sortArr.forEach((element, index) => {
      if(element !== arr[index + 1]) {
        onlyUnique.push(element);
      }
    });
    return onlyUnique;
}

class CustomSet {
  constructor(set = []) {
    this.set = uniqueNumber(set);
  }

  isEmpty() {
    return this.set.length === 0;
  }

  contains(num) {
    return this.set.includes(num);
  }

  isSubset(newSet) {
   return this.isSubsetOfLarger(this.set, newSet.set)
  }

  isDisjoint(newSet) {
    return !this.isShareElement(this.set, newSet.set);
  }

  isSame(newSet) {
   return this.isSameElement(this.set, newSet.set);
  }

  add(element) {
    if(!this.set.includes(element)) {
      this.set.push(element);
      return new CustomSet(this.set);;
    }
    return new CustomSet(this.set)
  }

  isSameElement(arr1, arr2) {
    return arr1.sort().join() === arr2.sort().join();
  }

  isSubsetOfLarger(arr1, arr2) {
    if(arr1.length > arr2.length) return false;
    for(let i = 0; i < arr1.length; i++) {
      let currEle = arr1[i];
      if(!arr2.includes(currEle)) return false;
    }
    return true;
  }
  isShareElement(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
      let currEle = arr1[i];
      if(arr2.includes(currEle)) return true;
    }
    return false;
  }

  intersection(newSet) {
    let shared = [];
    let sorted = [this.set, newSet].sort((a,b) => a.length - b.length);
    let [ short, long ] = sorted;
    short.forEach(element => {
      if(long.includes(element)) {
        shared.push(element);
      }
    })

    return new CustomSet(shared)
  }

  difference(newSet) {
    let differElement = [];
    this.set.forEach(element => {
      if(!newSet.set.includes(element)) {
        differElement.push(element);
      }
    })
    return new CustomSet(differElement);
  }

  union(newSet) {
    let bothSets = this.set.concat(newSet.set);
    return new CustomSet(bothSets)
  }

}
module.exports = CustomSet;