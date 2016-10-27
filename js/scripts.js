var numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

var romanConvert = function(input) {
  var romanNumber = "";
  if (!input || input <= 0 || input >= 4000) {
    alert('enter a positive integer less than 4000');
  }
  else {
    for (var index = 0; index < numerals.length; index++) {
      while (input >= values[index]){
        romanNumber += numerals[index];
        input -= values[index]
      }
    }
    return romanNumber;
  }
}


$(document).ready(function(){
  $("form#romans").submit(function(event){
    var userNumber = parseInt($("#user-input").val());
    var romanNumber = romanConvert(userNumber);
    $("#output").text(romanNumber).show();
    event.preventDefault();
  });
});
