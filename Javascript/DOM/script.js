console.log(window);
console.log(document);  // similar to window.document, because window is global object dont need to write window. everytime
console.dir(document);  // properties of document

console.log(document.body);

let txt = document.getElementById('textfontproperties');
console.log(txt);
console.dir(txt);


let heading3 = document.querySelectorAll(".myClass");
console.log(heading3);


let bdy =  document.querySelector("body");
console.log(bdy.innerText);
console.log(bdy.innerHTML);

console.log(txt.tagName);

// txt.innerText = "Nikhil Agrawal";
//
// txt.innerHTML = "<i>Nikhil Agrawal</i>";

let heading1 = document.querySelector("#Heading1");
console.log(heading1);
heading1.innerText = heading1.innerText + " from Nikhil A";

let heading2 = document.querySelector("h2");
let h2class = heading2.getAttribute("class");
console.log(h2class);

console.log(heading2.getAttribute("name"));

heading2.setAttribute("name", heading2.innerText);

console.log(heading2.getAttribute("name"));

console.log(bdy.style); // will not see any style set in css files

bdy.style.backgroundColor = "pink";

// txt.style.fontSize = "30px";

let button2 = document.createElement("button");
button2.innerText = "Click Me !!";
button2.style.backgroundColor = "red";
button2.style.color = "white";
bdy.prepend(button2);


console.log(heading3[0].classList);
heading3[0].classList.add("newClass");
console.log(heading3[0].classList);






