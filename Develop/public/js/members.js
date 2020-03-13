$(document).ready(function() {
  $('.nav1').css('display', 'inline-block'); //Profile
  $('.nav2').css('display', 'none'); //Register
  $('.nav3').css('display', 'none'); //Login
  $('.nav4').css('display', 'inline-block'); //Logout
  $('.nav5').css('display', 'inline-block'); //Home
  $('.nav6').css('display', 'inline-block'); //Sign in as

  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.first_name + " " + data.last_name);
  });
});