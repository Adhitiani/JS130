/*
Water Song

Write a program that can generate the lyrics of the 99 Bottles of Beer song. See the test suite for the entire song.

PEDAC
Understanding the problem:
- given a number or more, return a verse of song based on the given number.
- if 0 is passed in, the verse is different than the rest.
- if two argument is passed in, the verse start at the first argument and end at the second argument.
- if no argument is passed in return the whole songs

testCase:
- we need a class waterSong with static methods:
verse:
  - take one argument
    - return a verse with the given number is returned.
    - if the number is 0 a special lyric is returned
verses:    
    - take two arguments
      - return the verse start at the first argument and end at the second argument.
      - if the number is 0 a special lyric is returned
lyric: 
  - return the whole song.

  the normal verse:
  "(startNumber) bottles of water on the wall, (startNumber) bottles of water.\n" +
  "Take one down and pass it around, (startNumber - 1) bottles of water " +
  "on the wall.\n";
  
  1 bottle verse: --- if (startNumber - 1) is 0 
  "1 bottle of water on the wall, 1 bottle of water.\n" +
  "Take it down and pass it around, no more bottles " +
  "of water on the wall.\n"; 

Data Structure:
- input: number
- output:   string

- iteration method to count how many bottle left

Algoritme:
- store each line into a variable to refer to
- verse:
  - take one argument
  - return each line based on the given number
*/

class WaterSong {
  static number;
  static nextNumber;
  static line1 = `${WaterSong.number} bottles of water on the wall, ${WaterSong.number} bottles of water.\n`
  static line2 =  `Take one down and pass it around, ${WaterSong.nextNumber} bottles of water` + "on the wall.\n"
  static line3 = "Take it down and pass it around, no more bottles " + "of water on the wall.\n"
  static noMore = "No more bottles of water on the wall, no more " +
  "bottles of water.\nGo to the store and buy some " +
  "more, 99 bottles of water on the wall.\n";

  verse(repeat){
    if(repeat > 0) {
      WaterSong.number = repeat;
      WaterSong.nextNumber = repeat - 1;
      return line1 + line2
    }
  }
}

module.exports = WaterSong;