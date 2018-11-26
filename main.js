var calc = true;
while (calc == true) {
  var num1 = prompt("First Number");
  var op = prompt("Enter Operator");
  var num2 = prompt("Second Number");
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  var result;


  if (op == "+") {
    result = num1 + num2;
    alert(result);

  }
  else if (op == "/") {
    result = num1 / num2;
    alert(result);
  }
  else if (op == "*") {

    result = num1 * num2;
    alert(result);
  }
  else if (op == "-") {
    result = num1 - num2;
    alert(result);
  }
}