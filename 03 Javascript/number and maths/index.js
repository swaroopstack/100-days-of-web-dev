let a=20;
let b=3.14654
console.log(b.toFixed(2));  //to print the number after the decimal
//it will not change the real value of b
console.log(typeof b.toFixed(2));  // type is string
console.log(b.toPrecision(5)); // kitni value leni hai
console.log(b.toString())

//new method to declare number
let c= new Number(20);  //type is object
let d=30;               //type is number

console.log(c==d);    // false
