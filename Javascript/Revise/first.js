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