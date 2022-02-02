// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
person = {firstName: "Khanh", 
lastName: "Hoang", 
favFood: "Steak", 
bestFriend: person ={firstName: "Mickey", 
lastName:"The Great",
favFood: "Sushi"}};


// 2. console.log best friend's firstName and your favorite food
console.log(`Your best friend first name:  ${person.bestFriend.firstName}`);
console.log(`Your favorite food: ${person.favFood}`);
// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

let topArr = ["-","0","-"];
let midArr = ["-","X","0"];
let bottomArr = ["X","-","X"];
let tictactoeArr = [topArr,midArr,bottomArr]
// 4. After the array is created, 'O' claims the top right square.
// Update that value.
topArr[2] = "0";

// 5. Log the grid to the console.
console.log(tictactoeArr[0]);
console.log(tictactoeArr[1]);
console.log(tictactoeArr[2]);

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
let myEmail = "khanhqhoang@hotmail.com";
const regex = new RegExp("^[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+$");
//^ start of the string
//[a-zA-Z] Any single character in the range a-z or A-Z
//+ sign matches one or more of the preceding regex
// @ matches single instance of @ sign
// . matches single instance of . sign
// $ end of string

//use regexp test method to validate an email address
// return true if valid else return false
console.log(regex.test(myEmail));

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
let assignDate = new Date(assignmentDate);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
const daysToAdd = 7;
let dueDate = assignDate;
dueDate.setDate(dueDate.getDate() + daysToAdd);

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
let year = dueDate.getFullYear();
let monthNum = dueDate.getMonth()+ 1;
let monthName = months[dueDate.getMonth()];
let day = dueDate.getDate();
// add leading 0 in day and month
let formatted_date = `${year}-${monthNum.toString().padStart(2,'0')}-${day.toString().padStart(2, '0')}`;

let htmlStr = `<time datetime="${formatted_date} ">${monthName} ${day.toString().padStart(2, '0')}, ${year}</time>`;

// 10. log this value using console.log
console.log(htmlStr);