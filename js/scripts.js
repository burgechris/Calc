// Business logic:

  function add(number1, number2) {
    return number1 + number2;
  };

  function subtract(number1, number2) {
    return number1 - number2;
  };

  function multiply(number1, number2) {
    return number1 * number2;
  };

  function divide(number1, number2) {
    return number1 / number2;
  };

// User-interface logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
});
