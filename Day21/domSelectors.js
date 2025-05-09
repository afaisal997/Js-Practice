// 1;  get element by ID

var a = document.getElementById("p2");

// style
a.style.backgroundColor = "red";
a.style.color = "white";
a.style.fontSize = "30px";

// 2. get element by class name

var b = document.getElementsByClassName("example2");

// style
for (let element of b) {
  element.style.backgroundColor = "blue";
  element.style.color = "white";
  element.style.fontSize = "20px";
}

// 3. get element by tag name

var c = document.getElementsByTagName("div");
// style
for (let element of c) {
  element.style.backgroundColor = "green";
  element.style.color = "white";
  element.style.fontSize = "15px";
}

// 4. get element by queryselector()
var d = document.querySelector("#p1"); //using ID
var e = document.querySelector(".subheading"); //using Class
// style using id
d.style.backgroundColor = "yellow";
d.style.color = "black";
d.style.fontSize = "25px";

// style using Class
e.style.backgroundColor = "pink";
e.style.color = "black";
e.style.fontSize = "35px";

// 5. get elements by querySelectorAll()
var f = document.querySelectorAll("#p3"); //using ID
var g = document.querySelectorAll(".subhead"); //using class
var h = document.querySelectorAll(["#p4", "#p5"]); //using ID for multiple Ids pass it into an array

// style using id
for (let element of f) {
  element.style.backgroundColor = "orange";
  element.style.color = "black";
  element.style.fontSize = "40px";
}
// style using class
for (let element of g) {
  element.style.backgroundColor = "purple";
  element.style.color = "black";
  element.style.fontSize = "25px";
}

// style using ID for multiple Ids pass it into an array
for (let element of h) {
  element.style.backgroundColor = "cyan";
  element.style.fontSize = "22px";
}
