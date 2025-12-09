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

// DATE-Time

const now= new Date(); // give UTC date
console.log(now.toString()); //give correct and proper formatted date
console.log(now.toISOString());
console.log(now.toLocaleString());

//below operations give date from local time
console.log(now.getDay()); //gives day in number
console.log(now.getDate());
console.log(now.getMonth()); //IMP- months are taken from 0 onwards (Jan is 0)

//want to create own date
// year month date hour minute second millisecond 
const owndate= new Date(2025,11,12,11,45,34,127);
//but there is inconsistency in output the month will be diff
// this inconsistency came from java later java removed this inconsistency 
// why this inconsistenecy is not removed in js?
// ans- because many website are made on this inconsistency if changed , all the website will suffer

const current = Date.current();  // output is in milliseconds
//if we put this output in date(here) it will give exact date

//const old= Date.old();    ---> Thu Jan 01 1970

//How website that host contest manage two diff time zone when checking of a winner
// eg- if someone from india started contest at 4:51 am, 1 oct
// USA guy started the contest from 7:21pm, 30 sept 
//what if indian took 10 minutes to solve the problem while usa student took 20 min 
// then the time of the usa student is still ahead because of time diff
// ans- we will check univesal time UTC

//UTC importance?