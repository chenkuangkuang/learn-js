const person = { name: "yideng" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}
console.log(sayHi.call(person, 5)); // yideng is 5;
console.log(sayHi.bind(person, 5)); // funciton 

