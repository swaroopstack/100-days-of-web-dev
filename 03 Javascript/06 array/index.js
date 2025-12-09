let marks=[92,92,100,82];  // array
console.log(marks.length);

let arr=[100,78,"swaroop",true]; // we can add hetrogeous data
console.log(arr[3]);  // indexing

// typeof of array is Object

arr[1]=90;   // we can change the value
console.log(arr);

arr.push(99);  //add element in the end of array
arr.push("hero");
arr.pop();     // remove last element
arr.unshift(93);  // add element at begining
arr.shift();  // delete first element
//using shift and unshift is not that much recommended beacuse it effects the perfromance

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

for(let num of arr){
    console.log(num);
}

let arr2=arr;
arr2.push(60);

console.log(arr);  //it also changes beacuse arr was passed to arr2 by reference
// objects copy by reference !

const arr3=[100,20,22]; //we cant change this

console.log(arr.slice(2,4));

// console.log(arr.splice(2,4)) removes part of org array
//const arr4=arr.concat(arr2);

// spread operator
const arr4=[...arr,...arr2,...arr3];
console.log(arr4);

const names=["rahul","Dev","Mahipal","Swaroop"];
console.log(names.toString());
console.log(names.join("-"));
console.log(names.indexOf("Dev"));
console.log(names.includes("Dev"));

names.sort();
console.log(names);
// rahul will come at end because in ASCCI table first capital then small
names.reverse();

const a=[100,20,23,45,429,52];
a.sort();  
console.log(a);  // it will not sort number wise
//instead it will sort character by character

//why it sort character by character 
// because it can store hetrogenous data also, so if a array have number and string in that case character by character

//now how to sort normally 
a.sort((a,b)=>a-b);  // how this works?
//-ve : pehle a aayega phir b aayega
//+ve : pehle b aayega phir a aayega

a.sort((a,b)=>b-a); // reverse

const c=[10,23,42,[324,124,214,3],34]
//const d=c.flat();    flat only to one level
const d=c.flat(Infinity);  //will flat all
console.log(d);

console.log(a["0"]);  // we can access in this way also

a.name="Mahendra";
console.log(a); // in the end there will be name:Mahendra
