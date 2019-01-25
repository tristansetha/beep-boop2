var beepboop = function(number) {
  var range = [];
  for (var i = 0; i <= number; i++){
    range.push(i);
  };
  return range;
}
// jQuery user interface logic here.
$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = beepboop(number);
    $("#result").text(result);
  });
});
