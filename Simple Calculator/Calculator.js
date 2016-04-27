
function myFunction1() {

  var operator = document.getElementById("operator").value;
  var x = document.getElementById("value1").value;
  var y = document.getElementById("value2").value;
  var total = 0;

    if (operator == "+") {
      total = ((x * 1) + (y * 1));
      document.getElementById("demo").innerHTML = ("Total:" + " " + total);
    }
    if (operator == "-") {
      total = (x - y);
      document.getElementById("demo").innerHTML = ("Total:" + " " + total);
    }
    if (operator == "/") {
      total = (x / y);
      document.getElementById("demo").innerHTML = ("Total:" + " " + total);
    }
    if (operator == "*") {
      total = (x * y);
      document.getElementById("demo").innerHTML = ("Total:" + " " + total);
    }
    if (operator == "^") {
      document.getElementById("demo").innerHTML = ("Total:" + " " + Math.pow(x, y));
    }
    if (operator == "square root") {
      document.getElementById("demo").innerHTML = ("Total:" + " " + Math.sqrt(x));
    }
    if (operator == "percentage") {
      total = (y * (x / 100));
      document.getElementById("demo").innerHTML = ("Total:" + " " + total);
    }
  }

  function myFunction2() {

    document.getElementById("demo").innerHTML = " ";
  }
