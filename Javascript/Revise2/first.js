let fullname= "Nikhil Agrawal";
console.log(fullname);

const age=25;    //value cant be changed
console.log(age);

let x=null;
console.log(x);

let y;
console.log(y);

let isFollow=false;
console.log(isFollow);

{
    let fullname= "Nikhil";
    console.log(fullname);
}

console.log(typeof isFollow);

    const student = {
        name: "Nikhil",
        marks: 50,
        isPass: true
};

console.log(student.name);
console.log(student["marks"]);

student.name = "Nikhil Agrawal";
console.log(student.name);

let a=2;
let b=3;
console.log("a+b=",a+b);

console.log("a**b=",a**b);

let mode="dark";
let color;

if(mode == "dark"){
    color="black";
}
else{
    color = "white";
}

console.log(color);
console.log("Sum of first 5 natural numbers:");
let sum =0;
for(let i=1;i<=5;i++){
    sum+=i;
}
console.log("Sum: ",sum);

let len=0;

for(let i of fullname){
    console.log(i);
    len++;
}

console.log("Length: ",len);

for(let i in student){
    console.log(student[i]);
}

console.log("All even numbers: ")

for(let i=0;i<=100;i++){
    if(i%2===0){
        console.log(i);
    }
}

// let gameno = 8;
// let num = prompt("Guess the number: ");
//
// while(num!=gameno) {
//     num = prompt("Your guess was wrong, enter again: ");
// }
//
// console.log("You guessed the right number i.e. ",num);

console.log("String length: ",fullname.length);

console.log(fullname[0]);

console.log(`My full name is ${fullname}`);

let cname = fullname.toUpperCase();
console.log(`My name is ${cname}`);

console.log(fullname.slice(0,4));

let marks = [34,45,49,50];

console.log(marks);

for(let i of marks){
    console.log(i);
}


let marksa = [30,35,40,45,50];
let suma=0;
let cnt=0;

for(let i of marksa){
    suma+=i;
    cnt++;
}

console.log("Average: ",suma/cnt);

marksa.push(55);
console.log(marksa);

console.log("Deleted Item: ",marksa.pop());

console.log(marksa);

console.log(marksa.toString());

// Function

function myFunction(msg){
    console.log(msg);
}

myFunction("HI!");

function add(a,b) {
    return a + b;
}

console.log(add(2,3));


const arrowSum = (a,b) => {
    return a + b;
}

console.log(arrowSum(2,3));


const numVowels = (str) => {
    let count=0;
    for(let i of str){
        if(i==='a' || i==='e' || i==='i' || i==='o' || i==='u'){
            count++;
        }
    }
    return count;
}

console.log(numVowels("aeioudbcf"));

let cities = ["boston", "newyork","california","atlanta"];


cities.forEach((city) => {console.log(city.toUpperCase())});


let arr = [1,2,3,4,5,6];

// arr.forEach((i) => {
//     console.log(i*i);
// });

arr = arr.map((i) => {
    return i*i;
})

console.log(arr);

let newArr = arr.filter((i) => {
    return i%2===0;
})
console.log(newArr);



