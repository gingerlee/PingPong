$(document).ready(function() {

  $("button.btn").click(function(event) {
    prompt("Enter a number between 1 and 100!");

      var listItems = "";

      var i;

      for (i = 1; i < 101; i = i + 1) {

        listItems += "<li>";

        if ((i % 3 === 0) && (i % 5 ===0)) {
          listItems += "PongPong";
        }

        else if (i % 3 === 0) {
          listItems += "Ping";
        }

        else if (i % 5 === 0) {
          listItems += "Pong";
        }

        else {
          listItems += i;
        }

        listItems += "</li>";
      }

      $("#answer").show();

    event.preventDefault();

  });
});
