//variable ko kaise banate hai ( let keyword )

let name="swaroop";
let age=18;
console.log(name,age);
age=19;
console.log(name,age);  // value changed of age 
console.log(typeof(name));

const num=7;
//num=3;                  // will give error as const cant be change  
console.log(num);

// old way
var a=10;
console.log(a);
var a=20;             // wont give any error but using let we can't declare same variable twice
console.log(a);


// scope for var
if(true){
    var b=20;
}
console.log(b);      // we get 20 because it can acsess inside the loop also

function func(){
    var c=30;
}
console.log(c);      //we get error in this


// scope for let
if(true){
    let x=10;
}
console.log(x);     // will give error

// data types

//primitive data types
//number,string,boolean,undefined,null,bigint,symbol

let c=10;  //number
let b=7.5;

let d="hello"   //string
let s='mitro'   

let login=true;  //boolean
let jhuta=false; 

let user;
console.log(user);  // output--> undefined

let nums=123456789987654321n;   // bigint

let weather = null;   //null ---> intentionally batate hai ki koi value nahi daalni

const id1=Symbol("id");  // symbol

//non primitive data types
//arr,object,function

let arr=[1,2,3,"hehe",true];   //array

let obj={                     // object
    name:"lalala",
    uid:1,
    age:18
}

let fun= function welcome(){            //function can also be stored in variable
    console.log("hellooo");
}

welcome();           // function calling
console.log(fun);    // function calling


// IMP --> in js when we check typeof for null we get object (bug hai bhai)
//agar theek kar diya toh purane code will get compromised

//IMP --> if we check typeof for arr we will get object (not a bug)
// all non primitive typeof is object
// function will show typeof function (but it is a object)

//primitive data types is immutable

/*
eg --> let a=10;
   _______
  |  10   |  ---> a
  |_______|

    a=20
   _______    _______
  |  10   |  |   20  |------>a
  |_______|  |_______|

  now 20 is a , we didnt overwrite 10 we made a new data 
              
*/

// proof that its immutable
let str="swaroop";
str[0]="R"
console.log(str);   //output ---> swaroop (because its immutable)

//non primitive data types are muatble

let arr1=[1,2,3,4,5,6,7];
arr[0]=3;      // now --> arr=[3,2,3,4,5,6,7]

let obj1={
    name:"lala",
    age:17
}
obj1.age=18;   //now age =18

