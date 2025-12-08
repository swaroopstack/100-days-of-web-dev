//create strings
const str1="Hello";
const str2='Dosto';
const str3=`SINGHAM`; // morden tarika 

// why use mordern tarika ?
// "" ya '' mei hume ek hi line mei likhna hota hai agar humne aisa nahi kiya toh error aayega
// eg- const str1="Hello
//  Mitro";                  ---- yeh error dega 
// par agar hum `` yeh use karenge toh error nahi aayega

console.log(str1,str2,'\n',str3);  // \n - is escape sequence which gives new line 

// what if we want to put a variable inside a string
let day=3;
const str4=`My birthday is on ${day} dec`;
console.log(str4);