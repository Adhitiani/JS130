//Write a program that takes a word and a list of possible anagrams and selects the correct sublist that contains the anagrams of the word.

//For example, given the word "listen" and a list of candidates like "enlists", "google", "inlets", and "banana", the program should return a list containing "inlets". Please read the test suite for the exact rules of anagrams.

/*
PEDAC

Problem:
given a word and a list of words, selects the correct sublist that contain the anagrams of the word.
- anagram is a word  formed by rearranging the letters of a different word, typically using all the original letters exactly once.
- if there is no match return an empty array
- identical word is not anagram
- anagrams are case-insesitive

Example & test cases:
- we need Anagrams class with methods:
  - constructor
    - take one arguments (a word in a string)
    - doesn't throw any error
  - detector:
    - take one argumens an array ( a list of possible anagram words)
    - check if any words in the list is anagram of the given word
    - return an array of anagrams

Data Structur:
- input: a string and an array
- output: an array

A:
- constructor
  - take an argument string (word)

- detector
  - take an argument a list of words in an array
  - create a anagramList and assign it to an emtpy array
  - iterate over the array, in each iteration:
    - check if the current word is anagram (helper function) of the given word
      - if it is push it to the anagramList array 
  - end iteration 
  - return anagramList 

- isAnagram:
 - if the word is the same word return false
 - check if the word has the same letter:
   - change both of the word to lowercase and sort them 
   - if the sorted word is equal then it is anagram, return true;  

*/

class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(listWords) {
    let anagramList = [];
    listWords.forEach(ele => {
      if(this.isAnagram(ele)) {
        anagramList.push(ele);
      }
    });

    return anagramList;
  }

  isAnagram(testWord) {
    if(this.word.toLowerCase() === testWord.toLowerCase()) return false;
    
    let word1 = this.word.toLowerCase().split('').sort().join();
    let word2 = testWord.toLowerCase().split('').sort().join();
    return (word1 === word2) 
  }
}

module.exports = Anagram;