$(document).ready(function () {
  $(".container1").hide();
  $("#Poniedziałek").click(function () {
    $(".container1").hide();
    $("#1").show();
    $("#2").show();
    $("#3").show();
    $("#4").show();
  });

  $("#Wtorek").click(function () {
    $(".container1").hide();
    $("#brak").show();
  });

  $("#Środa").click(function () {
    $(".container1").hide();
    $("#1").show();
    $("#2").show();
    $("#4").show();
  });

  $("#Czwartek").click(function () {
    $(".container1").hide();
    $("#2").show();
    $("#4").show();
  });

  $("#Piątek").click(function () {
    $(".container1").hide();
    $("#2").show();
    $("#4").show();
  });
});