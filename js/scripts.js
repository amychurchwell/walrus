$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus").fadeToggle();
  });

  $(".button").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $(".button2").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
});
