$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    prompt("Enter a number between 1 and 100!");
      var listItems = [];
      for (var index = 1; index <= 100; index++) {
        if ((i % 3 === 0) && (i % 5 ===0)) {
          return index = "pongpong";
        }
        else if (i % 3 === 0) {
          return index = "ping";
        }
        else if (i % 5 === 0) {
          return index = "pong";
        }
        else {
          return listItems.push(index);
          debugger;
        }
      }
      $("#answer").show();
  });
});
