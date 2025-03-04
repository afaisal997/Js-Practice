// WAP to find Grade of Student
//     marks = 90 to 100 =>A1
//     marks = 80 to 89 =>A2
//     marks = 70 to 79 =>B1
//     marks = 60 to 69 =>B2
//     marks = 50 to 59 =>C
//     marks = 40 to 49 =>D
//     marks < 40 =>F
let marks = Number(prompt("Enter your marks: "));
let grade;
if (marks >= 90 && marks <= 100) {
  grade = "A1";
} else if (marks >= 80 && marks <= 89) {
  grade = "A2";
} else if (marks >= 70 && marks <= 79) {
  grade = "B1";
} else if (marks >= 60 && marks <= 69) {
  grade = "B2";
} else if (marks >= 50 && marks <= 59) {
  grade = "C";
} else if (marks >= 40 && marks <= 49) {
  grade = "D";
} else {
  grade = "F";
}
alert(`Your grade is ${grade}`);
