/*

ASSIGNMENT RULES

– All the answers must be written in JavaScript

– You can ask for help, reach the Teaching Assistants if needed

– You can Google / use StackOverflow BUT only when you think you need something we didn’t cover during lessons yet

– You can test your code in a separate file or de-commenting the single exercises in this one.

– You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you’re using macOS or Linux.

– Complete as many exercises as you can

*/

// JS Basics
console.log(
  "----------------------------------------------------------------JS BASICS-------------------------------------------------"
);
/* EXERCISE A
Create a variable called test and assign a string value to it.
*/
console.log(
  "------------------------------------------------EXERCISE A---------------------------------"
);
let test = "I am a string";
console.log("The string is --->", test);
/* EXERCISE B
Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/
console.log(
  "------------------------------------------------EXERCISE B---------------------------------"
);
let sum = 10 + 20;
console.log("Total sum is", sum);
/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
console.log(
  "------------------------------------------------EXERCISE C---------------------------------"
);
let random = Math.random() * 20;
console.log(random);

/* EXERCISE D
Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
console.log(
  "------------------------------------------------EXERCISE D---------------------------------"
);
const me = {
  name: "Francisco Javier",
  surname: "Fortes Carrillo",
  age: 32,
};
console.log(me);

/* EXERCISE E
Write a piece of code for programmatically removing the age property from the previously create object.
*/
console.log(
  "------------------------------------------------EXERCISE E---------------------------------"
);
delete me.age;
console.log(me);

/* EXERCISE F
Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/
console.log(
  "------------------------------------------------EXERCISE F---------------------------------"
);
me.skills = ["HTML", "CSS", "JS"];
console.log(me);

/* EXERCISE G
Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/
console.log(
  "------------------------------------------------EXERCISE G---------------------------------"
);
me.skills.pop();
console.log(me);
// JS Functions
console.log(
  "---------------------------------------------------------------JS FUNCTIONS-----------------------------------------------"
);
/* EXERCISE 1
Write a function called dice; it should randomize an integer number between 1 and 6.
*/
console.log(
  "------------------------------------------------EXERCISE 1---------------------------------"
);
function dice() {
  return 1 + Math.floor(Math.random() * 6);
}
console.log(dice());

/* EXERCISE 2
Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/
console.log(
  "------------------------------------------------EXERCISE 2---------------------------------"
);
function whoIsBigger(firstParameter, secondParameter) {
  if (firstParameter > secondParameter) {
    console.log("First parameter (", firstParameter, ") won");
  }
  if (secondParameter > firstParameter) {
    console.log("Second parameter (", secondParameter, ") won");
  }
  else (firstParameter === secondParameter) {
    console.log("Parameters introduced are exactly the same");
  }
}

/* EXERCISE 3
Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

console.log(
  "--------------WIP-----------------EXERCISE 3---------------------------------"
);

function splitMe(sentence) {
for(let index = 0; index<sentence.length; i++ ) {
  const currentCharacter = sentence[index];
  if currentCharacter === "t" {
    break;
  }
}
}
//   //   for (let index = 0;)
//   // }
//   // const sente = "I am doing this on Saturday";
//   console.log(splitMe.split(" "));
// }

// const sente = "I am doing this on Saturday";
// console.log(splitMe.split(" "));
// const oneString = "I am doing this on Saturday"
// const splitMe = function spl(oneString) {
//   for
// }
/* EXERCISE 4
Write a function called deleteOne which receives a string and a boolean as parameters.
If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
console.log(
  "------------------------------------------------EXERCISE 4---------------------------------"
);

/* EXERCISE 5
Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"
*/
console.log(
  "------------------------------------------------EXERCISE 5---------------------------------"
);
function onlyLetters(){



}
const onlyLetters = "My password contains four numbers '1234', can you see it?";
console.log(onlyLetters.split(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
/* EXERCISE 6
Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/
console.log(
  "------------------------------------------------EXERCISE 6---------------------------------"
);

/* EXERCISE 7
Write a function called whatDayIsIt that should return the current day of the week.
*/
console.log(
  "------------------------------------------------EXERCISE 7---------------------------------"
);

/* EXERCISE 8
Write a function called rollTheDices which receives a number as a parameter.
It should invoke the dice() function defined in Ex1 the specified amount of times,
and return an object containing a sum property holding the sum of all values extracted
and a values array containing the single values of the dicerolls themselves.
Example: RollTheDices(3) => returns {
sum: 10
values: [3, 3, 4]
}
*/
console.log(
  "------------------------------------------------EXERCISE 8---------------------------------"
);
function rollTheDices(){

}
/* EXERCISE 9
Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/
console.log(
  "------------------------------------------------EXERCISE 9---------------------------------"
);

/* EXERCISE 10
Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.
*/
console.log(
  "------------------------------------------------EXERCISE 10---------------------------------"
);
function isTodayMyBirthday(day, month, year) {
  if (day === 13 && month === 2 && year === 1990) {
    return true;
  } else {
    return false;
  }
}

// JS Arrays & Objects
console.log(
  "------------------------------------------JS Arrays & Objects--------------------------------"
);

// NOTE: the movies array used in some exercises is defined at the end of this file
/* EXERCISE 11
Write a function called deleteProp which receives an object and a string as parameters,
and returns the given object after deleting its property named as the given string.
*/
console.log(
  "------------------------------------------------EXERCISE 11---------------------------------"
);

/* EXERCISE 12
Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/
function oldestMovie ()
const oldest = Math.min(...movies.year)


/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/

/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.

*/
function onlyTheTitles ()





/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/

/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/

/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

*/

/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.

*/

/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.

*/

/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.

*/

// [EXTRAS] JS Advanced

/* EXERCISE 21

Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.

Example:

halfTree(3)

*

**

***

*/

/* EXERCISE 22

Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.

Example:

tree(3)

*

***

*****

*/

/* EXERCISE 23

Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.

*/

/* WHEN YOU ARE FINISHED

Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today’s Eduflow.

*/

/* This movies array is used throughout the exercises. You’re not supposed to alter it. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",

    Year: "2001",

    imdbID: "tt0120737",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",

    Year: "2003",

    imdbID: "tt0167260",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Two Towers",

    Year: "2002",

    imdbID: "tt0167261",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },

  {
    Title: "Lord of War",

    Year: "2005",

    imdbID: "tt0399295",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },

  {
    Title: "Lords of Dogtown",

    Year: "2005",

    imdbID: "tt0355702",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings",

    Year: "1978",

    imdbID: "tt0077869",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },

  {
    Title: "Lord of the Flies",

    Year: "1990",

    imdbID: "tt0100054",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },

  {
    Title: "The Lords of Salem",

    Year: "2012",

    imdbID: "tt1731697",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },

  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

    Year: "1984",

    imdbID: "tt0087365",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },

  {
    Title: "Lord of the Flies",

    Year: "1963",

    imdbID: "tt0057261",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },

  {
    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
