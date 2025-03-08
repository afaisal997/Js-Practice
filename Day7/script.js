// Nested if statements

// let amount = 2000;

// if (amount >= 1000) {
//   let age = 18;
//   if (age >= 18) {
//     console.log("lets have party");
//   }
// }

// Nested if else statements

let amount = 2000;
let age = 16;

if (amount >= 2000) {
  if (age >= 18) {
    console.log("Lets have Party In Bar");
  } else {
    console.log("Lets have Coffee in Startbucks");
  }
} else {
  if (amount >= 1000 && amount < 2000) {
    console.log("Lets have Coffee in Cafe Coffee Day");
  } else {
    console.log("Lets have Tea in Tea Stall");
  }
}
