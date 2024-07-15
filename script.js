/*#########################################################################
                                    01
 #########################################################################*/
 /*1. What will be the output of the following code and why?*/
// SOLVE

function scopeTest() {
  var varVariable = "I am var😑"; // global scope
  let letVariable = "I am let😑"; //block scope
  const constVariable = "I am const😑"; //block scope
  if (true) {
    console.log(varVariable); //output I am var
    console.log(letVariable); //output  I am let
    console.log(constVariable); // output I am const
  }
}

scopeTest();




/*#########################################################################
                                    02
 #########################################################################/


/*02 Write a function greet that takes two parameters, name and greeting.
greeting should have a default value of "Hello". If only the name is provided,
the function should return the greeting followed by the name. If both are provided,
it should return the custom greeting followed by the name.*/

// a function greet that takes two parameters, name and greeting
// greeting should have a default value of "Hello".
function greet(name, greeting = "Hello") {
  return `${greeting} ${name}`;
}
console.log(greet("Saiful")); //output Hello Saiful
console.log(greet("Saiful🤐", "Good morning😪,")); //Good morning, saiful





/* #########################################################################
                                    03
 ######################################################################### */

/* 03 Write a function sum that takes any number of arguments and returns their sum using the rest parameter.*/

function mySum(...argu) {
  let sum = 0;
  for (let i = 0; i < argu.length; i++) {
    sum += argu[i];
  }
  return sum;
}

console.log(mySum(1, 2, 3)); //op :4
console.log(mySum(10, 20, 30)); //op :60
console.log(mySum(5)); //op :5




/* #########################################################################
                                    04
 ######################################################################### */

/* 04 Given the following arrays, use the spread operator to merge them into a new array mergedArray. */

// solve 1
const array1 = [1, 2, 3];
const array2 = [3, 4, 5, 6];
const array3 = [7, 8, 9];
const mergedArray = [...array1, ...array2, ...array3];
console.log(mergedArray);//OutPut [1, 2, 3, 3, 4,5, 6, 7, 8, 9]

//solve 2

//  solve it  another way
let arryBox = array1.concat(array2, array3); // OutPut [1, 2, 3, 3, 4, 5, 6, 7, 8, 9  ]
console.log(arryBox);







/* #########################################################################
                                    05
 ######################################################################### */

/* 05 Write an object person using the object literal syntax extensions.
The object should have properties name and age, and a method greet that returns a greeting message.*/

//SOLVE
const name = "mdsaiful170";
const myage = "22";

const person = {
  name: "mdsaiful170",
  myage: "22",

  greet() {
    console.log(`Hi, I' ${name} 😀 and I'm ${myage} years old`);
  },
};
// person variable
const storePerson = person.greet();
console.log(storePerson);// output Hi, I' mdsaiful170(Chappie) and I'm 22 years old







/* #########################################################################
                                06
 ######################################################################### */

/* 06. Write a `for...of` loop to iterate over the following array and print each element to the console. */
//  const fruits = ["apple", "banana", "cherry"];

//SOLVE
const myVegetables = ["Alu😋", "Laow😛", "mistiKumra😊", "borboti🤪", "Uri😋"];
let num = 0;
for (let buying of myVegetables) {
  console.log(++num + " " + buying);
}
/* **** OutPut**
1 Alu�
2 Laow�
3 mistiKumra�
4 borboti�
5 Uri�
*/






/* #########################################################################
                            07
 ######################################################################### */

/* 07 Use template literals to create a string that includes variables name and age. */

const MyName = "hero Alom😂";
const MyAge = 65;
const myDetails = `My name is ${MyName}, and  I am${MyAge}🥴  years old.`;
console.log(myDetails);//OutPut My name is hero Alom�, and  I am65�  years old.








/* #########################################################################
                            08
 ######################################################################### */

/* 08 You have an array of objects representing students and their grades.
Use a for...of loop to iterate over the array and print each student's name and grade.*/

//SOLVE
const BangladeshNewTranding = [
  { topicName: "kutaandolon😐", startdate: 20240701 },
  { topicName: "ProsnoFaush😥", startdate: 20240625 },
  { topicName: "CopaAmerica_worldCup2024😂", startdate: 20240601 },
];

let total = 0;
for (let { topicName, startdate } of BangladeshNewTranding) {
  console.log(++total + " " + topicName, startdate);
}
/*    **** OutPut ****
1 kutaandolon� 20240701
2 ProsnoFaush� 20240625
3 CopaAmerica_worldCup2024� 20240601*/








/* #########################################################################
                            09
######################################################################### */

/* 09You have a nested array of numbers. Use a for...of loop to iterate over each inner array and print the sum of its elements. */

// SOLVE
const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let SuM = 0;

for (let nestData of nestedArrays.flat()) {
  SuM += nestData;
}
console.log(`the sum of its elements ` + " " + SuM);// output  the sum of its elements  45










/* #########################################################################
                            10
######################################################################### */

/*10 Use template literals to create a string that includes variables a and b, as well as the result of their addition.*/

//SOLVE

const a = 5;
const b = 10
const result = `The sum of ${a} and ${b} is ${a + b}."`
console.log(result) //output The sum of 5 and 10 is 15."
