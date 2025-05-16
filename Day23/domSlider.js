var img1 = [
  "../images/1.jpg",
  "../images/2.jpg",
  "../images/3.jpg",
  "../images/4.jpg",
];

var slider = document.getElementById("slider");
var index = 0;

function prev() {
  if (index == 0) {
    index = img1.length - 1;
  } else {
    index--;
  }
  slider.src = img1[index];
}

function next() {
  if (index == img1.length - 1) {
    index = 0;
  } else {
    index++;
  }
  slider.src = img1[index];
}
var time = setInterval(next, 2000);
