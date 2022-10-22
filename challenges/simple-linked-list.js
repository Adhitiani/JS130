/*
Write a simple linked list implementation. The linked list is a fundamental data structure in computer science, often used in the implementation of other data structures.

The simplest kind of linked list is a singly linked list. Each element in the list contains data and a "next" field pointing to the next element in the list of elements. This variant of linked lists is often used to represent sequences or push-down stacks (also called a LIFO stack; Last In, First Out).

Let's create a singly linked list whose elements may contain a range of data such as the numbers 1-10. Provide functions to reverse the linked list and convert a linked list to and from an array.

P:
- a simple linked list implementation called a singly linke list.
- Each element in the list contains data and a "next' field pointing to the next element in the list of lement.
- create a singly linked list whose elements may contain a range of data such as number 1 - 10
- provide functions to reverse the linked list and convert a linked list to and from an aray.

Question:
What is linked list?
- A linked list is a linear data structure similar to an array. However, unlike arrays, elements are not stored in a particular memory location or index. Rather each element is a separate object that contains a pointer or a link to the next object in that list.
-  A linear data structure which each element is a separate object that contain a pointer or a link to the next object in taht list.
- Each element contains two items: the data stored and a link to the next code.
- The data can be any valid data type.
- The entry point to a linked list is called the head. 
- The head is a reference to the first node in the linked list. 
- The last node on the list points to null. If a list is empty, the head is a null reference.

Example and test cases:
From the test case we need two classes:

- SimpleLinkedList
  - static methods:
    - create a new simpleLinkedList intance from a given array argument
    - fromArray() --> take an array as an argument, return list?

  - instance method:
    - size() --> return the size of the list
    - isEmpty() --> return true if the list is empty, return false otherwise.
    
    - push() --> push the element into the list
      - convert the argument to the value of element
      - pass in the element as the head property of the instance of simplelinlist

    - peek() --> return the value of object, if the object is empty return null
    - head() --> if the return value is instance of Element return true
    - toAray() --> convert list to an array.
    - reverse() --> reverse the list

- Element
  metodes:
  - constructor:
    - It takes two arguments.
    - The first argument is the current value
    - the second argument is the next value with default value `null` 

  - datum() --> return the current value?
  - isTail() --> return boolean if the current value is the last element in the list. It doesn't have any next value or null.
  - next() ---> return the next value or null as default


Data structure
array, object, other values
- The method used to create an array from a linked list should not mutate the linked list used to call it.
 - The method used to reverse a linked list should not mutate the linked list used to call it. Instead, it should return a new linked list.


 Algoritm:

 - Create Element class with methods:
   - contructor:
     - it takes two arguments, the first value is the current value store in the list, the seoncd is optional with the default value `null` to be store after the current value.

  - datum() --> return the data value of the `Element`
  - isTail() --> return boolean if the current value is the last element in the list. It doesn't have any next value or null.
  - next() ---> return the next value or null as default

- create simpleLinkedList class with methods:
  - static method:
    -  fromArray()
   


class Element {
  constructor(value = null, nextVal = null) {
    this.value = value;
    this.nextVal = nextVal;
  }

  datum() {
    return this.value;
  }

  isTail() {
    return !this.next()
  }

  next() {
    return this.nextVal || null;
  }
}


class SimpleLinkedList {
  static fromArray(arr) {
    arr = arr || [];

    let newList = new SimpleLinkedList();
    arr.reverse().forEach(ele => newList.push(ele));
    return newList;
  }

  size() {
    let count = 0;
    let currEle = this.head()
    while(currEle) {
      count++;
      currEle = currEle.next();
    }
    return count;
  }

  isEmpty() {
    return (this.head() === null);
  }

  push(val){
    let element = new Element(val, this.head());
    this.elHead = element;
  }

  head() {
    return this.elHead || null;
  }

  peek(){
    let element = this.head();
    return element ? element.datum() : null;
  }
 
  pop(){
    let element = this.peek();
    let newHead = this.head().next();

    this.elHead = newHead;
    return element;
  }

  toArray() {
    let array = [];

    let currentElem = this.head();
    while (currentElem !== null) {
      array.push(currentElem.datum());
      currentElem = currentElem.next();
    }

    return array;
  }

  reverse() {
    let list = new SimpleLinkedList();

    let currentElem = this.head();
    while (currentElem !== null) {
      list.push(currentElem.datum());
      currentElem = currentElem.next();
    }

    return list;
  }

};

*/

class Element {
  constructor(datumVal, nextElement) {
    this.datumVal = datumVal;
    this.nextEl = nextElement;
  }

  datum() {
    return this.datumVal;
  }

  next() {
    return this.nextEl || null;
  }

  isTail() {
    return !this.next();
  }
}

class SimpleLinkedList {
  static fromArray(array) {
    array = array || [];

    let list = new SimpleLinkedList();
    [...array].reverse().forEach(elem => list.push(elem));
    return list;
  }

  head() {
    return this.headEl || null;
  }

  size() {
    let size = 0;
    let currElement = this.head();

    while (currElement) {
      size += 1;
      currElement = currElement.next();
    }

    return size;
  }

  isEmpty() {
    return !this.head();
  }

  push(datum) {
    let element = new Element(datum, this.head());
    this.headEl = element;
  }

  peek() {
    let head = this.head();
    return head ? head.datum() : null;
  }

  pop() {
    let datum = this.peek();
    let newHead = this.head().next();

    this.headEl = newHead;
    return datum;
  }

  toArray() {
    let array = [];

    let currentElem = this.head();
    while (currentElem !== null) {
      array.push(currentElem.datum());
      currentElem = currentElem.next();
    }

    return array;
  }

  reverse() {
    let list = new SimpleLinkedList();

    let currentElem = this.head();
    while (currentElem !== null) {
      list.push(currentElem.datum());
      currentElem = currentElem.next();
    }

    return list;
  }
}

module.exports = { SimpleLinkedList, Element };
