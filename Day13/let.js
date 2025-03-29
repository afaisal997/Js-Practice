// LET KEYWORD

let name = "Abdullah ";
console.log(name);

function show() {
  name = "Zakiya";
  console.log(name);
  if (true) {
    name = "Faisal";
    console.log(name);
    let lname = "ABDULLAH";
    console.log(lname);
  }
  //   console.log(lname);     It cannot access the lname because it is declared in the above block, we have to access it inside that that block itselft because we're using let keyword
}
console.log(name);
show();
