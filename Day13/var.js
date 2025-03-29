// VAR KEYWORD

var name = "Abdullah ";
console.log(name);

function show() {
  name = "Zakiya";
  console.log(name);
  if (true) {
    name = "Faisal";
    console.log(name);
    var lname = "ABDULLAH";
  }
  console.log(lname);
}
console.log(name);
show();
