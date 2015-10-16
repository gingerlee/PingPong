$(document).ready(function() {

  $(".btn").click(function(event) {
    var pinganswer = prompt("Enter a number between 1 and 100!")
  });

  for (var i = 1; i <= 100; i++) {
    var string = '';

    if (i % 3 == 0) {
      string += 'Ping';

      if (i % 5 == 0) {
        string += 'Pong';

      if (string == '') {
      string += i;

    }
  }
});
