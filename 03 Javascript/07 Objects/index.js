//object 
// key value

const user={
    name:"Swaroop",
    age:19
    //"age"=19       we can store it as string also because in backend it alwyas store as string
}

//whn to use "" : when we are taking two words ,eg- permanent address (there is a space in between)

console.log(user.age); //access by key
console.log(user["name"]);
//and if we created permanent address 
// we have to call in this way only - user["permanent address"];

//CRUD operation : Create read update delete
user.adhaar=1234;
console.log(user);
delete user.age;  //deletion

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// not recommended to use loop in this way
for(let keys in user){
    console.log(keys,user[keys]);
    // console.log(keys,user.keys);  gives undifined, why?
}

//destructuring of object
const {name,age}=user;
//const { name: username,age: userage }=user;
console.log(name,age);

//destructuring of array
const arr=[12,13,14,14,56]
const {first,second}=arr;
console.log(first,second);

// for loop of array 
const temparr=Object.keys(user);
for(let keys of temparr){
    console.log(keys);
}

//this will not give you output in array
for(let [keys,values] of Object.entries(user)){
    console.log(keys,values);
}

//function in objects
const user={
    name:"Swaroop",
    age:19,
    greeting: function(){
        console.log(`hellooo mitrooo ${this.name} `);  // what is "this" , why we use it
    }
}

//what if we dont use this and instead use this ${user.name} in greeting above
const user2={
    name:"dev",
    age:20
}

user2.greeting=user.greeting;
user2.greeting();   //we will get greetings from user and the name will be displayed will be from user

// nested objects? 

//shallow copy
//const user2={...user};   why we do this ?? why it oly handle till one level

//const user2=structuredClone(user);      it handle nested also
// whats its limitations?

