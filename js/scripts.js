$(document).ready(function() {

  $("button").click(function(event) {
    prompt("Enter a number between 1 and 100!");

   var reveal = document.getElementById("reveal");

      var revealItems = "";

      var i;

      for (i = 1; i < 101; i = i + 1) {

        revealItems += "<li>";

        if ((i % 3 === 0) && (i % 5 ===0))
        {
          revealItems += "PongPong";
        }
        else if (i % 3 === 0) {
          revealItems += "Ping";
        }
        else if (i % 5 === 0) {
          revealItems += "Pong";
        }
        else {
          revealItems += i;
        }
        revealItems += "</li>";
      }

      $("#reveal").show(revealItems);

    event.preventDefault();

  });
});
