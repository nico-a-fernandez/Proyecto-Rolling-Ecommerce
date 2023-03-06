const button = document.getElementById("buttonSubmit");
const buttonHome = document.getElementById("button-home");
const password = document.getElementById("password");
const confirm_password = document.getElementById("passwordConfirm");
const password_error = document.getElementById("password_error");
const emailInput = document.getElementById("correo");
const errorMessage = document.getElementById("email_error");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const user = {
    username: document.getElementById("username").value || generarUsername(),
    name: document.getElementById("name").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("correo").value,
    password: document.getElementById("password").value,
  };

  localStorage.setItem("user", JSON.stringify(user));

  window.location = "../index.html";
});

buttonHome.addEventListener("click", function () {
  localStorage.removeItem("userAdmin");
});

// Generar username aleatorio
function generarUsername() {
  return "Invitado#" + Math.random().toString(36).substring(2, 9);
}

// Validar la confirmacion de contraseña
function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Las contraseñas no coinciden");
    password_error.innerHTML = "Las contraseñas no coinciden";
  } else {
    confirm_password.setCustomValidity("");
    password_error.innerHTML = "";
  }
}

password.addEventListener("change", validatePassword);
confirm_password.addEventListener("keyup", validatePassword);

// Validar el correo
emailInput.addEventListener("input", function (event) {
  if (emailInput.validity.typeMismatch) {
    errorMessage.textContent =
      "Por favor ingrese un correo electrónico válido.";
  } else {
    errorMessage.textContent = "";
  }
});
