let marks = [10, 20, 30];
let iter = marks[Symbol.iterator]();

console.log(iter.next()); 
console.log(iter.next()); 
console.log(iter.next()); 
console.log(iter.next()); 