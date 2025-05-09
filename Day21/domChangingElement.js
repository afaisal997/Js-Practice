let text1 =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe hic dolore facere. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus.";
let text2 = `Why did the tomato turn red?  
Because it saw the salad dressing!
…And then the lettuce whispered, “*Leaf* him alone, he’s clearly fermented!” 🥗😄`;

let btn = document.getElementById("btn");
let para = document.getElementById("para");

function fun() {
  if (btn.innerHTML == "Change") {
    para.innerHTML = text2;
    btn.innerHTML = "Change Back";
  } else {
    para.innerHTML = text1;
    btn.innerHTML = "Change";
  }
}
