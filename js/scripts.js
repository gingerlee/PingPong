// Business Logic
var pingPong = function(input) {
  if (isNaN(input) === true || input < 1) {
    return alert("Please enter a number.");
  }
  var pingList = [];
  for (var index = 1; index <= input; index++) {
    if ((index % 3 === 0) && (index % 5 === 0)) {
      pingList.push("pong-pong");
    }
    else if (index % 3 === 0) {
      pingList.push("ping");
    }
    else if (index % 5 === 0) {
      pingList.push("pong");
    }
    else {
      pingList.push(index);
    }
  }
  return pingList;
}

// User-Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input").val());
    var result = pingPong(input);
    $("#answer").show();
    $(".ping-list").append(result + ", ");
  });
});
