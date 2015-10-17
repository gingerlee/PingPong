$(document).ready(function() {

  $("button").click(function(event) {
    prompt("Enter a number between 1 and 100!");

   var pingpong = function () {
      var i, list;
      for (i = 1; i <= 101; i += 1) {
        var list = '';

        if (i % 15 == 0) {
          list += 'PongPong'; }

        if (i % 3 == 0) {
          list += 'Ping'; }

        if (i % 5 == 0) {
          list += 'Pong'; }

        if (list == '') {
          list += i; } 

    event.preventDefault();
  });
});
