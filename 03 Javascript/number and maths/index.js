let a=20;
let b=3.14654;
console.log(b.toFixed(2));  //to print the number after the decimal
//it will not change the real value of b
console.log(typeof b.toFixed(2));  // type is string
console.log(b.toPrecision(5)); // kitni value leni hai
console.log(b.toString());

//new method to declare number
let c= new Number(20);  //type is object
let d=30;               //type is number

console.log(c==d);    // false

//non primitive : reference bases per compare honge
// primitive: compare by values

console.log(Math.abs(-4)); //output is absolute value 4
console.log(Math.PI);
console.log(Math.max(11,12,22,2,4,67));
console.log(Math.random());  // it gives random value
//it will generate from [0,1) : 0 is included 1 is excluded (from 0 to 1)

//sattebaazi ke game banate time use kar sakte hai
// agar mujhe 0-9 chaiye toh
console.log(Math.random()*10); // ab yeh 0-9 print karega
console.log(Math.floor(Math.random()*10)); // ab yeh floor value dega point mei nahi dega
//agar 1-10 karni ho toh
console.log(Math.floor(Math.random()*10)+1);

//Math.floor((Math.random()*toatalNumberOfOutcomes)+shift

//Math.floor((Math.random()*(max-min+1))+min

//Generate a OTP of 4-digit  (1000-9999)
console.log(Math.floor((Math.random()*(9999-1000+1)))+1000);

//question- why math.random is not safe
// why using time of device as input is also wrong in random number generation

//how crypto lib solve this problem
//ans - it takes value from device that will differ in all other devices and is changing regularly
//eg- cursor crdinates, ram usage , heat,etc , also this can be from server side also
 
