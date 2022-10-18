/*
Clock

Create a clock that is independent of date.

You should be able to add minutes to and subtract minutes from the time represented by a given clock object. Two clock objects that represent the same time should be equal to each other.

You may not use any built-in date or time functionality; just use arithmetic operations.

Understanding the Problem
- create a clock
- we can add minutes to
- we can substract minutes from
- two clock objects that represetn the same time should be equal

Example and test case:
- we need Clock class with method:
  - static at:
    - take one argument of number represent hour and an optional number represent minutes
    - create clock 24 hours, return string 'hh:mm'

  - static add
    - take one argument a number represent minutes
    - add minutes to the clock

  - static substract
    - take one argument a number repesent minutes
    - substract minutes from the clock

- clocks show the same times  are equivalent.

Data Structure:
- input number: represent hours and minutes
- output string: represent the times 'hh:mm'
- need helper functionto convert minutes to hour
- need helper function to convert days to hours?

Algorithm
- create one day variable assign it to 24
- create one hour in minutes and asign it to 60

at:
return 'hh:mm'
minutes:
- create numToStrMinutes = '';
- create numberMin = 0;
- if the second argument is undefined assign numToStrMinutes to '00'
- else if the minutes is under 60:
   if the minutes is under 10 add 0 infront of the number and assign it to minutes 
   else assing it as is in string form
- else:
  - divided it with 60 and take the floor number of the result, add it to the hour
  - use the reminder of 60 and add it to the minutes

- hour:
if the hour is 0 return the hour '24'
if the hour is 24 retun the hour '00'
if the hour is more than 24:
   - use the reminder of 24 and assign it to hour
   - 

minutes to hour:
  - divided it with 60 and take the floor number of the result, add it to the hour
  - use the reminder of 60 and add it to the minutes

dayInhour:
  - use the reminder of 24  and assign it to hour

*/

class Clock {
  static at(hour, minutes) {
    let mm = '00';
    let hh = '00';

    if(minutes < 10) mm = '0' + String(minutes);
    
  }
}