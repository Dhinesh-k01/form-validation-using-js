var nameError = document.getElementById("name-error");
var numberError = document.getElementById("number-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "*Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: #3de600;"></i>';
  return true;
}

function validatePhone() {
  var phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    numberError.innerHTML = "*Phone No is required";
    return false;
  }
  if (phone.length !== 10) {
    numberError.innerHTML = "Phone No should be 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    numberError.innerHTML = "Phone No is required";
  }
  numberError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: #3de600;"></i>';
  return true;
}

function validateEmail() {
  var eMail = document.getElementById("contact-email").value;

  if (eMail.length == 0) {
    emailError.innerHTML = "*Email is required";
    return false;
  }
  if (!eMail.match(/^[A-Za-z\._\-[0-9]*[@][A-Aa-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email invalid";
    return false;
  }
  emailError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: #3de600;"></i>';
  return true;
}

function validateMessage() {
  var message = document.getElementById("contact-message").value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " more characters required";
    return false;
  }
  messageError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: #3de600;"></i>';
  return true;
}

function validateForm() {
  if (!validateName() || !validatePhone || !validateEmail || !validateMessage) {
    submitError.style.display = "block";
    submitError.innerHTML = "*Please fill the form";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
