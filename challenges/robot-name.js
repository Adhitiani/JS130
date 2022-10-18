/*
Robot Name

Write a program that manages robot factory settings.

When robots come off the factory floor, they have no name. The first time you boot them up, a random name is generated, such as RX837 or BC811.

Every once in a while, we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it will respond with a new random name.

The names must be random; they should not follow a predictable sequence. Random names means there is a risk of collisions. Your solution should not allow the use of the same name twice when avoidable.

PEDAC:
- no input
- output : string
- the name is generated first time when it boot up after manucfactured and as the first time after factory reset
- The randomly generated names seems to follow a patter of 2 uppercase alphabetic cahr and followed by 3 digits : RX837 or BC811

Example / test case:
- wee need to create RObot class with method:
 - name:
   - create a random name: The format of the name is 2 uppercase alphabet characters followed by three digits.
 - reset:
   - create another name

 
 Data structure:
 - string
 - array  to store all the name that has been created.
 - if the current instance Robot doesnt already have a saved name, generate one
 - make sure no collisions with existing robot names.


 ALghoritm:
 - static listName: 
   - create an empty array
   - a new name will be pushed into the array everytime a name is created.
 
   - createName:
     - create an alphabet list
     - create a numerical list
     - create newName and initialize it to an empty string
     - create 2 digit random capitalized letter, contatenated with the newName
     - create 3 digit random number, concatenated with the new name
     - return newName
  - name:
    - create anew name
    - if the new name is not includes in the listName return name and add it to the new name
      else create newOne
  
  - reset:
    - create a new name
    - if the new name is not included in the list name return the newname and add it to the listName
      else create a new one  
*/

class Robot {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  static listName = [];

  name() {
    if (this.robotName) return this.robotName;
   
    while(Robot.listName.includes(this.robotName) || !this.robotName) {
      this.robotName = this.createName();
    }
    
    Robot.listName.push(this.robotName);
    return this.robotName;
  }

  reset() {
    let index = Robot.listName.indexOf(this.robotName);
    Robot.listName.splice(index, 1);
    this.robotName = null;
  }

  createName() {
    let newName = '';
    let counterLetter = 1;
    while(counterLetter <= 2) {
      let randomIndex = Math.floor(Math.random()* 26)
      let letter = Robot.alphabet[randomIndex]
      newName += letter;
      counterLetter++
    }
    let counterNumeric = 1
    while(counterNumeric <= 3) {
      let numeric = Math.floor(Math.random() * 10)
      newName += numeric;
      counterNumeric++
    }
    return newName;
  }
}

module.exports = Robot;