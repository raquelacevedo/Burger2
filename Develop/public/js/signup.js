$(document).ready(function () {

  $('.nav1').css('display', 'none'); //Profile
  $('.nav2').css('display', 'inline-block'); //Register
  $('.nav3').css('display', 'inline-block'); //Login
  $('.nav4').css('display', 'none'); //Logout
  $('.nav5').css('display', 'none'); //Home
  $('.nav6').css('display', 'none'); //Sign in as
  $('#alert').css('display', 'none');
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var first_nameInput = $("input#first_name-input");
  var last_nameInput = $("input#last_name-input");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      first_name: first_nameInput.val(),
      last_name: last_nameInput.val(),
      email: emailInput.val(),
      password: passwordInput.val()
    };

    if (!userData.first_name || !userData.last_name || !userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.first_name, userData.last_name, userData.email, userData.password);
    first_nameInput.val("");
    last_nameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(first_name, last_name, email, password) {
    $.post("/api/signup", {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password
    })
      .then(function (data) {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr(err));
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(JSON.stringify(err.statusText));
    //$("#alert").fadein(500);
    $('#alert').css('display', 'inline-block');
    setTimeout(function(){ $('#alert').css('display', 'none'); }, 3000);
  }

  var password = document.getElementById("password-input")
    , confirm_password = document.getElementById("confirm_password-input");

  function validatePassword() {
    if (password.value != confirm_password.value) {
      confirm_password.setCustomValidity("The password entered does not match");
    } else {
      confirm_password.setCustomValidity('');
    }
  }

  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;
});