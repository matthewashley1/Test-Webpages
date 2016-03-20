
function myFunction1() {
  document.getElementById("demo").innerHTML = "Hello User";
}

function myFunction2() {
  var x = document.getElementById("demo2");
  x.style.fontSize = "10px";
  x.style.color = "red";
}

function myFunction3() {
  var x = document.getElementById("demo2");
  x.style.fontSize = "24px";
  x.style.color = "black";
}

function myFunction4() {
  document.getElementById("demo").innerHTML = " ";
}

function myFunction5() {
  document.getElementById("demo1").innerHTML = Date();
}

function myFunction6() {
  document.getElementById("demo1").innerHTML = " ";
}

function myFunction7() {
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo").innerHTML = " ";
  var x = document.getElementById("demo2");
  x.style.fontSize = "24px";
  x.style.color = "black";
}
