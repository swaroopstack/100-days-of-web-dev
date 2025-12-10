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

for(let keys in user){
    console.log(keys,user[keys]);
    // console.log(keys,user.keys);  gives undifined, why?
}

const {name,age}=user;
console.log(name,user);

