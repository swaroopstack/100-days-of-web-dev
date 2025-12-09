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

//string functions
console.log(str4.length);  // length
console.log(str4[2]);      //indexing
console.log(str4.toUpperCase);
console.log(str4.indexOf('day'));  //gives first index
console.log(str4.lastIndexOf('day')); //last index
console.log(str4.islice(2,6));   //last index is not included
//-ve indexing give reverse in slicing
console.log(str4.substring(2,5)); //can't put -ve indexing
console.log(str4+' '+str3); // concatenation
console.log(str4.replace("day",'hey')) //replace frist
console.log(str4.replaceAll("day",'hey')) //replace all
console.log(str4.trim());   //remove start and end spaces

const names="hello,mr,how,do,you,do";
console.log(names.split(",")) //gives an array

console.log(10+"HELLo"+20);  // 10HELLO20
console.log(10+20+"HELLo");  // 30HELLO


