/*
var changeColor =
$("#color_input").prop("value");
function(event){
$(".square")
targetSquare.css("background-color", desiredColor);
.on("mouseover", changeColor)
var targetSquare =
var desiredColor =
$(event.target)
}
*/

// WRITE YOUR CODE AFTER THIS LINE:

$(".square").on("mouseover", function(){
  $(this).css("background-color", $("#color_input").val());
});
