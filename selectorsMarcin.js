$(document).ready(function () {
  $(".container1").hide();
  $("#Poniedziałek").click(function () {
    $(".container1").hide();
    $("#1").show();
    $("#2").show();
  });

  $("#Wtorek").click(function () {
    $(".container1").hide();
    $("#1").show();
    $("#4").show();
  });

  $("#Środa").click(function () {
    $(".container1").hide();
    $("#3").show();
    $("#4").show();
  });

  $("#Czwartek").click(function () {
    $(".container1").hide();
    $("#2").show();
  });

  $("#Piątek").click(function () {
    $(".container1").hide();
    $("#4").show();
  });
});