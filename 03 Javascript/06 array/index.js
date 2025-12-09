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

console.log(arr)  //it also changes beacuse arr was passed to arr2 by reference
// objects copy by reference !

const arr3=[100,20,22]; //we cant change this

