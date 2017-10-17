$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus").fadeToggle();
    $("#invisible").toggle();
  });
});
