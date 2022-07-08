// const  name = "Anjette";
// let age = 22;
// let str = "I am a " + name + " and I am a " + age
// let 
//Default function value
// function saygreeting(name = "Unknown"){
//   let greeting = `Hello my name is ${name}`;
//   console.log(greeting);
// }
// saygreeting("Dee");
// function addNumber(a=1, b=2){
//   return a + b;
// }

// let res = addNumber(6);
// console.log(res);
// function sayGreeting(name){
//   //console.log(`Good morning, ${name}`);
//   return `Good morning, ${name}`;
// }
// console.log(sayGreeting('Dee');
// const sayGreeting = (name) => `Good morning, ${name}`;
// console.log(sayGreeting('Dee'));
// let sayGreeting = (name) => `Good morning, ${name}!`;
// function sayGreeting(name) {
//   return `Good morning, ${name}!`;}
  // no hoisting with arrow functions
//   function name() {
//     /// arguments
//     console.log(arguments[1]);
//   }
// name(1,5,6,7);

// // let name = (...arguments) =>{
// //   console.log(arguments);
// // }
// // name(1,6,7,8);
// let name = (...args) => { 
//   console.log(args); 
// }
// name(1);
// let age = 19
// let checkAge = (age<18)
// ? () => console.log("Go Home")
// : () => console.log("Enjoy the party") ;
// checkAge();
// setInterval(() => {
//   if (age>checkAge()) {
//     sayGreeting("I've got a girl");
function Animal(name, color){
  this.name = name;
  this.color = color;

  this.introduce = function(){
    //console.log(`My name: ${this.name}. My skin color is ${this.color}`);
    console.log(this);
  }
  this.arrow = () => console.log(this)
}
let animalX = new Animal("green", "brown");
console.log(animalX);
animalX.introduce();