function fun1(event) {
  let element = document.getElementById(event.target.id);
  element.style.backgroundColor = "green";
  element.style.color = "white";

  console.log("Onkeydown event in called");
}
function fun2(event) {
  let element = document.getElementById(event.target.id);
  element.style.backgroundColor = "yellow";
  element.style.color = "black";
  console.log("Onkeyup event in called");
}
function fun3(event) {
  let { id, value } = event.target;
  let element = document.getElementById(`h${id}`);
  element.innerHTML = `<span>${id}</span> :${value}`;
}
function postData(event) {
  event.preventDefault(event);
  alert(`
        Name        :${document.getElementById("name").value}
        Email       :${document.getElementById("email").value}
        Address     :${document.getElementById("address").value}
        `);
}
