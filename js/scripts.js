var beepboop = function(number) {
  var range = [];
  for (var i = 0; i <= number; i++){
    range.push(i);
  };
  for (var i = 0; i <= range.length; i++){
    if (i.toString().includes("0")) {
      range.splice([i], 1, "Beep");
    } else if (i.toString().includes("1")){
      range.splice([i], 1, "Boop!")
    } else if (i % 3 === 0 && i !== 0) {
      range.splice([i], 1, "I'm sorry, Dave. I'm afraid I can't do that.")
    }
  }
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
