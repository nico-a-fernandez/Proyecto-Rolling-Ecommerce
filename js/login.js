const email = document.getElementById("correo");
const password = document.getElementById("password");
const button = document.getElementById("buttonSubmit");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const data = {
    correo: email.value,
    password: password.value,
  };
});
